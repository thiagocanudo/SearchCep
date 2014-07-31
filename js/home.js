	$(document).ready(function() {
		$('#prefixo').focus();
		var botao = $('a#btConsulta');
		var botaoSufixo = $('#sufixo');
		var foco = function(){
			$('#prefixo').keyup(function(){
				if($('#prefixo').val().length==5){
					$('#sufixo').focus();
				}
			});
		}
		foco();	
		var magica = function(){
			var prefixo = $('#prefixo').val();
			var sufixo = $('#sufixo').val();
			var h2 = $("h2");
			var p = $("p");
			h2.addClass('load').text("");
			p.text("");
			if(prefixo=="" && sufixo==""){
				$("h2").text("Digite o CEP para consulta").removeClass('load');
				
			}else if(prefixo==""){
				$("h2").text("Digite o prefixo do CEP").removeClass('load');
				
			}else if(sufixo==""){
				$("h2").text("Digite o sufixo  doCEP").removeClass('load');
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

		}
		botao.click(function(e){
			e.preventDefault();
			magica();
		});
		botaoSufixo.keyup(function(e){
			e.preventDefault();
		    if(event.keyCode == 13) {
		        magica();   
		    }	
		});

	});


