import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import {useNavigate} from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="container nav_container">
                <a href="#home" onClick={e => { e.preventDefault(); navigate('/'); }}>
                    Jaya Prabha Bhura
                </a>
                <button className="nav_home-btn" onClick={() => navigate('/')}>
                    Home
                </button>
                <button className="nav_skills-btn" onClick={() => navigate('/skills')}>
                    Skills
                </button>
                <button className="nav_qualifications-btn" onClick={() => navigate('/qualifications')}>
                    Qualifications
                </button>
                <button className="nav_projects-btn" onClick={() => navigate('/projects')}>
                    Projects
                </button>
                <button className="nav_contacts-btn" onClick={() => navigate('/contacts')}>
                    Contacts
                </button>
                <ThemeToggle />
            </div>
        </nav>
    );
}
