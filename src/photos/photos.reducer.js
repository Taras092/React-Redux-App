import { PHOTO_RECIEVED } from "./photos.actions";

const initialState = {
  photo: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_RECIEVED: {
      return {
        photo:action.payload.photo,
      }
    }
    default:
      return state;
  }
};

export default photosReducer;