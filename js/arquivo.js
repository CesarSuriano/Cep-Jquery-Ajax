$(window).ready(htmlPronto);

var base = 'http://viacep.com.br/ws/CEP/json/';

function htmlPronto(){
	$('#botao').click( click);
}
function click(){
		var cep = $('#cep').val();

		var url = '';

		url += base
					.replace('CEP', cep);

		var r = $.get(url);

		r.fail(function(){
			console.log('deu bosta');
		});
		r.always(function(){
			console.log('always');
		});
		r.done(function(dados){
			var cep = dados.cep;
			var logradouro = dados.logradouro;
			var complemento = dados.complemento;
			var bairro = dados.bairro;
			var localidade = dados.localidade;
			var uf = dados.uf;
			var ibge = dados.ibge;

			$('#logradouro').val(logradouro);
			$('#complemento').val(complemento);
			$('#bairro').val(bairro);
			$('#localidade').val(localidade);
			$('#uf').val(uf);
			$('#ibge').val(ibge);  
			
		});
}