'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _button = _interopRequireDefault(require('./button'))

var _recordButton = _interopRequireDefault(require('./record-button'))

var _captureButton = _interopRequireDefault(require('./capture-button'))

var _closeButton = _interopRequireDefault(require('./close-button'))

var _stopButton = _interopRequireDefault(require('./stop-button'))

var _timer = _interopRequireDefault(require('./timer'))

var _countdown = _interopRequireDefault(require('./countdown'))

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var ActionsWrapper = _styledComponents.default.div.withConfig({
  displayName: 'render-actions__ActionsWrapper',
  componentId: 'dp6lnv-0'
})([
  'position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;padding-top:20px;padding-bottom:80px;'
])

var _default = function _default (_ref) {
  var isVideoInputSupported = _ref.isVideoInputSupported,
    isInlineRecordingSupported = _ref.isInlineRecordingSupported,
    thereWasAnError = _ref.thereWasAnError,
    isRecording = _ref.isRecording,
    isCameraOn = _ref.isCameraOn,
    streamIsReady = _ref.streamIsReady,
    isConnecting = _ref.isConnecting,
    isRunningCountdown = _ref.isRunningCountdown,
    countdownTime = _ref.countdownTime,
    timeLimit = _ref.timeLimit,
    isReplayingVideo = _ref.isReplayingVideo,
    isCreatingThumbnail = _ref.isCreatingThumbnail,
    onTurnOnCamera = _ref.onTurnOnCamera,
    onTurnOffCamera = _ref.onTurnOffCamera,
    onOpenVideoInput = _ref.onOpenVideoInput,
    onStartRecording = _ref.onStartRecording,
    onStopRecording = _ref.onStopRecording,
    onStopReplaying = _ref.onStopReplaying,
    onCapture = _ref.onCapture,
    onStopCapture = _ref.onStopCapture,
    onConfirm = _ref.onConfirm

  var renderContent = function renderContent () {
    var shouldUseVideoInput =
      !isInlineRecordingSupported && isVideoInputSupported

    if (
      (!isInlineRecordingSupported && !isVideoInputSupported) ||
      thereWasAnError ||
      isConnecting ||
      isRunningCountdown
    ) {
      return null
    }

    if (isCreatingThumbnail) {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(_closeButton.default, {
          onClick: onStopCapture,
          'data-qa': 'start-close-capture'
        }),
        _react.default.createElement(_captureButton.default, {
          onClick: onCapture,
          'data-qa': 'start-capture'
        })
      )
    }

    if (isReplayingVideo) {
      return _react.default.createElement(
        _react.default.Fragment,
        null,
        _react.default.createElement(
          _button.default,
          {
            onClick: onStopReplaying,
            'data-qa': 'start-replaying'
          },
          'Record another video'
        )
      )
    }

    if (isRecording) {
      return _react.default.createElement(_stopButton.default, {
        onClick: onStopRecording,
        'data-qa': 'stop-recording'
      })
    }

    if (isCameraOn && streamIsReady) {
      return _react.default.createElement(_recordButton.default, {
        onClick: onStartRecording,
        'data-qa': 'start-recording'
      })
    }

    return shouldUseVideoInput
      ? _react.default.createElement(
        _button.default,
        {
          onClick: onOpenVideoInput,
          'data-qa': 'open-input'
        },
        'Record a video'
      )
      : _react.default.createElement(
        _button.default,
        {
          onClick: onTurnOnCamera,
          'data-qa': 'turn-on-camera'
        },
        'Turn my camera ON'
      )
  }

  return _react.default.createElement(
    'div',
    null,
    isRecording &&
      _react.default.createElement(_timer.default, {
        timeLimit: timeLimit
      }),
    isRunningCountdown &&
      _react.default.createElement(_countdown.default, {
        countdownTime: countdownTime
      }),
    _react.default.createElement(ActionsWrapper, null, renderContent())
  )
}

exports.default = _default
