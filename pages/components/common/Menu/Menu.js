/* --------------------------------- IMPORT --------------------------------- */
// packages
import Link from 'next/link';
import React, { useState } from 'react';
// import AppContext from '../../../../context/AppContext';
// styles
import styles from './Menu.module.sass';

/* ----------------------------- MENU COMPONENT ----------------------------- */
function Menu() {
	const [menu, setMenu] = useState('home');
	// const { setIsContactFormActive } = AppContext;

	const changeMenu = (name) => {
		setMenu(name);
		// setIsContactFormActive(true);
	};

	return (
		<nav className={styles.navigator}>
			<Link href="/">
				<a className={styles.menuElem}>Home</a>
			</Link>
			<Link href="/gallery">
				<a className={styles.menuElem}>Gallery</a>
			</Link>
			<Link href="#">
				<a
					onClick={() => changeMenu('home')}
					className={styles.menuElem}>
					Contact Me
				</a>
			</Link>
			<Link href="http://instagram.com">
				<a className={styles.menuElem}>
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg">
						<g
							id="Page-1"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd">
							<g
								id="Dribbble-Light-Preview"
								transform="translate(-340.000000, -7439.000000)"
								fill="#ffffff">
								<g
									id="icons"
									transform="translate(56.000000, 160.000000)">
									<path
										d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
										id="instagram-[#167]"></path>
								</g>
							</g>
						</g>
					</svg>
				</a>
			</Link>
			<Link href="http://facebook.com">
				<a className={styles.menuElem}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="20px"
						height="20px"
						viewBox="0 0 512 512"
						style={{ enableBackground: 'new 0 0 512 512' }}>
						<g fill="#ffffff">
							<g>
								<path
									d="M256,375.333c-5.523,0-10,4.477-10,10c0,0.013,0,0.027,0,0.04s0,0.027,0,0.04v0.08c0,5.523,4.477,10,10,10s10-4.477,10-10
			c0-0.014,0-0.026,0-0.04c0-0.014,0-0.026,0-0.04c0-0.014,0-0.027,0-0.04s0-0.027,0-0.04C266,379.81,261.523,375.333,256,375.333z"
								/>
							</g>
						</g>
						<g fill="#ffffff">
							<g>
								<path
									d="M414,0H98C43.962,0,0,43.962,0,98v316c0,54.038,43.962,98,98,98h158c5.523,0,10-4.477,10-10v-77.5c0-5.523-4.477-10-10-10
			s-10,4.477-10,10V492H98c-43.009,0-78-34.991-78-78V98c0-43.009,34.991-78,78-78h316c43.009,0,78,34.991,78,78v316
			c0,43.009-34.991,78-78,78h-64V315.501h57.981c5.136,0,9.436-3.89,9.95-8.999l7.191-71.455c0.283-2.813-0.637-5.613-2.533-7.709
			c-1.896-2.096-4.591-3.292-7.417-3.292H350v-37.521c0-6.791,2.163-9.316,7.981-9.316h56.742c5.523,0,10-4.477,10-10v-69.66
			c0-5.523-4.477-10-10-10h-74.517c-42.223,0-64.615,18.546-75.964,34.104c-15.873,21.758-18.243,47.454-18.243,60.834v42.007h-49
			c-5.523,0-10,4.477-10,10V305.5c0,5.523,4.477,10,10,10h49V344c0,5.523,4.477,10,10,10s10-4.477,10-10v-38.5
			c0-5.523-4.477-10-10-10h-49v-51.007h49c5.523,0,10-4.477,10-10v-52.007c0-22.532,7.231-74.938,74.207-74.938h64.517v49.66
			h-46.742c-12.908,0-27.981,7.678-27.981,29.316v47.521c0,5.523,4.477,10,10,10h64.115l-5.178,51.455H340c-5.523,0-10,4.477-10,10
			V502c0,5.523,4.477,10,10,10h74c54.038,0,98-43.962,98-98V98C512,43.962,468.038,0,414,0z"
								/>
							</g>
						</g>
						<g fill="#ffffff">
							<g>
								<path d="M58,102.5c-5.523,0-10,4.477-10,10V196c0,5.523,4.477,10,10,10s10-4.477,10-10v-83.5C68,106.977,63.523,102.5,58,102.5z" />
							</g>
						</g>
						<g fill="#ffffff">
							<g>
								<path
									d="M58,229.382c-5.523,0-10,4.477-10,10v0.118c0,5.523,4.477,10,10,10s10-4.477,10-10v-0.118
			C68,233.859,63.523,229.382,58,229.382z"
								/>
							</g>
						</g>
					</svg>
				</a>
			</Link>
		</nav>
	);
}

export default Menu;
