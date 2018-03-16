// Classe para chamar o Json.


function json(){

	var qtd;
	var retorno;
	console.log(getFullPath());

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		//$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON(getFullPath()+'/arquivo.json', function(data){
			this.qtd = data.usuarios.length;
			this.retorno = '';

			for (i = 0; i < this.qtd; i++){
				this.retorno += '<div class="col-xs-12 col-sm-2  col-md-3"> <img class="books-picture" src="img/'+data.usuarios[i].img+'" alt="" /></br>';
				this.retorno += 'Livro: ' + data.usuarios[i].livro + ' - ';
				this.retorno += 'Autor: ' + data.usuarios[i].autor + '</div>';
			}

			$('.imagens').html(this.retorno);
			console.log(this.retorno);
			console.log("teste");
			
		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();


function getFullPath(){
	/* 	@author 	Mateus
	 * 	@since 		06/2017
	 *	@content 	Obterá o fullpath do host
	 * */
	var hostname = location.origin;
	if(location.pathname != '/'){
		var path = path = location.pathname.split('/');
		path = path[1]+'/'+path[2];
		return hostname+'/'+path
	}else{
		return hostname
	}


}
