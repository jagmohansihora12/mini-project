let stopwatchInterval;
let elapsedTime = 0;

// Function to start the stopwatch
function startStopwatch(tabId) {
    stopwatchInterval = setInterval(() => {
        elapsedTime += 1000; // Increment elapsed time by 1000 ms (1 second)
        const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);
        
        chrome.tabs.sendMessage(tabId, {
            type: "UPDATE_STOPWATCH",
            time: `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` // Format time
        });
    }, 1000); // Update every second
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

// Listener for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        // Check if the URL is for a stopwatch
        if (tab.url.includes("your-stopwatch-url")) {
            startStopwatch(tabId); // Start the stopwatch when the specific URL is loaded
        } else {
            stopStopwatch(); // Stop the stopwatch if navigating away
        }
    }
});
