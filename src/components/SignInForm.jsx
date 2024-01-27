import React, { useState } from 'react';
import google from '../assets/signinPage/google.svg';
import apple from '../assets/signinPage/apple.svg';
import github from '../assets/signinForm/github.svg';
import twitter from '../assets/signinForm/twitter.svg';
import linkedin from '../assets/signinForm/linkedin.svg';
import discord from '../assets/signinForm/discord.svg';
import { useNavigate } from 'react-router-dom';



export const SinginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    console.log(email, password);

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            navigate('/upload');
        }
        else{
            alert('Please enter Email and Password');
        }
    }


    return (
        <>
            <div className="flex flex-col justify-start gap-14 p-8 items-center md:w-2/3 ">
                <div className="flex flex-col self-start">
                    <h1 className="text-3xl font-bold self-start">Sign In</h1>
                    <p className="text-sm font-lato">Sign in to your account</p>
                </div>
                <div className="flex flex-row gap-5 w-full items-center justify-center">
                    <button className="hover:bg-white flex justify-center items-center text-center gap-3 bg-slate-100 text-black py-2 rounded-md w-full text-xs">
                        <img src={google} alt="google" className="h-5 w-5" />
                        Sign In with Google
                    </button>
                    <button className="hover:bg-white flex justify-center items-center text-center gap-3 bg-slate-100 text-black py-2 rounded-md w-full text-xs">
                        <img src={apple} alt="apple" className="h-5 w-5" />
                        Sign In with Apple
                    </button>
                </div>
                <form className="flex flex-col gap-5 w-full p-5">
                    <div className='text-left font-lato text-md text-black'>
                        Email address
                    </div>
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='h-10 p-3 rounded-xl focus:bg-indigo-100 focus:border-none' />
                    <div className='text-left font-lato text-md text-black'>
                        Password
                    </div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='h-10 p-3 rounded-xl focus:bg-indigo-100 focus:border-none' />
                    <div className='text-left font-lato text-md text-baseBlue cursor-pointer'>
                        Forgot Password?
                    </div>
                    <button className="flex-1 font-bold bg-baseBlue text-white py-2 rounded-xl " onClick={handleSignIn}>Sign In</button>
                </form>
                <div className="flex flex-col md:flex-row gap-2">
                    <p className="text-slate-600 text-md font-lato">Dont have an account?</p>
                    <p className="text-baseBlue text-md cursor-pointer font-lato">Register here</p>
                </div>
                <div className='md:hidden flex gap-5'>
                    <img src={github} alt="socials" className='z-50 h-8 w-8 cursor-pointer ' />
                    <img src={twitter} alt="socials" className='z-50 h-8 w-8 cursor-pointer' />
                    <img src={linkedin} alt="socials" className='z-50 h-8 w-8 cursor-pointer' />
                    <img src={discord} alt="socials" className='z-50 h-8 w-8 cursor-pointer' />
                </div>
            </div>
        </>
    );
};