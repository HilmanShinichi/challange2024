const validateCode = (code) => !!code.toString().match(/^[1-3]/g);


console.log(!!validateCode(1));
