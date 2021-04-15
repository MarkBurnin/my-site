let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('like-full')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('like-full');
};
