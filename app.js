document.getElementById('generateBtn').addEventListener('click', () => {
  generateGreetingWithImage()
    .then(({ greeting, imageUrl }) => {
      document.getElementById('greeting').textContent = greeting;
      document.getElementById('picture').src = imageUrl;
    })
    .catch(err => {
      console.error('Something went wrong:', err);
    });
});

function generateGreetingWithImage() {
  return new Promise((resolve, reject) => {
    try {
      const greetings = [
        "Rise and Shine",
        "Better Days are coming",
        "Hope life is treating you well",
        "You are a perfect human being",
        "I wish nothing but the best from you",
        "Just go for it!"
      ];

      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

      fetchRandomImage()
        .then(imageUrl => {
          resolve({ greeting: randomGreeting, imageUrl });
        })
        .catch(err => reject(err));
    } catch (error) {
      reject(error);
    }
  });
}

function fetchRandomImage() {
  return fetch('https://picsum.photos/800/400')
    .then(response => response.url);
}
