const lista = document.querySelector('#main-menu');


const articolo = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: 'article title'
        },
        {
            type: 'p',
            children: 'article content'
        }
    ]

}
const rootContent = document.querySelector('#content');
createContent(article,);


const item = document.createElement('li');
item.classList.add('menu-item');
item.style.color = 'red';

item.innerHTML = '<a href="#">Contacts</a>';

const link = item.querySelector('a');

link.style.color = 'green'; 
link.style.textDecoration = 'none'; 

lista.appendChild(item);