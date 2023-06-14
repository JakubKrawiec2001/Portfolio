import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

// ICONS
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Contact = ({ cursorPositon }) => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_witjm8h",
				"template_q43uejk",
				form.current,
				"q4LWJ3uC3gY8LR2rX"
			)
			.then(
				(result) => {
					console.log(result.text);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<section className="contact">
				<AiFillGithub
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 80
						}px)`,
					}}></AiFillGithub>
				<AiFillGithub
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 80
						}px)`,
					}}></AiFillGithub>
				<AiFillGithub
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 80
						}px)`,
					}}></AiFillGithub>
				<AiFillLinkedin
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 60
						}px)`,
					}}></AiFillLinkedin>
				<AiFillLinkedin
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 60
						}px)`,
					}}></AiFillLinkedin>
				<AiFillLinkedin
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 60
						}px)`,
					}}></AiFillLinkedin>
				<AiFillLinkedin
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 60
						}px)`,
					}}></AiFillLinkedin>
				<AiFillPhone
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 30}px) translateX(${
							cursorPositon.y / 30
						}px)`,
					}}></AiFillPhone>
				<AiFillPhone
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 30}px) translateX(${
							cursorPositon.y / 30
						}px)`,
					}}></AiFillPhone>
				<AiFillPhone
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 30}px) translateX(${
							cursorPositon.y / 30
						}px)`,
					}}></AiFillPhone>
				<AiFillPhone
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 30}px) translateX(${
							cursorPositon.y / 30
						}px)`,
					}}></AiFillPhone>
				<SiGmail
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 70}px) translateX(${
							cursorPositon.y / 50
						}px)`,
					}}></SiGmail>
				<SiGmail
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 70}px) translateX(${
							cursorPositon.y / 50
						}px)`,
					}}></SiGmail>
				<SiGmail
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 70}px) translateX(${
							cursorPositon.y / 50
						}px)`,
					}}></SiGmail>
				<SiGmail
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 70}px) translateX(${
							cursorPositon.y / 50
						}px)`,
					}}></SiGmail>
				<SiGmail
					className="contact-icon"
					style={{
						transform: `translateY(${cursorPositon.x / 70}px) translateX(${
							cursorPositon.y / 50
						}px)`,
					}}></SiGmail>
				<AiFillGithub
					className="contact-icon "
					style={{
						transform: `translateY(${cursorPositon.x / 80}px) translateX(${
							cursorPositon.y / 80
						}px)`,
					}}></AiFillGithub>
				<h2 className="contact-heading">Contact Me</h2>
				<form ref={form} onSubmit={sendEmail}>
					<div className="form-body">
						<label>Name</label>
						<input type="text" name="user_name" placeholder="Your name" />
						<label>Email</label>
						<input type="email" name="user_email" placeholder="Your email" />
						<label>Message</label>
						<textarea name="message" placeholder="Type your message" />
						<input type="submit" value="Send Message" className="contact-btn" />
					</div>
				</form>
			</section>
		</>
	);
};

export default Contact;
