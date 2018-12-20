import results from './flickr-response.json'

const getPhotoSrc = (image) => {
  const { farm, server, id, secret } = image;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

export const parsePhotoCollection = jsonPayload => {
  const photos = jsonPayload.photos.photo;
  return photos.map(photo => ({
    id: photo.id,
    title: photo.title,
    src: getPhotoSrc(photo)
  }));
};

export default parsePhotoCollection(results);