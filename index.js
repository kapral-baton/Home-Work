const BASE_URL = 'https://61c9d37520ac1c0017ed8eac.mockapi.io'
const heroes = [];

const div = document.querySelector('#containerHero');
const form = document.querySelector('#formHero');

const getUniverses = async () =>{
    fetch(`${BASE_URL}/universes`)
        .then(data => data.json())
        .then(data => {
            const universes = document.querySelector('#comics');
            universes.innerHTML = data.map(item => `<option value=${item.name}>${item.name}</option>`);
        });
}

const getHeroes = async () => {
    fetch(`${BASE_URL}/heroes`)
        .then(data => data.json())
        .then(data =>  data.forEach(item => heroes.push(item)))
        .then(() => {
            let text = '';
            heroes.forEach(item => text += `<tr id=${item.id}>
                <td>${item.name}</td>
                <td>${item.comics}</td>
                <td >
                    <input 
                        type="checkbox" 
                        ${item.favourite ?'checked': ''} 
                        id=${item.id} 
                        class="favouriteCheckbox"
                    >
                </td>
                <td><button id=${item.id} type="delete">Delete</button></td>
            </tr>`)
            div.innerHTML += `<table>${text}</table>`;
            const  checkBox = document.querySelectorAll('#favouriteCheckbox');
            console.log(checkBox);

            checkBox.forEach(elem => {
                console.log(elem);
                elem.addEventListener('change', edit)
            })
            const deleteButton = document.querySelectorAll('button[type="delete"]');
            console.log('------',deleteButton);
            deleteButton.forEach( item => item.addEventListener('click', deleteItem))
        });

}

const postHero = (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get("name"),
        comics: formData.get("comics"),
        favourite: formData.get("favourite") === "on"
    }

    fetch(`${BASE_URL}/heroes`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}

const edit = (e) => {
    fetch(`${BASE_URL}/heroes/${e.target.id}`, {
        method: 'PUT',
        body: JSON.stringify({ favourite: e.target.checked })
    })
}


const deleteItem = (e) => {
    fetch(`${BASE_URL}/heroes/${e.target.id}`, {
        method: 'DELETE',
        body: JSON.stringify({ favourite: e.target.checked })
    })
        .then(data => data.json())
        .then(() => {
            getHeroes()
        });
}




getUniverses();
getHeroes();

form.addEventListener('submit', postHero);


















