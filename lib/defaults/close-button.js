'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _Close = require('styled-icons/evil/Close')

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _extends () {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

var Button = _styledComponents.default.button.withConfig({
  displayName: 'close-button__Button',
  componentId: 'hkvkcn-0'
})(
  [
    'background:',
    ';color:',
    ';border-radius:50%;width:64px;height:64px;background:transparent;outline:none;border:none;cursor:pointer;:hover{background:#fb6d42;}'
  ],
  function (props) {
    return props.backgroundColor
  },
  function (props) {
    return props.color
  }
)

var RecWrapper = _styledComponents.default.div.withConfig({
  displayName: 'close-button__RecWrapper',
  componentId: 'hkvkcn-1'
})([
  'display:flex;flex-direction:column;align-items:center;position:absolute;left:2%;'
])

var ButtonBorder = _styledComponents.default.div.withConfig({
  displayName: 'close-button__ButtonBorder',
  componentId: 'hkvkcn-2'
})([
  'border:2px solid rgba(255,255,255,0.4);height:68px;width:68px;border-radius:50%;'
])

var CloseIcon = (0, _styledComponents.default)(_Close.Close).withConfig({
  displayName: 'close-button__CloseIcon',
  componentId: 'hkvkcn-3'
})(['color:white;'])

var _default = function _default (props) {
  return _react.default.createElement(
    RecWrapper,
    null,
    _react.default.createElement(
      ButtonBorder,
      null,
      _react.default.createElement(
        Button,
        _extends(
          {
            style: {
              outline: 'none'
            }
          },
          props
        ),
        _react.default.createElement(CloseIcon, null)
      )
    )
  )
}

exports.default = _default
