import { StaticImageData } from "next/image";

export interface JobListing {
  title: string;
  description: string;
  company: string;
  location: string;
  type: string;
  image: StaticImageData;
}
