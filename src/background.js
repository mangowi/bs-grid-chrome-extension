chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, { file: "libs/jquery.js" }, function() {
		chrome.tabs.insertCSS(null, { file: "src/grid.css" });
		chrome.tabs.executeScript(null, {file: "src/content.js"});
	});
});
