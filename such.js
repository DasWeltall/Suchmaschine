<script>
    // Vorprogrammierte Links mit Titel, Beschreibung und URL
    var predefinedLinks = [
        { title: "Smartghost", description: "Smartghost Münster", url: "https://www.smartghost-muenster.de" },
        { title: "WhatsApp", description: "WhatsApp Web", url: "https://web.whatsapp.com/" },
        { title: "Raspberry Pi", description: "Raspberry Pi Foundation", url: "https://www.raspberrypi.com/" },
        { title: "Google", description: "Die bekannteste Suchmaschine", url: "https://www.google.com" },
        { title: "Apple", description: "Apple Inc.", url: "https://www.apple.com" },
        { title: "NABU", description: "Naturschutzbund Deutschland", url: "https://www.nabu.de/" },
        { title: "Tagesschau", description: "Aktuelle Nachrichten", url: "https://www.tagesschau.de" },
        { title: "Samsung", description: "Samsung Electronics", url: "https://www.samsung.com/" },
        { title: "YouTube", description: "Video-Plattform", url: "https://www.youtube.com/" },
        { title: "SoundCloud", description: "Audio-Plattform", url: "https://soundcloud.com/" },
        { title: "Spotify", description: "Musik-Streaming-Dienst", url: "https://open.spotify.com/" },
        { title: "TV Today", description: "Fernsehprogramm", url: "https://www.tvtoday.de/" },
        { title: "Google Maps", description: "Karten und Routenplanung", url: "https://www.google.com/maps/" },
        { title: "Amazon", description: "Online-Versandhändler", url: "https://www.amazon.com/" },
        { title: "GitHub", description: "Plattform für Entwickler", url: "https://github.com/" },
	      { title: "OrangeSearch", description: "Kleine Suchmaschine", url: "https://dasweltall.github.io/Suchmaschine" },
        { title: "Wikipedia", description: "Online-Enzyklopädie", url: "https://www.wikipedia.org" },
    	  { title: "Microsoft", description: "Microsoft Corporation", url: "https://www.microsoft.com/" },
   	    { title: "Netflix", description: "Streaming-Dienst für Filme und Serien", url: "https://www.netflix.com/" },
    	  { title: "Twitter", description: "Soziales Netzwerk", url: "https://twitter.com/" },
  	    { title: "Instagram", description: "Soziales Netzwerk für Fotos und Videos", url: "https://www.instagram.com/" },
    	  { title: "LinkedIn", description: "Berufliches Netzwerk", url: "https://www.linkedin.com/" },
    	  { title: "Reddit", description: "Online-Diskussionsplattform", url: "https://www.reddit.com/" },
      	{ title: "Pinterest", description: "Plattform für Bilder und Ideen", url: "https://www.pinterest.com/" },
      	{ title: "Ebay", description: "Online-Marktplatz", url: "https://www.ebay.com/" },
      	{ title: "CNN", description: "Nachrichtensender", url: "https://www.cnn.com/" },
    	  { title: "BBC", description: "British Broadcasting Corporation", url: "https://www.bbc.com/" },
    	  { title: "The Guardian", description: "Britische Tageszeitung", url: "https://www.theguardian.com/international" },
      	{ title: "TED", description: "Konferenzen zu Technologie, Unterhaltung und Design", url: "https://www.ted.com/" },
      	{ title: "IMDb", description: "Internet Movie Database", url: "https://www.imdb.com/" },
      	{ title: "Stack Overflow", description: "Frage-Antwort-Website für Programmierer", url: "https://stackoverflow.com/" },
      	{ title: "Adobe", description: "Kreativsoftware", url: "https://www.adobe.com/" },
      	{ title: "CNN", description: "Nachrichtensender", url: "https://www.cnn.com/" }
];



    function search() {
        var query = document.getElementById('searchQuery').value.toLowerCase();
        var resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Lösche vorherige Suchergebnisse
        var matches = [];
	addToSearchHistory();

	
        if (/^https?:\/\//.test(query)) {
          // Den Link in einem neuen Tab öffnen
	  window.open(query, "_blank");
    	  return;
 	}

        // Durchsuche die vorprogrammierten Links nach Übereinstimmungen mit der Suchanfrage
        predefinedLinks.forEach(function(link) {
            if (link.title.toLowerCase().includes(query) || link.description.toLowerCase().includes(query)) {
                matches.push(link);
            }
        });


	    if (/^https?:\/\//.test(searchQuery)) {
		window.open(input, "_blank");
	    }
        // Zeige die gefundenen Suchergebnisse an
        matches.forEach(function(match) {
            var resultElement = document.createElement('div');
            resultElement.innerHTML = '<a href="' + match.url + '">' + match.title + '</a><p>' + match.description + '</p>';
            resultsContainer.appendChild(resultElement);
        });

        // Wenn keine Übereinstimmungen gefunden wurden, zeige eine entsprechende Nachricht an
        if (matches.length === 0) {
            resultsContainer.textContent = "Keine Ergebnisse gefunden.";
        }
    }


     // Event-Listener hinzufügen, um auf Klicks auf den Button zu reagieren
    document.getElementById("iconButton").addEventListener("click", function() {
      window.location.href = "game.html";
    });


	
     
   var color123 = ["orange", "purple", "#4A4AC7", "green"];
   var currentIndex = 0;
   function changeColor() {
        document.body.style.backgroundColor= color123[currentIndex];
	currentIndex = (currentIndex +1) % color123.length;
    }



    
  
 




	
// Funktion zum Hinzufügen einer Suchanfrage zur Suchhistorie
function addToSearchHistory(suchbegriff) {
  // Die aktuelle Suchhistorie aus den Cookies abrufen
  var suchbegriff = document.getElementById("searchQuery").value;
  var suchhistorie = getSearchHistory();
  
  // Die neue Suchanfrage zur Suchhistorie hinzufügen
  suchhistorie.push(suchbegriff);
  
  // Die aktualisierte Suchhistorie in den Cookies speichern
  document.cookie = "suchhistorie=" + JSON.stringify(suchhistorie) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Funktion zum Abrufen der aktuellen Suchhistorie aus den Cookies
function getSearchHistory() {
  // Den Wert des Cookies "suchhistorie" abrufen
  var cookieValue = "; " + document.cookie;
  var parts = cookieValue.split("; suchhistorie=");
  
  // Überprüfen, ob das Cookie vorhanden ist
  if (parts.length == 2) {
    return JSON.parse(parts.pop().split(";").shift());
  } else {
    // Falls das Cookie nicht vorhanden ist, eine leere Liste zurückgeben
    return [];
  }
}

// Beispielaufruf der Funktion mit einem Suchbegriff
var suchbegriff = "JavaScript";
addToSearchHistory(suchbegriff);




// Event-Listener hinzufügen, um auf Klicks auf den Button zu reagieren
    document.getElementById("game").addEventListener("click", function() {
      window.location.href = "game.html";
    });

