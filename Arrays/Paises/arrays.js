function longitud(paises){
return paises.length;
}

function verpaises(paises){
    paises.forEach(function(elemento) {
if(elemento!=undefined){
        document.write(elemento+"<br/>");
}
        });
}

function reverso(paises){
return paises.reverse();
}

function ordenar(paises){
   return paises.sort();
}

function añadir_principio(){
  paises.unshift("Francia");
}

function añadir_final(){
    paises.push("Francia");
}

function BorrarPortugal(){
    document.write("Borramos Portugal<br/>");
    paises.splice(8, 1);
    paises.forEach(function(elemento) {
        document.write(elemento+"<br/>");
        });
}

function verpais(x){
    document.write(paises[x]);
}
function verpaispos(pais){
    document.write(paises.indexOf(pais));
}

function verpaisintervalo(principio,fin,paises){
    for(principio;principio<=fin;principio++){
        document.write(paises[principio]+"<br/>");
    }
}