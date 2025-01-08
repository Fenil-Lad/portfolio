import React, { useState } from 'react';
import './References.css';
import BaselineSix from '../BaselineSix/BaselineSix';

const References = () => {
    const references = [
        {
            name: "Alvin Shum",
            position: "Head, Enterprise IT Client Services",
            company: "Seneca Polytechnic",
            contact: "alvin.shum@senecapolytechnic.ca",
            // photo: "https://via.placeholder.com/150?text=Alvin+Shum",  // Photo added
            photo: "https://media.licdn.com/dms/image/v2/C5103AQFiOUPCJPhy7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516287537774?e=1741824000&v=beta&t=PN9FLS5KzoctawALmt7lcLRU8fDWKieDt1nE-V-WQ_8",  // Photo added
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
            // photo: "https://via.placeholder.com/150?text=Tyler+Stevens",  // Photo added
            photo: "https://media.licdn.com/dms/image/v2/C4E03AQGC0bBXefjsYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1650557621166?e=1741824000&v=beta&t=IWqhy1p_1m5z-g0TnjvRljGNPQCJZ800s4Zd0IA_Q4A",  // Photo added
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
            // photo: "https://via.placeholder.com/150?text=Devansh+Shah",  // Photo added
            photo: "https://media.licdn.com/dms/image/v2/D5635AQGsFTe6seEJ9g/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1677184660147?e=1736899200&v=beta&t=U_-p7E6YBZnm0L8BLLZNwZ4LgYt2pzi5sha3yj-dxnQ",  // Photo added
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
