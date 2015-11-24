'use strict';

(function () {

  var bubbles = {
    activated: false,
    numBubbles: 25,
    minimumBubbleSizeInPx: 3,
    maximumBubbleSizeInPx: 10,
    init: function init() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.bubblesContainer = document.getElementById('jsBubbles');
    },
    bindEvents: function bindEvents() {
      document.addEventListener('scroll', this.checkBubblesVisibility.bind(this));
      this.bubblesContainer.addEventListener('animationend', this.removeBubbles.bind(this));
    },

    // This can probably be improved:
    // Presently just triggers once at bottom of page
    // Also doesn't yet remove above scroll event listener and instead uses the this.activated boolean
    checkBubblesVisibility: function checkBubblesVisibility() {
      if (this.activated === false && window.pageYOffset === document.body.clientHeight - window.innerHeight) {
        this.createBubbles();
        this.activated = true;
      }
    },
    createBubbles: function createBubbles() {
      for (var i = 0; i < this.numBubbles; i++) {
        var bubbleElement = document.createElement('div');
        bubbleElement.className = 'bubble-node';
        this.bubblesContainer.appendChild(bubbleElement);
      }
      this.alterBubbles();
    },
    alterBubbles: function alterBubbles() {
      var bubbleNodes = document.getElementsByClassName('bubble-node');
      for (var i = 0; i < bubbleNodes.length; i++) {
        var bubblePosition = Math.floor(Math.random() * 101);
        var bubbleSize = this.minimumBubbleSizeInPx + Math.floor(Math.random() * (this.maximumBubbleSizeInPx - this.minimumBubbleSizeInPx + 1)) + 'px';

        bubbleNodes[i].style.width = bubbleSize;
        bubbleNodes[i].style.height = bubbleSize;
        bubbleNodes[i].style.left = bubblePosition + '%';
      }
    },
    removeBubbles: function removeBubbles() {
      this.bubblesContainer.style.display = 'none';
    }
  };
  bubbles.init();
})();

(function () {

  var submitFormAjax = {
    submitAllowed: false,
    init: function init() {
      this.cacheDom();
      this.bindEvents();
      this.disallowSubmitIfTooQuick();
    },
    cacheDom: function cacheDom() {
      this.formContainer = document.getElementById('jsFormContainer');
      this.form = document.getElementById('jsForm');
      this.formName = document.getElementById('jsFormName');
      this.formEmail = document.getElementById('jsFormEmail');
      this.formSubject = document.getElementById('jsFormSubject');
      this.formMessage = document.getElementById('jsFormMessage');
      this.formButton = document.getElementById('jsFormButton');
      this.formNotice = document.getElementById('jsFormNotice');
    },
    bindEvents: function bindEvents() {
      this.form.addEventListener('submit', this.submitAjax.bind(this));
    },
    disallowSubmitIfTooQuick: function disallowSubmitIfTooQuick() {
      var timeBeforeSubmitAllowedInSeconds = 5;
      setTimeout((function () {
        this.submitAllowed = true;
      }).bind(this), timeBeforeSubmitAllowedInSeconds * 1000);
    },
    submitAjax: function submitAjax() {
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
        httpRequest.send('name=' + encodeURIComponent(this.formName.value) + '&email=' + encodeURIComponent(this.formEmail.value) + '&subject=' + encodeURIComponent(this.formSubject.value) + '&message=' + encodeURIComponent(this.formMessage.value) + '&ajax=yes');

        httpRequest.onreadystatechange = (function () {
          if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            if (httpRequest.responseText == 'success') {
              this.removeForm();
            } else {
              console.log('Email send failed: ' + httpRequest.responseText);
            }
          }
        }).bind(this);
      }
    },
    removeForm: function removeForm() {
      // Empty out form values
      this.formName.value = '';
      this.formEmail.value = '';
      this.formSubject.value = '';
      this.formMessage.value = '';

      // Hide form and show notice
      var formOpacityTransitionTimeInMs = 500;
      this.form.style.opacity = '0';
      setTimeout((function () {
        this.form.style.visibility = 'hidden';
        var formHeight = parseInt(window.getComputedStyle(this.form).getPropertyValue('height'));
        this.formNotice.style.top = '-' + formHeight / 2 + 'px';
        this.formNotice.style.display = 'block';
        this.formNotice.style.opacity = '1';
      }).bind(this), formOpacityTransitionTimeInMs);
    }
  };
  submitFormAjax.init();
})();

