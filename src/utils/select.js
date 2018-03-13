function select(el) {
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
    el.select();
    el.setSelectionRange(0, el.value.length);
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
}

export default select;
