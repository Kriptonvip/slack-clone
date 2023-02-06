import { Button } from '@mui/material';
import { doc, setDoc} from 'firebase/firestore';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { serverTimestamp } from 'firebase/firestore';

function ChatInput({ channelName, channelId, chatRef }) {
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!channelId || inputRef.current.value === '') {
      return false;
    }
    const messageId = "id" + Math.random().toString(16).slice(2);
    const messagesRef = doc(
      db,
      `rooms/${channelId}/messages/${messageId}`
    );
    await setDoc(messagesRef, {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: 'Roman',
      userImage:'https://rttf.ru/public/img/players/56821/avatar.jpeg'
    });

    chatRef &&
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    inputRef.current.value = '';
  };

  return (
    <ChatInputContainer>
      <form action="">
        <input ref={inputRef} placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none;
  }
`;
