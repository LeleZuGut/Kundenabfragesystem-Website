import React, { useState, useEffect, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';
import '../Styles/FormFragenkatalog.css';
import axios from 'axios';
import { Switch } from '@material-ui/core';
import AuthenticatedContext from '../Contexts/AuthenticatedContext';
import Cookies from 'js-cookie'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const FormFragenKatalog = () => {

    const [questionarr, setQuestionarr] = useState([""]);
    const [answerarr, setAnswerarr] = useState([""]);
    const [answmulti, setanswmulti] = useState([]);
    const [answfrei, setanswfrei] = useState([]);
    const [answsingle, setanswsingle] = useState([]);
    const [checked, setchecked] = useState([]);
    const WandernURL = "/fragen/Wandern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);
    const [useseitenanzahl, setUseseitenanzahl] = useState(0);
    const [daten, setdaten] = useState("");
    const [status, setstatus] = useState();
    const [endresult, setendresult] = useState([]);
    const { setisAuthenticated } = useContext(AuthenticatedContext);
    let result = [];
    const map1 = new Map();

    

    const showSidebar = () => setSidebar(!sidebar);
    let singleresult = {
        FkCustomerId: "",
        FkQuestionId: "",
        FkAnswerId: "",
        AText: ""

    }

    useEffect(() => {
        handleCookies()
    }, []);



    const handleCookies = () => {
        const user = Cookies.get("user");
        if (user) {
            setisAuthenticated(true);
        }
        else {
            setisAuthenticated(false);
        }
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        antworten_sort()
    }, [answerarr])

    useEffect(() => {
        antworten_sort()
    }, [useseitenanzahl])







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
                result.data.forEach(element => {
                    map1.set(element.id, "");
                });

            })
            .catch(error => {
                console.log(error)
            })


    }



    const handleSwitchSpeichern = () => {
        for (let i = 0; i < answerarr.length; i++) {

            if (answerarr[i].fkQuestionId == questionarr[useseitenanzahl].id - 1) {
                if (answerarr[i].typ == 1) {
                    if (endresult.length !== 0) {

                        for (let i = 0; i < endresult.length; i++) {
                            var r = document.getElementsById(endresult[i].AText).checked = true;


                        }

                    }
                    else {
                        console.log("nd drin");



                    }

                }
            }
        }

        return r;
    }

    const handleSwitchChange = (index, checkstatus, item, answerid) => {
        const user = Cookies.get("user");


        if (checkstatus == true) {



            result.push({
                "AText": item,
                "FkAnswerId": answerid,
                "FkQuestionId": questionarr[useseitenanzahl].id,
                "FkCustomerId": user

            });
        }
        else {

            result.pop(index);
        }

        setendresult(result);
    }

    const antworten_sort = () => {

        for (let i = 0; i < answerarr.length; i++) {

            if (answerarr[i].fkQuestionId == questionarr[useseitenanzahl].id) {
                if (answerarr[i].typ == 3) {
                    setanswfrei(<div className="Wandern_main_Answer">
                        <textarea
                            className="Wandern_main_Answer_textarea"
                            id="Wandern_Freitext"
                            type="textarea"
                            rows="15"
                            cols="160"
                            onChange={event => setdaten(event.target.value)} />


                    </div>
                    )
                    setanswmulti();
                    setanswsingle();
                    console.log("Freitext");



                }
                else if (answerarr[i].typ == 2) {
                    const singleantw = answerarr[i].answers.split(";");

                    setanswsingle(<div className="Wandern_main_Single">
                        <Autocomplete
                            options={singleantw}
                            className="Wandern_main_combobox"
                            renderInput={(params) =>
                                <TextField {...params} label="auswählen" variant="outlined" />}
                        />
                    </div>)
                    setanswmulti();
                    setanswfrei();
                    console.log("single choice");

                }
                else if (answerarr[i].typ == 1) {
                    setanswfrei();
                    setanswsingle();


                    setanswmulti(answerarr[i].answers.split(";").map((item, index) =>

                        <div key={index} className="Wandern_Switch_Antworten">
                            <label className="Wandern_Label" key={index} >

                                <Switch îd={item} name={item} onChange={(e) => { handleSwitchChange({ index }, e.target.checked, { item }, answerarr[i].id) }}
                                />


                                {item}

                            </label>

                        </div>

                    ))

                    console.log("multiplechoice");
                }

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
            setstatus(true);
            antworten_sort();


            return r, r1;

        }

        const button_zurück = () => {

            console.log(endresult);

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
            handleSwitchSpeichern();

            return r, r1;

        }

        const button_fertig = () => {

        }

        window.onchange = check_Nummerierung();

        const handleLogout = () => {
            Cookies.remove("user");
            setisAuthenticated(false);


        }


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
                                <li className="nav-text">
                                    <Link to="/" onClick={() => handleLogout()}>
                                        <BiIcons.BiLogOut />
                                        <span >Abmelden</span>
                                    </Link>
                                </li>

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
                    {answmulti}
                    {answsingle}
                    {answfrei}



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


