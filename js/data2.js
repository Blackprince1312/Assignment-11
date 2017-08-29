var listings = data.results.map(function(listing) {
  return {
    'title': listing.title,
    'price': listing.price,
    'currency_code': listing.currency_code,
    'image': listing.Images[0].url_170x135
  }
})

console.log(data.results);

var listingData = {
  "listing": listings
}

listingData.listing.forEach(function(listItem) {
  document.getElementById('content').innerHTML +=
    `<div class="">
      <div class="items three columns">
          <img src="${listItem.image}"/>
          <p class="item-text">${listItem.title.substring(0, 25)}...</p>
          <span>${listItem.price}</span>
       </div>
     </div>`
})
