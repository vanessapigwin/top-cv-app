import SectionCard from "./SectionCard";

export default function Skills () {
    return (
        <SectionCard>
            <h2>Skills</h2>
            <ul>
                <li>
                    <b>Backend Development</b>
                    {" "} 
                    - Python (Flask, pytest, pandas), MSSQL
                </li>
                <li>
                    <b>Automation and Scraping</b>
                    {" "}
                    - html, css, js, Selenium
                </li>
                <li>
                    <b>CI / CD</b>
                    {" "}
                    - git, GitHub Workflows, Linux, Docker
                </li>
            </ul>
        </SectionCard>
    );
}