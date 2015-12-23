(function () {
  $(function () {
    // slate has a bug that creates the same id for example for `$query` and `query`
    // We uniquefy the ids here.
    var countById = {};
    $('h1, h2, h3, h4').each(function () {
      var el = $(this);
      var id = el.prop('id');
      if (countById.hasOwnProperty(id)) {
        countById[id] = countById[id] + 1;
        id = id + '-' + countById[id];
        el.prop('id', id);
      } else {
        countById[id] = 1;
      }
    });
  });
})();