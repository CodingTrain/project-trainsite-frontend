import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { VideoType } from '../../helpers/types';
import Button from '../Button';

import {
  VideoContainer,
  ThumbnailContainer,
  Thumbnail,
  VideoBadge,
  VideoDate,
  VideoTitle,
  VideoDescription,
  Buttons,
} from './index.styles';

export interface VideoCardProps {
  video: VideoType;
}

export class VideoCard extends Component<VideoCardProps> {
  render() {
    const {
      video: {
        id: videoId,
        date,
        title,
        video_number,
      },
    } = this.props;
    // TODO use react-router at some point in the future
    const url = `video/${videoId}`;
    const formattedDate = date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });
    return (
      <VideoContainer>
        <Link to={url}>
          <ThumbnailContainer>
            <VideoBadge>#{video_number}</VideoBadge>
            <Thumbnail url={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} />
          </ThumbnailContainer>
          <VideoTitle>
            {title}
          </VideoTitle>
          <VideoDate>
            {formattedDate}
          </VideoDate>
        </Link>
        <VideoDescription>
          <p>{title}</p>
        </VideoDescription>
        <Buttons>
          <Button link={`https://youtu.be/${videoId}`}>Watch on YT</Button>
          <Button link={url}>To the challenge</Button>
        </Buttons>
      </VideoContainer>
    );
  }
}
