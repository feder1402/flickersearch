const FLICKR_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=86b091e3bc1d2f31fdca5a4fb1823e13&format=json&nojsoncallback=1 '

const validateStatusSuccessful = (response) => {
    if (response.status >= 300 || response.status < 200) {
        throw 'Status wasn not 200'
    }
    return response
}

const convertToJSON = response => response.json()

const getPhotoSrc = (image) => {
    const { farm, server, id, secret } = image
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
}

const parsePhotoCollection = jsonPayload => {
    const photos = jsonPayload.photos.photo
    return photos.map(photo => ({
        id: photo.id,
        title: photo.title,
        src: getPhotoSrc(photo)
    }))
}

export const getFlickrPhotos = (tag) =>
    fetch(FLICKR_URL + `&tags=${tag}`)
        .then(validateStatusSuccessful)
        .then(convertToJSON) 
        .then(parsePhotoCollection)
        .catch(err => {
            console.error(err);
        });