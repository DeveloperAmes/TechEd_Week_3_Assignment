const totalFlowerCount = document.getElementById("total-flower-count");

const flowersPerSecond = document.getElementById("flowers-per-second");

const mainClicker = document.getElementById("main-clicker");

let footer = document.querySelector("footer");

let count = 0;
let flowersPerSec = 0;

let gameState = localStorage.getItem("game-state");
const parsedData = JSON.parse(gameState);
if (gameState) {
  count = parsedData.totalFlowerCount;
  flowersPerSec = parsedData.flowersPerSecond;
}

window.addEventListener("load", function () {
  mainClicker.animate({ transform: "rotate(360deg)" }, { duration: 1000 });
});

mainClicker.addEventListener("click", function () {
  count += 1;
  totalFlowerCount.innerHTML = `Total flower count: ${count}`;
  document.getElementById("clicker-sound").play();
});

let updateGameState = setInterval(function () {
  count = count + flowersPerSec;
  totalFlowerCount.innerHTML = `Total flower count: ${count}`;
  flowersPerSecond.innerHTML = `Flowers per second: ${flowersPerSec}`;
  localStorage.setItem(
    "game-state",
    JSON.stringify({
      totalFlowerCount: count,
      flowersPerSecond: flowersPerSec,
    })
  );
}, 1000);

async function getUpgradesData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const apiData = await response.json();
  return apiData;
}

// need to delete this
const apiData = getUpgradesData();
console.log(apiData);
// just there so I can see the data

async function renderUpgrades() {
  const upgradesData = await getUpgradesData();
  createUpgradeElements(upgradesData);
}

renderUpgrades();
const upgradesSection = document.getElementById("upgrades-section");

function createUpgradeElements(data) {
  for (let i = 0; i < data.length; i++) {
    let upgradeBtn = document.createElement("button");
    upgradeBtn.className = "btn";
    upgradeBtn.innerHTML = `+ ${data[i].increase} flowers per second <br> Cost: ${data[i].cost} flowers`;
    upgradesSection.appendChild(upgradeBtn);
    upgradeBtn.addEventListener("click", function () {
      if (count >= data[i].cost) {
        count = count - data[i].cost;
        flowersPerSec = flowersPerSec + data[i].increase;
        document.getElementById("upgrade-click").play();
        upgradeBtn.animate(
          { background: "lightgreen" },
          {
            duration: 1000,
          }
        ),
          (upgradeBtn.innerHTML = "Upgrade purchased!");
        setTimeout(function () {
          upgradeBtn.innerHTML = `+ ${data[i].increase} flowers per second <br> Cost: ${data[i].cost} flowers`;
        }, 1000);
      } else {
        document.getElementById("not-enough-flowers").play();
        upgradeBtn.animate(
          { background: "crimson" },
          {
            duration: 1000,
          }
        );
        upgradeBtn.innerHTML = "Not enough flowers!";
        setTimeout(function () {
          upgradeBtn.innerHTML = `+ ${data[i].increase} flowers per second <br> Cost: ${data[i].cost} flowers`;
        }, 1000);
      }
    });
  }
}

// Tried to call the createUpgradeElements function inside renderUpgrades without a parameter but with an argument there already.
// Needed to use a parameter in the createUpgradeElements() function and then use that parameter in my for loop.

function createRestartButton() {
  let restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Game";
  restartBtn.className = "btn";
  restartBtn.id = "restart-btn";
  footer.appendChild(restartBtn);
  restartBtn.addEventListener("click", clearStorage);
}

createRestartButton();

function clearStorage() {
  localStorage.removeItem("game-state");
  count = 0;
  flowersPerSec = 0;
}
