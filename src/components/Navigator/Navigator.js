import React, { useState } from 'react';
import '../Navigator/Navigator.css';
import downArrow from '../../img/downArrow.png';
// import Bot from '../Bot/Bot';

const Navigator = () => {
    const sections = [
        "hero",
        "about",
        "education",
        "projects",
        "experiences",
        "references",
        "contact"
    ];
    
    const [navigatorToggle, setNavigatorToggle] = useState(false);
    // const [botToggle, setBotToggle] = useState(false);
    const [rotateArrow, setRotateArrow] = useState("0deg");
    const [isClosing, setIsClosing] = useState(false);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const toggleArrow = () => {
        setRotateArrow(prevState => (prevState === "180deg" ? "0deg" : "180deg"));
    };

    const toggleNavigator = () => {
        if (navigatorToggle) {
            setIsClosing(true);
            setTimeout(() => {
                setNavigatorToggle(false);
                setIsClosing(false);
            }, 100);
        } else {
            setNavigatorToggle(true);
        }
        toggleArrow();
    };

    // const toggleBot = () => {
    //     setBotToggle(true);
    // };

    // const toggleBotFalse = () => {
    //     setBotToggle(false);
    // };

    // Function to scroll to a section
    const scrollToSection = (index) => {
        const sectionId = sections[index];
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setCurrentSectionIndex(index);
    };

    // Move to the previous section and open it
    const moveToPreviousSection = () => {
        setCurrentSectionIndex(prevIndex => {
            const newIndex = prevIndex - 1 < 0 ? sections.length - 1 : prevIndex - 1;
            scrollToSection(newIndex);
            return newIndex;
        });
    };

    // Move to the next section and open it
    const moveToNextSection = () => {
        setCurrentSectionIndex(prevIndex => {
            const newIndex = prevIndex + 1 >= sections.length ? 0 : prevIndex + 1;
            scrollToSection(newIndex);
            return newIndex;
        });
    };

    return (
        <div id='navContainer'>
            <button id='downArrowBtn' onClick={toggleNavigator}>
                <img style={{ transform: `rotate(${rotateArrow})`, transition: "transform 0.3s ease" }} src={downArrow} alt="arrow" />
            </button>
            {navigatorToggle && (
                <nav className={`dot-nav ${isClosing ? "closing" : ""}`}>
                    <button className='navBtn' id='upNextArrowBtn' onClick={moveToPreviousSection}>
                        <span>
                            <svg width="9px" height="100%" viewBox="0 0 26 27" fill="none" style={{ transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path>
                            </svg>
                        </span>
                    </button>
                    <span id="currentSection">{sections[currentSectionIndex]}</span>
                    <button className='navBtn' id='downNextArrowBtn' onClick={moveToNextSection}>
                        <span>
                            <svg
                                width="9px"
                                height="100%"
                                viewBox="0 0 26 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white" />
                            </svg>
                        </span>
                    </button>
                </nav>
            )}
            {/* {botToggle && (
                <Bot toggleBotFalse={toggleBotFalse} />
            )} */}
        </div>
    );
};

export default Navigator;
