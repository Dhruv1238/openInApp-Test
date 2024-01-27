import { useState } from 'react';
import burger from '../assets/drawer/burger.svg';
import logo from '../assets/drawer/logo.svg';

export const Drawer = () => {
    const [isOpen, setIsOpen] = useState('hidden');

    const toggleDrawer = () => {
        if (isOpen === 'hidden') setIsOpen('flex transition-all duration-500 ease-in-out transform translate-x-0');
        else{
            setIsOpen('hidden');
        }
    };

    console.log(isOpen);

    return (
        <>
            <div className='h-screen'>
                <div className='flex flex-row justify-between p-5 gap-5 h-20'>
                    <div className='flex flex-row gap-4 items-center'>
                        <img src={burger} alt="navbar" className='h-4' onClick={toggleDrawer}/>
                        <img src={logo} alt="logo" className='h-8 w-8' />
                        <h1 className='text-xl font-lato'>Base</h1>
                    </div>
                </div>
                <div className={`h-full fixed top-0 ${isOpen} flex-col border-r w-1/2 rounded-r-xl shadow-sm items-center bg-black text-gray-900`}>
                <img src={burger} alt="navbar" className='h-4' onClick={toggleDrawer}/>
                </div>
            </div>
        </>
    );
};