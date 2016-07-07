function allValues(arr){
                arr.push(100);
        		for(var i = 0; i < arr.length; i++){

        			console.log(arr[i]);

        		}
        	}

            function sumNums(num){
                var sum = 0;
                for(var i = 0; i <= num; i++) {
                    sum += i;

                }
                console.log(sum);
                return sum;
            }

            function findMin(arr){
                var min = arr[0];
                for(var i = 0; i < arr.length; i++) {
                    if (arr[i] < min) {
                        min = arr[i];
                    }

                }
                return min;
            }

            function findAvg(arr) {
                var sum = 0;
                for(var i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                return sum/arr.length;
            }

            allValues([3,5, 'Dojo', 'rocks', 'Michael', 'Sensei', ["hello", "world", "JavaScript is Fun"] ]);
            sumNums(3);
            console.log(findMin( [1, 5, 90, 25, -3, 0, -10]));
            console.log(findAvg([1, 5, 90, 25, -3, 0, -10]));