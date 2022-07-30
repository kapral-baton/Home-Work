hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

let rainbow = hero.concat(destination,native);
rainbow.reverse();
rainbow.splice(3,1);
rainbow.unshift('Richard');
rainbow.pop();
rainbow.splice(3,0,'Gave','Battle');
rainbow.push('Vain')

const TRs = [];

for(let tr=1; tr<=2; tr++){
    let TDs = [];


    for(let td=1; td<=7; td++){

        if(tr === 2) {
            TDs.push(`<td>${rainbow[td-1]}</td>`);
        }else {
            TDs.push(`<td><img src="%20color/${rainbow[td-1]}.png"></td>`);
        }
    }
    TRs.push(`<tr>${TDs.join(``)}</tr>`);
}
document.write(`<table>${TRs.join(``)}</table>`);
