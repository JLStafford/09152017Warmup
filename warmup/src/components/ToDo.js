import React from 'react';

const CartItem = (
  props
) => {
  console.log("todo log", props)

  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s8">{props.todo}</div>
      </div>
    </div>
  )
}

export default CartItem