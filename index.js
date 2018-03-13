$(function() {
  let apiKey = "0c5499f22c1c4ae5bcd377282cbb8824";
  let url = "https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=" + apiKey;
 $.get(url, function(data) {
  console.log(data);
     $("#line1").empty();
     for (let i=0; i<3; i++) {
       let news = data.articles[i];
       let html = '<div class="col-4">';
     html = html + '<div class="card">';
     html = html + '<a id = "link1" href="' +news.url +'">'
     html = html + '<img class="card-img-top" src="' + news.urlToImage + '">';
     html = html + '<div class="card-body">';
     html = html + '<h4 class="card-title">' + news.title + '</h4>';
     html = html + '</a>'
     html = html + '<p class="card-text">' + news.description + '</p>';
     html = html + '</div></div></div>';
     $("#line1").append(html);
   }
   $("#line1").fadeIn(2000);
   });
 });

 $(function() {
   let apiKey = "0c5499f22c1c4ae5bcd377282cbb8824";
   let url = "https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=" + apiKey;
   $.get(url, function(data) {
    console.log(data);
       $("#line2").empty();
       for (let i=0; i<3; i++) {
         let news = data.articles[i];
         let html = '<div class="col-4">';
       html = html + '<div class="card">';
       html = html + '<a id = "link1" href="' +news.url +'">'
       html = html + '<img class="card-img-top" src="' + news.urlToImage + '">';
       html = html + '<div class="card-body">';
       html = html + '<h4 class="card-title">' + news.title + '</h4>';
       html = html + '</a>'
       html = html + '<p class="card-text">' + news.description + '</p>';
       html = html + '</div></div></div>';
       $("#line2").append(html);
     }
     $("#line2").fadeIn(2000);
     });
   });

   $(function() {
     let apiKey = "0c5499f22c1c4ae5bcd377282cbb8824";
     let url = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=" + apiKey;
     $.get(url, function(data) {
      console.log(data);
         $("#line3").empty();
         for (let i=0; i<3; i++) {
           let news = data.articles[i];
           let html = '<div class="col-4">';
         html = html + '<div class="card">';
         html = html + '<a id = "link1" href="' +news.url +'">'
         html = html + '<img class="card-img-top" src="' + news.urlToImage + '">';
         html = html + '<div class="card-body">';
         html = html + '<h4 class="card-title">' + news.title + '</h4>';
         html = html + '</a>'
         html = html + '<p class="card-text">' + news.description + '</p>';
         html = html + '</div></div></div>';
         $("#line3").append(html);
       }
       $("#line3").fadeIn(2000);
       });
     });

     $(function() {
       let apiKey = "0c5499f22c1c4ae5bcd377282cbb8824";
       let url = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=" + apiKey;
       $.get(url, function(data) {
        console.log(data);
           $("#line4").empty();
           for (let i=0; i<3; i++) {
             let news = data.articles[i];
             let html = '<div class="col-4">';
           html = html + '<div class="card">';
           html = html + '<a id = "link1" href="' +news.url +'">'
           html = html + '<img class="card-img-top" src="' + news.urlToImage + '">';
           html = html + '<div class="card-body">';
           html = html + '<h4 class="card-title">' + news.title + '</h4>';
           html = html + '</a>'
           html = html + '<p class="card-text">' + news.description + '</p>';
           html = html + '</div></div></div>';
           $("#line4").append(html);
         }
         $("#line4").fadeIn(2000);
         });
       });

     $(function() {
       let apiKey = "0c5499f22c1c4ae5bcd377282cbb8824";
       let url = "https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=" + apiKey;
       $.get(url, function(data) {
        console.log(data);
           $("#line5").empty();
           for (let i=0; i<3; i++) {
             let news = data.articles[i];
             let html = '<div class="col-4">';
           html = html + '<div class="card">';
           html = html + '<a id = "link1" href="' +news.url +'">'
           html = html + '<img class="card-img-top" src="' + news.urlToImage + '">';
           html = html + '<div class="card-body">';
           html = html + '<h4 class="card-title">' + news.title + '</h4>';
           html = html + '</a>'
           html = html + '<p class="card-text">' + news.description + '</p>';
           html = html + '</div></div></div>';
           $("#line5").append(html);
         }
         $("#line5").fadeIn(2000);
         });
       });

       let updateWidget = function(data) {
       console.log("Got weather data: ", data)
         jQuery("#weather").html("<h2 class=lead>"+data.name+", "+data.main.temp.toFixed(0)+"°F"+"</h2>")
       }
       let getWeather = function(pos) {
         let position = pos.coords
         // update latitude with the value returned from the getLocation function
         let latitude = position.latitude.toFixed(4)
         // update longitude with the value returned from the getLocation function
         let longitude = position.longitude.toFixed(4)
         let apiKey = 'd03946f17daef3554b530763e5ce0526';
         let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
         weatherServiceURL += 'lat=' + latitude
         weatherServiceURL += '&lon=' + longitude
         weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

       fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
       }

       let getLocation = function(event) {
         navigator.geolocation.getCurrentPosition(getWeather);
       }
     $(document).ready(getLocation);

       let convertToJSON = function(rawData) { return rawData.json(); }
       let displayError = function(error) { console.debug(error); }
