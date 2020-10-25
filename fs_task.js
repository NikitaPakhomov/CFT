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

    function searching() {
        let a = arr.filter((item) => {
            return item.textContent.includes(input.value);
        });
        return a;
    }

    function replacing(arr) {
        arr.forEach((item) => {
            let newItem = document.createElement('li'),
                del = input.value,
                delSymbols = item.innerHTML.replace(del, `<span style="background-color:yellow">${del}</span>`);


            newItem.innerHTML = `<li><a href="${item.href}" >${delSymbols}</a></li>`;

            searchResult.appendChild(newItem);
        })
    }




    input.addEventListener("input", () => {
        let a = searching();
        searchResult.innerHTML = '';

        replacing(a);
        result.textContent = `Найдено: ${a.length}`;
    })




});