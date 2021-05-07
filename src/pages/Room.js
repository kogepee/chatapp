import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])

    const user = useContext('')

    const handleSubmit = () => {
      firebase.firestore().collection('messages').add({
        content :value,
        user: user.displayName
      })
    }

  return (
    <>
      <h1>Room</h1>
      <ul>
        <li>
          sample user : sample message
        </li>
        {messages?.map((message) => {
          return <li>{message.contetn}</li>
        })}
      </ul>
      <form>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
          <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  )
}

export default Room