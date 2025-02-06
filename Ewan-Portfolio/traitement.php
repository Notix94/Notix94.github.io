<?php
// Connexion à la base de données MySQL
$connexion = new mysqli("localhost","root", "","portfolio");

if($connexion->connect_error){
   die("echec de la connexion :  "  .$connexion->connect_error);
}
$erreurs =[];
$nom = $prenom = $email = $sexe = ""; // Initialisation

//verification si le formulaire a ete envoyer
if($_SERVER["REQUEST_METHOD"] == "POST"){
   
    // Récupérer les données du formulaire
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $email = htmlspecialchars(trim($_POST ['email']));
    $sexe = htmlspecialchars(trim($_POST['sexe']));


//verifice les champs rempli ou non
if(empty($nom)){
    $erreurs['nom'] = "nom requis";
}
elseif(!preg_match("/^[a-zA-Z'-]+$/",$nom)) {
    $erreurs['nom'] = "Le nom ne doit contenir que des lettres, réessayez.";
}

if(empty($prenom)){
   $erreurs['prenom'] = "prenom requis"; 
}
elseif(!preg_match("/^[a-zA-Z'-]+$/",$prenom)) {
    $erreurs['prenom'] = "Le prenom ne doit contenir que des lettres, réessayez.";
}

if(empty($email)){
   $erreurs['email'] = "email requis";
}
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $erreurs['email'] = "email incorrecte";
    //verification domaine
}
elseif(!preg_match('/\.(fr|com|org|net|tech|store|app|design|online|blog|site|edu|gov|mil|eu|asia|xyz|me|co|de|uk|ca|au|jp|it|es|ch|br|ru|in)$/',$email)){
        $erreurs['email'] = "domaine incorrecte";
}

if(empty($sexe)){
    $erreurs['sexe'] = "le sexe est requis";
}


// si pas d'erreurs insertion des données dans la base
if(empty($erreurs)){
    $declaration = $connexion->prepare("INSERT INTO utilisateur(nom,prenom,email,sexe) VALUES(?,?,?,?)");
    $declaration->bind_param("ssss",$nom,$prenom,$email,$sexe);

    if($declaration->execute()){
         // Redirection vers une page de confirmation
         header('Location: remerciement.php');
         exit(); // Termine le script pour s'assurer que rien d'autre n'est exécuté
    }else{
        echo"erreur lors de l'enregistrement: " . $connexion->error;
    }

   $declaration->close();
}
else {
    foreach($erreurs as $champ => $message){
        echo"<p style='color:red;'>Erreur dans le champ '$champ' : $message</p>";
    }
     }
}
// Fermer la connexion à la base de données
$connexion->close();

?>