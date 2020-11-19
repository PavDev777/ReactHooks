import React, {useState} from 'react'

function App() {


  function computedInitialCounter() {
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
  }

  // const [counter, setCounter] =  useState(0)
  const [counter, setCounter] =  useState(() => {
    return computedInitialCounter()
  })



  const [state, setState] = useState({     //передача объекта в состояние
    title: 'Счетчик',
    date: Date.now()
  })


  function increment() {
    setCounter(counter + 1)
    
    // setCounter((prevCounter) => {
    //   return prevCounter + 1
    // })

    // setCounter(prev => prev + 1)

  }

  function decrement() {
    setCounter(counter - 1)
  }


  function updateTitle() {   //Функция изменения состояния в объектах
    setState( prev => {          //возвращаем предыдущее состояние и изменяем нужное поле в объекте 
      return {
        ...prev,
        title: 'Новое название'
      }
    })
  }


  return (
    <div>
      <h1>Счетчик: {counter} </h1>
      <button onClick={increment} className='btn btn-success'>Добавить</button>
      <button onClick={decrement} className='btn btn-danger'>Убрать</button>
      <button onClick={updateTitle} className='btn btn-primary'>Изменить название</button>

      <pre> {JSON.stringify(state, null, 2)} </pre>
    </div>
  )
}

export default App;
