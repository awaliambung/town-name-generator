let wordPool = null;

fetch('./data/wordPool.json')
  .then(response => response.json())
  .then(data => {wordPool = data})
  .catch(error => console.error("Failed to load word pool data.", error));

function generateName() {
  if (!wordPool) {
    return "Loading...";
  }

  const { prefixes = [], middles = [], suffixes = [] } = wordPool;
  return getRandomElement(prefixes) + getRandomElement(middles) + getRandomElement(suffixes);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("generateBtn")?.addEventListener("click", () => {
  if (!wordPool) {
    document.getElementById("nameDisplay").textContent = "Loading...";
    return;
  }
  document.getElementById("nameDisplay").textContent = generateName();
});
