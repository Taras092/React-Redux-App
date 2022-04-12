import React from "react";
import { Provider } from "react-redux";
import PhotoPage from './PhotoPage'
import store from '../../storePhoto'

import '../styles/photos.scss'

const Photos = () => {
  return (
    <Provider store={store}>
      <PhotoPage />
    </Provider>
  );
};

export default Photos;
