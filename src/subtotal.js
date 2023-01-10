import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";


function subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
            <p> Subtotal (0 items):
            <strong>0</strong>
            </p>
            <small className="subtotal__gift">
                    <input type="checkbox" /> This order contain a gift 
            </small>
            </>
        )}
        decimalScale = {2}
        value = {0}
        displayType = {"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default subtotal
