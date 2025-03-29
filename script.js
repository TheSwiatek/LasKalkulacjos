// item1=vintek 2=pukawka 3=ceram 4=pistolmk2 5=Kajdany 6=tlumik 7=kamza 8=ammo9 9= ammo.45


const prices = {
  H: {
    item1: 300000,
    item2: 270000,
    item3: 270000,
    item4: 270000,
    item5: 150000,
    item6: 200000,
    item7: 250000,
    item8: 1500,
    item9: 1500
  },
  S: {
    item1: 270000,
    item2: 240000,
    item3: 240000,
    item4: 240000,
    item5: 125000,
    item6: 200000,
    item7: 200000,
    item8: 1250,
    item9: 1250
  }
};

function calculateTotal() {
  const prefix = document.getElementById('prefixSelect').value;
  const item1Quantity = parseInt(document.getElementById('item1').value);
  const item2Quantity = parseInt(document.getElementById('item2').value);
  const item3Quantity = parseInt(document.getElementById('item3').value);
  const item4Quantity = parseInt(document.getElementById('item4').value);
  const item5Quantity = parseInt(document.getElementById('item5').value);
  const item6Quantity = parseInt(document.getElementById('item6').value);
  const item7Quantity = parseInt(document.getElementById('item7').value);
  const item8Quantity = parseInt(document.getElementById('item8').value);
  const item9Quantity = parseInt(document.getElementById('item9').value);

  const item1Price = prices[prefix].item1;
  const item2Price = prices[prefix].item2;
  const item3Price = prices[prefix].item3;
  const item4Price = prices[prefix].item4;
  const item5Price = prices[prefix].item5;
  const item6Price = prices[prefix].item6;
  const item7Price = prices[prefix].item7;
  const item8Price = prices[prefix].item8;
  const item9Price = prices[prefix].item9;

  let total = (item1Quantity * item1Price) + (item2Quantity * item2Price) + (item3Quantity * item3Price) + (item4Quantity * item4Price) + (item5Quantity * item5Price) + (item6Quantity * item6Price) + (item7Quantity * item7Price) + (item8Quantity * item8Price) + (item9Quantity * item9Price);

  document.getElementById('total').innerHTML = `${total.toLocaleString()} $`;
}
