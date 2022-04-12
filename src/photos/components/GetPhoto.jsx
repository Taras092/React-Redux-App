import React, { useState } from "react";

const Getphoto = ({onGetPhoto}) => {
  const [photoId, setPhotoId] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setPhotoId(value);
  }

  const handleGetPhoto = () => {
    onGetPhoto(photoId)
    setPhotoId('');
  }

  return (
    <div className="content__password">
      <input
        className="content__password_search"
        type="text"
        onChange={handleChange}
        value={photoId}
      />
      <button className="content__password_btn btn" onClick={handleGetPhoto}>
        Get photo
      </button>
    </div>
  );
};

export default Getphoto;