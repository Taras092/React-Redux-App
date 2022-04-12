import React from "react";

const Photo = ({photo}) => {
  return (
    <ul className="content__list">
      <li className="content__list-item">
        { photo === [] 
        ? <img
          className="content__list-item_img"
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
          alt="photo"
          />
          : <img
          className="content__list-item_img"
          src={photo.url}
          alt="photo"
          />
        }
      </li>
    </ul>
  );
};

export default Photo;