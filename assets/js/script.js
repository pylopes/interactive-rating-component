let fdbRating = document.querySelectorAll(".btn-rating");
let btnSubmit = document.querySelector(".btn-submit");
let feedbackQuestion = document.querySelector(".feedback-question");
let feedbackSend = document.querySelector(".feedback-send");
let ratingSelectedMsg = document.querySelector("span")
let ratingValue;

fdbRating.forEach((rating, index) => {
    rating.addEventListener("click", () => {
        for (let i = 0; i < fdbRating.length; i++) {
			fdbRating[i].classList.remove("selected");
		}
        fdbRating[index].classList.add("selected");
        ratingValue = fdbRating[index].textContent;
    });
});


btnSubmit.addEventListener("click", () => {
    if (ratingValue) {
        feedbackQuestion.classList.add("display-hidden");
        feedbackSend.classList.remove("display-hidden");
        ratingSelectedMsg.innerHTML = ratingValue;
    } else {
        alert("Please, select a rating!")
    }
});
