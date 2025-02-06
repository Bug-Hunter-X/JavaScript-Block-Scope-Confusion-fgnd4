function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This 'x' is different from the one declared outside the if block
  }
  console.log(x); // Outputs 10, not 20
}