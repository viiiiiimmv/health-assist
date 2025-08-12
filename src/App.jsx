import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FAQsPage from "./pages/FAQsPage.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<SignInPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faqs" element={<FAQsPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
