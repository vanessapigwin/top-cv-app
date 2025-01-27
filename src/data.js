const general = {
  name: "Vanessa Rica F. Tan Cardoso",
  email: "vanessa---------@gmail.com",
  contactNo: "+62920------",
  github: "github.com/vanessa------",
};

const experiences = [
  {
    key: 2,
    title: "Software Engineer",
    employer: "Arch Global Services Incorporated",
    start: "November 2023",
    end: "Present",
    accomplishments: [
      "Develop pricing rater APIs under actuarial department",
      "Assist in improving developer experience for actuaries, enforcing coding standards and test-driven development",
      "App support and communication for production issues in coordination with Infrastructure, Underwriting IT and Policy Writing IT Teams",
    ],
  },
  {
    key: 1,
    title: "Statistical Data Scientist",
    employer: "GfK",
    start: "May 2022",
    end: "May 2023",
    accomplishments: [
      "Develop internal web apps for linear optimization and missing retailer data modeling",
      "Develop web scrapers and GUI for marketing team",
      "Upscale existing Excel dashboards for easier updates",
    ],
  },
  {
    key: 0,
    title: "Geotechnical and Structural Engineer",
    employer: "various companies",
    start: "2009",
    end: "May 2022",
    accomplishments: [
      "Transform field data from Excel to technical reports",
      "Develop spreadsheets and tools for foundation and structural design",
      "Coordinate with clients and stakeholders from planning to construction",
    ],
  },
];

const education = [
  {
    key: 1,
    degree: "M.S. Civil Engineering - Geotechnical",
    school: "University of the Philippines",
    yearGraduated: "2016",
  },
  {
    key: 0,
    degree: "B.S. Civil Engineering",
    school: "University of Santo Tomas",
    yearGraduated: "2008",
  },
];

const skills = [
  {
    key: 2,
    content:
      "Backend Development - Python (Flask, pytest, pandas), Azure Functions, MSSQL",
  },
  {
    key: 1,
    content: "Automation and Scraping - html, css, js, Selenium",
  },
  {
    key: 0,
    content: "CI / CD - git, GitHub Workflows, Linux, Docker",
  },
];

export { general, experiences, education, skills };
