	$(document).ready(function() {
		$('#prefixo').focus();
		var botao = $('a#btConsulta');

		var foco = function(){
			$('#prefixo').keyup(function(){
				if($('#prefixo').val().length==5){
					$('#sufixo').focus();
				}
			});
		}

		foco();		

		botao.click(function(e){
			e.preventDefault();
			var prefixo = $('#prefixo').val();
			var sufixo = $('#sufixo').val();
			var h2 = $("h2");
			var p = $("p");
			h2.addClass('load').text("");
			p.text("");
			if(prefixo=="" && sufixo==""){
				$("h2").text("Preencha o CEP para consulta").removeClass('load');
				
			}else if(prefixo==""){
				$("h2").text("Preencha o campo prefixo CEP").removeClass('load');
				
			}else if(sufixo==""){
				$("h2").text("Preencha o campo sufixo CEP").removeClass('load');
			}
			else{
				$.ajax({url:"http://cep.correiocontrol.com.br/"+ prefixo + sufixo +".json",
					success:function(retorno)
					{	
						h2.text(prefixo+"-"+sufixo);
						p.text(
							retorno.logradouro + ", " + 
							retorno.bairro + ", " + 
							retorno.localidade + " - " + 
							retorno.uf
						);
						h2.removeClass('load');
					},
					error:function(error){
						h2.text("Cep inexistente");
						p.text("");
						h2.removeClass('load');
					}
				});

			}

		});
	});