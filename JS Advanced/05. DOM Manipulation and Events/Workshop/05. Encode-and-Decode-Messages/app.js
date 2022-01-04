function encodeAndDecodeMessages() {
    let decodedText = document.querySelector('textarea[placeholder="Write your message here..."]');
    let encodedText = document.querySelector('textarea[placeholder="No messages..."]');

    decodedText.parentElement.querySelector('button').addEventListener('click', encode);
    encodedText.parentElement.querySelector('button').addEventListener('click', decode);

    function encode() {
        let message = decodedText.value;
        let msgArr = message.split('');
        msgArr = msgArr.map(c => String.fromCharCode(c.charCodeAt() + 1));
        let encoded = msgArr.join('');
        encodedText.value = encoded;
        decodedText.value = '';
    }

    function decode() {
        let encoded = encodedText.value;
        let msgArr = encoded.split('');
        msgArr = msgArr.map(c => String.fromCharCode(c.charCodeAt() - 1));
        let message = msgArr.join('');
        encodedText.value = message;
    }
}