function load_state(contents) {
  const d = JSON.parse(contents);
  for (const item of d) {
    document.getElementById(item.id).value = parseInt(item.value);
    console.log(document.getElementById(item.id).value);
  }
}
