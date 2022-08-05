const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(a,b) {
    const TRs = [];
    for(let tr=1; tr<=a.length ; tr++){
        let TDs = [];
        let counter = a[tr-1];
        for(let td=1; td<= counter.length; td++){
            if(Array.isArray(counter[td-1]) ) {
                TDs.push(`<td>${counter[td-1].join(';')}</td>`);
            }else {
                TDs.push(`<td>${counter[td-1]}</td>`);
            }
        }
        TRs.push(`<tr>${TDs.join(``)}</tr>`);
    }
    document.write(`<table><caption>${b}</caption>${TRs.join(``)}</table>`);
}

getInfo(animals , 'Animals info');
getInfo(food , 'Food info');
getInfo(universes , 'Universes info');