import "./ImageList.css";
import ImageShow from "./ImageShow";
function ImageList({ image }) {
  const renderedImages = image.map((image, index) => {
    return <ImageShow image={image} key={index} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
