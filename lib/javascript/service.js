

class Service {

  constructor(endpoint) {
    // this.baseUrl = 'https://quantify-this-api.herokuapp.com/api/v1/'
    this.baseUrl = 'http://localhost:3000/api/v1/'
    this.endpoint = endpoint
  };

  get() {
    return $.get(this.baseUrl + this.endpoint)
  };

  put() {
    return $.post(this.baseUrl + this.endpoint)
  }

  delete() {
    return $.ajax({
      url: this.baseUrl + this.endpoint,
      method: 'DELETE',
    });
  };
}

module.exports = Service;