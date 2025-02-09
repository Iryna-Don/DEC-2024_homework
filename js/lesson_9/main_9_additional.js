//
// =========================
//
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить у теці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let addDiv = document.createElement('div');
document.body.appendChild(addDiv);
addDiv.classList.add('general');

for (const course of coursesArray) {
    let divWrap = document.createElement('div')
    divWrap.classList.add('block');
    addDiv.appendChild(divWrap);

    let divDuration = document.createElement('div');
    divDuration.classList.add('duration');
    divWrap.appendChild(divDuration);

    for (const key in course) {
        if (Array.isArray(course[key])) {
            let ulDiv = document.createElement('div');
            ulDiv.innerText = key;
            divWrap.appendChild(ulDiv);
            let ul = document.createElement('ul');
            ulDiv.appendChild(ul);
            ul.classList.add('ul');
            for (const elem of course[key]) {
                let li = document.createElement('li');
                li.innerText = elem;
                ul.appendChild(li);
            }
        } else if (key === 'title') {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.innerText = `${key}: ${course[key]}`;
            divDuration.insertAdjacentElement("beforebegin", div);
            div.appendChild(h2);
        } else if (key === 'monthDuration' || key === 'hourDuration') {
            let div = document.createElement('div');
            div.innerText = `${key}: ${course[key]}`;
            divDuration.appendChild(div);
        }
    }
}
// ------------------
// ------------------
// ------------------ eine andere Version -------------------------
let wrapper = document.createElement('section');
document.body.appendChild(wrapper);
wrapper.classList.add('general');

for (const course of coursesArray) {
    let block = document.createElement('section');
    wrapper.appendChild(block);
    block.classList.add('block');


    let title = document.createElement('div');
    title.innerHTML = `<h2>${course.title}</h2>`;

    let wrapDuration = document.createElement('div');
    wrapDuration.classList.add('duration');
    let monthDuration = document.createElement('div');
    monthDuration.innerHTML = `<p>Кількість місяців: ${course.monthDuration}</p>`;
    let hourDuration = document.createElement('div');
    hourDuration.innerHTML = `<p>Кількість часів: ${course.hourDuration}</p>`;
    wrapDuration.append(monthDuration, hourDuration);

    let modules = document.createElement('div');
    block.append(title, wrapDuration, modules);
    modules.innerHTML = `<p>Modules:</p>`;
    modules.classList.add('modules');

    let ul = document.createElement('ul');
    modules.appendChild(ul);
    ul.classList.add('ul');

    for (const elem in course.modules) {
        let module = document.createElement('li');
        module.innerHTML = `<p>${course.modules[elem]}</p>`;
        ul.appendChild(module);
    }
}
//
//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
// ------------------
// ------------------
// цього можна досягнути, використавши display: grid або flex,
// маніпулюючи з css (НАРАЗІ CSS ЗАКОМЕНТОВАНО)
// АБО .offsetHeight/.offsetWidth

let sect = document.createElement('section');
sect.classList.add('sect');
let block_1 = document.createElement('div');
block_1.classList.add('textBlock');
let block_2 = document.createElement('div');
block_2.classList.add('textBlock');
let block_3 = document.createElement('div');
block_3.classList.add('textBlock');
document.body.appendChild(sect);
sect.append(block_1, block_2, block_3);
let text_1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque labore magni minima nesciunt nisi voluptatem voluptatum! Aliquid, deserunt earum enim facere impedit in ipsam perspiciatis placeat praesentium quaerat quos voluptatum? At blanditiis ea eius fugiat, harum in labore laborum libero minima molestias reprehenderit vero voluptate.';
let text_2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos numquam omnis qui quisquam recusandae!';
let text_3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, architecto debitis delectus dicta dolorum eum explicabo facere fuga fugiat impedit in magni, molestiae molestias nemo, nesciunt non officiis praesentium quisquam reiciendis sed vel veritatis voluptatem voluptatum. A, alias beatae delectus eligendi eos error id inventore obcaecati rerum totam! Accusantium animi hic maxime natus optio quam sequi similique. Adipisci autem, blanditiis deserunt dicta, dignissimos error et iste laborum nostrum officiis optio quia quidem repellendus sed sunt tempore temporibus unde veniam veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, architecto debitis delectus dicta dolorum eum explicabo facere fuga fugiat impedit in magni, molestiae molestias nemo, nesciunt non officiis praesentium quisquam reiciendis sed vel veritatis voluptatem voluptatum. A, alias beatae delectus eligendi eos error id inventore obcaecati rerum totam! Accusantium animi hic maxime natus optio quam sequi similique. Adipisci autem, blanditiis deserunt dicta, dignissimos error et iste laborum nostrum officiis optio quia quidem repellendus sed sunt tempore temporibus unde veniam veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, architecto debitis delectus dicta dolorum eum explicabo facere fuga fugiat impedit in magni, molestiae molestias nemo, nesciunt non officiis praesentium quisquam reiciendis sed vel veritatis voluptatem voluptatum. A, alias beatae delectus eligendi eos error id inventore obcaecati rerum totam! Accusantium animi hic maxime natus optio quam sequi similique. Adipisci autem, blanditiis deserunt dicta, dignissimos error et iste laborum nostrum officiis optio quia quidem repellendus sed sunt tempore temporibus unde veniam veritatis?';
block_1.innerHTML = `<p>${text_1}</p>`;
block_2.innerHTML = `<p>${text_2}</p>`;
block_3.innerHTML = `<p>${text_3}</p>`;
// sect.innerHTML='<div></div><div></div><div></div>';

let textBoxes = document.getElementsByClassName('textBlock');
let maxHigh = 0;
let maxWidth = 0;
for (let i = 0; i < textBoxes.length; i++) {
    if (textBoxes[i].offsetHeight > maxHigh) {
        maxHigh = textBoxes[i].offsetHeight;
    }
    if(textBoxes[i].offsetWidth > maxWidth){
        maxWidth = textBoxes[i].offsetWidth;
    }
}
for (let k = 0; k < textBoxes.length; k++) {
    textBoxes[k].style.height = maxHigh + "px";
    textBoxes[k].style.width = maxWidth + "px";
}
console.log(maxWidth);
console.log(maxHigh);
// ------------------
// ------------------
