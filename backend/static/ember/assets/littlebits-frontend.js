"use strict";



define('littlebits-frontend/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('littlebits-frontend/app', ['exports', 'littlebits-frontend/resolver', 'ember-load-initializers', 'littlebits-frontend/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("littlebits-frontend/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define('littlebits-frontend/components/active-link', ['exports', 'ember-cli-active-link-wrapper/components/active-link'], function (exports, _activeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeLink.default;
});
define('littlebits-frontend/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('littlebits-frontend/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('littlebits-frontend/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('littlebits-frontend/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('littlebits-frontend/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('littlebits-frontend/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('littlebits-frontend/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('littlebits-frontend/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('littlebits-frontend/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('littlebits-frontend/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('littlebits-frontend/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('littlebits-frontend/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('littlebits-frontend/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('littlebits-frontend/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('littlebits-frontend/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('littlebits-frontend/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('littlebits-frontend/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('littlebits-frontend/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('littlebits-frontend/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('littlebits-frontend/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('littlebits-frontend/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('littlebits-frontend/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('littlebits-frontend/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('littlebits-frontend/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('littlebits-frontend/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('littlebits-frontend/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('littlebits-frontend/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('littlebits-frontend/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('littlebits-frontend/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('littlebits-frontend/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('littlebits-frontend/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('littlebits-frontend/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('littlebits-frontend/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('littlebits-frontend/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('littlebits-frontend/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('littlebits-frontend/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _faIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
define('littlebits-frontend/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _faList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faList.default;
    }
  });
});
define('littlebits-frontend/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _faStack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faStack.default;
    }
  });
});
define("littlebits-frontend/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define('littlebits-frontend/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _labeledRadioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _labeledRadioButton.default;
});
define("littlebits-frontend/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("littlebits-frontend/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("littlebits-frontend/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define("littlebits-frontend/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("littlebits-frontend/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("littlebits-frontend/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("littlebits-frontend/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('littlebits-frontend/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define("littlebits-frontend/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("littlebits-frontend/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('littlebits-frontend/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('littlebits-frontend/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('littlebits-frontend/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _radioButtonInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _radioButtonInput.default;
});
define('littlebits-frontend/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _radioButton.default;
});
define('littlebits-frontend/components/sanitize-html', ['exports', 'ember-cli-sanitize-html/components/sanitize-html'], function (exports, _sanitizeHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sanitizeHtml.default;
    }
  });
});
define('littlebits-frontend/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('littlebits-frontend/components/view-flashcard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isTerm: true,
    actions: {
      switchView: function switchView() {
        this.toggleProperty('isTerm');
      }
      // deleteDeck(){
      //   let deck = this.get('model');
      //   deck.destroyRecord();
      //   this.transitionTo('userprofile');
      // }

    }
  });
});
define('littlebits-frontend/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('littlebits-frontend/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    showMenu: '',
    actions: {
      toggleMenu: function toggleMenu() {
        if (this.get('showMenu')) {
          this.set('showMenu', '');
        } else {
          this.set('showMenu', 'active');
        }
      },
      logout: function logout() {
        this.get('auth').logout();
      },
      activateIFTTT: function activateIFTTT() {
        var data = {
          eventtype: 'dashboard_on',
          timestamp: Date.now().toString(),
          userid: this.get('auth.userid')
        };

        Ember.$.ajax({
          url: '/api/activateifttt',
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json",
          success: function success(response) {
            console.log('Attempting to turn ifttt on. Response from server is: ');
            console.log(response);
          }
        });
      },
      createNew: function createNew() {

        var newprofile = this.store.createRecord('profile', {});
        newprofile.save();
      }
    }
  });
});
define('littlebits-frontend/controllers/createdeck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    flashcards: Ember.A([]),
    actions: {
      addFlashcard: function addFlashcard() {
        var card = this.store.createRecord('flashcard');
        this.get('flashcards').pushObject(card);
      },
      submitDeck: function submitDeck() {
        var flashcards = this.get('flashcards');
        this.get('model').save().then(function (deck) {
          flashcards.forEach(function (card) {
            card.set('parentdeck', deck.get('id'));
            card.save();
          });
        });
      }
      // submitDeck() {
      //   let flashcards = this.get('flashcards');
      //   this.get('model').save().then(function(deck) {
      //     flashcards.forEach(function(card) {
      //       card.set('parentdeck', deck);
      //       console.log(card.get('term'), card.get('definition'));
      //       let carddata = {
      //
      //           'attributes': {
      //             'term': card.get('term'),
      //             'definition': card.get('definition'),
      //           },
      //           'relationships': {
      //             'parentdeck': deck.id
      //           },
      //           'type': 'flashcards',
      //
      //
      //       };
      //       Ember.$.ajax({
      //         contentType: 'application/vnd.api+json;charset=UTF-8',
      //         url: '../api/flashcards',
      //         type: "POST",
      //         data: carddata,
      //         success: function(response){
      //           console.log('Response from API for card', card, ':', response);
      //         }
      //
      //       });
      //
      //
      //     });
      //   });
      // }

    }
  });
});
define('littlebits-frontend/controllers/deck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    isTerm: true,
    actions: {
      switchView: function switchView() {
        this.toggleProperty('isTerm');
      },
      deleteDeck: function deleteDeck() {
        var deck = this.get('model');
        deck.destroyRecord();
        this.transitionToRoute('profile');
      }
    }
  });
});
define('littlebits-frontend/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('littlebits-frontend/controllers/login', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		auth: Ember.inject.service('auth-manager'),
		actions: {
			login: function login() {
				this.get('auth').login();
			},
			logout: function logout() {
				this.get('auth').logout();
			}
		}
	});
});
define('littlebits-frontend/controllers/profile', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('littlebits-frontend/controllers/register', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service('auth-manager'),
    showMenu: '',
    invalid: false,
    invalidCreds: 'Username must be at least 5 characters and password must be at least 8 characters',
    actions: {
      register: function register() {
        var context = this;
        var data = {
          username: this.get('auth.username'),
          password: this.get('auth.password')
        };

        // Add some validation to username and/or password
        if (data.username.length < 5 || data.password.length < 8) {
          this.set('invalid', true);
          return false;
        }

        Ember.$.ajax({
          url: '/api/register',
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          dataType: "json",
          success: function success(response) {
            console.log('Attempting to turn ifttt on. Response from server is: ');
            console.log(response);
          }
        }).then(function (response) {
          //Authenticate here
          console.log(response);
          context.get('auth').login();
        });
      }
    }
  });
});
define('littlebits-frontend/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/app-version', ['exports', 'littlebits-frontend/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('littlebits-frontend/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('littlebits-frontend/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('littlebits-frontend/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('littlebits-frontend/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('littlebits-frontend/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('littlebits-frontend/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('littlebits-frontend/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('littlebits-frontend/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('littlebits-frontend/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('littlebits-frontend/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('littlebits-frontend/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('littlebits-frontend/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('littlebits-frontend/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('littlebits-frontend/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('littlebits-frontend/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('littlebits-frontend/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('littlebits-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('littlebits-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('littlebits-frontend/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('littlebits-frontend/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('littlebits-frontend/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('littlebits-frontend/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('littlebits-frontend/index', ['exports', 'ember-cli-sanitize-html'], function (exports, _emberCliSanitizeHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliSanitizeHtml.default;
    }
  });
});
define('littlebits-frontend/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('littlebits-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'littlebits-frontend/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('littlebits-frontend/initializers/auth-manager', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.initialize = initialize;
	// This initializes the services to be used
	function initialize(application) {
		application.inject('route', 'auth', 'service:auth-manager');
		application.inject('controller', 'auth', 'service:auth-manager');
		application.inject('component', 'auth', 'service:auth-manager');
	}

	exports.default = {
		name: 'auth-manager',
		initialize: initialize
	};
});
define('littlebits-frontend/initializers/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  // This handles constants 
  function initialize(application) {
    application.inject('controller', 'constants', 'service:constants');
  }

  exports.default = {
    name: 'constants',
    initialize: initialize
  };
});
define('littlebits-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('littlebits-frontend/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('littlebits-frontend/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('littlebits-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('littlebits-frontend/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardFirstResponderInputs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('littlebits-frontend/initializers/export-application-global', ['exports', 'littlebits-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('littlebits-frontend/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("littlebits-frontend/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('littlebits-frontend/initializers/load-bootstrap-config', ['exports', 'littlebits-frontend/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('littlebits-frontend/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('littlebits-frontend/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('littlebits-frontend/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("littlebits-frontend/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('littlebits-frontend/mixins/active-link', ['exports', 'ember-cli-active-link-wrapper/mixins/active-link'], function (exports, _activeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeLink.default;
});
define("littlebits-frontend/models/deck", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr("string"),
    flashcards: _emberData.default.hasMany("flashcard")
  });
});
define("littlebits-frontend/models/event", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    eventtype: _emberData.default.attr("string"),
    timestamp: _emberData.default.attr("date"),
    userid: _emberData.default.attr("string"),
    requestor: _emberData.default.attr("string")

  });
});
define("littlebits-frontend/models/flashcard", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    term: _emberData.default.attr("string"),
    definition: _emberData.default.attr("string"),
    parentdeck: _emberData.default.belongsTo("deck")
  });
});
define('littlebits-frontend/models/profile', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        user: _emberData.default.belongsTo('user')
        // decks: DS.hasMany('deck')
    });
});
define('littlebits-frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        profile: _emberData.default.belongsTo('profile'),
        username: _emberData.default.attr('string')

    });
});
define('littlebits-frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('littlebits-frontend/router', ['exports', 'littlebits-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // This handles all routes for the app
  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.bURL

    //   redirect: function() {
    //     this.transitionTo('login');
    // }
  });

  Router.map(function () {
    this.route('login');
    this.route('createdeck');
    this.route('editdeck');
    this.route('register');
    // this.route('deck');
    this.route('deck', { path: '/decks/:deck_id' });
    this.route('profile');
  });

  exports.default = Router;
});
define('littlebits-frontend/routes/createdeck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel(transition) {
      if (!this.get('auth.isLoggedIn')) {
        this.transitionTo('login');
      }
    },
    model: function model() {
      return this.store.createRecord('deck');
    }
  });
});
define('littlebits-frontend/routes/deck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var defaultitems = Ember.A([]); // This handles what happens when going to viewdeck page
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel(transition) {
      if (!this.get('auth.isLoggedIn')) {
        this.transitionTo('login');
      }
    },
    model: function model(params) {
      return this.store.findRecord('deck', params.deck_id);
    }
  }
  // setupController(controller, model){
  //   this._super(controller, model);
  //   controller.set('defaultitems', defaultitems);
  //   var route = this;
  // }
  );
});
define('littlebits-frontend/routes/editdeck', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel(transition) {
      if (!this.get('auth.isLoggedIn')) {
        this.transitionTo('login');
      }
    }
  });
});
define('littlebits-frontend/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var defaultitems = Ember.A([{
    title: 'CYBR 8470',
    description: 'Exciting stuff!',
    img: 'img/NGC-logo.png',
    link: '',
    link_external: 'http://mlhale.github.io/CYBR8470'

  }, {
    title: 'Masonry-based Event Display Template',
    description: 'You are seeing this template, because you haven\'t loaded any data into your client yet. This Template will be used to display events as they load from your REST API.',
    img: 'img/template-icon.svg',
    link: 'index'

  }]);

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
  // This handles what happens when you go to the website
  exports.default = Ember.Route.extend({
    model: function model() {
      // return this.store.findAll('profile')
      // return this.store.findAll('deck');
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('defaultitems', defaultitems);
      var route = this;
    }
  });
});
define('littlebits-frontend/routes/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('littlebits-frontend/routes/profile', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var defaultitems = Ember.A([{
    title: 'CYBR 8470',
    description: 'Exciting stuff!',
    img: 'img/NGC-logo.png',
    link: '',
    link_external: 'http://mlhale.github.io/CYBR8470'

  }, {
    title: 'Masonry-based Event Display Template',
    description: 'You are seeing this template, because you haven\'t loaded any data into your client yet. This Template will be used to display events as they load from your REST API.',
    img: 'img/template-icon.svg',
    link: 'index'

  }]); // This handles what happens when going to profile page
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel(transition) {
      if (!this.get('auth.isLoggedIn')) {
        this.transitionTo('login');
      }
    },
    model: function model() {
      return this.store.findAll('deck');
    },
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.set('defaultitems', defaultitems);
      var route = this;
    }
  });
});
define('littlebits-frontend/routes/register', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('littlebits-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('littlebits-frontend/services/auth-manager', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Service.extend({
		store: Ember.inject.service('store'),
		routing: Ember.inject.service('-routing'),

		//field vars
		username: '',
		password: '',
		remember: false,
		errorMsg: '',

		//stored data
		user: null,
		profile: null,
		isLoggedIn: false,
		login: function login() {
			console.log('Logging in:');

			//retrieve field data
			var username = this.get('username');
			var password = this.get('password');
			var remember = this.get('remember');

			var data = {
				'username': username,
				'password': password };
			var auth = this;

			//make api request
			Ember.$.post('/api/session', data, function (response) {

				if (response.data.isauthenticated) {
					//success
					auth.set('userid', response.userid);
					auth.set('isLoggedIn', true);

					if (remember) {
						//save username and pass to local storage
						localStorage.setItem('remember', true);
						localStorage.setItem('username', auth.get('username'));
						localStorage.setItem('password', auth.get('password'));
					} else {
						localStorage.removeItem('remember');
						localStorage.removeItem('username');
						localStorage.removeItem('password');
					}
					auth.set('password', '');

					auth.get('routing').transitionTo('index');

					console.log('Login POST Request to /api/session/ was successful.');
				} else {
					//errors
					console.log('Login POST Request to /api/session/ was unsuccessful.');
					auth.set('errorMsg', response.data.message);
				}
			});
		},
		logout: function logout() {
			console.log('Logging out');
			var auth = this;
			Ember.$.ajax({ url: '/api/session', type: 'DELETE' }).then(function (response) {
				console.log('Logout DELETE Request to /api/session/ was successful:' + response);
				auth.set('isLoggedIn', false);
				auth.set('errorMsg', '');
				auth.set('username', '');
				auth.set('user', null);
				auth.set('profile', null);

				if (localStorage.remember) {
					auth.set('remember', localStorage.remember);
					auth.set('username', localStorage.username);
					auth.set('password', localStorage.password);
				}

				auth.get('routing').transitionTo('login');
			});
		},
		/**
  	called whenever the application loads to initialize any stored session/local variables
  **/
		init: function init() {
			this._super();
			var auth = this;

			//handle session and local variable loading
			this.set('remember', localStorage.remember);

			if (auth.get('remember')) {
				auth.set('username', localStorage.username);
				auth.set('password', localStorage.password);
			}

			//check to see if the user is logged into the API
			Ember.$.get('/api/session', function (response) {
				if (response.isauthenticated) {
					//success
					console.log('The user: \'' + response.username + '\' is currently logged in.');
					auth.set('username', response.username);
					auth.set('userid', response.userid);
					auth.set('isLoggedIn', true);
				} else {
					//errors
					console.log('The user is not currently logged in.');
				}
			});
		}
	});
});
define('littlebits-frontend/services/constants', ['exports', 'littlebits-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    rootURL: _environment.default.rootURL
  });
});
define('littlebits-frontend/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _keyboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
define("littlebits-frontend/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('littlebits-frontend/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modalDialog.default;
});
define('littlebits-frontend/services/moment', ['exports', 'ember-moment/services/moment', 'littlebits-frontend/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define("littlebits-frontend/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tglKMsu6", "block": "{\"statements\":[[4,\" Everything here gets displayed on every page \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[15,\"id\",\"app-main\"],[13],[0,\"\\n\"],[6,[\"bs-navbar\"],null,[[\"class\"],[\"bg-primary\"]],{\"statements\":[[0,\"\\t  \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n\\t    \"],[1,[28,[\"navbar\",\"toggle\"]],false],[0,\"\\n\\t    \"],[4,\" <a class=\\\"navbar-brand\\\">FlashyCards</a> \"],[0,\"\\n\\t  \"],[14],[0,\"\\n\"],[6,[\"component\"],[[28,[\"navbar\",\"content\"]]],null,{\"statements\":[[6,[\"component\"],[[28,[\"navbar\",\"nav\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"auth\",\"isLoggedIn\"]]],null,{\"statements\":[[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t    \"],[6,[\"component\"],[[28,[\"nav\",\"link-to\"]],\"index\"],null,{\"statements\":[[0,\"Home\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,[\"component\"],[[28,[\"nav\",\"link-to\"]],\"profile\"],null,{\"statements\":[[0,\"Profile\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,[\"component\"],[[28,[\"nav\",\"link-to\"]],\"editdeck\"],null,{\"statements\":[[0,\"Edit Deck\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t  \"],[11,\"a\",[]],[5,[\"action\"],[[28,[null]],\"logout\"]],[13],[0,\"Logout\"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},{\"statements\":[[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t  \"],[6,[\"component\"],[[28,[\"nav\",\"link-to\"]],\"login\"],null,{\"statements\":[[0,\"Login\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"component\"],[[28,[\"nav\",\"item\"]]],null,{\"statements\":[[0,\"\\t\\t\\t    \"],[6,[\"component\"],[[28,[\"nav\",\"link-to\"]],\"register\"],null,{\"statements\":[[0,\"Register\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}]],\"locals\":[\"nav\"]},null]],\"locals\":[]},null]],\"locals\":[\"navbar\"]},null],[0,\"\\n\"],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"auth\",\"isLoggedIn\"]]],null,{\"statements\":[[0,\"  Welcome, \"],[1,[28,[\"auth\",\"username\"]],false],[0,\"!\\n\\t\"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[1,[33,[\"liquid-outlet\"],[\"main\"],null],false],[0,\"\\n\\n\\t\"],[4,\" <div class=\\\"row row-offcanvas row-offcanvas-left {{showMenu}}\\\">\\n\\t\\t<div id=\\\"sidebar\\\" class=\\\"col-xs-6 col-sm-4 col-md-3 sidebar-offcanvas\\\">\\n\\n\\t\\t</div>\\n\\t\\t<div class=\\\"col-xs-12 col-sm-8 col-md-9 content-column\\\">\\n\\t\\t\\t<div class=\\\"small-navbar visible-xs\\\">\\n\\t\\t\\t\\t<button type=\\\"button\\\" data-toggle=\\\"offcanvas\\\" class=\\\"btn btn-ghost pull-left\\\" {{action 'toggleMenu'}}> <i class=\\\"fa fa-align-left\\\"> </i>Menu</button>\\n\\t\\t\\t</div>\\n\\t\\t\\t{{liquid-outlet \\\"main\\\"}}\\n\\t\\t</div>\\n\\t</div> \"],[0,\"\\n\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/application.hbs" } });
});
define("littlebits-frontend/templates/components/deck-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ufzCs71V", "block": "{\"statements\":[[4,\" This what the deck looks like on userprofile page \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-3 col-md-2 col-md-offset-1\"],[13],[0,\"\\n    \"],[11,\"article\",[]],[15,\"class\",\"deck\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[4,\" <div class=\\\"header-img\\\"><img src=\\\"{{constants.rootURL}}img/flashy    <img src=\\\"{{constants.rootURL}}img/flashycards-banner.png\\\" width=\\\"25%\\\" class=\\\"img-rounded\\\"/>cards-banner.png\\\" width=\\\"25%\\\" class=\\\"img-rounded\\\"/></div> \"],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"header-img\"],[13],[11,\"img\",[]],[15,\"src\",\"/static/ember/img/plain-notecard.jpg\"],[15,\"width\",\"30%\"],[15,\"class\",\"img-rounded\"],[13],[14],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"centered\"],[13],[1,[26,[\"name\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/components/deck-component.hbs" } });
});
define('littlebits-frontend/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('littlebits-frontend/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("littlebits-frontend/templates/components/labeled-radio-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wk0Lgs5Y", "block": "{\"statements\":[[1,[33,[\"radio-button\"],null,[[\"radioClass\",\"radioId\",\"changed\",\"disabled\",\"groupValue\",\"name\",\"required\",\"value\"],[[28,[\"radioClass\"]],[28,[\"radioId\"]],\"innerRadioChanged\",[28,[\"disabled\"]],[28,[\"groupValue\"]],[28,[\"name\"]],[28,[\"required\"]],[28,[\"value\"]]]]],false],[0,\"\\n\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/components/labeled-radio-button.hbs" } });
});
define('littlebits-frontend/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define("littlebits-frontend/templates/components/radio-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LG2yvQTu", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"  \"],[11,\"label\",[]],[16,\"class\",[34,[\"ember-radio-button \",[33,[\"if\"],[[28,[\"checked\"]],\"checked\"],null],\" \",[26,[\"joinedClassNames\"]]]]],[16,\"for\",[26,[\"radioId\"]],null],[13],[0,\"\\n    \"],[1,[33,[\"radio-button-input\"],null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[28,[\"radioClass\"]],[28,[\"radioId\"]],[28,[\"disabled\"]],[28,[\"name\"]],[28,[\"required\"]],[28,[\"groupValue\"]],[28,[\"value\"]],\"changed\"]]],false],[0,\"\\n\\n    \"],[18,\"default\"],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[1,[33,[\"radio-button-input\"],null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[28,[\"radioClass\"]],[28,[\"radioId\"]],[28,[\"disabled\"]],[28,[\"name\"]],[28,[\"required\"]],[28,[\"groupValue\"]],[28,[\"value\"]],\"changed\"]]],false],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/components/radio-button.hbs" } });
});
define('littlebits-frontend/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define("littlebits-frontend/templates/components/view-flashcard", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wfz7Xsn5", "block": "{\"statements\":[[4,\" This is what flashcard view looks like  \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-sm-3 col-md-2 col-md-offset-1\"],[13],[0,\"\\n    \"],[11,\"article\",[]],[15,\"class\",\"deck\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[4,\" <div class=\\\"header-img\\\"><img src=\\\"{{constants.rootURL}}img/flashy    <img src=\\\"{{constants.rootURL}}img/flashycards-banner.png\\\" width=\\\"25%\\\" class=\\\"img-rounded\\\"/>cards-banner.png\\\" width=\\\"25%\\\" class=\\\"img-rounded\\\"/></div> \"],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"header-img\"],[13],[11,\"img\",[]],[15,\"src\",\"/static/ember/img/plain-notecard.jpg\"],[15,\"width\",\"60%\"],[15,\"class\",\"img-rounded\"],[13],[14],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"centered\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isTerm\"]]],null,{\"statements\":[[0,\"            \"],[1,[28,[\"flashcard\",\"term\"]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"              \"],[1,[28,[\"flashcard\",\"definition\"]],false],[0,\"\\n\\n\"]],\"locals\":[]}],[0,\"        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isTerm\"]]],null,{\"statements\":[[0,\"  \"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"switchView\"]],[13],[0,\"View Definition\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"switchView\"]],[13],[0,\"View Term\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/components/view-flashcard.hbs" } });
});
define("littlebits-frontend/templates/createdeck", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FUnjEKiy", "block": "{\"statements\":[[4,\" This is where you enter deck and flashcard info \"],[0,\"\\n\"],[11,\"p\",[]],[15,\"class\",\"outlined\"],[13],[0,\"Deck Title: \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"size\"],[\"text\",[28,[\"model\",\"name\"]],\"51\"]]],false],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"flashcards\"]]],null,{\"statements\":[[0,\"    \"],[11,\"p\",[]],[15,\"class\",\"outlined\"],[13],[0,\"\\n      Term:\"],[11,\"br\",[]],[13],[14],[0,\"\\n      \"],[1,[33,[\"input\"],null,[[\"value\",\"size\"],[[28,[\"flashcard\",\"term\"]],\"61\"]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n      Definition:\"],[11,\"br\",[]],[13],[14],[0,\"\\n      \"],[1,[33,[\"textarea\"],null,[[\"value\",\"cols\",\"rows\"],[[28,[\"flashcard\",\"definition\"]],\"60\",\"5\"]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"flashcard\"]},null],[0,\"\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"addFlashcard\"]],[13],[0,\"Add Flashcard\"],[14],[0,\"\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"submitDeck\"]],[13],[0,\"Submit\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/createdeck.hbs" } });
});
define("littlebits-frontend/templates/deck", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0dRUOaER", "block": "{\"statements\":[[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[4,\" <button {{action 'switchView'}}>Switch</button>\\n{{#each model as |deck|}}\\n  {{#each deck.flashcards as |flashcard|}}\\n  <div class=\\\"row\\\">\\n    <div class=\\\"col-sm-3 col-md-2 col-md-offset-1\\\">\\n      <article class=\\\"deck\\\">\\n        <div class=\\\"container\\\">\\n          <div class=\\\"header-img\\\"><img src=\\\"/static/ember/img/plain-notecard.jpg\\\" width=\\\"30%\\\" class=\\\"img-rounded\\\"/></div>\\n          <div class=\\\"centered\\\">\\n            {{#if isTerm}}\\n              {{flashcard.term}}\\n            {{else}}\\n              {{flashcard.definition}}\\n            {{/if}}\\n          </div>\\n        </div>\\n      </article>\\n    </div>\\n  </div>\\n  {{/each}}\\n{{/each}} \"],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\",\"flashcards\"]]],null,{\"statements\":[[0,\"  \"],[1,[33,[\"view-flashcard\"],null,[[\"flashcard\"],[[28,[\"flashcard\"]]]]],false],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[\"flashcard\"]},null],[0,\"\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"deleteDeck\"]],[13],[0,\"Delete Deck\"],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/deck.hbs" } });
});
define("littlebits-frontend/templates/editdeck", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zBaol6Zk", "block": "{\"statements\":[[4,\" This is where we can edit the deck \"],[0,\"\\n\"],[4,\" We will not be able to get to this page in the scope of this class \"],[0,\"\\n\"],[11,\"h1\",[]],[13],[0,\"\\n  This page is out of scope for this class as of now\\n  due to time constraints\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/editdeck.hbs" } });
});
define("littlebits-frontend/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vOTfxos+", "block": "{\"statements\":[[4,\" This should be the first thing we see when going to the website \"],[0,\"\\n\"],[11,\"h1\",[]],[13],[0,\"Welcome to FlashyCards!\"],[14],[0,\"\\n\\nThis website is a flashcard study tool which allows you to create\\na deck of flashcards and study them so you are prepared for your\\nnext exam.\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/index.hbs" } });
});
define("littlebits-frontend/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5/zzti23", "block": "{\"statements\":[[4,\" This is the login page for the app \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[0,\"\\t\"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-md-4 login-box shadow-2\"],[13],[0,\"\\n\\t\\t\"],[11,\"form\",[]],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"row login-box\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"col-sm-12 col-md-10 col-md-offset-1\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[13],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"constants\",\"rootURL\"]],\"img/flashycards-banner.png\"]]],[15,\"width\",\"100%\"],[15,\"class\",\"img-rounded\"],[13],[14],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[13],[0,\"Don't have an account? \"],[6,[\"active-link\"],null,null,{\"statements\":[[6,[\"link-to\"],[\"register\"],null,{\"statements\":[[0,\"Register!\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"auth\",\"errorMsg\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"style\",\"text-align: center;\"],[13],[0,\"Incorrect username/password\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"input-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"glyphicon glyphicon-user\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"value\",\"enter\",\"placeholder\",\"autofocus\"],[\"text\",\"input-sm form-control\",[28,[\"auth\",\"username\"]],\"login\",\"Username\",\"autofocus\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"input-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"glyphicon glyphicon-lock\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"value\",\"enter\",\"placeholder\",\"type\"],[\"text\",\"input-sm form-control\",[28,[\"auth\",\"password\"]],\"login\",\"Password\",\"password\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"input\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-lg btn-primary btn-block\"],[15,\"value\",\"Sign in\"],[5,[\"action\"],[[28,[null]],\"login\"]],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\"],[14],[0,\"\\n\\t\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/login.hbs" } });
});
define("littlebits-frontend/templates/profile", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ccD7S8YG", "block": "{\"statements\":[[4,\" This is where the user sees all their created decks \"],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,[\"link-to\"],[\"deck\",[28,[\"deck\",\"id\"]]],null,{\"statements\":[[0,\" \"],[1,[33,[\"deck-component\"],null,[[\"name\"],[[28,[\"deck\",\"name\"]]]]],false],[0,\" \"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"each\"],[[28,[\"deck\",\"flashcards\"]]],null,{\"statements\":[[0,\"    \"],[4,\" {{flashcard.id}}\\n    {{flashcard.term}} \"],[0,\"\\n\"]],\"locals\":[\"flashcard\"]},null]],\"locals\":[\"deck\"]},null],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[6,[\"link-to\"],[\"createdeck\"],[[\"tagName\"],[\"button\"]],{\"statements\":[[0,\" Create New Deck\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/profile.hbs" } });
});
define("littlebits-frontend/templates/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JSoE6RjA", "block": "{\"statements\":[[4,\" This is the registration page for the app \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[0,\"\\t\"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-md-4 login-box shadow-2\"],[13],[0,\"\\n\\t\\t\"],[11,\"form\",[]],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"row login-box\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"col-sm-12 col-md-10 col-md-offset-1\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[13],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"constants\",\"rootURL\"]],\"img/flashycards-banner.png\"]]],[15,\"width\",\"100%\"],[15,\"class\",\"img-rounded\"],[13],[14],[14],[0,\"\\n            \"],[11,\"h1\",[]],[13],[0,\"Register\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[13],[0,\"Already have an account? \"],[6,[\"active-link\"],null,null,{\"statements\":[[6,[\"link-to\"],[\"login\"],null,{\"statements\":[[0,\"Login!\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"auth\",\"errorMsg\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"style\",\"text-align: center;\"],[13],[1,[28,[\"auth\",\"errorMsg\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"invalid\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"alert alert-danger\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"p\",[]],[15,\"style\",\"text-align: center;\"],[13],[1,[26,[\"invalidCreds\"]],false],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"input-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"glyphicon glyphicon-user\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"required\",\"value\",\"enter\",\"placeholder\",\"autofocus\"],[\"text\",\"input-sm form-control\",true,[28,[\"auth\",\"username\"]],\"login\",\"Username\",\"autofocus\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"input-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"glyphicon glyphicon-lock\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"required\",\"value\",\"enter\",\"placeholder\",\"type\"],[\"text\",\"input-sm form-control\",true,[28,[\"auth\",\"password\"]],\"login\",\"Password\",\"password\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n            \"],[4,\" <div class=\\\"form-group\\\">\\n              <div class=\\\"input-group\\\">\\n                <span class=\\\"input-group-addon\\\">\\n                  <i class=\\\"glyphicon glyphicon-lock\\\"></i>\\n                </span>\\n                {{input type=\\\"text\\\"class=\\\"input-sm form-control\\\" value=auth.password enter=\\\"login\\\" placeholder=\\\"Confirm Password\\\" type=\\\"password\\\"}}\\n              </div>\\n            </div> \"],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"input\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-lg btn-primary btn-block\"],[15,\"value\",\"Register\"],[5,[\"action\"],[[28,[null]],\"register\"]],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\"],[14],[0,\"\\n\\t\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "littlebits-frontend/templates/register.hbs" } });
});
define('littlebits-frontend/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('littlebits-frontend/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('littlebits-frontend/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('littlebits-frontend/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('littlebits-frontend/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('littlebits-frontend/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('littlebits-frontend/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('littlebits-frontend/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('littlebits-frontend/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('littlebits-frontend/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('littlebits-frontend/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('littlebits-frontend/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('littlebits-frontend/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('littlebits-frontend/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define('littlebits-frontend/utils/get-cmd-key', ['exports', 'ember-keyboard/utils/get-cmd-key'], function (exports, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCmdKey.default;
    }
  });
});
define('littlebits-frontend/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _listenerName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listenerName.default;
    }
  });
});


define('littlebits-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'littlebits-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("littlebits-frontend/app")["default"].create({"name":"littlebits-frontend","version":"0.0.0+1122d650"});
}
//# sourceMappingURL=littlebits-frontend.map
