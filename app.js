const appLinks = {
  yahooTransit: {
    label: "Yahoo乗換案内アプリを開く",
  }
};

const tripDays = [
  {
    date: "8/4",
    day: "DAY 01",
    title: "移動と再会の岡山",
    description: "尾張瀬戸から新幹線で岡山へ。岡山の実家で家族と過ごし、蔵 インに宿泊。",
    summary: [
      ["出発", "尾張瀬戸駅"],
      ["到着", "蔵 イン"],
      ["移動", "電車・新幹線"]
    ],
    entries: [
      {
        time: "9:30–10:30",
        type: "TRAIN",
        appLink: { ...appLinks.yahooTransit, route: { from: "尾張瀬戸駅", to: "名古屋駅", date: "2026-08-04", time: "09:30" } },
        title: "尾張瀬戸駅 → 名古屋駅",
        detail: "尾張瀬戸駅から名古屋駅へ",
        image: "./写真/owari_seto.jpg",
        alt: "尾張瀬戸駅周辺",
        map: "尾張瀬戸駅"
      },
      {
        time: "12:00–13:00",
        type: "SHINKANSEN",
        appLink: { ...appLinks.yahooTransit, route: { from: "名古屋駅", via: ["岡山駅"], to: "新倉敷駅", date: "2026-08-04", time: "11:10" } },
        title: "名古屋 → 岡山 → 新倉敷",
        detail: "名古屋(11:10) → のぞみ21号 → 岡山(12:47)\n岡山(12:50) → こだま949号 → 新倉敷(12:59)\n新幹線",
        image: "./写真/nagoya_station.jpg",
        alt: "名古屋駅",
        map: "新倉敷駅"
      },
      {
        time: "13:30–20:00",
        type: "FAMILY",
        title: "岡山の実家",
        detail: "おばあちゃんとお姉ちゃんと会う。晩御飯",
        image: "./写真/yakage_jikka.png",
        alt: "岡山の町並み",
        map: "岡山県",
        facilityButtonLabel: "アウトドアヴィレッジやかげ",
        facilityList: [
          {
            name: "アウトドアヴィレッジやかげ",
            image: "./写真/outdoor_yakage.png",
            alt: "アウトドアヴィレッジやかげ",
            officialUrl: "https://www.okayama-kanko.jp/okatabi/detail_1807.html",
            mapQuery: "アウトドアヴィレッジやかげ"
          }
        ]
      },
      {
        time: "20:00–",
        type: "STAY",
        title: "蔵 イン",
        detail: "宿泊",
        image: "./写真/kura_inn.jpg",
        alt: "蔵 イン",
        map: "蔵 イン 岡山",
        officialLinks: [{ label: "蔵INN 公式", url: "https://kurainn.com/" }]
      }
    ]
  },
  {
    date: "8/5",
    day: "DAY 02",
    title: "うどんと美術館、淡路島",
    description: "朝食後に岡山の実家へ。新倉敷からレンタカーで坂出、大塚国際美術館、淡路島へ移動。",
    summary: [
      ["出発", "岡山の実家"],
      ["到着", "グランドメルキュール淡路島"],
      ["移動", "レンタカー"]
    ],
    entries: [
      {
        time: "7:30–8:00",
        type: "BREAKFAST",
        title: "蔵 インで朝食",
        detail: "朝食",
        image: "./写真/kura_inn_break_fast.jpg",
        alt: "蔵 インの朝食",
        officialLinks: [{ label: "蔵INN 公式", url: "https://kurainn.com/" }]
      },
      {
        time: "9:00–10:30",
        type: "FAMILY",
        title: "岡山の実家",
        detail: "",
        image: "./写真/yakage_jikka.png",
        alt: "岡山の町並み",
        map: "岡山県"
      },
      {
        time: "11:30–",
        type: "CAR",
        title: "トヨタレンタカー 新倉敷駅店",
        detail: "レンタカーを借りる",
        image: "./写真/toyota_rentacar.jpg",
        alt: "トヨタレンタカー",
        map: "トヨタレンタカー 新倉敷駅店",
        officialLinks: [{ label: "トヨタ公式", url: "https://rent.toyota.co.jp/shop/?region=H&station=0045" }],
        reservationLink: { label: "予約メールを見る", url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#starred/FMfcgzQgMgNtgJHHHgHzDTwGTmQMzdfg" }
      },
      {
        time: "12:30–",
        type: "LUNCH",
        title: "昼食 讃岐うどん",
        detail: "",
        image: "./写真/sanuki_udon.jpg",
        alt: "讃岐うどん",
        map: "高松 讃岐うどん",
        mapPlaces: [
          "香川県高松市勅使町302-7",
          "香川県坂出市川津町3537-1",
          "香川県高松市檀紙町851-1",
          "香川県坂出市川津町3355-2",
          "香川県高松市円座町340"
        ],
        restaurantList: [
          {
            name: "古奈や",
            area: "高松・鬼無",
            address: "香川県高松市勅使町302-7",
            tabelogUrl: "https://tabelog.com/kagawa/A3701/A370101/37001256/"
          },
          {
            name: "手打ちうどん かまや",
            area: "坂出",
            address: "香川県坂出市川津町3537-1",
            tabelogUrl: "https://tabelog.com/kagawa/A3702/A370201/37012661/"
          },
          {
            name: "てら屋うどん",
            area: "高松・円座",
            address: "香川県高松市檀紙町851-1",
            tabelogUrl: "https://tabelog.com/kagawa/A3701/A370101/37001079/"
          },
          {
            name: "めんや七福 別邸",
            area: "坂出",
            address: "香川県坂出市川津町3355-2",
            tabelogUrl: "https://tabelog.com/kagawa/A3702/A370201/37008600/"
          },
          {
            name: "宮武うどん",
            area: "高松・円座",
            address: "香川県高松市円座町340",
            tabelogUrl: "https://tabelog.com/kagawa/A3701/A370101/37005339/"
          }
        ]
      },
      {
        time: "14:00–15:30",
        type: "MUSEUM",
        title: "大塚国際美術館",
        detail: "",
        image: "./写真/ostuka_museum.png",
        alt: "大塚国際美術館",
        map: "大塚国際美術館",
        officialLinks: [{ label: "美術館公式", url: "https://o-museum.or.jp/" }]
      },
      {
        time: "15:30–16:30",
        type: "DRIVE",
        title: "淡路島へ",
        detail: "うずの丘 大鳴門橋記念館、道の駅うずしお",
        image: "./写真/uzushio.jpg",
        alt: "うずの丘 大鳴門橋記念館と鳴門の海",
        map: "うずの丘 大鳴門橋記念館",
        officialLinks: [
          { label: "うずの丘公式", url: "https://kinen.uzunokuni.com/" },
          { label: "道の駅公式", url: "https://eki.uzunokuni.com/" }
        ]
      },
      {
        time: "17:30–",
        type: "HOTEL",
        title: "グランドメルキュール淡路島",
        detail: "夕食＆宿泊",
        image: "./写真/grand-mercure-awajiisland.jpg",
        alt: "グランドメルキュール淡路島",
        map: "グランドメルキュール淡路島",
        officialLinks: [{ label: "ホテル公式", url: "https://grand-mercure-awajiisland-resortandspa.jp/" }],
        facilityButtonLabel: "ホテル夕食",
        facilityList: [
          {
            name: "グランドメルキュール淡路島 ホテル夕食",
            image: "./写真/hotel_dinner.png",
            alt: "グランドメルキュール淡路島の夕食",
            officialUrl: "https://grand-mercure-awajiisland-resortandspa.jp/restaurant/le-sensoriel/buffet/#dinner"
          }
        ]
      }
    ]
  },
  {
    date: "8/6",
    day: "DAY 03",
    title: "淡路島から神戸へ",
    description: "朝食後に淡路夢舞台へ。明石海峡大橋を渡って神戸を観光し、新神戸から名古屋へ。",
    summary: [
      ["出発", "グランドメルキュール淡路島"],
      ["到着", "尾張瀬戸駅"],
      ["移動", "車・新幹線"]
    ],
    entries: [
      {
        time: "7:30–8:00",
        type: "BREAKFAST",
        title: "朝食",
        detail: "バイキング",
        image: "./写真/grand-mercure-awajiisland.jpg",
        alt: "グランドメルキュール淡路島",
        officialLinks: [{ label: "ホテル公式", url: "https://grand-mercure-awajiisland-resortandspa.jp/" }],
        facilityButtonLabel: "ホテル朝食",
        facilityList: [
          {
            name: "グランドメルキュール淡路島 ホテル朝食",
            image: "./写真/hotel_break_fast.png",
            alt: "グランドメルキュール淡路島の朝食",
            officialUrl: "https://grand-mercure-awajiisland-resortandspa.jp/restaurant/le-sensoriel/buffet/#breakfast"
          }
        ]
      },
      {
        time: "9:30–11:00",
        type: "SPOT",
        title: "淡路夢舞台",
        detail: "",
        image: "./写真/yumebutai.jpg",
        alt: "淡路夢舞台",
        map: "淡路夢舞台",
        officialLinks: [{ label: "淡路夢舞台公式", url: "https://www.yumebutai.co.jp/" }]
      },
      {
        time: "11:00–12:00",
        type: "DRIVE",
        title: "明石海峡大橋を渡り神戸",
        detail: "",
        image: "./写真/akashi_hashi.jpg",
        alt: "明石海峡大橋",
        map: "明石海峡大橋",
        officialLinks: [{ label: "JB本四高速公式", url: "https://www.jb-honshi.co.jp/corp_index/technology/introduction/introduction_akashi.html" }]
      },
      {
        time: "12:00–14:30",
        type: "KOBE",
        title: "昼食と神戸観光",
        detail: "",
        image: "./写真/kobe.jpg",
        alt: "神戸の景色",
        map: "神戸",
        officialLinks: [{ label: "神戸観光公式", url: "https://www.feel-kobe.jp/" }],
        facilityList: [
          {
            name: "atoa",
            image: "./写真/atoa.jpg",
            alt: "atoa",
            officialUrl: "https://atoa-kobe.jp/",
            parking: "タイムズ神戸新港町"
          }
        ]
      },
      {
        time: "15:30–",
        type: "SOUVENIR",
        officialLinks: [{ label: "お土産を見る", url: "https://www.dailyservice.co.jp/souvenir/shin-kobe" }],
        title: "新神戸駅",
        detail: "お土産を買う",
        notice: "ANAクラウンプラザホテル神戸に向かいトヨタレンタカー返却専用ゲートへ",
        image: "./写真/shinkobe.jpg",
        alt: "新神戸駅",
        map: "新神戸駅",
        facilityButtonLabel: "トヨタレンタカー新神戸駅前店",
        facilityList: [
          {
            name: "トヨタレンタカー新神戸駅前店",
            image: "./写真/toyota_rentacar_shinkobe.jpg",
            alt: "トヨタレンタカー新神戸駅前店",
            address: "〒650-0002 神戸市中央区北野町1-1 ANAクラウンプラザ神戸5F",
            officialUrl: "https://rent.toyota.co.jp/shop/detail.aspx?eCode=008&lat=124924771&lon=486712924&mode=&rCode=65402&udFlg=2",
            mapQuery: "〒650-0002 神戸市中央区北野町1-1 ANAクラウンプラザ神戸5F"
          }
        ]
      },
      {
        time: "16:00–17:30",
        type: "SHINKANSEN",
        appLink: { ...appLinks.yahooTransit, route: { from: "新神戸駅", to: "名古屋駅", date: "2026-08-06", time: "16:00" } },
        title: "新神戸 → 名古屋",
        detail: "新神戸(16:01) → のぞみ168号 → 名古屋(17:04)\n新幹線",
        image: "./写真/nagoya_station.jpg",
        alt: "新神戸駅",
        map: "新神戸駅"
      },
      {
        time: "17:30–18:30",
        type: "TRAIN",
        appLink: { ...appLinks.yahooTransit, route: { from: "名古屋駅", to: "尾張瀬戸駅", date: "2026-08-06", time: "17:30" } },
        title: "名古屋駅 → 尾張瀬戸駅",
        detail: "",
        image: "./写真/owari_seto.jpg",
        alt: "名古屋駅",
        map: "尾張瀬戸駅"
      }
    ]
  }
];

const iconPaths = {
  share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.3"></circle><circle cx="6" cy="12" r="2.3"></circle><circle cx="18" cy="19" r="2.3"></circle><path d="m8.1 11 7.8-4.6M8.1 13l7.8 4.6"></path></svg>',
  arrowRight: '<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"></path></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="1.5"></rect><path d="M7 3.5v4M17 3.5v4M3.5 9h17"></path></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9"></path><path d="M18 13v5.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H11"></path></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M20 10.5c0 5.2-8 10-8 10s-8-4.8-8-10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10.5" r="2.4"></circle></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="m3.5 10.5 8.5-7 8.5 7"></path><path d="M5.5 9.5v10h13v-10M9.5 19.5v-6h5v6"></path></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M5 3.5h14v17H5z"></path><path d="M8.5 8h7M8.5 12h7M8.5 16h4"></path></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4.5 4.5L19 7"></path></svg>'
};

function iconKey(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

document.querySelectorAll("[data-icon]").forEach((node) => {
  const key = iconKey(node.dataset.icon);
  if (iconPaths[key]) node.innerHTML = iconPaths[key];
});

const dayPanel = document.querySelector("#dayPanel");
const dayTabs = [...document.querySelectorAll(".day-tab")];

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsMultiLocationUrl(places) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(places.join("|"))}`;
}

function yahooTransitUrl(route) {
  const params = new URLSearchParams({
    from: route.from,
    to: route.to,
    type: "1",
    ticket: "ic",
    expkind: "1",
    ws: "3",
    s: "0",
    al: "1",
    shin: "1",
    ex: "1",
    hb: "1",
    lb: "1",
    sr: "1"
  });
  (route.via || []).forEach((station, index) => params.set(`via${String(index + 1).padStart(2, "0")}`, station));
  if (route.date) {
    const [year, month, day] = route.date.split("-");
    params.set("y", year);
    params.set("m", month);
    params.set("d", day);
  }
  if (route.time) {
    const [hour, minute] = route.time.split(":");
    params.set("hh", hour);
    params.set("mm", minute);
  }
  return `https://transit.yahoo.co.jp/search/result?${params.toString()}`;
}

