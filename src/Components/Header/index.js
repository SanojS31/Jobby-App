import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <div className="nav-content">
        <div className="nav-bar-mobile-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-bar-logo"
            />
          </Link>
          <ul className="nav-menu-mobile-container">
            <li className="nav-menu-mobile-item">
              <Link to="/">
                <button className="nav-mobile-button">
                  <AiFillHome className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-menu-mobile-item">
              <Link to="/jobs">
                <button className="nav-mobile-button">
                  <BsBriefcaseFill className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-menu-mobile-item">
              <button className="nav-mobile-button">
                <FiLogOut className="nav-mobile-icon" onClick={onLogout} />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-bar-larger-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-bar-logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
