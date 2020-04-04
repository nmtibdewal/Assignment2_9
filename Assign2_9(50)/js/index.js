var id;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    id = ev.target.id;
  }
  
  function drop(ev) {
    ev.preventDefault();
    if(document.getElementById(ev.target.id).innerHTML == null);
    {
      ev.target.append(document.getElementById(id));
    }
    // document.getElementById(ev.target.id).innerHTML = document.getElementById(id).innerHTML;
  }