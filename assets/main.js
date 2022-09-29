const advice = document.querySelector(".advice-text");
const adviceTitle = document.querySelector(".advice-title");
const adviceBtn = document.querySelector(".advice-btn");

const fetchAdvice = () => {
fetch("https://api.adviceslip.com/advice")
.then((res) => 
// cannot have curly braces here since the content will stay in this scope
// cannot pass the json into the next promise
    res.json()
)
.then((data) => {
    advice.innerHTML = `"${data.slip.advice}"`;
    adviceTitle.innerHTML = `Advice #${data.slip.id}`;
    // console.log(data);
})

}

adviceBtn.addEventListener('click', fetchAdvice);



