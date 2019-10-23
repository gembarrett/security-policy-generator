// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc;
  // create the temporary values
  var tempPolicy = [];
  var tempGeneralA = [];
  var tempReviewA = [];
  var tempTipsA = [];

  // set up prevQ currentState.answers[0].q
  var prevQ = currentState.answers[0].q;

  // for each of the answers
  for (var i = 0; i < currentState.answers.length; i++){
    // get the qRef currentState.answers[i].q
    qRef = currentState.answers[i].q;

    // set up question name
    var thisQ = 'q'+qRef;

    // search all the sections for this answer's question
    for (var j = 0; j < sections.length; j++){
      // when it's found, check if it's a different question from previous
      var found = sections[j].find(ans => ans.id === thisQ);
      // if there's data
      if (found){
        // if we're building a policy
        if (p){
          // if there is general content and we don't already have it
          if ((qRef != prevQ) && (found.policyContent !== "")){
            // store it
            tempPolicy.push(found.policyContent);
          }
          // if there is specific content
          if (found.answers[currentState.answers[i].a].policyEntry){
            // store it
            tempPolicy.push(found.answers[currentState.answers[i].a].policyEntry);
          }
        }
        // if we're building an appendix
        if (a){
          // if there is general content and we don't already have it
          if ((qRef != prevQ) && (found.appendixContent !== "")){
            // store it
            tempGeneralA.push(found.appendixContent);
          }
          // create an easy reference for the specific appendix content
          var appendix = found.answers[currentState.answers[i].a].appendixEntry[0];
          // if there's review or tip content
          if (appendix.reviewList.length > 0){
            // store it
            tempReviewA.push(appendix.reviewList);
          }
          if (appendix.tipList.length > 0){
            // store it
            tempTipsA.push(appendix.tipList);
          }
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }
  // replace placeholder words then sort and format
  if (p){
    doc += replaceTemp(tempPolicy);
  }
  if (a){
    doc += '-----Appendix-----'+'\n';
    if (tempGeneralA.length > 0) {
      doc += tempGeneralA+'\n';
    }
    if (tempReviewA.length > 0){
      doc += '-----Review checklist-----'+'\n'+tempReviewA+'\n';
    }
    if (tempTipsA.length > 0){
      doc += '-----Implementation tips-----'+'\n'+tempTipsA;
    }
  }
  return doc;
}



// function to replace placeholder text in policy
function replaceTemp(policyArr) {
  var editedArray = [];
  // for each entry in the array
  for (var i=0; i<policyArr.length; i++) {
    var newString = policyArr[i];
    // for each of the stored keys
    for (var key in dict) {
      var regexKey = key.replace('[', '\\[').replace(']', '\\]');
      var regex = new RegExp(regexKey, 'gi');
      // replace any matches and put them in a new string
      if (newString){
        // add this new string to the array
        newString = newString.replace(regex, dict[key]);
      } else {
        console.log(policyArr[i].length);
      }
    }
    editedArray.push(newString);
  }

  // join all the edited array entries together into a single string
  editedArray = editedArray.join("\n");
  return editedArray;
}

// takes all the array items and puts them in the right order and groupings
function formatPolicy(pol){

}

// takes all the review and tip items and organises them
function formatAppendix(app){

}

// function to download data to a file
function downloadPolicy(type) {
    var today = new Date();
    today.setHours(0,0,0,0);
    var data = policyText+appendixText+'Created '+today;
    var filename = "policyDoc";
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
