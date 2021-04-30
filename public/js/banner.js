var counter = 1

function moveRight(){
    counter += 1;
    var last = counter -1;
    if (counter == 3)
        counter = 0;

    document.getElementsByClassName('cardss')[counter].style.display = 'flex';
    document.getElementsByClassName('cardss')[last].style.display = 'none';
}

function moveLeft(){
    counter -= 1;
    var last = counter + 1;

    if (counter == -1){
        counter = 2;
    }
    
    document.getElementsByClassName('cardss')[counter].style.display = 'flex';
    document.getElementsByClassName('cardss')[last].style.display = 'none';
}

