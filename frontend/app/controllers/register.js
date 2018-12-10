// This handles any actions dealing with registering
import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service('auth-manager'),
  showMenu: '',
  actions: {
    register(){
      var context = this;
      var data = {
        username: this.get('auth.username'),
        password: this.get('auth.password')
      };

      Ember.$.ajax({
        url:'/api/register',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to turn ifttt on. Response from server is: ');
          console.log(response);
        }
      }).then(function(response){
        //Authenticate here
        console.log(response);
        context.get('auth').login();
      });
    }
  }
});
