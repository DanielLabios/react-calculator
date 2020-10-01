import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(null)

  //////////////////////////////////////////////////////////////////////

  function clickClearButton() {
    setDisplay(0)
    setFirstNumber(null)
    setSecondNumber(null)
    setOperator(null)
    setResult(null)
  }
  function clickedDigit(event) {
    if (result !== null) {
      clickClearButton()
    }
    if (operator === null) {
      if (display === 0) {
        setDisplay(event)
        setFirstNumber(event)
      } else {
        setDisplay(`${display}${event}`)
        setFirstNumber(`${display}${event}`)
      }
    } else {
      if (display === 0) {
        setDisplay(event)
        setSecondNumber(event)
      } else {
        setDisplay(`${display}${event}`)
        setSecondNumber(`${display}${event}`)
      }
    }
  }
  function clickOperator(event) {
    setOperator(event)
    setDisplay(0)
  }

  function clickEquals() {
    let actualFirstNumber = parseInt(firstNumber, 10)
    let actualSecondNumber = parseInt(secondNumber, 10)

    if (operator === '+') {
      setDisplay(actualFirstNumber + actualSecondNumber)
      setResult(actualFirstNumber + actualSecondNumber)
    }
    if (operator === '-') {
      setDisplay(actualFirstNumber - actualSecondNumber)
      setResult(actualFirstNumber - actualSecondNumber)
    }
    if (operator === '/') {
      setDisplay(actualFirstNumber / actualSecondNumber)
      setResult(actualFirstNumber / actualSecondNumber)
    }
    if (operator === '*') {
      setDisplay(actualFirstNumber * actualSecondNumber)
      setResult(actualFirstNumber * actualSecondNumber)
    } else {
      return
    }
  }

  //////////////////////////////////////////////////////////////////////

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op" onClick={() => clickOperator('/')}>
            &#247;
          </button>
          <button className="button" onClick={() => clickedDigit(7)}>
            7
          </button>
          <button className="button" onClick={() => clickedDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button className="button op" onClick={() => clickOperator('*')}>
            &#215;
          </button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>
          <button className="button op" onClick={() => clickOperator('-')}>
            &#8722;
          </button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button className="button op" onClick={() => clickOperator('+')}>
            &#43;
          </button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op" onClick={clickEquals}>
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
