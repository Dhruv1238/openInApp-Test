import { useEffect, useState } from 'react';
import burger from '../assets/drawer/burger.svg';
import logo from '../assets/drawer/logo.svg';
import notif from '../assets/drawer/notif.svg';
import avatar from '../assets/drawer/avatar.svg';
import cross from '../assets/drawer/cross.svg';

export const Drawer = () => {
    const [isOpen, setIsOpen] = useState('-translate-x-full');
    const [bright, setBright] = useState('backdrop-brightness-100');

    const toggleDrawer = () => {
        setIsOpen(isOpen === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full')
    };

    useEffect(() => {
        setBright(isOpen === 'translate-x-0' ? 'backdrop-brightness-50' : 'backdrop-brightness-100');
        console.log(bright);
    }, [isOpen]);

    console.log(isOpen);

    return (
        <>
            <div className={`h-screen ${bright}`}>
                <div className='flex flex-row justify-between p-5 gap-5 h-20'>
                    <div className='flex flex-row gap-4 items-center'>
                        <img src={burger} alt="navbar" className='h-4' onClick={toggleDrawer} />
                        <img src={logo} alt="logo" className='h-8 w-8' />
                        <h1 className='text-xl font-lato'>Base</h1>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <img src={notif} alt="notif" className='h-6' />
                        <img src={avatar} alt="avatar" className='h-10 w-10' />
                    </div>
                </div>
                <div className={`h-full fixed top-0 ${isOpen} transition duration-300 flex-col border-r w-5/6 rounded-r-2xl items-center bg-white text-gray-900 z-50 backdrop-blur-lg shadow-2xl`}>
                    <div className='flex flex-row justify-between w-full p-5'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={logo} alt="logo" className='h-8 w-8' />
                            <h1 className='text-xl font-lato'>Base</h1>
                        </div>
                        <img src={cross} alt="navbar" className='h-10' onClick={toggleDrawer} />
                    </div>
                    <div className='flex flex-col gap-5 items-start px-8 p-5'>
                        <div className='flex flex-row gap-5 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill="#9A9AA9" />
                            </svg>
                            <h1 className='text-lg font-lato'>Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};