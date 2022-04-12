import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Getphoto from "./GetPhoto";
import Photo from "./Photo";
import * as photosAction from "../photos.actions";
import { photoSelector } from "../photos.selectors";

const Photopage = ({ photo, getPhoto }) => {
  const [photoId, setPhotoId] = useState("");
  useEffect(() => {
    if (photoId) {
      getPhoto(photoId);
    }
  }, [photoId]);
  return (
    <div className="content">
      <Getphoto onGetPhoto={(id) => setPhotoId(id)} />
      {photo !== [] && <Photo photo={photo.photo} />}
    </div>
  );
};

const mapDispatch = {
  getPhoto: photosAction.getPhoto,
};

const mapState = (state) => {
  return {
    photo: photoSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Photopage);
