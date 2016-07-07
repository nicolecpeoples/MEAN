function personConstructor(name){
	  
      var name.say_name = function(){
            alert(this.name);
        };
       var say_something = function(arg1){
           console.log( this.name + arg1);
        };
        var walking= function(){
            console.log(this.name + " is walking");
            this.distance_travelled += 3;
        };
        var run = function(){
            console.log(this.name + " is running");
            this.distance_travelled += 10;
        };
        var crawl = function(){
            console.log(this.name + " is crawling");
            this.distance_travelled += 1;
        };
   }


personConstructor("Nicole").say_name;