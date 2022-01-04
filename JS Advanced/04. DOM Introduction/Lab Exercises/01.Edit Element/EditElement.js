function editElement(ref, match, replacer) {
    let matcher = new RegExp(match,'g');
    let text = ref.textContent;
    ref.textContent = text.replace(matcher, replacer);
}