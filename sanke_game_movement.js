// Let the starting position of the snake be at the middle of game board
let currentSnakeHeadPosition = 799;
let snakeLength = 1000; // Initial length of the snake = 1000

// Move snake continously by calling this function repeatedly :
const moveSnake = () => {
    switch (snakeCurrentDirection) {
        case LEFT_DIR:
            --currentSnakeHeadPosition;
            const isSnakeHeadAtLastGameBoardPixelTowardsLeft = currentSnakeHeadPosition % 40 == 39 || currentSnakeHeadPosition < 0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
                currentSnakeHeadPosition = currentSnakeHeadPosition + 40;
            }
            break;

        case UP_DIR:
            currentSnakeHeadPosition = currentSnakeHeadPosition - 40;
            const isSnakeHeadAtLastGameBoardPixelTowardsUp = currentSnakeHeadPosition < 0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
                currentSnakeHeadPosition = currentSnakeHeadPosition + 1600;
            }
            break;

        case RIGHT_DIR:
            ++currentSnakeHeadPosition;
            const isSnakeHeadAtLastGameBoardPixelTowardsRight = currentSnakeHeadPosition % 40 == 0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
                currentSnakeHeadPosition = currentSnakeHeadPosition - 40;
            }
            break;

        case DOWN_DIR:
            currentSnakeHeadPosition = currentSnakeHeadPosition + 40;
            const isSnakeHeadAtLastGameBoardPixelTowardsDown = currentSnakeHeadPosition > 1599;
            if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
                currentSnakeHeadPosition = currentSnakeHeadPosition - 1600;
            }
            break;

        default:
            break;
    }
    let nextSnakeHeadPixel = gameBoardPixels[currentSnakeHeadPosition];

    // Kill snake if it bites itself:
    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
        // Stop moving the snake
        clearInterval(moveSnakeInterval);
        if (!alert(`You have ate ${totalFoodAte} food by travelling ${totalDistanceTravelled} blocks.`))
            window.location.reload();
    }

    // If not killed add the snake body:
    nextSnakeHeadPixel.classList.add("snakeBodyPixel");

    // This fuction removes the snake body from the end of the snake as it moves.
    // Also note that snakeLength is used as the timeout interval
    setTimeout(() => {
        nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
    }, snakeLength);

    // Update total distance travelled
    totalDistanceTravelled++;
    // Update in UI:
    document.getElementById("blocksTravelled").innerHTML = totalDistanceTravelled;

    // If snike bites the food:
    if (currentSnakeHeadPosition == currentFoodPostion) {
        // Update total food ate
        totalFoodAte++;
        // Update in UI:
        document.getElementById("pointsEarned").innerHTML = totalFoodAte;
        // Increase Snake length:
        snakeLength = snakeLength + 100;
        // Create new food:
        createFood();
    }
};
