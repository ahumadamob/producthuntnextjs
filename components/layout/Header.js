import React from 'react';
import Link from 'next/link';

import Search from '../ui/Search';
import Navigation from './Navigation';

const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Search />
                    <Navigation />
                </div>
                <div>
                    <p>Hola Mario</p>
                    <button type="submit">Cerrar Sesión</button>
                    <Link href="/">Iniciar Sesión</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;