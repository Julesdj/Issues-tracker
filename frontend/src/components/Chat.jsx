import React, { useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import { getOrCreateChat } from 'react-chat-engine'

const Chat = () => {
  const [username, setUsername] = useState('')

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    )
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="aa736016-34ca-44ad-8a63-b8884a822702"
      userName="clark"
      userSecret="superman"
    />
  )
}

export default Chat
