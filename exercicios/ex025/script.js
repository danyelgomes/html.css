  function gerarNumeroAleatorio() {
      return Math.floor(Math.random() * 100) + 1;
  }

  function verificarPalindromo(str) {
      const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanStr === cleanStr.split('').reverse().join('');
  }

  function criarGradiente() {
      const canvas = document.createElement('canvas');
      canvas.width = 1000;
      canvas.height = 1000;
      document.body.appendChild(canvas);
    
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 300, 300);
    
      gradient.addColorStop(0, '#ff6b6b');
      gradient.addColorStop(0.5, '#4ecdc4');
      gradient.addColorStop(1, '#45b7d1');
    
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 300);
  }

  function animarTexto(texto) {
      let elemento = document.createElement('div');
      elemento.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2em;
          font-family: Arial, sans-serif;
          transition: all 0.5s ease;
      `;
      document.body.appendChild(elemento);

      let i = 0;
      const intervalo = setInterval(() => {
          elemento.textContent = texto.slice(0, i);
          elemento.style.color = `hsl(${Math.random() * 360}, 1000%, 50%)`;
          i++;
          if (i > texto.length) {
              i = 0;
          }
      }, 200);
  }
  animarTexto("JavaScript é incrível!");
  criarGradiente();
