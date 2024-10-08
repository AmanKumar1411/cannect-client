import { useAppStore } from "@/stores";
import { RiCloseFill } from "react-icons/ri";

const ChatHeader = () => {
  const { closeChat } = useAppStore();
  return (
    <header className="h-[10vh] border-b-2 border-[white] flex items-center justify-between px-20">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-3"></div>
        <div className="flex items-center justify-center gap-5">
          <button
            className="text-neutral-500   focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
            onClick={closeChat}
          >
            <RiCloseFill className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
