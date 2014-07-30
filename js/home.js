	$(document).ready(function() {
		$('#prefixo').focus();
		var botao = $('a');
		var prefixo;
		var intRegex = /\D/;


		// $('#prefixo').keypress(function(event) {
		// 	if(	$('#prefixo').length == 6){
		// 		$('#sufixo').focus();
		// 	}
		// 	alert('ok')
		// });

		if($('#prefixo').value.length == 6){
			alert('ok');
		}

		botao.click(function(e){
			e.preventDefault();
			$("h2").addClass('load');
			$("h2").text("");
			$("p").text("");

			prefixo = $('#prefixo').val();
			sufixo = $('#sufixo').val();
			var CEP = prefixo + sufixo;
			CEP = CEP.replace("-", "");

			if(CEP == ""){
				$("h2").text("Preencha o campo CEP").removeClass('load');
				$("p").text("");
			}else{

				$.ajax({url:"http://cep.correiocontrol.com.br/"+CEP+".json",
					success:function(retorno)
					{	
						$("h2").text(prefixo+"-"+sufixo);
						$("p").text(
							retorno.logradouro + ", " + 
							retorno.bairro + ", " + 
							retorno.localidade + "- " + 
							retorno.uf
						);
						$("h2").removeClass('load');
					},
					error:function(error){
						$('h2').text("Cep inexistente");
						$("p").text("");
						$("h2").removeClass('load');
					}
				});

			}

		});
	});