import { useRef, useState } from 'react'

import Header from './Header'
import Container from './Container'
import Footer from './Footer'

import Styles from './styles'

const useStyles = Styles

type LayoutProps = {
  children: JSX.Element
  isDarkTheme: boolean
  toggleThemeType(): void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isDarkTheme,
  toggleThemeType
}) => {
  const classes = useStyles()
  const wrapper = useRef<HTMLInputElement>(null)
  const [showNavbar, setShowNavbar] = useState(false)

  const scrolling = () => {
    if (typeof window === 'undefined') return
    const currentScroll = wrapper?.current?.scrollTop || 0
    if (currentScroll > window?.innerHeight / 3.6) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }

  const scrollTop = () => {
    wrapper.current?.scrollTo(0, 0)
  }

  return (
    <div ref={wrapper} className={classes.wrapperClass} onScroll={scrolling}>
      <Header show={showNavbar} />
      <Container>{children}</Container>
      <Footer
        isDarkTheme={isDarkTheme}
        scrollTop={scrollTop}
        toggleThemeType={toggleThemeType}
      />
    </div>
  )
}

export default Layout
