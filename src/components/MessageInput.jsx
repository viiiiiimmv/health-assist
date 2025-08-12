import { useState } from "react";

export default function MessageInput({ onSend, onAudioClick }) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
            {/* Input + Audio Button in one pill */}
            <div className="flex items-center flex-1 rounded-full border border-gray-300 bg-[#F9FAFB] px-4 py-2 focus-within:ring-2 focus-within:ring-[#14B8A6]">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow bg-transparent text-[#111827] placeholder-gray-400 outline-none"
                />
                <button
                    type="button"
                    onClick={onAudioClick}
                    className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#14B8A6] hover:bg-[#0d9488] text-white transition"
                >
                    🎤
                </button>
            </div>

            {/* Send Button */}
            <button
                onClick={handleSend}
                className="px-6 py-2 rounded-full bg-[#14B8A6] text-white font-medium hover:bg-[#0d9488] transition"
            >
                Send
            </button>
        </div>
    );
}
