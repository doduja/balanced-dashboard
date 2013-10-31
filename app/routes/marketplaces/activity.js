Balanced.ActivityRoute = Balanced.AuthRoute.extend({});

Balanced.ActivityIndexRoute = Balanced.AuthRoute.extend({
	redirect: function() {
		this.transitionTo('activity.transactions', this.modelFor('marketplace'));
	}
});

Balanced.ActivityOrdersRoute = Balanced.AuthRoute.extend({
	pageTitle: 'Activity',

	setupController: function(controller, model) {
		this._super(controller, model);

		if (this.controllerFor('activity').get('category') !== 'order') {
			this.controllerFor('activity').set('type', 'order');
		}
	}
});

Balanced.ActivityTransactionsRoute = Balanced.AuthRoute.extend({
	pageTitle: 'Activity',

	setupController: function(controller, model) {
		this._super(controller, model);

		if (this.controllerFor('activity').get('category') !== 'search') {
			this.controllerFor('activity').set('type', 'search');
		}
	}
});

Balanced.ActivityCustomersRoute = Balanced.AuthRoute.extend({
	pageTitle: 'Activity',

	setupController: function(controller, model) {
		this._super(controller, model);

		if (this.controllerFor('activity').get('category') !== 'customer') {
			this.controllerFor('activity').set('type', 'customer');
		}
	}
});

Balanced.ActivityFundingInstrumentsRoute = Balanced.AuthRoute.extend({
	pageTitle: 'Activity',

	setupController: function(controller, model) {
		this._super(controller, model);

		if (this.controllerFor('activity').get('category') !== 'funding_instrument') {
			this.controllerFor('activity').set('type', 'funding_instrument');
		}
	}
});
