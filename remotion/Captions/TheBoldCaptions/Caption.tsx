import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styles from './css/captions.module.css';
import { Anton } from 'next/font/google';
import localFont from "next/font/local";
// const theBoldFont = localFont({src: "../../../fonts/THEBOLDFONT.ttf"})
const anton = Anton({subsets: ['latin'], weight: ['400']})


export const Title = ({titleText, titleColor}: {titleText: string, titleColor: string}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<>
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
					<>
					<h1 className={styles.shadow_text} style={anton.style} key={i}>
						{t}
					</h1>
					<h1 className={styles.simple_text} style={anton.style} key={i}>
						{t}
					</h1>
					</>
				);
			})}
			</>
	);
};
