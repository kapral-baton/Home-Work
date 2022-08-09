const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

let array1 = [];
users.forEach(element => array1.push(element[0]+'!'));

let array2 = users.map(element => element[0]+'?');

let userRed = users.filter(element => element[1] === 'red');

let totalScore = 0;
userRed.forEach(element => totalScore += element[2]);

let table = '';
userRed.forEach(element => table +=(`
        <tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3].join(';')}</td>
        </tr>`));

document.write(`<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Comand</th>
            <th>Score</th>
            <th>Data</th>
        </tr>
    </thead>
    <tbody>
           ${table}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total score: ${totalScore}</td>
        </tr>
    </tfoot>
</table>`);










