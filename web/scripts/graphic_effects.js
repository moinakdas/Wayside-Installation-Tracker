$(document).ready(function() {
    $('[id^="option"]').hover(function() {
        var id = $(this).attr('id').replace('option', ''); // Extract the number from the id
        var highlightColor = $(this).data('highlight-color'); // Get the highlight color from data attribute
        $('#entryText' + id).stop().animate({ color: highlightColor }, 200);
        $('#icon' + id).stop().animate({ opacity: 1 }, 200);
    }, function() {
        var id = $(this).attr('id').replace('option', ''); // Extract the number from the id
        $('#entryText' + id).stop().animate({ color: '#A7ADB2' }, 200);
        $('#icon' + id).stop().animate({ opacity: 0 }, 200);
    });
});