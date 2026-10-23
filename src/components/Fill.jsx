// Renders text that may contain [sample] values; the brackets are only markers in the data file.
export default function Fill({ text }) {
  return text.replace(/\[([^\]]+)\]/g, '$1')
}
