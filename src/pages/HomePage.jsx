import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#F0FDF9] flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white rounded-b-3xl shadow-md">
                <Hero />
            </main>
            <section className="bg-[#E0F2F1] py-16 mt-12 rounded-t-3xl shadow-inner border-t border-[#14B8A6]/30">
                <Testimonials />
            </section>
            <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-7xl mx-auto my-16">
                <Features />
            </section>
            <Footer />
        </div>
    );
}
