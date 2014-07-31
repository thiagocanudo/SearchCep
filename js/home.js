	$(document).ready(function() {
		$('#prefixo').focus();
		var botao = $('a#btConsulta');
		

		//var intRegex = /\D/;
		// $('#prefixo').keypress(function(event) {
		// 	if(	$('#prefixo').length == 6){
		// 		$('#sufixo').focus();
		// 	}
		// 	alert('ok')
		// });

		botao.click(function(e){
			e.preventDefault();
			$("h2").addClass('load');
			$("h2").text("");
			$("p").text("");

			prefixo = $('#prefixo').val();
			sufixo = $('#sufixo').val();
			var CEP = prefixo + sufixo;
			CEP = CEP.replace("-", "");

			if(prefixo == "" && sufixo == "" ){
				$("h2").text("Preencha o campo prefixo e sufixo do CEP").removeClass('load');
				
			}else if(prefixo == "" ){
				$("h2").text("Preencha o campo prefixo CEP").removeClass('load');
				
			}else if(sufixo == ""){
				$("h2").text("Preencha o campo sufixo CEP").removeClass('load');
				
			}
			else{

				$.ajax({url:"http://cep.correiocontrol.com.br/"+CEP+".json",
					success:function(retorno)
					{	
						$("h2").text(prefixo+"-"+sufixo);
						$("p").text(
							retorno.logradouro + ", " + 
							retorno.bairro + ", " + 
							retorno.localidade + " - " + 
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