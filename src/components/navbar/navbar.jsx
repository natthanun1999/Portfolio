import './navbar.scss'
import { Person, Mail } from '@material-ui/icons'

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Dev</a>
          <div className="item-container">
            <Person />
            <span>+66 63 313 2605</span>
          </div>
          <div className="item-container">
            <Mail />
            <span>natthanun.thanomrod@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Navbar
