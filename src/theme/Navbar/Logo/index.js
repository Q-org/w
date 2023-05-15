import * as  React from 'react';
import Logo from '@theme/Logo';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useEffect } from 'react';

const renderlogo = props => {

  let dlog = document.querySelector('.navbar__logo')

  let { alt = "微微 项目 Logo", src = "img/logo.svg" } = props

  console.log('renderlogo 3', dlog)

}

export default function NavbarLogo() {
  /*   console.log('1 --- navbar ') */

  const [log, setLog] = React.useState({
    "alt": "微微 项目 Logo",
    "src": "img/logo.svg"
  })

  useEffect(() => {
    console.log('navbar2', Logo)
    renderlogo(log)
  }, [log])

  return (
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
      {...log}
    />
  );
}
