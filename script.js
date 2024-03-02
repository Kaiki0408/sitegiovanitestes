
function updatetab(id){
    $('.room_tab').fadeOut(400, function () {
		$('.room_tab').delay().removeClass('show_tab');
		});
	
	$('#room_tab_' + id).delay(400).fadeIn(400, function () {
		$('#room_tab_' + id).addClass('show_tab');
	});
    return false;
}


var btndireta = document.getElementById('btndireta');
var btnavancada = document.getElementById('btnavancada');

var boxfilter1 = document.getElementById('boxfilter1');
var boxfilter2 = document.getElementById('boxfilter2');

btnavancada.addEventListener('click', function() {
    boxfilter1.classList.remove('show_tab');
    setTimeout(function() {
        boxfilter2.classList.add('show_tab');
    }, 500);
    btndireta.style.backgroundColor = 'rgba(0, 44, 104, 100)';
    btnavancada.style.backgroundColor = 'rgba(0, 74, 173, 100)';
});

btndireta.addEventListener('click', function() {
    boxfilter2.classList.remove('show_tab');
    setTimeout(function() {
        boxfilter1.classList.add('show_tab');
    }, 500);
    btndireta.style.backgroundColor = 'rgba(0, 74, 173, 100)';
    btnavancada.style.backgroundColor = 'rgba(0, 44, 104, 100)';
});

