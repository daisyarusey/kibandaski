//Business Logic
// var price = function(total, quantity) {
//   return (foods * quantity) + 50
// };

//Addition of Checkboxes to give total food price
var foodPrice = function checkTotal() {
  document.orderform.total.value = '';
  var sum = 0;
  for (i = 0; i < document.orderform.ourmenu.length; i++) {
    if (document.orderform.ourmenu[i].checked) {
      sum = sum + parseInt(document.orderform.ourmenu[i].value);
    }
  }
  document.orderform.total.value = sum;
}

// User Interface Logic
var foodList=[];
$(".sum-btn").hide()

//
$("#order").submit(function() {
  event.preventDefault()

  var name = document.forms["orderform"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  var phone = document.forms["orderform"]["phone"].value;
  if (phone == "") {
    alert("phone must be filled out");
    return false;
  }
  var foods = parseInt(document.getElementById("total").value);
  if (foods == "") {
    alert("Foods must be filled out");
    return false;
  }
  var address = document.forms["orderform"]["address"].value;
  if (address == "") {
    alert("Address must be filled out");
    return false;
  }
  var quantity = parseInt(document.forms["orderform"]["quantity"].value);
  if (quantity == "") {
    alert("Address must be filled out");
    return false;
  }
  var price = function(total, quantity) {
    return (foods * quantity) + 50
  };
  if($("#chapatiBeans").prop("checked") == true){
    foodList.push("Chapati & Beans")
  }
  if($("#ugaliOmena").prop("checked") == true){
    foodList.push("Ugali & Omena")
  }
  if($("#riceBeans").prop("checked") == true){
    foodList.push("Rice & Beans")
  }
  if($("#pilau").prop("checked") == true){
    foodList.push("Pilau")
  }
  if($("#chapatiBeefStew").prop("checked") == true){
    foodList.push("Chapati & Beef Stew")
  }
  if($("#ugaliBeefStew").prop("checked") == true){
    foodList.push("Ugali & Beef Stew")
  }
  if($("#riceBeefStew").prop("checked") == true){
    foodList.push("Rice & Beef Stew")
  }
  if($("#githeri").prop("checked") == true){
    foodList.push("Githeri")
  }
  if($("#chapatiNdengu").prop("checked") == true){
    foodList.push("Chapati & Ndengu")
  }
  if($("#sukuma").prop("checked") == true){
    foodList.push("Sukuma")
  }
  if($("#cabbage").prop("checked") == true){
    foodList.push("Cabbage")
  }
  if($("#kachumbari").prop("checked") == true){
    foodList.push("Kachumbari")
  }
  if($("#soup").prop("checked") == true){
    foodList.push("Soup")
  }
  if($("#avocado").prop("checked") == true){
    foodList.push("Avocado")
  }
// // console.log(foodList)
  var result = price(total, quantity);

  document.getElementById("custname").innerHTML = ("Name: ") + name;

  for (var i = 0; i < foodList.length; i++) {
        $("#foodList").append(
          "<li>"+foodList[i]+"</li>"
        )
  }
//   // $("#address1").text(address)
//
  document.getElementById("address1").innerHTML = ("Address: ") + address;
  document.getElementById("phone1").innerHTML = ("Phone: ") + phone;
  document.getElementById("output").innerHTML = ("Your order Total is = ") + result + (" KES");
  alert("Your total order is " + result + " KES." + " Thank You for Ordering from KIBANDASKI! Your Order is on it's way!");
  $("form#checkout").css('data-dismiss','modal');
  $("#checkout").hide()
  $(".sum-btn").show()

  $(".sum-btn").click(function(){
    $("#summary").show();
    $("body, html").animate({
      scrollTop: $("#summary").offset().top
    },1000)
  })
})
