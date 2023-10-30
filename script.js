// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable F12 and Ctrl+Shift+I to open developer tools
window.addEventListener('keydown', function (e) {
    if ((e.key === 'F12' && e.ctrlKey) || (e.key === 'I' && e.ctrlKey && e.shiftKey)) {
        e.preventDefault();
    }
});
