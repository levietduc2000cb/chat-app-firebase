import React from "react";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  console.log({ messages });
  return (
    <div className="messages">
      {messages.length > 0 &&
        messages.map((m) => {
          return <Message message={m} key={m.id} />;
        })}
    </div>
  );
};

export default Messages;
