function download() {
  // Get the button states

  var rangeStates = [
    { id: "range1", value: document.getElementById("knop1").value },
  ];

  var buttonStates = [
    { id: "button1", state: document.getElementById("knop1").innerHTML },
    { id: "button2", state: document.getElementById("knop2").innerHTML },
    // ... add more buttons here
  ];

  // Convert the button states to a JSON string
  var json = JSON.stringify(rangeStates);

  // Create a new Blob object with the JSON data
  var blob = new Blob([json], { type: "application/json" });

  // Create a link to trigger the download
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "button-states.json";

  // Trigger the download
  link.click();
}
