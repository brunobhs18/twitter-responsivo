import React from 'react';

import { 
    Container, 
    Retweeted, 
    Retweet,
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot,
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetIcon, 
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <Retweet />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Flamengo</strong>
                    <span>@Flamengo</span>
                    <Dot />
                    <time>15 de nov</time>
                </Header>  

                <Description>VENCER. VENCER. VENCER. #M3NGO</Description>

                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />
                        2,401
                    </Status>
                    <Status>
                        <RetIcon />
                        52.4k
                    </Status>
                    <Status>
                        <LikeIcon />
                        109.5k
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;