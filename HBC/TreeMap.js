// ┌────────────────────────────────────────────────┐ \\
// │ F R E E B O A R D                                                                              │ \\
// ├────────────────────────────────────────────────┤ \\
// │ Copyright © 2013 Jim Heising (https://github.com/jheising)                                     │ \\
// │ Copyright © 2013 Bug Labs, Inc. (http://buglabs.net)                                           │ \\
// │ Copyright © 2015 Daisuke Tanaka (https://github.com/tanaka0323)                                │ \\
// ├────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT license.                                                                │ \\
// └────────────────────────────────────────────────┘ \\

(function() {
  'use strict';

  var imageIconHTML = "<img style='height: 20px !important; width: 20px !important;' src='/img/warning.png' />";

  var jitTreeMapWidget = function (settings) {
      var self = this;
      var BLOCK_HEIGHT = 60;


      var firstDropDownTD = _.uniqueId('firstDropDownTD-');
      var secondDropDownTD = _.uniqueId('secondDropDownTD-');

      var currentTopTD = _.uniqueId('jitTreemapTop-');
      var topHtmlElement = $('<div class="" id="' + currentTopTD + '">'
      +'<select id="' + firstDropDownTD + '" class="select-tree-dd left_2pt5em"></select>'
      +'<select id="' + secondDropDownTD + '" class="select-tree-dd right_5em"></select></div>');

      var currentID = _.uniqueId('jitTreemap-');
      var jitTreeMapElement = $('<div id="infovis" style="top:40px"></div>');

      var htmlElement = $('<div class="" id="' + currentID + '" style="position:relative;top:40px""></div>');

      var jitTreeMap = null;

      var currentSettings = settings;

      function setBlocks(blocks) {
          if (_.isUndefined(blocks))
              return;
          var height = BLOCK_HEIGHT * blocks;
          jitTreeMapElement.css({
            //  'height': height + 'px',
            //  'width': '100%'
          });
          if (!_.isNull(jitTreeMap))
          console.log('setBlocks');
          //jitTreeMap.resize();
      }

       //save the current chart data into session storage
       function saveCurrentChartData(treeMapSelectedData) {
        if(currentSettings.treeMapSelectedData != "") {
             sessionStorage.setItem(currentSettings.treeMapSelectedData, treeMapSelectedData);
             console.log("Inside TreeMap: " + sessionStorage.getItem(currentSettings.treeMapSelectedData));
         }
      }

      //init data
var json1 = {
  "children": [
     {
       "children": [
         {
           "data": {
             "location": "India",
             "issues": "276",
             "$color": "#9E9EC4",
             "$area": 200
           },
           "id": "Expert_Management",
           "name": "Expert Management"
         },
         {
           "data": {
             "location": "India",
             "issues": "271",
             "$color": "#7373A0",
             "$area": 271
           },
           "id": "DFTI_LS",
           "name": "DFTI L&S"
         }
       ],
       "data": {
         "issues": 547,
         "$area": 547
       },
       "id": "AMELIE_KM",
       "name": "AMELIE_Knowledge_Mgmt"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "209",
             "$color": "#8C8CB8 ",
             "$area": 209
           },
           "id": "Syncpipes",
           "name": "Syncpipes"
         }
       ],
       "data": {
         "issues": 209,
         "$area": 209
       },
       "id": "Dynamic_Data_Integration",
       "name": "Dynamic Data Integration"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "260",
             "$color": "#8C8CB8",
             "$area": 260
           },
           "id": "Request",
           "name": "Request"
         },
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "254",
             "$color": "#8C8CB8",
             "$area": 254
           },
           "id": "Change_Analysis",
           "name": "Change Analysis"
         }
       ],
       "data": {
         "issues": 514,
         "$area": 514
       },
       "id": "Code_Quality",
       "name": "Code Quality"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "US",
             "issues": "181",
             "$color": "#7373A0",
             "$area": 181
           },
           "id": "UNICO",
           "name": "UNICO"
         }
       ],
       "data": {
         "issues": 181,
         "$area": 181
       },
       "id": "Unico_int",
       "name": "Unico"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "229",
             "$color": "#7373A0",
             "$area": 229
           },
           "id": "EA_Extractor",
           "name": "EA Extractor"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "185",
             "$color": "#7373A0",
             "$area": 185
           },
           "id": "EM_Dashboard",
           "name": "EM Dashboard"
         }
       ],
       "data": {
         "issues": 414,
         "$area": 414
       },
       "id": "Energy_Management_use_case",
       "name": "Energy Mgmt use case"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "398",
             "$color": "#8C8CB8",
             "$area": 398
           },
           "id": "Database Design",
           "name": "Database_Design"
         },
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "203",
             "$color": "#8C8CB8",
             "$area": 203
           },
           "id": "User Interface Design",
           "name": "User_Interface_Design"
         }
       ],
       "data": {
         "issues": 601,
         "$area": 601
       },
       "id": "AMELIE",
       "name": "AMELIE"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "224",
             "$color": "#8C8CB8",
             "$area": 224
           },
           "id": "JIRA_Integration",
           "name": "JIRA Integration"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "217",
             "$color": "#8C8CB8",
             "$area": 217
           },
           "id": "AMELIE_REST_API",
           "name": "AMELIE REST API"
         },
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "215",
             "$color": "#9E9EC4",
             "$area": 215
           },
           "id": "AMELIE_Wiki",
           "name": "AMELIE Wiki"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "181",
             "$color": "#9E9EC4",
             "$area": 181
           },
           "id": "GAP_Analysis",
           "name": "GAP Analysis"
         }
       ],
       "data": {
         "issues": 837,
         "$area": 837
       },
       "id": "VAS",
       "name": "VAS"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Chaina",
             "issues": "627",
             "$color": "#9E9EC4",
             "$area": 627
           },
           "id": "Sharepoint_Integration",
           "name": "Sharepoint Integration"
         }
       ],
       "data": {
         "issues": 627,
         "$area": 627
       },
       "id": "Artifact_Trace",
       "name": "Artifact Trace"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "261",
             "$color": "#7373A0",
             "$area": 261
           },
           "id": "Napkin_Arch",
           "name": "Napkin Arch"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "211",
             "$color": "#7373A0",
             "$area": 211
           },
           "id": "Project_Health",
           "name": "Project Health"
         }
       ],
       "data": {
         "issues": 472,
         "$area": 472
       },
       "id": "Project_Quality",
       "name": "Project Quality"
     }
   ],
   "data": {},
   "id": "root",
   "name": "Top Albums"
 };

 var json2 = {
  "children": [
     {
       "children": [
         {
           "data": {
             "location": "India",
             "issues": "276",
             "$color": "#9E9EC4",
             "$area": 300
           },
           "id": "Expert_Management",
           "name": "Expert Management"
         },
         {
           "data": {
             "location": "India",
             "issues": "271",
             "$color": "#7373A0",
             "$area": 371
           },
           "id": "DFTI_LS",
           "name": "DFTI L&S"
         }
       ],
       "data": {
         "issues": 547,
         "$area": 547
       },
       "id": "AMELIE_KM",
       "name": "AMELIE_Knowledge_Mgmt"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "209",
             "$color": "#8C8CB8 ",
             "$area": 209
           },
           "id": "Syncpipes",
           "name": "Syncpipes"
         }
       ],
       "data": {
         "issues": 209,
         "$area": 209
       },
       "id": "Dynamic_Data_Integration",
       "name": "Dynamic Data Integration"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "260",
             "$color": "#8C8CB8",
             "$area": 360
           },
           "id": "Request",
           "name": "Request"
         },
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "254",
             "$color": "#8C8CB8",
             "$area": 154
           },
           "id": "Change_Analysis",
           "name": "Change Analysis"
         }
       ],
       "data": {
         "issues": 514,
         "$area": 514
       },
       "id": "Code_Quality",
       "name": "Code Quality"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "US",
             "issues": "181",
             "$color": "#7373A0",
             "$area": 181
           },
           "id": "UNICO",
           "name": "UNICO"
         }
       ],
       "data": {
         "issues": 181,
         "$area": 181
       },
       "id": "Unico_int",
       "name": "Unico"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "229",
             "$color": "#7373A0",
             "$area": 329
           },
           "id": "EA_Extractor",
           "name": "EA Extractor"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "185",
             "$color": "#7373A0",
             "$area": 85
           },
           "id": "EM_Dashboard",
           "name": "EM Dashboard"
         }
       ],
       "data": {
         "issues": 414,
         "$area": 414
       },
       "id": "Energy_Management_use_case",
       "name": "Energy Mgmt use case"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "398",
             "$color": "#8C8CB8",
             "$area": 398
           },
           "id": "Database Design",
           "name": "Database_Design"
         },
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "203",
             "$color": "#8C8CB8",
             "$area": 203
           },
           "id": "User Interface Design",
           "name": "User_Interface_Design"
         }
       ],
       "data": {
         "issues": 601,
         "$area": 601
       },
       "id": "AMELIE",
       "name": "AMELIE"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "China",
             "issues": "224",
             "$color": "#8C8CB8",
             "$area": 224
           },
           "id": "JIRA_Integration",
           "name": "JIRA Integration"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "217",
             "$color": "#8C8CB8",
             "$area": 317
           },
           "id": "AMELIE_REST_API",
           "name": "AMELIE REST API"
         },
         {
           "children": [],
           "data": {
             "location": "Germany",
             "issues": "215",
             "$color": "#9E9EC4",
             "$area": 115
           },
           "id": "AMELIE_Wiki",
           "name": "AMELIE Wiki"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "181",
             "$color": "#9E9EC4",
             "$area": 181
           },
           "id": "GAP_Analysis",
           "name": "GAP Analysis"
         }
       ],
       "data": {
         "issues": 837,
         "$area": 837
       },
       "id": "VAS",
       "name": "VAS"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "Chaina",
             "issues": "627",
             "$color": "#9E9EC4",
             "$area": 627
           },
           "id": "Sharepoint_Integration",
           "name": "Sharepoint Integration"
         }
       ],
       "data": {
         "issues": 627,
         "$area": 627
       },
       "id": "Artifact_Trace",
       "name": "Artifact Trace"
     },
     {
       "children": [
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "261",
             "$color": "#7373A0",
             "$area": 161
           },
           "id": "Napkin_Arch",
           "name": "Napkin Arch"
         },
         {
           "children": [],
           "data": {
             "location": "India",
             "issues": "211",
             "$color": "#7373A0",
             "$area": 311
           },
           "id": "Project_Health",
           "name": "Project Health"
         }
       ],
       "data": {
         "issues": 472,
         "$area": 472
       },
       "id": "Project_Quality",
       "name": "Project Quality"
     }
   ],
   "data": {},
   "id": "root",
   "name": "Top Albums"
 };

 var json = json1;

      function createJitTreeMap() {
          if (!_.isNull(jitTreeMap)) {
              jitTreeMap.destroy();
              jitTreeMap = null;
          }
          jitTreeMapElement.empty();

          var labelType, useGradients, nativeTextSupport, animate;

console.log("====================================================");

populateDropdown(firstDropDownTD, ['Build1','Build2','Build3']);
populateDropdown(secondDropDownTD, ['Build4','Build5','Build6']);

//init TreeMap
jitTreeMap = new $jit.TM.Squarified({
  //where to inject the visualization
  injectInto: 'infovis',
  //no parent frames
  titleHeight: 0,
  //no box offsets
  offset: 0,
Events: {
    enable: true,
    onClick: function(node) {
      //if(node) tm.enter(node);
      drawDependency();
      updateMatrics(node);
      saveCurrentChartData(node.data.location);
    }
  },
  //Enable tips
  Tips: {
      enable: true,
      //add positioning offsets
      offsetX: 20,
      offsetY: 20,
      //implement the onShow method to
      //add content to the tooltip when a node
      //is hovered
      onShow: function(tip, node, isLeaf, domElement) {
        var html = "<div class=\"tip-title\">" + node.name
          + "</div><div class=\"tip-text\">";
        var data = node.data;
        if(data.location) {
          html += "Location: " + data.location + "<br />";
        }
        if(data.playcount) {
          html += "Play count: " + data.playcount;
        }
        //if(data.image) {
        //  html += "<img src=\""+ data.image +"\" class=\"album\" />";
        //}
        tip.innerHTML =  html;
      }
    },
    //Add the name of the node in the correponding label
    //This method is called once, on label creation.
    onCreateLabel: function(domElement, node){
        var data = node.data;

        if(node.data.issues > 250)
            domElement.innerHTML = "<center><img style='height: 20px !important; width: 20px !important; position: absolute;top: 40%' src='/img/warning.png' /></center>"

        var style = domElement.style;
        style.display = '';
        style.cursor = 'default';
        style.border = '1px solid #FFFFFF';
        domElement.onmouseover = function() {
          style.border = '1px solid #9FD4FF';
        };
        domElement.onmouseout = function() {
          style.border = '1px solid #FFFFFF';
        };
    }
  });

jitTreeMap.loadJSON(json);
jitTreeMap.refresh();

// var abc = document.getElementById('infovis');
//  abc.setAttribute("style", "height:400px !important;width:400px;");
//    jitTreeMap.canvas.resize(400, 400);

  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.getElementById(currentID).appendChild(clon);

//add event to the back button
//   var back = $jit.id('back');
//   $jit.util.addEvent(back, 'click', function() {
//     tm.out();
//   });


//}

  //Change findings
  var oldBuildVersion = document.getElementById(firstDropDownTD);
  oldBuildVersion.addEventListener( "change",  function(){
    var build1 = oldBuildVersion.options[oldBuildVersion.selectedIndex].value;

    if(build1 == 'Build1')
    {}

  });

  //change tree map
  var newBuildVersion = document.getElementById(secondDropDownTD);
  newBuildVersion.addEventListener( "change",  function(){
    var build1 = newBuildVersion.options[newBuildVersion.selectedIndex].value;

    if(build1 == 'Build1')
      json = json1;
    else  
      json = json2;

    console.log("called.......................");

    jitTreeMap.loadJSON(json);
    jitTreeMap.compute(); 
    jitTreeMap.refresh();
  });

}

