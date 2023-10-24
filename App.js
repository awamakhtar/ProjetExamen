document.getElementById("registrationForm").addEventListener("submit", function(event) {
   event.preventDefault();

   var email = document.getElementById("email").value;
   var motDePasse = document.getElementById("motDePasse").value;
   if (email === "awa@gmail.com" && motDePasse === "passer123") {
       window.location.href = "connexion.html";
   } else {
       alert("Adresse email ou mot de passe incorrect. Veuillez réessayer.");
   }
});


