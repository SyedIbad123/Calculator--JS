var result = document.getElementById("result").value;

function getNum(num){
    document.getElementById("result").value += num;
}

function deleteValue(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0,result.length-1)
}

function clearValue(){
    document.getElementById("result").value = ""
}

function getResults(){
    // console.log(eval(document.getElementById('result').value))
    // document.getElementById('result').value = eval(document.getElementById('result').value)
    document.getElementById('result').value = eval(document.getElementById('result').value)

}
