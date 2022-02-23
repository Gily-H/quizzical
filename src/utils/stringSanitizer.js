export const sanitize = (sentence) => {
  return sentence.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
};
