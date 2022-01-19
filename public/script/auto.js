function Autocomplete(value) {
   let placesAutocomplete = places({
      appId: "plEHFE8OXN3L",
      apiKey: "a6eb12d44e181f3c3c3d02bd7cf7b2fd",
      container: document.getElementById(value),
   });

   let address = document.querySelector("#address-value");
   placesAutocomplete.on("change", function (e) {
      address.textContent = e.suggestion.value;
   });

   placesAutocomplete.on("clear", function () {
      address.textContent = "none";
   });
}

Autocomplete("address");
