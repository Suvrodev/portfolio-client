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
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type TProject = {
  _id: string;
  name: string;
  liveurl: string;
  frontendrepo: string;
  backendrepo: string;
  image: string;
  descriptions: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
export type TResume = {
  _id: string;
  link: string;
};

export type TUser = {
  name: string;
  email: string;
  image: string;
};
