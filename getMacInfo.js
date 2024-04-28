// Object Macbook with initial properties
let Macbook = {
  model: "Macbook Pro",
  year: 2022,
  color: "Space Gray",
  // Function getMacInfo for getting information about Macbook
  getMacInfo: function () {
    return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
  },
};

// Function to display Macbook information
function displayMacbookInfo() {
  let infoDiv = document.getElementById("macbookInfo");

  // Display initial information
  infoDiv.innerHTML = "<b>Initial Information:</b> " + Macbook.getMacInfo();

  // Add new properties to Macbook
  Macbook.storage = "512GB SSD";
  Macbook.RAM = "16GB";

  // Display updated information
  infoDiv.innerHTML +=
    "<br><b>Updated Information:</b> " +
    Macbook.getMacInfo() +
    `, Storage: ${Macbook.storage}, RAM: ${Macbook.RAM}`;
}
