# MailCraft

**MailCraft** is a web application designed to streamline the process of sending personalized emails. With a simple interface, users can create, customize, and send emails effortlessly. This tool is especially useful for individuals or small businesses who need to send emails regularly without complicated setups.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage Instructions](#usage-instructions)
  - [Sending Emails](#sending-emails)
  - [Handling Errors](#handling-errors)
- [Troubleshooting](#troubleshooting)
  - [Common Issues](#common-issues)
  - [Advanced Configuration](#advanced-configuration)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Overview
**MailCraft** offers a simple and efficient way to send emails using a web-based interface. The application leverages **Node.js**, **Express.js**, and **Nodemailer** for a seamless email-sending experience, integrated with Gmail's SMTP server for reliable delivery.

## Features
- **User-Friendly Interface**: A clean and intuitive interface for creating and sending emails.
- **Customizable Content**: Compose emails with the ability to specify recipients, subjects, and content dynamically.
- **Email Feedback**: Provides immediate visual feedback on the success or failure of the email sent.
- **SMTP Integration**: Uses Gmail’s SMTP service for secure and reliable email delivery.
- **Responsive Design**: Compatible with various screen sizes for a seamless experience on both desktop and mobile.

## Project Structure
```
MailCraft/
│
├── node_modules/           
├── public/                
│   ├── css/
│   │   └── styles.css      
│   ├── images/
│   │   └── email-logo.png   
│   └── js/
│       └── main.js          
├── views/                   
│   └── index.ejs            
├── .env                     
├── package-lock.json        
├── package.json             
├── server.js                
└── README.md                
```

## Setup Instructions

### Prerequisites
Before setting up **MailCraft**, ensure that you have the following tools installed:
- **Node.js** (v12 or higher) and **npm**: [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/)

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/MailCraft.git
   cd MailCraft
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Configuration
1. **Environment Variables**:
   - Create a `.env` file in the project root:
     ```env
     EMAIL=your-email@gmail.com
     PASSWORD=your-email-password
     ```
   - Replace `your-email@gmail.com` and `your-email-password` with your Gmail credentials. Make sure to enable "Less Secure Apps" on your Gmail account if necessary.

2. **Running the Application**:
   - Start the server with the following command:
     ```bash
     node server.js
     ```
   - The server will start on `http://localhost:3000`.

## Usage Instructions

### Sending Emails
1. **Access the Application**:
   - Navigate to `http://localhost:3000` in your web browser.
  
2. **Fill Out the Form**:
   - Enter the recipient's email address.
   - Specify the email subject.
   - Compose the email content in the provided text area.
   - Click the **Send Email** button to dispatch the email.

3. **Feedback**:
   - A success message will appear if the email is sent successfully.
   - An error message will display if there's an issue with sending the email.

### Handling Errors
- Errors are displayed at the top of the form in red. Refer to the **Troubleshooting** section for solutions.

## Troubleshooting

### Common Issues
1. **SMTP Authentication Errors**:
   - Double-check that your email and password are correct in the `.env` file.
   - Ensure that you have enabled "Less Secure Apps" for your Gmail account if you are using basic authentication.

2. **Application Crashes**:
   - If the app crashes upon launch, verify that all required packages are installed using `npm install`.

3. **Emails Not Being Sent**:
   - Check your internet connection.
   - Verify that the SMTP credentials in the `.env` file are correct.

### Advanced Configuration
- **Using a Different Email Provider**:
  - Update the `server.js` file to configure a different SMTP service. Change the `nodemailer.createTransport` settings accordingly.

- **Adjusting Port**:
  - Modify the `PORT` variable in `server.js` if you need to run the application on a different port.

## Contributing
Feel free to contribute to this project! Here’s how you can get started:
1. Fork the repository.
2. Create a new branch (`feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add an amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a pull request.

## Acknowledgements
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Lightweight web framework for Node.js.
- **Nodemailer**: Library for sending emails.
- **EJS**: Templating engine for generating HTML markup.
- **CSS**: Styling framework for the front-end.
- **GitHub**: Code hosting platform for version control.

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

---