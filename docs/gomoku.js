class Gomoku {
    constructor() {
        this.field = [];
        for (var i = 0; i < 19; i++) {
            var second = [];
            for (var j = 0; j < 19; j++) {
                second.push(9);
            }
            this.field.push(second);
        }

        this.turn = 0;
    }

    checkLine(x, y) {
        const moveInc = [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1]
        ];

        for (var i = 0; i < moveInc.length; i++) {
            var tx = x;
            var ty = y;

            var count = 1;
            var direction = 1;

            for (var j = 0; j < 5; j++) {
                tx = tx + moveInc[i][0] * direction;
                ty = ty + moveInc[i][1] * direction;

                if (this.field[tx][ty] == this.field[x][y]) {
                    count += 1;
                } else {
                    if (direction == -1){
                        break;
                    }
                    direction = -1;
                    tx = x;
                    ty = y;
                }
            }
            // console.log(count);
            if (count == 5) {
                return true;
            }
        }

        return false;
    }

    setStone(x, y, callback) {
        if(this.field[x][y] == 9) {
            this.field[x][y] = this.turn % 2;

            let result = this.checkLine(x, y)

            if(callback) {
                callback(x, y, this.turn, result);
            }
            this.turn += 1;
        }
    }
}
