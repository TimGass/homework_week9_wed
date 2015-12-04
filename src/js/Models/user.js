import $ from "../jquery";

class User {
  constructor(){
    this.token = "";
    this.username = "";
  }

  signIn(data){
    $.ajax({
      url: 'https://api.parse.com/1/login?' + $.param(data),
      type: 'GET',
      success: (response) => {
        this.token = response.sessionToken;
        this.username = response.username;
      }
    });
  }

  register(data){
    return  $.ajax({
        url: 'https://api.parse.com/1/users',
        type: 'POST',
        data: JSON.stringify(data),
        success: (response) => {
           this.token = response.sessionToken;
           this.username = response.username;
         }
      });
  }

  logout(){
    this.token = null;
  }
}

export default new User();
