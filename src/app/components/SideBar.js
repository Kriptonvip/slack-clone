import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';
import SideBarOption from './SideBarOption';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

function SideBar() {
  const [channels, setchannels] = useState([]);
  const roomsCollectionRef = collection(db, 'rooms');
  useEffect(() => {
    const getRooms = async () => {
      const data = await getDocs(roomsCollectionRef);
      setchannels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRooms();
  }, [roomsCollectionRef]);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Roman HQ</h2>
          <h3>
            <FiberManualRecord />
            Roman Romanenko
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption roomsCollectionRef title="Add channel" />
      {channels.map((channel) => (
        <SideBarOption key={channel.id} id={channel.id} title={channel.name} />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  color: white;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-bottom: 10px;
    margin-top: 10px;
    border: 1px solid #49274b;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    font-size: 18px;
    border-radius: 999px;
    margin-right: 20px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-right: 2px;
    margin-top: 1px;
  }
`;
