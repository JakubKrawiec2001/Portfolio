import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import MoreAbout from "./pages/MoreAbout/MoreAbout";
import ScrollToTop from "../src/ScrollToTop";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";

function App() {
	const [cursorPositon, setCursorPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const handleWindowMouseMove = (event) => {
			setCursorPosition({
				x: event.clientX,
				y: event.clientY,
			});
		};
		window.addEventListener("mousemove", handleWindowMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleWindowMouseMove);
		};
	}, []);
	return (
		<>
			<Nav></Nav>
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header cursorPositon={cursorPositon}></Header>
							<About></About>
							<Projects></Projects>
							<Contact cursorPositon={cursorPositon}></Contact>
						</>
					}></Route>
				<Route path="/more-about" element={<MoreAbout></MoreAbout>}></Route>
			</Routes>
		</>
	);
}

export default App;
