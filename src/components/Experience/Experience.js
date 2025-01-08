import React from 'react';
import './Experience.css';
import BaselineFive from '../BaselineFive/BaselineFive';
import senecaLogo from '../../img/seneca-logo.png';
import staplesLogo from '../../img/staples_canada_logo.jpeg';

const Experience = () => {
    const experiences = [
        {
            title: "IT Support Specialist (Tier 1)",
            company: "Seneca Polytechnic",
            startDate: "January 2024",
            endDate: "January 2025",
            details: [
                "Maintained and troubleshot desktops, laptops, projectors, cameras, microphones, and speakers, ensuring optimal performance, minimal downtime, and adherence to IT policies.",
                "Developed SOPs for troubleshooting, equipment management, and laptop reimaging, streamlining system deployment and operational efficiency.",
                "Managed onboarding for 20+ end-users and supported faculty with setup and issue resolution.",
                "Led IT Service Desk team for Open House and campus-wide events, coordinating technical support across multiple campuses.",
                "Implemented and led the setup of portable digital signage displays, improving communication and supporting sustainability goals."
            ],
            image: senecaLogo
        },
        {
            title: "Lead IT Support Specialist (Tier 1)",
            company: "Seneca Polytechnic",
            startDate: "April 2023",
            endDate: "January 2024",
            details: [
                "Led a team of 7, optimizing workflows and reducing incident response time by 30%, while adhering to IT policies.",
                "Delivered Level 1 technical support to over 1000 students and faculty weekly, resolving 25-30 critical tickets per day for hardware, software, and network issues with a 95% user satisfaction rate.",
                "Streamlined equipment assigning and reservation processes using Web Checkout Software, improving resource allocation efficiency by 20%.",
                "Oversaw the deployment and maintenance of 500+ desktops, 1400+ laptops, and Xerox printers.",
                "Assisted non-technical staff with VPN access and software support and performed Multi-Factor Authentication (MFA) resets using Azure."
            ],
            image: senecaLogo
        },
        {
            title: "Technology Sales Representative",
            company: "Staples",
            startDate: "June 2023",
            endDate: "October 2023",
            details: [
                " Sold a variety of electronics and office supplies, ensuring customers received accurate product information and excellent service.",
                "Provided seamless customer service by performing warm transfers to other departments when needed, demonstrating excellent teamwork.",
                "Maintained an accurate and up - to - date inventory management system, ensuring stock levels were aligned with the floor plan to prevent shortages, overstocking, or misplaced items.",
                "Ensured the inventory management system was up to date, accurately reflecting stock levels to prevent shortages or overstocking.",
                "Collaborated with colleagues to support daily operations and meet sales goals, contributing to a positive and efficient work environment.Delivered tailored recommendations based on customer needs, resulting in increased customer satisfaction and repeat business."
            ],
            image: staplesLogo
        }
    ];

    // const formatDate = (date) => {
    //     return date === "Present"
    //         ? "Present"
    //         : new Date(date).toLocaleString("en-US", { month: "short", year: "numeric" });
    // };

    return (
        <>
            <BaselineFive />
            <div className="experience-container">
                <ul className="experience-list">
                    {experiences.map((experience, index) => (
                        <li className="experience-item" key={index}>
                            <div className="experience-details">
                                <div className="experience-info">
                                    <div className="">
                                        <div className="experience-logo-container">
                                            <img src={experience.image} alt={`${experience.company} Logo`} className="experience-logo" />
                                        </div>
                                        <h3 className="experience-role">{experience.title}</h3>
                                        <p className="experience-company">{experience.company}</p>
                                        <span className="experience-dates">
                                            {experience.startDate} - {experience.endDate}
                                        </span>
                                    </div>
                                    <ul className="job-details">
                                        {experience.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Experience;
