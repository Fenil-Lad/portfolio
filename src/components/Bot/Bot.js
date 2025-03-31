import React, { useState } from "react";
import './Bot.css';
import closeBtn from '../../img/close.png';

const Bot = ({ toggleBotFalse }) => {
    const [userInput, setUserInput] = useState(""); // Stores user input
    const [response, setResponse] = useState(""); // Stores bot's response
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validate user input
        if (userInput.trim()) {
            setIsLoading(true); // Start loading
            setResponse(""); // Clear previous response

            try {
                // Send POST request to RASA bot webhook
                const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message: userInput }), // Send user input as a message
                });

                // Check if the response from the bot is valid
                const data = await res.json();
                console.log("Response from bot:", data); // Debug log to see the full response

                if (data.length > 0) {
                    // Set the bot response
                    setResponse(data[0].text);
                } else {
                    // If no response from bot, display a default message
                    setResponse("No response from bot.");
                }
            } catch (error) {
                // Handle errors
                setResponse("Error connecting to chatbot.");
            } finally {
                setIsLoading(false); // End loading
            }

            // Clear the input field
            setUserInput("");
        } else {
            // If the user input is empty or only whitespace, don't send anything
            setResponse("Please enter a message.");
        }
    };

    return (
        <div className="bot-container">
            <button id="closeBotBtn" onClick={toggleBotFalse}>
                <img src={closeBtn} alt="Close" />
            </button>
            <div className="chat-box">
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} // Update userInput state
                        placeholder="Ask FenilX"
                        className="input-box"
                    />
                    <button type="submit" className="send-button">
                        <span>
                            <svg
                                width="15px"
                                height="100%"
                                viewBox="0 0 26 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transform: "rotate(180deg)" }}
                            >
                                <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white" />
                            </svg>
                        </span>
                    </button>
                </form>
                <div className="response-box">
                    {isLoading ? (
                        <div className="loading-message">Typing...</div> // Display typing effect
                    ) : (
                        <div className="bot-response">
                            {response}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bot;
