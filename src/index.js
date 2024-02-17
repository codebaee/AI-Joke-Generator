function tellMeAJoke(response) {
  console.log(response.data.answer);
  let jokeArrived = document.querySelector("#response-joke-area");
  jokeArrived.innerHTML = response.data.answer;
  new Typewriter("#response-joke-area", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "🤭",
    delay: 40,
  });

  // Clear the loading message
  let firstResponse = document.querySelector("#response-joke-area1");
  firstResponse.innerHTML = "";
}
//
function loadingJoke() {
  let firstResponse = document.querySelector("#response-joke-area1");
  firstResponse.innerHTML = "One moment, loading the best of the best..";
  setTimeout(() => {
    firstResponse.innerHTML = " ";
  }, 700);
}

// Fetch the joke using Axios on click
function itsHere(event) {
  event.preventDefault();
  // Clear previous joke
  let jokeArrived = document.querySelector("#response-joke-area");
  jokeArrived.innerHTML = "";
  //display loading message
  loadingJoke();
  //api info
  let apiKey = "d010da332cob3740f398ft7aa7bdef74";
  let context =
    "You have been into technology for over 30 years and know alot of jokes";
  let prompt =
    "Tell me a funny computer joke that are witty and full of sarcasm";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Called the API");
  axios.get(apiUrl).then(tellMeAJoke);
}

//
// Add event listener to the joke-ready button
let jokeButtonElement = document.querySelector("#joke-ready");
jokeButtonElement.addEventListener("click", itsHere);
