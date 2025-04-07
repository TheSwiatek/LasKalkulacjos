let vintek = 0;
let kajdanki = 0;
let tlumik = 0;
let ammo = 0;

let sns = 0;
let s_kajdanki = 0;
let s_tlumik = 0;
let s_ammo = 0;

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

const itemNames = {
  item1: "Vintek",
  item2: "Pukawka",
  item3: "Ceram",
  item4: "SNS 2",
  item5: "Kajdany",
  item6: "Tlumik",
  item7: "Kamza",
  item8: "Ammo 9mm",
  item9: "Ammo .45acp"
};

function PoliczCene() {
  const prefix = document.getElementById('prefixSelect').value;
  let total = 0;
  let descriptionHTML = "";

  for (let i = 1; i <= 9; i++) {
    const quantity = parseInt(document.getElementById(`item${i}`).value) || 0;
    const price = prices[prefix][`item${i}`];
    total += quantity * price;

    if (quantity > 0) {
      descriptionHTML += ` <a>${itemNames[`item${i}`]} x ${quantity} |-| </a>`;
    }
  }

  document.getElementById('total').innerHTML = `${total.toLocaleString()}$`;
  document.getElementById('description').innerHTML = descriptionHTML;
}

function refresh() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`item${i}`).value = '0';
  }

  document.getElementById('total').innerHTML = `0$`;
  document.getElementById('description').innerHTML = `<a id="description" class="description">Szczegóły zamówienia </a>`;
}

function gotowce_vintek() {
  if (vintek == 0) {
    document.getElementById('gotowce_vintek').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    vintek++;
  }else{
    document.getElementById('gotowce_vintek').style.boxShadow = `0px 0px 5px black`;
    vintek = 0;
  }
  
}

function gotowce_vintek_kajdanki() {
  if (kajdanki == 0) {
    document.getElementById('gotowce_vintek_kajdanki').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    kajdanki++;
  }else{
    document.getElementById('gotowce_vintek_kajdanki').style.boxShadow = `0px 0px 5px black`;
    kajdanki = 0;
  }
  
}

function gotowce_vintek_tlumik() {
  if (tlumik == 0) {
    document.getElementById('gotowce_vintek_tlumik').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    tlumik++;
  }else{
    document.getElementById('gotowce_vintek_tlumik').style.boxShadow = `0px 0px 5px black`;
    tlumik = 0;
  }
  
}


function gotowce_sns() {
  if (sns == 0) {
    document.getElementById('gotowce_sns').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    sns++;
  }else{
    document.getElementById('gotowce_sns').style.boxShadow = `0px 0px 5px black`;
    sns = 0;
  }
  
}

function gotowce_sns_kajdanki() {
  if (s_kajdanki == 0) {
    document.getElementById('gotowce_sns_kajdanki').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    s_kajdanki++;
  }else{
    document.getElementById('gotowce_sns_kajdanki').style.boxShadow = `0px 0px 5px black`;
    s_kajdanki = 0;
  }
  
}

function gotowce_sns_tlumik() {
  if (s_tlumik == 0) {
    document.getElementById('gotowce_sns_tlumik').style.boxShadow = `0px 0px 7px rgb(94, 156, 0)`;
    s_tlumik++;
  }else{
    document.getElementById('gotowce_sns_tlumik').style.boxShadow = `0px 0px 5px black`;
    s_tlumik = 0;
  }
  
}

// function licz_gotowce_vintek() {
//     let cena = 0;
//     if (vintek == 0) {
//       cena += 300000;
//     }
//     if (kajdanki == 0) {
//       cena += 250000;
//     }
//     if (tlumik == 0) {
//       cena += 200000;
//     }
//     let gotowce_ammo_temp = 0;

//     cena = 0;
// }

function licz_gotowce_vintek() {
  document.getElementById('description').innerHTML = ``;
  let cena_vintek = 0;
  if (vintek == 1) {
    cena_vintek += 300000;
    document.getElementById('description').innerHTML += `vintek x 1 |-| `;
  }
  if (kajdanki == 1) {
    cena_vintek += 250000;
    document.getElementById('description').innerHTML += `kajdanki x 1 |-| `;
  }
  if (tlumik == 1) {
    cena_vintek += 200000;
    document.getElementById('description').innerHTML += `tlumik x 1 |-| `;
  }
  let ilosc_ammo_vintek = document.getElementById(`gotowce_ammo_vintek`).value;
  cena_vintek += ilosc_ammo_vintek * 1500;
  document.getElementById('description').innerHTML += `Ammo 9mm x ${ilosc_ammo_vintek} - `;
  let gotowce_ammo_temp_vintek = 0;
  document.getElementById('total').innerHTML = `${cena_vintek}$`;

  cena_vintek = 0;
}

function licz_gotowce_sns() {
  document.getElementById('description').innerHTML = ``;
  let cena_sns = 0;
  if (sns == 1) {
    cena_sns += 300000;
    document.getElementById('description').innerHTML += `sns x 1 |-| `;
  }
  if (s_kajdanki == 1) {
    cena_sns += 250000;
    document.getElementById('description').innerHTML += `kajdanki x 1 |-| `;
  }
  if (s_tlumik == 1) {
    cena_sns += 200000;
    document.getElementById('description').innerHTML += `tlumik x 1 |-| `;
  }
  let ilosc_ammo_sns = document.getElementById(`gotowce_ammo_sns`).value;
  cena_sns += ilosc_ammo_sns * 1500;
  document.getElementById('description').innerHTML += `Ammo .45acp x ${ilosc_ammo_sns} - `;
  let gotowce_ammo_temp_sns = 0;
  document.getElementById('total').innerHTML = `${cena_sns}$`;

  cena_sns = 0;
}