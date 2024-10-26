type CreatePostDto = {
  title: string;
  content: string;
  date?: string;
};

type UpdatePostDto = {
  id: string;
  title?: string;
  content?: string;
  date?: string;
};

type DeletePostDto = {
  id: string;
};
