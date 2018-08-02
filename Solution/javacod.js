var v= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"]
var words = [];
      words[0] = "cat";
      words[1] = "escapology";
      words[2] = "brightwork";
      words[3] = "verkrampte";
      words[4] = "lamp";
      words[5] = "gun";
      words[6] = "grandchild";
      words[7] = "newfangled";
      words[8] = "africa";
      words[9] = "mythologer";
      words[10] = "pluperfect";
      words[11] = "jellygraph";
      words[12] = "quickthorn";
      words[13] = "rottweiler";
      words[14] = "technician";
      words[15] = "house";
      words[16] = "middlebrow";
      words[17] = "jackhammer";
      words[18] = "triphthong";
      words[19] = "wunderkind";
      words[20] = "dog";
      words[21] = "jabberwock";
      words[22] = "witchcraft";
      words[23] = "pawnbroker";
      words[24] = "thumbprint";
      words[25] = "motorcycle";
      words[26] = "cryptogram";
      words[27] = "bottle";
      words[28] = "bankruptcy";
var randvec=[];
var lineword=[];
var rand;
function randomword()
{
  document.getElementById("button1").style.display="none";
  rand = words[Math.floor(Math.random() * words.length)];
  console.log(rand);
  //document.getElementById("word").innerHTML=rand;
  randvec = rand.split("");
  var i;
  for ( i=0;i<randvec.length;i++)
  {
    lineword[i]="_";
  }
  document.getElementById("word").innerHTML=lineword.join(" ");

}
lineword.join('');
var img=0;
var aux=0;
var ok=0;
var dead=0;
var contor=0;
function checkletter(a,id1)
{
  var i;
  ok=0;
  for(i=0;i<randvec.length;i++)
  {
    if(randvec[i]==a)
      { contor++;
        ok=1;
        lineword[i]=a;
        document.getElementById("word").innerHTML=lineword.join(" ");
      }
  }
  if(ok==1){
      document.getElementById(id1.id).disabled=true;
      if(contor==randvec.length)
      {
        document.getElementById("pozafinal").src="50967989-congratulations-stamp.jpg";
        document.getElementById("randuri").style.display="none";
        document.getElementById("word").innerHTML=rand;
        document.getElementById("PlayAgain").style.display="block";
      }
  }
  else {
    document.getElementById(id1.id).disabled=true;
    switch(aux) {
      case 0:
            document.getElementById('poza').src="Hangman-0.png";

           break;
       case 1:
           document.getElementById('poza').src="Hangman-1.png";

           break;
       case 2:
            document.getElementById('poza').src="Hangman-2.png";

           break;
       case 3:
            document.getElementById('poza').src="Hangman-3.png";

           break;
       case 4:
          document.getElementById('poza').src="Hangman-4.png";

           break;
       case 5:
            document.getElementById('poza').src="Hangman-5.png";

           break;
       case 6:
            document.getElementById('poza').src="Hangman-6.png";
            dead=1;
            break;
    }
    aux++;
    if(dead==1)
    {
      document.getElementById("pozafinal").src="game-over.jpg";
      document.getElementById("randuri").style.display="none";
      document.getElementById("word").innerHTML=rand;
      document.getElementById("PlayAgain").style.display="block";
    }

  }
}
function refresh()
{
      location.reload();
}