function populateDropdown(elementId, optionList) {
  var select = document.getElementById(elementId);
  for(var i = 0; i < optionList.length; i++) {
      var option = document.createElement('option');
      option.text = option.value = optionList[i];
      select.add(option, 0);
}
}

function resizeTreemapChart(){
var abc = document.getElementById('infovis');
 abc.setAttribute("style", "height:250px !important;width:550px; border: 3px solid black;top:50px");
 jitTreeMap.canvas.resize(550, 250);
}

function updateMatrics(data) {

var sampleData = {

  linesOfCode : 246000,
  newCplusplusClass : 5600,
  codeComplexity: {value:"13" , relativeValue: "increased"},
  codeDepth: {value:"13" , relativeValue: "decreased"},
  dependencies: {value:"3" , relativeValue: "decreased"},
  devTestCodeCoverage: {value:"13" , relativeValue: "constant"},
  duplicateCode: {value:"13" , relativeValue: "increased"},

  PC_lint_info: {value:"23" , relativeValue: "increased"},
	PC_lint_warnings: {value:"13" , relativeValue: "decreased"},
	PC_lint_errors: {value:"16" , relativeValue: "decreased"},
  LIB_itemCheck: {value:"12" , relativeValue: "constant"},
  
	

};

  sampleData.linesOfCode = Math.floor((Math.random() * 10000) + 1) ;
	//sampleData.comments = Math.floor((Math.random() * 10000) + 1);
	//sampleData.sourceCode = Math.floor((Math.random() * 10000) + 1);
	//sampleData.newLinesOfCode = Math.floor((Math.random() * 10000) + 1);
	sampleData.newCplusplusClass = Math.floor((Math.random() * 10000) + 1);

	sampleData.codeComplexity.value = Math.floor((Math.random() * 20) + 1);
	sampleData.codeDepth.value = Math.floor((Math.random() * 20) + 1);
	sampleData.dependencies.value = Math.floor((Math.random() * 20) + 1);
	sampleData.devTestCodeCoverage.value = Math.floor((Math.random() * 20) + 1);
	sampleData.duplicateCode.value = Math.floor((Math.random() * 20) + 1);
	sampleData.PC_lint_info.value = Math.floor((Math.random() * 20) + 1);
	sampleData.PC_lint_warnings.value = Math.floor((Math.random() * 20) + 1);
	sampleData.PC_lint_errors.value = Math.floor((Math.random() * 20) + 1);
	sampleData.LIB_itemCheck.value = Math.floor((Math.random() * 20) + 1);

  document.getElementById('linesOfCodeID').innerHTML = sampleData.linesOfCode;
	//document.getElementById('commentsID').innerHTML = sampleData.comments;
	//document.getElementById('sourceCodeID').innerHTML = sampleData.sourceCode;
	//document.getElementById('newLinesOfCodeID').innerHTML = sampleData.newLinesOfCode;
	document.getElementById('newCplusplusClassID').innerHTML = sampleData.newCplusplusClass;

	document.getElementById('CodeComplexityID').innerHTML = sampleData.codeComplexity.value;
	document.getElementById('CodeDepthID').innerHTML = sampleData.codeDepth.value;
	document.getElementById('dependenciesID').innerHTML = sampleData.dependencies.value;
	document.getElementById('devTestCodeCoverageID').innerHTML = sampleData.devTestCodeCoverage.value;
	document.getElementById('duplicateCodeID').innerHTML = sampleData.duplicateCode.value;
	document.getElementById('PC_lintInfo_ID').innerHTML = sampleData.PC_lint_info.value;
	document.getElementById('PC_lintwarn_ID').innerHTML = sampleData.PC_lint_warnings.value;
	document.getElementById('PC_linterror_ID').innerHTML = sampleData.PC_lint_errors.value;
	document.getElementById('lib_itemCheckID').innerHTML = sampleData.LIB_itemCheck.value;

	if(sampleData.codeComplexity.relativeValue === "increased"){
		document.getElementById('CodeComplexityID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.codeComplexity.relativeValue === "decreased"){
		document.getElementById('CodeComplexityID_watch').innerHTML = imageIconHTML
		document.getElementById('CodeComplexityID_image').innerHTML = "<i style='font-size:24px'class='fa'>&#xf063;</i>"
	}
	if(sampleData.codeComplexity.relativeValue === "constant"){
		document.getElementById('CodeComplexityID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.codeDepth.relativeValue === "increased"){
		document.getElementById('CodeDepthID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.codeDepth.relativeValue === "decreased"){
		document.getElementById('CodeDepthID_watch').innerHTML = imageIconHTML
		document.getElementById('CodeDepthID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.codeDepth.relativeValue === "constant"){
		document.getElementById('CodeDepthID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.dependencies.relativeValue === "increased"){
		document.getElementById('dependenciesID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.dependencies.relativeValue === "decreased"){
		document.getElementById('dependenciesID_watch').innerHTML = imageIconHTML
		document.getElementById('dependenciesID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.dependencies.relativeValue === "constant"){
		document.getElementById('dependenciesID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.devTestCodeCoverage.relativeValue === "increased"){
		document.getElementById('devTestCodeCoverageID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.devTestCodeCoverage.relativeValue === "decreased"){
		document.getElementById('devTestCodeCoverageID_watch').innerHTML = imageIconHTML
		document.getElementById('devTestCodeCoverageID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.devTestCodeCoverage.relativeValue === "constant"){
		document.getElementById('devTestCodeCoverageID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.duplicateCode.relativeValue === "increased"){
		document.getElementById('duplicateCodeID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.duplicateCode.relativeValue === "decreased"){
		document.getElementById('duplicateCodeID_watch').innerHTML = imageIconHTML
		document.getElementById('duplicateCodeID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.duplicateCode.relativeValue === "constant"){
		document.getElementById('duplicateCodeID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.PC_lint_info.relativeValue === "increased"){
		document.getElementById('PC_lintInfo_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.PC_lint_info.relativeValue === "decreased"){
		document.getElementById('PC_lintInfo_ID_watch').innerHTML = imageIconHTML
		document.getElementById('PC_lintInfo_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.PC_lint_info.relativeValue === "constant"){
		document.getElementById('PC_lintInfo_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.PC_lint_warnings.relativeValue === "increased"){
		document.getElementById('PC_lintwarn_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.PC_lint_warnings.relativeValue === "decreased"){
		document.getElementById('PC_lintwarn_ID_watch').innerHTML = imageIconHTML
		document.getElementById('PC_lintwarn_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.PC_lint_warnings.relativeValue === "constant"){
		document.getElementById('PC_lintwarn_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.PC_lint_errors.relativeValue === "increased"){
		document.getElementById('PC_linterror_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.PC_lint_errors.relativeValue === "decreased"){
		document.getElementById('PC_linterror_ID_watch').innerHTML = imageIconHTML
		document.getElementById('PC_linterror_ID_image').innerHTML = "</i><i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.PC_lint_errors.relativeValue === "constant"){
		document.getElementById('PC_linterror_ID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

	if(sampleData.LIB_itemCheck.relativeValue === "increased"){
		document.getElementById('lib_itemCheckID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf062;</i>"
	}
	if(sampleData.LIB_itemCheck.relativeValue === "decreased"){
		document.getElementById('lib_itemCheckID_watch').innerHTML = imageIconHTML
		document.getElementById('lib_itemCheckID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf063;</i>"
	}
	if(sampleData.LIB_itemCheck.relativeValue === "constant"){
		document.getElementById('lib_itemCheckID_image').innerHTML = "<i style='font-size:24px' class='fa'>&#xf061;</i>"
	}

}

    // this.filterTreeMapData = function() {
    //   console.log("hello...............");
    // }

  this.render = function (element) {
          $(element).append(topHtmlElement);
          $(element).append(jitTreeMapElement);
          $(element).append(htmlElement);

          setBlocks(currentSettings.blocks);
          createJitTreeMap();
      };

      this.onSettingsChanged = function (newSettings) {
          if (_.isNull(jitTreeMap)) {
              currentSettings = newSettings;
              return;
          }
          setBlocks(newSettings.blocks);
          console.log("onSetting Change block");
          var updateCalculate = false;

          if (currentSettings.title != newSettings.title ||
              currentSettings.type != newSettings.type ||
              currentSettings.value != newSettings.value ||
              currentSettings.decimal != newSettings.decimal ||
              currentSettings.comma != newSettings.comma ||
              currentSettings.metric_prefix != newSettings.metric_prefix ||
              currentSettings.animate != newSettings.animate ||
              currentSettings.units != newSettings.units ||
              currentSettings.value_fontcolor != newSettings.value_fontcolor ||
              currentSettings.gauge_upper_color != newSettings.gauge_upper_color ||
              currentSettings.gauge_mid_color != newSettings.gauge_mid_color ||
              currentSettings.gauge_lower_color != newSettings.gauge_lower_color ||
              currentSettings.gauge_color != newSettings.gauge_color ||
              currentSettings.gauge_width != newSettings.gauge_width ||
              currentSettings.show_minmax != newSettings.show_minmax ||
              currentSettings.min_value != newSettings.min_value ||
              currentSettings.max_value != newSettings.max_value) {
              updateCalculate = true;
              currentSettings = newSettings;
              createJitTreeMap();
              resizeTreemapChart();
          } else {
              currentSettings = newSettings;
              resizeTreemapChart();
          }
          return updateCalculate;
      };

      var oldValue;
      this.onCalculatedValueChanged = function (settingName, newValue) {

        console.log("Old val: " + oldValue);
        console.log("new val:" + newValue);

        if(oldValue != newValue) {
          if(newValue == "OPP 1" || newValue == "OPP 3" || newValue == "OPP 5" || newValue == "OPP 6" || newValue == "OPP 8")
              json = json1;
          else if(newValue == "OPP 2" || newValue == "OPP 4" || newValue == "OPP 6" || newValue == "OPP 8" || newValue == "OPP 10")
              json = json2;

              //createJitTreeMap();
              //hbChart.update();
              oldValue = newValue;

              jitTreeMap.loadJSON(json);
              jitTreeMap.refresh();
        }

     
          // if (!_.isNull(jitTreeMap))
          //     jitTreeMap.refresh(Number(newValue));
      };

      this.onDispose = function () {
          if (!_.isNull(jitTreeMap)) {
              //jitTreeMap.destroy();
              document.getElementById('infovis').parentElement.removeChild(document.getElementById('infovis'));
              ya.disposeAll(0,0);
              jitTreeMap = null;
          }
      };

      this.onSizeChanged = function () {
          if (!_.isNull(jitTreeMap))
          console.log('onSizeChanged');

          resizeTreemapChart();
          //jitTreeMap.resize();
      };

      this.getHeight = function () {
          return currentSettings.blocks;
      };

      this.onSettingsChanged(settings);

      /////////////////////////DRAWING DEPENDENCY ARROW/////////////////////////////////////

  var test_json = [
      {
          "source": "Syncpipes",
          "target": "EA_Extractor",
          "arrorColor": "red",
          "message": "dependency"
      }
  //,
      //{
      //    "source": "album-Elija Y Gane",
      //    "target": "album-Mer De Noms",
      //    "arrorColor": "green",
      //    "message": "message 2..."
      //},

  ];

  function drawDependency() {
      for(var dependency in test_json) {
        drawDependencyArrow(test_json[dependency].source, test_json[dependency].target, test_json[dependency].arrorColor, test_json[dependency].message);
      }
     // drawDependencyArrow("album-Mer De Noms", "album-10,000 Days", "red", "hello");
  }

  var ya;
  var ar;
//debugger

  var dependencyArrow=[];

  function drawDependencyArrow(sourceElement, targetElement, arrowColor, message) {

    disposeAll();
      console.log("Inside DrawDependencyArrow");
      var obj1 = document.getElementById(sourceElement);
      var obj1Pos = getPos(obj1)
      var obj2 = document.getElementById(targetElement);
      var obj2Pos = getPos(obj2)
      console.log("My Error ");
      ya = new yarrow.Yarrow();

      //debugger
      //ar.dispose(10, 10);

      ar = ya.arrow({
      x1: obj1Pos.x,
      y1: obj1Pos.y,
      x2: obj2Pos.x,
      y2: obj2Pos.y,
      text: "Dependency",
      arrowStyles: {
          'stroke': 'blue',
          'stroke-width': 2
      },
      textStyles: {
          'fill': 'blue',
          'font-size': 10,
          'font-weight': 'bold'
      }
      }).render();

      dependencyArrow.push(ar);
  }

  function disposeAll(){
    dependencyArrow.forEach(function(ele){
      ele.dispose();
    });
    dependencyArrow=[];
  }

  //Returns position of given element
  function getPos(element) {
        //console.log(element);
          var pos = element.getBoundingClientRect();
          return {
              x: pos.x + pos.width/2,
              y: pos.y + pos.height/2
          }
      }

  //////////////////////////////////////////////////////////////////////////////////////

  };

  freeboard.loadWidgetPlugin({
      type_name: 'JIT-TreeMap',
      display_name: $.i18n.t('JIT Tree Map'),
      description: $.i18n.t('plugins_wd.gauge.description'),
      external_scripts : [
          'https://d3js.org/d3-selection.v0.7.min.js',
          'js/jit/jit.js',
          'https://raw.githack.com/krispo/svg-path-utils/v0.0.3/build/svg-path-utils.min.js',
          'js/yarrow/yarrow.min.js'
      ],
      settings: [
          {
              name: 'title',
              display_name: $.i18n.t('Tree Map'),
              validate: 'optional,maxSize[100]',
              type: 'text',
              description: $.i18n.t('plugins_wd.gauge.title_desc')
          },
          {
              name: 'blocks',
              display_name: $.i18n.t('plugins_wd.gauge.blocks'),
              validate: 'required,custom[integer],min[4],max[10]',
              type: 'number',
              style: 'width:100px',
              default_value: 4,
              description: $.i18n.t('plugins_wd.gauge.blocks_desc')
          },
          {
              name: 'value',
              display_name: $.i18n.t('plugins_wd.gauge.value'),
              validate: 'optional,maxSize[2000]',
              type: 'calculated',
              description: $.i18n.t('plugins_wd.gauge.value_desc')
          },
          {
            name: 'treeMapSelectedData',
            display_name: 'Selected Data',
            type: 'text',
            description: 'Store the current chart data into specified session variable.'
          }
      ],
      newInstance: function (settings, newInstanceCallback) {
          newInstanceCallback(new jitTreeMapWidget(settings));
      }
  });
}());
