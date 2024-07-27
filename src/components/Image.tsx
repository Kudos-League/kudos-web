'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Img(props) {
	const { src, fallbackSrc, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(
		typeof src === 'string' && src.startsWith('/')
			? `/nextjs-github-pages/${src}`
			: src
	);

	if (!rest.width && !rest.height) {
		rest.layout = 'fill';
	}

	return (
		<Image
			{...rest}
			src={imgSrc}
			onError={() => {
				setImgSrc(fallbackSrc);
			}}
		/>
	);
}
