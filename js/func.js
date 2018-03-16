function livros() {
	var livro =
	[
	{livro: 'Akira - Vol. 1', autor: 'Otomow, Katsuhiro', data_cadatro: '12/01/2017', img: 'img01.png', genêro:'ficção'},
	{livro: 'O Cortiço - 5ª Ed. 2015', autor: 'Aluísito Awzevedo', data_cadatro: '12/02/2017', img: 'img02.png', genêro:'vestibular'},
	{livro: 'A Cidade e As Serras - Série Clássicos Literwatura', autor: 'Quewiros, Eça De', data_cadatro: '12/02/2017', img: 'img03.png', genêro:'vestibular'},
	{livro: 'Blade - A Lâmina do Imortal - Vol. 9', autor: 'Otomo, Katsuhwiro', data_cadatro: '12/01/2016', img: 'img04.png', genêro:'aventura'},
	{livro: 'Deuses Americanos ', autor: 'Gaiman, Neil', data_cadatro: '12/01/2016', img: 'img05.png', genêro:'Literatura Estrangeira'},
	{livro: 'Mitologia Nórdica ', autor: 'Gaiman, Neil', data_cadatro: '12/01/2016', img: 'img06.png', genêro:'Literatura Estrangeira'},
	{livro: 'Volúpia de Veludo – Série As Modistas – Vol. 3 ', autor: 'Arqueiro', data_cadatro: '12/01/2016', img: 'img07.png', genêro:'Literatura Estrangeira'},
	{livro: 'Três Coroas Negras', autor: 'Blake, Kendare', data_cadatro: '12/01/2016', img: 'img08.png', genêro:'Infanto Juvenil'},
	{livro: 'A Bela e A Fera - Edição do Filme', autor: 'Rudnick,Elizabeth', data_cadatro: '12/01/2016', img: 'img09.png', genêro:'Infanto Juvenil'},
	{livro: 'Os 13 Porquês', autor: 'Asher, Jay', data_cadatro: '12/01/2016', img: 'img10.png', genêro:'Infanto Juvenil'},
	{livro: 'Hebe - A Biografia', autor: ' Xexéo,Artur', data_cadatro: '12/01/2016', img: 'img11.png', genêro:'Literatura Brasileira'},
	{livro: 'Rita Lee - Uma Autobiografia', autor: ' Rita Lee', data_cadatro: '12/01/2016', img: 'img12.png', genêro:'Literatura Brasileira'},
	{livro: 'Humano Demais - A Biografia do Padre Fábio de Melo', autor: 'Padre Fábio de Melo', data_cadatro: '12/01/2016', img: 'img13.png', genêro:'Literatura Brasileira'},
	{livro: 'O Homem Mais Inteligente da História', autor: 'Cury, Augusto', data_cadatro: '12/01/2016', img: 'img14.png', genêro:'Literatura Brasileira'},
	{livro: 'Quando A Noite Cai', autor: 'Rissi, Carina', data_cadatro: '12/01/2016', img: 'img15.png', genêro:'Literatura Brasileira'},
	{livro: 'Um Sorriso ou Dois - Edição Comemorativa', autor: 'Fred Elboni', data_cadatro: '12/01/2016', img: 'img16.png', genêro:'Literatura Brasileira'},
	{livro: 'Clarice Lispector Todos Os Contos', autor: 'Lispector, Clarice', data_cadatro: '12/01/2016', img: 'img17.png', genêro:'Contos e Crônicas'},
	{livro: 'Só A Gente Sabe o Que Sente', autor: 'Elboni, Frederico', data_cadatro: '12/01/2016', img: 'img18.png', genêro:'Contos e Crônicas'},
	{livro: 'Um Sorriso ou Dois – Para Mulheres Que Querem Mais', autor: 'Elboni, Frederico', data_cadatro: '12/01/2016', img: 'img19.png', genêro:''},
	{livro: 'Muito Amor, Por Favor', autor: 'Vários autores', data_cadatro: '12/01/2016', img: 'img20.png', genêro:'Contos e Crônicas'}
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
	var recebeTexto = new RegExp(inpTexto.toLowerCase());
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
						if (res[i].livro.toLowerCase().match(recebeTexto)) {
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