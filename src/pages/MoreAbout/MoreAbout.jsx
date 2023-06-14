import React from "react";
import "./MoreAbout.scss";

import skill1 from "../../assets/images/html.png";
import skill2 from "../../assets/images/css.png";
import skill3 from "../../assets/images/sass.png";
import skill4 from "../../assets/images/js.png";
import skill5 from "../../assets/images/react.png";
import skill6 from "../../assets/images/bootstrap.png";
import skill7 from "../../assets/images/git.png";
import skill8 from "../../assets/images/github.png";
import skill9 from "../../assets/images/api.png";
import skill10 from "../../assets/images/vs-code.png";
import skill11 from "../../assets/images/responsive-design.png";
import skill12 from "../../assets/images/mobile.png";

const MoreAbout = () => {
	return (
		<section className="more-about">
			<h2 className="more-about-heading">Who is Jakub?</h2>
			<p className="more-about-heading-text">Programming is my passion</p>
			<div className="more-about-container">
				<div className="more-about-skills-box">
					<h3 className="more-about-small-heading">Skills & Tools</h3>
					<p className="more-about-skills-text">
						Skills, tools and technologies I use to play with programming
					</p>
					<div className="more-about-skills-icons">
						<div className="skill">
							<img src={skill1} alt="" className="skill-icon" />
							<p className="skill-name">HTML5</p>
						</div>
						<div className="skill">
							<img src={skill2} alt="" className="skill-icon" />
							<p className="skill-name">CSS3</p>
						</div>
						<div className="skill">
							<img src={skill3} alt="" className="skill-icon" />
							<p className="skill-name">SASS</p>
						</div>
						<div className="skill">
							<img src={skill4} alt="" className="skill-icon" />
							<p className="skill-name">JavaScript</p>
						</div>
						<div className="skill">
							<img src={skill5} alt="" className="skill-icon" />
							<p className="skill-name">React</p>
						</div>
						<div className="skill">
							<img src={skill6} alt="" className="skill-icon" />
							<p className="skill-name">Bootstrap</p>
						</div>
						<div className="skill">
							<img src={skill7} alt="" className="skill-icon" />
							<p className="skill-name">Git</p>
						</div>
						<div className="skill">
							<img src={skill8} alt="" className="skill-icon" />
							<p className="skill-name">Github</p>
						</div>
						<div className="skill">
							<img src={skill9} alt="" className="skill-icon" />
							<p className="skill-name">RESTful API</p>
						</div>
						<div className="skill">
							<img src={skill10} alt="" className="skill-icon" />
							<p className="skill-name">VS Code</p>
						</div>
						<div className="skill">
							<img src={skill11} alt="" className="skill-icon" />
							<p className="skill-name">Responsive Web Design</p>
						</div>
						<div className="skill">
							<img src={skill12} alt="" className="skill-icon" />
							<p className="skill-name">Mobile First</p>
						</div>
					</div>
				</div>
				<div className="more-about-description-box">
					<h3 className="more-about-small-heading">Few words about me</h3>
					<p className="more-about-text">
						Hi, as you already know my name is Jakub and I am 22 years old. For
						almost a year my passion has been creating websites. I consider
						myself a committed and hard-working person, and working in a team is
						not a problem for me. I decided to get into programming for a simple
						reason - it's something I love and it gives me great satisfaction.
						It's amazing to create something out of nothing. Currently I’m
						studying International Relations at the University of Wrocław. This
						is my last semester of bachelor studies, after graduation I will
						start my master's studies at the University of Applied Informatics
						where I will be able to expand my knowledge of programming, which I
						can't wait for. In my work, I follow the principle of mobile first.
						I create responsive websites and adapted to each user. I am
						currently familiar with Html, Css, Sass, JavaScript and React. I
						also worked with Bootstrap. TypeScript is next on my list. In the
						the future i would like to learn more technologies. I love to gain
						new knowledge and I treat programming as fun thanks to which I can
						experiment with new technologies. I'd love to tell you more about
						myself next time we meet.
					</p>
				</div>
			</div>
		</section>
	);
};

export default MoreAbout;
