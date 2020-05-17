// Select color input 
const $COLOR= $('#pickcolor');
// Select size input
const $PCANVA = $('#pc');
const $HEIGHT = $('#giveheight');
const $WIDTH = $('#givewidth');

// When size is submitted by the user, call makeGrid()

function makeGrid(HEIGHT,WIDTH) {

// Your code goes here!
for (let i = 0; i < HEIGHT; i++) {
        $PCANVA.append('<tr></td>');
    };

    for (let i = 0; i < WIDTH; i++) {
        $('tr').append('<td></td>');
    };
}
$('#picksize').submit(event => {
    event.preventDefault();

    let WIDTH = $WIDTH.val();
    let HEIGHT = $HEIGHT.val();

    $PCANVA.html('');

    makeGrid(HEIGHT, WIDTH);
    ONCLICK();
});
function ONCLICK() {
    $('td').click(event => {
        let COLOR = $COLOR.val();
        $(event.currentTarget).css("background-color",COLOR)
    });
}
