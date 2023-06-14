import React from "react";
import "./Header.scss";
import Wave from "./Wave/Wave";
import Blobs from "../Blobs/Blobs";
import Button from "../Button/Button";

// ICONS
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Header = ({ cursorPositon }) => {
	return (
		<section className="header">
			<Wave></Wave>
			<Blobs></Blobs>
			<div className="drop drop-one"></div>
			<div className="drop drop-two"></div>
			<div className="drop drop-three"></div>
			<div className="drop drop-four"></div>
			<span
				className="tag-span tag-span-p-open"
				style={{
					transform: `translateX(${cursorPositon.x / 80}px) translateY(${
						cursorPositon.y / 80
					}px)`,
				}}>
				{"<P>"}
			</span>
			<span
				className="tag-span tag-span-p-close"
				style={{
					transform: `translateX(${cursorPositon.y / 50}px) translateY(${
						cursorPositon.x / 50
					}px)`,
				}}>
				{"</P>"}
			</span>
			<span
				className="tag-span tag-span-br"
				style={{
					transform: `translateX(${cursorPositon.x / 20}px) translateY(${
						cursorPositon.y / 20
					}px)`,
				}}>
				{"<BR />"}
			</span>
			<span
				className="tag-span tag-span-hr"
				style={{
					transform: `translateX(${cursorPositon.y / 40}px) translateY(${
						cursorPositon.x / 40
					}px)`,
				}}>
				{"<HR />"}
			</span>
			<span
				className="tag-span tag-span-open"
				style={{
					transform: `translateX(${cursorPositon.x / 20}px) translateY(${
						cursorPositon.y / 20
					}px)`,
				}}>
				{"</>"}
			</span>
			<span
				className="tag-span tag-span-close"
				style={{
					transform: `translateX(${cursorPositon.y / 60}px) translateY(${
						cursorPositon.x / 60
					}px)`,
				}}>
				{"</>"}
			</span>

			<div className="heading-box">
				<p className="heading-text">
					<span className="heading-text-span">FRONT END /</span> WEB DEVELOPER
				</p>
				<h1 className="heading-name">JAKUB KRAWIEC</h1>
				<span
					className="h1-span-one"
					style={{
						transform: `translateX(${cursorPositon.x / 20}px) translateY(${
							cursorPositon.y / 20
						}px)`,
					}}>
					{"<H1>"}
				</span>
				<span
					className="h1-span-two"
					style={{
						transform: `translateX(${cursorPositon.x / 20}px) translateY(${
							cursorPositon.y / 20
						}px)`,
					}}>
					{"</H1>"}
				</span>
				<Button text={"My Works"} link={"#projects"}></Button>
			</div>

			<div className="socials-box">
				<a
					href="https://github.com/JakubKrawiec2001"
					className="social-icon"
					target="_blank"
					rel="noreferrer">
					<AiFillGithub></AiFillGithub>
				</a>
				<a
					href="https://www.linkedin.com/in/jakub-krawiec-8b9a6b268/"
					className="social-icon"
					target="_blank"
					rel="noreferrer">
					<AiFillLinkedin></AiFillLinkedin>
				</a>
				<a href="mailto:kubakrawieckk04@gmail.com" className="social-icon">
					<SiGmail></SiGmail>
				</a>
				<a href="tel:790-254-380" className="social-icon">
					<AiFillPhone></AiFillPhone>
				</a>
			</div>
		</section>
	);
};

export default Header;
