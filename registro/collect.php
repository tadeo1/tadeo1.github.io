<?php
echo "¡Bienvenido! Tu usuario es " . $_POST["username"] . ". Enviaremos una confirmacion al correo " . $_POST["mail"];
if ($_POST["celular"] != "") echo " y por SMS al teléfono " . $_POST["celular"];
echo ", y nuestro programa te almacenará en la base de datos.";
echo "<br>¡Gracias por adherirte con nosotros!";
echo "<br><a style='cursor: pointer' onclick='desarrollo()' title='Inicia con tu nueva cuenta'>Iniciar sesion</a> <a href='..' title='Volver a la página principal'>Ir a inicio</a>";
?>
<html>
<head>

    <meta charset="utf-8">
    <title>Registro de usuario</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="../scripts.js"></script>
    <link rel="icon" href="../images/icono.ico" type="image/x-icon">

</head>
</html>

