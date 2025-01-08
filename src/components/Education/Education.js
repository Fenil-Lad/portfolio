import React from 'react';
import './Education.css';
import senecaLogo from '../../img/seneca-logo.png';
import BaselineFour from '../BaselineFour/BaselineFour';
import certificateImg from '../../img/AdvancedDiploma.png';

const Education = () => {
    return (
        <>
            <BaselineFour />
            <div className="education-container">
                <div className="education-content">
                    <img
                        src={senecaLogo}
                        alt="Seneca Polytechnic Logo"
                        className="education-logo"
                    />
                    <div className="education-details">
                        <h2 className="education-title">Advanced Diploma</h2>
                        <h3 className="education-subtitle">Computer Engineering Technology</h3>
                        <p className="education-institution">Seneca Polytechnic</p>
                        <p className="education-dates">May 2022 - December 2024</p>
                        <p className="education-honours">Graduated with Honours (3.8 out of 4.0 CGPA)</p>
                    </div>
                </div>
                {/* <div className="pdf-container"> */}
                   {/* <img src={certificateImg} alt='Advanced Diploma Image' id="certificateImg"/> */}
                   <img src={certificateImg} alt="Advanced Diploma Certificate" className="certificate-img" />
                {/* </div> */}
            </div>
        </>
    );
};

export default Education;
