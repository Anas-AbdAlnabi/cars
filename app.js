alert('DOLLAR WISHS YOU A SAFE TRIP');

var message = '';

var passenger = prompt('do you resrve ?');

if (passenger == 'yes') {
    message = 'we glad to hear that';

} else if (passenger == 'no') {
    message = 'we hope you chosing our cars';
} else {
    message = 'please answer the qustion'

}

var like = '';

while (like != 'yes' && like != 'no') {
    like = prompt('Do you like cars? please answer with yes or no');
}
var pic = prompt('how many times you want to see your car photo?')
displayImage(pic);
    document.write('<h2>' + message + '</h2>');
alert('DONT USE PHONE WHILLE DRIVING');

//display imges times times
function displayImage(times){
    for(var i=0; i<times; i++){
        document.write('<img src="https://www.calderstewart.co.nz/assets/GalleryImages/_resampled/CompressedImageW10/Thrifty-Car-Rental-1.jpg">');
    }
}
