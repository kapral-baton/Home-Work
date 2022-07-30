sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

let summer_sports = [];
let winter_sports = [];
let fruits = [];

winter_sports = sports.splice(0,5);
summer_sports = sports;
fruits = fruits.concat(winter_sports.splice(2,1),summer_sports.splice(2,1),summer_sports.splice(2,1));

console.log('*** Winter sports ***');
summer_sports.forEach(element => console.log(element.join(':')));
console.log('');
console.log('*** Summer sports ***');
winter_sports.forEach(element => console.log(element.join(':')));
console.log('');
console.log('*** Fruits ***');
fruits.forEach(element => console.log(element.join(':')));
