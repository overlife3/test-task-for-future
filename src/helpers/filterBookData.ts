import { Book } from "../types/types";

export const filterBookData = (data: any): Book => {
  const volumeInfo = data.volumeInfo;
  const imageLinks = volumeInfo.imageLinks;

  const image = imageLinks && (imageLinks.medium || imageLinks.thumbnail);
  return {
    id: data.id,
    authors: volumeInfo.authors,
    categories: volumeInfo.categories,
    description: volumeInfo.description,
    image: image,
    title: volumeInfo.title,
  };
};
