import React from 'react';
import './Education.css';
import senecaLogo from '../../img/seneca-logo.png';
import BaselineFour from '../BaselineFour/BaselineFour';


const Education = () => {
    return (
        <>
            <BaselineFour></BaselineFour>

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
