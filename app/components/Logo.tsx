


import { bebasNeueFont } from '../ui/fonts';
import { FaReact } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className={`${bebasNeueFont.className} flex flex-row items-center leading-none text-white`}>
            <FaReact className="h-20 w-20 rotate-15" />
            <p className="text-[30px] ml-3">JoDev</p>
        </div>
    );
};


export default Logo;