function add() {
  setTimeout(() => {
    console.log("first console");

    setTimeout(() => {
      console.log("second console");
    }, 0);

    console.log("third console");
  }, 1000);

  console.log("forth console");
}
add();
