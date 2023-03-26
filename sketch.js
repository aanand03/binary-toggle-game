const randint = (m ,M) => m + Math.floor((M - m) * Math.random());
let s = randint(2, 8);

var puzzle = [...Array(s)].map(x=>[...Array(s)].map(y=>1));
var fQ = randint(2, s * s);

function toggle(y, x, puzzle){
  for(let i = 0; i < puzzle.length; i++){
    for(let j = 0; j < puzzle.length; j++){
      if(i == y || x == j)
        puzzle[i][j] = 1 - puzzle[i][j];
    }
  }
}



for(let _ = 0; _ < fQ; _++){
	let row = randint(0, s);
	let col = randint(0, s);
	toggle(row, col, puzzle);
}



function setup() {
  createCanvas(500, 500);
}

function drawTheBoard(size, puzzle){
	noFill();
	strokeWeight(7);
	stroke(140, 22, 0);
	rect(0, 0, height, height);
  let num = puzzle.length;
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      stroke(160);
      strokeWeight(1);
      fill(0, 0, 18);
      rect(j*size + size/15, i*size + size/15, size - 2*size/15, size - 2*size/15);
      if(puzzle[i][j]){
        noStroke();
        fill(255, 255, 0, 100);
        ellipse(size * (j + 0.5), size * (i + 0.5), size/1.5, size/1.5);
        fill(255, 255, 0, 150);
        ellipse(size * (j + 0.5), size * (i + 0.5), size/3, size/3)
				fill(255, 250, 0)
				ellipse(size * (j + 0.5), size * (i + 0.5), size/10, size/10)
      }
    }
  }
	
}



var LOL = 0;
function draw() {
	if(LOL-- > 0){
		background(randint(2, 255), randint(2, 255), randint(2, 255));
	}
	else{
		background(255, 255, 255);
		let size = height/puzzle.length;
		drawTheBoard(size, puzzle);
		let x = mouseX/size | 0, y = mouseY / size | 0;
		if(mouseX > -1 && mouseY >-1 && y < puzzle.length && x < puzzle.length && mouseIsPressed){
			toggle(y, x, puzzle);
			mouseIsPressed = false;
		}

		if(puzzle.every(x=>x.every(y=>y==1))){
			LOL = 70;
			s = randint(2, 10);
			puzzle = [...Array(s)].map(x=>[...Array(s)].map(y=>1));
			fQ = randint(2, s * s);
			for(let _ = 0; _ < fQ; _++){
				let row = randint(0, s);
				let col = randint(0, s);
				toggle(row, col, puzzle);
			}
		}
  }
}