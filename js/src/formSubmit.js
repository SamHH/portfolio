(function() {

  var submitFormAjax = {
    submitAllowed: false,
    init() {
      this.cacheDom();
      this.bindEvents();
      this.disallowSubmitIfTooQuick();
    },
    cacheDom() {
      this.formContainer = document.getElementById('jsFormContainer');
      this.form = document.getElementById('jsForm');
      this.formName = document.getElementById('jsFormName');
      this.formEmail = document.getElementById('jsFormEmail');
      this.formSubject = document.getElementById('jsFormSubject');
      this.formMessage = document.getElementById('jsFormMessage');
      this.formButton = document.getElementById('jsFormButton');
      this.formNotice = document.getElementById('jsFormNotice');
    },
    bindEvents() {
      this.form.addEventListener('submit', this.submitAjax.bind(this));
    },
    disallowSubmitIfTooQuick() {
      var timeBeforeSubmitAllowedInSeconds = 5;
      setTimeout(function() {
        this.submitAllowed = true;
      }.bind(this), timeBeforeSubmitAllowedInSeconds * 1000);
    },
    submitAjax() {
      // Prevent standard form submission
      event.preventDefault();

      if (this.submitAllowed === true) {
        // Change icon to fancy spinner while maintaining button width
        var buttonWidth = parseInt(window.getComputedStyle(this.formButton).getPropertyValue('width'));
        this.formButton.style.width = buttonWidth + 'px';
        this.formButton.innerHTML = '<span class="fa fa-spinner fa-spin"></span>';

        // Submit over AJAX
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', 'send-email.php');
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('name=' + encodeURIComponent(this.formName.value) + '&email=' + encodeURIComponent(this.formEmail.value) + '&subject=' + encodeURIComponent(this.formSubject.value) + '&message=' + encodeURIComponent(this.formMessage.value));

        httpRequest.onreadystatechange = function() {
          if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            if (httpRequest.responseText == 'success') {
              this.removeForm();
            } else {
              console.log('Email send failed...');
            }
          }
        }.bind(this);
      }
    },
    removeForm() {
      // Empty out form values
      this.formName.value = '';
      this.formEmail.value = '';
      this.formSubject.value = '';
      this.formMessage.value = '';

      // Hide form and show notice
      var formOpacityTransitionTimeInMs = 500;
      this.form.style.opacity = '0';
      setTimeout(function() {
        this.form.style.visibility = 'hidden';
        var formHeight = parseInt(window.getComputedStyle(this.form).getPropertyValue('height'));
        this.formNotice.style.top = '-' + (formHeight / 2) + 'px';
        this.formNotice.style.display = 'block';
        this.formNotice.style.opacity = '1';
      }.bind(this), formOpacityTransitionTimeInMs);
    }
  };
  submitFormAjax.init();

})();
