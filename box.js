class Box extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,50,50);
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility= 255;
        
        World.add(world, this.body);
      }
       display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
           // fill(0,128,128);
            rect(0, 0, this.width, this.height);
            pop();
            console.log(this.body.speed)
          
          if(this.body.speed < 3){
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
 score(){

if(this.visibility<0 && this.visibility>-105){
  score++
} 

 
         }
        }
 
        