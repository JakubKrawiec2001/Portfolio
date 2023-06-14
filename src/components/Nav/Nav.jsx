import React, { useState } from "react";
import "./Nav.scss";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<div className={open ? "menu open-menu" : "menu"}>
				<div className="burger-menu-btn" onClick={() => setOpen(!open)}>
					<div></div>
				</div>
				<div className="menu-text-box">
					<Link to="/#" className="menu-text" onClick={() => setOpen(!open)}>
						Home
					</Link>
					<Link
						to="/#about"
						className="menu-text"
						onClick={() => setOpen(!open)}>
						About Me
					</Link>
					<Link
						to="/#projects"
						className="menu-text"
						onClick={() => setOpen(!open)}>
						My Works
					</Link>
					<Link to="/" className="menu-text" onClick={() => setOpen(!open)}>
						My Resume
					</Link>
				</div>
				<div className="menu-contact">
					<p className="menu-contact-title">TEXT ME</p>
					<a
						href="mailto:kubakrawieckk04@gmail.com"
						className="menu-contact-text">
						kubakrawieckk04@gmail.com
					</a>
					<a href="tel:790-254-380" className="menu-contact-text">
						+48 790 254 380
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
