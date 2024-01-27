import { useEffect, useState } from 'react';
import burger from '../assets/drawer/burger.svg';
import logo from '../assets/drawer/logo.svg';
import notif from '../assets/drawer/notif.svg';
import avatar from '../assets/drawer/avatar.svg';
import cross from '../assets/drawer/cross.svg';
import dashboard from '../assets/drawer/dashboard.svg';
import upload from '../assets/drawer/upload.svg';
import invoice from '../assets/drawer/invoice.svg';
import schedule from '../assets/drawer/schedule.svg';
import calendar from '../assets/drawer/calendar.svg';
import notification from '../assets/drawer/notification.svg';
import settings from '../assets/drawer/settings.svg';
import { Link } from 'react-router-dom';

export const Drawer = () => {
    const [isOpen, setIsOpen] = useState('-translate-x-full');
    const [bright, setBright] = useState('backdrop-brightness-100');
    const [index, setIndex] = useState('z-10');

    const toggleDrawer = () => {
        setIsOpen(isOpen === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full')
    };

    useEffect(() => {
        setBright(isOpen === 'translate-x-0' ? 'backdrop-brightness-50' : 'backdrop-brightness-100');
        setIndex(isOpen === 'translate-x-0' ? 'z-50' : 'z-10');
        console.log(index);
        console.log(bright);
    }, [isOpen]);

    console.log(isOpen);


    return (
        <>
            <div className={`min-h-screen ${bright} ${index}`}>
                <div className='flex flex-row justify-between p-5 gap-5 h-20 w-screen'>
                    <div className='flex flex-row gap-4 items-center md:ml-10'>
                        <img src={burger} alt="navbar" className='h-4 md:hidden z-50' onClick={toggleDrawer} />
                        <img src={logo} alt="logo" className='h-8 w-8 md:h-12 md:w-12' />
                        <h1 className='text-xl md:text-2xl font-lato'>Base</h1>
                        <h1 className='hidden md:text-2xl font-figtree font-semibold ml-16 md:flex'>Upload CSV</h1>
                    </div>
                    <div className='flex flex-row gap-5 items-center md:mr-4 '>
                        <img src={notif} alt="notif" className='h-6 cursor-pointer' />
                        <img src={avatar} alt="avatar" className='h-10 w-10 cursor-pointer' />
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
                    <div className='flex flex-col gap-14 items-start px-8 p-5 text-slate-500 font-medium'>
                        <Link to='/dashboard'>
                            <div className='flex flex-row gap-5 items-center '>
                                <img src={dashboard} alt="dashboard" className='h-6' />
                                <h1 className='text-lg font-nunito'>Dashboard</h1>
                            </div>
                        </Link>
                        <Link to='/upload'>
                            <div className='flex flex-row gap-5 items-center w-full'>
                                <img src={upload} alt="upload" className='pt-2' />
                                <h1 className='text-lg font-nunito text-baseBlue'>Upload</h1>
                            </div>
                        </Link>
                        <Link to='/invoice'>
                            <div className='flex flex-row gap-5 items-center'>

                                <img src={invoice} alt="upload" />
                                <h1 className='text-lg font-nunito'>Invoice</h1>
                            </div>
                        </Link>
                        <Link to='/schedule'>
                            <div className='flex flex-row gap-5 items-center'>
                                <img src={schedule} alt="schedule" />
                                <h1 className='text-lg font-nunito '>Schedule</h1>
                            </div>
                        </Link>
                        <Link to='/calendar'>
                            <div className='flex flex-row gap-5 items-center'>
                                <img src={calendar} alt="calendar" />
                                <h1 className='text-lg font-nunito'>Calendar</h1>
                            </div>
                        </Link>
                        <Link to='/notifications'>
                            <div className='flex flex-row gap-5 items-center'>
                                <img src={notification} alt="notification" />
                                <h1 className='text-lg font-nunito'>Notification</h1>
                            </div>
                        </Link>
                        <Link to='/settings'>
                            <div className='flex flex-row gap-5 items-center'>

                                <img src={settings} alt="settings" />
                                <h1 className='text-lg font-nunito'>Settings</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:fixed md:flex flex-col gap-8 text-md items-start px-8 p-5 text-slate-500 font-medium'>
                    <Link to='/dashboard'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={dashboard} alt="dashboard" className='h-6' />
                            <h1 className='font-nunito'>Dashboard</h1>
                        </div>
                    </Link>
                    <Link to='/upload'>
                        <div className='flex flex-row gap-5 items-center w-full'>
                            <img src={upload} alt="upload" className='pt-2' />
                            <h1 className='font-nunito text-baseBlue'>Upload</h1>
                        </div>
                    </Link>
                    <Link to='/invoice'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={invoice} alt="invoice" />
                            <h1 className='font-nunito'>Invoice</h1>
                        </div>
                    </Link>
                    <Link to='/schedule'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={schedule} alt="schedule" />
                            <h1 className='font-nunito '>Schedule</h1>
                        </div>
                    </Link>
                    <Link to='/calendar'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={calendar} alt="calendar" />
                            <h1 className='font-nunito'>Calendar</h1>
                        </div>
                    </Link>
                    <Link to='/notifications'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={notification} alt="notification" />
                            <h1 className='font-nunito'>Notification</h1>
                        </div>
                    </Link>
                    <Link to='/settings'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img src={settings} alt="settings" />
                            <h1 className='font-nunito'>Settings</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};