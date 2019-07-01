document.getElementById('output').style.visibility = 'hidden';

document.getElementById('kbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let kbs = e.target.value;
    document.getElementById('mbOutput').innerHTML = kbs/1024;
    document.getElementById('gbOutput').innerHTML = (kbs/1024)/1024;
    document.getElementById('tbOutput').innerHTML = (kbs/1024)/1024/1024;
});