# College Attendance System

## Project Overview

This project is a collaborative effort to build a comprehensive college attendance website. The system aims to streamline the process of tracking and managing student attendance, providing an efficient and user-friendly interface for both students and faculty.

## Features

- **User Authentication**: Secure login for students, faculty, and administrators.
- **Attendance Tracking**: Easy marking of attendance with real-time updates.
- **Reports Generation**: Automated generation of attendance reports for analysis.
- **Notifications**: Alerts for students and faculty regarding attendance status.
- **Admin Dashboard**: Centralized control panel for managing users and system settings.
- **Professional Organizer**: Helps user organize their academic and professional lives.

## Team Members

- **Mandar Navarkar** - Project Manager/Head
- **Atharva Ghule** - Frontend Developer / Database Administrator
- **Usmeet Sonawane** - UI/UX Designer
- **Allen Joseph** - Backend Developer
- **Manjeet Patil** - Frontend Developer 

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/attendance-system.git
    ```
2. Navigate to the project directory:
    ```bash
    cd attendance-system
    ```
3. Set up environment variables:
    ```bash
    # Copy the example environment file
    cp .env.example .env
    
    # Edit .env and fill in your Firebase configuration values
    # You can get these from your Firebase Console
    ```
4. Install dependencies:
    ```bash
    npm install
    ```
5. Start the development server:
    ```bash
    npm start
    ```

**Important:** Make sure to include `env-config.js` script in your HTML files before any Firebase initialization scripts:
```html
<script src="/FrontEnd/js/env-config.js"></script>
```

## Environment Variables

This project uses environment variables to manage Firebase API keys and configuration. The `.env` file contains sensitive information and should never be committed to version control.

### Setup

1. Copy `.env.example` to `.env`
2. Fill in your Firebase configuration values from the Firebase Console
3. The project uses three Firebase projects:
   - **Project 1 (unimark-ummaa)**: Main project for authentication and core features
   - **Project 2 (unimark-b93b7)**: Used for signup and profile management
   - **Project 3 (timelyremind-1d361)**: Additional features

### For Production

When deploying to production, make sure to:
1. Set environment variables in your hosting platform
2. Or use a build tool that can inject these values at build time
3. The `env-config.js` file should be updated to load from your production environment

## Contributing

We welcome contributions from the community. Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or suggestions, please contact us at [email@example.com](mailto:email@example.com).
