class Fruit
{
    constructor(ctx, scale, rows, columns)
    {
        this.ctx = ctx;
        this.scale = scale;
        this.rows = rows;
        this.columns = columns;
        this.location = this.randomLocation();
    }

    draw()
    {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.location.x, this.location.y, this.scale, this.scale);
    }

    update(snake)
    {
        let tmp = null;

        while(tmp == null || snake.onSnake(tmp)) 
        {
            tmp = this.randomLocation();
        }

        this.location = tmp;
    }

    randomLocation()
    {
        return {x: (Math.floor(Math.random() * this.columns - 1) + 1) * this.scale, y: (Math.floor(Math.random() * this.rows - 1) + 1) * this.scale}
    }
}