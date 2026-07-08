// ============================================================
// TREE VIEW - shared engine for the Passions and References pages
// ============================================================
// Both pages have the same shape: a search box, a nested clickable
// list on the left, and an expanded description panel on the right.
// This file contains all of THAT shared behaviour. Each page's own
// script (passions.js, references.js) just defines its data and
// calls initTreeView() once at the bottom, pointing at its own data
// array and element IDs.
//
// This also adds Wikipedia-style deep linking: every item gets its
// own URL, built from its name (and its parent names, so nested items
// stay unique). Clicking an item updates the address bar to match.
// Landing on a page with that URL already in it (e.g. someone linked
// straight to a specific item) will auto-expand, select, and scroll
// to that item on load.
// ============================================================

function initTreeView(config) {
  const listElement = document.getElementById(config.listElementId);
  const detailPanel = document.getElementById(config.detailElementId);
  const searchInput = document.getElementById(config.searchElementId);


  // ---------- SLUGS (turns "Connect Commune" into "connect-commune") ----------
  // Used to build a URL-safe, unique id for every item so it can be
  // linked to directly. Nested items include their parent's slug too,
  // e.g. "jamie-paige-flavour-foley-static", so two items with the
  // same name in different branches never collide.
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }


  // ---------- BUILD THE TREE ----------
  function buildTree(nodes, container, parentSlug) {
    nodes.forEach(function (node) {
      const slug = parentSlug ? parentSlug + '-' + slugify(node.name) : slugify(node.name);

      const li = document.createElement('li');
      li.classList.add('tree-item');
      li.id = slug;

      const row = document.createElement('div');
      row.classList.add('tree-row');

      const hasChildren = Array.isArray(node.children) && node.children.length > 0;

      if (hasChildren) {
        const arrow = document.createElement('span');
        arrow.classList.add('tree-arrow');
        arrow.textContent = '▸';
        row.appendChild(arrow);
      }

      const label = document.createElement('span');
      label.textContent = node.name;
      row.appendChild(label);

      li.appendChild(row);

      if (hasChildren) {
        const childList = document.createElement('ul');
        childList.classList.add('tree-children');
        buildTree(node.children, childList, slug);
        li.appendChild(childList);
      }

      row.addEventListener('click', function () {
        selectItem(li, row, node, hasChildren, slug);
      });

      container.appendChild(li);
    });
  }


  // ---------- SELECTING AN ITEM (used by both clicks and deep links) ----------
  function selectItem(li, row, node, hasChildren, slug) {
    if (node.description) {
      detailPanel.innerHTML = node.description;

      document.querySelectorAll('.tree-row.active').forEach(function (r) {
        r.classList.remove('active');
      });
      row.classList.add('active');
    }

    if (hasChildren) {
      li.classList.toggle('expanded');
    }

    // Update the address bar without adding a new history entry or
    // triggering a page jump - this is what makes the item linkable.
    history.replaceState(null, '', '#' + slug);
  }


  // ---------- SEARCH ----------
  function setupSearch() {
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.toLowerCase();
      const allItems = listElement.querySelectorAll('.tree-item');

      if (query === '') {
        allItems.forEach(function (li) {
          li.classList.remove('hidden');
          li.classList.remove('expanded');
        });
        return;
      }

      allItems.forEach(function (li) {
        const name = li.querySelector('.tree-row span:last-child').textContent.toLowerCase();
        const matches = name.includes(query);
        li.classList.toggle('hidden', !matches);
      });

      // Keep matches reachable by expanding and revealing their parents
      allItems.forEach(function (li) {
        if (!li.classList.contains('hidden')) {
          let parentLi = li.parentElement.closest('.tree-item');
          while (parentLi) {
            parentLi.classList.remove('hidden');
            parentLi.classList.add('expanded');
            parentLi = parentLi.parentElement.closest('.tree-item');
          }
        }
      });
    });
  }


  // ---------- DEEP LINKING ----------
  // If the page was loaded with a URL like "references.html#some-slug",
  // find that item, expand its parent folders, select it, scroll to
  // it, and give it a brief highlight flash so it's easy to spot.
  function handleInitialHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    let parentLi = target.parentElement.closest('.tree-item');
    while (parentLi) {
      parentLi.classList.add('expanded');
      parentLi = parentLi.parentElement.closest('.tree-item');
    }

    const row = target.querySelector(':scope > .tree-row');
    if (row) {
      row.click();
      row.classList.add('jump-highlight');
      setTimeout(function () {
        row.classList.remove('jump-highlight');
      }, 2000);
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


  // ---------- RUN IT ----------
  buildTree(config.data, listElement, '');
  setupSearch();
  handleInitialHash();
}
