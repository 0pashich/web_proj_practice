import("./main.scss");

import { drawGalleryItem } from "./item";
import item from "./items";

const galleryRootElement = document.getElementById('gallery');

item.map((item) => {
    galleryRootElement.appendChild(drawGalleryItem(item));
})

console.log("stage 2")