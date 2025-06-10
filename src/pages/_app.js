import { Homenaje } from "next/font/google";
import "./globals.css";

const homenaje = Homenaje({
    subsets: ["latin"],
    weight: "400",
});

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={`${homenaje.className} antialiased flex flex-col max-h-screen`}>
            <header>
                <nav className="flex justify-center bg-purple-500 p-5 w-full">
                    <ul className="flex justify-center gap-10 text-white text-xl">
                        <li><a className="hover:text-black" href="#home">home</a></li>
                        <li><a className="hover:text-black" href="#workex">experience</a></li>
                        <li><a className="hover:text-black" href="#skills">skills</a></li>
                        <li><a className="hover:text-black" href="#projects">projects</a></li>
                        <li><a className="hover:text-black" href="#contact">contact</a></li>
                    </ul>
                </nav>
            </header>

            <Component {...pageProps} />
        </main>
    );
}
