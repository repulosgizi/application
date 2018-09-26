'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ImageUpload = function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload(props) {
    _classCallCheck(this, ImageUpload);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { file: '', imagePreviewUrl: '' };
    return _this;
  }

  ImageUpload.prototype._handleSubmit = function _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  };

  ImageUpload.prototype._handleImageChange = function _handleImageChange(e) {
    var _this2 = this;

    e.preventDefault();

    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = function () {
      _this2.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  ImageUpload.prototype.render = function render() {
    var _this3 = this;

    var imagePreviewUrl = this.state.imagePreviewUrl;

    var $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = React.createElement('img', { src: imagePreviewUrl });
    } else {
      $imagePreview = React.createElement(
        'div',
        { className: 'previewText' },
        'Please select an Image for Preview'
      );
    }

    return React.createElement(
      'div',
      { className: 'previewComponent' },
      React.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            return _this3._handleSubmit(e);
          } },
        React.createElement('input', { className: 'fileInput',
          type: 'file',
          onChange: function onChange(e) {
            return _this3._handleImageChange(e);
          } }),
        React.createElement(
          'button',
          { className: 'submitButton',
            type: 'submit',
            onClick: function onClick(e) {
              return _this3._handleSubmit(e);
            } },
          'Upload Image'
        )
      ),
      React.createElement(
        'div',
        { className: 'imgPreview' },
        $imagePreview
      )
    );
  };

  return ImageUpload;
}(React.Component);

ReactDOM.render(React.createElement(ImageUpload, null), document.getElementById("mainApp"));