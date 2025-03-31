import React, { useState } from 'react';
import './References.css';
import BaselineSix from '../BaselineSix/BaselineSix';
import AlvinShumImage from '../../img/alvin_shum.jpeg';
import TylerStevansImage from '../../img/tyler_stevans.jpeg';
import DevanshShahImage from '../../img/devansh_shah.jpeg';

const References = () => {
    const references = [
        {
            name: "Alvin Shum",
            position: "Head, Enterprise IT Client Services",
            company: "Seneca Polytechnic",
            contact: "alvin.shum@senecapolytechnic.ca",
            photo: AlvinShumImage,
            details: [
                "I had the pleasure of working with Fenil during his time as a part-time student support for Seneca over the past few semesters. Fenil demonstrated exceptional professionalism and a keen aptitude for problem-solving in all his responsibilities.",
                "He consistently approached each task with efficiency and a calm demeanor, ensuring end users felt supported and valued. His technical skills were very good, particularly in laptop re-imaging and assisting with documenting standard operating procedures.",
                "Fenil's communication skills, whether written, oral, or listening, were always clear and collaborative. His ability to actively listen to concerns and provide tailored solutions made a significant impact on service levels.",
                "His strong work ethic and positive attitude created a supportive work environment. I am confident Fenil will continue to excel in his IT career, and I wholeheartedly endorse him for any opportunity."
            ]
        },
        {
            name: "Tyler Stevens",
            position: "ITS Client Support Liaison",
            company: "Seneca Polytechnic",
            contact: "tyler.stevens@senecapolytechnic.ca",
            photo: TylerStevansImage,
            details: [
                "I have worked closely with Fenil for over a year, and I can say that he has been an extraordinary asset. Although I was not directly his supervisor, I witnessed his ability to lead effectively with innovative and collaborative methods.",
                "Fenil has developed new ways to improve our workflows, showcasing his strong problem-solving abilities. His responsiveness and responsibility are exceptional, and he is capable of leading teams and handling challenges.",
                "I highly recommend Fenil for any opportunity that allows him to showcase his skills, and I know he will thrive in whatever profession he chooses."
            ]
        },
        {
            name: "Devansh Shah",
            position: "Computer Engineering Technology Student",
            company: "Seneca Polytechnic",
            contact: "devansh.shah@senecapolytechnic.ca",
            photo: DevanshShahImage,
            details: [
                "I had the pleasure of collaborating with Fenil during our co-op term, and I wholeheartedly recommend him for his excellent teamwork qualities.",
                "Fenil was a reliable team player who encouraged open dialogue, fostering creativity and smooth task management. His strong interpersonal skills, keen listening abilities, and constructive feedback significantly enriched our teamwork experience."
            ]
        },
    ];

    const [displayCount, setDisplayCount] = useState(3);

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 3);
    };

    return (
        <>
            <BaselineSix />
            <div className="references-container">
                <div className="references-grid">
                    {references.slice(0, displayCount).map((reference, index) => (
                        <div className="reference-item" key={index}>
                            <div className="reference-info">
                                {/* Display Photo */}
                                <img src={reference.photo} alt={reference.name} className="reference-photo" />
                                <h3 className="reference-name">{reference.name}</h3>
                                <p className="reference-position">{reference.position}, {reference.company}</p>
                                <p className="reference-contact">Contact: {reference.contact}</p>
                                <ul className="reference-details">
                                    {reference.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                {displayCount < references.length && (
                    <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
                )}
            </div>
        </>
    );
};

export default References;
