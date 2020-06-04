import React, { useState } from 'react'
import './main.scss'
import { useHistory } from 'react-router-dom'

// import wave from '../assets/images/wave.jpg'

const Main = () => {
  const history = useHistory()
  // const [counter, setCounterNew] = useState(0)
  const [inputValue, inputValueChange] = useState('')
  const onChange = (e) => {
    inputValueChange(e.target.value)
  }

  return (
    <div>
      <form>
        <input type="text" name="name" id="input-field" value={inputValue} onChange={onChange} />
        <br />
        <button
          id="search-button"
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={() => {
            history.push(`/${inputValue}`)
          }}
        >
          OK
        </button>
      </form>
    </div>
  )
}

Main.propTypes = {}

export default Main
