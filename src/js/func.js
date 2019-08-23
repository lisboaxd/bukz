function livros() {
	var livro =
	[
	{livro: 'Akira - Vol. 1', autor: 'Otomow, Katsuhiro', data_cadatro: '12/01/2017', img: 'img01.png', genêro:'ficção'},
	{livro: 'Blade - A Lâmina do Imortal - Vol. 9', autor: 'Otomo, Katsuhwiro', data_cadatro: '12/01/2016', img: 'img02.pgn', genêro:'aventura'},
	{livro: 'O Cortiço - 5ª Ed. 2015', autor: 'Aluísito Awzevedo', data_cadatro: '12/02/2017', img: 'img03', genêro:'vestibular'},
	{livro: 'A Cidade e As Serras - Série Clássicos Literwatura', autor: 'Quewiros, Eça De', data_cadatro: '12/02/2017', img: 'img04.png', genêro:'vestibular'},
	{livro:"B\u00edblia Sagrada",autor:"Desconhecido",data_cadastro:"04\/06\/2017",img:"img06.jpg",genero:"Fic\u00e7\u00e3o"},
	{livro:"Biblia Sagrada",autor:"V\u00e1rios",data_cadastro:"04\/06\/2017",img:"img07.jpg",genero:"Fic\u00e7\u00e3o"},
	{livro:"\u00c0rvore",autor:"Abcdef",data_cadastro:"04\/06\/2017",img:"img08.png",genero:"Genero"},
	{livro:"teste",autor:"teste",data_cadastro:"04\/06\/2017",img:"img09.png",genero:"teste"}
	];
	return livro;
}
function filtrar() {
	var retorno =""
	for (var k = 0; k < 2; k++) {
		document.getElementsByClassName("imagens"+k)[0].innerHTML = retorno;
	}
	var inpTexto = document.getElementById("inpFiltrar").value;
	var filtroSelecionado = document.getElementById("btnFiltro").value;
	var recebeTexto = new RegExp(inpTexto);
	if (inpTexto != "") {
		var res = livros();
		var qtd = res.length;
		retorno = '';
		var quantLivroModal = 0;
		var quantLivros = 0
		var ultLivroJson = 0;
		switch(filtroSelecionado) {
			case "nome":
			for (var j = 0; j < 2; j++){
				retorno = '';
				for (var i = ultLivroJson; i < qtd; i++){
					if(quantLivroModal < 4 && (ultLivroJson + 1) != qtd){
						ultLivroJson = i;
						if (res[i].livro.match(recebeTexto)) {
							quantLivros++;
							quantLivroModal++;
							retorno += '<div class="col-xs-12 col-sm-6  col-md-3"> <a href=""><img class="books-picture" src="img/'+res[i].img+'" alt="" /></a></br>';
							retorno += '<p class= "tituloLivro">Livro: ' + res[i].livro + '<br>';
							retorno += 'Autor: ' + res[i].autor + '</p></div>';
							document.getElementsByClassName("imagens"+j)[0].innerHTML = retorno;
							console.log(retorno);
						}
					}else{
						ultLivroJson = i;
						console.log("ultLivroJson "+ultLivroJson);
						quantLivroModal = 0;
						console.log("quantLivroModal "+quantLivroModal);
						break;
					}
				}
				if (quantLivros == 0) {
					retorno = '<p class="col-xs-12 tituloLivro" style ="text-align: center;">Não foi encontrado nenhum livro com o nome filtrado</p>';
					document.getElementsByClassName("imagens0")[0].innerHTML = retorno;
				}
			}
			break;
			case "n":
			
			break;
			
		}
	}else{
		retorno = '<p class="col-xs-12 tituloLivro" style ="text-align: center;">Não foi encontrado nenhum livro com o nome filtrado</p>';
		document.getElementsByClassName("imagens0")[0].innerHTML = retorno;
	}	
	
}