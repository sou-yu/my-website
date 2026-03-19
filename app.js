const officialLinks = {
  hotel: "https://www.discoverasr.com/ja/citadines/japan/citadines-harbour-front-yokohama",
  yokohamaStadium: "https://www.yokohama-stadium.co.jp/",
  yamashitaPark: "https://www.hama-midorinokyokai.or.jp/park/yamashita/",
  yokohamaChinatown: "https://www.chinatown.or.jp/",
  tsurugaoka: "https://www.tsurugaoka.or.jp/",
  kotokuin: "https://www.kotoku-in.jp/",
  akarenga: "https://www.yokohama-akarenga.jp/",
  landmark: "https://www.yokohama-landmark.jp/",
  minatomirai: "https://minatomirai21.com/",
  seaparadise: "https://www.seaparadise.co.jp/",
  keikarou: "https://keikarou.com/",
  sizzler: "https://www.sizzler.jp/",
  shirasuya: "https://www.shirasuya.com/",
  matsubaraan: "https://matsubara-an.com/shops/kamakura/"
};

const scheduleImages = {
  train: "./assets/spots/train-card.svg",
  walk: "./assets/spots/walk-card.svg",
  meal: "./assets/spots/meal-card.svg",
  hotel: "./assets/spots/hotel-card.svg",
  event: "./assets/spots/event-card.svg",
  yokohamaStadium: "./assets/spots/yokohama-stadium.svg",
  yamashitaPark: "./assets/spots/yamashita-park.svg",
  yokohamaChinatown: "./assets/spots/yokohama-chinatown.svg",
  tsurugaoka: "./assets/spots/tsurugaoka-hachimangu.svg",
  kamakuraDaibutsu: "./assets/spots/kamakura-daibutsu.svg",
  komachi: "./assets/spots/komachi-street.svg",
  akarenga: "./assets/spots/akarenga.svg",
  minatomirai: "./assets/spots/minatomirai.svg",
  landmark: "./assets/spots/landmark-tower.svg",
  seaparadise: "./assets/spots/seaparadise.svg"
};

