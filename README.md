# CareFinder

CareFinder is a web application aimed at assisting users in locating, exporting, and sharing hospitals. It addresses the critical need for easy access to healthcare facilities, particularly in regions like Nigeria. This project stems from a desire to leverage technology to tackle healthcare challenges and improve accessibility to medical services.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technical Overview](#technical-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Future Plans](#future-plans)
- [Contributing](#contributing)

## Introduction

CareFinder serves as a comprehensive solution for finding hospitals based on various criteria, facilitating efficient searches during emergencies or routine healthcare needs. Users can filter hospitals by name, specialization, or location, ensuring they find relevant facilities quickly. Additionally, features for exporting hospital lists and sharing them via email enhance the application's utility. With user authentication in place, authorized users can manage hospital records, including creation, updating, and deletion.

## Features

- **Hospital Search:** Easily locate hospitals based on name, specialization, or location.
- **Filtering Options:** Refine search results using input and select fields for precise matches.
- **Export Functionality:** Export hospital lists as CSV files and share them via email.
- **User Authentication:** Secure login system for managing hospital records, with administrative privileges.
- **Pagination:** Efficiently navigate through large lists of hospitals with paginated results.
- **Detailed Hospital Information:** View comprehensive details about selected hospitals, including address, contact details, and services provided.
- **Error Handling:** Custom error pages for handling unknown URLs and unavailable hospitals.
- **Form Validation:** Ensure data integrity with form validation using Yup and React Hook Form.

## Technical Overview

The frontend of CareFinder is built using React, JavaScript, and TypeScript, with Redux Toolkit for state management. React Query is utilized for data caching, ensuring optimal performance by reducing unnecessary API calls. Axios is employed for data fetching, while React Router facilitates seamless navigation within the application. Form validation is implemented using Yup and React Hook Form for enhanced data integrity.

On the backend, CareFinder is developed with C#, ASP.NET Core, and Jwt for token generation, ensuring secure user authentication. The application is hosted on Azure, leveraging its scalability and reliability for backend operations. The frontend is deployed on Vercel, ensuring a smooth user experience with efficient delivery of web assets.

## Prerequisites


Before you begin using CareFinder, make sure you have the following:

- **Node.js:** You will need Node.js to run the app. [Download Node.js](https://nodejs.org/)

- **yarn:** This project uses yarn to manage dependencies. You can install it by running: `yarn install`.

- **Git:** You'll need Git to clone the repository. Install it from [Git's official website](https://git-scm.com/).

## Installation

To get CareFinder up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ameenaminah/CareFinder.git

2. Change to the project directory:

     ```bash
    cd CareFinder

3.  Install the required dependencies using Yarn:

     ```bash
    yarn install

## Usage

Upon loading, users are greeted with a homepage providing an overview of the application's purpose. Navigating to the Hospitals page, users can search for hospitals based on their preferences. Filtering options allow for precise matches, and paginated results ensure smooth navigation through the list of hospitals. Detailed information about selected hospitals is available on the HospitalDetail page, with links to external services for additional functionalities.

Authenticated users gain access to core actions such as creating, updating, and deleting hospitals. The admin role, managed manually from the backend, ensures that only authorized individuals can perform these actions, maintaining data security and integrity.

Other pages include Contact for reaching out to the team via email, About with project information, and Review for future features. 

## Future Plans

The current version of CareFinder represents the minimum viable product (MVP). Future plans include adding more features such as reviews, expanding administrative functionalities, and potentially developing a mobile app using React Native. The ultimate goal is to open-source the project for community contributions, fostering its evolution into a widely utilized solution for addressing healthcare challenges.

## Contributing

Contributions to CareFinder are welcome and encouraged. To contribute, fork the repository on GitHub, make your changes, and submit a pull request. Ensure adherence to coding standards and guidelines, and consider the project's roadmap and future plans when proposing new features or enhancements. Together, we can make CareFinder a valuable tool in improving healthcare accessibility worldwide.
