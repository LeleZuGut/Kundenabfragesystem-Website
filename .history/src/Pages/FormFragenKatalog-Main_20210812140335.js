import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import '../FormFragenKatalog-Main.css';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

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
          </ul>
        </nav>
      </IconContext.Provider>

      <div className="Main-Fragen-Heading">
        <h1>Herzlich willkommen in deinem Basecamp</h1>
        <p>Bitte wähle eine Kategorie</p>
        <div className="Main-Fragen-Img">
          <FaIcons.FaHiking className="Wandern-Img" onClick={() => history.push("/fragen")} />
          
          <FaIcons.FaSkiingNordic className="Ski-Img" onClick=""  />
          <FaIcons.FaMountain className="Klettern-Img" onClick="" />

        </div>
      </div>

      <div className="main_logo">
        <img className='logobild' src={Logo_MainPage} alt='' />

      </div>





    </>

  );
}

export default Navbar;