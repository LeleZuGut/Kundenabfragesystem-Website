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
            answerOptions: [
                { answerText: "Anfänger" },
                { answerText: "Fortgeschritten" },
                { answerText: "Profi" },

            ],
        },

        {
            questionText: "Welche Schuhgröße haben Sie?",
            answerOptions: [
                { answerText: "40" },
                { answerText: "41" },
                { answerText: "42" },

            ],
        },

    ];

    const Squestions = [
        {
            questionText: "Wie erfahren Sind Sie beim Ski?",
            answerOptions: [
                { answerText: "Anfänger" },
                { answerText: "Fortgeschritten" },
                { answerText: "Profi" },

            ],
        },

        {
            questionText: "Welche Schuhgröße haben Sie?",
            answerOptions: [
                { answerText: "40" },
                { answerText: "41" },
                { answerText: "42" },

            ],
        },

    ];
    const Kquestions = [
        {
            questionText: "Wie erfahren Sind Sie beim Klettern?",
            answerOptions: [
                { answerText: "Anfänger" },
                { answerText: "Fortgeschritten" },
                { answerText: "Profi" },

            ],
        },

        {
            questionText: "Welche Schuhgröße haben Sie?",
            answerOptions: [
                { answerText: "40" },
                { answerText: "41" },
                { answerText: "42" },

            ],
        },

    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () => {
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

                <div className="Fragen-Selection">
                    <div className="Wandern_main_Strich">



                        <h1 className="Wandern_main_heading">{Wquestions[currentQuestion].questionText}</h1>

                    </div>


                    <div className="Wandern_main_button">
                        <button className="Wandern_main_button_weiter">
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

                <div className="Fragen-Selection">
                    <div className="Ski_main_Strich">



                        <h1 className="Ski_main_heading">{Squestions[currentQuestion].questionText}</h1>

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


                <div className="Fragen-Selection">
                    <div className="Klettern_main_Strich">



                        <h1 className="Klettern_main_heading">{Squestions[currentQuestion].questionText}</h1>

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


