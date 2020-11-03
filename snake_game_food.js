let currentFoodPostion = 0; // Initially set to 0
const createFood = () => {
    // Remove previous food;
    gameBoardPixels[currentFoodPostion].classList.remove("food");

    // Create new food
    currentFoodPostion = Math.random();
    currentFoodPostion = Math.floor(currentFoodPostion * 1600);
    gameBoardPixels[currentFoodPostion].classList.add("food");
};
