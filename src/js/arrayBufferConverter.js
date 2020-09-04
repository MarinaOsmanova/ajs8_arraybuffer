export default class ArrayBufferConverter {
  load(buffer) {
    this.data = buffer;
  }

  toString() {
    let result = '';
    const bufferView = new Uint16Array(this.data);
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
