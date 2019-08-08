  //Display different images for about1


var rand_int = Math.floor(Math.random() * 3);


var r_image = [
	"img/variety/1.png",
	"img/variety/2.png",
	"img/variety/3.png",

],

im = document.getElementById("my_image");
im.src = r_image[rand_int];




  //Display different images for about2

var r_image1 = [
	"img/variety/4.png",
	"img/variety/5.png",
	"img/variety/6.png",

],

im = document.getElementById("my_image2");
im.src = r_image1[rand_int];



  //Display different images for about3

var r_image2 = [
	"img/variety/41.jpg",
	"img/variety/42.jpg",
	"img/variety/487.jpg",

],

im = document.getElementById("my_image3");
im.src = r_image2[rand_int];
