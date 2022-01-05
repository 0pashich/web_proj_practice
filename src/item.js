export function drawGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.classList = 'gallery-item';

    if (item.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.classList = 'gallery-item__image';
        imgElement.src = item.resource;
        itemElement.appendChild(imgElement);
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio');
        audioElement.classList = 'gallery-item__audio';
        audioElement.controls = true;
        audioElement.src = item.resource;
        itemElement.appendChild(audioElement);
    } else if (item.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.classList = 'gallery-item__video';
        videoElement.controls = true;
        videoElement.src = item.resource;
        itemElement.appendChild(videoElement);
    }
    const titleElement = document.createElement('span');
    titleElement.classList = 'gallery-item__title';
    titleElement.textContent = item.title;


    itemElement.appendChild(titleElement);

    return itemElement;
}