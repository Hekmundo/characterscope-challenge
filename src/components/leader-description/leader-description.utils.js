export const getContentByType = (description, contentType, multiple) => {
  return multiple
    ? description.filter((content) => content.type === contentType)
    : description.find((content) => content.type === contentType);
};
