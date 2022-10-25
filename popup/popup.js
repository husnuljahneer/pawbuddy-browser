document.addEventListener("DOMContentLoaded", function () {
  const batButton = document.getElementById("bat_button");
  batButton.addEventListener("click", function () {
    let img = document.createElement("img");
    img.draggable = false;
    img.width = 100;
    img.height = 100;
    img.src = "../pets/bat.gif";
    document.body.appendChild(img);
  });

  const crocsButton = document.getElementById("crocs_button");
  crocsButton.addEventListener("click", function () {
    let img = document.createElement("img");
    img.draggable = false;
    img.width = 100;
    img.height = 100;
    img.src = "../pets/crocs.gif";
    // document.body.appendChild(img);

    async function getCurrentTab() {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      chrome.tabs.query(
        { windowId: chrome.windows.WINDOW_ID_CURRENT },
        (tabs) => {
          let currentTab = tabs.filter((tab) => tab.active)[0];
          let url = currentTab.url;
          // get the console of the current tab
          chrome.tabs.update(tab.id, { active: true });

          function changeBackgroundColor() {
            let img = document.createElement("img");
            img.draggable = false;
            img.width = 100;
            img.height = 100;
            img.src = "https://jahneer.me/petpets/pets/bat.gif";
            img.style.position = "fixed";
            document.body.appendChild(img);

            document.body.style.backgroundColor = "red";
            document.title = "CHANGED";
            alert("CHANGED");
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
    getCurrentTab();
  });
});
