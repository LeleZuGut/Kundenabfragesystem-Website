import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';


import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';
import '../Styles/FormFragenkatalog.css';
import axios from 'axios';
import Switch from "react-switch";




const FormFragenKatalog = () => {

    const [questionarr, setQuestionarr] = useState([""]);
    const [answerarr, setAnswerarr] = useState([""]);

    const [checked, setchecked] = useState(false);
    const[answmulti, setanswmulti] = useState([]);
    const WandernURL = "/fragen/Wandern";
    const SkiURL = "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);
    const [useseitenanzahl, setUseseitenanzahl] = useState(0);
    const [daten, setdaten] = useState("");


    const showSidebar = () => setSidebar(!sidebar);


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        antworten_sort()
    }, [questionarr,answerarr])


   

    


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

    const antworten_sort = () => {

        for (let index = 0; index < answerarr.length; index++) {

            if (answerarr[index].fkQuestionId == questionarr[useseitenanzahl].id) {
                if (answerarr[index].typ == 3) {
                    var r1 = document.getElementById("Wandern_Freitext").style.visibility = "visible";

                    console.log("Freitext");



                }
                else if (answerarr[index].typ == 2) {
                    var r1 = document.getElementById("Wandern_Freitext").style.visibility = "hidden";
                    console.log("single choice");

                }
                else if (answerarr[index].typ == 1) {
                    var r1 = document.getElementById("Wandern_Freitext").style.visibility = "hidden";

                    
                       
                        setanswmulti (answerarr[index].answers.split(";").map((item, index) => 

                            <div>
                                <Switch ></Switch>
                                <label key={index} >
                                    {item}
                                </label>

                            </div>

                        ))
                    

                    console.log("multiplechoice");
                }
                return r1;
            }
            else {

            }

        }
    }

    
    const check_Nummerierung = () => {

        for (let i = 1; i <= questionarr.length; i++) {

            if (document.getElementById(i) == null) {

            }
            else {

                if (questionarr[useseitenanzahl].id == i) {
                    var r = document.getElementById(i).style.fontWeight.bold;
                    var r = document.getElementById(i).style.color = "blue";

                }
                else {
                    var r = document.getElementById(i).style.fontWeight = "normal";
                    var r = document.getElementById(i).style.color = "black";

                }
            }

        }
        return r;
    }

    if (currentURL == WandernURL) {


        const button_weiter = () => {
            if (questionarr.length == questionarr[useseitenanzahl].id + 1) {
                var r = document.getElementById("Wandern_main_button_weiter").style.visibility = "hidden";
                var r1 = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_fertig").style.visibility = "visible";


                setUseseitenanzahl(useseitenanzahl + 1);

            }
            else {

                var r = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";

                setUseseitenanzahl(useseitenanzahl + 1);
            }

            check_Nummerierung();
            antworten_sort();

            var l = document.getElementById("Wandern_Freitext").value = "";

            return r, r1, l;

        }

        const button_zurück = () => {
            if (useseitenanzahl - 1 < 1) {
                var r = document.getElementById("Wandern_main_button_zurück").style.visibility = "hidden";
                var r1 = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_fertig").style.visibility = "hidden";

                setUseseitenanzahl(useseitenanzahl - 1);

            }
            else {
                var r = document.getElementById("Wandern_main_button_zurück").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_weiter").style.visibility = "visible";
                var r1 = document.getElementById("Wandern_main_button_fertig").style.visibility = "hidden";


                setUseseitenanzahl(useseitenanzahl - 1);

            }

            check_Nummerierung();
            antworten_sort();
            var l = document.getElementById("Wandern_Freitext").value = "";

            return r, r1, l;

        }

        const button_fertig = () => {

        }

        window.onchange=check_Nummerierung();


        

        return (
            questionarr.length != 1 && answerarr.length != 1 ?

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
                                    <span id={usear.id}>{usear.id}</span>

                                </div>
                            </div>
                        )
                        )}
                    </div>

                    <div className="Wandern_main_Strich">
                        <h1 className="Wandern_main_heading">{questionarr[useseitenanzahl].question}</h1>
                    </div>

                    <div className="Wandern_main_Answer">
                        <textarea
                            className="Wandern_main_Answer_textarea"
                            id="Wandern_Freitext"
                            type="textarea"
                            rows="15"
                            cols="160"
                            style={{ visibility: "hidden" }}
                            onChange={event => setdaten(event.target.value)} />

                        {answmulti}
                    </div>

                    <div className="Fragen-Selection">



                        <div className="Wandern_main_button_z">
                            <button className="Wandern_main_button_zurück" onClick={button_zurück} id="Wandern_main_button_zurück" style={{ visibility: "hidden" }}>
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

                        <div className="Wandern_main_button_f">
                            <button className="Wandern_main_button_fertig" onClick={button_fertig} id="Wandern_main_button_fertig" style={{ visibility: "hidden" }}>
                                Fertig
                                <HiIcons.HiArrowCircleRight className="Wandern_main_button_icon"></HiIcons.HiArrowCircleRight>


                            </button>
                        </div>

                    </div>

                    <div className="Wandern_main_logo">
                        <img className='Wandern_main_logobild' src={Logo_MainPage} alt='' />

                    </div>


                </>

                : <p>Loading...</p>

        );


    }




}

export default FormFragenKatalog;


