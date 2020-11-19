import React, {useState, useEffect, useRef} from 'react'

function App() {

  const [value, setValue] = useState('initial')
  const rederCount = useRef(1)

  useEffect(() => {
    rederCount.current++
  })



  return (
    <div>
      <h1>Кол-во рендеров: {rederCount.current} </h1>
      <input type="text" onChange={ e => setValue(e.target.value)} value={value} />
    </div>
  )
}

export default App;
