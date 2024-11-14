<?php 
    session_start();

    if (empty($_POST) or empty($_POST['email']) or empty($_POST['password'])) {
        header('Location: ../../index.html');
    }

    include('../../config/config.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios
            WHERE email = '{$email}'
            AND senha = '".md5($password)."'";

    $result = $conn -> query($sql) or die($conn -> error);

    $row = $result -> fetch_object();

    $qtd = $result -> num_rows;

    if($qtd > 0){
        $_SESSION['email'] = $email;
        $_SESSION['name'] = $row -> nome;
        header('Location: ../html/dashboard.html');
    }
    else{
        header('Location: ../../index.html');
    }
?>