const tripDays = [
  {
    id: "day1",
    label: "1日目",
    shortDate: "3/28 Fri",
    date: "2025-03-28",
    title: "横浜移動 / プロ野球観戦 / 中華街",
    summary:
      "名古屋から新横浜経由でホテルへ。昼から横浜スタジアムで観戦し、夕方は山下公園から中華街で夕食へ流れる1日です。",
    stats: [
      { label: "開始", value: "09:39 尾張瀬戸駅" },
      { label: "終了", value: "19:45 ホテル" },
      { label: "主な訪問地", value: "4か所" },
      { label: "移動の要点", value: "新幹線 + 市内徒歩" }
    ],
    map: {
      enabled: true,
      coverage: "神奈川県内の移動のみ地図化",
      note: "県外区間の名古屋から新横浜までは地図対象外です。神奈川県内はホテル、横浜スタジアム、山下公園、中華街をルート表示しています。",
      origin: "神奈川県横浜市中区日本大通5-2 シタディーンハーバーフロント横浜",
      destination: "神奈川県横浜市中区日本大通5-2 シタディーンハーバーフロント横浜",
      waypoints: [
        "神奈川県横浜市中区横浜公園 横浜スタジアム",
        "神奈川県横浜市中区山下町279 山下公園",
        "神奈川県横浜市中区山下町138 京華樓 中華街大通り店"
      ],
      travelMode: "transit"
    },
    timeline: [
      { time: "09:39", type: "train", image: scheduleImages.train, title: "尾張瀬戸駅を出発", detail: "名鉄瀬戸線で栄町駅へ。" },
      {
        time: "10:59",
        type: "train",
        image: scheduleImages.train,
        title: "名古屋駅から東海道新幹線 のぞみ350号",
        detail: "12:16 新横浜駅着。県外移動区間です。"
      },
      {
        time: "13:00",
        type: "hotel",
        image: scheduleImages.hotel,
        title: "シタディーンハーバーフロント横浜に到着",
        detail: "荷物を預けて身軽になってから球場へ移動。"
      },
      {
        time: "13:20",
        type: "walk",
        image: scheduleImages.walk,
        title: "徒歩で横浜スタジアムへ",
        detail: "ホテルから球場までは徒歩圏。"
      },
      {
        time: "13:30",
        type: "meal",
        image: scheduleImages.meal,
        title: "球場グルメを購入",
        detail: "観戦前の昼食確保。13:30から14:00の想定です。"
      },
      {
        time: "14:00",
        type: "event",
        image: scheduleImages.yokohamaStadium,
        title: "プロ野球観戦",
        detail: "17:00ごろまで観戦。試合終了後はそのまま山下公園方面へ。"
      },
      {
        time: "17:30",
        type: "spot",
        image: scheduleImages.yamashitaPark,
        title: "山下公園",
        detail: "海沿いで休憩しながら夕方の横浜を楽しむ時間。"
      },
      {
        time: "18:30",
        type: "meal",
        image: scheduleImages.yokohamaChinatown,
        title: "京華樓で夕食",
        detail: "中華街で四川料理。食後はホテルへ戻るだけの動線です。"
      },
      {
        time: "19:45",
        type: "hotel",
        image: scheduleImages.hotel,
        title: "ホテルに戻る",
        detail: "翌日の鎌倉観光に備えて早めに休む想定。"
      }
    ],
    spots: [
      {
        name: "シタディーンハーバーフロント横浜",
        area: "日本大通り",
        stay: "宿泊拠点",
        image: "./assets/spots/citadines-yokohama.jpg",
        description: "日本大通り駅至近で、中華街や山下公園、みなとみらい方面にも動きやすいホテルです。",
        address: "神奈川県横浜市中区日本大通5-2",
        officialUrl: officialLinks.hotel
      },
      {
        name: "横浜スタジアム",
        area: "関内",
        stay: "13:30 - 17:00",
        image: "./assets/spots/yokohama-stadium.jpg",
        description: "プロ野球観戦の中心スポット。球場グルメも含めて横浜らしい熱気を楽しめます。",
        address: "神奈川県横浜市中区横浜公園",
        officialUrl: officialLinks.yokohamaStadium
      },
      {
        name: "山下公園",
        area: "山下町",
        stay: "17:30 - 18:20",
        image: "./assets/spots/yamashita-park.jpg",
        description: "試合後のクールダウンにちょうどよい海沿いの定番スポット。夕景もきれいです。",
        address: "神奈川県横浜市中区山下町279",
        officialUrl: officialLinks.yamashitaPark
      },
      {
        name: "横浜中華街",
        area: "山下町",
        stay: "18:30 - 19:30",
        image: "./assets/spots/yokohama-chinatown.jpg",
        description: "夕食の京華樓があるエリア。食後の散策にも向いています。",
        address: "神奈川県横浜市中区山下町",
        officialUrl: officialLinks.yokohamaChinatown
      }
    ],
    trains: [
      {
        title: "尾張瀬戸駅 → 栄町駅",
        departureTime: "09:39",
        arrivalTime: "10:08",
        fromStation: "尾張瀬戸駅",
        toStation: "栄町駅",
        lines: ["名鉄瀬戸線"],
        transferCount: 0,
        steps: ["名鉄瀬戸線でそのまま栄町駅へ。"],
        note: "名古屋市内での最初の移動。余裕があれば次の地下鉄乗換前にトイレ確認。"
      },
      {
        title: "栄駅 → 名古屋駅",
        departureTime: "10:14",
        arrivalTime: "10:19",
        fromStation: "栄駅",
        toStation: "名古屋駅",
        lines: ["名古屋市営東山線"],
        transferCount: 0,
        steps: ["栄町駅から栄駅へ徒歩連絡後、東山線で名古屋駅へ。"],
        note: "新幹線改札へ向かう時間を確保したい区間です。"
      },
      {
        title: "名古屋駅 → 新横浜駅",
        departureTime: "10:59",
        arrivalTime: "12:16",
        fromStation: "名古屋駅",
        toStation: "新横浜駅",
        lines: ["東海道新幹線 のぞみ350号"],
        transferCount: 0,
        steps: ["のぞみ350号で新横浜駅へ直行。"],
        note: "県外区間のため地図には載せず、移動詳細のみ表示しています。"
      },
      {
        title: "新横浜駅 → 日本大通り駅",
        departureTime: "12:29",
        arrivalTime: "12:52頃",
        fromStation: "新横浜駅",
        toStation: "日本大通り駅",
        lines: ["JR横浜線快速", "東急東横線急行 / みなとみらい線直通"],
        transferCount: 1,
        steps: [
          "12:29 新横浜駅からJR横浜線快速で菊名へ。",
          "12:39 菊名で東急東横線急行に乗換、みなとみらい線直通で日本大通り駅へ。"
        ],
        note: "駅到着後はホテルまで徒歩数分。荷物預けを含めて13:00着想定です。"
      }
    ],
    meals: [
      {
        name: "京華樓",
        timing: "18:30 夕食",
        description: "中華街の四川料理。山下公園から流れで入りやすい夜ごはん候補です。",
        url: officialLinks.keikarou
      }
    ],
    notes: [
      "試合時間は延長で後ろにずれる可能性があります。夕食開始時刻は少し余裕を見てください。",
      "球場内で昼食を済ませる前提なので、ホテル到着後は早めに移動すると動きやすいです。",
      "中華街周辺は夜も人が多いので、ホテルへ戻る前に集合場所を決めておくと安心です。"
    ]
  },
  {
    id: "day2",
    label: "2日目",
    shortDate: "3/29 Sat",
    date: "2025-03-29",
    title: "鎌倉観光 / みなとみらい",
    summary:
      "朝に鎌倉へ移動し、鶴岡八幡宮と鎌倉大仏を回ってから、夕方にみなとみらいへ戻る流れです。歩行量が多いので休憩タイミングの確保がポイントです。",
    stats: [
      { label: "開始", value: "07:45 朝食" },
      { label: "終了", value: "19:30 ホテル" },
      { label: "主な訪問地", value: "5か所" },
      { label: "移動の要点", value: "鎌倉往復 + 市内夜景" }
    ],
    map: {
      enabled: true,
      coverage: "神奈川県内ルートを地図化",
      note: "ホテルから鎌倉、みなとみらい、ホテルまでの主要ルートです。詳細な徒歩導線は現地でGoogle Mapsを開いて確認してください。",
      origin: "神奈川県横浜市中区日本大通5-2 シタディーンハーバーフロント横浜",
      destination: "神奈川県横浜市中区日本大通5-2 シタディーンハーバーフロント横浜",
      waypoints: [
        "神奈川県鎌倉市雪ノ下2-1-31 鶴岡八幡宮",
        "神奈川県鎌倉市長谷4-2-28 高徳院 鎌倉大仏",
        "神奈川県鎌倉市小町 小町通り",
        "神奈川県横浜市中区新港1-1 横浜赤レンガ倉庫",
        "神奈川県横浜市西区みなとみらい2-2-1 横浜ランドマークタワー"
      ],
      travelMode: "transit"
    },
    timeline: [
      {
        time: "07:45",
        type: "meal",
        image: scheduleImages.meal,
        title: "ホテル朝食",
        detail: "歩行量の多い日なので、朝食はしっかり取る前提です。"
      },
      {
        time: "09:00",
        type: "train",
        image: scheduleImages.train,
        title: "ホテルを出発して鎌倉へ",
        detail: "日本大通り駅からみなとみらい線・JR系統を乗り継ぎ、09:34 鎌倉駅着想定。"
      },
      { time: "09:45", type: "spot", image: scheduleImages.tsurugaoka, title: "鶴岡八幡宮", detail: "朝の参拝で混雑前に回る構成です。" },
      { time: "10:45", type: "spot", image: scheduleImages.tsurugaoka, title: "大倉幕府跡", detail: "歴史スポットとして短時間で立ち寄る前提。" },
      { time: "12:00", type: "spot", image: scheduleImages.kamakuraDaibutsu, title: "鎌倉大仏", detail: "移動後に高徳院で大仏見学。" },
      { time: "13:00", type: "meal", image: scheduleImages.meal, title: "鎌倉ランチ", detail: "しらすや、松原庵を候補に。しらす丼中心で考える日。" },
      { time: "14:00", type: "spot", image: scheduleImages.komachi, title: "小町通り", detail: "食べ歩きや軽い買い物の時間。" },
      { time: "15:30", type: "train", image: scheduleImages.train, title: "鎌倉を出発してみなとみらいへ", detail: "16:30 みなとみらい着想定。" },
      { time: "16:30", type: "spot", image: scheduleImages.minatomirai, title: "みなとみらい", detail: "みなとみらい到着後に海沿いと周辺施設をゆったり散策する流れです。" },
      { time: "18:00", type: "spot", image: scheduleImages.akarenga, title: "横浜赤レンガ倉庫", detail: "夕方から夜にかけて港エリアを散策し、そのまま夕食へ。" },
      { time: "18:30", type: "meal", image: scheduleImages.akarenga, title: "赤レンガ倉庫で夕食", detail: "館内や周辺のレストランで夕食を取る流れに変更。" },
      { time: "19:30", type: "hotel", image: scheduleImages.hotel, title: "ホテルへ戻る", detail: "翌日の八景島に備えて帰着。" }
    ],
    spots: [
      {
        name: "鶴岡八幡宮",
        area: "鎌倉",
        stay: "09:45 - 10:35",
        image: "./assets/spots/tsurugaoka-hachimangu.jpg",
        description: "鎌倉観光の起点になる代表的な神社。朝の時間帯に入ると動きやすいです。",
        address: "神奈川県鎌倉市雪ノ下2-1-31",
        officialUrl: officialLinks.tsurugaoka
      },
      {
        name: "鎌倉大仏",
        area: "長谷",
        stay: "12:00 - 12:45",
        image: "./assets/spots/kamakura-daibutsu.jpg",
        description: "高徳院にある定番スポット。屋外見学なので天候の確認が必要です。",
        address: "神奈川県鎌倉市長谷4-2-28",
        officialUrl: officialLinks.kotokuin
      },
      {
        name: "小町通り",
        area: "鎌倉駅周辺",
        stay: "14:00 - 15:15",
        image: "./assets/spots/komachi-street.jpg",
        description: "食べ歩きや軽い買い物向き。帰路に入る前の散策時間として相性が良いです。",
        address: "神奈川県鎌倉市小町",
        officialUrl: ""
      },
      {
        name: "横浜赤レンガ倉庫",
        area: "みなとみらい",
        stay: "18:00 - 19:00",
        image: "./assets/spots/akarenga.jpg",
        description: "夕方の海沿い散策に向いた定番スポット。館内レストランやショップもあり、そのまま夕食までつなげやすいです。",
        address: "神奈川県横浜市中区新港1-1",
        officialUrl: officialLinks.akarenga
      },
      {
        name: "みなとみらい",
        area: "みなとみらい",
        stay: "16:30 - 17:40",
        image: "./assets/spots/minatomirai.jpg",
        description: "海沿いの景色や商業施設、夜景をまとめて楽しめる横浜の定番エリアです。赤レンガ倉庫方面への移動もつなぎやすいです。",
        address: "神奈川県横浜市西区みなとみらい",
        officialUrl: officialLinks.minatomirai
      }
    ],
    trains: [
      {
        title: "日本大通り駅 → 鎌倉駅",
        departureTime: "09:00",
        arrivalTime: "09:34",
        fromStation: "日本大通り駅",
        toStation: "鎌倉駅",
        lines: ["みなとみらい線 / 東急東横線", "JR横須賀線"],
        transferCount: 1,
        steps: [
          "日本大通り駅からみなとみらい線で横浜方面へ。",
          "横浜駅でJR横須賀線へ乗換、鎌倉駅へ。"
        ],
        note: "乗換は横浜駅想定です。実際の列車時刻は当日アプリや駅案内で再確認してください。"
      },
      {
        title: "鎌倉駅 → みなとみらい",
        departureTime: "15:30",
        arrivalTime: "16:30",
        fromStation: "鎌倉駅",
        toStation: "みなとみらい駅周辺",
        lines: ["JR横須賀線", "みなとみらい線"],
        transferCount: 1,
        steps: [
          "鎌倉駅から横浜駅へ戻る。",
          "横浜駅でみなとみらい線へ乗換し、赤レンガエリアへ。"
        ],
        note: "みなとみらい到着後は先にエリア散策を行い、その後赤レンガ倉庫へ流れる構成です。"
      },
      {
        title: "みなとみらい → 日本大通り駅 / ホテル",
        departureTime: "19:00頃",
        arrivalTime: "19:30頃",
        fromStation: "みなとみらい駅周辺",
        toStation: "日本大通り駅",
        lines: ["みなとみらい線"],
        transferCount: 0,
        steps: ["ランドマーク周辺からみなとみらい線で日本大通り駅へ戻る。"],
        note: "赤レンガ倉庫で夕食を取った後の戻りになるため、帰りは徒歩またはみなとみらい線利用のどちらでも調整しやすい区間です。"
      }
    ],
    meals: [
      {
        name: "しらすや",
        timing: "13:00 ランチ候補",
        description: "しらす丼中心で考えるなら第一候補。混雑次第で待ち時間が出る想定です。",
        url: officialLinks.shirasuya
      },
      {
        name: "松原庵",
        timing: "13:00 ランチ候補",
        description: "落ち着いた雰囲気で昼食を取りたい場合の候補。",
        url: officialLinks.matsubaraan
      },
      {
        name: "赤レンガ倉庫で夕食",
        timing: "18:30 夕食",
        description: "赤レンガ倉庫館内や周辺の店舗で夕食を取る前提に変更しています。海沿いの雰囲気のまま夜時間を過ごせます。",
        url: officialLinks.akarenga
      }
    ],
    notes: [
      "鎌倉は徒歩移動が増えるので、昼までに一度カフェ休憩を入れられると疲れにくいです。",
      "小町通りの滞在時間はお土産量で伸びやすいので、15:30出発の余裕を意識してください。",
      "雨天時は赤レンガ倉庫やランドマークプラザの屋内比率を上げると回しやすいです。"
    ]
  },
  {
    id: "day3",
    label: "3日目",
    shortDate: "3/30 Sun",
    date: "2025-03-30",
    title: "八景島 / 帰宅",
    summary:
      "朝に八景島へ向かい、14時までシーパラダイスを満喫。ホテルで荷物回収後、新横浜から名古屋方面へ戻る最終日です。",
    stats: [
      { label: "開始", value: "08:00 朝食" },
      { label: "終了", value: "18:37 尾張瀬戸駅" },
      { label: "主な訪問地", value: "2か所" },
      { label: "移動の要点", value: "八景島往復 + 帰路" }
    ],
    map: {
      enabled: true,
      coverage: "神奈川県内の移動のみ地図化",
      note: "ホテルから八景島、ホテル、新横浜までの県内移動を表示しています。新横浜以降の帰路は県外区間のため地図対象外です。",
      origin: "Citadines Harbour Front Yokohama",
      destination: "Shin-Yokohama Station",
      waypoints: ["Yokohama Hakkeijima Sea Paradise", "Citadines Harbour Front Yokohama"],
      travelMode: "transit"
    },
    timeline: [
      { time: "08:00", type: "meal", image: scheduleImages.meal, title: "朝食", detail: "荷物整理も兼ねて早めに準備。" },
      { time: "09:30", type: "train", image: scheduleImages.train, title: "ホテルを出発して八景島へ", detail: "10:20 横浜・八景島シーパラダイス着想定。" },
      {
        time: "10:30",
        type: "spot",
        image: scheduleImages.seaparadise,
        title: "八景島観光",
        detail: "アクアミュージアムとプレジャーランドを14:00まで楽しむ構成です。"
      },
      {
        time: "12:00",
        type: "meal",
        image: scheduleImages.meal,
        title: "八景島ランチ",
        detail: "園内で昼食休憩。午後の観光に向けて、このタイミングで食事を取る想定です。"
      },
      { time: "14:00", type: "train", image: scheduleImages.train, title: "八景島を出発", detail: "15:00 ホテル着想定。荷物回収へ戻ります。" },
      {
        time: "15:10",
        type: "train",
        image: scheduleImages.train,
        title: "ホテルから新横浜へ移動",
        detail: "16:13 新横浜駅着。新幹線前に駅ナカで軽食確保も可能です。"
      },
      {
        time: "16:13",
        type: "train",
        image: scheduleImages.train,
        title: "新横浜駅から東海道新幹線 のぞみ447号",
        detail: "17:33 名古屋駅着。ここからJR中央線と名鉄瀬戸線に乗り継ぎます。"
      },
      { time: "18:37", type: "train", image: scheduleImages.train, title: "尾張瀬戸駅に到着", detail: "3日間の旅程完了。" }
    ],
    spots: [
      {
        name: "横浜・八景島シーパラダイス",
        area: "金沢区",
        stay: "10:30 - 14:00",
        image: "./assets/spots/seaparadise.jpg",
        description: "最終日のメインスポット。アクアミュージアムとプレジャーランドを絞って回ると時間内で収まりやすいです。",
        address: "神奈川県横浜市金沢区八景島",
        officialUrl: officialLinks.seaparadise
      },
      {
        name: "シタディーンハーバーフロント横浜",
        area: "日本大通り",
        stay: "15:00 荷物回収",
        image: "./assets/spots/citadines-yokohama.jpg",
        description: "八景島帰りに荷物回収を挟み、そのまま新横浜へ向かう拠点です。",
        address: "神奈川県横浜市中区日本大通5-2",
        officialUrl: officialLinks.hotel
      }
    ],
    trains: [
      {
        title: "日本大通り駅 → 八景島駅",
        departureTime: "09:30",
        arrivalTime: "10:20",
        fromStation: "日本大通り駅",
        toStation: "八景島駅",
        lines: ["みなとみらい線", "JR根岸線 / 京浜東北線", "金沢シーサイドライン"],
        transferCount: 2,
        steps: [
          "日本大通り駅から横浜方面へ移動。",
          "JR根岸線系統で新杉田方面へ。",
          "新杉田付近でシーサイドラインに乗換し、八景島駅へ。"
        ],
        note: "混雑がなければ10:20到着ペース。開園直後を狙うなら乗換を急ぎすぎない程度に早め行動が安心です。"
      },
      {
        title: "八景島駅 → 日本大通り駅 / ホテル",
        departureTime: "14:00",
        arrivalTime: "15:00",
        fromStation: "八景島駅",
        toStation: "日本大通り駅",
        lines: ["金沢シーサイドライン", "JR根岸線 / 京浜東北線", "みなとみらい線"],
        transferCount: 2,
        steps: [
          "シーサイドラインで新杉田方面へ戻る。",
          "JR系統を経由して横浜方面へ。",
          "みなとみらい線に戻って日本大通り駅へ。"
        ],
        note: "ホテルでは荷物回収に必要な時間を見込み、着後すぐ動けるようにしておくと新横浜移動が楽です。"
      },
      {
        title: "日本大通り駅 → 新横浜駅",
        departureTime: "15:10",
        arrivalTime: "16:13",
        fromStation: "日本大通り駅",
        toStation: "新横浜駅",
        lines: ["みなとみらい線 / 東急東横線", "JR横浜線"],
        transferCount: 1,
        steps: [
          "日本大通り駅から菊名方面へ移動。",
          "菊名駅でJR横浜線に乗換、新横浜駅へ。"
        ],
        note: "荷物が多い場合は駅構内移動を見込み、エレベーター位置も当日確認推奨です。"
      },
      {
        title: "新横浜駅 → 尾張瀬戸駅",
        departureTime: "16:13",
        arrivalTime: "18:37",
        fromStation: "新横浜駅",
        toStation: "尾張瀬戸駅",
        lines: ["東海道新幹線 のぞみ447号", "JR中央線", "名鉄瀬戸線"],
        transferCount: 2,
        steps: [
          "16:13 新横浜駅から東海道新幹線 のぞみ447号で名古屋駅へ。",
          "17:42 JR中央線で大曽根へ。",
          "18:08 名鉄瀬戸線で尾張瀬戸駅へ。"
        ],
        note: "この区間は県外移動を含むため、地図表示ではなく時刻と乗換情報中心で確認する構成です。"
      }
    ],
    meals: [
      {
        name: "八景島ランチ",
        timing: "12:00 昼食",
        description: "シーパラダイス園内で昼食を取る想定です。混雑しやすい時間帯なので、少し早めに動くと回しやすくなります。",
        url: officialLinks.seaparadise
      }
    ],
    notes: [
      "八景島は園内移動も広いので、アクアミュージアムとプレジャーランドに優先順位を置くと回しやすいです。",
      "帰路はホテルでの荷物回収がボトルネックになるため、朝のうちにまとめておくと安心です。",
      "新横浜駅での買い物時間を取りたい場合は、八景島出発を少し早めるのが安全です。"
    ]
  }
];

