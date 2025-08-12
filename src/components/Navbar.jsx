import PillButton from "./PillButton";
import {useNavigate} from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="w-full flex justify-center py-4">
            <div
                className="w-full max-w-6xl px-6 py-2 flex items-center justify-between
                   bg-white/30 backdrop-blur-md rounded-full shadow-md
                   border border-white/50"
            >
                {/* Text Logo */}
                <Logo/>

                {/* Menu Items */}
                <div className="flex items-center space-x-6">
                    <a
                        href="/about"
                        className="text-[#111827] hover:text-[#14B8A6] font-medium transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="/faqs"
                        className="text-[#111827] hover:text-[#14B8A6] font-medium transition-colors"
                    >
                        FAQs
                    </a>
                    <PillButton
                        label="Sign In / Sign Up"
                        action={() => navigate("/signup")}
                        className="px-5 py-1"
                    />
                </div>
            </div>
        </nav>
    );
}
