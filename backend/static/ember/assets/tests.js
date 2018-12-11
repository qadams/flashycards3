'use strict';

define('littlebits-frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/view-flashcard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/view-flashcard.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n33:11 - Unexpected console statement. (no-console)\n34:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/createdeck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/createdeck.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/deck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/deck.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/profile.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n30:11 - Unexpected console statement. (no-console)\n31:11 - Unexpected console statement. (no-console)\n35:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('initializers/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/auth-manager.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/constants.js should pass ESLint\n\n');
  });

  QUnit.test('models/deck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/deck.js should pass ESLint\n\n');
  });

  QUnit.test('models/event.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/event.js should pass ESLint\n\n');
  });

  QUnit.test('models/flashcard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/flashcard.js should pass ESLint\n\n');
  });

  QUnit.test('models/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/profile.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/createdeck.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/createdeck.js should pass ESLint\n\n6:15 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/deck.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/deck.js should pass ESLint\n\n4:5 - \'defaultitems\' is assigned a value but never used. (no-unused-vars)\n8:13 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/editdeck.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/editdeck.js should pass ESLint\n\n5:13 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n56:9 - \'route\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/profile.js should pass ESLint\n\n27:13 - \'transition\' is defined but never used. (no-unused-vars)\n38:9 - \'route\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass ESLint\n\n');
  });

  QUnit.test('services/auth-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth-manager.js should pass ESLint\n\n18:3 - Unexpected console statement. (no-console)\n54:9 - Unexpected console statement. (no-console)\n59:5 - Unexpected console statement. (no-console)\n66:3 - Unexpected console statement. (no-console)\n70:5 - Unexpected console statement. (no-console)\n107:5 - Unexpected console statement. (no-console)\n113:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/constants.js should pass ESLint\n\n');
  });
});
define('littlebits-frontend/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('littlebits-frontend/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  var keyEvent = function keyEvent(app, attributes, type, element) {
    var event = (attributes || '').split('+').reduce(function (event, attribute) {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[attribute + 'Key'] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define('littlebits-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'littlebits-frontend/tests/helpers/start-app', 'littlebits-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = Ember.RSVP.Promise;
});
define('littlebits-frontend/tests/helpers/resolver', ['exports', 'littlebits-frontend/resolver', 'littlebits-frontend/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('littlebits-frontend/tests/helpers/start-app', ['exports', 'littlebits-frontend/app', 'littlebits-frontend/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('littlebits-frontend/tests/integration/components/deck-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('deck-component', 'Integration | Component | deck component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QNevhvxZ",
      "block": "{\"statements\":[[1,[26,[\"deck-component\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "5MJz38JS",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"deck-component\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('littlebits-frontend/tests/integration/components/view-flashcard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('view-flashcard', 'Integration | Component | view flashcard', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "McyLQArT",
      "block": "{\"statements\":[[1,[26,[\"view-flashcard\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0+NefrFK",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"view-flashcard\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('littlebits-frontend/tests/test-helper', ['littlebits-frontend/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('littlebits-frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/deck-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/deck-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/view-flashcard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/view-flashcard-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/view-flashcard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/view-flashcard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/auth-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/auth-manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/constants-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/constants-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/deck-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/deck-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/event-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/event-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/flashcard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/flashcard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/createdeck-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/createdeck-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/editdeck-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editdeck-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/userprofile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/userprofile-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/viewdeck-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/viewdeck-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/auth-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/constants-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/constants-test.js should pass ESLint\n\n');
  });
});
define('littlebits-frontend/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('littlebits-frontend/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/controllers/view-flashcard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:view-flashcard', 'Unit | Controller | view flashcard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('littlebits-frontend/tests/unit/initializers/auth-manager-test', ['littlebits-frontend/initializers/auth-manager', 'qunit', 'littlebits-frontend/tests/helpers/destroy-app'], function (_authManager, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | auth manager', {
    beforeEach: function beforeEach() {
      var _this = this;

      Ember.run(function () {
        _this.application = Ember.Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _authManager.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('littlebits-frontend/tests/unit/initializers/constants-test', ['littlebits-frontend/initializers/constants', 'qunit', 'littlebits-frontend/tests/helpers/destroy-app'], function (_constants, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | constants', {
    beforeEach: function beforeEach() {
      var _this = this;

      Ember.run(function () {
        _this.application = Ember.Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _constants.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('littlebits-frontend/tests/unit/models/deck-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('deck', 'Unit | Model | deck', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('littlebits-frontend/tests/unit/models/event-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('event', 'Unit | Model | event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('littlebits-frontend/tests/unit/models/flashcard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('flashcard', 'Unit | Model | flashcard', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('littlebits-frontend/tests/unit/routes/createdeck-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:createdeck', 'Unit | Route | createdeck', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/editdeck-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:editdeck', 'Unit | Route | editdeck', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/userprofile-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:userprofile', 'Unit | Route | userprofile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/routes/viewdeck-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:viewdeck', 'Unit | Route | viewdeck', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('littlebits-frontend/tests/unit/services/auth-manager-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:auth-manager', 'Unit | Service | auth manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('littlebits-frontend/tests/unit/services/constants-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:constants', 'Unit | Service | constants', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('littlebits-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
