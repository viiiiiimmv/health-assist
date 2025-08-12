import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex-1 max-w-xl">
                <h1 className="text-5xl font-extrabold text-[#111827] leading-tight">
                    <span className='font-normal'>Health</span><span className='font-extralight italic'>Assist</span> :{" "}
                    <span className="text-[#14B8A6]">The AI that cares</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Get immediate insights into your symptoms and health questions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                    <Link
                        to="/signup"
                        className="px-8 py-4 bg-[#14B8A6] text-white rounded-full shadow-md text-lg font-semibold hover:bg-[#0d9488] transition"
                    >
                        Join Now
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 border border-[#14B8A6] text-[#14B8A6] rounded-full text-lg font-semibold hover:bg-[#F0FDF9] transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            {/* Optional illustration can go here */}
        </section>
    );
}
