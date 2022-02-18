balls=5
function pyramid(balls) {
  switch(balls){
      case balls<2:
      console.log(1);
      break;
      case balls<4:
      console.log(2);
      break;
      case balls<8:
      console.log(3);
      break;
      case balls<12:
      console.log(4);
      break;
      case balls>12:
      console.log(5);
      break;
  }
}
pyramid(balls)