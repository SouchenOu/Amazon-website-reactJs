import { SportsBasketball } from '@mui/icons-material'
import React from 'react'
import "./subtotal.css"


function subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
            <p> Subtotal ({basket.length} items):
            <strong>{ ` ${value}`}</strong>
            </p>
            <small className='subtotal_gift'>
                    <input type="checkbox" /> This order contain a gift 
            </small>

            </>

        )}
      
      
      />
    </div>
  )
}

export default subtotal
