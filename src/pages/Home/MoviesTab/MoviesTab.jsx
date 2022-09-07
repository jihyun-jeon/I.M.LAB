import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NowPlayingList from './NowPlayingList';
import TopRatedList from './TopRatedList';
import UpcomingList from './UpcomingList';

const MoviesTab = () => {
  const [focus, setFocus] = useState(0);
  const navigate = useNavigate();

  return (
    <Box>
      <Tabs>
        <Tab
          id="now-playing-tab"
          href="/nowplaying"
          focused={focus === 0}
          onClick={() => setFocus(0)}
        >
          Now Playing
        </Tab>
        <Tab id="top-rated-tab" href="/toprated" focused={focus === 1} onClick={() => setFocus(1)}>
          Top Rated
        </Tab>
        <Tab id="upcoming-tab" href="/upcoming" focused={focus === 2} onClick={() => setFocus(2)}>
          Upcoming
        </Tab>
        {/* <Tab onClick={() => navigate({ path: '/#prod_detail_review', search: '?idx=123' })}> */}
      </Tabs>
      {focus === 0 && <NowPlayingList />}
      {focus === 1 && <TopRatedList />}
      {focus === 2 && <UpcomingList />}
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  text-decoration: solid;
  /* color: ${props => props.theme.textColor}; */
  color: gray;

  font-size: large;
  font-weight: 300;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  &:hover {
    background-color: ${props => props.theme.subBgColor};
    color: white;
  }

  ${props =>
    props.focused &&
    ` font-weight: 600;
      color: white;
       &:hover {
      -color: ${props => props.theme.subBgColor};
      color: blue;
      
    }
  `}
`;

const SeeMoreButton = styled.div``;

export default MoviesTab;