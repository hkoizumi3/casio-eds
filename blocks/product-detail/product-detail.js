/*
 * Product detail block - displays product info from JSON2HTML-rendered BYOM content.
 * No special decoration needed; content is already in the DOM from the Mustache template.
 */

export default async function decorate(block) {
  // Optional: add any interactive behavior (e.g. gallery, add to cart) here
  block.dataset.blockStatus = 'loaded';
}
