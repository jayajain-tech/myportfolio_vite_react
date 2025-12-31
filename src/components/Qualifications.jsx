import React from 'react';
/**
<!--
  Qualifications Section:
  Shows education and work experience in two columns.
-->
*/
export default function Qualifications() {
    return (
            <>
        <section className="container qualifications">
                <h3 className="qualifications_title">Qualifications</h3>
                <div className="qualifications_columns">
                    <div className="qualifications_education">
                        <h4>Education</h4>
                        <ul>
                            <li>B.E. in Computer Science, XYZ University, 2011</li>
                            <li>Certified AWS Solutions Architect</li>
                            <li>Certified Kubernetes Administrator</li>
                        </ul>
                    </div>
                    <div className="qualifications_experience">
                        <h4>Work Experience</h4>
                        <ul>
                            <li>Senior Software Engineer, Telstra (2021 - Present)</li>
                            <li>Software Engineer, Neewee (2017 - 2021)</li>
                            <li>Developer, Ericsson (2011 - 2017)</li>
                        </ul>
                    </div>
                </div>
            </section>
                </>
    );
}