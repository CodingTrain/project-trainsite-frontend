import { LinkType } from './link';

// This is a port of the PropTypes based checks in the website repository

export interface VideoType {
  id: string;
  date: Date;
  title: string;
  video_number: number;
  live_example?: string;
  web_editor?: string;
  can_contribute?: boolean;
  topcs?: LinkType[];
  links?: LinkType[];
  videos?: LinkType[];
  books?: LinkType[];
  tools?: LinkType[];
  parts?: LinkType[];
  // TODO:
  // contributions: ContributionType[];
  // custom_sections: CustomSectionType[];
}
