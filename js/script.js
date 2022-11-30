function newItem(){
    let list = $('#list');
    let li = $('<li></li>');
    let input = $('#input').val();
    if (input === ''){
        alert("You must write something!");
    } else {
        list.append(li);
        li.append(input);
    }

    li.on('dblclick', function(){
        li.toggleClass("strike");
    });

    // Why the following does not work?
    // li.on('dblclick', function(){
    //     li.classList.toggle("strike");
    // });

    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
    crossOutButton.on('click', function(){
        li.addClass('delete');
    });

    $('#list').sortable();

};