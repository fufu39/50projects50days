const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', getJoke)

getJoke()

async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  console.log(data);
  

  jokeEl.innerText = data.joke
}