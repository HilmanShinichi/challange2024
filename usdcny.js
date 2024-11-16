function usdcny(usd) {
    let ChineseYuan = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CNY',
    });

  const CNY = String(ChineseYuan.format(usd * 6.75));

  return CNY.replace(/[,CN¥]/g, '') + ' Chinese Yuan';
}

// cara simpel

usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;
console.log(usdcny(15)) // '101.25 Chinese Yuan'