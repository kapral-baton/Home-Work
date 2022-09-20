const select = document.querySelector('#jokesCategories');



fetch('https://api.chucknorris.io/jokes/categories')
.then(data => data.json())
    .then(data =>  data.forEach(item => select.innerHTML += `<option>${item}</option>`));


select.addEventListener('change', event => {
    const ul = document.querySelector('#jokesList');
    fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
        .then(data => data.json())
        .then(data => ul.innerHTML = `<li>
                                            <p>Category: <b>${select.value}</b></p>
                                            <p>${data.value}</p>
                                            <button id="button">Remove joke</button>
                                        </li>`)
        .then(() => {
            select.setAttribute("disabled", "true");

        })
        .then(() => {
            let button = document.querySelector('#button');

            button.addEventListener('click', event => {
                select.removeAttribute("disabled");
                document.querySelector('li').remove();
            })
        });


});











