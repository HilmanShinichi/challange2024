function formatMoney(amount) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  const dollar = String(USDollar.format(amount));

  return dollar.replace(/,/g, '');
}


//console.log(formatMoney(39.99)) 
console.log(formatMoney(3)) 
console.log(formatMoney(1012.3)) 
