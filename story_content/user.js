function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6F7Dpz4jbaF":
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

