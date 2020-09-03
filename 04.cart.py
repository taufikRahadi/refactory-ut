from functools import reduce
class Cart:
    items = []
    discount = 0

    def add_item(self, item):
        self.items.append(item)
        return self

    def filter_item(self, id):
        return self.items.index(next(i for i in self.items if i['item_id'] == id), 0)

    def remove_item(self, item):
        self.items.pop(self.filter_item(item['item_id']))
        return self

    def show_all(self):
        return self.items
    
    def total_items(self):
        return len(self.items)

    def total_price(self):
        total = []
        for item in self.items:
            total.append(item['price'])

        # total = sum(total)
        total = reduce((lambda x, y: x + y), total)
        return total * (self.discount / 100)

    def total_quantity(self):
        total = []
        for item in self.items:
            total.append(item['quantity'])

        total = reduce((lambda x, y: x + y), total)
        return total

    def checkout(self):
        with open('cart.txt', 'w') as f:
            for item in self.items:
                f.write('%s\n' % item)

    def add_discount(self, discount):
        self.discount = int(discount.split('%')[0])


cart = Cart()
cart.add_item({ 'item_id': 1, 'price': 30000, 'quantity': 3 }) \
    .add_item({ 'item_id': 2, 'price': 10000 }) \
    .add_item({ 'item_id': 3, 'price': 5000, 'quantity': 2 }) \
    .remove_item({ 'item_id': 2 }) \
    .add_item({ 'item_id': 4, 'price': 400, 'quantity': 6 }) \
    .add_discount('50%')

print(cart.total_items())
print(cart.total_quantity())
print(cart.total_price())
print(cart.show_all())
cart.checkout()
