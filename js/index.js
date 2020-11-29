const firstImage = document.getElementById('firstImage');
const secondImage = document.getElementById('secondImage');
const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');

buttonOne.addEventListener('click', getFirstImage);
buttonTwo.addEventListener('click', getSecondImage);

function getFirstImage(){
	firstImage.innerHTML = '';
	fetch('https://unsplash.it/600/400')
		.then(res => res.blob())
		.then(blob => {
			let img = document.createElement('img');
			img.src = URL.createObjectURL(blob);
			firstImage.appendChild(img);
		})
}

function getSecondImage(){
	secondImage.innerHTML = '';
	fetch('https://unsplash.it/600/400')
		.then(res => res.blob())
		.then(blob => {
			let img = document.createElement('img');
			img.src = URL.createObjectURL(blob);
			secondImage.appendChild(img);
		})
}