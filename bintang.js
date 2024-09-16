const bintang = (num) => {
    let result = '';

    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }

    return result;
}

console.log(bintang(5))