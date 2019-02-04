import React, { Component } from 'react';
import { Wrapper, ChooChoo, Title, VideoCardWrapper } from './index.styles';
import SupportTheCodingTrain from '../../components/SupportTheCodingTrain';
import Button from '../../components/Button';
import { VideoCard } from '../../components/VideoCard';
import { exampleVideo } from '../../helpers/testing';

export default class Home extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <ChooChoo>
            <h1>Choo Choo!</h1>
            <p>
              All aboard the Coding Train with Daniel Shiffman, a YouTube
              channel dedicated to beginner-friendly creative coding tutorials
              and challenges.
            </p>
            <div>
              <Button
                link="https://youtube.com/thecodingtrain/?sub_confirmation=1"
                background="red"
                size="big"
                target="_blank"
              >
                Subscribe on YouTube
              </Button>
              <Button
                link="https://youtube.com/thecodingtrain/join"
                background="blue"
                size="big"
                target="_blank"
              >
                Become a Member
              </Button>
            </div>
          </ChooChoo>
          <VideoCard video={exampleVideo} />
        </Wrapper>
        <Title>Latest Videos</Title>
        <VideoCardWrapper>
          <VideoCard video={exampleVideo} />
          <VideoCard video={exampleVideo} />
          <VideoCard video={exampleVideo} />
        </VideoCardWrapper>
        <SupportTheCodingTrain />
      </>
    );
  }
}
