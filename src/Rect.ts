import { Point } from './Point';

export
class Rect {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor( aX: number, aY: number, aW: number, aH: number ) {
        this.x = aX;
        this.y = aY;
        this.w = aW;
        this.h = aH;
    }

    clone() : Rect {
        return new Rect( this.x, this.y, this.w, this.h );
    }

    getLeft() : number {
        return this.w >= 0 ? this.x : this.x + this.w;
    }

    getRight() : number {
        return this.w >= 0 ? this.x + this.w : this.x;
    }

    getTop() : number {
        return this.h >= 0 ? this.y : this.y + this.h;
    }

    getBottom() : number {
        return this.h >= 0 ? this.y + this.h : this.y;
    }

    getLeftTop() : Point {
        return new Point( this.getLeft(), this.getTop() );
    }

}
