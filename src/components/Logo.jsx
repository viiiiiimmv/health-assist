import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
      <span className="text-2xl">
        <span className="font-normal text-[#111827]">Health</span>
        <span className="italic font-thin text-[#111827]">Assist</span>
      </span>
        </Link>
    );
}
