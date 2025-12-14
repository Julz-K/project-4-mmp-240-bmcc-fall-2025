const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('is-open');
});
$(function () {
    console.log('Accordion script loaded.');
    var $accordion = $('.accordion');
    var $panels = $accordion.find('.accordion-panel');
    var $toggles = $accordion.find('.accordion-toggle');

    // Initial state: all panels hidden, all toggles collapsed
    $panels.hide().attr('hidden', true);
    $toggles.attr('aria-expanded', 'false');

    // Click handler for any accordion toggle
    $accordion.on('click', '.accordion-toggle', function () {
      var $toggle = $(this);
      var $item   = $toggle.closest('.accordion-item');
      var $panel  = $item.find('.accordion-panel').first();

      var isOpen = $toggle.attr('aria-expanded') === 'true';

      if (isOpen) {
        // Collapse
        $toggle.attr('aria-expanded', 'false');
        $panel.slideUp(300, function () {
          $panel.attr('hidden', true);
        });
      } else {
        // Expand
        $toggle.attr('aria-expanded', 'true');
        $panel.removeAttr('hidden').hide().slideDown(300);
      }
    });
  });