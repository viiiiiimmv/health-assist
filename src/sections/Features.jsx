export default function Features() {
    return (
        <div className="grid gap-10 md:grid-cols-3">
            {[
                {
                    title: "AI-Powered Insights",
                    desc: "Our advanced AI analyzes your symptoms in seconds for accurate suggestions.",
                },
                {
                    title: "Privacy First",
                    desc: "Your data stays private and secure, with end-to-end encryption.",
                },
                {
                    title: "24/7 Availability",
                    desc: "Get help anytime, anywhere — no appointments needed.",
                },
            ].map(({ title, desc }) => (
                <div
                    key={title}
                    className="p-6 bg-[#F9FAFB] rounded-xl shadow-sm hover:shadow-md transition"
                >
                    <h3 className="text-lg font-semibold text-[#14B8A6]">{title}</h3>
                    <p className="mt-3 text-gray-700 text-sm">{desc}</p>
                </div>
            ))}
        </div>
    );
}
