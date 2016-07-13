export
class Point {
    x: number;
    y: number;

    constructor( aX: number, aY: number ) {
        this.x = aX;
        this.y = aY;
    }

    clone() : Point {
        return new Point( this.x, this.y );
    }
}
