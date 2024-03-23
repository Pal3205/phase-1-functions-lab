// Code your solution in this file!
 /*
  returns a distance in blocks
  returns a distance in blocks
  calculates distances below 42nd street
  */
function distanceFromHqInBlocks (block) {
    if (block > 42) {
      return block - 42;
    } 
      return 42 - block;
}


   /*
  returns a distance in feet
  returns a distance in feet
  calculates distances below 42nd street
  */

  function distanceFromHqInFeet (block){
  return distanceFromHqInBlocks(block)*264;
  }



  /*
  returns the distance travelled in feet
  returns a distance in feet
  returns distance when destination is below distance
  */
  function distanceTravelledInFeet (PointA, PointB) {
    if (PointA < PointB) {
      return (PointB - PointA) * 264;
    } else {
      return (PointA - PointB) * 264;
    }

  }



  /*
  gives customers a free sample
  charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
  charges 25 dollars for a distance over 2000 feet
  does not allow rides over 2500 feet
  */
 function calculatesFarePrice (PointA, PointB) {
  const distance = distanceTravelledInFeet(PointA, PointB);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
 }




