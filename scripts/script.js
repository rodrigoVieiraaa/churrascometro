// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

function display(quantidadeCarne, quantidadeCerveja, quantidadeRegrigente) {
  let display = document.getElementById("resultados");

  display.innerHTML = "<p>" + quantidadeCarne + " Kg de Carne";
  display.innerHTML += "<p>" + quantidadeCerveja + " Latas de Cerveja";
  display.innerHTML += "<p>" + quantidadeRegrigente + " Pet's 2l de Bebidas";
}

function calculoCarne(quantidadeAdulto, quantidadeCriança, horas) {
  let quantidadePessoas = quantidadeAdulto + quantidadeCriança / 2;

  console.log(quantidadePessoas);
  if (horas >= 6) {
    return 0.65 * quantidadePessoas;
  } else {
    return 0.4 * quantidadePessoas;
  }
}

function calculoCerveja(quantidadeAdulto, horas) {
  if (horas > 6) {
    return Math.ceil((2000 * quantidadeAdulto) / 355);
  } else {
    return Math.ceil((1200 * quantidadeAdulto) / 355);
  }
}

function calculoRefrigerante(quantidadeAdulto, quantidadeCriança, horas) {
  let quantidadePessoas = quantidadeAdulto + quantidadeCriança / 2;

  if (horas > 6) {
    return Math.ceil((1.5 * quantidadePessoas) / 2);
  } else {
    return Math.ceil((1 * quantidadePessoas) / 2);
  }
}

function calcular() {
  let input = document.getElementsByTagName("input");

  let quantidadeAdulto = parseInt(input[0].value);
  let quantidadeCrianca = parseInt(input[1].value);
  let quantidadeHora = parseInt(input[2].value);

  let quantidadeCarne;
  let quantidadeCerveja;

  quantidadeCarne = calculoCarne(
    quantidadeAdulto,
    quantidadeCrianca,
    quantidadeHora
  );

  quantidadeCerveja = calculoCerveja(quantidadeAdulto, quantidadeHora);

  quantidadeRegrigente = calculoRefrigerante(
    quantidadeAdulto,
    quantidadeCrianca,
    quantidadeHora
  );

  display(quantidadeCarne, quantidadeCerveja, quantidadeRegrigente);
}
