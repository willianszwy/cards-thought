class InnerThought {
    constructor() {
        this.init();
    }

    init() {
        this.elements = {
            card: document.getElementById('oracleCard'),
            consultBtn: document.getElementById('consultBtn'),
            shuffleBtn: document.getElementById('shuffleBtn'),
            messageContent: document.getElementById('messageContent'),
            oracleMessage: document.getElementById('oracleMessage'),
            oracleAuthor: document.getElementById('oracleAuthor'),
            particlesContainer: document.getElementById('particles')
        };

        this.bindEvents();
        this.createParticles();
        this.isConsultDone = false;
    }

    bindEvents() {
        this.elements.consultBtn.addEventListener('click', () => this.showMessage());
        this.elements.shuffleBtn.addEventListener('click', () => this.shuffleMessage());
        this.elements.card.addEventListener('mouseenter', () => this.handleCardHover());
    }

    handleCardHover() {
        if (!this.isConsultDone) {
            this.elements.card.classList.add('flip');
        }
    }

    showMessage() {
        const randomMessage = this.getRandomMessage();
        this.displayMessage(randomMessage);
        this.animateCardFlip();
        
        setTimeout(() => {
            this.elements.consultBtn.style.display = 'none';
            this.elements.messageContent.classList.remove('hidden');
            this.elements.shuffleBtn.classList.remove('hidden');
            this.isConsultDone = true;
            
            this.animateMessageIn();
        }, 600);
    }

    shuffleMessage() {
        this.elements.messageContent.classList.add('fade-out');
        this.animateCardFlip();
        
        setTimeout(() => {
            const randomMessage = this.getRandomMessage();
            this.displayMessage(randomMessage);
            this.elements.messageContent.classList.remove('fade-out');
            this.animateMessageIn();
        }, 300);
    }

    getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * oracleMessages.length);
        return oracleMessages[randomIndex];
    }

    displayMessage(message) {
        this.elements.oracleMessage.textContent = `"${message.quote}"`;
        this.elements.oracleAuthor.textContent = message.author;
    }

    animateCardFlip() {
        this.elements.card.classList.add('flip-active');
        
        setTimeout(() => {
            this.elements.card.classList.remove('flip-active');
        }, 600);
    }

    animateMessageIn() {
        this.elements.messageContent.classList.add('message-appear');
        
        setTimeout(() => {
            this.elements.messageContent.classList.remove('message-appear');
        }, 800);
    }

    createParticles() {
        const particleCount = 120;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const animationDuration = Math.random() * 20 + 10;
            const animationDelay = Math.random() * 20;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                animation-duration: ${animationDuration}s;
                animation-delay: ${animationDelay}s;
            `;
            
            this.elements.particlesContainer.appendChild(particle);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new InnerThought();
});