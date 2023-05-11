'use client';
import React, { useState, useEffect, useRef } from 'react';
import { GiThunderSkull } from 'react-icons/gi';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-transparent w-full">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <GiThunderSkull
                        style={{
                            height: `80px`,
                            width: `80px`,
                        }}
                        color="#b20a2c"
                    />
                    <h1 className="text-lg sm:text-3xl space-x-3 text-white">
                        PsyBombay
                    </h1>
                </div>

                <nav className="hidden sm:block">
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300"
                            >
                                Join
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="h-9 w-9"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className="sm:hidden absolute top-0 right-0 mt-12 w-48 bg-black border border-slate-400"
                    >
                        <ul className="py-2 px-4">
                            <li>
                                <a href="#" className="block text-white py-2">
                                    Join
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-white py-2">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-white py-2">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
