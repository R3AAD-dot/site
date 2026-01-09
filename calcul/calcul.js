function Addition(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    s=a+b
    document.getElementById("s").value=s
}

function soustraction(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    s=a-b
    document.getElementById("s").value=s
}


function multiplication(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    s=a*b
    document.getElementById("s").value=s
}

function division(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    s=a/b
    document.getElementById("s").value=s
}

function puissance(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    s=Math.pow(a,b)
    document.getElementById("s").value=s
}

function max(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    if (a<b)
        max=b
    else
        max=a
    document.getElementById("s").value=max
}

function min(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    if(a<b)
        min=a
    else
        min=b
    document.getElementById("s").value=min
}