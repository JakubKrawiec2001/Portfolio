import React from "react";
import "./Projects.scss";

// IMAGES
import project1 from "../../assets/images/projects/project-1.jpg";
import project2 from "../../assets/images/projects/project-2.jpg";
import project3 from "../../assets/images/projects/project-3.jpg";
import project4 from "../../assets/images/projects/project-4.jpg";
import project5 from "../../assets/images/projects/project-5.jpg";
import project6 from "../../assets/images/projects/project-6.jpg";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<h2 className="projects-heading">My Works</h2>
			<div className="projects-container">
				<div className="projects-row-one">
					<a
						href="https://jakubkrawiec2001.github.io/bike-shop/"
						target="_blank"
						rel="noreferrer"
						className="project-box">
						<img
							src={project1}
							alt="Bike shop project"
							className="project-img"
						/>
						<span className="project-number">01</span>
						<p className="project-name">MountRide</p>
					</a>

					<a
						href="https://jakubkrawiec2001.github.io/Restaurant/"
						className="project-box"
						target="_blank"
						rel="noreferrer">
						<img
							src={project2}
							alt="Restaurant project"
							className="project-img"
						/>
						<span className="project-number">02</span>
						<p className="project-name">Pane e Vino Restaurant</p>
					</a>
					<a
						href="https://jakubkrawiec2001.github.io/Rock-Paper-Scissors-Game/"
						className="project-box"
						target="_blank"
						rel="noreferrer">
						<img
							src={project3}
							alt="Rock-Paper-Scissors project"
							className="project-img"
						/>
						<span className="project-number">03</span>
						<p className="project-name">Rock-Paper-Scissors</p>
					</a>
				</div>
				<div className="projects-row-two">
					<a
						href="https://jakubkrawiec2001.github.io/Virtual-Keyboard/"
						className="project-box"
						target="_blank"
						rel="noreferrer">
						<img
							src={project4}
							alt="Virtual Keyboard project"
							className="project-img"
						/>
						<span className="project-number">04</span>
						<p className="project-name">Virtual Keyboard</p>
					</a>
					<a
						href="https://jakubkrawiec2001.github.io/Movie-Searcher/"
						className="project-box"
						target="_blank"
						rel="noreferrer">
						<img
							src={project5}
							alt="Movie Searcher project"
							className="project-img"
						/>
						<span className="project-number">05</span>
						<p className="project-name">Movie Searcher</p>
					</a>
					<a
						href="https://jakubkrawiec2001.github.io/Prywatny-Gabinet-Urologiczny/"
						className="project-box"
						target="_blank"
						rel="noreferrer">
						<img
							src={project6}
							alt="Urology Office project"
							className="project-img"
						/>
						<span className="project-number">06</span>
						<p className="project-name">FEBU office</p>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
