# ReactJS Listing Marketplace Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-v1.4-blue.svg)](CODE_OF_CONDUCT.md)
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue.svg)](SECURITY.md)

A modern, responsive Listing Marketplace Application built with React.js. This application provide a seamless interface for users to browse real estate listings, view detailed property information, and contribute by creating new property listings.

## Key Features

- **Dynamic Home Page**: A visually engaging landing page with a hero section and a grid of featured property listings.
- **Detailed Property Views**: Comprehensive detail pages for each listing, featuring high-quality images, author metadata, and interactive action icons (edit/delete).
- **Property Creation Suite**: A dedicated interface for users to submit new listings, designed with user experience in mind.
- **Sidebar & Navigation**: Intuitive sidebar with "About Me" sections, category filters, and social media integration.
- **Modern UI/UX**: Built with custom CSS, utilizing modern design principles like responsive layouts and interactive elements.
- **Search Functionality**: Integrated search icon in the top navigation bar for quick access.

## Screenshots

| Home Page | Detail Page | Create Page |
| :---: | :---: | :---: |
| ![Home Page](public/home-page.png) | ![Detail Page](public/app-detail-page.png) | ![Create Page](public/app-create-page.png) |

## Technologies Used

- **React.js (v18+)**: Leveraging the latest React features for efficient UI rendering.
- **React Router DOM (v6)**: For robust and declarative client-side routing.
- **Custom CSS (Vanilla)**: For a unique and tailored application aesthetic.
- **Babel**: Modern JavaScript transpilation (refined with project-specific plugins).
- **ESLint**: Standardized coding practices for maintainable and error-free code.

## Recent Improvements

To ensure project stability and modern standards, the following updates were recently performed:

- **Environment Modernization**: Updated the Browserslist database to the latest version.
- **Dependency Optimization**: Resolved Babel warnings by formally adding `@babel/plugin-proposal-private-property-in-object`.
- **Code Quality & Accessibility**:
  - Fixed ESLint warnings related to template strings in non-template literals.
  - Improved accessibility by adding missing `alt` props to image elements.
  - Refined JSX syntax (e.g., transitioning from `class` to `className`).

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/aadhar41/reactjs-listing-marketplace-application.git
   cd reactjs-listing-marketplace-application
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production in the `build` folder.

## Community & Contribution

We welcome contributions! Please see our guides below to get started:

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Report a Bug](https://github.com/aadhar41/reactjs-listing-marketplace-application/issues/new?template=bug_report.yml)
- [Request a Feature](https://github.com/aadhar41/reactjs-listing-marketplace-application/issues/new?template=feature_request.yml)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Specialized for educational and portfolio purposes.
