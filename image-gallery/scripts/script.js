const panelList = document.querySelectorAll(".panel");
const panels = document.querySelector(".panels");

let currentPanel;

function setState(panel, opacity, transition) {
  if (panel) {
    const panelBegin = panel.querySelector(".panel-paragraph-begin");
    panelBegin.style.transition = transition;
    panelBegin.style.opacity = opacity;
    
    const panelEnd = panel.querySelector(".panel-paragraph-end");
    panelEnd.style.transition = transition;
    panelEnd.style.opacity = opacity;
  }
}

function clickHandler(event) {
  setState(currentPanel, 0, "none");

  let gridTemplate = "";
  panelList.forEach(function (panel) {
    if (panel === event.target) {
      currentPanel = panel;
      gridTemplate += "4fr ";
    } else {
      gridTemplate += "1fr ";
    }
  });
  setState(currentPanel, 1.0, "all 0.5s");
  panels.style.gridTemplateColumns = gridTemplate.trimEnd();
}

panelList.forEach((panel) => panel.addEventListener("click", clickHandler));
