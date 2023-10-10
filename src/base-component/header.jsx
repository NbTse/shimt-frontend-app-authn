import { useState } from 'react';

import { getConfig } from '@edx/frontend-platform';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="container flex justify-between gap-5 py-3">
        <a
          href={getConfig().MARKETING_SITE_BASE_URL}
        >
          <img className="max-w-none h-14" src={logo} alt="logo" />
        </a>

        <nav className="flex items-center justify-between w-full">
          <div className="hidden gap-5 uppercase lg:flex !text-primary">
            <div className="font-bold mobile-nav-item hidden-mobile nav-item">
              <Link
                to="/login"
              >
                Миний хичээл
              </Link>
            </div>
            <div className="font-bold mobile-nav-item hidden-mobile nav-item">
              <a href={`${getConfig().MARKETING_SITE_BASE_URL}/courses`}>Хичээлүүд</a>
            </div>
            <div className="font-bold mobile-nav-item hidden-mobile nav-item">
              <Link to="/login">Хөтөлбөрүүд</Link>
            </div>
          </div>
          <div className="hidden gap-5 lg:flex">
            <div className="mobile-nav-item hidden-mobile nav-item">
              <Link className="my-btn-outline" to="/register">
                Бүртгүүлэх
              </Link>
            </div>
            <div className="mobile-nav-item hidden-mobile nav-item">
              <Link className="my-btn-primary" to="/login">
                Нэвтрэх
              </Link>
            </div>
          </div>
          <div className="flex items-center ml-auto lg:hidden">
            <button type="button" className="outline-none mobile-menu-button" onClick={() => setShowMobileMenu(prev => !prev)}>
              <svg
                className="w-8 h-8 duration-300 !text-primary hover:!text-primary-hover"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div className="block lg:hidden">
        <div className={`${showMobileMenu ? '' : 'hidden '}uppercase my-mobile-menu`}>
          <Link
            className="mobile-menu-item"
            to="/login"
          >
            Миний хичээл
          </Link>
          <a className="mobile-menu-item" href={`${getConfig().MARKETING_SITE_BASE_URL}/courses`}>
            Хичээлүүд
          </a>
          <Link className="mobile-menu-item" to="/login">
            Хөтөлбөрүүд
          </Link>
          <Link className="mobile-menu-item" to="/register">
            Бүртгүүлэх
          </Link>
          <Link className="mobile-menu-item" to="/login">
            Нэвтрэх
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
