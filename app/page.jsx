import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
	const session = await getServerSession(options);

	return (
		<>
			{session ? (
				<h3>
					Home Page
					<div>{session.user.name}</div>
				</h3>
			) : (
				<div>No Entry</div>
			)}
		</>
	);
}
