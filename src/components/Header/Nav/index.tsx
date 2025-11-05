import "./index.scss"
export default function Nav() {
  return (
    <nav className="nav__wrapper">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#como-funciona">Como Funciona</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#doar">Doar</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#adquirir">Adquirir</a>
        </li>
      </ul>
    </nav>
  )
}