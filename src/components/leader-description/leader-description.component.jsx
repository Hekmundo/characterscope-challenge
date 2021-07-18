const getContentByType = (description, contentType, multiple) => {
  return multiple
    ? description.filter((content) => content.type === contentType)
    : description.find((content) => content.type === contentType);
};

const LeaderDescription = ({ leader }) => {
  console.log(leader);
  const { name, exemplar_image, description, colour } = leader;
  const { url, dimensions, alt } = exemplar_image;

  const heading3 = getContentByType(description, 'heading3');
  const heading4 = getContentByType(description, 'heading4');
  const paragraph = getContentByType(description, 'paragraph');
  const listItems = getContentByType(description, 'list-item', true);

  return (
    <div>
      <h1 className={name[0].type}>{name[0].text}</h1>
      <img
        style={{ width: dimensions.width, height: dimensions.height }}
        src={url}
        alt={alt}
      />
      <h3>{heading3.text}</h3>
      <h4>{heading4.text}</h4>
      <p>{paragraph.text}</p>
      <ul>
        {listItems.map((li) => (
          <li key={li.text}>{li.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderDescription;
