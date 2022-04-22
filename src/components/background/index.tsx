import { CSSProperties, LegacyRef } from 'react';
import './background.css';

interface Props {
  canvasRef?: LegacyRef<HTMLCanvasElement>;
  style?: CSSProperties;
}

const Background: React.FC<Props> = ({ style, canvasRef, ...props }) => {
  return (
    <div className="Bg" style={style}>
      <canvas ref={canvasRef} />
      <div>{props.children}</div>
    </div>
  );
};

export default Background;
