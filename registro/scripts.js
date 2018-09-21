function verifPass() {
    if (document.getElementById("pass1").value == "" || document.getElementById("pass2").value == "") {
        document.getElementById("sig").style.visibility="hidden";
        document.getElementById("matches").style.visibility="hidden";
    }
    else {
        if (document.getElementById("pass1").value == document.getElementById("pass2").value) {
            document.getElementById("sig").style.visibility="visible";
            document.getElementById("matches").style.visibility="hidden";
            return true;
        }
        else {
            document.getElementById("sig").style.visibility="hidden";
            document.getElementById("matches").style.visibility="visible";
        }
    }
    return false;
}

function segundoPaso() {
    if (verifPass()) {
        document.getElementById("paso1").style.display="none";
        document.getElementById("paso2").style.display="block";
        document.getElementById("celular").focus();
    }
    else {
        document.getElementById("matches").style.visibility="visible";
    }
    return false;
}

function primerPaso() {
    document.getElementById("paso2").style.display="none";
    document.getElementById("paso1").style.display="block";
    document.getElementById("username").focus();
    return false;
}

