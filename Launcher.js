
class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //aumentar la rigidez
            stiffness: 0.04,
            //bajar la longitud
            length: 15
        }

// te falta llamar this.bodyA
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(bodyA){
        this.launcher.bodyA = bodyA
      }

    fly(){
        this.launcher.bodyA = null
    }

    display(){
        if(this.launcher.bodyA){
            /*aqui es crear el punto A  con el cuerpo
            que sería var pointA=this.bodyA.position*/
            var pointA=this.bodyA.position
            var bodyA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            //corregir los puntos serian pointA no bodyA
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}