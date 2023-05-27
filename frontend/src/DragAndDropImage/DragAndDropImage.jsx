import { useEffect, useRef, useState } from "react";
import classes from "./DragAndDropImage.module.css";

const DragAndDropImage = ({ setImagesToForm }) => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setImagesToForm(images);
  }, [images]);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files.length == 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          { name: files[i].name, url: URL.createObjectURL(files[i]) },
          ...prevImages,
        ]);
      }
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          { name: files[i].name, url: URL.createObjectURL(files[i]) },
          ...prevImages,
        ]);
      }
    }
  };

  return (
    <div className={classes.card}>
      <div
        className={classes["drag-area"]}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className={classes.select}>Drop image here</span>
        ) : (
          <> Drag & Drop image here or &darr;</>
        )}

        <input
          name="file"
          type="file"
          className={classes.file}
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>

      <div className={classes.container}>
        {images &&
          images.map((image, index) => {
            return (
              <div className={classes.image} key={image.url}>
                <span className="delete" onClick={() => deleteImage(index)}>
                  &times;
                </span>
                <img src={image.url} alt={image.name} />
              </div>
            );
          })}
      </div>
      <button type="button" onClick={selectFiles} className={classes.select}>
        Select photos
      </button>
    </div>
  );
};

export default DragAndDropImage;
