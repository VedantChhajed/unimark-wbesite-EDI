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
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Contributing

We welcome contributions from the community. Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Deployment

This project is configured for automatic deployment to GitHub Pages. The frontend application is automatically deployed whenever changes are pushed to the `main` branch.

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: GitHub Actions
   
2. **Automatic Deployment**:
   - The workflow file `.github/workflows/deploy.yml` handles automatic deployment
   - Every push to the `main` branch triggers a new deployment
   - You can also manually trigger deployment from the **Actions** tab

3. **Access Your Site**:
   - Once deployed, your site will be available at: `https://<username>.github.io/<repository-name>/`
   - For this repository: `https://vedantchhajed.github.io/unimark-wbesite-EDI/`

### Manual Deployment

To manually trigger a deployment:
1. Go to the **Actions** tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

## Contact

For any questions or suggestions, please contact us at [email@example.com](mailto:email@example.com).
