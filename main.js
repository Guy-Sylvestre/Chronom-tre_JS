function getInputValue() {
    // récupérer la valeur saisir par l'utilisateur
    let choice = document.getElementById('choice').value;
    if (isNaN(choice)) {
        alert('Enter un nombre entier avant que je te bloque');
    } else {
        let startingMinutes = choice;





        let time = startingMinutes * 60;

        const countDownEl = document.getElementById('countdown');

        // afficher la fonction aavec setInterval : la fonction et le delai
        setInterval(updateCountDown, 1000);

        // fonction pour la mise a jour du champ de saisir
        function updateCountDown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            // concatenation , condition ternaire


            seconds = seconds < 18 ? '0' + seconds : seconds;


            countDownEl.innerHTML = `${minutes} : ${seconds}`;
            if (time > 0) {
                time--;
            } else {
                countDownEl.innerHTML = 'le temps est fini !'
            }

        }
    }
}