const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  document.body.addEventListener('keydown', function(button){
    let index = 0;
    let input = button.key;
    if (input === codes[index]){
      index++;
      if(index === codes.length){
        alert('CONGRATS!');
        index = 0;
      }
    } else {index = 0}
  })
}
