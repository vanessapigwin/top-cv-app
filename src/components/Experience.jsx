import SectionCard from "./SectionCard";

export default function WorkExperience() {
    return (
        <SectionCard>
            <h2>Professional Experience</h2>
            <h3>Software Engineer, Arch Global Services Incorporated (November 2023 - Present)</h3>
            <ul>
                <li>Develop pricing rater APIs under actuarial department</li>
                <li>Assist in improving developer experience for actuaries, enforcing coding 
                    standards and test-driven development
                </li>
                <li>App support and communication for production issues in coordination with 
                    Infrastructure, Underwriting IT and Policy Writing IT Teams
                </li>
                <li>Tools used: python (Flask, pytest, pandas), Azure Functions, MSSQL, GitHub Workflows</li>
            </ul>
            <h3>Statistical Data Scientist, GfK, (May 2022 - May 2023)</h3>
            <ul>
                <li>Develop internal web apps for linear optimization and missing retailer data modeling</li>
                <li>Develop web scrapers and GUI for marketing team</li>
                <li>Upscale existing Excel dashboards for easier updates</li>
            </ul>
            <h3>Geotechnical and Structural Engineer, various companies, (2009 - May 2022)</h3>
            <ul>
                <li>Transform field data from Excel to technical reports</li>
                <li>Develop spreadsheets and tools for foundation and structural design</li>
                <li>Liaise with clients and stakeholders from planning to construction</li>
            </ul>
        </SectionCard>
    );
}