import './Projects.css';
import BaselineTwo from '../BaselineTwo/BaselineTwo';
import CircleWithSVG from '../CircleWithSVG/CircleWithSVG';
import senecaLogo from '../../img/senecaLogo.svg';
import neolisticLogo from '../../img/neolisticLogo.png';
import subnetSpectraLogo from '../../img/subnetSpectraLogo.png';
import { useState } from 'react';

function Projects() {

  const [visible, setVisibility] = useState("");

  const toggleVisibility = (frame) => {
    setVisibility((prev) => (prev === frame ? "" : frame));
  };

  return (
    <div className="projects">
      <BaselineTwo></BaselineTwo>
      <div className="projects_div_section_one">
        <div className="projects_div_section_one_sub_one"><CircleWithSVG radius={85} innerText='PROJECTS' fontSize={14}></CircleWithSVG></div>
        <div className="projects_div_section_one_sub_two">
          <span>
            <span id="projects_div_section_one_sub_two_span_one">HERE ARE SOME SELECT PROJECTS THAT SHOWCASE</span>
            <span> MY PASSION FOR CREATING MEMORABLE WEB EXPERIENCES,</span>
            <span> PRODUCTS, AND BRANDS FOR LIFE.</span>
          </span>
        </div>

      </div>
      <div className="projects_div_section_two">
        <div className="projects_div_section_two_sub" id="projects_div_section_two_sub_one">
          <iframe title="Project 1" src="https://seneca-itsstudentservicedesk.netlify.app/" width="100%" height="100%" style={{ "border": "none", "borderRadius": "15px 15px 0px 0px", "outline": "none", "display": visible === "frame1" ? "block" : "none" }}></iframe>
          <div className="projects_div_section_two_sub_img" style={{ "display": visible !== "frame1" ? "flex" : "none" }}>
            <img src={senecaLogo} alt="seneca_logo" id="seneca_logo_img" />
            <a href='https://seneca-itsstudentservicedesk.netlify.app/' target='_blank' rel='noreferrer noopener'>ITS SERVICE DESK</a>
            <div className="projects_div_section_two_sub_btn_div">
              <button className="projects_div_section_two_sub_btn" onClick={() => window.open('https://seneca-itsstudentservicedesk.netlify.app/')}>OPEN PAGE</button>
              <button className="projects_div_section_two_sub_btn" onClick={() => toggleVisibility("frame1")}>EXPERIENCE HERE</button>
            </div>
          </div>
          <button style={{ "display": visible !== "frame1" ? "none" : "flex", "background": "transparent", "color": "white", "fontFamily": "inherit", "padding": "10px" }} className="closeBtn" onClick={() => toggleVisibility("frame1")}>CLOSE</button>
        </div>

        <div className="projects_div_section_two_sub" id="projects_div_section_two_sub_two">
          <iframe title="Project 2" src="https://www.theneolistic.com/" width="100%" height="100%" style={{ "border": "none", "borderRadius": "15px 15px 0px 0px", "outline": "none", "display": visible === "frame2" ? "block" : "none" }}></iframe>
          <div className="projects_div_section_two_sub_img" style={{ "display": visible !== "frame2" ? "flex" : "none" }}>
            <img src={neolisticLogo} alt="neolistic_logo" id="neolistic_logo_img" />
            <a href='https://www.theneolistic.com/' target='_blank' rel="noreferrer noopener">NEOLISTIC</a>
            <div className="projects_div_section_two_sub_btn_div">
              <button className="projects_div_section_two_sub_btn" onClick={() => window.open('https://www.theneolistic.com/')}>OPEN PAGE</button>
              <button className="projects_div_section_two_sub_btn" onClick={() => toggleVisibility("frame2")}>EXPERIENCE HERE</button>
            </div>
          </div>
          <button style={{ "display": visible !== "frame2" ? "none" : "flex", "backgroundColor": "rgba(180, 99, 211, 1)", "color": "white", "padding": "10px", "fontFamily": "inherit" }} className="closeBtn" onClick={() => toggleVisibility("frame2")}>CLOSE</button>
        </div>

        <div className="projects_div_section_two_sub" id="projects_div_section_two_sub_three">
          <iframe title="Project 3" src="https://subnetspectra.com/" width="100%" height="100%" style={{ "border": "none", "borderRadius": "15px 15px 0px 0px", "outline": "none", "display": visible === "frame3" ? "block" : "none" }}></iframe>
          <div className="projects_div_section_two_sub_img" style={{ "display": visible !== "frame3" ? "flex" : "none" }} >
            <img src={subnetSpectraLogo} alt="subnet_spectra_logo" id="subnet_spectra_logo_img" />
            <a href='https://subnetspectra.com/' target='_blank' rel="noreferrer noopener">SUBNET SPECTRA</a>
            <div className="projects_div_section_two_sub_btn_div" >
              <button className="projects_div_section_two_sub_btn" onClick={() => window.open('https://subnetspectra.com/')}>OPEN PAGE</button>
              <button className="projects_div_section_two_sub_btn" onClick={() => toggleVisibility("frame3")}>EXPERIENCE HERE</button>
            </div>
          </div>
          <button style={{ "display": visible !== "frame3" ? "none" : "flex", "backgroundColor": "white", "color": "black", "padding": "10px", "fontFamily": "inherit" }} className="closeBtn" onClick={() => toggleVisibility("frame3")}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
