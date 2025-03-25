document.getElementById("convertButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value.trim();
  const outputTextArea = document.getElementById("outputText");

  if (!inputText) {
    alert("Pole gdzie powinien być tekst jest puste");
    return;
  }

  try {
    const lines = inputText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    const resultDict = {};
    let value = null;

    for (const line of lines) {
      if (value === null) {
        value = line;
      } else {
        const key = line;
        resultDict[key] = value;
        value = null;
      }
    }

    if (value !== null) {
      throw new Error("Nie jest parzyście");
    }

    const resultJson = JSON.stringify(resultDict, null, 4);
    outputTextArea.value = resultJson;
  } catch (error) {
    alert(`Wystąpił błąd: ${error.message}`);
  }
});

document.getElementById("clearButton").addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
});
