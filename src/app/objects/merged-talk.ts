export interface Talk {
  postType: string;
  link?: string;
  title?: string;
  description?: string;
  date?: string;
  impact?: {
    value?: string;
    label?: string;
  };
  timestamp?: string;
  media?: {
    slides?: string;
    code?: string[];
    demo?: string[];
    photos?: string[];
    video?: string;
  };
  conf_info?: {
    website?: string;
    location?: string;
    coords?: number[];
    venue?: string;
    date?: string;
  };
  conf_name?: string;
  conf_code?: string;
  extras?: string[];
}
