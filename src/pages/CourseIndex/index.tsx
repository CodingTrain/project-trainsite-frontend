import React, { Component } from 'react';
import pageInfo from './pageDescriptions';
import { Title, Description } from './index.styles';

interface Iprops {
  match: any;
}

export default class CourseIndex extends Component<Iprops> {

  render() {
    const { title, description } = pageInfo[this.props.match.path.replace('/', '')];
    return (
      <div>
        <Title>
          {title}
        </Title>
        <hr />
        <Description>
          {description}
        </Description>
        <hr />
        <main>
          All the videocards go here
        </main>
      </div>
    );
  }
}
