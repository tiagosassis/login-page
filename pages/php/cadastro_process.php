<?php
    if (isset($_POST['submit'])) {

        include_once('./config/config.php');

        $name = '';
        $email = $_POST['email'];
        $password = $_POST['password'];

        $result = mysqli_query($conn, "INSERT INTO usuario(nome, email, senha) VALUES ('$name', '$email', '$password')");

        print_r('usuário inserido com sucesso no bd');
    } else {
        print_r('');
    }
?>