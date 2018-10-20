if (this.Kekule) Kekule._loaded();

var composer = new Kekule.Editor.Composer(document);
composer.setDimension(window.innerWidth - 50, window.innerHeight - 50);
composer
  .appendToElem(document.getElementById("parent"))
  .setChemObj(new Kekule.Molecule());

composer.renderConfigs.moleculeDisplayConfigs.defMoleculeDisplayType = 1;
composer.renderConfigs.moleculeDisplayConfigs.defNodeDisplayMode = 1;
composer.renderConfigs.moleculeDisplayConfigs.defHydrogenDisplayLevel = 1;

window.addEventListener('resize', () => {
  composer.setDimension(window.innerWidth - 50, window.innerHeight - 50);
  chemViewer.setDimension(window.innerWidth - 50, window.innerHeight - 50)
})



document.onkeydown = (e) => {
  let evtobj = window.event ? event : e
  if (evtobj.keyCode == 90 && evtobj.ctrlKey) composer.undo();
};

var chemViewer = new Kekule.ChemWidget.Viewer(document);
chemViewer.setEnableToolbar(true);
chemViewer.setDimension(window.innerWidth - 50, window.innerHeight - 50);
chemViewer.appendToElem(document.getElementById('parent'));

setInterval(() => { chemViewer.setChemObj(composer.getChemObj())}, 1000);