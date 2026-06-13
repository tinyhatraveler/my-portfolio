const tips = [
  "basic html",
  "basic git",
  "custom email domain setup",
  "advanced knowledge about iphone X-17",
  "tf2 modding",
  "tf2 server hosting",
  "how to make a website",
  "how to make a discord bot",
  "how to make a youtube channel",
  "how to make a twitter account",
  "how to make a reddit account",
  "how to use ios",
  "how to use the apple shorcuts app",
  "create areonautics",
  "create mod",
  "minecraft",
  "redstone",
  "very basic python",
  "extensive photoshop knowledge",
  "how to procrastinate",
  "extensive knowledge of feminising hrt",
  "the art of hiding",
  "how to stop people from noticing stuff",
  "how to use android",
  "how to install and use linux",
  "how to use mac os",
  "how to use windows",
  "how dialup internet works",
  "current political climate of america",
  "current political climate of the UK",
  "the entire script for meet the spy",
  "fortnite",
  "stormworks",
  "how to use repitition well",
  "how to use repitition well",
  "how to pull off a propeller hat",
  "flipper zero",
  "typeography",
  "how to use the swiss style correctly",
  "maximalism",
  "minimalism",
  "gcse maths",
  "tripple science at gcse",
  "how to set up a debrid service",
  "how torrenting works",
  "vpns in general",
  "an advanced understanding of how the us legal system works",
  "an advanced understanding of how the uk legal system works",
  "the king in yellow",
  "way too many scps",
  "jamie paige lore",
  "basicly every jamie paige lyric",
  "NOT PHYSICS",
  "how to ski",
  "bikeability level 1",
  "grade 3 guitar",
  "how vocal synths work",
  "the symptoms of ADHD",
  "how to play roblox grace (rest in peak)",
  "harry potter pupet palls",
  "the mess that is the lore of futurama",
  "how to debate someone",
  "how to play devils advocate",
  "how thought can affect random chance",
  "how to focssil hunt",
  "air hockey",
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const list = document.getElementById("knowledge-list");
const search = document.getElementById("search");

function renderList(filter = "") {
  list.innerHTML = "";
  const filtered = tips.filter(tip => tip.toLowerCase().includes(filter.toLowerCase()));

  const count = filtered.length;
  document.getElementById("result-count").textContent = count === 1 ? "1 result" : `${count} results`;

  filtered.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    list.appendChild(li);
  });
}

search.addEventListener("input", () => {
  renderList(search.value);
});

shuffle(tips);
renderList();