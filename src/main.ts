// Année auto
// document.getElementById('year').textContent = new Date().getFullYear();

// // Form -> mailto (simple, sans backend)
// const form = document.getElementById('leadForm');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = encodeURIComponent(document.getElementById('name').value.trim());
//     const company = encodeURIComponent(document.getElementById('company').value.trim());
//     const email = encodeURIComponent(document.getElementById('email').value.trim());
//     const phone = encodeURIComponent(document.getElementById('phone').value.trim());
//     const msg = encodeURIComponent(document.getElementById('msg').value.trim());

//     const subject = encodeURIComponent(`Demande - Automatisation (${decodeURIComponent(company) || "Entreprise"})`);
//     const body =
//     `Bonjour Maxence,%0D%0A%0D%0A` +
//     `Je vous contacte via le site Noventi.%0D%0A%0D%0A` +
//     `Nom: ${decodeURIComponent(name)}%0D%0A` +
//     `Entreprise: ${decodeURIComponent(company)}%0D%0A` +
//     `Email: ${decodeURIComponent(email)}%0D%0A` +
//     `Téléphone: ${decodeURIComponent(phone)}%0D%0A%0D%0A` +
//     `Contexte:%0D%0A${decodeURIComponent(msg)}%0D%0A%0D%0A` +
//     `Merci,%0D%0A${decodeURIComponent(name)}`;

//     // ⚠️ Remplace l'email ci-dessous
//     window.location.href = `mailto:contact@noventi.fr?subject=${subject}&body=${body}`;
// });

const slogans = [
    "Automatisations simples<br/>pour des PME qui veulent souffler.",
    "Automatisez l’opérationnel.<br/> Concentrez-vous sur l’essentiel.",
    "Simplifier ce qui complique votre quotidien.",
    "Libérez votre entreprise des tâches inutiles.",
    "Nous remplaçons le manuel par <br/> des systèmes qui tournent seuls."
]

const sloganTitle = document.getElementById('slogan')
const random = Math.floor(Math.random() * 4);
if (sloganTitle) { 
    sloganTitle.innerHTML = slogans[random]
}