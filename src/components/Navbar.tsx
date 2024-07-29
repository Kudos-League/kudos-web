import Image from '@/components/Image';
import logo from '@/images/logo.svg';
import {
	BarsArrowDownIcon,
	UserIcon,
	UsersIcon
} from '@heroicons/react/16/solid';
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle
} from 'flowbite-react';
import Link from 'next/link';

export default function Nav() {
	return (
		<Navbar fluid rounded>
			<NavbarBrand as={Link} href='https://flowbite-react.com'>
				<Image
					src={logo}
					className='mr-3 h-6 sm:h-9'
					alt='Logo'
					width={50}
					height={50}
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Karma Kudos
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				<NavbarLink
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/posts`}
					active
					className='flex items-center justify-center'
				>
					<div className='w-10'>
						<BarsArrowDownIcon />
					</div>{' '}
					Feed
				</NavbarLink>
				<NavbarLink
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/profiles`}
					className='flex items-center justify-center'
				>
					<div className='w-10'>
						<UserIcon />
					</div>{' '}
					Users
				</NavbarLink>
				<NavbarLink
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/user_groups`}
					className='flex items-center justify-center'
				>
					<div className='w-10'>
						<UsersIcon />
					</div>{' '}
					Communities
				</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	);
}
