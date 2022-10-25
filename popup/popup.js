document.addEventListener("DOMContentLoaded", function () {
  const batButton = document.getElementById("bat_button");
  batButton.addEventListener("click", function () {
    getCurrentTab();
    async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        (tabs) => {
          var currentTab = tabs.filter((tab) => tab.active)[0];
          chrome.tabs.update(tab.id, { active: true });
          function appendImage() {
            if (document.getElementById("bat_image")) {
              return;
            }
            if (document.getElementById("crocs_image")) {
              document.getElementById("crocs_image").remove();
            }
            let img = document.createElement("img");
            img.setAttribute("id", "bat_image");
            img.draggable = false;
            img.style.position = "fixed";
            img.style.top = "100px";
            img.style.left = "40%";
            img.style.zIndex = "99";
            img.width = 150;
            img.height = 150;
            img.src = "https://jahneer.me/petpets/pets/bat.gif";
            document.body.appendChild(img);
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: appendImage
            },
            (injectionResults) => {
              console.log("done", injectionResults);
            }
          );
        }
      );
      return tab;
    }
  });

  const moveThePetButton = document.getElementById("move_the_pets");
  moveThePetButton.addEventListener("click", function () {
    getCurrentTab();
    async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        (tabs) => {
          var currentTab = tabs.filter((tab) => tab.active)[0];
          chrome.tabs.update(tab.id, { active: true });
          function moveThePet() {
            if (document.getElementById("bat_image")) {
              let img = document.getElementById("bat_image");
              img.style.top = "100px";
              let left = 0;
              let speed = 1;
              let top = 100;

              setTimeout(() => {
                img.addEventListener("mouseover", () => {
                  // move the opposite direction
                  speed = -speed;
                });
                setInterval(() => {
                  if (left >= 100) {
                    speed = -1;
                  } else if (left <= 0) {
                    speed = 1;
                  }
                  left += speed;
                  top += speed;
                  img.style.left = left + "%";
                  img.style.top = top + "px";
                }, 60);
              }, 60);
            }
            if (document.getElementById("crocs_image")) {
              let img = document.getElementById("crocs_image");
              img.style.top = "100px";
              let left = 0;
              let speed = 1;
              setTimeout(() => {
                setInterval(() => {
                  if (left >= 100) {
                    speed = -1;
                  } else if (left <= 0) {
                    speed = 1;
                  }
                  left += speed;
                  top += speed;
                  img.style.left = left + "%";
                  if (left >= 100) {
                    img.style.transform = "scaleX(1)";
                  }
                  if (left <= 1) {
                    img.style.transform = "scaleX(-1)";
                  }
                }, 60);
              }, 60);
            }
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: moveThePet
            },
            (injectionResults) => {
              console.log("done", injectionResults);
            }
          );
        }
      );
      return tab;
    }
  });

  const clearButton = document.getElementById("clear_button");
  clearButton.addEventListener("click", function () {
    getCurrentTab();
    async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        (tabs) => {
          var currentTab = tabs.filter((tab) => tab.active)[0];
          chrome.tabs.update(tab.id, { active: true });
          function removeImage() {
            if (document.getElementById("bat_image")) {
              document.getElementById("bat_image").remove();
            }
            if (document.getElementById("crocs_image")) {
              document.getElementById("crocs_image").remove();
            }
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: removeImage
            },
            (injectionResults) => {
              console.log("done", injectionResults);
            }
          );
        }
      );
      return tab;
    }
  });

  const crocsButton = document.getElementById("crocs_button");
  crocsButton.addEventListener("click", function () {
    getCurrentTab();
    async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        (tabs) => {
          var currentTab = tabs.filter((tab) => tab.active)[0];

          chrome.tabs.update(tab.id, { active: true });
          function appendImage() {
            if (document.getElementById("crocs_image")) {
              return;
            }
            if (document.getElementById("bat_image")) {
              document.getElementById("bat_image").remove();
            }
            let img = document.createElement("img");
            img.setAttribute("id", "crocs_image");
            img.draggable = false;
            img.style.transform = "scaleX(-1)";
            img.style.position = "fixed";
            img.style.top = "100px";
            img.style.left = "45%";
            img.style.zIndex = "99";
            img.width = 150;
            img.height = 150;
            img.src = "https://jahneer.me/petpets/pets/crocs.gif";
            document.body.appendChild(img);
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: appendImage
            },
            (injectionResults) => {
              console.log("done", injectionResults);
            }
          );
        }
      );
      return tab;
    }
  });
});
