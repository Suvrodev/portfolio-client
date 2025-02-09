export type TService = {
  id: number;
  title: string;
  desc: string;
  image: string;
};
export type TSkill = {
  id: number;
  title: string;
  image: string;
};
export type TEducation = {
  year: string;
  institute: string;
  topic: string;
};

export type TTestimonial = {
  id: string;
  image: string;
  desc: string;
  name: string;
  position: string;
  rating: number;
};
export type TBlog = {
  id: number;
  image: string;
  title: string;
  url: string;
  date: string;
};

export type TMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type Tuser = {
  name: string | null;
  email: string | null;
  image: string | null;
};
