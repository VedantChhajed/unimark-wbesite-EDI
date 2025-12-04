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
3. Set up Firebase configuration:
    
    **Option A: Using the local config file (Recommended for development)**
    ```bash
    # The repository includes a template with placeholder values in FrontEnd/js/env-config.js
    # To use your actual Firebase credentials:
    
    # 1. Copy the local config template (contains actual credentials, gitignored)
    cp FrontEnd/js/env-config.local.js FrontEnd/js/env-config.js
    
    # 2. Or manually edit FrontEnd/js/env-config.js and replace the placeholder values
    #    with your Firebase project credentials from the Firebase Console
    ```
    
    **Option B: Using .env file (For build tools)**
    ```bash
    # Copy the example environment file
    cp .env.example .env
    
    # Edit .env and fill in your Firebase configuration values
    # You can get these from your Firebase Console
    ```
    
4. Install dependencies (for backend):
    ```bash
    cd BackEnd
    npm install
    ```
5. Start the development server:
    ```bash
    # For frontend, use any static file server, e.g.:
    cd FrontEnd
    python3 -m http.server 8080
    
    # For backend:
    cd BackEnd
    npm start
    ```

**Important Security Notes:**
- `FrontEnd/js/env-config.js` in the repository contains placeholder values
- `FrontEnd/js/env-config.local.js` contains actual credentials and is gitignored
- Never commit files containing actual Firebase API keys to version control
- For production deployment, use environment variables or secure configuration management

## Environment Variables

This project uses environment variables to manage Firebase API keys and configuration. Sensitive credentials should never be committed to version control.

### Setup for Development

The project includes two configuration approaches:

#### 1. Frontend Configuration (FrontEnd/js/env-config.js)

This file is loaded by all HTML pages before Firebase initialization. The repository version contains placeholder values. To set up:

```bash
# Copy the local config file with actual credentials
cp FrontEnd/js/env-config.local.js FrontEnd/js/env-config.js
```

Or manually edit `FrontEnd/js/env-config.js` and replace `YOUR_API_KEY_HERE` placeholders with your actual Firebase credentials.

#### 2. .env File (For build tools)

If you're using a build tool that supports environment variable injection:

1. Copy `.env.example` to `.env`
2. Fill in your Firebase configuration values from the Firebase Console

### Firebase Projects

The application uses three Firebase projects:
   - **Project 1 (unimark-ummaa)**: Main project for authentication and core features
   - **Project 2 (unimark-b93b7)**: Used for signup and profile management
   - **Project 3 (timelyremind-1d361)**: Additional features

### For Production

When deploying to production:
1. Use your hosting platform's environment variable injection (e.g., Netlify, Vercel)
2. Or use a build tool to inject environment variables at build time
3. Update `env-config.js` during your build process to inject production values
4. Never expose sensitive credentials in client-side code

## Contributing

We welcome contributions from the community. Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or suggestions, please contact us at [email@example.com](mailto:email@example.com).
