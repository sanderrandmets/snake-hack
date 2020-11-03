// Direction codes (Keyboard key codes for arrow keys):
const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

// Set snake direction initially to right
let snakeCurrentDirection = RIGHT_DIR;

const changeDirection = newDirectionCode => {
    // Change the direction of the snake
    if (newDirectionCode == snakeCurrentDirection) return;
    if (newDirectionCode == LEFT_DIR && snakeCurrentDirection != RIGHT_DIR) {
        snakeCurrentDirection = newDirectionCode;
    } else if (newDirectionCode == UP_DIR && snakeCurrentDirection != DOWN_DIR) {
        snakeCurrentDirection = newDirectionCode;
    } else if (newDirectionCode == RIGHT_DIR && snakeCurrentDirection != LEFT_DIR) {
        snakeCurrentDirection = newDirectionCode;
    } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
        snakeCurrentDirection = newDirectionCode;
    }
};
