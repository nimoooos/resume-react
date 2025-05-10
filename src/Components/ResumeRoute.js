import { Link } from "react-router-dom";
import stylesheet from '../css/Resume.css'

export default function ResumeRoute() {
    const city = "San Jose, California"
    const email = "d.song.149@gmail.com"
    const professionalSummary = "Adaptive and versatile Full Stack Developer with comprehensive experience in web application development. Demonstrated success in leading projects to completion, migrating applications to new stacks, and improving user experiences. Proven ability to streamline operations and contribute to collaborative development environments."
    const competencies = [
        {
            "category": "Languages",
            "competencies": [
                "JavaScript/TypeScript (React, Vue, Node.js)",
                "C# (.NET)",
                "Python (Flask, SQLAlchemy)",
                "HTML",
                "CSS (Bootstrap)",
            ]
        },
        {
            "category": "Tools",
            "competencies": [
                "Git (GitHub, GitLab)",
                "Container (Docker)",
                "Database (PostgreSQL, MongoDB, ORM)",
                "Linux (WSL, Ubuntu)",
                "Hosting (CloudFlare, render.com)",
                "Microsoft 365 Suite (Power App, Power Automate, Power BI, SharePoint List)",
            ]
        },
        {
            "category": "Certifications",
            "competencies": [
                "CompTIA Security+ SYA-701",
            ]
        },
        {
            "category": "Other",
            "competencies": [
                "Agile Development",
                "REST API Design",
                "User Experience Design",
                "Data Visualization",
                "English/Korean Bilingual"
            ]
        },
    ]
    const projects = [
        {
            "projectName": "COMP/CON",
            "repository": {
                "link": "https://github.com/massif-press/compcon/pulls/nimoooos",
                "imgAlt": "COMP/CON Pull Requests",
                "imgSrc": "https://img.shields.io/badge/GitHub-Pull_Requests-Black"
            },
            "technologies": "TypeScript, Vue, Node.js, GitHub",
            "roles": [
                {
                    "role": "Open Source Contributor",
                    "longDescription": "While onboarding, I self-taught Vue.js and quickly ramped up on a high-complexity codebase, contributing new features to improve both functionality and user experience. I implemented a data visualization tool that allows users to export session prep materials, and collaborated closely with the expansion’s lead designer to deliver a key narrative feature ahead of release. Throughout the process, I adhered to commit guidelines and adopted best practices in collaborative development within an active open-source project.",
                    "bulletPoints": [
                        "Collaborated with an expansion’s lead designer to deliver a key narrative feature, completing implementation ahead of release and maintaining system stability.",
                        "Self-learned Vue.js in parallel with onboarding, enabling seamless integration of new features into a high-complexity system.",
                        "Implemented a new data visualization feature to empower users to export session prep materials.",
                        "Followed commit guidelines and learned collaborative development practices during contribution.",
                    ]
                }
            ]
        },
        {
            "projectName": "Professional Website",
            "repository": {
                "link": "https://github.com/nimoooos/resume-react",
                "imgAlt": "GitHub Repository",
                "imgSrc": "https://img.shields.io/badge/GitHub-Repository-Black"
            },
            "technologies": "JavaScript (React), HTML (CSS, Bootstrap), CloudFlare, GitHub",
            "roles": [
                {
                    "role": "Webmaster",
                    "longDescription": "Designed and developed a website to showcase projects and skills. Implemented responsive design principles to ensure optimal viewing experience across devices. Utilized CloudFlare for domain management and hosting.",
                    "bulletPoints": [
                        "Designed and developed a website to showcase projects and skills.",
                        "Implemented responsive design principles for optimal viewing experience across devices.",
                        "Utilized CloudFlare for domain management and hosting."
                    ]
                }
            ]
        },
        {
            "projectName": "Electronic Training Resource Integration Council (eTRIC)",
            "repository": {
                "link": "",
                "imgAlt": "Decommissioned",
                "imgSrc": "https://img.shields.io/badge/GitLab-Decommissioned-red"
            },
            "technologies": "Java (SpringBoot), JavaScript (Angular), Database (Postgres), Docker, GitLab, Linux (WSL, Ubuntu)",
            "roles": [
                {
                    "role": "Maintainer",
                    "longDescription": "Led the maintenance of eTRIC for 6 months. Faced challenges as the sole maintainer of the project with minimal documentation, and eventually led to decommissioning of eTRIC due to resource constraints. Following the determination, immediately began identifying alternate solutions to continue the functionality of the project.",
                    "bulletPoints": [
                        "Led the maintenance of eTRIC for 6 months, overcoming challenges as the sole maintainer with minimal documentation.",
                        "Strategically decommissioned eTRIC, initiating immediate efforts to identify alternative solutions for project continuity."
                    ]
                }
            ]
        },
        {
            "projectName": "Power App for Training Resource Integration Council (PATRIC)",
            "repository": {
                "link": "",
                "imgAlt": "Proprietary",
                "imgSrc": "https://img.shields.io/badge/Power_App-Proprietary-red"
            },
            "technologies": "Microsoft 365 Suite (Power App, SharePoint List, Power Automate), OData",
            "roles": [
                {
                    "role": "Lead Developer",
                    "longDescription": "Led development of PATRIC in accordance with regulatory and end user requirements. Utilized ODATA queries for data retrieval and implemented CRUD functionality for bids, enabling administrators and bidders to manage bids efficiently. Created user-friendly data visualization through consistent feedback cycle, facilitating resource management for 30 entities, including Joint Forces such as the US Army, Navy, Marines, and Air Force, encompassing over 300 ranges and providing visualization of bidding activities.",
                    "bulletPoints": [
                        "Led development of PATRIC, ensuring compliance with regulatory and end-user requirements.",
                        "Implemented OData queries and CRUD functionality for efficient bid management by end users.",
                        "Transformed end-user feedback into fully functional features and a streamlined UI, enhancing overall usability and functionality.",
                        "Facilitated resource management for 30+ government entities, by effectively presenting 1000+ annual bids for 300+ ranges."
                    ]
                }
            ]
        },
        {
            "projectName": "Tropic Lightning Week Homepage",

            "repository": {
                "link": "https://github.com/nimoooos/Guadalcanal-Cup-Scoring",
                "imgAlt": "Guadalcanal-Cup-Scoring Repository",
                "imgSrc": "https://img.shields.io/badge/GitHub-Repository-Black"
            },
            "technologies": "Python (Flask, SQLAlchemy), SQL (Postgres, ORM), HTML (CSS, Bootstrap, JavaScript), render.com",
            "roles": [
                {
                    "role": "Lead Developer",
                    "longDescription": "Developed a web-based scoring application for managing scores in a sports tournament involving 20 teams and 18 events. Implemented CRUD operations and score calculation algorithms based on team placements and event weights. Identified bottleneck and optimized load time by implementing snapshotting for database access, resulting in an 85% reduction in load time. Implemented CSV export functionality for quick and easy data backup and sharing.",
                    "bulletPoints": [
                        "Developed a real-time, web-based leaderboard, supporting 20 teams across 18 events.",
                        "Implemented CRUD operations and score calculation algorithms based on user requirements, streamlining the previous Excel-based system.",
                        "Identified and optimized database access bottleneck, reducing worst case load time by up to 85%.",
                        "Collaborated with event owners to implement CSV export functionality, enabling data backup and providing a fallback to manual processes in case of system disruptions.",
                        "Trained and mentored team members on the codebase to prepare for the next project cycle, saving development time and ensuring a smooth transition."
                    ]
                }
            ]
        },
        {
            "projectName": "DFAC Dash",
            "repository": {
                "link": "",
                "imgAlt": "Proprietary",
                "imgSrc": "https://img.shields.io/badge/GitHub-Proprietary-red"
            },
            "technologies": "JavaScript (React-CRA, bcrypt, Axios(REST API), Express, Node.js), Database (MongoDB, Postgres), HTML (CSS, Bootstrap), GitHub, Docker",
            "roles": [
                {
                    "role": "Frontend Developer",
                    "longDescription": "Contributed to the development of a web application aimed at optimizing operations for military Dining Facilities (DFACs), facilitating the seamless handling of to-go orders from receipt to handoff. Primarily worked on frontend, attempting to minimize the number of clicks needed to perform primary function. Produced during Bravo 11 Hackathon.",
                    "bulletPoints": [
                        "Competed in Bravo 11 Hackathon, contributing to the completion of project prototype within deadline.",
                        "Contributed to API design to ensure seamless communication between frontend and backend systems.",
                        "Adopted and advocated for using Docker for local development, enhancing team collaboration and code consistency.",
                        "Implemented a user-friendly interface to minimize the number of clicks needed to perform primary functions.",
                        "Authored installation instructions in README.md, facilitating team collaboration, onboarding processes, and streamlined development practices."
                    ]
                },
                {
                    "role": "Database Transition Lead",
                    "longDescription": "Played an instrumental role in upgrading the database from PostgreSQL to MongoDB, enhancing code readability, maintainability, and scalability. This upgrade also involved the design and implementation of a REST API to enable efficient communication between components.",
                    "bulletPoints": [
                        "Adopted MongoDB for its JSON-style storage format, improving data compatibility with web standards.",
                        "Refactored raw SQL queries and implemented ORM, enhancing code readability and maintainability.",
                        "Designed and implemented a REST API to facilitate efficient communication between components."
                    ]
                }
            ],
        }
    ]

    return (
        <div className="container border border-secondary m-3" style={stylesheet}>
            <div className="todo d-none">
                <h1>TODO</h1>
                <li>Turn entries into reusable components</li>
                <li>Implement CSS for said components</li>
                <li>Make contact info section smaller</li>
            </div>

            <h1>Soomin Song</h1>
            <p className="contact-info">{city} | <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>{email}</a> | <a href="https://nimoooos.work">https://nimoooos.work</a></p>
            <p>{professionalSummary}</p>
            <hr className="horizontalLine" />
            <h2>Competencies</h2>
            <table className="competenciesTable">
                {competencies.map((x) => {
                    return (
                        <tr className="competenciesRow">
                            <th className="competenciesCategory">{x.category}</th>
                            <td className="competenciesList">
                                | {x.competencies.map((y) => {
                                    return `${y} | `
                                })}
                            </td>
                        </tr>
                    )
                })}
            </table>

            <hr className="horizontalLine" />
            <h2>Projects</h2>
            {projects.map((x) => {
                return (<div className="projectBlock">
                    <h4 className="project">{x.projectName + " "}
                        {
                            x.repository.link ?
                                <Link to={x.repository.link}>
                                    <img className="shieldBadge" alt={x.repository.imgAlt} src={x.repository.imgSrc} />
                                </Link> :
                                <img className="shieldBadge" alt={x.repository.imgAlt} src={x.repository.imgSrc} />
                        }
                    </h4>
                    <h6 className="techStack">{x.technologies}</h6>
                    {x.roles.map((y) => {
                        return (
                            <>
                                <h5 className="jobTitle">{y.role}</h5>
                                {/* <p>{y.longDescription}</p> */}
                                <ul className="bulletPoints">
                                    {y.bulletPoints.map((z) => {
                                        return <li>{z}</li>
                                    })}
                                </ul>
                            </>
                        )
                    })}
                </div>
                )
            })}
            <hr className="horizontalLine" />
            <h2>Experiences</h2>

            <h3>Full Stack Developer - Lightning Labs (Jul 2023 - Jan 2025)</h3>
            <ul className="bulletPoints">
                <li>Led multiple full stack web applications through SDLC, ensuring timely delivery and high-quality products</li>
                <li>Conducted regular usability testing to enhance user satisfaction and improve product interfaces</li>
                <li>Trained and mentored new developers to enhance their skills and contribute effectively to the team</li>
            </ul>
            <hr className="horizontalLine" />
            <h2>Education and Certifications</h2>
            <ul className="bulletPoints">
                <li>Microsoft Software Systems Academy - Cloud Application Development (PCAD17)</li>
                <li>B.S. Computer Science (Candidate) - Hawaii Pacific University</li>
                <li>A.S. Biotechnology - Ohlone College</li>
                <li>CompTIA Security+ SYA-701</li>
            </ul>
        </div>

    )
}
