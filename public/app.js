var app = function(){
  addCat ("Nutmeg", "Caviar", "https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjf4dGJ7K3PAhWB6xQKHfFtAaoQjRwIBw&url=https%3A%2F%2Fwww.zsl.org%2Fzsl-whipsnade-zoo%2Fexhibits%2Ftigers&bvm=bv.133700528,d.ZGg&psig=AFQjCNECsks3Sh6CZV-Zolrtt7pJ8gfDaA&ust=1475007171176349");
}

var addCat = function(name, food, image)
  var catUl = createUlCat();
  var name = createLiName(name);
  var faveFood = createLiFood(food);
  var catImage = createCatImage(width,image);
  var cats = document.querySelector("#cats");
  appendCat(cats, catUL, liName, liFavouriteFood, catImage);

  // Create ul
  var createUlCat = function(){
    cat = document.createElement("ul");
    cat.className.add = "cat";
    return catUl;
  }

  // Create li
  var createLiName = function(name){
    var liName = document.createElement("li");
    liName.innerText = faveFood;
    return liName;
  }

  var createLiFavouriteFood = function(favouriteFood){
    var liFavouriteFood = document.createElement("li");
    liFavouriteFood.innerText = favouriteFood;
    return liFavouriteFood;
  }


  // image
  var createCatImage = function(width, image){
    var catImage = document.createElement('img');
    catImage.width = width;
    catImage.src = image;
    return catImage;
  }

  var appendCat =  function(cats, catUl, liName, createLiFood, catImage){
    catUl.appendChild(liName);
    catUl.appendChild(createLiFood);
    cats.appendChild(catUl);
  }




window.onload = app