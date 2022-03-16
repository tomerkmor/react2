import Chat from "./Chat"
import ChatInput from "./ChatInput"


const ChatDisplay = () => {
    return(
        <div>
            <Chat />
            <ChatInput />
            <div className="chat-display">
                Chat Display
            </div>
        </div>
    )
}

export default ChatDisplay