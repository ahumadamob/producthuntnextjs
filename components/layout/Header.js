import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import Search from '../ui/Search';
import Navigation from './Navigation';
import Button from '../ui/Button';

const HeaderContent = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => {

    const isLogged = false;

    return ( 
        /** @jsx jsx */
        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                padding: 1rem 0;
            `}
        >
            <HeaderContent>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>                    
                    <Search />
                    <Navigation />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {isLogged ? (
                        <>
                            <p
                            css={css`
                                margin-right: 2rem;
                            `}
                            >Hola Mario</p>
                            <Button bgColor="true">Cerrar Sesión</Button> 
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button bgColor="true">Iniciar Sesión</Button>                        
                            </Link>

                            <Link href="/create-account">
                                <Button>Crear Cuenta</Button>
                            </Link>
                        </>
                    )
                    }
                                       
                    
                </div>
            </HeaderContent>
        </header>
     );
}
 
export default Header;