

class Service {

  constructor(endpoint) {
    // this.baseUrl = 'https://quantify-this-api.herokuapp.com/api/v1/' + endpoint
    this.baseUrl = 'http://localhost:3000/api/v1/' + endpoint
  };

  get(callback) {
    return $.get(this.baseUrl)
  };

  delete() {
    return $.ajax({
      url: this.baseUrl,
      method: 'DELETE',
      success: function(){
        alert('Success');
      },
      error: function(){
        alert('Failure');
      }
    });
  };
}

module.exports = Service;