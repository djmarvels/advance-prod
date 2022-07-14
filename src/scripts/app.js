/*
 * @title App
 * @description Application entry point
 */

// Polyfills
import '../scripts/utils/_closest.polyfill.js';
import '../scripts/utils/_matches.polyfill.js';

// Misc
// Use log() instead of console.log()
// const log = console.log.bind(console);

// Modules
import carousel from '../modules/carousel/carousel';
import navbar from '../modules/navbar/navbar';
import searchOverlay from '../modules/search-overlay/search-overlay';

// Components
import collapse from '../scripts/components/collapse.js';
import smoothScroll from '../scripts/components/smooth-scroll';
import toggleElement from '../scripts/components/toggle-element';

document.addEventListener('DOMContentLoaded', function() {

  // Modules
  carousel();
  navbar();
  searchOverlay();

  // Components
  collapse();
  smoothScroll();
  toggleElement();

})
