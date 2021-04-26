import React from "react";
import "../styles/_login.scss";
import logo from "../images/cta-logo-one.svg";
import logo2 from "../images/cta-logo-two.png";

const Login = (props) => {
	return (
		<section className='container'>
			<div className='content'>
				<div className='bg-image' />
				<div className='call-to-action'>
					<img className='cta-logo1' alt='disney logo' src={logo} />
					<button className='cta-button'>GET THE DISNEY BUNDLE</button>
					<img className='cta-logo2' alt='disney log2' src={logo2} />
					<span className='cta-description'>
						Sign up for Disney+ only. <br /> $7.99/month or $79.99/year.
					</span>
				</div>
			</div>
		</section>
	);
};

export default Login;
