function nextId(ids){
    for (i = 0; i < ids.length; i++) { 
        console.log(i);
      if (ids.indexOf(i) == -1){
        return i;
      }
    }
    return ids.length;
  }

  console.log(nextId([0,1,2,3,5]));

  /*
 it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,5]), 4);
  });
  it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
  });
  it('returns the lowestNextId - unsorted input with duplicates', function() {
    Test.assertEquals(nextId([1,2,0,2,3,5]), 4);
*/