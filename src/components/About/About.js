import './About.css';
import BaselineOne from '../BaselineOne/BaselineOne';
import me from '../../img/fenil_lad.jpeg';
import CircleWithSVG from '../CircleWithSVG/CircleWithSVG';

function About() {
  return (
    <div className="About">
      <BaselineOne></BaselineOne>
      <div className="about_sub">
        <div className="about_sub_section_one">
          <div className="about_sub_section_one_sub"><span><span style={{ "marginLeft": "25px" }}>HELLO, MY NAME IS FENIL.</span> I’M A TECHNOLOGIST, ENTHUSIAST ABOUT BUILDING INNOVATIVE SOLUTIONS AND ENHANCING USER EXPERIENCES.</span></div>
          <div className="about_sub_section_two_sub"><img src={me} alt="me" /></div>
          <div className="about_sub_section_three_sub"><a href='/about'><CircleWithSVG innerText="LEARN MORE" width={150} height={150} radius={65} fontSize={14}></CircleWithSVG></a></div>
        </div>
        <div className="about_sub_section_two">
          <span id="about_name">FENIL LAD</span>
        </div>
      </div>
    </div>
  );
}

export default About;
