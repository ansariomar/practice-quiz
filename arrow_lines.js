
function setup() {
  createCanvas(200, 200);
}

function draw()
{
  
  background(255);
  
  
  for (var q=0; q<=100; q = q + 10) {
line(q+5,5,q+95,100);
line(q+5,195, q+95, 100);
    
    
  }
}