function appUrlForPlatform(appLink) {
  return appLink.route ? yahooTransitUrl(appLink.route) : "https://transit.yahoo.co.jp/promo/app";
}

function renderDay(dayIndex) {
  const day = tripDays[dayIndex];
  const nextDay = tripDays[dayIndex + 1];
  dayPanel.innerHTML = `
    <article class="day-panel">
      <header class="day-panel-header">
        <div>
          <p class="eyebrow">${day.day} / ${day.date}</p>
          <h3>${day.title}</h3>
        </div>
        <p>${day.description}</p>
      </header>
      <div class="day-summary">
        ${day.summary.map(([label, value]) => `<div class="summary-item"><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
      <div class="timeline">
        ${day.entries.map((entry, entryIndex) => `
          <article class="timeline-item">
            <div class="timeline-time">${entry.time}</div>
            <div class="timeline-rail" aria-hidden="true"><span></span></div>
            <div class="timeline-card">
              ${entry.image ? `<img class="${entry.image.includes("sanuki_udon") ? "is-flipped" : ""}" src="${entry.image}" alt="${entry.alt}" loading="lazy" />` : `<div class="timeline-placeholder" role="img" aria-label="${entry.alt}"><span>PHOTO</span></div>`}
              <div class="timeline-copy">
                <span class="type-tag">${entry.type}</span>
                <h4>${entry.title}</h4>
                ${entry.detail ? `<p>${entry.detail}</p>` : ""}
                ${entry.notice ? `<p class="card-notice">${entry.notice}</p>` : ""}
                ${(entry.map || entry.mapPlaces || entry.appLink || entry.officialLinks?.length || entry.facilityList?.length || entry.reservationLink) ? `<div class="card-links">
                  ${entry.map || entry.mapPlaces ? `<a href="${entry.mapPlaces ? mapsMultiLocationUrl(entry.mapPlaces) : mapsUrl(entry.map)}" target="_blank" rel="noreferrer"><span data-icon="pin" aria-hidden="true"></span>地図を見る</a>` : ""}
                  ${entry.appLink ? `<a class="app-link" href="${appUrlForPlatform(entry.appLink)}" target="_blank" rel="noreferrer"><span data-icon="external" aria-hidden="true"></span>${entry.appLink.label}</a>` : ""}
                  ${entry.restaurantList ? `<button class="restaurant-list-toggle" type="button" data-restaurant-toggle="restaurant-list-${dayIndex}-${entryIndex}" aria-expanded="false"><span data-icon="pin" aria-hidden="true"></span>お店のリスト</button>` : ""}
                  ${entry.facilityList ? `<button class="restaurant-list-toggle" type="button" data-facility-toggle="facility-list-${dayIndex}-${entryIndex}" aria-expanded="false"><span data-icon="pin" aria-hidden="true"></span>${entry.facilityButtonLabel || "atoa"}</button>` : ""}
                  ${entry.reservationLink ? `<a class="reservation-link" href="${entry.reservationLink.url}" target="_blank" rel="noreferrer"><span data-icon="external" aria-hidden="true"></span>${entry.reservationLink.label}</a>` : ""}
                  ${(entry.officialLinks || []).map((link) => `<a class="official-link" href="${link.url}" target="_blank" rel="noreferrer"><span data-icon="external" aria-hidden="true"></span>${link.label}</a>`).join("")}
                </div>` : ""}
                ${entry.restaurantList ? `<div class="restaurant-list" id="restaurant-list-${dayIndex}-${entryIndex}" hidden>
                  <p class="restaurant-list-title">讃岐うどんのお店候補</p>
                  <ul>
                    ${entry.restaurantList.map((restaurant) => `<li>
                      <div>
                        <strong>${restaurant.name}</strong>
                        <span>${restaurant.area} / ${restaurant.address}</span>
                      </div>
                      <div class="restaurant-list-links">
                        <a href="${mapsUrl(restaurant.address)}" target="_blank" rel="noreferrer"><span data-icon="pin" aria-hidden="true"></span>Googleマップ</a>
                        <a href="${restaurant.tabelogUrl}" target="_blank" rel="noreferrer"><span data-icon="external" aria-hidden="true"></span>食べログ</a>
                      </div>
                    </li>`).join("")}
                  </ul>
                </div>` : ""}
                ${entry.facilityList ? `<div class="facility-list" id="facility-list-${dayIndex}-${entryIndex}" hidden>
                  ${entry.facilityList.map((facility) => `<article class="facility-item">
                    <img src="${facility.image}" alt="${facility.alt}" loading="lazy" />
                    <div class="facility-copy">
                      <strong>${facility.name}</strong>
                      ${facility.address ? `<span>${facility.address}</span>` : ""}
                      <div class="restaurant-list-links">
                        ${facility.officialUrl ? `<a href="${facility.officialUrl}" target="_blank" rel="noreferrer"><span data-icon="external" aria-hidden="true"></span>公式サイト</a>` : ""}
                        ${facility.parking ? `<a href="${mapsUrl(facility.parking)}" target="_blank" rel="noreferrer"><span data-icon="pin" aria-hidden="true"></span>${facility.parking} Googleマップ</a>` : ""}
                        ${facility.mapQuery ? `<a href="${mapsUrl(facility.mapQuery)}" target="_blank" rel="noreferrer"><span data-icon="pin" aria-hidden="true"></span>住所のGoogleマップ</a>` : ""}
                      </div>
                    </div>
                  </article>`).join("")}
                </div>` : ""}
              </div>
            </div>
          </article>
        `).join("")}
      </div>
      ${nextDay ? `<a class="day-next" href="#schedule" data-next-day="${dayIndex + 1}"><span>次の予定</span><strong>${nextDay.day} ${nextDay.date}　${nextDay.title}</strong><span data-icon="arrow-right" aria-hidden="true"></span></a>` : `<div class="day-next"><span>旅の終わり</span><strong>尾張瀬戸駅へ</strong><span data-icon="check" aria-hidden="true"></span></div>`}
    </article>
  `;
  dayPanel.querySelectorAll("[data-icon]").forEach((node) => {
    const key = iconKey(node.dataset.icon);
    if (iconPaths[key]) node.innerHTML = iconPaths[key];
  });
  dayPanel.querySelectorAll("[data-restaurant-toggle]").forEach((button) => {
    const list = document.getElementById(button.dataset.restaurantToggle);
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      list.hidden = expanded;
    });
  });
  dayPanel.querySelectorAll("[data-facility-toggle]").forEach((button) => {
    const list = document.getElementById(button.dataset.facilityToggle);
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      list.hidden = expanded;
    });
  });
  dayPanel.querySelector("[data-next-day]")?.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveDay(Number(event.currentTarget.dataset.nextDay));
    document.querySelector("#schedule").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setActiveDay(dayIndex) {
  dayTabs.forEach((tab, index) => {
    const active = index === dayIndex;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderDay(dayIndex);
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveDay(Number(tab.dataset.day)));
});

setActiveDay(0);

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".progress-dot")];
const heroNext = document.querySelector("#heroNext");
let heroIndex = 0;
let heroTimer;

function showHero(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === heroIndex));
  heroDots.forEach((dot, dotIndex) => {
    const active = dotIndex === heroIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-selected", String(active));
  });
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showHero(heroIndex + 1), 6000);
}

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showHero(Number(dot.dataset.heroControl));
    restartHeroTimer();
  });
});

heroNext?.addEventListener("click", () => {
  showHero(heroIndex + 1);
  restartHeroTimer();
});

restartHeroTimer();

const noteField = document.querySelector("#tripNote");
const saveNoteButton = document.querySelector("#saveNote");
const saveStatus = document.querySelector("#saveStatus");
const noteStorageKey = "setouchi-family-trip-note";

try {
  noteField.value = window.localStorage.getItem(noteStorageKey) || "";
} catch {
  // localStorage may be unavailable when the page is opened with stricter browser privacy settings.
}

saveNoteButton?.addEventListener("click", () => {
  try {
    window.localStorage.setItem(noteStorageKey, noteField.value);
    saveStatus.textContent = "保存しました";
  } catch {
    saveStatus.textContent = "このブラウザでは保存できません";
  }
  window.setTimeout(() => {
    saveStatus.textContent = "";
  }, 2200);
});

document.querySelector("#shareButton")?.addEventListener("click", async () => {
  const shareData = {
    title: "瀬戸内 家族旅｜WEBしおり",
    text: "岡山・香川・徳島・淡路島・神戸をめぐる家族旅のしおりです。",
    url: window.location.href
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // Sharing can be cancelled by the user.
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(window.location.href);
    window.alert("しおりのURLをコピーしました");
  } catch {
    window.alert("このページのURLを共有してください");
  }
});

const sectionLinks = [...document.querySelectorAll(".bottom-nav-item")];
const sectionTargets = ["home", "schedule", "route", "memo"].map((id) => document.getElementById(id));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
  },
  { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.4, 0.8] }
);
sectionTargets.forEach((section) => sectionObserver.observe(section));
