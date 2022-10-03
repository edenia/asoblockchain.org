include utils/meta.mk

LATEST_TAG ?= latest

install: ##@local Install all dependencies
install:
	@yarn

clean-install: ##@local Reinstalls all dependencies
clean-install:
	@rm -Rf node_modules
	@yarn

run: ##@local Run the project locally (without docker)
run: node_modules
	@echo "DOCKER WEBAPP RUN"
	@$(SHELL_EXPORT) yarn run dev

build-docker: ##@devops Build the docker image
build-docker: ./Dockerfile
	@echo "DOCKER WEBAPP"
	echo "Building containers..."
	@docker pull $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG) || true
	@docker build \
		--build-arg RE_CAPTCHA_PROJECT_ID="$(RE_CAPTCHA_PROJECT_ID)" \
		--build-arg NEXT_PUBLIC_RE_CAPTCHA_KEY="$(NEXT_PUBLIC_RE_CAPTCHA_KEY)" \
		--build-arg NEXT_PUBLIC_GA_TRACKING_CODE="$(NEXT_PUBLIC_GA_TRACKING_CODE)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_PORTAL_ID="$(NEXT_PUBLIC_HUBSPOT_PORTAL_ID)" \
		--build-arg GOOGLE_APPLICATION_CREDENTIALS="$(GOOGLE_APPLICATION_CREDENTIALS)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_CONTACT_EN_FORM="$(NEXT_PUBLIC_HUBSPOT_CONTACT_EN_FORM)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_CONTACT_ES_FORM="$(NEXT_PUBLIC_HUBSPOT_CONTACT_ES_FORM)" \
		--build-arg PAYMENT_LINK_API_KEY="$(PAYMENT_LINK_API_KEY)" \
		--build-arg PAYMENT_LINK_USERNAME="$(PAYMENT_LINK_USERNAME)" \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(VERSION) --target runner \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG) --target runner \
		.

pull-image: ##@devops Pull the latest image from registry for caching
pull-image:
	@docker pull $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG) || true

build-docker-cached: ##@devops Build the docker image using cached layers
build-docker-cached: ./Dockerfile
	@docker build \
		--target runner \
		--cache-from $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG) \
		--build-arg RE_CAPTCHA_PROJECT_ID="$(RE_CAPTCHA_PROJECT_ID)" \
		--build-arg NEXT_PUBLIC_RE_CAPTCHA_KEY="$(NEXT_PUBLIC_RE_CAPTCHA_KEY)" \
		--build-arg NEXT_PUBLIC_GA_TRACKING_CODE="$(NEXT_PUBLIC_GA_TRACKING_CODE)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_PORTAL_ID="$(NEXT_PUBLIC_HUBSPOT_PORTAL_ID)" \
		--build-arg GOOGLE_APPLICATION_CREDENTIALS="$(GOOGLE_APPLICATION_CREDENTIALS)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_CONTACT_EN_FORM="$(NEXT_PUBLIC_HUBSPOT_CONTACT_EN_FORM)" \
		--build-arg NEXT_PUBLIC_HUBSPOT_CONTACT_ES_FORM="$(NEXT_PUBLIC_HUBSPOT_CONTACT_ES_FORM)" \
		--build-arg PAYMENT_LINK_API_KEY="$(PAYMENT_LINK_API_KEY)" \
		--build-arg PAYMENT_LINK_USERNAME="$(PAYMENT_LINK_USERNAME)" \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(VERSION) \
		-t $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG) \
		.

push-image: ##@devops Push the freshly built image and tag with release or latest tag
push-image:
	@docker push $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(VERSION)
	@docker push $(DOCKER_REGISTRY)/$(IMAGE_NAME):$(LATEST_TAG)

build-kubernetes: ##@devops Generate proper k8s files based on the templates
build-kubernetes: ./k8s
	@rm -Rf $(K8S_BUILD_DIR) && mkdir -p $(K8S_BUILD_DIR)
	@for file in $(K8S_FILES); do \
		mkdir -p `dirname "$(K8S_BUILD_DIR)/$$file"`; \
		$(SHELL_EXPORT) envsubst <./k8s/$$file >$(K8S_BUILD_DIR)/$$file; \
	done

deploy-kubernetes: ##@devops Publish the build k8s files
deploy-kubernetes: $(K8S_BUILD_DIR)
	@kubectl create secret tls \
		tls-secret \
		--key ./ssl/asoblockchain.priv.key \
		--cert ./ssl/asoblockchain.crt \
		-n asoblockchain || echo "SSL cert already configured.";
	@for file in $(shell find $(K8S_BUILD_DIR) -name '*.yml' | sed 's:$(K8S_BUILD_DIR)/::g'); do \
		kubectl apply -n asoblockchain -f $(K8S_BUILD_DIR)/$$file; \
	done
