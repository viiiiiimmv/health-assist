export default function ChatWindow() {
    return (
        <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {/* Example messages */}
                <div className="self-start bg-[#CCFBF1] text-[#111827] px-4 py-2 rounded-lg max-w-sm">
                    Hello! How can I help you today?
                </div>
                <div className="self-end bg-[#14B8A6] text-white px-4 py-2 rounded-lg max-w-sm">
                    I need some tips for a healthy diet.
                </div>
            </div>
        </div>
    );
}
