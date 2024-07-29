import type { Metadata } from 'next';

import Navbar from '../components/Navbar';

import '../index.css';

export const metadata: Metadata = {
	title: 'Karma Kudos',
	description: 'Web site created with Next.js.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Navbar />
				<div id='root'>{children}</div>
			</body>
		</html>
	);
}