const tripWideNotes = [
  "曜日表記に合わせて、日付は 2025年3月28日から3月30日として実装しています。",
  "Googleマップ埋め込みは神奈川県内の移動だけを対象にし、県外区間は電車詳細で補っています。",
  "列車の詳細時刻はダイヤ改正や運行状況の影響を受けるため、旅行当日は駅案内やGoogle Mapsで最終確認してください。"
];

const app = document.getElementById("app");
const tabs = document.getElementById("day-tabs");
let activeDayId = tripDays[0].id;

function buildGoogleEmbedUrl(map) {
  const params = new URLSearchParams({
    output: "embed",
    f: "d",
    hl: "ja",
    saddr: map.origin,
    daddr: map.destination,
    dirflg: "r"
  });

  if (map.waypoints?.length) {
    params.set("waypoints", map.waypoints.join("|"));
  }

  return `https://www.google.com/maps?${params.toString()}`;
}

function buildGoogleMapsLink(map) {
  const params = new URLSearchParams({
    api: "1",
    origin: map.origin,
    destination: map.destination,
    travelmode: map.travelMode || "transit"
  });

  if (map.waypoints?.length) {
    params.set("waypoints", map.waypoints.join("|"));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createPlaceholderDataUri(title) {
  const safeTitle = escapeHtml(title);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#dff3ff" />
          <stop offset="100%" stop-color="#fff0d7" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#g)" />
      <circle cx="1020" cy="180" r="120" fill="rgba(23,134,216,0.16)" />
      <circle cx="220" cy="760" r="160" fill="rgba(255,180,87,0.18)" />
      <text x="80" y="410" font-size="56" font-family="Noto Sans JP, sans-serif" fill="#1786d8" font-weight="700">Yokohama Trip</text>
      <text x="80" y="500" font-size="78" font-family="Noto Sans JP, sans-serif" fill="#18324a" font-weight="800">${safeTitle}</text>
      <text x="80" y="590" font-size="34" font-family="Noto Sans JP, sans-serif" fill="#5d7083">photo preview unavailable</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function typeLabel(type) {
  return (
    {
      train: "電車",
      transit: "電車",
      spot: "観光",
      walk: "徒歩",
      meal: "食事",
      event: "イベント",
      hotel: "ホテル"
    }[type] || type
  );
}

function renderTabs() {
  tabs.innerHTML = tripDays
    .map(
      (day) => `
        <button class="day-tab ${day.id === activeDayId ? "is-active" : ""}" type="button" aria-selected="${
          day.id === activeDayId
        }" data-day-id="${day.id}">
          ${day.label}
        </button>
      `
    )
    .join("");

  tabs.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeDayId = button.dataset.dayId;
      renderTabs();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderSummary(day) {
  return `
    <section class="panel summary-card">
      <div>
        <div class="summary-date">${day.shortDate}</div>
        <h2 class="summary-title">${day.title}</h2>
        <p class="summary-copy">${day.summary}</p>
      </div>
      <div class="stats-grid">
        ${day.stats
          .map(
            (stat) => `
              <div class="stat-chip">
                <span>${stat.label}</span>
                <strong>${stat.value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMap(day) {
  const embedUrl = buildGoogleEmbedUrl(day.map);
  const openUrl = buildGoogleMapsLink(day.map);

  return `
    <section class="panel">
      <div class="section-head">
        <h2>今日のルート</h2>
        <span class="section-tag">${day.map.coverage}</span>
      </div>
      <iframe class="map-frame" title="${day.label} のルート" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${embedUrl}"></iframe>
      <p class="map-note">${day.map.note}</p>
      <div class="action-row">
        <a class="action-link primary" href="${openUrl}" target="_blank" rel="noreferrer">Google Mapsで開く</a>
      </div>
    </section>
  `;
}

function renderTimeline(day) {
  return `
    <section class="panel">
      <div class="section-head">
        <h2>スケジュール</h2>
        <span class="section-tag">Timeline</span>
      </div>
      <div class="timeline">
        ${day.timeline
          .map(
            (item) => `
              <article class="timeline-item">
                <img class="timeline-media" src="${item.image || scheduleImages[item.type] || scheduleImages.train}" alt="${item.title} の画像" />
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-body">
                  <div class="timeline-top">
                    <span class="type-badge type-${item.type}">${typeLabel(item.type)}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                  </div>
                  <div class="timeline-detail">${item.detail}</div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSpots(day) {
  return `
    <section class="panel">
      <div class="section-head">
        <h2>スポット情報</h2>
        <span class="section-tag">Photo + Link</span>
      </div>
      <div class="cards">
        ${day.spots
          .map(
            (spot) => `
              <article class="panel spot-card">
                <img class="spot-media" src="${spot.image}" alt="${spot.name} のイメージ" loading="lazy" referrerpolicy="no-referrer" data-fallback="${escapeHtml(
                  spot.name
                )}" />
                <div class="spot-body">
                  <div>
                    <h3>${spot.name}</h3>
                    <div class="spot-meta">
                      <span class="meta-pill">${spot.area}</span>
                      <span class="meta-pill">${spot.stay}</span>
                    </div>
                  </div>
                  <div class="spot-description">${spot.description}</div>
                  <div class="spot-address">${spot.address}</div>
                  <div class="action-row">
                    ${spot.officialUrl ? `<a class="action-link primary" href="${spot.officialUrl}" target="_blank" rel="noreferrer">公式サイト</a>` : ""}
                    <a class="action-link secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      spot.name
                    )}" target="_blank" rel="noreferrer">場所を開く</a>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTrains(day) {
  return `
    <section class="panel">
      <div class="section-head">
        <h2>電車移動の詳細</h2>
        <span class="section-tag">Rail</span>
      </div>
      <div class="cards">
        ${day.trains
          .map(
            (train) => `
              <article class="panel train-card">
                <div class="train-head">
                  <h3>${train.title}</h3>
                  <div class="train-summary">${train.departureTime} → ${train.arrivalTime}</div>
                </div>
                <div class="train-stations">
                  <div class="station-block">
                    <span>出発</span>
                    <strong>${train.fromStation}</strong>
                  </div>
                  <div class="route-arrow">→</div>
                  <div class="station-block">
                    <span>到着</span>
                    <strong>${train.toStation}</strong>
                  </div>
                </div>
                <div class="spot-note">利用路線: ${train.lines.join(" / ")}</div>
                <div class="spot-note">乗換回数: ${train.transferCount}回</div>
                <ol class="step-list">
                  ${train.steps.map((step) => `<li>${step}</li>`).join("")}
                </ol>
                <div class="train-note">${train.note}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMeals(day) {
  if (!day.meals.length) {
    return `
      <section class="panel">
        <div class="section-head">
          <h2>食事メモ</h2>
          <span class="section-tag">Food</span>
        </div>
        <div class="empty-state">この日は食事候補を個別カード化していません。</div>
      </section>
    `;
  }

  return `
    <section class="panel">
      <div class="section-head">
        <h2>食事メモ</h2>
        <span class="section-tag">Food</span>
      </div>
      <div class="cards">
        ${day.meals
          .map(
            (meal) => `
              <article class="panel meal-card">
                <div class="meal-head">
                  <h3>${meal.name}</h3>
                  <span class="meal-tag">${meal.timing}</span>
                </div>
                <div class="meal-description">${meal.description}</div>
                ${meal.url ? `<div class="action-row"><a class="action-link secondary" href="${meal.url}" target="_blank" rel="noreferrer">外部サイト</a></div>` : ""}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNotes(day) {
  return `
    <section class="panel">
      <div class="section-head">
        <h2>メモ</h2>
        <span class="section-tag">Useful Tips</span>
      </div>
      <ul class="info-list">
        ${day.notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderFooter() {
  return `
    <section class="footer-note">
      <p>${tripWideNotes.join(" ")}</p>
    </section>
  `;
}

function applyImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.src = createPlaceholderDataUri(image.dataset.fallback);
      },
      { once: true }
    );
  });
}

function render() {
  const day = tripDays.find((item) => item.id === activeDayId) || tripDays[0];

  app.innerHTML = `
    <div class="content">
      ${renderSummary(day)}
      ${renderMap(day)}
      ${renderTimeline(day)}
      ${renderSpots(day)}
      ${renderTrains(day)}
      ${renderMeals(day)}
      ${renderNotes(day)}
      ${renderFooter()}
    </div>
  `;

  applyImageFallbacks();
}

renderTabs();
render();
