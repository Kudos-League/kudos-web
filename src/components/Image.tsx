'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const isProd = process.env.NODE_ENV === 'production';

export default function Img(props) {
	const { src, fallbackSrc, width = 100, height = 100, ...rest } = props;

	const initialSrc =
		isProd && typeof src === 'string' && src.startsWith('/')
			? `/kudos-web${src}`
			: src;

	const [imgSrc, setImgSrc] = useState(initialSrc);

	useEffect(() => {
		const newSrc =
			isProd && typeof src === 'string' && src.startsWith('/')
				? `/kudos-web${src}`
				: src;
		setImgSrc(newSrc);
	}, [src]);

	return (
		<Image
			{...rest}
			src={imgSrc}
			width={width}
			height={height}
			onError={() => {
				setImgSrc(fallbackSrc);
			}}
			alt={props.alt || ''}
		/>
	);
}
