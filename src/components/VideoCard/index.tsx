import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VideoType } from '../../helpers/types';

import './index.css';

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
    return (
      <div className="VideoCard">
        <a href={url}>
          <div className="video-header">
            <div className="thumb-container">
              <span className="video-badge">#{video_number}</span>
              <div className="video-thumbnail" style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/mqdefault.jpg)`,
              }} />
            </div>
            <h3>{title}</h3>
            <span className="video-date">
              {
                date.toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })
              }
            </span>
          </div>
        </a>
        <div className="video-description">
          <p>{title}</p>
        </div>
        <div className="buttons">
          <a href={`https://youtu.be/${videoId}`}>Watch on YT</a>
          <a href={url}>To the challenge</a>
        </div>
      </div>
    );
  }
}
