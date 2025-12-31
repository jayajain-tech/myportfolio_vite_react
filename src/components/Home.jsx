/** <!--
  Home Section:
-->
*/
import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
export default function Home() {

    return (
            <>
            <section className="container home">
                <div className="home_info">
                    <h3 className="home_title">Hi, I'm Jaya Prabha Bhura</h3>
                    <h3 className="home_designation">Senior Software Engineer</h3>
                    <h3 className="home_location">Based in Bengaluru</h3>
                </div>
                <figure className="home_profile-pic">
                   { /* <!-- Profile image --> */ }
                    <img
                            src={profilePic}
                            className="home_profile-pic"
                            loading="lazy"
                            decoding="async"
                            alt="Profile pic"
                    />
                </figure>
                <div className="home_left-decor">
                { /*     <!-- Biography and years of experience -->  */ }
                    <p className="home_biography_title">Biography</p>
                    <p className="home_biography_content">Technology Driven Professional with dynamic career in Software Development, Technical Architecture</p>
                    <p className="home_years_of_exp_title">Years of Experience</p>
                    <p className="home_years_of_exp_content">12+</p>
                </div>
                <div className="home_right-decor">
                 { /*  <!-- Companies worked at -->
                    <!--p className="home_contact_title">Contact</p>
                      <p className="home_contact_content">9560130079</p>
                    */ }

                    <p className="home_company_worked_title">Companies Worked At</p>
                    <p className="home_company_worked_content">Ericsson, Neewee, Telstra</p>
                </div>
                <div className="home_actions">
                   { /*   <!-- Contact Me button --> */ }
                    <button className="home_contactme_button"
                     onClick={() => {
                       const contactSection = document.getElementById('contact');
                       if (contactSection) {
                         contactSection.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                    >Contact Me</button>
                </div>
            </section>
            <hr />
                </>
    );
}