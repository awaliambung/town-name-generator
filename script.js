let affixes = null;

fetch('./data/affixes.json')
  .then(response => response.json())
  .then(data => {affixes = data})
  .catch(error => console.error("Failed to load word pool data.", error));

function generateName() {
  if (!affixes) {
    return "Loading...";
  }

  const { prefixes = [], infixes = [], suffixes = [] } = affixes;
  return getRandomElement(prefixes) + getRandomElement(infixes) + getRandomElement(suffixes);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("generateBtn")?.addEventListener("click", () => {
  if (!affixes) {
    document.getElementById("nameDisplay").textContent = "Loading...";
    return;
  }
  document.getElementById("nameDisplay").textContent = generateName();
});
