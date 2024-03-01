<?php

// leggo il file 
$json_todolist = file_get_contents("../data/todolist.json");

// trasformo file in array php
$todolist_array = json_decode($json_todolist);

// aggiungiamo all'array il nuovo item con lo status aggiornato
$todolist_array_change = [
    "text"=> $_POST["text"],
    "done" => $_POST["done"] == "true",
];

// recupero indice array selezionato
$change_item_index = (int) $_POST["index"];

// modifico l'item
$todolist_array[$change_item_index]= $todolist_array_change;


// trasformo l'array in json
$json_res = json_encode($todolist_array);

// aggiorno la lista 
file_put_contents("../data/todolist.json", $json_res);

// avviso il browser dell'invio di dati json
header("Content-Type: application/json");

// stampo i dati
echo $json_res;