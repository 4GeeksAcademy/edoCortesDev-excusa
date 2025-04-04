window.onload = function() {
  // array with the words
  let inicio = "Un ";
  let adjetivos = ["enorme ", "pegajoso ", "eléctrico ", "sorprendente ", "invisible ", "saltón ", "gritón ", "despistado ", "brillante "];
  let sujetos = ["payaso ", "ornitorrinco ", "robot ", "niño ", "abuelo ", "fantasma ", "zombi ", "mapache "];
  let acciones = ["lanzó mi ", "escondió mi ", "rompió mi ", "pintó mi ", "gritó sobre mi ", "mojó mi ", "secuestró mi "];
  let objetos = ["bocina ", "cepillo de dientes ", "torta ", "guitarra ", "cargador ", "calcetín ", "cuaderno ", "hamburguesa "];
  let lugares = ["en la azotea", "en el ascensor", "debajo del sofá", "en el supermercado", "cerca de la estación", "detrás del baño", "en la panadería"];

  // declaring random variables
  let r1 = Math.floor(Math.random() * adjetivos.length);
  let r2 = Math.floor(Math.random() * sujetos.length);
  let r3 = Math.floor(Math.random() * acciones.length);
  let r4 = Math.floor(Math.random() * objetos.length);
  let r5 = Math.floor(Math.random() * lugares.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = inicio + adjetivos[r1] + sujetos[r2] + acciones[r3] + objetos[r4] + lugares[r5];
}