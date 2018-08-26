# Juego de adivinar el numero

Introduce un numero y te dirá si el numero elegido es mayor o menor al aleatorio.

[Adivinar numero](https://github.com/ComandPromt/JS/blob/master/adivinar_numero_js.html)

# Conversor divisas

[Conversor de divisas](https://github.com/ComandPromt/JS/blob/master/conversor_divisas.html)

# Funcion copiarAlPortapapeles
~~~js 
function copiarAlPortapapeles(id_elemento) {

var textarea = document.getElementById(id_elemento);
textarea.select();
document.execCommand("copy");

}
~~~

# Funcion Recargar Pagina
~~~js
function recargar()
{
location.href=location.href
}
setInterval('recargar()',20000)
~~~
