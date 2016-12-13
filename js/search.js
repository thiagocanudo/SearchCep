$('#btConsulta').click(function(e) {
  e.preventDefault();
  $btConsulta = $('#btConsulta');
  $cep = $('#cep').val();
  $resposta = $('h2');
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
});
