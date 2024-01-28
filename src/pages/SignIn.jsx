import { useEffect, useState } from 'react';
import base from '../assets/signinPage/signup.svg'
import logo from '../assets/signinPage/signupLogo.svg'
import discord from '../assets/signinPage/discord.svg'
import github from '../assets/signinPage/github.svg'
import twitter from '../assets/signinPage/twitter.svg'
import linkedin from '../assets/signinPage/linkedin.svg'
import { SinginForm } from '../components/SignInForm';

export const SignIn = () => {

    const [width, setWidth] = useState('w-1/3');

    useEffect(() => {
        const checkZoom = () => {
            const zoom = window.devicePixelRatio * 100;
            if (zoom > 100) {
                setWidth('w-5/12');
            } else {
                setWidth('w-1/3');
            }
        };

        window.addEventListener('resize', checkZoom);
        checkZoom();

        return () => window.removeEventListener('resize', checkZoom);
    }, []);

    return (
        <>
            <div className='lg:flex flex-col lg:flex-row justify-between lg:items-center h-screen lg:text-center text-gray-900 w-full overflow-hidden'>
                <div className='md:hidden  w-full bg-baseBlue h-20 flex items-center px-5 gap-1'>
                    <img src={logo} alt="logo" className='z-50 h-8 w-8' />
                    <h1 className="text-xl text-center text-white z-50 ml-2">Base</h1>
                </div>
                <div className={`hidden lg:flex lg:flex-col justify-between items-center overflow-hidden min-h-screen max-h-screen text-center ${width} text-gray-900`}>
                    <img src={logo} alt="logo" className='z-50 ml-10 mt-10 self-start' />
                    <img src={base} alt="base" className='fixed left-0 z-0 overflow-hidden' />
                    <h1 className="text-6xl text-center font-bold text-white z-50 mb-10">BASE</h1>
                    <div className='flex gap-5 mb-10 mr-20'>
                        <a href="https://github.com/Dhruv1238" target="_blank" rel="noopener noreferrer" className='z-50'>
                            <img src={github} alt="socials" className='z-50 h-10 w-10 cursor-pointer' />
                        </a>
                        <img src={twitter} alt="socials" className='z-50 h-10 w-10 cursor-pointer' />
                        <img src={linkedin} alt="socials" className='z-50 h-10 w-10 cursor-pointer' />
                        <img src={discord} alt="socials" className='z-50 h-10 w-10 cursor-pointer' />
                    </div>
                </div>
                <div className="flex flex-col md:items-center md:w-1/2 md:justify-center min-h-screen text-center bg-white text-gray-900">
                    <SinginForm />
                </div>
            </div>
        </>
    )
}
