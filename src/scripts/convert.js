// Function to convert markdown to HTML
export default function convert (input) {

  let result = input.replace(/\n\n/, '<br><br>');

  return result;
};