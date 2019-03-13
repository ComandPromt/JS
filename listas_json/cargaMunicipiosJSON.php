<?php

include('municipios.php');

$provincia='';

if(isset($_GET["provincia"])){
	$provincia=$_GET["provincia"];
}

if(isset($_POST["provincia"])){
	$provincia=$_POST["provincia"];
}
$provincia = trim($provincia);
$losMunicipios = $municipios[$provincia];

foreach($losMunicipios as $codigo => $nombre) {
  $elementos_json[] = "\"$codigo\": \"$nombre\"";
}

echo "{".implode(",", $elementos_json)."}"

?>