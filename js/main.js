const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/* const


element.querySelector("selector")
 */


function  pippo() {
    console.log(this);
}


pippo();


const pluto = {
    nome: "pluto",
    pippo: function() {
        console.log(this.nome);
    }
}


pluto.pippo();


const lista = $("ul");


console.log(lista);


const nuovoElemento = document.createElement("li");


nuovoElemento.textContent = "Tre";
console.log(nuovoElemento);


lista.appendChild(nuovoElemento);


const root = $("#root");




mioDom = {
    type: "header",
    id: "header",
    className: "container",
    children: [
        {
            type: "h1",
            children: [
                {
                    type: "text",
                    content: "Ciao"
                }
            ]
        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    children: [
                        {
                            type: "text",
                            content: "Ciao"
                        },
                        {
                            type: "span",
                            children: [
                                {
                                    type: "text",
                                    content: "Mondo"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    content: "Ciao"
                }
            ]
        }
    ]
}




function render(elemento, parent) {
    const el = document.createElement(elemento.type);
    if (elemento.id) {
        el.id = elemento.id;
    }
    if (elemento.className) {
        el.className = elemento.className;
    }
    if (elemento.content) {
        el.textContent = elemento.content;
    } else {
        elemento.children.forEach(child => {
            render(child, el);
        });
    }
    parent.appendChild(el);
}


render(mioDom, root);




function contoAllaRovescia(n) {
    console.log(n);
    if (n === 0) {
        //console.log(n);
        return;
    }
    contoAllaRovescia(n - 1);
}


contoAllaRovescia(10);









/**
 
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

lista.appendChild(item); **/