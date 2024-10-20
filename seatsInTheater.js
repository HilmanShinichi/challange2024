const seatsInTheater = (nCols, nRows, col, row) => {
    const baris = nRows - row;
    const kolom = nCols - col + 1
    console.log(baris, kolom)
    
    return baris * kolom 
  }

  console.log(seatsInTheater(16,11,5,3))
  console.log(seatsInTheater(1,1,1,1))