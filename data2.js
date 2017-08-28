var listings  =  data.results.map(function (listing) {
  return {
    'title':listing.title,
    'price':listing.price,
    'currency_code':listing.currency_code,
    'url_75x75':listing.Images[0].url_75x75
  }
})

var listingData= {
  "listing":listings
}

listingData.listing.forEach(function (listItem) {
document.getElementById('content').innerHTML = listItem.title
console.log(listItem);
})
