const solved_cube = 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB';

const color = {
    U: 'white',
    D: 'yellow',
    F: 'red',
    B: 'orange',
    R: 'blue',
    L: 'green'
};

function vis(cube) {
    var sc = 15; // scale factor of  pixels
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    function draw(idx, r, c) {
        for (let i = r; i <= r + 2; i++)
          for (let j = c; j <= c + 2; j++) {
              ctx.fillStyle = color[cube[idx++]];
              ctx.fillRect(sc * j, sc * i, sc, sc);
              ctx.lineWidth = 2
              ctx.strokeRect(sc * j, sc * i, sc, sc)
          }
      }
      
      // draw the faces
      draw( 0, 0, 3) // U
      draw( 9, 3, 6) // R
      draw(18, 3, 3) // F
      draw(27, 6, 3) // D
      draw(36, 3, 0) // L
      draw(45, 3, 9) // B

      return;
}

vis(solved_cube);