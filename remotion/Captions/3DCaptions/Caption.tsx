import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styles from './css/captions.module.css';
// import { Poppins } from 'next/font/google';
// import localFont from "next/font/local";
// const theBoldFont = localFont({src: "../../../fonts/THEBOLDFONT.ttf"})
// const font = Poppins({subsets: ['devanagari'], weight: ['900']})
import * as Montserrat from "@remotion/google-fonts/Montserrat";

import { loadFont } from "@remotion/google-fonts/TitanOne";
const { fontFamily } = loadFont();
Montserrat.loadFont("normal", {
	weights: ["600"],
	subsets: ["latin"]
});



export const Title = ({titleText, titleColor}: {titleText: string, titleColor: string}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 className={styles.simple_text} style={{fontFamily}}>
			{words.map((t, i) => {
				const delay = i * 1;
				const scale = spring({
					fps: videoConfig.fps,
					frame: frame,
					config: {
						damping: 5,
						stiffness: 1000,
					},
				});

				return (
					<span
						key={t}
						style={{
							// transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
