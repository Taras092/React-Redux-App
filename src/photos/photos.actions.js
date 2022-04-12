import * as photosGateway from './photosGateway';

export const PHOTO_RECIEVED = "PHOTO_RECIEVED";

export const photoReceived = photo => {
  return {
    type: PHOTO_RECIEVED,
    payload: {
      photo,
    },
  };
};

export const getPhoto = (id) => {
  const thunkAction = function (dispatch) {
    photosGateway.findPhoto(id).then((photo) => dispatch(photoReceived(photo)));
  };
  return thunkAction;
};