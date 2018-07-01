// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    makeGrid(height, width);
    
})

function makeGrid(x,y) {

 $('tr').remove();

 // Your code goes here!

    for (let i = 1; i<= x; i++){
        $('#pixelCanvas').append('<tr></tr>');
        for(let j = 1; j <=y; j++) {
            $('tr'). filter(':last'). append('<td></td>');
        }
    }
  // Adding color to cell!
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style');
        }
        else{
            $(this).attr('style', 'background-color:' + color);
        }
    })
}

