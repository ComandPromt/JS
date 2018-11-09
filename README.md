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

# Expresiones Regulares

## Comprobar URL
~~~js
let url = /^(http|ftp|https)\:\/\/[a-z0-9\_-]+(\.[a-z0-9\_-]+)*(\:[0-9]{2,4})?$/;

document.write(url.test ('https://google.es:8080')+"<br/>"); //true            
document.write(url.test ('ftp://ftp.com.es')+"<br/>"); //true          
document.write(url.test ('file:///bin/bash')+"<br/>");  //false            
document.write(url.test ('https://google.es/index.html')+"<br/>");//false
~~~

## Ejemplo de validación de teléfono:
~~~js
let telefono = /^[6789][0-9]{8}$/;

telefono.test ('123456789');  // false
telefono.test ( '95566622');  // false
telefono.test ('95566622a');  // false
telefono.test ('609123456');  // true
~~~

## Ejemplo de validación de código postal:
~~~js
let codigoPostal = /^[0-9]{4,5}$/;

codigoPostal.test ( '14500');  // true
codigoPostal.test (  '9500');  // true
codigoPostal.test ('A11450');  // false
codigoPostal.test (     '1');  // false
~~~

## Ejemplo comprobar email

~~~js
    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    email.test ('j.amj2000@gmail.com');            // true
    email.test ('pepe_lopez@ventas.tienda.com');  // true
    email.test ('pepe#lopez@tienda.com');         // false
    email.test ('pepe_lopez@ventas/tienda.com');  // false
~~~
