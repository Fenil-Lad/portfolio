import React from 'react';
import './Experience.css';
import BaselineFive from '../BaselineFive/BaselineFive';

const Experience = () => {
    const experiences = [
        {
            title: "Barista",
            company: "Local Coffee Shop",
            startDate: "June 2020",
            endDate: "August 2022",
            description: "Provided excellent customer service, managed inventory, and trained new staff in coffee preparation and customer interaction."
        },
        {
            title: "Technical Support Intern",
            company: "Tech Solutions Inc.",
            startDate: "January 2023",
            endDate: "May 2023",
            description: "Assisted in troubleshooting hardware and software issues, documented technical processes, and provided support for internal teams."
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            startDate: "June 2023",
            endDate: "Present",
            description: "Designed and developed responsive websites, collaborated with clients to meet their needs, and ensured SEO optimization."
        }
    ];

    // Calculate years passed between two dates
    const calculateYears = (start, end) => {
        const startDate = new Date(start);
        const endDate = end === "Present" ? new Date() : new Date(end);
        const diffTime = Math.abs(endDate - startDate);
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
        return Math.round(diffYears);
    };

    return (
        <>
            <BaselineFive />
            <div className="experience-container">
                {experiences.map((experience, index) => (
                    <div className="experience-item" key={index}>
                        <div className="experience-header">
                            <h3 className="experience-role">{experience.title}</h3>
                            <p className="experience-company">{experience.company}</p>
                            <p className="experience-duration">
                                {calculateYears(experience.startDate, experience.endDate)} years
                            </p>
                        </div>
                        <p className="experience-description">{experience.description}</p>
                        <div className="separator"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Experience;
