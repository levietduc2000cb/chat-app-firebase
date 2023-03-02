import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-info">
        <span>{data.user?.displayName}</span>
        <div className="chat-icons">
          <BsFillCameraVideoFill className="icon" />
          <IoMdPersonAdd className="icon" />
          <MdMoreHoriz className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
