templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;
  var resources = ros[0].background[0].links;
  var links = "<div id='link-wrapper'>";
  for (var r = 0; r<resources.length; r++){
    links += `<a href="`+resources[r].url+`" target="_blank">`;
    links += `<button class="btn btn-tert">`+resources[r].name+`</button></a>`;
  }
  txt = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'plain\')">Text  <i class="fas fa-download"></i></button>';
  md = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'markdown\')">Markdown  <i class="fas fa-download"></i></button>';
  html = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'html\')">HTML  <i class="fas fa-download"></i></button>';
  var content =
    `<div id="policy-dl" class="window">
        <h3>Get policy</h3>`+ txt + md + html +
      `</div>
      <div id="policy-edit" class="window">
        <h3>Edit policy</h3>
        <textarea class="policyHolder">`+docContent.plain+`</textarea>
      </div>
      <div id="policy-reset" class="window">
        <h3>Start over</h3>
        <button id="reset" onclick="clearData()" class="btn btn-seco">
        Build another policy <i class="fas fa-redo"></i>
        </button>
      </div>
      <div id="resources" class="window">
        <h3>Learn more</h3>
        <p>For more information on organizational security and how you can get the most out of your new policy, check out these resources:</p>`
        +links+`
      </div></div>`;
  return content;
};
