$(document).ready(function () {
    function gerarCalendario() {
      const dataAtual = new Date();
      const mes = dataAtual.getMonth();
      const ano = dataAtual.getFullYear();
  
      const primeiroDia = new Date(ano, mes, 1).getDay();
      const totalDias = new Date(ano, mes + 1, 0).getDate();
  
      const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];
  
      $("#monthYear").text(`${nomesMeses[mes]} ${ano}`);
      $("#calendarDays").empty();
  
      // Dias vazios antes do primeiro dia do mês
      for (let i = 0; i < primeiroDia; i++) {
        $("#calendarDays").append("<div></div>");
      }
  
      // Dias do mês
      for (let dia = 1; dia <= totalDias; dia++) {
        $("#calendarDays").append(`<div>${dia}</div>`);
      }
    }
  
    gerarCalendario();
  });
  