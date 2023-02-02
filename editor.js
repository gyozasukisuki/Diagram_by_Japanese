let editor = document.getElementById("editor");

// 最初にdivを出現させるためのEnter
let firstEnterFinished = false;

editor.addEventListener("input", function(event){
    // エディターに入力が行われたとき
    if(!firstEnterFinished) return;

    
    for(let i=0; i<editor.children.length; i++){
        console.log(editor.children[i].textContent);
    }
})

editor.addEventListener("keydown", function(event){
    if(!firstEnterFinished && event.key != "Enter"){
        event.preventDefault();
        return;
    }
    if(!firstEnterFinished && event.key === "Enter") firstEnterFinished = true;
});