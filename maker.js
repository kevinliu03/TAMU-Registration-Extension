(() => {
    chrome.runtime.onMessage.addListener((obj, sender) => {
        const {type, something} = obj;
        if (type == "new") {
            findNewClass();
        }
    })

    const findNewClass = () => {
        try {
            rowLength = document.getElementsByClassName("css-1cycab9-tableCss")[0].getElementsByTagName("table")[0].rows.length
            for (var i = 4; i < rowLength; i=i+4) {
                var score = document.createElement("a");
                var text = document.createElement("text");
                var list = document.getElementsByClassName("css-1cycab9-tableCss")[0].getElementsByTagName("table")[0].rows[i].cells[0].firstChild.firstChild.firstChild.firstChild.textContent.replace(",", "").split(" ")
                if ((list[2] + " " + list[1]) != "Assigned Not") {
                    score.href = "https://www.ratemyprofessors.com/search/teachers?query=" + list[2] + "%20" + list[1] + "&sid=U2Nob29sLTEwMDM=";
                    score.textContent = "[Rate my professor]";
                    text.textContent = "  ";
                    text.append(score);
                } else {
                    text.textContent = "";
                }
                console.log(list[2] + " " + list[1])
                document.getElementsByClassName("css-1cycab9-tableCss")[0].getElementsByTagName("table")[0].rows[i].cells[0].firstChild.firstChild.firstChild.firstChild.appendChild(text);
            }  
        } catch (error) {
            setTimeout(function()
            {
                findNewClass();
        
            }, 100);  
        }
    }
})();