// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'APACHE 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GPL 3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'BSD 3') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://mit-license.org/'
    } else if (license === 'APACHE 2.0') {
        return 'https://apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL 3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    } else if (license === 'BSD 3') {
        return 'https://opensource.org/licenses/BSD-3-Clause'
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return `This project is licensed under the ${license} license. For complete copyright information click here: [link](${renderLicenseLink(license)})`
    } else if (license === 'APACHE 2.0') {
        return `This project is licensed under the ${license} license. For complete copyright information click here: [link](${renderLicenseLink(license)})`
    } else if (license === 'GPL 3.0') {
        return `This project is licensed under the ${license} license. For complete copyright information click here: [link](${renderLicenseLink(license)})`
    } else if (license === 'BSD 3') {
        return `This project is licensed under the ${license} license. For complete copyright information click here: [link](${renderLicenseLink(license)})`
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
    ## ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}

    ## Table of Contents
        * [Installation] (#description)
        * [Usage] (#usage)
        * [License] (#license)
        * [Contributing] (#contributing)
        * [Tests] (#tests)
        * [Questions] (#questions)
    
    ## Installation
    ${data.install}
    
    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseSection(data.license)}

    ## Contributing
    ${data.contribute}

    ## Tests
    ${data.test}

    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at [${data.email}]. You can find more of my work at [${data.username}]
`;
}

module.exports = generateMarkdown;
