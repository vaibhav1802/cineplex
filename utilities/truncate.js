export const TruncateText = (inputText, maxCharLimit = 200) =>
  inputText && inputText.length > maxCharLimit
    ? `${inputText.substring(0, maxCharLimit)}...`
    : inputText
