const button = document.getElementById('jokeBtn')
const joke = document.getElementById('joke');

const getJoke = async () => {
  const config = {
    headers: {
      "Accept": 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com/', config)

  const data = await res.json()

  joke.innerText = data.joke
}

button.addEventListener('click', getJoke)

getJoke();