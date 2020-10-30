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
        this.ctx.strokeRect(this.location.x, this.location.y, this.scale, this.scale);
    }

    update(snake)
    {
        let tmp = null;

        // Checks whether the new location of the fruit is not on the snakes body.
        while(tmp == null || snake.onSnake(tmp)) 
        {
            tmp = this.randomLocation();
        }

        this.location = tmp;
    }

    randomLocation()
    {
        // return random location based on amount of columns and rows.
        return {x: (Math.floor(Math.random() * this.columns - 1) + 1) * this.scale, y: (Math.floor(Math.random() * this.rows - 1) + 1) * this.scale}
    }
}