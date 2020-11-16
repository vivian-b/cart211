let name = document.querySelector('#myText').value;
const displaymsg = document.querySelector('#display');
const checker = document.querySelector('#check');

checker.onclick = function(){

  function myPassFunction(){
    name = document.querySelector('#myText').value;
    if (name === 'Vee') {
      displaymsg.textContent = 'welcome' + name;
    } else if (name === 'Bee') {
      displaymsg.textContent = 'bzz?' + name;
    }
    else {
      displaymsg.textContent = 'who?' + name;
    }
  }
}
