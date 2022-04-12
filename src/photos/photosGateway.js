const baseUrl = 'https://jsonplaceholder.typicode.com/photos';


export const findPhoto = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Faild to find photo');
  });
};