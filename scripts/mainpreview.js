// mainpreview.js
import { previewStorage } from "./PreviewStorage.js";
const dataname = localStorage.getItem('locationName');
    const matchingObject = previewStorage.find(item => item.name === dataname);
    if (matchingObject) {
      const previewPage = `
        <img class="bg-img" src="${matchingObject.bgi}">
        <div class="container">
          <div class="imgCont">
            <img src="${matchingObject.pri}" class="imgsydn">
          </div>
          <div class="sidebrief">${matchingObject.sbPara}</div>
        </div>
        <div>
          <p class="para-body">${matchingObject.parabody}</p>
        </div>
      `;

      document.querySelector('.js-Head-container').innerHTML = previewPage;
    }

  