alert('DOLLAR WISHS YOU A SAFE TRIP');

var message='';

var passenger = prompt('do you resrve ?');

if (passenger =='yes' ){
    message = 'we glad to hear that';

}else if ( passenger == 'no' ){
    message = 'we hope you chosing our cars';
}else {message='please answer the qustion'

}
document.write('<h2>' + message + '</h2>');
alert('DONT USE PHONE WHILLE DRIVING');