const i = document.getElementById("inp");
const n = document.getElementById("in");
const b = document.getElementById("b");
const h = document.getElementById("i");
const s = document.getElementById("ds");
const d = document.getElementById("inpsr");
s.onclick = function search(){
    s.href = `https://www.google.com/search?q=${d.value}&rlz=1C1YTUH_arEG1037EG1037&oq=${d.value}&aqs=chrome..69i57j0i67i131i433i512i650j0i67i512i650j46i67i131i433i512i650j0i67i131i433i512i650j0i512j0i131i433i512j0i512j0i3j0i271.1473j0j15&sourceid=chrome&ie=UTF-8`
    document.getElementById("inpsr").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
}

function gh(){
    if(!i.value){
        alert("enter url")
        return;
    }
    if(!n.value){
        alert("enter name")
        return;
    }
    document.getElementById("ff").innerHTML += `<p><a href="${i.value}" target="blank"><button style="background-color:${h.value}">${n.value}</button></a></p>`;
}
