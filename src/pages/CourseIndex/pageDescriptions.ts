const pageInfo: {
  [index: string]: Category,
} = {
  codingchallenges: {
    title: 'Coding Challenges',
    description: 'Watch me take on some viewer submitted Coding Challenges in p5.js and Processing!'
  },
  tutorials: {
    title: 'Tutorials',
    description: 'Here you can find all tutorials made by Daniel Shiffman on TheCodingTrain. If you are searching for tutorials made by guests, you can check them out here.'
  },
  streams: {
    title: 'Streams',
    description: 'Watch all the unedited Live Streams!'
  },
  courses: {
    title: 'Courses',
    description: 'This is an overview of all available courses taught by Daniel Shiffman.'
  }
};

interface Category {
  title: string;
  description: string;
}

export default pageInfo;
