
"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
const Nav = () => {
    const isUserLogIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    }, [])
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="/assets/images/logo.svg" alt='promtepia '
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>promtepia</p>
            </Link>
            {/* for desktop  navigation */}
            <div className='sm:flex hidden'>
                {isUserLogIn ? (
                    <div className='flex gap-3 
                             md:gap-5'>
                        <Link href="/create-prompt" className='black_btn'>
                            Create post </Link>
                        <button type='button' onClick={signOut} className='outline_btn' >
                            sign Out
                        </button>
                        <Link href="profile">
                            <Image src="/assets/images/logo.svg" alt="Profile"
                                width={37}
                                height={37}
                                className='rounded-full'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black-btn'
                                >
                                    Sign In
                                </button>
                            )
                            )}
                    </>)}
            </div>
            {/* mobile navigation  */}
            <div className="sm:hidden flex relative">
                {isUserLogIn ? (
                    <div className="flex">
                        <Image src="/assets/images/logo.svg" alt="Profile"
                            width={37}
                            height={37}
                            className='rounded-full'

                            onClick={() => setToggleDropdown((prev) => !prev)
                            }
                        />
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My profile
                                </Link>
                                <Link href='/create-promt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create prompt
                                </Link>
                                <button type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className='mt-5 w-full black_btn'
                                >
                                    sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black-btn'
                                >
                                    Sign In
                                </button>
                            )
                            )}
                    </>
                )}
            </div>

        </nav>
    )
}

export default Nav
