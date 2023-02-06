import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>{timestamp && new Date(timestamp.toDate()).toUTCString()}</span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
    padding-right: 15px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
  > h4 > p {
    padding-top: 5px;
  }
`;
