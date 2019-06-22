const Cart = require('../pageobjects/cart');
const assert = require('assert');

describe('Cart', () => {
  
  it('Login succses', () => {
    Cart.open()
    Cart.login();
    Cart.username.addValue('ko3tniw@cryptonet.top');
    Cart.password.addValue('ERdfcv1234');
    Cart.submit();
    //   browser.pause(2000);
      Cart.submitBuy();
      Cart.closeModal();
      browser.pause(2000);
      let cartCountText = Cart.cartCount;
    assert.equal(cartCountText.getText(), "1");
    
  });
  it('Delete from cart', () => {
      Cart.openCart();
      Cart.delete();
      Cart.deleteSubmit();
      browser.pause(2000);
      let emptyCartText = Cart.emptyCart;
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
});