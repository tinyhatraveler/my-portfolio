// ============================================================
// REFERENCES DATA
// ============================================================
// Same shape as passions.js - see that file's comments for the full
// rundown on writing descriptions (paragraphs, images, videos, etc).
//
// The one thing that matters more here: every item's name is turned
// into part of its URL (e.g. "MDN Web Docs" becomes "#mdn-web-docs"),
// so once this is live you can link straight to a specific reference
// from anywhere else on the site - or anywhere on the internet -
// with something like:
//
//   references.html#mdn-web-docs
//
// Nested items include their parent in the link too, e.g.
//   references.html#design-inspiration-brutalist-websites
//
// So: name things clearly, since the name IS the link.
// ============================================================

const references = [
  {
    name: 'MDN Web Docs',
    description: `<p>The reference I go back to more than any other for HTML, CSS, and JavaScript. If something isn't behaving the way I expect, this is the first place I check.</p>`
  },
  {
    name: 'Design inspiration',
    description: `<p>Sites and people I look at for layout and style ideas.</p>`,
    children: [
      {
        name: 'Brutalist websites',
        description: `<p>[Add notes here about what you like about this kind of design.]</p>`
      },
      {
        name: 'Horse Browser',
        description: `<p>The nested "trail" navigation this References/Passions page is based on.</p>`
      }
    ]
  },
  {
    name: 'Tools',
    description: `<p>Software and services I use regularly.</p>`,
    children: [
      {
        name: 'VS Code',
        description: `<p>[Add notes here.]</p>`
      },
      {
        name: 'GitHub Pages',
        description: `<p>[Add notes here - this is what's hosting this site.]</p>`
      }
    ]
  }
];


// ============================================================
// RUN IT
// ============================================================
initTreeView({
  data: references,
  listElementId: 'knowledge-list',
  detailElementId: 'knowledge-detail',
  searchElementId: 'search'
});
