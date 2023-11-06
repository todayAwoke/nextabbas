import React from 'react'
import Feed from '@components/Feed';
const Home = () => {
    return (
        <section className='w-full flex flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'> AI-Powerd prompts</span>
            </h1>
            <p className='desc text-center'>
                prompts is an open source ai prompting tool for the modern and used to create and share creative prompting
            </p>
            <Feed />
        </section>
    )
}

export default Home
