import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';
import '../Styles/FormFragenkatalog.css';
import axios from 'axios';





const FormFragenKatalog = () => {

    const [userarr, setUserarr] = useState([""]);
    const WandernURL = "/fragen/Wandern";
    const SkiURL = "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);
    const [useseitenanzahl, setUseseitenanzahl] = useState(0);

    const showSidebar = () => setSidebar(!sidebar);





    const getData = async () => {

        let response = await axios.get("http://localhost:8080/api/Questions/all")
            .then(result => {
                setUserarr(result.data);

            })
            .catch(error => {
                console.log(error)
            })

    }




    if (currentURL == WandernURL) {

        if (userarr == "") {
            getData();


        }
        else {

        }
        function SeitenanzahlDesign() {
            var c = document.getElementById(useseitenanzahl + 1).style.font;

            return c;
        }
        const button_weiter = () => {
            setUseseitenanzahl(useseitenanzahl + 1);
            SeitenanzahlDesign()
        }

        const button_zurück = () => {
            setUseseitenanzahl(useseitenanzahl - 1);
            SeitenanzahlDesign();

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
                        </ul>
                    </nav>
                </IconContext.Provider>

                <div className="liste_seitennummerierung">

                    {userarr.map((usear, index) =>
                    (
                        <div key={index}>
                            <div>

                                <span id={index + 1}>{index + 1}</span>



                            </div>
                        </div>
                    )
                    )}
                </div>

                <div className="Wandern_main_Strich">
                    <h1 className="Wandern_main_heading">{userarr[useseitenanzahl].question}</h1>
                </div>





                <div className="Fragen-Selection">



                    <div className="Wandern_main_button_z">
                        <button className="Wandern_main_button_zurück" onClick={button_zurück}>
                            <HiIcons.HiArrowCircleLeft className="Wandern_main_button_icon_zurück"></HiIcons.HiArrowCircleLeft>
                            Bergab


                        </button>

                    </div>
                    <div className="Wandern_main_button">
                        <button className="Wandern_main_button_weiter" onClick={button_weiter}>
                            Bergauf
                            <HiIcons.HiArrowCircleRight className="Wandern_main_button_icon"></HiIcons.HiArrowCircleRight>


                        </button>
                    </div>


                </div>




                <div className="Wandern_main_logo">
                    <img className='Wandern_main_logobild' src={Logo_MainPage} alt='' />

                </div>
            </>



        );

    } else if (currentURL == SkiURL) {

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

                <div className="Ski_main_Strich">



                    <h1 className="Ski_main_heading"></h1>

                </div>

                <div className="Ski_Fragen-Selection">



                    <div className="Ski_main_button_z">
                        <button className="Ski_main_button_zurück">
                            <HiIcons.HiArrowCircleLeft className="Ski_main_button_icon_zurück"></HiIcons.HiArrowCircleLeft>

                            Bergab


                        </button>

                    </div>
                    <div className="Ski_main_button">
                        <button className="Ski_main_button_weiter">
                            Bergauf
                            <HiIcons.HiArrowCircleRight className="Ski_main_button_icon"></HiIcons.HiArrowCircleRight>


                        </button>
                    </div>


                </div>


                <div className="Ski_main_logo">
                    <img className='Ski_main_logobild' src={Logo_MainPage} alt='' />

                </div>


            </>
        );
    } else if (currentURL == KletternURL) {
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


                <div className="Klettern_main_Strich">



                    <h1 className="Klettern_main_heading"></h1>

                </div>

                <div className="Klettern_Fragen-Selection">



                    <div className="Klettern_main_button_z">
                        <button className="Klettern_main_button_zurück">
                            <HiIcons.HiArrowCircleLeft className="Klettern_main_button_icon_zurück"></HiIcons.HiArrowCircleLeft>
                            Bergab


                        </button>

                    </div>
                    <div className="Klettern_main_button">
                        <button className="Klettern_main_button_weiter">
                            Bergauf
                            <HiIcons.HiArrowCircleRight className="Klettern_main_button_icon"></HiIcons.HiArrowCircleRight>


                        </button>
                    </div>


                </div>


                <div className="Klettern_main_logo">
                    <img className='Klettern_main_logobild' src={Logo_MainPage} alt='' />

                </div>


            </>
        );
    }


}

export default FormFragenKatalog;


