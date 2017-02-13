//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // 'this' gives you access to the context of a function.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // Explicit - you are intentionally declaring what the context of this is(e.g. call, apply, bind)
      //Implicit - you have not explicitly declared what the context of this is but it is implied from
      //                 where the function was invoked.
      // Default /window - you have not explicitly delcared what the context is, nor is it implied from
      //                the invocation so the browser default this to the window.
      // new - creates a new instance of a constructor function with the context set to the function.
      //                (e.g. new Animal() has the context of the Animal function)

  // 3) What is the difference between call and apply?

      //Both instantly invoke the function with context and parameters. However, call has the parameter
      // listed after context and apply has the parameters in an array.

  // 4) What does .bind do?

      //.bind sets the context for use at a later time in the program.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "agkm10",
  email: "agkm10@gmail.com",
  getUsername : function() {
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar =  function() {
      this.move+=10;
      return this.move;
    };
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);

getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
