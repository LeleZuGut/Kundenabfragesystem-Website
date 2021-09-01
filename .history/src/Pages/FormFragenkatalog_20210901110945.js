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

    const [questionarr, setQuestionarr] = useState([""]);
    const [answerarr, setAnswerarr] = useState([""]);

    const WandernURL = "/fragen/Wandern";
    const SkiURL = "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);
    const [useseitenanzahl, setUseseitenanzahl] = useState(0);

    const showSidebar = () => setSidebar(!sidebar);


    const check_Nummerierung = () => {

        for (var i = 1; i <= questionarr.length; i++) {
            if (questionarr[useseitenanzahl].id == i) {
                var r = document.getElementById(i).style.fontWeight.bold;
                var r = document.getElementById(i).style.color = "blue";


            }
            else {
                var r = document.getElementById(i).style.fontWeight = "normal";
                var r = document.getElementById(i).style.color = "black";


            }



        }

        return r;
    }


    const getData = async () => {

        await axios.get("http://localhost:8080/api/Questions/all"
            , {
                auth: {
                    username: "admin",
                    password: "adminpassword"
                }
            })
            .then(result => {
                setQuestionarr(result.data);

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get("http://localhost:8080/api/Answer/all"
            , {
                auth: {
                    username: "admin",
                    password: "adminpassword"
                }
            })
            .then(result => {
                setAnswerarr(result.data);

            })
            .catch(error => {
                console.log(error)
            })







    }


    if (questionarr == "") {
        getData();




    }
    else {

       

    }




    if (currentURL == WandernURL) {






        const button_weiter = () => {
            if (questionarr.length == questionarr[useseitenanzahl].id + 1) {
                var r = document.getElementById("Wandern_main_button_weiter").style.visibility = "hidden";
                var r1 = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";

                setUseseitenanzahl(useseitenanzahl + 1);




            }
            else {

                var r = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";

                setUseseitenanzahl(useseitenanzahl + 1);



            }

            check_Nummerierung();
            return r, r1;


        }

        const button_zurück = () => {
            if (useseitenanzahl - 1 < 1) {
                var r = document.getElementById("Wandern_main_button_zurück").style.visibility = "hidden";
                var r1 = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";
                setUseseitenanzahl(useseitenanzahl - 1);


            }
            else {
                var r = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";

                setUseseitenanzahl(useseitenanzahl - 1);


            }

            check_Nummerierung();
            return r, r1;

        }

        /*window.onunload = function () {
            check_Nummerierung();
            var r = document.getElementById("Wandern_main_button_zurück").style.visibility = "hidden";
            return r;
        }*/



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

                <div className="liste_seitennummerierung" >

                    {questionarr.map((usear, index) =>
                    (
                        <div key={index}>
                            <div>

                                <span onChange = {check_Nummerierung} id={usear.id}>{usear.id}</span>



                            </div>
                        </div>
                    )
                    )}
                </div>

                <div className="Wandern_main_Strich">
                    <h1 className="Wandern_main_heading">{questionarr[useseitenanzahl].question}</h1>


                </div>

                <div className="Wandern_main_Answer">


                </div>





                <div className="Fragen-Selection">



                    <div className="Wandern_main_button_z">
                        <button className="Wandern_main_button_zurück" onClick={button_zurück} id="Wandern_main_button_zurück">
                            <HiIcons.HiArrowCircleLeft className="Wandern_main_button_icon_zurück"></HiIcons.HiArrowCircleLeft>
                            Bergab


                        </button>

                    </div>
                    <div className="Wandern_main_button">
                        <button className="Wandern_main_button_weiter" onClick={button_weiter} id="Wandern_main_button_weiter">
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


