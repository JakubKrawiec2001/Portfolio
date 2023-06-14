import React from "react";
import "./Button.scss";
import { HashLink as Link } from "react-router-hash-link";

const Button = (props) => {
	return (
		<>
			<Link to={props.link}>
				<button class="blob-btn">
					{props.text}
					<span class="blob-btn__inner">
						<span class="blob-btn__blobs">
							<span class="blob-btn__blob"></span>
							<span class="blob-btn__blob"></span>
							<span class="blob-btn__blob"></span>
							<span class="blob-btn__blob"></span>
						</span>
					</span>
				</button>
			</Link>

			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							result="blur"
							stdDeviation="10"></feGaussianBlur>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
							result="goo"></feColorMatrix>
						<feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
					</filter>
				</defs>
			</svg>
		</>
	);
};

export default Button;
