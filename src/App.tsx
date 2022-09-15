import React from 'react'
import Counter from 'Components/Counter'

function App() {
  // eslint-disable-next-line no-console
  console.log('This is console. It should fire eslint error if there is no disable rule above.')

  return (
    <>
      <Counter />
    </>
  )
}

export default App