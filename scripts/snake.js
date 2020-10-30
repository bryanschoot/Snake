class Snake 
{
    constructor(canvas, ctx, scale) 
    {
        this.input = new Input(scale);

        this.canvas = canvas;
        this.ctx = ctx;
        this.scale = scale;

        this.segments = [{ x: Math.floor(canvas.height / 2), y: Math.floor(canvas.width / 2) }];
        this.segmentsCount = 0;
    }

    draw()
    {
        this.segments.forEach(segment => 
        {
            this.ctx.fillStyle = "#FFFFFF";
            this.ctx.fillRect(segment.x, segment.y, this.scale, this.scale);
        });
    }

    update()
    {
        this.segmentsCount = this.segments.length - 1;

        const direction = this.input.getDirection();

        for (let i = this.segments.length - 2; i >= 0; i--) 
        {
            this.segments[i + 1] = { ...this.segments[i] }
        }

        this.segments[0].x += direction.x
        this.segments[0].y += direction.y
    }

    eat(food)
    {
        return this.segments[0].x === food.x && this.segments[0].y === food.y;
    }

    addSegment(amount) 
    {
        for (let i = 0; i < amount; i++) {
            this.segments.push({ ...this.segments[this.segments.length - 1] })
        }
    }

    // TODO: Add collision if the snake exits the map or touches his tail
}