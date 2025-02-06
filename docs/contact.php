<!DOCTYPE html>
<html>
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="style/contact.css">
</head>
<body>
    <header>
        <h1>Contactez-moi</h1>
          <nav>
                <ul>
                    <li><a href="projets.html">Projets</a></li> <!-- Redirection vers une page Projets -->
                    <li><a href="index.html">Accueil</a></li> <!-- Redirection vers une page Projets -->
                    <li><a href="stage.html">Stage</a></li> <!-- Redirection vers une page Stage -->
                    <li><a href="veille-techno.html">Veille technologique</a></li> <!-- Redirection vers une page Veille Techno -->
                </ul>
            </nav>
    </header>

    <section id="contact" class="contact-section">
    <div class="container"> 

    <form action="traitement.php" method="POST">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" value="<?php echo isset($nom) ? $nom : ''; ?>">
    <span style="color:red;"><?php echo isset($erreurs['nom']) ? $erreurs['nom'] : ''; ?></span>

    <label for="prenom">Prenom :</label>
    <input type="text" id="prenom" name="prenom" value="<?php echo isset($prenom) ? $prenom : ''; ?>">
    <span style="color:red;"><?php echo isset($erreurs['prenom']) ? $erreurs['prenom'] : ''; ?></span>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="<?php echo isset($email) ? $email : ''; ?>">
    <span style="color:red;"><?php echo isset($erreurs['email']) ? $erreurs['email'] : ''; ?></span>

    <label for="sexe">Sexe: </label>
    <input type="radio" id="homme" name="sexe" value="Homme"<?php echo isset($sexe) && $sexe == 'Homme'? 'checked' : ''; ?>>
    <label for="homme">Homme :</label>

    <input type="radio" id="femme" name="sexe" value="Femme" <?php echo isset($sexe) && $sexe == 'Femme'?'checked' : ''; ?>>
    <label for="femme">Femme :</label><br><br> 
    </section>

    <section class="bouton-envoi">
    <input type="submit" value="Envoyer">
    </section>
   
    </form>  
    </div>
   
</body>
<section id="contact" class="contact-section">
        <div class="container">
          
            <p>Vous pouvez me contacter via <a href="mailto:ewanriva6@gmail.com">ewanriva6@gmail.com</a>.</p>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
        
        <p>
            Retrouvez-moi sur <a href="https://github.com/Notix94" target="_blank">
                <img src="Images/gituhb1.png" width="100" height="100" alt="GitHub">  
            </a> pour découvrir mes projets.
        </p>
    </div>
    </footer>
</html>





 <!-- $age = 19;
    $prenom = "Ewan";
    $phrase = $age . $prenom;

        echo $phrase;
        echo "Bonjour, je m'appelle PHP !";
    $score = 85;

    if ($score >= 90)
    {
        echo "Excellent";
    }   elseif ($score>= 75)
        {
            echo "bien";
        }
            else
            {
            echo"trop bas";
            }
    for($i = 0; $i<5;$i++){
        echo "$i <br>";
    }
    function saluer($nom) {
        return "Bonjour, $nom";
    }

    echo saluer("ewan");

    ?> -->