'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _Camera = require('styled-icons/evil/Camera')

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
  displayName: 'capture-button__Button',
  componentId: 'sc-15i9txl-0'
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
  displayName: 'capture-button__RecWrapper',
  componentId: 'sc-15i9txl-1'
})(['display:flex;flex-direction:column;align-items:center;'])

var ButtonBorder = _styledComponents.default.div.withConfig({
  displayName: 'capture-button__ButtonBorder',
  componentId: 'sc-15i9txl-2'
})([
  'border:8px solid rgba(255,255,255,0.4);height:80px;width:80px;border-radius:50%;'
])

var CameraIcon = (0, _styledComponents.default)(_Camera.Camera).withConfig({
  displayName: 'capture-button__CameraIcon',
  componentId: 'sc-15i9txl-3'
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
        _react.default.createElement(CameraIcon, null)
      )
    )
  )
}

exports.default = _default
