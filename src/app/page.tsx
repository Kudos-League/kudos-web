export function generateStaticParams() {
	return [{ slug: [''] }];
}

export default function Page() {
	/*
	fetch(`${process.env.NEXT_PUBLIC_API_URL}/conversations`, {
		method: 'GET'
	})
		.then((response) => response.text())
		.then((data) => {
			console.log(data);
		})
		.catch(console.error);
	*/

	return '...';
}
