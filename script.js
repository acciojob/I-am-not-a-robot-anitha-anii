// Handle image click
function handleClick(event) {
  const selectedImages = document.querySelectorAll('.container img.selected');
  const resetButton = document.getElementById('reset');
  const verifyButton = document.getElementById('verify');
  const para = document.getElementById('para');

  if (selectedImages.length === 1 && !selectedImages[0].isEqualNode(event.target)) {
    event.target.classList.add('selected');
    resetButton.style.display = 'inline-block';
    verifyButton.style.display = 'none';
    para.textContent = '';

    if (selectedImages[0].src === event.target.src) {
      verifyButton.style.display = 'inline-block';
    }
  } else {
    event.target.classList.toggle('selected');
    if (selectedImages.length === 1) {
      verifyButton.style.display = 'none';
      para.textContent = '';
    }
  }
}

// Add event listeners to images
const images = document.querySelectorAll('.container img');
images.forEach((img) => {
  img.addEventListener('click', handleClick);
});

// Add event listener to reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetState);

