import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styles from './css/captions.module.css';
import { Lilita_One } from 'next/font/google';
import localFont from "next/font/local";
// const theBoldFont = localFont({src: "../../../fonts/THEBOLDFONT.ttf"})
// const font = Lilita_One({subsets: ['latin'], weight: ['400']})



export const Title = ({titleText, titleColor}: {titleText: string, titleColor: string}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 className={styles.simple_text} >
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
