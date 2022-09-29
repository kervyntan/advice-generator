const advice = document.querySelector(".advice-text");
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
    // console.log(data.slip.advice);
})

}

adviceBtn.addEventListener('click', fetchAdvice);



