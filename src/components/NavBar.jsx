import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(false);

    return (
        <nav>
            <div className="container nav_container">
                <a href="#home" onClick={e => { e.preventDefault(); navigate('/'); }}>
                    Jaya Prabha Bhura
                </a>
                <button
                    className={`nav_hamburger-toggle ${isHamBurgerOpen ? 'hamBurger-open' : ''}`}
                    onClick={() => setIsHamBurgerOpen(!isHamBurgerOpen)}
                >
                    <span className="nav_hamburger-toggle-bar"></span>
                    <span className="nav_hamburger-toggle-bar"></span>
                    <span className="nav_hamburger-toggle-bar"></span>
                </button>
                <div className={`nav_overlay ${isHamBurgerOpen ? 'hamBurger-open' : ''}`}>

                    <button onClick={() => { setIsHamBurgerOpen(false); navigate('/'); }}>
                        Home
                    </button>
                    <button onClick={() => { setIsHamBurgerOpen(false); navigate('/skills'); }}>
                        Skills
                    </button>
                    <button onClick={() => { setIsHamBurgerOpen(false); navigate('/qualifications'); }}>
                        Qualifications
                    </button>
                    <button onClick={() => { setIsHamBurgerOpen(false); navigate('/projects'); }}>
                        Projects
                    </button>
                    <button onClick={() => { setIsHamBurgerOpen(false); navigate('/contacts'); }}>
                        Contacts
                    </button>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}
