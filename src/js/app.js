document.addEventListener('DOMContentLoaded', function(){

    var btnAdd = document.querySelector('#btn-add');
    var btnRemove = document.querySelector('#btn-remove');
    var wraperFlex = document.querySelector('.wraper-flex');
   
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
