const input = document.querySelectorAll("input");

input.forEach((item, currentIndex) => {
  item.addEventListener("click", function () {
    item.click();

    for (let i = 0; i < input.length; i++) {
      if (i === currentIndex) {
        continue;
      }
      let randomNumber = Math.floor(Math.random() * 4);
      if (randomNumber === currentIndex) {
      } else {
        input[randomNumber].click();
      }
    }
  });
});
