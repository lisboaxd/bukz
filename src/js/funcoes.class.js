// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		//$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('arquivo.json', function(data){
			this.qtd = data.livros.length;
			this.retorno = '';
			var ultLivroJson = 0;
			var controlaQuantLivro = 0;
			for (j = 0; j < 3; j++){
				var quantLivroModal = 0;
				this.retorno = "";
				for (i = ultLivroJson; i < this.qtd; i++){
					quantLivroModal++;
					
					if(quantLivroModal<5){
						controlaQuantLivro++;
						this.retorno += '<div class="col-xs-12 col-sm-6  col-md-3"> <a href=""><img class= "books-picture" src="img/'+data.livros[i].img+'" alt="" /></a></br>';
						this.retorno += 'Livro: ' + data.livros[i].livro + '<br>';
						this.retorno += 'Autor: ' + data.livros[i].autor + '</div>';
					}else{
						ultLivroJson = i;
						break;
					}
					
				}
				if(controlaQuantLivro <= this.qtd){
					$('.imagens'+j).html(this.retorno);
					console.log(this.retorno);
					console.log(data.livros.length);
					console.log(controlaQuantLivro);
				}else{
					break;
				}
			}
			
		});

	}

}

 var obj = new json();
		obj.resgatarValores();
/*$(document).ready(function(){
    $(".btn-filtrar").on("click", function(){
    	alert("teste");
        var obj = new json();
		obj.resgatarValores();
 
   
    });
});

$(".btn btn-default").click(function(){
    $(this).hide(
    	
    );
});*/



