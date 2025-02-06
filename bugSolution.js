function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Modifies the outer 'x'
  }
  console.log(x); // Outputs 20
}

//Alternative solution (less preferred due to potential conflicts)
//var x = 10; //Global variable
//function myFunction(){
//  if(true){
//      x=20;
//  }
//  console.log(x); // Outputs 20
//}