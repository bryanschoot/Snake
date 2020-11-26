class Snake {
    constructor(canvas, ctx, scale) {
        this.input = new Input(scale);
        this.alive = true;
        this.canvas = canvas;
        this.ctx = ctx;
        this.scale = scale;
        this.segments = [{ x: Math.floor(canvas.height / 2), y: Math.floor(canvas.width / 2) }];
    }

    draw() {
        this.segments.forEach(segment => {
            this.ctx.fillStyle = "#31b931";
            this.ctx.fillRect(segment.x, segment.y, this.scale, this.scale);
            this.ctx.strokeRect(segment.x, segment.y, this.scale, this.scale);
        });
    }

    update() {
        const direction = this.input.getDirection();

        for (let i = this.segments.length - 2; i >= 0; i--) {
            this.segments[i + 1] = {...this.segments[i] }
        }

        this.segments[0].x += direction.x;
        this.segments[0].y += direction.y;

        this.collision();
    }

    eat(location) {
        return this.segments[0].x == location.x && this.segments[0].y == location.y
    }

    addSegment(amount) {
        for (let i = 0; i < amount; i++) {
            this.segments.push({...this.segments[this.segments.length - 1] })
        }
    }

    onSnake(location) {
        return this.segments.some(segment => {
            return segment.x === location.x && segment.y === location.y;
        });
    }

    collision() {
        if (this.segments[0].x > this.canvas.width - this.scale || this.segments[0].x < 0 || this.segments[0].y > this.canvas.height - this.scale || this.segments[0].y < 0) {
            this.alive = false;
        }

        for (var i = 1; i < this.segments.length; i++) {
            if (this.segments[0].x === this.segments[i].x && this.segments[0].y === this.segments[i].y) {
                this.alive = false;
            }
        }
    }
}