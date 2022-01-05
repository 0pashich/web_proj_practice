import("./main.scss");

import { drawGalleryItem } from "./item";
import item from "./items";

const galleryRootElement = document.getElementById('gallery');

item.map((item) => {

    // console.log(item);
    // console.log(galleryRootElement);
    // console.log(drawGalleryItem(item));
    // galleryRootElement.appendChild(document.createElement('b'));
    galleryRootElement.appendChild(drawGalleryItem(item));
})

console.log("stage 2")