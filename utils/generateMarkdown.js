// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    default:
      return '';

  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';

    case 'ISC License':
      return '(https://opensource.org/licenses/ISC)';

    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';

    case 'Eclipse Public License 1.0':
      return '(https://opensource.org/licenses/EPL-1.0)';

    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';

    default:
      return '';

  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  let badge = renderLicenseBadge(answers.license)
  let licLink = generateLicenseLink(answers.license)
  return `# ${answers.title} 
${badge}
 
## Description  
<a name="descrip"></a>
${answers.description} 
 
## Table of Contents 
- [Description](#description)\n
- [Installation Instructions](#instructions) \n
- [Usage Info](#usage) \n
- [Contribution Guidelines](#contributions) \n
- [Test Instructions](#tests) \n
- [License](#license) \n
- [Questions](#questions) \n
 
## Installation Instructions 
<a name="instr"></a> 
 
>${answers.installation} 
 
## Usage information 
<a name="usage"></a>  
 
>${answers.usage} 
 
## Contribution Guidelines 
<a name="contribution"></a>  
 
>${answers.contributions} 
 
## Test Instructions 
<a name="testing"></a>  
 
>${answers.tests} 
 
## License 
<a name="licence"></a>  
This software is licensed under the
${answers.license}, for further information or to read the documentation, visit ${licLink}. 
 
## Questions 
<a name="ques"></a> 

If you have any questions please check the issue for the associated repo at my github account: ${answers.github} \n
For any additional questions, feel free to contact me at my work email: ${answers.email}`
}
module.exports = generateMarkdown;
