const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

let convert = function(object) {
    const newObj = {};
    for (let key in object) {
        if (typeof object[key] === 'object' ) {
            let a = object[key];
            for (let key2 in a) {
                newObj[key2] = a[key2];
            }
        }else {
            newObj[key] = object[key];
        }
    }
    return newObj;
};

console.log(convert(obj));


