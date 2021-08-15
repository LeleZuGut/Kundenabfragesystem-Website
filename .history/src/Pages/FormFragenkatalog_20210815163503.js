import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import Logo_MainPage from '../Images/Main-FragenPageLogo.PNG';
import '../Styles/FormFragenkatalog.css';





const FormFragenKatalog = () => {
    const WandernURL = "/fragen/Wandern";
    const SkiURL = "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL = window.location.pathname;
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const Wquestions = [
        {
            questionText: "Wie erfahren Sind Sie beim wandern?",
            answerOptions:[
                {answerText: "Anfänger"},
                {answerText: "Fortgeschritten"},
                {answerText: "Profi"},

            ],
        },

        {
            questionText: "Welche Schuhgröße haben Sie?",
            answerOptions:[
                {answerText: "40"},
                {answerText: "41"},
                {answerText: "42"},

            ],
        },

    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () =>{
        const nextquestion = currentQuestion + 1;
        setCurrentQuestion(nextquestion);
    }
    

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

                <div className="Wandern_main_Strich">
                    <div className = "Fragen-Selection">

                    
                    <h1 className="Wandern_main_heading">{Wquestions[currentQuestion].questionText}</h1>

                    <button className="Wandern_main_button_weiter">
                        Bergauf
                        <br></br>
                        
                        <span className="Wandern_main_button_weiter_span"></span>
                        <HiIcons.HiArrowCircleRight className="Wandern_main_button_weiter_icon"></HiIcons.HiArrowCircleRight>
                    </button>

                    </div>
                </div>

                <div className="Wandern_main_logo">
                    <img className='logobild' src={Logo_MainPage} alt='' />

                </div>
            </>



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

