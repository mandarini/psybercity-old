export interface Talk {
  type: string;
  date: string;
  code: string;
  name: string;
  year: number;
  month: number;
  day: number;
  conf_info: {
    website: string;
    location: string;
    coords: string[];
    venue: string;
    date: string;
  };
  talk: {
    title: string;
    description: string;
    duration: string;
    media: {
      slides: string;
      code: string[];
      demo: string[];
      photos: string[];
      video: string;
    };
  };
  workshop: {
    title: string;
    description: string;
    duration: string;
    participants: string;
    media: {
      slides: string;
      docs: string;
      code: string[];
      demo: string[];
      photos: string[];
    };
  };
  extras: string[];
}
