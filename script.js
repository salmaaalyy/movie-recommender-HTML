console.log("Script running");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const submitButton = document.querySelector("#submit");
const randomButton = document.querySelector("#random");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

// submitButton.addEventListener("click", async (e) => {
//   let myKey = "gP99aV2K5962FE4oalzcfJfDu2V3lnhw";
//   let topic = `${queryField.value}`;
//   console.log(topic);
//   let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   let max = getRandomInt(data.data.length);
//   let imageUrl = data.data[max].images.downsized.url;
//   console.log(imageUrl);
//   imageHolderDiv.innerHTML = `<img src = ${imageUrl}/>`
// });

// randomButton.addEventListener("click", async (e) => {
//   let myKey = "gP99aV2K5962FE4oalzcfJfDu2V3lnhw";
//   let url = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}`;
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   let imageUrl = data.data[max].images.downsized.url;
//   console.log(imageUrl);
//   imageHolderDiv.innerHTML = `<img src = ${imageUrl}/>`
// });