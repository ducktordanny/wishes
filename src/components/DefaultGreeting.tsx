import React, { useEffect, useRef, useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

import useQuery from '../hooks/useQuery';

interface Props {}

const DefaultGreeting: React.FC<Props> = () => {
	const [fallingEmojisEnabled, setFallingEmojisEnabled] =
		useState<boolean>(false);
	const greetingMainRef = useRef<HTMLHeadingElement>(null);
	const query = useQuery();

	useEffect(() => {
		// handling more background value as linear-gradient
		const backgroundColors = query.getAll('background-color');
		const body: HTMLBodyElement | null = document.querySelector('body');
		if (backgroundColors.length > 1) {
			const gradientValues = backgroundColors.join(',');
			const gradientDegree = query.get('gradient-degree');

			body!.style.background = `linear-gradient(${
				gradientDegree ?? 'to bottom'
			},${gradientValues})`;
		} else if (backgroundColors.length === 1) {
			body!.style.background = backgroundColors[0];
		}

		const color = query.get('color') || 'black';
		const appLink: HTMLLinkElement | null =
			document.querySelector('.offer-link');
		appLink!.style.color = color;
		greetingMainRef.current!.style.color = color;

		if (query.get('falling-emojis') === 'true') {
			setFallingEmojisEnabled(true);
		}
	}, [query]);

	return (
		<>
			<div className="greeting-container">
				<p className="greeting-main" ref={greetingMainRef}>
					{query.get('main')}
				</p>
			</div>
			<FallingEmojis
				emojis={['🍾', '🎉', '🎈']}
				density={5}
				size={30}
				shake
				disable={!fallingEmojisEnabled}
			/>
		</>
	);
};

export default DefaultGreeting;
