function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(e => !geese.includes(e))
  };

  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

  /*
  KELUARKAN ARRAY YANG TIDAK TERDAPAT DI geese buat array baru
  */