$(document).ready(()=>{
    (function(){
        let rooms = [
            p1 = ({name:"Predavaonica 1", itemsCount : 50}),
            p2 = ({name:"Predavaonica 2", itemsCount : 50}),
            p3 = ({name:"Predavaonica 3", itemsCount : 50}),
            p4 = ({name:"Predavaonica 4", itemsCount : 50}),
            p5 = ({name:"Predavaonica 5", itemsCount : 50}),
            p6 = ({name:"Predavaonica 6", itemsCount : 50}),
            p7 = ({name:"Portirnica", itemsCount : 50}),
            p8 = ({name:"Referada", itemsCount : 50})
    
        ];

        for(let j=0; j<rooms.length; j++){
            $('ul.stupac2').first().append(
                `
                <div class="l2">
                <li>${rooms[j].name}
                <p class="br_predmeta">Broj predmeta: ${rooms[j].itemsCount}</p>
                </li>
                </div>
                `
            )
        }
    })();

    function od_najmanjeg(a,b){
        if($(b).text() > $(a).text()){
            return -1;
        }
        else{
            return 1;
        }
    }

    function od_najvećeg(a,b){
        if($(a).text() > $(b).text()){
            return -1;
        }
        else{
            return 1;
        }
    }

    let clicked=true;

    $('button.poredaj').click((event)=>{
       if (clicked==true){
            $("ul.stupac2 div").sort(od_najvećeg).appendTo('ul.stupac2');
             
            $('.arrow').css({transform:"rotateX(180deg)"});
            clicked=false;
       }
        else{
            $("ul.stupac2 div").sort(od_najmanjeg).appendTo('ul.stupac2');
            
            $('.arrow').css({transform:"rotateX(360deg)"});
            clicked=true;
        }
    });


});