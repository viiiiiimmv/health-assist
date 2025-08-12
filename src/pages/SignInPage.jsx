import SignInForm from "../components/SignInForm.jsx";
import Navbar from "../components/Navbar.jsx";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
            <Navbar />
            <div className="flex-1 flex justify-center items-center">
                <SignInForm />
            </div>
        </div>
    );
}
