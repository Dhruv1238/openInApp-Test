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
                        <h1 className='text-2xl font-lato'>Welcome</h1>
                        <h1 className='text-2xl font-lato'>to</h1>
                        <h1 className='text-2xl font-lato'>Base</h1>
                    </div>
                </div>
            </div>
        </>
    );
};