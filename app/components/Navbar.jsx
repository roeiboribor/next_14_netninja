import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="px-6 py-3">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between">
					<div>
						<h1 className="text-xl font-bold">Next14</h1>
					</div>
					<ul className="flex space-x-3">
						<li>
							<Link href="/" className="transition hover:text-blue-500">
								Home
							</Link>
						</li>
						<li>
							<Link href="/tickets" className="transition hover:text-blue-500">
								Tickets
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
