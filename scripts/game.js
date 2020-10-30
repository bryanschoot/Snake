class Game 
{
    constructor() 
    {
        this.amount = document.getElementById("amount");
        this.speed = document.getElementById("speed");
        this.score = document.getElementById("score");
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.scale = 30;
        this.rows = this.canvas.height / this.scale;
        this.columns = this.canvas.width / this.scale;
    }

    start() 
    {
        this.snake = new Snake(this.canvas, this.ctx, this.scale);
        this.fruit = new Fruit(this.ctx, this.scale, this.rows, this.columns);
        this.gameScore = 0;

        let interval = setInterval(() => 
        {
            if (this.snake.alive)
            {
                this.update();
                this.draw();
            } 
            else 
            {
                alert("You died, hit start to play again!");
                clearInterval(interval);
            }
        }, parseInt(this.speed.value));
    }

    update() 
    {
        this.snake.update();

        if(this.snake.eat(this.fruit.location))
        {
            this.score.innerText = "Score: " + this.snake.segments.length;

            this.fruit.update(this.snake);
            this.snake.addSegment(this.amount.value);
        }
    }

    draw() 
    {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

        this.snake.draw();
        this.fruit.draw();
    }
}