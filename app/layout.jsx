import './globals.css';
import { Rubik } from 'next/font/google';

// COMPONENTS
import Navbar from '../components/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
	title: 'Next 14 Crash Course',
	description: 'Basic crash course of Next JS 14',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={rubik.className + ' bg-gray-50'} suppressHydrationWarning>
				<Navbar />
				<main className="min-h-screen antialiased p-6">{children}</main>
			</body>
		</html>
	);
}
