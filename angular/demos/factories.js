myAppModule.factory('studentFactory', function(){
 var factory = {};
 factory.someKeyName = 'Some Value'
 factory.someMethodName = function(){ /* Code Here */ }
 return factory;
})

// Create a module
var myAppModule = angular.module('myApp', []);
// Create a factory (attached to this module)
myAppModule.factory('studentFactory', function (){
    // The factory is nothing more than a function that returns an object
    var students = [
        {name: 'Mike', age: 34},
        {name: 'John', age: 24},
        {name: 'Trey', age: 24}];
    var factory = {};
    // Add a getStudents key to the factory object with a value of a function.
    factory.getStudents = function (callback){
        // Pass the students to a callback to be used by whoever calls the method
        callback(students);
    }
    // Most important step: return the object so it can be used by the rest of our angular code
    return factory;
});


// Create a controller (attached to this module), and inject the studentFactory in it.
myAppModule.controller('studentsController', ['$scope', 'studentFactory', function ($scope, studentFactory){
    //  initialize an empty array so $scope.students maintains a consistent data type
    $scope.students = [];
    // run the getStudents method and set $scope data in the callback
    studentFactory.getStudents(function (data){
        $scope.students = data;
    })
}])

/*The Factory:

To create a factory, build a function that returns an object literal.

Inject the Factory:

Add the factory to the list of injections to the controller function, and give it a name in the parameters!

That’s it!

You can inject many services, and the same service can be injected into many controllers.

Factories are what’s called a singleton, a singleton is an object that can be used in many places, but any time that singleton is called the same object will be referenced in all cases. This means that you can use a factory in as many controllers as you want and they will all utilize the same object.

Notice how we use the callback in this case. The callback is a great way to pass data from the factory to the controller (this will be very important when we connect the server-side.

This separation of data and data logic (factory) from the (controller) is important. Modularization will keep our apps organized, and the singleton nature of the services will minimize the load times!

Services often are injected into one another, but don’t inject controllers into one another ($scope will drive you crazy if you do!)!

We now have the MVC structure for the client-side!