(function () {

  var jobTitle = {
    init: function init() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.target = document.getElementById('jsJobTitleText');
    },
    bindEvents: function bindEvents() {
      this.target.onclick = this.changeText;
    },
    changeText: function changeText() {
      this.innerHTML = 'full-stack web developer specialising in frontend';
      this.style.animation = 'none';
      this.style.cursor = 'default';
    }
  };
  jobTitle.init();
})();

(function () {

  var nav = {
    activeTabClassName: 'active',
    init: function init() {
      this.cacheDom();
      this.checkCompat();
    },
    cacheDom: function cacheDom() {
      this.nav = document.getElementById('jsNav');
      this.fold = document.getElementById('jsFold');
      this.anchors = document.getElementsByClassName('anchor');
    },
    checkCompat: function checkCompat() {
      // If classList is supported, set header position to fixed and run other scripts
      if (this.nav.classList) {
        this.setNavFixed();
        this.setStyleVars();
        this.setNavOffset();
        this.checkScrollPosRelToAnchors(); // Run once to activate on page load prior to any scrolling
        this.bindEvents();
      }
    },
    setStyleVars: function setStyleVars() {
      var navStyles = window.getComputedStyle(this.nav);
      var foldStyles = window.getComputedStyle(this.fold);

      this.hitboxSize = parseInt(foldStyles.getPropertyValue('padding-top')) - parseInt(navStyles.getPropertyValue('height'));
      this.navColorActivateClassName = 'active';
      this.anchorOffsetDueToNav = '-' + parseInt(navStyles.getPropertyValue('height')) + 'px';
    },
    bindEvents: function bindEvents() {
      document.addEventListener('scroll', _.throttle((function () {
        // Throttle prevents these functions from running more often than the time specified in ms
        this.updateHeaderActiveState();
        this.checkScrollPosRelToAnchors();
      }).bind(this), 500));
    },
    setNavFixed: function setNavFixed() {
      this.nav.style.position = 'fixed';
    },
    setNavOffset: function setNavOffset() {
      for (var i = 0; i < this.anchors.length; i++) {
        this.anchors[i].style.top = this.anchorOffsetDueToNav;
      }
    },
    updateHeaderActiveState: function updateHeaderActiveState() {
      if (window.pageYOffset > this.hitboxSize) {
        this.nav.classList.add(this.navColorActivateClassName);
      } else {
        this.nav.classList.remove(this.navColorActivateClassName);
      }
    },
    checkScrollPosRelToAnchors: function checkScrollPosRelToAnchors() {
      var furthest = null;

      // If at end of document, use last anchor (as good chance last anchor not big enough to get triggered otherwise)
      if (window.pageYOffset == document.body.clientHeight - window.innerHeight) {
        furthest = this.anchors.length - 1;
      } else {
        for (var i = 0; i < this.anchors.length; i++) {
          // If scrolled to or past the anchor position set this as new furthest and move onto next anchor
          if (window.pageYOffset >= this.anchors[i].offsetTop) {
            furthest = i;
          } else {
            break;
          }
        }
      }
      this.setActiveNavTab(furthest);
    },
    setActiveNavTab: function setActiveNavTab(tabToActiveIndex) {
      // If new active tab not already set as active tab
      if (!this.nav.getElementsByTagName('li')[tabToActiveIndex].classList.contains(this.activeTabClassName)) {
        // Remove active state from previously active tab
        if (this.nav.getElementsByClassName(this.activeTabClassName).length) {
          this.nav.getElementsByClassName(this.activeTabClassName)[0].classList.remove(this.activeTabClassName);
        }

        // Add active state to new active tab
        this.nav.getElementsByTagName('li')[tabToActiveIndex].classList.add(this.activeTabClassName);
      }
    }
  };
  nav.init();
})();
//# sourceMappingURL=main.js.map
