<?php
// ==============================
// Dados do currículo
// ==============================

$nome = "Rhian Kenned de Oliveira Rodrigues";
$cargo = "Técnico em Informática";

$telefone = "(31) 99801-2183";
$email = "rhiano948@gmail.com";
$cidade = "Sete Lagoas - MG";

$sobre = "Profissional dedicado, responsável e apaixonado por tecnologia. Possuo conhecimentos em manutenção de computadores, suporte técnico, redes e servidores, sempre buscando evolução profissional.";

$objetivo = "Atuar na área de Técnico em Informática, aplicando conhecimentos em manutenção, montagem e suporte, contribuindo para o crescimento e resultados da empresa.";

$formacao = [
    "Técnico em Informática - Em formação",
    "Ensino Médio Completo"
];

$cursos = [
    "Informática (Word, Excel, PowerPoint, Internet)",
    "CNH Categoria B"
];

$habilidades = [
    "Hardware" => 95,
    "Suporte Técnico" => 92,
    "Windows" => 95,
    "Pacote Office" => 90,
    "Servidores" => 75
];

$experiencias = [

[
"empresa"=>"IVG Brasil LTDA",
"cargo"=>"Auxiliar de Montagem de Caminhões",
"periodo"=>"03/10/2022 até 09/03/2023"
],

[
"empresa"=>"Cedro Indústria Têxtil",
"cargo"=>"Aprendiz",
"periodo"=>"11/08/2021 até 29/07/2022"
]

];

?>

<!DOCTYPE html>

<html lang="pt-br">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title><?=$nome?></title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

</head>

<body>

<div id="particles"></div>

<header>

<nav>

<div class="logo">

<?=$nome?>

</div>

<ul>

<li><a href="#sobre">Sobre</a></li>

<li><a href="#experiencia">Experiência</a></li>

<li><a href="#formacao">Formação</a></li>

<li><a href="#habilidades">Habilidades</a></li>

<li><a href="#contato">Contato</a></li>

</ul>

</nav>

<section class="hero">

<h1><?=$nome?></h1>

<h2><?=$cargo?></h2>

<p><?=$objetivo?></p>

<div class="botoes">

<a href="assets/pdf/Curriculo.pdf" class="btn" download>

<i class="fa-solid fa-download"></i>

Baixar Currículo

</a>

<a class="btn amarelo"

href="https://wa.me/5531998012183"

target="_blank">

<i class="fa-brands fa-whatsapp"></i>

WhatsApp

</a>

</div>

</section>

</header>

<main>

<section id="sobre" class="card">

<h2>Sobre Mim</h2>

<p><?=$sobre?></p>

</section>

<section id="experiencia" class="card">

<h2>Experiência</h2>

<?php foreach($experiencias as $exp): ?>

<div class="timeline">

<h3><?=$exp['empresa']?></h3>

<h4><?=$exp['cargo']?></h4>

<span><?=$exp['periodo']?></span>

</div>

<?php endforeach; ?>

</section>

<section id="formacao" class="card">

<h2>Formação</h2>

<?php foreach($formacao as $item): ?>

<div class="item">

<?=$item?>

</div>

<?php endforeach; ?>

</section>

<section class="card">

<h2>Cursos</h2>

<?php foreach($cursos as $curso): ?>

<div class="item">

<?=$curso?>

</div>

<?php endforeach; ?>

</section>

<section id="habilidades" class="card">

<h2>Habilidades</h2>

<?php foreach($habilidades as $hab=>$valor): ?>

<div class="skill">

<div class="texto">

<span><?=$hab?></span>

<span><?=$valor?>%</span>

</div>

<div class="barra">

<div class="progresso"

style="width: <?=$valor?>%">

</div>

</div>

</div>

<?php endforeach; ?>

</section>

<section id="contato" class="card">

<h2>Contato</h2>

<p><i class="fa-solid fa-phone"></i> <?=$telefone?></p>

<p><i class="fa-solid fa-envelope"></i> <?=$email?></p>

<p><i class="fa-solid fa-location-dot"></i> <?=$cidade?></p>

</section>

</main>

<footer>

<p>

© <?=date("Y")?>

<?=$nome?>

</p>

</footer>

<script src="script.js"></script>

</body>

</html>