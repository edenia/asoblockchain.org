import React, { useState } from 'react'
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Drawer,
  IconButton,
  List,
  Link
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import { CustomListItem } from 'components'
import { useSizes } from 'hooks'
import { Icons } from 'components/CustomListItem'
import HeaderLogo from '/public/logos/asoblockchain-logo.svg'

import useStyles from './styles'
import { default as routes } from './routes.json'

const { mainRoutes } = routes

type LangItemProps = {
  label: string
  handleClick?(): void
  classN: string
}

const LangItem: React.FC<LangItemProps> = ({ label, handleClick, classN }) => {
  const classes = useStyles()

  return (
    <Box className={classes.langItemBox} onClick={handleClick}>
      <Typography
        variant='subtitle1'
        className={clsx(classN, classes.languageIndicator)}
      >
        {label}
      </Typography>
    </Box>
  )
}

type HeaderProps = {
  show: boolean
}

const Header: React.FC<HeaderProps> = ({ show }) => {
  const classes = useStyles()
  const { lgUp } = useSizes()
  const router = useRouter()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { pathname, asPath, query } = router

  const handlerDrawer = () => {
    setIsOpen(!isOpen)
  }

  const translateSite = (language: string) => {
    router.push({ pathname, query }, asPath, {
      locale: language
    })
  }

  return (
    <AppBar
      className={clsx({ [classes.appBar]: lgUp && show })}
      color='transparent'
    >
      <Toolbar
        className={clsx(
          {
            [classes.drawerPaper]: lgUp && show,
            [classes.hideDrawerPaper]: lgUp && !show,
            [classes.topBarMobileStyle]: !lgUp && show,
            [classes.hideTopBar]: !lgUp && !show
          },
          classes.topBarStyle
        )}
      >
        <Box
          display='flex'
          flex={1}
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          className={classes.paddingHeader}
        >
          {lgUp
            ? show && (
                <>
                  <Link className={classes.logo} href='/'>
                    <Image src={HeaderLogo} alt={t('headerLogo')} priority />
                  </Link>

                  <Box display='flex'>
                    {mainRoutes.map(route => {
                      return (
                        <Link key={route.id} href={route.path}>
                          <Typography variant='subtitle1' component='div'>
                            <Box
                              color='primary.dark'
                              className={clsx('text', {
                                ['linkActive']: asPath === route.path
                              })}
                              mx={5}
                            >
                              {t(route.name)}
                            </Box>
                          </Typography>
                        </Link>
                      )
                    })}
                    <Box display='flex' px={4}>
                      <LangItem
                        label='EN'
                        handleClick={() => translateSite('en')}
                        classN={
                          router.locale === 'en'
                            ? classes.langItemActive
                            : classes.langItem
                        }
                      />
                      <Typography
                        variant='body1'
                        className={clsx(
                          classes.languageIndicator,
                          classes.padding
                        )}
                      >
                        |
                      </Typography>
                      <LangItem
                        label='ES'
                        handleClick={() => translateSite('es')}
                        classN={
                          router.locale === 'en'
                            ? classes.langItem
                            : classes.langItemActive
                        }
                      />
                    </Box>
                  </Box>
                </>
              )
            : show && (
                <>
                  <Box className={classes.btnDrawer}>
                    <IconButton onClick={handlerDrawer}>
                      <MenuIcon
                        fontSize='large'
                        className={classes.menuIconColor}
                      />
                    </IconButton>
                  </Box>
                  <Drawer
                    className={classes.drawer}
                    anchor={'right'}
                    open={isOpen}
                    onClose={handlerDrawer}
                  >
                    <Box className={classes.drawerContent}>
                      <List>
                        <Box className={classes.logoBox}>
                          <Image
                            src={HeaderLogo}
                            alt={t('headerLogo')}
                            priority
                          />
                        </Box>
                        <Box className={classes.linkGruopBox}>
                          {mainRoutes.slice(0, 2).map(route => (
                            <Box key={route.id}>
                              <CustomListItem
                                href={route.path}
                                target='_self'
                                label={t(`${route.name}`)}
                                iconName={route.name as keyof Icons}
                                isSelected={asPath === route.path}
                              />
                            </Box>
                          ))}
                        </Box>
                        <Box className={classes.linkGruopBox}>
                          <Typography
                            variant='body1'
                            className={classes.linkGruopLabel}
                          >
                            {t('information')}
                          </Typography>
                          {mainRoutes.slice(2).map(route => (
                            <Box key={route.id}>
                              <CustomListItem
                                href={route.path}
                                target='_self'
                                label={t(`${route.name}`)}
                                iconName={route.name as keyof Icons}
                                isSelected={asPath === route.path}
                              />
                            </Box>
                          ))}
                        </Box>
                        <Box className={classes.linkGruopBox}>
                          <Typography
                            variant='body1'
                            className={classes.linkGruopLabel}
                          >
                            {t('language')}
                          </Typography>
                          <CustomListItem
                            onClick={() =>
                              translateSite(
                                t('idiom') === 'Español' ? 'es' : 'en'
                              )
                            }
                            label={t('idiom')}
                            iconName={'language'}
                            isSelected={false}
                          />
                        </Box>
                      </List>
                    </Box>
                  </Drawer>
                </>
              )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
