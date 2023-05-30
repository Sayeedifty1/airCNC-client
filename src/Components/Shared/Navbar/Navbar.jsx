import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import Search from './Search/Search';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <div><Logo></Logo></div>
                        <div><Search></Search></div>
                        <div><MenuDropdown></MenuDropdown></div>

                    </div>
                </Container>
            </div>
            
        </div>
    );
};

export default Navbar;