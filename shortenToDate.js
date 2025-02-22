function shortenToDate(longDate) {
  return longDate.split(',')[0]
}

/*
Test.assertEquals(shortenToDate("Friday May 2, 9am"), "Friday May 2");
Test.assertEquals(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
Test.assertEquals(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
  */

console.log(shortenToDate("Friday May 2, 9am"));
console.log(shortenToDate("Tuesday January 29, 10pm"));   
console.log(shortenToDate("Monday December 25, 10pm"));
