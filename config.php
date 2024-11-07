<?php 

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'formulario_login';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    } else {
        echo "Conexão bem-sucedida!";
    }

?>