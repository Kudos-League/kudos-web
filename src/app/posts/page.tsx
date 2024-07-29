import { Post } from '@/typings';

import Modal from '@/components/Modal';
import Search from '@/components/Search';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const items: Post[] = [
	{
		userID: 1,
		id: 1,
		content: 'Hello world',
		createdAt: new Date(),
		type: 1
	},
	{
		userID: 2,
		id: 2,
		content: 'Hello world 2',
		createdAt: new Date(),
		type: 2
	}
];

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
async function fetchPosts() {
	return items;
}

export default async function Page() {
	const posts = await fetchPosts();

	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<Search />
				<Modal />
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<List>
						{posts.map((post) => (
							<ListItemButton key={post.id}>
								<ListItemText primary={post.content} />
							</ListItemButton>
						))}
					</List>
				</div>
			</div>
		</section>
	);
}
