function showMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}

function confirm() {
  alert("Thank you for contacting me! I will try to get back to you as soon as possible. In the mean time, if you have any other additional questions or comments, feel free to contact me using the form again.")
}

// let carouselWidth1 = document.getElementById("carousel1").clientWidth;
// let carouselWidth2 = document.getElementById("carousel2").clientWidth;
// let prevButton1 = document.getElementById("button-previous1");
// let nextButton1 = document.getElementById("button-next1");
// let prevButton2 = document.getElementById("button-previous2");
// let nextButton2 = document.getElementById("button-next2");
// let imageRow1 = document.getElementById("carousel-image-row1");
// let imageRow2 = document.getElementById("carousel-image-row2");
// let imageNum1 = 0;
// let imageNum2 = 0;

// Implement backend for the form submission and data processing
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');
//
// body('firstname').isLength({ min: 1 }).trim().withMessage('Name empty.'),
// body('age', 'Invalid age').optional({ checkFalsy: true }).isISO8601(),

// function showNextImage1() {
// 	imageNum1 += 1;
// 	checkControls1();
// 	let temp = -(imageNum1*carouselWidth1);
// 	imageRow1.style.left = temp;
// }
//
// nextButton1.onclick = showNextImage1;
//
// function showPrevImage1() {
// 	imageNum1 -= 1;
// 	checkControls1();
// 	let temp = -(imageNum1*carouselWidth1);
// 	imageRow1.style.left = temp;
// }
//
// prevButton1.onclick = showPrevImage1;
//
//
// function showNextImage2() {
// 	imageNum2 += 1;
// 	checkControls2();
// 	let temp = -(imageNum2*carouselWidth2);
// 	imageRow2.style.left = temp;
// }
//
// nextButton2.onclick = showNextImage2;
//
// function showPrevImage2() {
// 	imageNum2 -= 1;
// 	checkControls2();
// 	let temp = -(imageNum2*carouselWidth2);
// 	imageRow2.style.left = temp;
// }
//
// prevButton2.onclick = showPrevImage2;
//
//
//
// let totalImages1 = document.getElementsByClassName("carousel-image1").length;
// let totalImages2 = document.getElementsByClassName("carousel-image2").length;
//
//
//
// function checkControls1() {
// 	if (imageNum1 == 0) {
// 		prevButton1.classList.add('hidden');
// 	}
// 	else if (prevButton1.classList.contains("hidden")) {
// 		prevButton1.classList.remove('hidden');
// 	}
// 	if (imageNum1 == totalImages1-1) {
// 		nextButton1.classList.add('hidden');
// 	}
// 	else if (nextButton1.classList.contains("hidden")) {
// 		nextButton1.classList.remove('hidden');
// 	}
// }
//
// function checkControls2() {
// 	if (imageNum2 == 0) {
// 		prevButton2.classList.add('hidden');
// 	}
// 	else if (prevButton2.classList.contains("hidden")) {
// 		prevButton2.classList.remove('hidden');
// 	}
// 	if (imageNum2 == totalImages2-1) {
// 		nextButton2.classList.add('hidden');
// 	}
// 	else if (nextButton2.classList.contains("hidden")) {
// 		nextButton2.classList.remove('hidden');
// 	}
// }
