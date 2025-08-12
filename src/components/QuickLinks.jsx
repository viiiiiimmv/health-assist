import { Link } from "react-router-dom";

export default function QuickLinks() {
    return (
        <section className="my-16 bg-[#F9FAFB] p-8 rounded-xl shadow-md max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
            <h2 className="text-3xl font-extrabold text-[#14B8A6] whitespace-nowrap">
                Quick Access
            </h2>
            <div className="flex gap-6">
                <Link
                    to="/about"
                    className="px-6 py-3 rounded-full bg-white border border-[#14B8A6] text-[#14B8A6] font-semibold hover:bg-[#E0F2F1] transition"
                >
                    About
                </Link>
                <Link
                    to="/faqs"
                    className="px-6 py-3 rounded-full bg-white border border-[#14B8A6] text-[#14B8A6] font-semibold hover:bg-[#E0F2F1] transition"
                >
                    FAQs
                </Link>
            </div>
        </section>
    );
}
