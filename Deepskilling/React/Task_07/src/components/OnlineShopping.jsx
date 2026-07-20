import React, { Component } from 'react'
import Cart from '../models/Cart'

class OnlineShopping extends Component {
  constructor(props) {
    super(props)

    // Initialize 5 shopping items using Cart class
    this.state = {
      items: [
        new Cart(1, 'Laptop', 55000),
        new Cart(2, 'Wireless Mouse', 850),
        new Cart(3, 'Mechanical Keyboard', 3200),
        new Cart(4, 'USB-C Hub', 1500),
        new Cart(5, 'Monitor Stand', 1200),
      ],
    }
  }

  render() {
    const { items } = this.state
    const total = items.reduce((sum, item) => sum + item.price, 0)

    return (
      <div className="shopping-container">
        <h2>🛒 Shopping Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop over items and display item name and price */}
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemname}</td>
                <td>₹{item.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="total-row">
              <td colSpan="2"><strong>Total</strong></td>
              <td><strong>₹{total.toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default OnlineShopping
