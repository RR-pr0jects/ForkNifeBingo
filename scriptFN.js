const table = document.getElementById("editableTable").querySelector("tbody");

// Create 4x4 table
for (let i = 0; i < 4; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const cell = document.createElement("td");
    cell.textContent = `Row ${i+1}, Col ${j+1}`;

    // Enable text editing on click
    cell.addEventListener("click", () => {
      const currentText = cell.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText;

      // Replace cell content with input
      cell.textContent = "";
      cell.appendChild(input);
      input.focus();

      // Save on blur or Enter
      const save = () => {
        cell.textContent = input.value;
      };

      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });
    });

    // Toggle background color on double click
    cell.addEventListener("dblclick", (e) => {
      cell.classList.toggle("colored");
      e.stopPropagation(); // Prevent triggering edit on double-click
    });

    row.appendChild(cell);
  }
  table.appendChild(row);
}