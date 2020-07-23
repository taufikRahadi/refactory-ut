const fs = require('fs')

class Cart
{
    constructor()
    {
        this.cart = []
        this.discount = 0
    }

    addDiscount(discount)
    {
        this.discount = discount
        return this
    }

    addItem(item)
    {
        if(item.quantity == undefined) {
            item.quantity = 1
        }
        this.cart.push(item)
        return this
    }

    showAll()
    {
        return JSON.stringify(this.cart)
    }

    totalItems()
    {
        return this.cart.length
    }

    totalQuantity()
    {
        return this.cart.map(cart => cart.quantity).reduce((previous, next) => previous + next)
    }

    totalPrice()
    {
        return this.cart.map(cart => cart.price).reduce((prev, next) => prev + next) * (parseInt(this.discount) / 100)
    }

    removeItem(item)
    {
        const cartItem = this.cart.filter(cart => cart.item_id === item.item_id)[0]
        const itemInCart = this.cart.indexOf(cartItem)
        if(itemInCart) {
            this.cart.splice(itemInCart, 1)
        } else {
            return false
        }

        return this
    }

    checkout()
    {
        fs.writeFileSync('cart.json', JSON.stringify(this.cart))

        return "printed"
    }
}

const cart = new Cart()

console.log(cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000 })
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
    .removeItem({ item_id:2 })
    .addItem({ item_id: 4, price: 400, quantity: 6 })
    .addDiscount('50%')
)

console.log(cart.totalItems())

console.log(cart.totalQuantity())

console.log(cart.totalPrice())

console.log(cart.showAll())

console.log(cart.checkout())