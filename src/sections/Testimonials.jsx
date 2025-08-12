export default function Testimonials() {
    const testimonials = [
        {
            name: "Anita Sharma",
            role: "Frequent User",
            feedback:
                "HealthAssist helped me understand my symptoms instantly. The AI feels like a real doctor!",
        },
        {
            name: "Raj Patel",
            role: "Healthcare Professional",
            feedback:
                "Reliable, fast, and privacy-focused. Great tool for initial health guidance.",
        },
        {
            name: "Meera Joshi",
            role: "Satisfied Customer",
            feedback:
                "I love how easy it is to get answers any time without waiting for appointments.",
        },
    ];

    return (
        <section className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#14B8A6] mb-12">
                What Our Users Say
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
                {testimonials.map(({ name, role, feedback }) => (
                    <div
                        key={name}
                        className="p-6 bg-[#F9FAFB] rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <p className="italic text-gray-700 mb-4">"{feedback}"</p>
                        <h4 className="font-semibold text-[#14B8A6]">{name}</h4>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
