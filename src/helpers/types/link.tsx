export interface LinkType {
  title: string;
  author?: string | {
    name: string;
    url?: string;
  };
  time?: string;
  url?: string;
  video_id?: string;
  playlist_id?: string;
  source?: string;
}
