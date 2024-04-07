import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next 14 Crash Course',
	description: 'Basic crash course of Next JS 14',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className + ' bg-gray-50'}>
				<main className="min-h-screen antialiased">{children}</main>
			</body>
		</html>
	);
}
