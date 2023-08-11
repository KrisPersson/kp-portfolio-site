import "./Project.scss"
import { IProject } from "../interfaces"


export default function Project({ projectName, thumbnail, links, tech }: IProject) {

    return (
        <article className="project">
            <h2>{ projectName }</h2>
            <section className="project__img-container">
                { thumbnail ? <a href={ links.ui } target="_blank"><img src={ thumbnail } /> </a>: <><i className="fa-regular fa-image"></i><p>NO PREVIEW</p></> }
            </section>
            <aside className="project__links-container">
                { links.ui ? <a href={ links.ui } target="_blank">UI</a> : <a>-</a>}
                <a href={ links.code } target="_blank"><i className="fa-brands fa-github"></i>Code</a>
            </aside>
            <aside className="project__techniques-container">
                { tech.map((technique, i) => <img key={i} className="tech-logo" src={`/${technique}.svg`} alt={technique} />) }
            </aside>
        </article>
    )
}


