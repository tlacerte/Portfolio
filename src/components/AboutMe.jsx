import React from 'react'
import Bonus from './Bonus'

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <h1>About Me</h1>
            <p className="aboutme-p">I am a full-stack software engineer with a background in tech sales and client success. I have a uniquely positive view of the world, and my decidedly hopeful outlook is what pushes me every day to impact the technology sector in a meaningful way. With my client-facing skills, I am able to build tools that streamline the stakeholder's experience. </p>
            <br />
            <h4>Technical Skills</h4>
            <div className="skills-list">
                <p>JavaScript | NodeJS | Express | React | MongoDb </p>
                <p>Python | Django | PostgreSQL</p>
                <p>HTML | CSS | Bootstrap | Git | AWS | Version Control</p>
            </div>
            <br />
            <h4>Work Experience</h4>
            <div className="work-experience">
                <div className="indeed">
                    <h5>Client Success Specialist</h5>
                    <h6>Indeed.com</h6>
                    <p>Indeed is the #1 job site in the world with over 250 million unique visitors every month. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. I provided expert support for hundreds of companies every day through navigation of the website, use of the Pay-Per-Click (PPC) advertising model, and support of all Indeed products. I aimed to ensure client satisfaction through collaboration with our Product, Operations, Search Quality and Aggregation teams to troubleshoot problems, and improve processes. </p>
                </div>
                <div className="meltwater">
                    <h5>Software Sales Consultant</h5>
                    <h6>Meltwater</h6>
                    <p>Meltwater is the global leader in media intelligence, providing software solutions to over 30,000 organizations around the world. Responsibilities included generating and qualifying leads, maintaining a pipeline of 300 potential clients, and conducting the entire sales process: prospect, cold call, software demonstration, and close.</p>
                </div>
            </div>
        <div>
            <Bonus />
        </div>
        </div>
    )
}

export default AboutMe