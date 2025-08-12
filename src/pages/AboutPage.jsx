import Navbar from "../components/Navbar.jsx";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-24">
                {/* About Section */}
                <section className="grid grid-cols-1 md:grid-cols-[200px_min-content_1fr] gap-8 items-start">
                    {/* Left Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        About
                    </h2>

                    {/* Divider */}
                    <div className="hidden md:block border-l border-gray-200/70 h-full"></div>

                    {/* Right Content */}
                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
                        <p>
                            <span className="text-[#14B8A6] font-semibold">HealthAssist</span> is your intelligent, AI-powered health companion that helps you manage your well-being anytime, anywhere. With seamless support for both text and voice interactions, it delivers instant, personalized health advice, appointment reminders, and wellness tracking — all designed to fit into your busy lifestyle.
                        </p>
                        <p>
                            Our mission is to empower individuals to take control of their health journey by harnessing cutting-edge AI technology. Whether you're seeking quick symptom insights, lifestyle guidance, or gentle reminders to stay on track, HealthAssist provides accessible and reliable assistance tailored just for you.
                        </p>
                        <p>
                            Built with privacy and security as foundational pillars, HealthAssist ensures that your sensitive information remains safe, encrypted, and accessible only to you. We believe trust is key to a meaningful health partnership, and we strive to honor that with every interaction.
                        </p>
                        <p>
                            With an easy-to-use interface, thoughtful design, and continuous improvements based on user feedback, HealthAssist aims to be more than just an app — it’s your trusted companion on the path to better health.
                        </p>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="grid grid-cols-1 md:grid-cols-[200px_min-content_1fr] gap-8 items-start">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Our Mission
                    </h2>
                    <div className="hidden md:block border-l border-gray-200/70 h-full"></div>
                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed text-justify">
                        <p>
                            At HealthAssist, our mission is to revolutionize how people engage with their health by providing smart, AI-driven tools that make wellness simple, approachable, and proactive.
                        </p>
                        <p>
                            We envision a future where health insights are just a conversation away — where anyone can receive personalized guidance, timely reminders, and encouragement, right from their device, without needing to navigate complex medical jargon or systems.
                        </p>
                        <p>
                            By blending advanced AI with a human-centric design philosophy, HealthAssist delivers meaningful support that adapts to your unique needs and lifestyle, helping you stay informed and motivated every step of the way.
                        </p>
                        <p>
                            Privacy, security, and ethical AI use remain at the heart of everything we build, so you can trust us as your dedicated health partner for the long haul.
                        </p>
                    </div>
                </section>

                {/* Connect with Us Section */}
                <section className="grid grid-cols-1 md:grid-cols-[200px_min-content_1fr] gap-8 items-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Connect with Us
                    </h2>
                    <div className="hidden md:block border-l border-gray-200/70 h-full"></div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-5">
                            <a
                                href="#"
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="#"
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors"
                                aria-label="Twitter / X"
                            >
                                <FaXTwitter size={24} />
                            </a>
                            <a
                                href="#"
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                        <a
                            href="mailto:support@healthassist.com"
                            className="text-xl text-gray-500 hover:text-[#14B8A6] transition-colors"
                        >
                            support@healthassist.com
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
