// ============================================================
// PASSIONS / SKILLS DATA
// ============================================================
// Add new items here. Each one needs:
//   name         - shown in the clickable list
//   description  - (optional) shown on the right when clicked. Plain
//                  HTML, so you can mix in tags anywhere you like:
//                    <p>...</p>          paragraph, adds space after it
//                    <strong>, <em>, <a>, <br>
//                    <img src="images/whatever.jpg">
//                    <iframe src="...">  YouTube embed
//   children     - (optional) an array of more items nested underneath
//                  this one, same shape as this one - as deep as you
//                  like. Use this for things like:
//                    Jamie Paige > Flavour Foley > Static
//
// A "folder" (something with children) can ALSO have its own
// description - clicking it both shows that description AND expands
// to reveal what's nested inside.
//
// The order you list things in is the order they'll appear - nothing
// gets shuffled, so this array doubles as your sort order.
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
    name: 'music',
    description: "music is cool, see the other things for specifics like what were you expecting?",
    children: [
    {
      name: 'Jamie Paige',
      description: `<p>my favourite music artist ever and also one of my favourite things to reference. She makes music mostly using vocal synths a very cool piece of technology covered more in the teto section. </p> It's unfortunately been a hot second since the last solo song she released but she's been releasing bangers with her band (flavour foley) so its worth it. </p> <p>my favourites are: connect commune, static (both by the band), birdbrain, and your telling me a shrimp fried this rice. </p>. <p> One of the main reasons I like her music is its complexity. she uses a lot of motifs in her work, as well as lots of common (or meme) phrases. birdbrain is a song of the phrase running around like a chicken with its head cut off, rot for clout is number go up. while connect commune's base line (i think) is Morse code for the word connect.</p> <p> she also has the previously mentioned motifs, she uses them for recuring characters or themes (wow really). they are usually stuck to one album but do sometimes spread around (see birdbrain and when spring comes. or literally anything post 2024 and dyad) </p> <p> I'm personally a big fan of the themes a lot of her work has and also how they are so varied yet familiar, if anyone wanted to listen I could probably talk for hours about her entire library. </p> <p> wow thats a lot of text lol</p> <iframe src="https://www.youtube.com/embed/0iVlSNpq8i8" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      children: [
        {
          name: 'Birdbrain',
          description: `<p>birdbrain is one of my favourite songs period. the use of very silly vocab mixed with the wordplay, tuning and instrumentals being all on point makes for such an amazing song.</p> <p>the song has perminantly altered the way i talk, wether its for the better or the worse thats up to you. but what i do know for sure is that i do know the goofy ass dance from the music video.</p> <p>but like genuinly who the hell has even heard of the words:</p> <li>bilious</li> <li>Apathetic</li> <li>argonaut</li> <br> <p>and who the hell thinks of a rhyme like "counterfeited crouning cosmonaut" or "Bilious baby braying babble bent her beak (what a freak)". absoulte fire.</p> <p>I will use any of these stupid medival sounding words at any oportunity i get. unfortunaltly they are VERY specific and they have only come up a total of 1 time</p> <p> </p> <p>the song was also a colabiration with "ok glass" a VERY small musiction with only a couple hundred subscribes before this song dropped. if you listen to the song he plays the accordian and also did a full cover of the song a while after its release, it feels very weird al but thats probably because of the aformentioned accordian. </p> `
        },
        {
         name: 'Flavour Foley',
         description: `<p>i love flavour foley for the same reasons i love jamie page, mostly because they all work off eachother so well. i dont have anything more to say that isnt song specific, so go look at those!</p>`,
         children: [
           {
             name: 'Static',
             description: `<p>[Add your notes on Static here - move the relevant bit out of the Flavour Foley text above if you want it to live specifically here instead.]</p>`
           },
           {
             name: 'Connect Commune',
             description: `<p>[Add your notes on Connect Commune here - e.g. the Morse code bassline detail currently sits in the Flavour Foley text above.]</p>`
            }
          ]
        }
      ]
    }
    ]
  },
  //{
  //  name: 'Teto Kasane',
  //  description: "The Red One"
  //},
 // {
 //   name: 'Team Fortress 2',
 //   description: "Dr sex is invincble we cant stop him."
 // },
 // {
 //   name: 'Futurama',
 //   description: "40% peak"
 // },
 // {
 //   name: 'SCP Foundation',
 //   description: "the bucket that kills you"
 // },
 // {
 //   name: 'Gravity Falls',
 //   description: "that god damned triangle."
 // }
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
// RUN IT
// ============================================================
// All the actual list-building, click, search, and deep-link
// behaviour lives in tree-view.js (shared with the References page)
// so it isn't duplicated here. This just tells it which data and
// which elements on THIS page to use.
initTreeView({
  data: passions,
  listElementId: 'knowledge-list',
  detailElementId: 'knowledge-detail',
  searchElementId: 'search'
});
