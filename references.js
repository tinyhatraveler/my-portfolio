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
    name: 'Gravity Falls',
    description: `one of my most beloved shows.
<p>because i grew up with it and have watched it A LOT i reference it so often I didn't notice i even did until my recent rewatch.</p>`,
    children: [
      {
        name: 'I cant reach it',
        description: `<p>when someone asks if i can pass something > say "I cant reach it" despite being visibly able to reach it</p>
clip below
<iframe src="https://www.youtube.com/embed/o2E2wLm_LlY" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
      },
      {
        name: 'Blood sweat tears',
        description: `Blood sweat tears and other bodily fluids its a quote from <p> S1.E3 "Headhunters"</p>
<iframe src="https://www.youtube.com/embed/RFD_Zh3C7bg" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
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
