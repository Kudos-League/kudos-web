import type { Metadata } from 'next';
import Image from 'next/image';

import logo from '../images/logo.svg';
import '../index.css';

export const metadata: Metadata = {
	title: 'React App',
	description: 'Web site created with Next.js.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Image priority src={logo} alt='logo' />

				<div id='root'>{children}</div>
			</body>
		</html>
	);
}
