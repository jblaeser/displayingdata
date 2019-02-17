var speeches = [
  {
    author : "Winston Churchill" ,
    year : 1940,
    bce : false
  },
  {
    author: "Ghandi",
    year: 1942,
    bce : false
  },
  {
    author: "Demosthenes",
    year : 342,
    bce : true
  }
];

var difference = [speeches[1].year - speeches[0].year];


console.log("Ghandi's speech and Churchill's speech are " + difference + " years apart.")

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on the page.")
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + speeches[0].author + " in " + speeches[0].year + ". It is " + speeches[0].bce + " that this year is B.C.E.")
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + speeches[1].author + " in " + speeches[1].year + ". It is " + speeches[1].bce + " that this year is B.C.E.")
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + speeches[2].author + " in " + speeches[2].year + ". It is " + speeches[2].bce + " that this year is B.C.E.")
});