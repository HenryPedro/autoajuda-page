const feedbacks = [
    {
        nome: "Maria Silva",
        depoimento: "Após meses lutando contra a depressão, encontrei aqui um espaço seguro para compartilhar minhas experiências e buscar ajuda. A equipe foi maravilhosa e me deu o suporte que eu precisava."
    },
    {
        nome: "João Pereira",
        depoimento: "O site me ajudou a entender melhor a minha ansiedade. As informações e os recursos disponíveis me deram clareza e motivação para procurar um terapeuta."
    },
    {
        nome: "Ana Costa",
        depoimento: "Os depoimentos de outras pessoas me inspiraram a agir. Aprendi que não estou sozinha e que é possível superar os desafios com o apoio certo."
    },
    {
        nome: "Carlos Almeida",
        depoimento: "Através deste site, consegui me conectar com uma comunidade de apoio que me fez sentir acolhido. As dicas práticas me ajudaram a melhorar meu dia a dia."
    },
    {
        nome: "Fernanda Rocha",
        depoimento: "As informações sobre saúde mental são claras e acessíveis. Encontrei recursos que realmente funcionam e me ajudaram a ver a vida de uma maneira diferente."
    }
];

function exibirFeedbacks() {
    const container = document.getElementById('feedback-container');
    feedbacks.forEach(feedback => {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        feedbackDiv.innerHTML = `<span class="author">${feedback.nome}</span><p>${feedback.depoimento}</p>`;
        container.appendChild(feedbackDiv);
    });
}

// Exibir feedbacks ao carregar a página
window.onload = exibirFeedbacks;