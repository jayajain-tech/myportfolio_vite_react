/**<!--
  Contact Section:
  Provides email, phone, and LinkedIn contact options with icons.
  Uses accessible markup for screen readers.
-->
*/
import React from 'react';
export default function Contact() {
    return (
            <>
        <section className="contact-me container">
                <h3 className="contact-me__title">Contacts</h3>
                <div className="contact-me__info">
                   { /*
                    <!-- Email contact with icon -->
                    <!--
              The 'mailto:' link opens the user's default email client to send an email.
              The 'tel:' link prompts the device to call the number (works on mobile and some desktops)
              rel="noopener" improves security when opening links in a new tab by preventing the new page from accessing the window.opener property.
              aria-hidden="true" is an accessibility attribute used in HTML to indicate that an element and all its children should be hidden from assistive technologies like screen readers. This is useful for decorative icons or elements that do not convey meaningful information, ensuring they are ignored by screen readers and do not clutter the accessibility tree.
            -->
            */}
                    <p>
                        <a href="mailto:jaya.prabha@example.com" className="contact-email" aria-label="Send email to jaya.prabha@example.com">
                      <span className="contact-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#0077b5"/>
                      <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="2" strokeLineCap="round" strokeLineJoin="round"/>
                      <rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
                     </svg>
                    </span>
                            jaya.prabha@example.com
                        </a>
                    </p>

                    { /* <!-- Phone contact with icon -->*/}
                    <p>
                        <a href="tel:9530131233" className="contact-phone" aria-label="Call 9530131233">
                    <span className="contact-icon" aria-hidden="true">
                       { /*  <!-- Phone SVG icon --> */ }
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#0077b5"/>
                    <path d="M7 17c2.5 2.5 6.5 2.5 9 0l-2-2c-1 1-2.5 1-3.5 0l-2-2c-1-1-1-2.5 0-3.5l-2-2c-2.5 2.5-2.5 6.5 0 9z" stroke="#fff" strokeWidth="2" />
                    </svg>
                    </span>
                            9530131233
                        </a>
                    </p>
                      { /*<!-- LinkedIn contact with icon -->*/}
                    <p>
                        <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener" className="contact-linkedin" aria-label="View LinkedIn profile">
                    <span className="contact-icon" aria-hidden="true">
                     { /*
                    <!-- LinkedIn SVG icon -->
                    */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#0077b5"/>
                    <path d="M6 9h3v9H6zM7.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10.5 9h3v1.5h.04c.42-.8 1.44-1.64 2.96-1.64 3.17 0 3.75 2.09 3.75 4.81V18h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.4V18h-3z" fill="#fff"/>
                    </svg>
                    </span>
                            LinkedIn
                        </a>
                    </p>
                </div>
        </section>
            </>
    );
}