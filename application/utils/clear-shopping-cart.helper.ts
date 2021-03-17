export function cleanUpCart() {
  const allItems = $$('#content button[data-original-title="Remove"]');
  allItems.find((element) => {
    expect(element).toBeClickable();
    element.click();
  });
  expect($('#content p')).toHaveTextContaining('shopping cart is empty');
}
