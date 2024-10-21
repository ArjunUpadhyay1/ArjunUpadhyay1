const iframe = document.getElementById('browser-frame');
let historyStack = [];
let currentUrlIndex = -1;

function navigateToUrl(url) {
    if (url) {
        let formattedUrl = url;

        // Add 'http://' if the URL doesn't start with 'http://' or 'https://'
        if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
            formattedUrl = 'http://' + formattedUrl;
        }

        // Update iframe source
        iframe.src = formattedUrl;

        // Update history
        if (currentUrlIndex < 0 || historyStack[currentUrlIndex] !== formattedUrl) {
            historyStack.push(formattedUrl);
            currentUrlIndex++;
        }
    }
}

document.getElementById('search-btn').addEventListener('click', function () {
    const urlInput = document.getElementById('url-input').value;

    if (urlInput.includes(' ')) {
        // Perform a search on arjun.com.np if the input looks like a search query
        const searchUrl = `https://arjun.com.np/search?q=${encodeURIComponent(urlInput)}`;
        navigateToUrl(searchUrl);
    } else {
        navigateToUrl(urlInput);
    }
});

document.getElementById('refresh-btn').addEventListener('click', function () {
    // Refresh current page
    iframe.src = iframe.src;
});

document.getElementById('back-btn').addEventListener('click', function () {
    // Go to the previous page
    if (currentUrlIndex > 0) {
        currentUrlIndex--;
        iframe.src = historyStack[currentUrlIndex];
    }
});

document.getElementById('forward-btn').addEventListener('click', function () {
    // Go to the next page
    if (currentUrlIndex < historyStack.length - 1) {
        currentUrlIndex++;
        iframe.src = historyStack[currentUrlIndex];
    }
});

document.getElementById('settings-btn').addEventListener('click', function () {
    alert('Settings panel is not yet implemented.');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'r') {
        // Ctrl + R: Refresh the page
        iframe.src = iframe.src;
    }

    if (e.altKey && e.key === 's') {
        // Alt + S: Open settings
        alert('Settings panel is not yet implemented.');
    }
    
    if (e.key === 'Enter') {
        // Enter: Trigger search
        document.getElementById('search-btn').click();
    }
});

