
setInterval(() => {
    // console.log(getTimeleft());
    document.getElementById('fbtime').innerHTML = getTimeleft();
}, 5000);
function getTimeleft(){
    
    geturl();
     
}


function geturl() {
    
    chrome.tabs.getSelected(null, function(tab) {
       
        tabUrl = tab.url;
        tabUrl = tabUrl.split(".");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var rs = this.response;
                console.log(rs);
                if(rs == "exit")
                {
                    window.close();
                }
                
            // Typical action to be performed when the document is ready:
            // document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };

        // tabUrl = tabUrl.split(".");
        var t = tabUrl[1];
        console.log(t);
        
        var url ="http://127.0.0.1:3000/insert/"+t+"";
        console.log(url);
        
        xhttp.open("GET", url, true);
        xhttp.send();
            
    });
    
}