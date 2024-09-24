function call(){
    const ab = document.getElementById("ab");
    const input = document.getElementById("input").value;
    const bf = document.getElementById("nameNU").value;
    const titlePG = document.getElementById("title");
    console.log(bf + ": " + input);
    ab.href = "tel:" + input;
};
function show(){
    const f = document.getElementById("inpURL");
    const g = document.getElementById("hide");
    const go = document.getElementById("go");
    f.style.display = "block";
    go.style.display = "block";
    g.style.display = "none";
    go.onclick = function(){
    const bi = document.getElementById("aurl");
    const fgh = document.getElementById("inpURL").value;
    if(!fgh){
        alert("please enter URL");
    }
    bi.href = "https://www." + fgh + ".com";
}
}