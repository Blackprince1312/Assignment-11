var listings = data.results.map(function(listing) {
  return {
    'title': listing.title,
    'price': listing.price,
    'currency_code': listing.currency_code,
    'image': listing.Images[0].url_75x75
  }
})

var listingData = {
  "listing": listings
}
console.log(listingData);

listingData.listing.forEach(function(listItem) {
  document.getElementById('content').innerHTML +=
    `<div class="items">
  <img src="${listItem.image}"/>
  </div>`
  console.log(listItem);
})
