class Input {
    constructor(scale) {
        this.scale = scale;
        this.direction = { x: 0, y: 0 }
        this.lastDirection = { x: 0, y: 0 }

        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                    this.direction = { x: 0, y: -this.scale * 1 }
                    break
                case 'ArrowDown':
                    this.direction = { x: 0, y: this.scale * 1 }
                    break
                case 'ArrowLeft':
                    this.direction = { x: -this.scale * 1, y: 0 }
                    break
                case 'ArrowRight':
                    this.direction = { x: this.scale * 1, y: 0 }
                    break
            }
        })
    }

    getDirection() {
        this.lastDirection = this.direction;
        return this.direction;
    }
}