document.addEventListener('DOMContentLoaded', () => {
    console.log('Le contenu du DOM est entièrement chargé et analysé.');
    
    // Placez ici votre code JS à exécuter après le chargement du DOM.
    const changeColorBtn = document.getElementById('change-color-btn');
    changeColorBtn.addEventListener('click', () => {
        alert('Bouton cliqué!');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Ajouter un gestionnaire d'événement au bouton
    changeColorBtn.addEventListener('click', () => {
        // Générer une couleur aléatoire
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        // Changer la couleur d'arrière-plan de color-box
        colorBox.style.backgroundColor = randomColor;
        console.log(`Nouvelle couleur : ${randomColor}`);
    });
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Ajouter un écouteur d'événement au bouton
    changeColorBtn.addEventListener('click', () => {
        // Générer une couleur aléatoire et appliquer au color-box
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;

        // Afficher la nouvelle couleur dans la console (facultatif)
        console.log(`Nouvelle couleur générée : ${randomColor}`);
    });
});
