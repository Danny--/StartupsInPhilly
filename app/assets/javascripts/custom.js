<script type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJtfksrR5F_ur0XMbAYGhvKrQsJ7g2loA&sensor=false">
  var currentwindow = null;

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(39.951719, -75.163877),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    <% for startup in @startups %>
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(<%= startup.x.to_f  %>, <%= startup.y.to_f  %>),
        map: map
      });

    attachWindow(marker, "<%= startup.name %>", "<%= startup.website %>", "<%= startup.description %>");
    <% end %>
  }

  function attachWindow(marker, name, website, description) {
    var contentString = '<div id="content"><h4><a href="' + website + '" target="_blank">' + name + '</a></h4><div id="bodyContent"><p>'+ description + '</p>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function(){
      if (currentwindow == null)
      {
        currentwindow = infowindow;
      }
      else
      {
        currentwindow.close();
      }
      infowindow.open(marker.get('map'), marker);
      currentwindow = infowindow;
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
</script>