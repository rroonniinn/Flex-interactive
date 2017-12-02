document.addEventListener('DOMContentLoaded', function(){

// **************************************************************
// ******** Wyszukiwanie obiektów -->
// ************************************************************** 

// Dodawanie / Usuwanie elementów ze sceny

    var btnAdd = document.querySelector('#btn-add');
    var btnRemove = document.querySelector('#btn-remove');
    var wraperFlex = document.querySelector('.wraper-flex');

// Menu podstawowe flexa:

    var btnsFlex = [
        document.querySelector('.menu-display').querySelectorAll('a'),
        document.querySelector('.menu-flex-direction').querySelectorAll('a'),
        document.querySelector('.menu-flex-wrap').querySelectorAll('a'),
        document.querySelector('.menu-justify-content').querySelectorAll('a'),
        document.querySelector('.menu-align-items').querySelectorAll('a'),
        document.querySelector('.menu-align-content').querySelectorAll('a')       
    ]

// **************************************************************
// ******** Nadanie eventu wszsytkim guzikom  -->
// **************************************************************     

    console.log ( btnsFlex );

    for (var i=0;i<btnsFlex.length;i++) {
        for (var j=0;j<btnsFlex[i].length;j++) {
            btnsFlex[i][j].addEventListener('click', function(e){
                e.preventDefault();
                
                var siblings = this.parentElement.parentElement.querySelectorAll('a');
                for (var i=0;i<siblings.length;i++) {
                    siblings[i].classList.remove('clicked');
                }
                this.classList.toggle ('clicked');
                    

            })


        }
    }

// **************************************************************
// ******** Klikanie w podstawowe menu flexa -->
// ************************************************************** 






// **************************************************************
// ******** Dodawanie nowych elementów na scenę -->
// ************************************************************** 
    
    btnAdd.addEventListener('click', function(e){
        e.preventDefault();
        var newFlexBox = document.createElement("div");
        var flexBoxes = document.querySelectorAll('.flex-box');
        
        if (flexBoxes.length > 0) {
            var counter = Number(flexBoxes[flexBoxes.length-1].querySelector('span').innerText);
        } else {
            var counter = 0;
        }    
        
        newFlexBox.classList.add ('flex-box');
        newFlexBox.innerHTML = '<span class="flex-box-item">'+(counter+1)+'</span>';
        wraperFlex.appendChild(newFlexBox);

        if (btnRemove.hasAttribute("class", 'not-active')) {
            btnRemove.classList.remove('not-active');
        }

    })

// **************************************************************
// ******** Usuwanie elementów ze sceny -->
// ************************************************************** 


    btnRemove.addEventListener('click', function(e){
        e.preventDefault();
        var flexBoxes = document.querySelectorAll('.flex-box');
    
        if (flexBoxes.length > 1) {    
            var toDelete = flexBoxes[flexBoxes.length-1];
            toDelete.parentElement.removeChild(toDelete); 
        } else if (flexBoxes.length === 1){
            var toDelete = flexBoxes[flexBoxes.length-1];
            toDelete.parentElement.removeChild(toDelete); 
            btnRemove.classList.add('not-active');
        }
        
    })

}) 
