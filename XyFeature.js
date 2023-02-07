var canvas = document.getElementById("grafiek1");
var ctx = canvas.getContext("2d");

tekenBal(ctx);
$("#xRange").on("change mousemove", function () {
  tekenBal(ctx);
});
$("#yRange").on("change mousemove", function () {
  tekenBal(ctx);
});

function tekenBal(ctx) {
  var straal = 5;
  var afmeting = 200;
  var knooppunt = 40;
  $("#grafiek1").attr("width", afmeting);
  $("#grafiek1").attr("height", afmeting);
  ctx.clearRect(0, 0, afmeting, afmeting);
  ctx.beginPath();
  ctx.moveTo(0, afmeting - knooppunt); // links onder
  ctx.lineTo(afmeting - knooppunt, 0); //rechts boven
  ctx.lineTo(afmeting, 0);
  ctx.lineTo(afmeting, knooppunt);
  ctx.lineTo(knooppunt, afmeting);
  ctx.lineTo(0, afmeting);
  ctx.lineTo(0, afmeting - knooppunt); // links onder
  ctx.closePath();
  ctx.fillStyle = "grey";
  ctx.fill();

  var x = straal + ((afmeting - 2 * straal) / 100) * $("#xRange").val();
  var y = straal + ((afmeting - 2 * straal) / 100) * (100 - $("#yRange").val());

  var grens1 = afmeting - (knooppunt - straal) - x;
  var grens2 = afmeting + (knooppunt - straal) - x;
  ctx.beginPath();
  ctx.arc(x, y, straal, 0, 2 * Math.PI);
  if (y > grens1 && y < grens2) {
    ctx.fillStyle = "#6ff36b";
  } else {
    ctx.fillStyle = "rgb(190, 101, 101)";
  }
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.save();
  ctx.translate(afmeting / 2, afmeting / 2);
  ctx.rotate(Math.pi / 5);
  ctx.fillText("FLOW", 0, 0);
  ctx.restore();
}
