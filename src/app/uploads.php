<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Uploads de Livros para Json</title></head>
<style>    .body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	form {
		margin: 50px;
		border-radius: 15px;
		box-shadow: 2px 2px 20px rgb(30, 30, 30);
		width: 60%;
		height: 60%;
		padding: 20px;
		background: rgba(190, 190, 190, 1);
	}

	input {
		width: 95%;
		display: block;
		margin: 15px;
		padding: 10px;
	}

	input[type='text']:focus {
		outline: 5px double black;
		font-size: 14px;
	}

	h3 {
		text-align: center;
	}

	.sucesso {
		background: rgb(59, 220, 161);
		padding: 20px;
		border: 2px solid rgb(33, 117, 84);
		margin: 5px;
	}

	.falha {
		background: rgba(255, 117, 109, 1);
		padding: 20px;
		border: 2px solid rgba(255, 0, 4, 1);
		margin: 5px;
	}</style>
<body>
<div class="body">
	<form action="uploads.php" method="post" enctype="multipart/form-data"><h3>Enviar livros para o
			Bukz</h3> <?php if (!empty($_POST)){
			include_once ('./utils.php');
			$root_path = './';
						addOnJson($root_path);			$name_of_file = nomeDoArquivo($root_path.'img/');			if (move_uploaded_file($_FILES['capa']['tmp_name'], $root_path.'/img/'.$name_of_file)) {				echo "<h4 class='sucesso'>Arquivo válido e enviado com sucesso.</h4>";			} else {				echo "<h4 class='falha'>Possível ataque de upload de arquivo!</h4>";			}		}	?>
		<input type="text" name="titulo" id="titulo" placeholder="Título do livro" required autofocus/> <input
			type="text" name="autor" id="autor" placeholder="Autor do livro" required autofocus/> <input type="text"
																										 name="genero"
																										 id="genero"
																										 placeholder="Genero"
																										 required
																										 autofocus/>
		<input type="file" name="capa" id="capa" required> <input type="submit" name="enviar" id="enviar"
																  value="Enviar"></form>
</div>
</body>
</html>