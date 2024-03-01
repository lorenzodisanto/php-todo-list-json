<?php

// leggo il file 
$json_todolist = file_get_contents("../data/todolist.json");

// trasformo file in array php
$todolist_array = json_decode($json_todolist);


// recupero indice array da cancellare
$delete_item_index = (int) $_POST["index"];

// cancello l'item
unset($todolist_array[$delete_item_index]);

// riordino indici array aggiornato
$todolist_array = array_values($todolist_array);


// trasformo l'array in json
$json_res = json_encode($todolist_array);

// aggiorno la lista 
file_put_contents("../data/todolist.json", $json_res);

// avviso il browser dell'invio di dati json
header("Content-Type: application/json");

// stampo i dati
echo $json_res;