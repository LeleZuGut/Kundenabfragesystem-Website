import React from 'react';
import { useParams } from 'react-router';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';




const FormFragenKatalog = () => {
    const WandernURL = "/fragen/Wandern";
    const SkiURL = "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    if (currentURL == WandernURL) {

      

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



            </div>
        );

    } else if (currentURL == SkiURL) {

        return (
            <div>
                <h1>Ski is geil</h1>
            </div>
        );
    } else if (currentURL == KletternURL) {
        return (
            <div>
                <h1>Klettern is geil</h1>
            </div>
        );
    }


}

export default FormFragenKatalog;


