"use client";
import { VerdaContext } from '@/context/VerdaContext';
import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react';
import MobileMenuSection from '../mobile-menu/MobileMenuSection';
import { usePathname } from 'next/navigation';

const RightSideBar = () => {
    const { isSidebarOpen, handleSidebarClose } = useContext(VerdaContext);
    const pathname = usePathname();
    const prevPath = useRef(pathname);

    useEffect(() => {
        if (prevPath.current !== pathname && isSidebarOpen) {
            handleSidebarClose();
        }
        prevPath.current = pathname;
    }, [pathname, isSidebarOpen, handleSidebarClose]);

    return (
        <div className={`fz-offcanvas-main-nav-wrapper ${isSidebarOpen ? 'open' : ''}`}>
            <button className="fz-button-close" onClick={handleSidebarClose}><i className="fa-thin fa-xmark"></i></button>
            <div className="fz-offcanvas-main-nav-wrapper-sections">
                <div className="fz-offcanvas-main-nav-section">
                    <div className={`mobile-menu-updated ${isSidebarOpen ? 'mean-container' : ''}`}>
                        <MobileMenuSection />
                    </div>
                </div>
                <div className="fz-offcanvas-main-sideinfo-section">
                    <div className="fz-offcanvas-main-sideinfo">
                        <div className="fz-offcanvas-main-search mb-45 d-block d-sm-none">
                            <form action="#">
                                <input type="search" name="search" placeholder="Search Product" id="search-input" />
                                <button type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div className="fz-offcanvas-main-actions mb-15">
                            <Link href="/cart">
                                <span className="fz-off-actions-icon"><i className="fa-thin fa-bag-shopping"></i></span>
                                <span className="fz-off-actions-text"><span>View Cart</span><span>View Cart</span></span>
                            </Link>
                            <Link href="/wishlist">
                                <i className="fa-thin fa-heart"></i>
                                <span className="fz-off-actions-text"><span>View Wishlist</span><span>View Wishlist</span></span>
                            </Link>
                        </div>
                        <div className="fz-offcanvas-main-contacts">
                            <h4 className="fz-offcanvas-main-contacts-title mb-30">Get In Touch</h4>
                            <ul className="fz-offcanvas-main-contacts-list">
                                <li>
                                    <i className="fa-thin fa-location-dot"></i>
                                    <span className="fz-offcanvas-main-contact-text">111 Test Street Demo Town, NY 10001</span>
                                </li>
                                <li>
                                    <i className="fa-thin fa-phone-flip"></i>
                                    <span className="fz-offcanvas-main-contact-text">
                                        <a href="tel:(+1)555-555-5555">(+1) 555-555-5555</a><br />
                                        <a href="tel:(+1)555-555-5555">(+1) 555-555-5555</a>
                                    </span>
                                </li>
                                <li>
                                    <i className="fa-thin fa-clock"></i>
                                    <span className="fz-offcanvas-main-contact-text">Store Hours:<br /><span className="fz-opentime">Mon - Sat : 8am - 5pm</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="fz-offcanvas-main-socials mt-45">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
