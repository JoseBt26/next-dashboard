import Header from '../app/components/Header';
import { bebasNeueFont } from './ui/fonts';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <div className="mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-6 md:w-2/5 md:px-10 ">
                    <p className={`${bebasNeueFont.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Wecome Jodev </strong> Tutorial Next js
                    </p>
                    <a href="#" className="flex items-center  gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors  hover:bg-blue-400 md:text-base" >
                        <span>login</span> <BsArrowRight />
                    </a>
                </div>
                <Image src="/hero-desktop.png" alt="Screenshots of the dashboard" width={1000} height={700} className="hidden md:block" />
                <Image src="/hero-mobile.png" alt="Screenshots of the dashboard" width={560} height={620} className="block md:hidden" />

            </div>
        </main>
    );
}

export default HomePage;