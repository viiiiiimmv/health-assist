# HealthAssist - AI-Powered Health Assistant

<div align="center">
  <img src="https://res.cloudinary.com/ddyc6aljm/image/upload/v1754977260/Gemini_Generated_Image_tu8vqttu8vqttu8v_niz8ci.png" alt="HealthAssist Logo" width="200"/>
  
  **The AI that cares - Get immediate insights into your symptoms and health questions**
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Navigation Guide](#navigation-guide)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 🎯 Overview

HealthAssist is a modern, AI-powered health assistant web application built with React. It provides users with immediate insights into their symptoms and health questions through an intuitive chat interface. The application prioritizes user privacy and offers 24/7 availability for health-related queries.

## ✨ Features

### 🤖 AI-Powered Insights
- Advanced AI analysis of symptoms in seconds
- Accurate health suggestions and recommendations
- Real-time chat interface for health queries

### 🔒 Privacy First
- End-to-end encryption for data security
- Private and secure data handling
- User data protection compliance

### ⏰ 24/7 Availability
- Round-the-clock health assistance
- No appointments required
- Instant access to health insights

### 🎨 Modern UI/UX
- Clean, responsive design
- Intuitive navigation
- Mobile-friendly interface
- Beautiful gradient backgrounds and modern styling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd health-assist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🧭 Navigation Guide

### Homepage (`/`)
The main landing page featuring:
- **Hero Section**: Introduction to HealthAssist with call-to-action buttons
- **Features Section**: Overview of key features (AI-Powered Insights, Privacy First, 24/7 Availability)
- **Testimonials**: User reviews and feedback
- **Navigation Bar**: Quick access to About, FAQs, and authentication

**Key Actions:**
- Click "Join Now" to sign up
- Click "Learn More" to visit the About page
- Use the navigation menu to explore different sections

### Authentication Pages

#### Sign Up (`/signup`)
- Create a new account
- Fill in registration form
- Access to the chat interface after successful registration

#### Sign In (`/signin`)
- Login with existing credentials
- Secure authentication process
- Redirect to chat interface upon successful login

### Chat Interface (`/chat`)
The core feature of HealthAssist:
- **Sidebar**: Navigation and chat history
- **Chat Window**: Main conversation area with AI responses
- **Message Input**: Type and send health-related questions
- **Real-time Interaction**: Get immediate AI-powered health insights

**How to Use:**
1. Type your health question or describe your symptoms
2. Press Enter or click Send
3. Receive AI-generated health insights and recommendations
4. Continue the conversation for more detailed information

### Settings (`/settings`)
- User preferences and account management
- Privacy settings
- Notification preferences
- Account customization options

### Information Pages

#### About (`/about`)
- Detailed information about HealthAssist
- Mission and vision
- Team information
- How the AI works

#### FAQs (`/faqs`)
- Frequently asked questions
- Common health queries
- Troubleshooting guide
- User support information

## 🛠 Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.8.0
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 7.1.0
- **Linting**: ESLint 9.32.0

## 📁 Project Structure

```
health-assist/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and logos
│   ├── components/        # Reusable UI components
│   │   ├── ChatWindow.jsx
│   │   ├── Footer.jsx
│   │   ├── InputField.jsx
│   │   ├── Logo.jsx
│   │   ├── MessageInput.jsx
│   │   ├── Navbar.jsx
│   │   ├── PillButton.jsx
│   │   ├── QuickLinks.jsx
│   │   ├── SettingsModal.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SignInForm.jsx
│   │   └── SignUpForm.jsx
│   ├── pages/             # Page components
│   │   ├── AboutPage.jsx
│   │   ├── ChatPage.jsx
│   │   ├── FAQsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── SettingsPage.jsx
│   │   ├── SignInPage.jsx
│   │   └── SignUpPage.jsx
│   ├── sections/          # Page sections
│   │   ├── Features.jsx
│   │   ├── Hero.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎨 Design System

The application uses a consistent design system with:
- **Primary Color**: Teal (#14B8A6)
- **Background**: Gradient from white to light teal (#F0FDF9)
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Rounded corners, subtle shadows, and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints

## 🔧 Development

### Code Style
- ESLint configuration for code quality
- React Hooks best practices
- Component-based architecture
- Responsive design principles

### Key Components
- **Navbar**: Main navigation with logo and menu items
- **Sidebar**: Chat interface navigation
- **ChatWindow**: Main conversation display
- **MessageInput**: User input for health queries
- **PillButton**: Reusable button component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the FAQs page in the application
- Review the About page for more information
- Contact the development team

---

<div align="center">
  <p>Made with ❤️ for better health insights</p>
  <p><strong>HealthAssist</strong> - The AI that cares</p>
</div>
