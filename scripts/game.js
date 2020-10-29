class Game 
{
    constructor() 
    {
        this.state = document.getElementById("state");
        this.score = document.getElementById("score");
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.scale = 10;
        this.rows = this.canvas.height / this.scale;
        this.columns = this.canvas.width / this.scale;
    }

    start() 
    {
        this.snake = new Snake(this.canvas, this.ctx, this.scale);
        this.fruit = new Fruit(this.ctx, this.scale, this.rows, this.columns);
        this.keypresses();
        this.draw();
    }

    draw() 
    {
        this.score.innerText = "Score: " + this.snake.total;
        
        let interval = setInterval(() => 
        {
            if (this.snake.alive) 
            {
                this.update();
            } 
            else 
            {
                alert("Je stierf...");
                clearInterval(interval);
            }
        }, 100);
    }

    update() 
    {
       
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

        this.fruit.draw();
        
        this.snake.update();
        this.snake.draw();

        if(this.snake.eat(this.fruit))
        {
            this.fruit.update();
        }

        this.score.innerText = "Score: " + this.snake.total;
    }

    keypresses()
    {
        window.addEventListener('keydown', ((evt) => {
            let direction = evt.key.replace('Arrow', '');
            this.snake.move(direction);
        }));
    }
}