class Snake 
{
    constructor(canvas, ctx, scale) 
    {
        this.scale = scale;
        this.ctx = ctx
        this.canvas = canvas;
        this.x = this.canvas.height / 2;
        this.y = this.canvas.height / 2;
        this.xSpeed = this.scale * 1;
        this.ySpeed = 0;
        this.alive = true;
        this.total = 0;
        this.tail = [];
    }

    draw() 
    {
        this.ctx.fillStyle = "#FFFFFF";

        for (let i = 0; i < this.tail.length; i++) 
        {
            this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
        }

        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }

    update()
    {
        for (let i = 0; i < this.tail.length - 1; i++) 
        {
            this.tail[i] = this.tail[i + 1];
        }
      
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.collision();
    }

    move(direction)
    {   
        switch(direction) 
        {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -this.scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = this.scale * 1;
                break;
            case 'Left':
                this.xSpeed = -this.scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = this.scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    eat(fruit) 
    {
        if (this.x === fruit.x && this.y === fruit.y) 
        {
            this.total++;
            return true;
        }
        return false;
    }

    collision()
    {
        if (this.x > this.canvas.width || this.x < 0 || this.y > this.canvas.height || this.y < 0) {
            this.alive = false;
        }

        for (var i = 0; i < this.tail.length; i++) 
        {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.alive = false;
            }
        }
    }
}