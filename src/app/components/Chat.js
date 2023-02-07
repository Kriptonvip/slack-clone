import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import Message from './Message';

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const roomMessagesRef = collection(db, `rooms/${roomId}/messages`);
  const [messages] = useCollectionData(roomId && query(roomMessagesRef, orderBy("timestamp", "asc"))
  );
  const roomsCollectionRef = doc(db, `rooms/${roomId}`);
  const [room, loading] = useDocument(roomId && roomsCollectionRef);

  useEffect(() => {
    chatRef &&
      chatRef.current &&
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {room && messages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>
                  # {loading ? 'loading...' : room && room.data().name}
                </strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRigth>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRigth>
          </Header>
          <ChatMessages>
            {messages.map((item, index) => {
              const { message, timestamp, user, userImage } = item;
              return (
                <Message
                  key={index}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={loading ? 'loading...' : room && room.data().name}
            channelId={roomId}></ChatInput>
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
    margin-top: 20px;
  }
`;
const HeaderRigth = styled.div`
  > p {
    display: flex;
    text-transform: lowercase;
  }
  > p > .MuiSvgIcon-root {
    font-size: 18px;
    margin-right: 5px;
  }
`;

const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
