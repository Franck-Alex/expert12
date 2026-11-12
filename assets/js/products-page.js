/* EXPERTS 12 — Filtrage des familles de produits */
(() => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-family-card');
  const emptyMessage = document.getElementById('filter-empty');

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      cards.forEach((card) => {
        const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });

      if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    });
  });
})();
