<?php

// leggiamo contenuto file json
$json_content = file_get_contents("../data/todolist.json");

// avvio il browser dell'invio di dati json
header("Content-Type: application/json");

// stampo i dati
echo $json_content;