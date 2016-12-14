$('document').ready(function(){
  $('#cep').focus();

  var $btConsulta = $('#btConsulta');
  var $resposta = $('h2');
  var consulta = function(){
  var $cep = $('#cep').val();
    $resposta.addClass('load').text('');
    $.getJSON("http://cep.republicavirtual.com.br/web_cep.php?cep=" + $cep + "&formato=json", {}, function(data) {
      if (data.resultado_txt == 'sucesso - cep completo') {
        $resposta.text(data.tipo_logradouro + ' ' + data.logradouro + ', ' + data.bairro + ', ' + data.cidade + ' - ' + data.uf);
        $resposta.removeClass('load');
      }else{
        if($cep.length===0){
          $resposta.text('Digite o CEP para consulta');
          $resposta.removeClass('load');
        }else{
          $resposta.text('Cep inválido ou não encontrado');
          $resposta.removeClass('load');
        }
      }
    });
  };

  $btConsulta.click(function(e){
    e.preventDefault();
    consulta();
  });

  $(document).keyup(function(e) {
    if(event.keyCode == 13) {
        consulta();   
    }
  });

});


