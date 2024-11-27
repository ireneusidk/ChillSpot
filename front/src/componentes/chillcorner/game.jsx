import React, { useEffect } from "react";
// import "../chillcorner/script"
import "./game.css"

const Game = () => {
  useEffect(() => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const grid = 20;
    let count = 0;
    let score = 0;

    // Configuración inicial de la serpiente
    const snake = {
      x: 160,
      y: 160,
      dx: grid,
      dy: 0,
      cells: [],
      maxCells: 4
    };

    // Configuración inicial del alimento
    let apple = {
      x: 320,
      y: 320
    };

    // Generar posición aleatoria para el alimento
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Manejar entrada de teclado
    document.addEventListener('keydown', function(e) {
      if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
      
      if (e.key === 'ArrowLeft' && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      } else if (e.key === 'ArrowUp' && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      } else if (e.key === 'ArrowRight' && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      } else if (e.key === 'ArrowDown' && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });

    // Bucle principal del juego
    function loop() {
      requestAnimationFrame(loop);

      if (++count < 4) { // Controlar la velocidad del juego
        return;
      }
      count = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lógica de movimiento de la serpiente y colisiones
      snake.x += snake.dx;
      snake.y += snake.dy;

      if (snake.x < 0) snake.x = canvas.width - grid;
      else if (snake.x >= canvas.width) snake.x = 0;
      if (snake.y < 0) snake.y = canvas.height - grid;
      else if (snake.y >= canvas.height) snake.y = 0;

      snake.cells.unshift({x: snake.x, y: snake.y});

      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }

      ctx.fillStyle = 'purple';
      ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);

      ctx.fillStyle = 'green';
      snake.cells.forEach(function(cell, index) {
        ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          score++;
          document.getElementById('score').innerText = score;

          apple.x = getRandomInt(0, 20) * grid;
          apple.y = getRandomInt(0, 20) * grid;
        }

        for (let i = index + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            score = 0;
            document.getElementById('score').innerText = score;
            apple.x = getRandomInt(0, 20) * grid;
            apple.y = getRandomInt(0, 20) * grid;
          }
        }
      });
    }

    requestAnimationFrame(loop);
  }, []);

  return (
    <div >
      <canvas className="cuadro" id="gameCanvas" width="400" height="400"></canvas>
      <p>Puntuación: <span id="score">0</span></p>
      <div className="instructions">
        <h3>Instrucciones para jugar:</h3>
        <p>
          Usa las teclas de flecha en tu teclado para mover la serpiente: 
          <br />
          - Flecha arriba: Mover hacia arriba
          <br />
          - Flecha abajo: Mover hacia abajo
          <br />
          - Flecha izquierda: Mover hacia la izquierda
          <br />
          - Flecha derecha: Mover hacia la derecha
        </p>
      </div>
    </div>
    
  );
}

export default Game;
