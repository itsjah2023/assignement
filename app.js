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

  // Fetch a random image 
  fetch('https://api.api-ninjas.com/v1/randomimage', {
    headers: { 
        'X-Api-Key': '',
        'Accept': 'image/jpg'
    }
})
.then(response => response.blob())
.then(blob => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
})
.catch(error => {
    console.error('Error:', error);

      document.getElementById("greeting").textContent = "Oops! Couldn't load a picture.";
    });
    
  });  
