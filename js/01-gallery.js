import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

//деструктуризація об'єкта galleryItems і додавання необхідних атрибутів у розмітку, яка буде створюватися

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

//додає виществорену розмітку у HTML
galleryContainer.insertAdjacentHTML('beforeend', createGallery);

function onImageClick(evt) {
  evt.preventDefault();
  const isPicture = evt.target.classList.contains('.gallery__item');
  if (isPicture) {
    return;
  }

  const largeImage = evt.target.dataset.source;

  //для того, щоб примінився basicLightbox.create в HTML чіплявся скрипт basicLightbox

  const showLargeImage = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
`);

  showLargeImage.show();

  //закриває модалку по натисненню Esc

  document.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      showLargeImage.close();
    }
  });
}

galleryContainer.addEventListener('click', onImageClick);

// Change code above this line
