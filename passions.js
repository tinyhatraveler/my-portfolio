// ============================================================
// PASSIONS / SKILLS DATA
// ============================================================
// Add new items here. Each one needs:
//   name         - shown in the clickable list
//   description  - shown on the right when clicked. This is plain
//                  HTML, so you can mix in tags anywhere you like:
//                    <strong>, <em>, <a>, <br> for text formatting
//                    <img src="images/whatever.jpg"> to drop in a photo
//                  Since it's just HTML, an <img> tag can go at the
//                  start, the end, or right in the middle of a
//                  sentence - wherever you want the image to sit
//                  relative to the text around it.
//
// To add a new item, copy one of the objects below, paste it as a
// new line, and change the values. Don't forget the comma at the
// end of each line except the last one.
// ============================================================

const passions = [
  {
    name: 'Create Mod',
    description: "<p>The create mod is one of my favourite things ever.</p> <p>It's a mechanical mod for Minecraft that allows for contraptions (yes that's literally what they are called). It's very fun but also pure chaos. </p> <p>Recently a mod called create aeronautics came out and now there's planes and stuff.</p> <p> It's very fun, very complicated and one of my personal favourite ways to waste an entire day on one small problem. Some images are below of somethings I've made. They aren't well made but they work.</p> <img src='images/2026-07-07_17.32.38.png'> <p>this is my first attempt at making an airship, you can see the interior below.</p> <img src='images/2026-07-07_17.32.57.png'> <img src='images/2026-07-07_17.33.30.png'> <p> this is my second attempt, way bigger scale way faster and way harder to drive. Interior below once again! </p> <img src='images/2026-07-07_17.33.53.png'> <img src='images/2026-07-07_17.36.56.png'> <p> this is an image of the factory I made. each one of these are machines that are used to make LOADS of different things. </p> <p>They are modular and automatic so I tell things where they go to make what and they keep the storage system stocked up.</p> <img src='images/2026-07-07_17.35.54.png'> <p> this is how i tell things where to go. dont try and work out how it works. I have no idea and I made it. </p> "
  },
  {
    name: 'Jamie Paige',
    description: "<p>my favourite music artist ever and also one of my favourite things to reference. She makes music mostly using vocal synths a very cool piece of technology covered more in the teto section. </p> <p>It's unfortunately been a hot second since the last solo song she released but she's been releasing bangers with her band (flavour foley) so its worth it. </p> <p>my favourites are: connect commune, static (both by the band), birdbrain, and your telling me a shrimp fried this rice. </p>. <p> One of the main reasons I like her music is its complexity. she uses a lot of motifs in her work, as well as lots of common (or meme) phrases. birdbrain is a song of the phrase running around like a chicken with its head cut off, rot for clout is number go up. while connect commune's base line (i think) is Morse code for the word connect.</p> <p> she also has the previously mentioned motifs, she uses them for recuring characters or themes (wow really). they are usually stuck to one album but do sometimes spread around (see birdbrain and when spring comes. or literally anything post 2024 and dyad) </p> <p> I'm personally a big fan of the themes a lot of her work has and also how they are so varied yet familiar, if anyone wanted to listen I could probably talk for hours about her entire library. </p> <p> wow thats a lot of text lol</p> "
  },
  {
    name: 'Teto Kasane',
    description: "The Red One"
  },
  {
    name: 'Team Fortress 2',
    description: "Dr sex is invincble we cant stop him."
  },
  {
    name: 'Futurama',
    description: "40% peak"
  },
  {
    name: 'SCP Foundation',
    description: "the bucket that kills you"
  },
  {
    name: 'Gravity Falls',
    description: "that god damned triangle."
  }
];


// ============================================================
// SHUFFLE
// ============================================================
// Randomizes the order of the array so the list is different on
// every page refresh. This is the Fisher-Yates shuffle: it walks
// backward through the list, swapping each item with a random
// earlier one, so every possible order is equally likely.
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// 
// shuffle(passions);


// ============================================================
// BUILD THE LIST
// ============================================================
// Turns the (now shuffled) array above into actual <li> elements
// on the page. Each item's data lives on the element itself via
// dataset, so we can read it back out again on click.
const listElement = document.getElementById('knowledge-list');

passions.forEach(function (passion, index) {
  const li = document.createElement('li');
  li.textContent = passion.name;
  li.dataset.index = index;   // remembers which passion this <li> maps to
  listElement.appendChild(li);
});


// ============================================================
// CLICK + SEARCH BEHAVIOUR
// ============================================================
const listItems = document.querySelectorAll('#knowledge-list li');
const detailPanel = document.getElementById('knowledge-detail');
const searchInput = document.getElementById('search');

listItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const passion = passions[item.dataset.index];

    detailPanel.innerHTML = '<p>' + passion.description + '</p>';

    listItems.forEach(function (i) { i.classList.remove('active'); });
    item.classList.add('active');
  });
});

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();

  listItems.forEach(function (item) {
    const matches = item.textContent.toLowerCase().includes(query);
    item.classList.toggle('hidden', !matches);
  });
});