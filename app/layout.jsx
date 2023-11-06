//import React from 'react'
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: "Prompt for Awoke",
    description: "Prompt for ai developed by awoke"
}
const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                {/* <Provider> */}
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
                {/* </Provider> */}
            </body>
        </html>
    )
}

export default RootLayout;
