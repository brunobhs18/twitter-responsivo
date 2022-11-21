import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container, 
    SearchWrapper, 
    SearchInput,
    SearchIcon, 
    Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
        </SearchWrapper>

        <StickyBox>
            <Body>
                <List
                    title='Talvez você curta'
                    elements={[
                    <FollowSuggestion name="Safire Kastrup" nickname="@safire_kastrup"/>,
                    <FollowSuggestion name="Ana Julia" nickname="@anajukastrup"/>,
                    <FollowSuggestion name="Ana Julin" nickname="@anajulin9"/>, 
                ]}
                />
                <List
                    title='O que está acontecendo'
                    elements={[<News />]}
                />
            </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;