let suma = 0;
let productSelected = 0;
let bulka;
let potato;
let sauce;
let formatted;

do {
    let rollType = prompt('hamburger or cheeseburger','');
    if (rollType != null) {
        formatted = rollType.replaceAll(` `,``).toLowerCase();
        if (formatted === 'hamburger' ) {
            suma += 10;
            productSelected += 1;
            bulka = 'hamburger';
        } else if (formatted === 'cheeseburger') {
            suma += 15;
            let cheese = confirm('Would you like to add double cheese?');
            if (cheese){
                suma += 5 ;
                productSelected += 1;
                bulka = 'cheeseburger with cheese';
            }else{
                productSelected += 1;
                bulka = 'cheeseburger';
            }
        }
    }
} while ( productSelected < 1 );

let needPotato = confirm(`Would you like potato?`);
if (needPotato){
    let typePotato = prompt(`Choose potato size: small/middle/big`,'');
    if ( typePotato !== null && typePotato !== `` ) {
        formatted = typePotato.replaceAll(` `,``).toLowerCase();
        if (formatted === 'small'){
            suma += 10;
            potato = 'small';
        }else if (formatted === 'middle'){
            suma += 15;
            potato = 'middle';
        }else if (formatted === 'big'){
            suma += 20;
            potato = 'big';
        }
    }else {
        suma += 10;
        potato = 'small';
    }
}

let needSauce = confirm(`Would you like sauce?`);
if (needSauce) {
    let chooseSauce = prompt(`Choose sauce: ketchup/mayonnaise`,'');

    if ( chooseSauce !== null && chooseSauce !== `` ) {
        formatted = chooseSauce.replaceAll(` `,``).toLowerCase();
        if (formatted === 'ketchup'){
            suma += 2;
            sauce = 'ketchup';
        }else if (formatted === 'mayonnaise'){
            suma += 3;
            sauce = 'mayonnaise';
        }
    }else {
        suma += 2;
        sauce = 'ketchup';
    }
}

document.write(`<p>Bulka 🍔: ${bulka}</p>`);
document.write(`<p>Potato 🍟::${potato}</p>`);
document.write(`<p>Sauce 🧂:${sauce}</p>`);
document.write(`<p>Price: ${suma}</p>`);