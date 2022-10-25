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
          function changeBackgroundColor() {
            let img = document.createElement("img");
            img.draggable = false;
            img.position = "absolute";
            img.style.top = "200px";
            img.style.left = "400px";
            img.width = 150;
            img.height = 150;
            img.src = "https://jahneer.me/petpets/pets/bat.gif";
            img.style.position = "absolute";
            document.body.appendChild(img);
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: changeBackgroundColor
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
          function changeBackgroundColor() {
            let img = document.createElement("img");
            img.draggable = false;
            img.position = "absolute";
            img.style.top = "200px";
            img.style.left = "400px";
            img.width = 150;
            img.height = 150;
            img.src = "https://jahneer.me/petpets/pets/crocs.gif";
            img.style.position = "absolute";
            document.body.appendChild(img);
          }
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: changeBackgroundColor
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
