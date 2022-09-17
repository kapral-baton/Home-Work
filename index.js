const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

const getUserAnswer = (resolve, reject) => {
    const answer = confirm('Подивитися баланс карті?');
    if (answer) {
        resolve();
    } else {
        reject();
    }
}

function getMoney() {
   return new Promise(getUserAnswer)
        .then(() => {
            let currency;
            let money;
            let success = false;

            do {
                currency = prompt('Введите валюту одну из: USD, EUR, UAH, BIF, AOA');
                console.log(currency);
                money = userData[currency?.trim().toUpperCase()];
                if (money) {
                    success = true;
                }
            } while (!success);
            console.log(`Баланс становить:${money}`)
        })
        .catch(() => {
           let currency;
           let moneyBank;
           let moneyUser;
           let success = true;

           do {
               currency = prompt('Введите валюту одну из: USD, EUR, UAH, GBP');

               moneyBank = bankData[currency?.trim().toUpperCase()];
               moneyUser = userData[currency?.trim().toUpperCase()];

               if (moneyBank && moneyUser) {
                   success = false;
               }
           } while (success);

           currency = currency.trim().toUpperCase();


            let suma = Number(prompt('Введите суму зняття'));
            if (suma <= moneyBank.max && suma <= moneyUser) {
                if ( suma > moneyBank.min) {
                    console.log(`От Ваші гроші ${suma} ${currency} ${moneyBank.img}`);
                }else {
                    console.log('Введена сума менша за доступну. Мінімальна сума зняття: … Повторний запит на доступну валютут НЕ робимо');
                }
            }else {
                console.log('Введена сума більша за доступну. Максимальна сума зняття: … Повторний запит на доступну валютут НЕ робимо.');
            }
       })
       .finally(()  => {
           console.log('Дякую, гарного дня 😊');
       })
}


getMoney();
