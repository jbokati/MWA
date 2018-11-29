Array.prototype.even = function () {
    let self = this;
    setImmediate(function () {
        let data = self.filter(d => d % 2 === 0);
        console.log(data);
    })
}

Array.prototype.odd = function () {
    let self = this;
    setImmediate(function () {
        let data = self.filter(d => d % 2 !== 0);
        console.log(data);
    })
}


console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('end');

