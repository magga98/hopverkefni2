/*try {
  result = fetch("videos.json")
  console.log(result)
} catch (e) {
  console.error("Villa við að sækja", e)
  return null;


fetch("videos.json")
  .then(response => response.json())
  .then(function(data){
    appendData(data);
  })
  .then(data => {
    console.log(data)
    const jsonData = data;
    var ul = document.querySelector('ul');

    for (var index in jsonData.options) {
      var li = document.createElement('li')
      ul.appendChild(li);
      li.innerHTML = index + ": " + jsonData.options[index];
    }
  });
}*/
//
fetch('videos.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div")
    div.innerHTML = data[i].title;
    var div = document.createElement("description")
    div.innerHTML = data[i].description;
    var div = document.createElement("created")
    div.innerHTML = data[i].created;
    var div = document.createElement("duration")
    div.innerHTML = data[i].duration;
    var div = document.createElement("poster")
    div.innerHTML = data[i].poster;
    var div = document.createElement("video")
    div.innerHTML = data[i].video;
    var div = document.createElement("related")
    div.innerHTML = data[i].related;
    mainContainer.appendChild(div);
    mainContainer.appendChild(description);
    mainContainer.appendChild(created);
    mainContainer.appendChild(duration);
    mainContainer.appendChild(poster);
    mainContainer.appendChild(video);
    mainContainer.appendChild(related);
  }
}
