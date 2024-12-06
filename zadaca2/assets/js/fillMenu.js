$(document).ready(()=>{
    (function(){
        let menuItems=[
            li1=({ name: "Inventura", image: {path: "./assets/img/News.svg", alt:"News"},link:"#inventura"}),
            li2=({ name: "Inventar", image: {path: "./assets/img/Box.svg", alt:"Box"},link:"#inventar"}),
            li3=({ name: "Prostorije", image: {path: "./assets/img/Classroom.svg", alt:"Classroom"},link:"#prostorije"}),
            li4=({ name: "Zaposlenici", image: {path: "./assets/img/Contacts.svg", alt:"Contacts"},link:"#zaposlenici"}),
            li5=({ name: "Administracija", image: {path: "./assets/img/Services.svg", alt:"Services"},link:"#administracija"})
        ];
        
        for(let i=0 ;i<menuItems.length;++i){
            $('ul.stupac1').first().append(
                `  <li class=l1> <img class="slika1" src="${menuItems[i].image.path} ">
                <a href="${menuItems[i].link}"></a>
                ${menuItems[i].name}    
                </li>
                `
            );
        }
    })();
    
});
