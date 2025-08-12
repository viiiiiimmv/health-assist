import { useState } from "react";
import InputField from "./InputField";
import PillButton from "./PillButton";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">
                Welcome back!!
            </h2>

            <div className="mb-4">
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <PillButton label="Sign In" action={() => console.log("Sign clicked")} />
            </div>

            <div className="flex items-center w-full my-4">
                <div className="flex-grow h-px bg-[#E5E7EB]" />
                <span className="px-3 text-[#9CA3AF] text-sm">or</span>
                <div className="flex-grow h-px bg-[#E5E7EB]" />
            </div>

            <div className="mb-4">
                <PillButton
                    label="Sign in with Google"
                    variant="ghost"
                    action={() => console.log("Google sign in")}
                />
            </div>

            <div className="text-center">
                <a href="#" className="text-sm text-[#14B8A6] hover:underline">
                    Forgot password?
                </a>
            </div>
        </div>
    );
}
