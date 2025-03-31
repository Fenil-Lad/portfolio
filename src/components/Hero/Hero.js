// import React from 'react';
// import './Hero.css';
// import CircleWithSVG from '../CircleWithSVG/CircleWithSVG';

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero_div_one">
//         <div id="hero_section_one"><p>01//07 — SCROLL <span><svg width="9px" height="100%" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path></svg></span></p></div>
//         <div id="hero_section_two">
//           <span className="hero_section_two_headline_one" >DRIVEN BY</span>
//           <span className="hero_section_two_headline_one" >VISION,POWERED BY</span>
//           <span id="hero_section_two_headline_sub_span"><span className="hero_section_two_headline_one" >TECHNOLOGY</span><span id="hero_section_sub_span"><span style={{ "paddingLeft": "25px" }}>A VISIONARY TECHNOLOGIST, </span><span> CRAFTING INNOVATIVE TOOLS TO SHAPE TOMORROW  </span><span>AND REDEFINE POSSIBILITIES TODAY. </span></span></span>
//         </div>
//       </div>
//       <div className="hero_div_two">
//         <div id="hero_circle_div"><CircleWithSVG width={150} height={150} radius={65} /></div>
//       </div>
//     </div>
//   )
// }

// export default Hero;

import React from 'react';
import './Hero.css';
import CircleWithSVG from '../CircleWithSVG/CircleWithSVG';

const Hero = () => {
  // Function to split text into letters and apply animation delay
  const getLetterDelay = (index) => {
    return `${index * 0.1}s`; // Incremental delay per letter (adjust for faster/slower effect)
  };

  // Function to render letters with animation delay, treating &nbsp; as space
  const renderLetters = (text) => {
    // Replace spaces with &nbsp; so they are rendered as non-breaking space
    const processedText = text.replace(/ /g, '\u00A0'); // \u00A0 is the unicode for &nbsp;

    return processedText.split("").map((letter, index) => {
      // If it's a space (nbsp), treat it as a regular character
      if (letter === "\u00A0") {
        return (
          <span key={index} className="hero-section-letter space" style={{ "--letter-delay": getLetterDelay(index) }}>
            {letter}
          </span>
        );
      }

      // For non-space characters, apply animation
      return (
        <span
          key={index}
          className="hero-section-letter"
          style={{ "--letter-delay": getLetterDelay(index) }}
        >
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="hero" id="hero">
      <div className="hero_div_one">
        <div id="hero_section_one">
          <p>01//07 — SCROLL
            <span>
              <svg width="9px" height="100%" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path>
              </svg>
            </span>
          </p>
        </div>

        <div id="hero_section_two">
          <span className="hero_section_two_headline_one">
            {renderLetters("DRIVEN BY")}
          </span>
          <span className="hero_section_two_headline_one">
            {renderLetters("VISION,POWERED BY")}
          </span>
          <span id="hero_section_two_headline_sub_span">
            <span className="hero_section_two_headline_one">
              {renderLetters("TECHNOLOGY")}
            </span>
            {/* <span id="hero_section_sub_span">
              <span style={{ "paddingLeft": "25px" }}>
                "A VISIONARY TECHNOLOGIST, CRAFTING INNOVATIVE TOOLS TO SHAPE TOMORROW AND REDEFINE POSSIBILITIES TODAY."
              </span>
            </span> */}
            <span id="hero_section_sub_span" className="fade-in-text">
              <span style={{ "paddingLeft": "25px" }}>
                A VISIONARY TECHNOLOGIST, CRAFTING INNOVATIVE TOOLS TO SHAPE TOMORROW AND REDEFINE POSSIBILITIES TODAY.
              </span>
            </span>

          </span>
        </div>
      </div>

      <div className="hero_div_two">
        <div id="hero_circle_div">
          <CircleWithSVG width={150} height={150} radius={65} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
