import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

const faqs = [
    {
        question: "What is HealthAssist?",
        answer:
            "HealthAssist is an AI-driven chatbot that provides instant, personalized health advice and reminders through text and voice.",
    },
    {
        question: "Is my data safe?",
        answer:
            "Absolutely. HealthAssist uses encrypted communication and follows strict privacy protocols to ensure your data stays secure.",
    },
    {
        question: "Can it replace a doctor?",
        answer:
            "No. HealthAssist is designed to provide general health guidance, not a medical diagnosis. Always consult a healthcare professional for serious concerns.",
    },
    {
        question: "Does it support voice input?",
        answer:
            "Yes. HealthAssist can process both text and voice inputs and provide responses in the same formats.",
    },
    {
        question: "Is HealthAssist free to use?",
        answer:
            "We offer a free version with essential features, as well as a premium plan with advanced insights, priority support, and additional tools.",
    },
    {
        question: "Can I use it without an internet connection?",
        answer:
            "An internet connection is required for HealthAssist to process and deliver accurate AI-powered responses.",
    },
    {
        question: "Which languages does it support?",
        answer:
            "Currently, HealthAssist supports English, with more languages planned for future updates.",
    },
    {
        question: "Can I integrate HealthAssist with wearable devices?",
        answer:
            "Yes, HealthAssist can connect with select wearables to provide more personalized health monitoring and recommendations.",
    }
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
        <Navbar/>
            <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition hover:shadow-lg border border-gray-100"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold text-[#111827] flex justify-between items-center">
                                    {faq.question}
                                    <span
                                        className={`transition text-lg font-bold ${
                                            openIndex === index ? "text-[#14B8A6]" : "text-gray-400"
                                        }`}
                                    >
                  {openIndex === index ? "−" : "+"}
                </span>
                                </h3>
                                {openIndex === index && (
                                    <p className="mt-2 text-gray-600 border-t border-gray-200 pt-3">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
