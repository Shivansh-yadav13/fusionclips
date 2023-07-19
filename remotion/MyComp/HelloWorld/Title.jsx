import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const title = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	bottom: 160,
	width: '100%',
};

const word = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Title = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const delay = i * 1;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame,
					config: {
						stiffness: 1000,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
