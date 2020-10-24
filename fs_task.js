window.addEventListener("load", function () {

    let input = document.querySelector("#fs-task_search"),
        arr = Array.prototype.slice.call(document.querySelectorAll("a")),
        pop = document.querySelector('.pop'),
        result = document.querySelector('#result'),
        searchResult = pop.children[1];


    input.addEventListener('focus', function () {
        pop.classList.add('active');

    })
    document.body.addEventListener('click', function (e) {
        if (!e.target.parentNode.classList.contains('fs-task_form') && !e.target.parentNode.classList.contains('fs-task')) {
            pop.classList.remove('active');
        }
    });




    input.addEventListener("input", () => {
        let a = arr.filter((item) => {
            return item.textContent.includes(input.value);
        });

        searchResult.innerHTML = '';

        a.forEach((item) => {
            let newItem = document.createElement('li'),
                del = input.value,
                delSymbols = item.textContent.replace(del, '');


            newItem.innerHTML = `<li><a href="${item.href}" ><span style="background-color:yellow">${del}</span>${delSymbols}</a></li>`;

            searchResult.appendChild(newItem);
        })
        result.textContent = `Найдено: ${a.length}`;
    })




});