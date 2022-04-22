import Background from 'components/background';
import { useEffect, useRef } from 'react';

interface Props {
  color: string;
}

const Matrix: React.FC<Props> = ({ color, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      let matrix: any =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';

      matrix = matrix.split('');

      const font_size = 10;
      const columns = canvas.width / font_size;

      const drops: number[] = [];

      for (let x = 0; x < columns; x++) drops[x] = 1;

      const draw = () => {
        if (ctx) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = color;
          ctx.font = font_size + 'px arial';

          for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];

            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
              drops[i] = 0;

            drops[i]++;
          }
        }
      };

      setInterval(draw, 35);
    }
  }, []);

  return (
    <Background
      style={{ backgroundColor: '#141414' }}
      canvasRef={canvasRef}
      {...props}
    />
  );
};

export default Matrix;
