<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "formulario_login";

    // Cria a conexão
    $conn = new mysqli($host, $user, $password, $dbname);

    // Verifica a conexão
    // if ($conn->connect_error) {
    //     die("Falha na conexão: " . $conn->connect_error);
    // } else {
    //     echo "Conexão bem-sucedida!";
    // }
?>
