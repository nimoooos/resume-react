import { Link } from "react-router-dom";
import stylesheet from './Resume.css'
import competenciesData from './competencies.json'
import projectsData from './projects.json'

export default function ResumeRoute() {
    const city = "San Jose, California"
    const email = "d.song.149@gmail.com"
    const professionalSummary = "Software Developer with experience building and maintaining full stack applications. Skilled in JavaScript/TypeScript, Python, and C#, with hands-on work in system optimization, user-centric design, and cross-functional collaboration. Currently training through Microsoft Software and Systems Academy to deepen expertise in cloud-native development."
    const competencies = competenciesData.data;
    const projects = projectsData.data;

    return (
        <div className="container border border-secondary m-3" style={stylesheet}>
            <div className="todo d-none">
                <h1>TODO</h1>
                <li>Turn entries into reusable components</li>
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
                <li>Led multiple full stack web applications through SDLC, ensuring timely delivery and high-quality products.</li>
                <li>Conducted iterative usability testing to improve user experience, interface design, and product effectiveness based on direct feedback.</li>
                <li>Mentored new developers on tools, workflows, and best practices, accelerating onboarding and strengthening overall team capability.</li>
            </ul>
            <hr className="horizontalLine" />
            <h2>Education</h2>
            <ul className="bulletPoints">
                <li>Microsoft Software Systems Academy - Cloud Application Development (PCAD17)</li>
                <li>B.S. Computer Science (Candidate) - Hawaii Pacific University</li>
                <li>A.S. Biotechnology - Ohlone College</li>
            </ul>
        </div>

    )
}
