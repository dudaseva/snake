let applePositionI = 0;
let applePositionJ = 0;
let score = 0;
const generateFood = (map) => {
  let sizeY = map.length;
  let sizeX = map[0].length;
  let i = Math.floor(Math.random() * sizeY);
  let j = Math.floor(Math.random() * sizeX);
  if (map[i][j] === 'X'){
    generateFood(map);
  }else{
    map[i][j] = 'o';
    applePositionI = i;
    applePositionJ = j;
  }
};

const food = (counter, map) => {
  console.log('Score: ' + score);
  //első kör, az alma generálás fixen lefut
  if (counter === 1){
    generateFood(map);
  //az összes többi kör
  }else{
    //amikor felveszi a kígyó az almát:
    switch (map[applePositionI][applePositionJ]){
      case 'X':
        generateFood(map);
        score++;
        break;
    //amikor nem veszi fel az almát
      case ' ':
        map[applePositionI][applePositionJ] = 'o';
        break;
    }
  }
};

module.exports = food;
