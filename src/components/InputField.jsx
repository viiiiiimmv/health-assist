import { useId } from "react";

export default function InputField({
                                       label,
                                       value,
                                       onChange,
                                       type = "text",
                                       className = "",
                                   }) {
    const id = useId();

    return (
        <div className={`relative w-full ${className}`}>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder=" "               // important for peer-placeholder-shown to work
                className="peer block w-full rounded-3xl bg-[#F9FAFB] text-[#111827]
                   border border-[#E5E7EB] px-4 pt-5 pb-3
                   focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6]
                   "
            />

            <label
                htmlFor={id}
                className="absolute left-4 -top-2 z-10 px-1 bg-[#F9FAFB] text-sm text-[#111827]
                   transition-all duration-200 ease-in-out
                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#9CA3AF]
                   peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#14B8A6]"
            >
                {label}
            </label>
        </div>
    );
}
