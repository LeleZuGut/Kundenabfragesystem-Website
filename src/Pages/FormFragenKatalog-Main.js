import React, { useState, useEffect, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../Styles/FormFragenKatalog-Main.css';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';
import Logo_Fusszeile from '../Images/Logo-Fußzeile.png';

import AuthenticatedContext from '../Contexts/AuthenticatedContext';
import LoginContext from '../Contexts/LoginContext';
import { useCookies, withCookies } from 'react-cookie';
import FormFragenKatalog from './FormFragenkatalog';
import Logo_Bergauf from '../Images/Logo-Button-Bergauf.png';

import Cookies from 'js-cookie'




function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const { setisAuthenticated } = useContext(AuthenticatedContext);


  const showSidebar = () => setSidebar(!sidebar);
  const { realuser } = useContext(LoginContext);
  const{isAuthenticated} = useContext(AuthenticatedContext);


  
  useEffect(() => {
    if (isAuthenticated) {
      handleReload()
    }
  }, [isAuthenticated])
  

  const handleLogout = () => {
    Cookies.remove("user");
    setisAuthenticated(false);


  }
  
  const handleReload = () =>{

    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }



  




  


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <li className="nav-text">
              <Link to="/" onClick={() => handleLogout()}>
                <BiIcons.BiLogOut />
                <span >Abmelden</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>

      <div className="Main-Fragen-Heading">
        <h1>Herzlich willkommen in deinem Basecamp</h1>
        <p>Bitte wähle eine Kategorie</p>
      </div>

      <div className="Main-Fragen-Img">
        <FaIcons.FaHiking className="Wandern-Img" onClick={() => history.push("/fragen/Wandern")} />

        <FaIcons.FaSkiingNordic className="Ski-Img" onClick={() => history.push("/fragen/Ski")} />
        <FaIcons.FaMountain className="Klettern-Img" onClick={() => history.push("/fragen/Klettern")} />






      </div>

      <div className="main_logo">
        <img className='logobild' src={Logo_Fusszeile} alt='' />

      </div>





    </>

  );
}

export default Navbar;