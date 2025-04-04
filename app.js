const greetings = [
  "Hello, sunshine!",
  "Good day to explore!",
  "Smile, it's a beautiful moment!",
  "Here's your daily dose of beauty!",
  "Embrace the day!",
  "Picture-perfect moment incoming!",
  "Hope this brightens your day!"
];

document.getElementById("generateBtn").addEventListener("click", () => {
  // Pick a random greeting
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  document.getElementById("greeting").textContent = randomGreeting;

  // Fetch a random image from Unsplash
  fetch("https://api.api-ninjas.com/v1/randomimage")
    .then((response) => {
      // The response.url is the actual image URL
      document.getElementById("picture").src = response.url;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
      document.getElementById("greeting").textContent = "Oops! Couldn't load a picture.";
    });
    
   
});
