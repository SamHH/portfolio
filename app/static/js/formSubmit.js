module.exports = {
  timeBeforeSubmitAllowedInSeconds: 5,
  formFadeTransitionTimeInSeconds: 0.5,
  submitAllowed: false,
  init() {
    this.cacheDom();
    this.bindEvents();
    this.disallowSubmitIfTooQuick();
  },
  cacheDom() {
    this.formContainer = document.getElementById('jsFormContainer');
    this.form = document.getElementById('jsForm');
    this.formButton = document.getElementById('jsFormButton');
    this.formNotice = document.getElementById('jsFormNotice');
    this.captchaResponse = document.getElementById('g-recaptcha-response');
  },
  bindEvents() {
    this.form.addEventListener('submit', this.submitAjax.bind(this));
  },
  disallowSubmitIfTooQuick() {
    setTimeout(function () {
      this.submitAllowed = true;
    }.bind(this), this.timeBeforeSubmitAllowedInSeconds * 1000);
  },
  submitAjax() {
    // Prevent standard form submission
    event.preventDefault();

    if (!this.submitAllowed) return;

    // Change icon to fancy spinner while maintaining minimum button width
    let buttonWidth = parseInt(window.getComputedStyle(this.formButton).getPropertyValue('width'));
    this.formButton.style.width = buttonWidth + 'px';
    this.formButton.innerHTML = '<div class="loader"></div>';

    // Submit over AJAX
    let httpRequest = new XMLHttpRequest();
    httpRequest.open(this.form.method, this.form.action);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(
      'name=' + encodeURIComponent(this.form.elements.namedItem('name').value) +
      '&email=' +
      encodeURIComponent(this.form.elements.namedItem('email').value) +
      '&subject=' + encodeURIComponent(this.form.elements.namedItem('subject').value) +
      '&message=' + encodeURIComponent(this.form.elements.namedItem('message').value) +
      '&ajax=yes'
    );

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        if (httpRequest.responseText === 'success') {
          this.removeForm();
        } else {
          console.error('Email send failed: ' + httpRequest.responseText);
        }
      }
    }.bind(this);
  },
  removeForm() {
    // Empty out form values
    this.form.reset();

    // Hide form and show notice
    this.form.style.opacity = '0';
    setTimeout(function () {
      this.form.style.visibility = 'hidden';
      let formHeight = parseInt(window.getComputedStyle(this.form).getPropertyValue('height'));
      this.formNotice.style.top = '-' + (formHeight / 2) + 'px';
      this.formNotice.style.display = 'block';
      // Wait a short amount of time before setting this as otherwise it can be set before the display:block; CSS is updated, thereby preventing the transition from working
      setTimeout(function () {
        this.formNotice.style.opacity = '1';
      }.bind(this), 50);
    }.bind(this), this.formFadeTransitionTimeInSeconds * 1000);
  }
};
