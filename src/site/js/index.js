$(function () {

    let buttonHtml = '<div data-open="codeRevealModal" class="tiny button code-reveal-button">Show Code</div>';

    function handleCodeRevealHoverIn() {
        $(this).append(buttonHtml);
    }

    function handleCodeRevealHoverOut() {
        $(".code-reveal-button").remove();
    }

    function handleCodeRevealClick() {
        $(".code-reveal-button").remove();
        var componentHtml = $(this).html();
        var escapedHtml = escapeHtml(componentHtml);

        var origLines = escapedHtml.split(/\n/);

        // Remove empty lines at beginning
        while (origLines.length > 0) {
            if (origLines[0].trim()) {
                break;
            }
            else {
                origLines.shift();
            }
        }

        // Remove empty lines at end and all <!--SHOW-CODE SHOW-CODE--> lines
        var nonWhitespaceReached = false;
        for (var i = origLines.length - 1; i >= 0; i--) {
            var currLine = origLines[i];
            if (currLine.trim()) {
                nonWhitespaceReached = true;
                if (currLine.indexOf("&lt;!--SHOW-CODE") >= 0 || currLine.indexOf("SHOW-CODE--&gt;") >= 0) {
                    origLines.splice(i, 1);
                }
            }
            else if (!nonWhitespaceReached) {
                origLines.splice(i, 1);
            }
        }

        // Determine the shortest indentation (might not be first line)
        var shortestIndentation = Infinity;
        for (var index in origLines) {
            var currLine = origLines[index];
            var matchArray = currLine.match(/^(\s*).*$/);
            if (matchArray) {
                shortestIndentation = Math.min(shortestIndentation, matchArray[1].length);
            }
            else {
                shortestIndentation = 0;
                break;
            }
        }

        var formattedLines = origLines;

        // Trim the lines if necessary
        if (shortestIndentation > 0 && shortestIndentation < Infinity) {
            for (var index in origLines) {
                var currLine = origLines[index];
                var lineLen = currLine.length;
                if (lineLen > shortestIndentation) {
                    formattedLines[index] = currLine.substring(shortestIndentation);
                }
            }
        }

        var formattedHtml = formattedLines.join("\n");

        $("#codeRevealHtmlTarget").text(formattedHtml);
    }

    let entities = {
        '&': '&amp;',
        '×': '&times;',
        '»': '&raquo;',
        '«': '&laquo;'
    };

    function escapeChar(tag) {
        return entities[tag] || tag;
    }

    function escapeHtml(htmlString) {
        return htmlString.replace(/[&<>×»«]/g, escapeChar);
    }

    $('.zf-code-reveal').hover(handleCodeRevealHoverIn, handleCodeRevealHoverOut);
    $('.zf-code-reveal').click(handleCodeRevealClick);
});