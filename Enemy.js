class Enemy extends BaseClass {
  constructor(x, y){
    super(x, y, 50, 60);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

  display(){
    if(this.body.speed < 3.5){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
}