function switchItUp(number) {
    var num;
    switch (number) {
      case 1:
        num = "One";
        break;
      case 2:
        num = "Two";
        break;
      case 3:
        num = "Three";
        break;
      case 4:
        num = "Four";
        break;
      case 5:
        num = "Five";
        break;
      case 6:
        num = "Six";
        break;
      case 7:
        num = "Seven";
        break;
      case 8:
        num = "Eight";
        break;
      case 9:
        num = "Nine";
        break;
      case 0:
        num = "Zero";
        break;
    }
  
    return num;
}

// cara simple
// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

console.log(switchItUp(5))
