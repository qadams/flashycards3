// This handles what happens when going to profile page
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

export default Ember.Route.extend({
	model() {
    return this.store.findAll('deck');
	},
  setupController(controller, model){
    this._super(controller, model);
    controller.set('defaultitems', defaultitems);
    var route = this;
  }
});
