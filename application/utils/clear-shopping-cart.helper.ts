export function cleanUpCart() {
  const removeItemsButton = $('#content button[data-original-title="Remove"]');
  removeItemsButton.isClickable();
  removeItemsButton.click();
  expect($('#content p')).toHaveTextContaining('shopping cart is empty');
}
