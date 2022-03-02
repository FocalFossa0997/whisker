//make sure that the user doesn't close the page by accident.
    function setConfirmUnload(on) {
        window.onbeforeunload = (on) ? unloadMessage : null;
        }

        function unloadMessage() {
        return "Are you sure you want to leave this page";
        }
        
    setConfirmUnload(true);

    //Save file function
    function save(){
        document.getElementById("savefilebutton").disabled = true;
        document.getElementById("savefilebutton").innerHTML = "Save <img src='load-pie.gif' width=20/>";
        if(document.getElementById("fname").value == ""){
        const myFile = new File([document.getElementById("txtArea").value], "file.txt");
        function downloadFile (file) {
            const objectURL = URL.createObjectURL(file);
            var link = document.createElement("a");
            link.download = file.name;
            link.href = objectURL;
            link.click();
            URL.revokeObjectURL(objectURL);
        }

           downloadFile(myFile);
        } else {
        const myFile = new File([document.getElementById("txtArea").value], document.getElementById("fname").value);
        function downloadFile (file) {
            const objectURL = URL.createObjectURL(file);
            var link = document.createElement("a");
            link.download = file.name;
            link.href = objectURL;
            link.click();
            URL.revokeObjectURL(objectURL);
        }

        downloadFile(myFile);
        }
        document.getElementById("savefilebutton").removeAttribute("disabled");
        document.getElementById("savefilebutton").innerHTML = "Save"; 
        }

        //Load file function
        function load(){
        document.getElementById("loadbutton").disabled = true;
        document.getElementById("loadbutton").innerHTML = "Load <img src='load-pie.gif' width=20/>";
        var input = document.createElement('input');
        input.type = 'file';

        input.onchange = e => { 

           // getting a hold of the file reference
           var file = e.target.files[0]; 

           // setting up the reader
           var reader = new FileReader();
           reader.readAsText(file,'UTF-8');

           // here we tell the reader what to do when it's done reading...
           reader.onload = readerEvent => {
              var content = readerEvent.target.result; // this is the content!
              document.getElementById("txtArea").value = content;
           }

        }

        input.click();
        document.getElementById("loadbutton").removeAttribute("disabled");
        document.getElementById("loadbutton").innerHTML = "Load";
        }
//Spell checking function
//PLEASE NOTE: THIS FUNCTON IS CURRENTLY BROKEN, USING IT WILL NOT WORK!!!!!!!!!!!!!!!!!!!!!
function togglespchk(){
    alert("The spell checker is currently broken in this version.\nA patch will be made in a future version to fix this problem.")
    document.getElementById("spchk-toggle").checked = true;
    /*if(document.getElementById("spchk-toggle").value == true){
        document.getElementById("spchk-toggle").clecked = false;
        document.getElementById("txtArea").spellcheck = false;
    } else if(document.getElementById("spchk-toggle").value == false){
        document.getElementById("spchk-toggle").checked = true;
        document.getElementById("txtArea").spellcheck = true;
    }*/
}

//About app function
function aboutwhisker(){
    alert("You are running Whisker 1.0\nYou are running the Electron version\nWhisker is created by: Mr.Weston (c)2022\nWhisker is created using: html, css, js, json")
}