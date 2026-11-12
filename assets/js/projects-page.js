/* Petites améliorations progressives de la page Réalisations. */
(() => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
