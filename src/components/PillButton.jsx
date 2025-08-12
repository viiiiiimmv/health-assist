export default function PillButton({
                                       label,
                                       action,
                                       variant = "primary", // "primary" or "ghost"
                                       className = "",
                                   }) {
    const base =
        "inline-flex items-center justify-center w-full px-6 py-2 rounded-full font-medium focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out hover:shadow-md";

    const variants = {
        primary: "bg-[#14B8A6] text-gray-100 hover:bg-[#0f968b] focus:ring-[#14B8A6]",
        ghost: "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus:ring-[#14B8A6]",
    };

    const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

    return (
        <button type="button" onClick={action} className={cls}>
            {label}
        </button>
    );
}
