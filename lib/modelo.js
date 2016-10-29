//window.onLoad = function(){} 
//$(window).on('load',htmlCarregado);

$(window).ready(htmlPronto);

function htmlPronto(){
	$('#botao').on('click', botaoClicado);
}
function mudarH1(){
	$('h1').css({color:'#FF0000', 'font-size': '50px'});
}
function botaoClicado(){
	mudarH1();
	addElement()
}
function addElement(){

	var html = $('#produtosSelecao').html();
	html += '<option value="1">Elemento 1</option>';
	$('#produtosSelecao').html(html);
}