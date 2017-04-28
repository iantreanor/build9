	var url = "http://api.openweathermap.org/data/2.5/weather?q=,London,uk";
var apiKey = "bcaf01974b1b37642fb44314d5c25f90"; 
var httpRequest;
var loadtxt = document.getElementById("loadtxt");

function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				 // loadtxt.innerHTML = httpRequest.responseText;
				 var response = JSON.parse(httpRequest.responseText);
		var condition = response.weather[0].main;
		var icon = response.weather[0].icon;
		var iconurl = "<img src = 'http://openweathermap.org/img/w/" + icon + ".png'>"
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		loadtxt.innerHTML = "Weather in London is:<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + iconurl +"</p>";
			} else {
				alert('There was a problem with the request.');
			}
		}
	}

window.addEventListener("load", makeRequest);