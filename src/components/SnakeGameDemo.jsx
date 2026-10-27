import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Gamepad2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const GRID_SIZE = 16;
const CELL_SIZE = 18; // 16 * 18 = 288px

export default function SnakeGameDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(12);

  const snakeRef = useRef([
    { x: 8, y: 8 },
    { x: 8, y: 9 },
    { x: 8, y: 10 }
  ]);
  const directionRef = useRef({ x: 0, y: -1 }); // moving up
  const nextDirectionRef = useRef({ x: 0, y: -1 });
  const foodRef = useRef({ x: 5, y: 5 });
  const canvasRef = useRef(null);

  // Spawn food not on snake
  const spawnFood = (currentSnake) => {
    while (true) {
      const rx = Math.floor(Math.random() * GRID_SIZE);
      const ry = Math.floor(Math.random() * GRID_SIZE);
      const onSnake = currentSnake.some(seg => seg.x === rx && seg.y === ry);
      if (!onSnake) {
        return { x: rx, y: ry };
      }
    }
  };

  const startGame = () => {
    snakeRef.current = [
      { x: 8, y: 8 },
      { x: 8, y: 9 },
      { x: 8, y: 10 }
    ];
    directionRef.current = { x: 0, y: -1 };
    nextDirectionRef.current = { x: 0, y: -1 };
    foodRef.current = spawnFood(snakeRef.current);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  const changeDirection = (newDir) => {
    const cur = directionRef.current;
    // Anti-180 degree reverse check (same as Aryan's Python logic)
    if (newDir.x + cur.x === 0 && newDir.y + cur.y === 0) return;
    nextDirectionRef.current = newDir;
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying || gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          changeDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          changeDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          changeDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          changeDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, gameOver]);

  // Main game tick loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      const currentSnake = [...snakeRef.current];
      const dir = nextDirectionRef.current;
      directionRef.current = dir;

      const head = {
        x: currentSnake[0].x + dir.x,
        y: currentSnake[0].y + dir.y
      };

      // Wall collision check
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      // Self collision check
      if (currentSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      currentSnake.unshift(head);

      // Check food
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        const newScore = score + 1;
        setScore(newScore);
        if (newScore > highScore) {
          setHighScore(newScore);
          try {
            confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } });
          } catch (e) {}
        }
        foodRef.current = spawnFood(currentSnake);
      } else {
        currentSnake.pop();
      }

      snakeRef.current = currentSnake;
      draw();
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, score, highScore]);

  // Canvas drawing routine
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background
    ctx.fillStyle = '#0b0d19';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle grid dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        ctx.fillRect(x * CELL_SIZE + CELL_SIZE / 2 - 1, y * CELL_SIZE + CELL_SIZE / 2 - 1, 2, 2);
      }
    }

    // Draw food with pulse glow
    const fx = foodRef.current.x * CELL_SIZE;
    const fy = foodRef.current.y * CELL_SIZE;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#f43f5e';
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(fx + CELL_SIZE / 2, fy + CELL_SIZE / 2, CELL_SIZE / 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw snake segments with neon emerald / cyan gradient
    const snake = snakeRef.current;
    snake.forEach((seg, idx) => {
      const sx = seg.x * CELL_SIZE;
      const sy = seg.y * CELL_SIZE;

      if (idx === 0) {
        // Head
        ctx.fillStyle = '#34d399';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#34d399';
        ctx.beginPath();
        ctx.roundRect(sx + 1, sy + 1, CELL_SIZE - 2, CELL_SIZE - 2, 4);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Body with slight fade towards tail
        ctx.fillStyle = idx % 2 === 0 ? '#10b981' : '#059669';
        ctx.beginPath();
        ctx.roundRect(sx + 2, sy + 2, CELL_SIZE - 4, CELL_SIZE - 4, 3);
        ctx.fill();
      }
    });
  };

  // Initial draw
  useEffect(() => {
    draw();
  }, []);

  return (
    <div className="mt-4 p-4 rounded-xl bg-void-950/90 border border-emerald-500/30 font-mono text-xs text-slate-300 space-y-3">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <Gamepad2 className="w-4 h-4 text-emerald-400" />
          <span>Interactive Pygame Simulation</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-slate-400">
            Score: <strong className="text-white">{score}</strong>
          </span>
          <span className="flex items-center gap-1 text-amber-400">
            <Trophy className="w-3 h-3" />
            <span>{highScore}</span>
          </span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative flex justify-center items-center bg-void-900 rounded-lg p-2 border border-white/10 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="rounded-md border border-white/5 block"
        />

        {(!isPlaying || gameOver) && (
          <div className="absolute inset-0 bg-void-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center">
            {gameOver ? (
              <>
                <p className="text-red-400 font-bold text-sm mb-1">GAME OVER</p>
                <p className="text-xs text-slate-300 mb-3">Score: {score}</p>
                <button
                  onClick={startGame}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-void-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Play Again</span>
                </button>
              </>
            ) : (
              <>
                <p className="text-xs text-slate-300 mb-2 font-mono">
                  Play Aryan's Classic Arcade Snake
                </p>
                <button
                  onClick={startGame}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-void-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Game</span>
                </button>
                <span className="text-[10px] text-slate-500 mt-2">Use WASD or Arrow Keys</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* On-screen Directional Controls for Mobile / Touch */}
      <div className="flex flex-col items-center gap-1 pt-1">
        <button
          onClick={() => changeDirection({ x: 0, y: -1 })}
          disabled={!isPlaying}
          className="p-1.5 rounded bg-void-850 hover:bg-void-800 disabled:opacity-40 border border-white/10 text-slate-300"
          aria-label="Up"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeDirection({ x: -1, y: 0 })}
            disabled={!isPlaying}
            className="p-1.5 rounded bg-void-850 hover:bg-void-800 disabled:opacity-40 border border-white/10 text-slate-300"
            aria-label="Left"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => changeDirection({ x: 0, y: 1 })}
            disabled={!isPlaying}
            className="p-1.5 rounded bg-void-850 hover:bg-void-800 disabled:opacity-40 border border-white/10 text-slate-300"
            aria-label="Down"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => changeDirection({ x: 1, y: 0 })}
            disabled={!isPlaying}
            className="p-1.5 rounded bg-void-850 hover:bg-void-800 disabled:opacity-40 border border-white/10 text-slate-300"
            aria-label="Right"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
