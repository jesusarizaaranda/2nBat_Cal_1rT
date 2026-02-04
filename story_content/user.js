function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vuZGHF1gGr":
        Script1();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var data= day + "/" + month + "/" +year
player.SetVar("DateValue", data);
}

