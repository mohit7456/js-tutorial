var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a)  // shows scope error
console.log(b)  // shows scope error
console.log(c)  // It doesn't show any error because scope is not applicable to 'var' so we do not use it.