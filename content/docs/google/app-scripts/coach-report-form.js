// This function is attached to the SPREADSHEET targeted by the coach report form. 
// See runbook documentation for more. 
function appendToCoachReport(formSubmitEvent) {
    // formSubmitEvent: https://developers.google.com/apps-script/guides/triggers/events 
    // Load coach report spreadsheet 
    let ss = SpreadsheetApp.getActive(); 
    if (ss === null) {
      throw new Error("Unable to get active spreadsheet."); 
    }
    
    // Yes, The values are in an array in the named values object 
    let ensembleName = formSubmitEvent.namedValues['Ensemble Name'][0];  
  
    // Check to see if sheet for ensemble exists already 
    if (ss.getSheetByName(ensembleName) === null) { 
      let inserted = ss.insertSheet(ensembleName, 0);
      // Add headers 
      inserted.appendRow(["Date", "Coach", "Report"]); 
      // write pending changes  
      SpreadsheetApp.flush(); 
    }
  
    // Get sheet we are going to write to. 
    let ensembleSheet = ss.getSheetByName(ensembleName); 
    if (ensembleSheet === null) {
      throw new Error("Ensemble sheet is still null."); 
    }
    let now = new Date(); 
  
    // Append row to correct sheet. 
    ensembleSheet.appendRow([
      formSubmitEvent.namedValues['Date of Rehearsal'][0], 
      formSubmitEvent.namedValues['Coach Name'][0], 
      formSubmitEvent.namedValues['Report Text'][0]    
    ]); 
  
    // Flush one more time just to be sure. 
    SpreadsheetApp.flush()
  }
  
  
  
  
  
  
  