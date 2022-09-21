const button = document.getElementById('jokeBtn')
const joke = document.getElementById('joke');

const getJoke = async () => {
  const config = {
    headers: {
      "Accept": 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data => {
      joke.innerText = data.joke
    })
}

button.addEventListener('click', getJoke)

getJoke();