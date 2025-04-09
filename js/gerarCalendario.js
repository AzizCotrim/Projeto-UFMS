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

    for (let i = 0; i < primeiroDia; i++) {
      $("#calendarDays").append("<div></div>");
    }

    for (let dia = 1; dia <= totalDias; dia++) {
      $("#calendarDays").append(`<div>${dia}</div>`);
    }
}

$(document).ready(function () {
    gerarCalendario();
});
