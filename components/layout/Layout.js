import React from 'react';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

import Header from './Header';

const Layout = props => {
    return (
        <>  
            <Global
                styles={css`
                    :root{
                        --gray: #3d3d3d;
                        --gray2: #6F6F6F;
                        --gray3: #e1e1e1;
                        --orange: #DA552F;
                    }
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after: {
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 1.6rem; /* Equivalente a 16 pixeles */
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto Slab', serif;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }
                `} 
            />
            <Head>
                <html lang="es" />
                <title>Product Hount Firebase y Next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet" />
            </Head>

            
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}
 
export default Layout;