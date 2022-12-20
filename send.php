<?PHP
	$name = $_POST['name'];
	$email = $_POST['email'];
	$title = $_POST['title'];
	$comment = $_POST['comment'];

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

	$name = htmlspecialchars($name);
	$email = htmlspecialchars($email);
	$title = htmlspecialchars($title);
	$comment = htmlspecialchars($comment);
	
	$name = urldecode($name);
	$email = urldecode($email);
	$title = urldecode($title);
	$comment = urldecode($comment);

	$name = trim($name);
	$email = trim($email);
	$title = trim($title);
	$comment = trim($comment);

	if (mail("nekitgraviton2002@gmail.com", 
			 "Обращение с сайта",
			 "Имя: ".$name."\n".
			 "Email: ".$email."\n".
			 "Тема: ".$title."\n".
			 "Комментарий: ".$comment."\n")
			)
			{
			    echo "<script>alert('Письмо успешно отправлено!')</script>";
			    $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
header("Location: $redirect");
exit();
		
	/*	echo ('Письмо успешно отправлено!');*/
	}
	else{
		echo ('Есть ошибки! Проверьте данные...');
	}

 /*if(!empty($_POST['name']) and !empty($_POST['email']) and !empty($_POST['title']) and !empty($_POST['comment'])){
      $name = trim(strip_tags($_POST['name']));
      $email = trim(strip_tags($_POST['email']));
      $title = trim(strip_tags($_POST['title']));
      $comment = trim(strip_tags($_POST['comment']));
 
      mail('nekitgraviton2002@gmail.com', 'Письмо с адрес_вашего_сайта', 
      'Вам написал: '.$name.'<br />Его номер: '.$email.'<br />Его почта: '.$title.'<br />
      Его сообщение: '.$comment,"Content-type:text/html;charset=UTF-8");
 
      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в 
      ближайшее время<Br> $back";
 
      exit;
   } 
   else {
      echo "Для отправки сообщения заполните все поля!";
      exit;
   }*/
?>