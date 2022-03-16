import { useState } from 'react'





const MatchesDisplay = ({ MatchesClicked, setMatchedClicked , searchMatch, setSearchMatch, openMatches, setOpenMatches , onlineMembers , setOnlineMembers , yourChats ,setYourChats , roomChats ,setRoomChats }) => {
    

    const handleSubmit = (e) =>{
        console.log("event.target.id: " + e.target.id)
        if(e.target.id === "search-matches"){
            setSearchMatch(true)
            setOpenMatches(false)
            setOnlineMembers(false)
            setYourChats(false)
            setRoomChats(false)
        }else if(e.target.id === "open-matches"){
            setSearchMatch(false)
            setOpenMatches(true)
            setOnlineMembers(false)
            setYourChats(false)
            setRoomChats(false)
        }else if(e.target.id === "online-members"){
            setSearchMatch(false)
            setOpenMatches(false)
            setOnlineMembers(true)
            setYourChats(false)
            setRoomChats(false)
        }else if(e.target.id === "my-chats"){
            setSearchMatch(false)
            setOpenMatches(false)
            setOnlineMembers(false)
            setYourChats(true)
            setRoomChats(false)
        }else if(e.target.id === "room-chats"){
            setSearchMatch(false)
            setOpenMatches(false)
            setOnlineMembers(false)
            setYourChats(false)
            setRoomChats(true)
        }
    }

    return(
        <div>
            {MatchesClicked && 
                <div className="matches-display">
                    <button id="search-matches" className="chooseOption" onClick={handleSubmit}>Search for a Match</button>
                    <button id="open-matches" className="chooseOption" onClick={handleSubmit}>Open Matches</button>
                    <button id="online-members"className="chooseOption" onClick={handleSubmit}>Online Members</button>
                </div>
            }

            {!MatchesClicked && 
                <div className="matches-display">
                    <button id="my-chats"className="chooseOption" onClick={handleSubmit}>your chats</button>
                    <button id="room-chats" className="chooseOption" onClick={handleSubmit}>Your room's chats</button>
                </div>
            }
        </div>
    )
}

export default MatchesDisplay