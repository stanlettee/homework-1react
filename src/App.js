import './App.css';

const name = 'Stas'
const url = 'https://cdn.mos.cms.futurecdn.net/tFdGYikZV8QUkF9dha3LaT.jpeg'
const object = {title: "Chat GPT", url: "https://chatgpt.com"}
let x = 10
let y = 5
let sum = x + y
const colors = ['black', 'red', 'white', 'pink', 'yellow']

function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={url} alt="Stars in the sky"/>
      <a href={object.url}>{object.title}</a>
      <p>{sum}</p>
      <ul>
        {
          colors.map((color) => {
            return <li>{color}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
