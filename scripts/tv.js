import { previewStorage } from "./PreviewStorage.js";

 const HTML = '';  
const dataname1 = localStorage.getItem('locationName1');
 const matchingObject1 = previewStorage.find(item => item.name === dataname1);
    if (matchingObject1) {
       HTML =  `
      <a href="Preview.html" data-Name="${matchingObject1.name}" class="anch1">
      <div class="d1">
      <img src="${matchingObject1.bgi}" class="img1">
      <p style="position: absolute; bottom: 0; color: white; font-weight: bold; left: 60px; ">${matchingObject1.name}</p>
      </div>
    </a>`;

    document.querySelector('.container7').insertAdjacentHTML('beforeend', HTML);
   }
  