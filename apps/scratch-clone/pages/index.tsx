import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>

      <canvas id="myCanvas" width="300" height="300" style={{ border: "1px solid #000000" }}>
      </canvas>

      <img src='/apple.png' alt="apple" height={50} />

      <img src='/cat.png' alt="apple" height={50} />

      <button onClick={drawHouse}>DRAW HOUSE</button>
    </div>
  );
}

function drawHouse() {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 10;

  // Wall
  ctx.strokeRect(75, 140, 150, 110);

  // Door
  ctx.fillRect(130, 190, 40, 60);

  // Roof
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
}

export default Index;
