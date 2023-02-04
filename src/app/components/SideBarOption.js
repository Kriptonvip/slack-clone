import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const roomsCollectionRef = collection(db, 'rooms');
  const selectChannel = () => {};
  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      await addDoc(roomsCollectionRef, { name: channelName });
    }
  };
  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span key={id}>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SideBarOptionChannel = styled.h3`
  padding: 10px, 0;
  font-weight: 300;
`;
