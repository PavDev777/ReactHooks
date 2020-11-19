import React, {useState, useEffect} from 'react'

function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  // const [pos, setPos] = useState({
  //   x: 0,
  //   y: 0
  // })

  // useEffect(() => {
  //   window.addEventListener('mousemove', e => {
  //     setPos({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   })
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`) 
    .then(response => response.json())
    .then(json => setData(json))
  }, [type]) //указывается от чего должен зависет useEffect вторым параметром

  return (
    <div>
      <h1>Ресурс: {type} </h1>
      <button onClick={() => setType('users')} >Пользователи</button>
      <button onClick={() => setType('Todos')} >Todos</button>
      <button onClick={() => setType('Posts')} >Посты</button>

      {/* <pre> {JSON.stringify(pos, null, 2)} </pre> */}


      <pre> {JSON.stringify(data, null, 2)} </pre>
    </div>
  )
}

export default App;
