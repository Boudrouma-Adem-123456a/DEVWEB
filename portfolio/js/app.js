document.addEventListener('DOMContentLoaded', () => {
    const barreDesTaches = document.querySelector(".barre_des_taches");
    const navLinks = document.querySelector(".nav_links");

    barreDesTaches.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });
});

function envoyerAvis() {
    // Récupérer les valeurs du formulaire
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var commentaire = document.getElementById('commentaire').value;

    // Construire le corps de l'e-mail
    var corpsEmail = "Nom: " + nom + "\n";
    corpsEmail += "Email: " + email + "\n";
    corpsEmail += "Commentaire: " + commentaire;

    // Envoi d'e-mail (Côté serveur requis)

    // Remplacez 'votre-script-de-serveur' par le chemin de votre script serveur d'envoi d'e-mail
    var url = 'votre-script-de-serveur?corps=' + encodeURIComponent(corpsEmail);

    // Utilisez fetch pour envoyer le formulaire au serveur
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nom: nom,
            email: email,
            commentaire: commentaire
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Gérez la réponse du serveur si nécessaire
        alert('Votre avis a été envoyé avec succès!');
    })
    .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'avis:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('avisForm');
    const validationMessage = document.getElementById('validation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validation simple pour l'e-mail (format)
        const emailInput = document.getElementById('email');
        if (!emailInput.checkValidity()) {
            validationMessage.textContent = 'Veuillez entrer une adresse e-mail valide.';
            validationMessage.className = 'error';
            validationMessage.style.display = 'block';
            return;
        }

        // Votre code d'envoi de formulaire ici...

        // Affichage du message de validation
        validationMessage.textContent = 'Votre commentaire a bien été envoyé !';
        validationMessage.className = 'success';
        validationMessage.style.display = 'block';

        // Réinitialisation du formulaire (facultatif)
        form.reset();
    });
});

console.log('Script chargé avec succès !');

