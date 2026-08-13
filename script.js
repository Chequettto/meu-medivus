// Inicializa ícones Lucide
lucide.createIcons();

// Modo Noturno Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
});

// Simulador de IA Falso para o Fator "Uau"
const btnGerar = document.getElementById('btn-gerar');
const textarea = document.getElementById('ia-input');
const resultBox = document.getElementById('ia-result');
const resultText = document.getElementById('result-text');
const btnCopy = document.getElementById('btn-copy');

const fakeSoap = `S: Paciente refere dor torácica atípica há 2h.
O: PA 150x90 mmHg. FC 88 bpm. SatO2 98% em ar ambiente.
A: Dor torácica a esclarecer (Baixa probabilidade para SCA). Pico hipertensivo.
P: 
1. ECG de repouso imediato.
2. Marcadores de necrose miocárdica (Troponina).
3. Captopril 25mg VO agora.
4. Reavaliação em 1h.`;

btnGerar.addEventListener('click', () => {
    if(textarea.value.trim() === '') {
        alert('Digite um quadro clínico primeiro!');
        return;
    }
    
    // Efeito de loading
    btnGerar.innerHTML = '<i data-lucide="loader" class="spin"></i> Gerando Prontuário...';
    lucide.createIcons();
    
    setTimeout(() => {
        btnGerar.innerHTML = 'Gerar Prontuário Inteligente <i data-lucide="zap"></i>';
        lucide.createIcons();
        resultBox.classList.remove('hidden');
        
        // Efeito de digitação da IA
        resultText.innerHTML = '';
        let i = 0;
        const typing = setInterval(() => {
            if(i < fakeSoap.length) {
                resultText.innerHTML += fakeSoap.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 15);
        
    }, 1200);
});

// Botão de Copiar
btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(resultText.innerText).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = '<i data-lucide="check"></i> Copiado com sucesso!';
        lucide.createIcons();
        setTimeout(() => {
            btnCopy.innerHTML = originalText;
            lucide.createIcons();
        }, 3000);
    });
});
