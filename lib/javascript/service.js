class Service {

  constructor(url) {
    this.url = url
  }

  get(callback) {
    $.getJSON(this.url, callback)
  }
}

module.exports = Service;