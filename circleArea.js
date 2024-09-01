class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const circleArea = (circle) => {
   return Math.PI * Math.pow(circle.radius, 2);
};

// Membuat instance dari Point dan Circle
const centerPoint = new Point(10, 10);
const myCircle = new Circle(centerPoint, 30);

// Menggunakan console.log untuk menampilkan hasil
console.log(circleArea(myCircle)); 

