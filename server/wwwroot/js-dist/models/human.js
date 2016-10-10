"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = function () {
  function Human(firstName, lastName) {
    _classCallCheck(this, Human);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Human, [{
    key: "toString",
    value: function toString() {
      return "Human: " + this.firstName + " " + this.lastName;
    }
  }]);

  return Human;
}();

exports.default = Human;