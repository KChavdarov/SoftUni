function extractFile(path) {
    let file = path.substring(path.lastIndexOf('\\') + 1);
    let name = file.substring(0, file.lastIndexOf('.'));
    let extension = file.substring(file.lastIndexOf('.') + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');