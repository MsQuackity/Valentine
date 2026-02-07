
function createHearts() {
    const container = document.getElementById('heartsBackground');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        container.appendChild(heart);
    }
}

createHearts();

function answer(questionNum, choice, catMemeUrl, text) {

    const reaction = document.getElementById('reaction' + questionNum);
    const reactionImage = document.getElementById('reactionImage' + questionNum);
    const reactionText = document.getElementById('reactionText' + questionNum);

    reactionImage.innerHTML = `<img src="${catMemeUrl}" class="cat-meme" alt="Cat meme reaction">`;

    if (text && text !== 'undefined') {
        reactionText.innerHTML = text;
        reactionText.style.display = 'block';
    } else {
        reactionText.style.display = 'none';
    }
    
    reaction.classList.add('show');

    document.getElementById('nextBtn' + questionNum).classList.add('show');
    
}

function nextQuestion(nextNum) {
    const currentQuestion = document.querySelector('.question-container.active');
    currentQuestion.classList.remove('active');
    document.getElementById('q' + nextNum).classList.add('active');
}

function finalAnswer(answer) {
    const finalReaction = document.getElementById('finalReaction');
    const finalReactionImage = document.getElementById('finalReactionImage');
    const finalReactionText = document.getElementById('finalReactionText');
    const finalMessage = document.getElementById('finalMessage');

    document.querySelector('.final-question').style.display = 'none';
    
    if (answer === 'yes') {
        finalReactionImage.innerHTML = '<img src="https://media1.tenor.com/m/IBxdvql1Mk0AAAAC/cat-kiss.gif" class="cat-meme" alt="Happy cat meme">';
        finalReactionText.innerHTML = 'YAAAAY! 💖';
        finalMessage.innerHTML = 'You just made me the happiest person ever! Even though we\'re thousands of miles apart, you\'re always in my heart. Can\'t wait to see you soon! 💕✈️<br><br>Happy Valentine\'s Day, my love! 💝';

        createConfetti();
    } else {
        finalReactionImage.innerHTML = '<img src="https://media1.tenor.com/m/BX2KvxkrfN0AAAAC/mad-cat.gif" class="cat-meme" alt="Sad cat meme">';
        finalReactionText.innerHTML = 'I SEE HOW IT IS, U WANT OTHER WOMAN TO BE UR VALENTINE?';
        finalMessage.innerHTML = 'ARE YOU SURE?! NAH U HATE ME, U DONT WANT ME SMH <br><br><button class="try-again-btn" onclick="tryAgain()">ARE YOU SURE?!</button>';
    }
    
    finalReaction.classList.add('show');
}

function tryAgain() {

    document.getElementById('finalReaction').classList.remove('show');
    document.querySelector('.final-question').style.display = 'block';
}

function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#f67280', '#ffd4e5', '#ffb3d9'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}