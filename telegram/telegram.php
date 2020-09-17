<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}
 
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}
// if (isset($_POST['content'])) {
//   if (!empty($_POST['content'])){
//   $theme = strip_tags($_POST['content']);
//   $themeFieldset = "Тема: ";
//   }
// }
$token = "1280374170:AAGOJvY5yAqAF2g-WueQ2t3fcZHFUc3W3CU";
$chat_id = "-467380246";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  // $themeFieldset => $theme
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  
  header ("Location: /");
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}
 
?>