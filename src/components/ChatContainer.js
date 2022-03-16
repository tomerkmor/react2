import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchesDisplay from "./MatchesDisplay"
import { useState } from 'react'

const ChatContainer = ({ searchMatch, setSearchMatch, openMatches, setOpenMatches , onlineMembers , setOnlineMembers , yourChats ,setYourChats , roomChats ,setRoomChats }) => {


    const [MatchesClicked, setMatchesClicked] = useState(true)


    const [formData2, setFormData2] = useState({
        category: "matches",
    })

    const handleChange = (e) => {
        console.log("clicked? before = " + MatchesClicked)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        console.log(value)

        

        setFormData2((prevState) => ({
            ...prevState,
            [name] : value
        }))
        value === "matches" ? setMatchesClicked(true) : setMatchesClicked(false)
        console.log("clicked? = " + MatchesClicked)
    }



    return (
        <div className="chat-container">
            <ChatHeader />

            <div className="chat-container2">
                <form className="selection">
                        <input
                            lassName="chat-head-button"
                            id='match-category'
                            type='radio'
                            name='category'
                            value='matches'
                            onChange={handleChange}
                            checked={formData2.category === 'matches'}
                        />
                        <label htmlFor='match-category'>Matches</label>

                        <input
                            className="chat-head-button"
                            id='chat-category'
                            type='radio'
                            name='category'
                            value='chats'
                            onChange={handleChange}
                            checked={formData2.category === 'chats'}
                        />
                        <label htmlFor='chat-category'>Chat</label>
                </form>

                <MatchesDisplay MatchesClicked={MatchesClicked} setMatchesClicked={setMatchesClicked} searchMatch={searchMatch} setSearchMatch={setSearchMatch} openMatches={openMatches} setOpenMatches={setOpenMatches} onlineMembers={onlineMembers} setOnlineMembers={setOnlineMembers} yourChats={yourChats} setYourChats={setYourChats} roomChats={roomChats} setRoomChats={setRoomChats}/>
                <ChatDisplay />
            </div>
        </div>
    )
}

            export default ChatContainer