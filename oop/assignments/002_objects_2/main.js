function VehicleConstructer(name, numWheels, numPassengers, speed){

	var distance_travelled = 0;

	var updateDistanceTravelled = function(speed){
		distance_travelled += speed;
	}

	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.makeNoise = function(){
		console.log("noise");
	}
	this.move = function(speed) {
		updateDistanceTravelled(this.speed);
		this.makeNoise();
	}

	this.checkMiles = function() {
		console.log(distance_travelled);
	}

}

var bike = new VehicleConstructer("bikey", 2, 1, 20);
bike.makeNoise();
bike.move();
// bike.move(50);
// bike.move(20);
bike.checkMiles();