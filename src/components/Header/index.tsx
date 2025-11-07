import "./index.scss"
import Nav from "./Nav"
import { Button } from "../Button"

export default function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__content">
        <h1 className="header__logo" title="ReciclaTech">ReciclaTech</h1>
        <div className="header__navbutton">
          <Nav />
          <Button
            cta="Começar Agora"
            className="button--1"
            url="https://github.com/romulorosafullstack/2025-vainaweb-reciclatech"
          />
        </div>
      </div>
    </header>
  )
}