import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

export default function NavBar({ homeRef, skillsRef, qualRef, projectsRef, contactsRef }) {
    const handleNav = (ref) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <div className="container nav_container">
                <a href="#home" onClick={e => { e.preventDefault(); handleNav(homeRef); }}>
                    Jaya Prabha Bhura
                </a>
                <button className="nav_home-btn" onClick={() => handleNav(homeRef)}>
                    Home
                </button>
                <button className="nav_skills-btn" onClick={() => handleNav(skillsRef)}>
                    Skills
                </button>
                <button className="nav_qualifications-btn" onClick={() => handleNav(qualRef)}>
                    Qualifications
                </button>
                <button className="nav_projects-btn" onClick={() => handleNav(projectsRef)}>
                    Projects
                </button>
                <button className="nav_contacts-btn" onClick={() => handleNav(contactsRef)}>
                    Contacts
                </button>
                <ThemeToggle />
            </div>
        </nav>
    );
}
