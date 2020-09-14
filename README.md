## Vuex Chapter 2
<hr />

* ### Components Registered
  1. Navbar
  2. Card
  3. CardList
  4. Alert

* ### Main Features
  1. Show Books List.
  2. Add Book To Cart.
  3. Show Cart Items List.
  4. Reactive Data Change Total, SubTotal, PPNTotal.
  5. Flexible Alert.
  6. Increment & Decrement Cart Item Quantity.
  7. Remove Item From Cart.

* ### Problems
  1. __State is not reactive__
    solved with *Vue.set(object-name, object-key, object-value)*
    vue is reactive framework.
    If we change object directly inside the vue instance, then the changed data is not reactive. example:
    ```Javascript
    pushToCart(state, data) {
      const filtered = state.cart.filter(val => val.ID == data.ID)
      if (filtered.length) {
        const index = state.cart.indexOf(filtered[0])
        state.cart[index].Quantity++
      } else {
        data['Quantity'] = 1 // it causing the data is not reactive and vue didnt watch for it changed
        Vue.set(data, 'Quantity' 1) // using Vue.set is the better way to change the Object key, value
        state.cart.push(data)
      }
    },
    ```
    If data is not reactive then Vue not watching for it on changed. 
    <br />

  2. __Component/Element didnt re render when state on change__
    Because the data is not reactive vue instance didnt watch for it change, so the element is not rerender.
    idiot way to solve this is adding some key(bool or num) that change everytime the actions is triggered, then the element is rerender because the key is change.
    <br />

  3. __subTotal, total, totalPPN Getters is not reactive__
    Because the cart item is not reactive all of the other object that using the state.cart is being not reactive as well. DOM not updated if the state.cart is changed.
