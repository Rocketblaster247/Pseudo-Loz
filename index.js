var ctx = document.getElementById("cnv").getContext("2d");
var x, y;
for (var i = 0; i < map.length; i ++) {
  y = 8 * i;
  for (var e = 0; e < map[i].length; e ++) {
    x = 8 * i;
    for (var i2 = 0; i2 < map[i][e].length; i2 ++) {
      for (var e2 = 0; e2 < map[i][e][i2].length; e2 ++) {
        if (map[i][e][i2][e2] == 2) {
          ctx.fillRect((x*2) + i, (y*2) + e, 2, 2);
        }
      }
    }
  }
}
