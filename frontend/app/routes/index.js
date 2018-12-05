// This handles what happens when you go to the website
import Ember from 'ember';


var defaultitems = Ember.A([
  {
    title: 'CYBR 8470',
    description: 'Exciting stuff!',
    img: 'img/NGC-logo.png',
    link: '',
    link_external: 'http://mlhale.github.io/CYBR8470'

  },
	{
		title: 'Masonry-based Event Display Template',
		description: 'You are seeing this template, because you haven\'t loaded any data into your client yet. This Template will be used to display events as they load from your REST API.',
    img: 'img/template-icon.svg',
    link: 'index'

	},


]);

// export default Ember.Route.extend({
//   getData(){
//     var items = Ember.A([]);
//     return Ember.$.get('/api/events').then(function(events){
//       // console.log(events);
//       events.data.forEach(function(event){
//         // console.log(event);
//         items.addObject({
//           id: event.pk,
//           eventtype: event.fields.eventtype,
//           requestor: event.fields.requestor,
//           timestamp: event.fields.timestamp,
//           userid: event.fields.userid,
//           img: 'img/event-icon.jpg',
//           link: 'index'
//         });
//       });
//       return items.reverse()
//     }, function(msg){//error
//       console.log('Error loading events:');
//       console.log(msg.statusText);
//     });
//   },
export default Ember.Route.extend({
	model() {
    // return this.store.findAll('deck');
	},
  setupController(controller, model){
    this._super(controller, model);
    controller.set('defaultitems', defaultitems);
    var route = this;
  }
});
