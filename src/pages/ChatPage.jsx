import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

export default function ChatPage() {
    const handleSendMessage = (msg) => {
        console.log("Message sent:", msg);
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB]">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <ChatWindow />
                <MessageInput onSend={handleSendMessage} />
            </div>
        </div>
    );
}
