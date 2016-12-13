$('#btConsulta').click(function(e) {
  e.preventDefault();
  $btConsulta = $('#btConsulta');
  $text = $('#cep').val();
  $retorna = $('h2');
  $retorna.addClass('load').text('');
  $.getJSON("http://cep.republicavirtual.com.br/web_cep.php?cep=" + $text + "&formato=json", {}, function(data) {
    if (data.resultado_txt == 'sucesso - cep completo') {
      $("h2").text(data.tipo_logradouro + ' ' + data.logradouro + ', ' + data.bairro + ', ' + data.cidade + ' - ' + data.uf);
      $retorna.removeClass('load');
    }else{
      $("h2").text('Cep inválido ou não encontrado');
      $retorna.removeClass('load');
    }
  });
});
