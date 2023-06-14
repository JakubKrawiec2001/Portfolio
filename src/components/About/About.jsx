import React from "react";
import "./About.scss";
import testImg from "../../assets/images/hero-img.png";
import Button from "../Button/Button";
import Blobs from "../Blobs/Blobs";
import BlobBorder from "../BlobBorder/BlobBorder";
import { GiBurstBlob } from "react-icons/gi";

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import sass from "../../assets/images/sass.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import bootstrap from "../../assets/images/bootstrap.png";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="about" id="about">
			<Blobs></Blobs>
			<div className="wrapper">
				<div className="about-container">
					<GiBurstBlob className="about-blob"></GiBurstBlob>
					<GiBurstBlob className="about-blob-shade"></GiBurstBlob>

					<div className="about-l">
						<img src={testImg} alt="Jakub Krawiec" className="about-img" />
					</div>
					<BlobBorder></BlobBorder>

					<div className="about-r">
						<div className="about-text-box">
							<h2 className="about-r-heading">About Me</h2>
							<p className="about-r-text">
								Hi, probably as you already know my name is Jakub and I am 22
								years old. For almost a year my passion has been creating
								websites. I consider myself a committed and hard-working person,
								and working in a team is not a problem for me. I decided to get
								into programming for a simple reason - it's something I love and
								it gives me great satisfaction. It's amazing to create something
								out of nothing. To find out more about me, click button below.
							</p>
						</div>
						<div className="skills">
							<div className="skill-box">
								<img src={html} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">HTML5</p>
							</div>
							<div className="skill-box">
								<img src={css} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">CSS3</p>
							</div>
							<div className="skill-box">
								<img src={sass} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">SASS</p>
							</div>
							<div className="skill-box">
								<img src={js} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">JavaScript</p>
							</div>
							<div className="skill-box">
								<img src={react} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">React</p>
							</div>
							<div className="skill-box">
								<img src={bootstrap} alt="Skill icon" className="skill-icon" />
								<p className="skill-name">Bootstrap</p>
							</div>
						</div>
						<Link to="/more-about" className="about-btn">
							<Button text={"More Details"}></Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
