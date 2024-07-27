import type { Metadata } from 'next';

// TODO: navbar seems to cause hydration errors
// import Navbar from '../components/Navbar';

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
				{/* <Navbar />*/}

				<div id='root'>{children}</div>
			</body>
		</html>
	);
}
