    var myNumObject = {

        sumNums: function(num1, num2){
            var sum = 0;
            for(var i = num1; i <= num2; i++) {
                sum += i;

            }
            console.log(sum);
            return sum;
        }, 

        findMin: function(arr){
        var min = arr[0];
        for(var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }

        }
            console.log(min);
            return min;
        },

        findAvg: function(arr) {
            var sum = 0;
            for(var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum/arr.length;
        }

    }

    
    var Person = {
        name: "Nicole",
        distance_travelled: 0,

        say_name: function(){
            alert(this.name);
        },
        say_something: function(arg1){
           console.log( this.name + arg1);
        },
        walking: function(){
            console.log(this.name + " is walking");
            this.distance_travelled += 3;
        },
        run: function(){
            console.log(this.name + " is running");
            this.distance_travelled += 10;
        },
        crawl: function(){
            console.log(this.name + " is crawling");
            this.distance_travelled += 1;
        }

    }

    // Person.say_name();
    Person.say_something(" says 'I am cool'");
    Person.walking();
    Person.run();
    console.log( Person.distance_travelled + " miles");
    

    
    myNumObject.sumNums(3,5);
    myNumObject.findMin([1, 5, 90, 25, -3, 0, -10]);

    // allValues([3,5, 'Dojo', 'rocks', 'Michael', 'Sensei', ["hello", "world", "JavaScript is Fun"] ]);
    // sumNums(3);
    // console.log(findMin( [1, 5, 90, 25, -3, 0, -10]));
    // console.log(findAvg([1, 5, 90, 25, -3, 0, -10]));