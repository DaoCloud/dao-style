export default {
  bind(el) {
    el.addEventListener('click', function () {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        this.setSelectionRange(0, this.value.length);
      } else {
        let range;
        if (document.selection) {
          range = document.body.createTextRange();
          range.moveToElementText(el);
          range.select();
        } else if (window.getSelection) {
          const selection = window.getSelection(); // Save the selection.
          range = document.createRange();
          range.selectNodeContents(el);
          selection.removeAllRanges(); // Remove all ranges from the selection.
          selection.addRange(range); // Add the new range.
        }
      }
    });
  },
};
