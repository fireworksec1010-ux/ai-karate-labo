// 大会カレンダーと最新結果。結果は毎大会後に追記する（出典URLを必ず付ける）
window.CALENDAR = [
  { m: { ja: "2月", en: "Feb", es: "Feb." }, name: { ja: "JKF全日本空手道体重別選手権「THE SELECTION」", en: "JKF All Japan Weight Category Championships \"THE SELECTION\"", es: "Campeonato de Japón por pesos de la JKF \"THE SELECTION\"" }, level: { ja: "全日本（JKF）", en: "National (JKF)", es: "Nacional (JKF)" }, place: { ja: "—", en: "—" },
    note: { ja: "男女各階級の優勝者がナショナルチーム入り内定", en: "Class winners earn national-team places", es: "Los campeones de cada categoría entran en la selección nacional" } },
  { m: { ja: "3月", en: "Mar", es: "Mar." }, name: { ja: "全国高等学校空手道選抜大会", en: "All Japan High School Selection Championships", es: "Campeonato Nacional de Selección de Bachillerato" }, level: { ja: "高校", en: "High school", es: "Bachillerato" }, place: { ja: "2026年：エア・ウォーターアリーナ松本（長野県）", en: "2026: Matsumoto, Nagano", es: "2026: Matsumoto, Nagano" } },
  { m: { ja: "7〜8月", en: "Jul–Aug", es: "Jul.–ago." }, name: { ja: "沖縄世界空手大会", en: "Okinawa World Karate Tournament", es: "Torneo Mundial de Karate de Okinawa" }, level: { ja: "国際", en: "International", es: "Internacional" }, place: { ja: "沖縄コンベンションセンター（2026年7/30〜8/2）", en: "Okinawa Convention Center (Jul 30 – Aug 2, 2026)", es: "Okinawa Convention Center (30 jul. – 2 ago. 2026)" } },
  { m: { ja: "8月", en: "Aug", es: "Ago." }, name: { ja: "全国高校総体（インターハイ）空手道競技", en: "Inter-High (National High School Sports Festival) — Karate", es: "Inter-High (Festival Nacional de Deportes de Bachillerato) — Karate" }, level: { ja: "高校", en: "High school", es: "Bachillerato" }, place: { ja: "2026年：兵庫県姫路市（8/7〜9）", en: "2026: Himeji, Hyogo (Aug 7–9)", es: "2026: Himeji, Hyogo (7–9 ago.)" } },
  { m: { ja: "8月", en: "Aug", es: "Ago." }, name: { ja: "全国中学生空手道選手権大会（全中）", en: "All Japan Junior High School Karate Championships", es: "Campeonato Nacional de Karate de Secundaria" }, level: { ja: "中学", en: "Junior high", es: "Secundaria" }, place: { ja: "2026年：このはなアリーナ（静岡県）", en: "2026: Konohana Arena, Shizuoka", es: "2026: Konohana Arena, Shizuoka" },
    note: { ja: "学校の部活動のほか、道場・クラブ単位での出場も可能", en: "Open to school clubs as well as dojos and local clubs", es: "Abierto a clubes escolares, dojos y clubes locales" } },
  { m: { ja: "8月", en: "Aug", es: "Ago." }, name: { ja: "KARATE WEEK（全日本少年少女空手道選手権・全日本パラ空手道競技大会ほか）", en: "KARATE WEEK (All Japan Junior Championships, All Japan Para Karate, etc.)", es: "KARATE WEEK (Campeonato Infantil de Japón, Para Karate de Japón, etc.)" }, level: { ja: "全日本（JKF）", en: "National (JKF)", es: "Nacional (JKF)" }, place: { ja: "京王アリーナTOKYO（2026年8/13〜15）", en: "Keio Arena TOKYO (Aug 13–15, 2026)", es: "Keio Arena TOKYO (13–15 ago. 2026)" } },
  { m: { ja: "10月", en: "Oct", es: "Oct." }, name: { ja: "国民スポーツ大会 空手道競技", en: "National Sports Festival — Karate", es: "Festival Nacional de Deportes — Karate" }, level: { ja: "都道府県対抗", en: "Prefectural teams", es: "Equipos de prefecturas" }, place: { ja: "開催県", en: "Host prefecture", es: "Prefectura anfitriona" } },
  { m: { ja: "11月", en: "Nov", es: "Nov." }, name: { ja: "全日本大学空手道選手権大会", en: "All Japan University Karate Championships", es: "Campeonato Universitario de Karate de Japón" }, level: { ja: "大学", en: "University", es: "Universidad" }, place: { ja: "—", en: "—" } },
  { m: { ja: "12月", en: "Dec", es: "Dic." }, name: { ja: "天皇盃・皇后盃 全日本空手道選手権大会／全日本空手道団体形選手権", en: "Emperor's & Empress's Cup All Japan Karate Championships / All Japan Team Kata Championships", es: "Copa del Emperador y de la Emperatriz — Campeonato de Japón de Karate / Campeonato de Japón de Kata por Equipos" }, level: { ja: "全日本（JKF）", en: "National (JKF)", es: "Nacional (JKF)" }, place: { ja: "東京武道館（2025年12/13〜14）", en: "Tokyo Budokan (Dec 13–14, 2025)", es: "Tokyo Budokan (13–14 dic. 2025)" } }
];

window.RESULTS = [
  { title: { ja: "第34回 全国中学生空手道選手権大会（2026年8月・静岡）", en: "34th All Japan Junior High School Championships (Aug 2026, Shizuoka)", es: "34.º Campeonato Nacional de Secundaria (ago. 2026, Shizuoka)" },
    rows: [
      [{ ja: "男子団体組手", en: "Boys' team kumite", es: "Kumite por equipos masculino" }, { ja: "浪速（大阪）", en: "Naniwa (Osaka)" }, { ja: "草野派糸東流拳法空手道会（滋賀）", en: "草野派糸東流拳法空手道会 (Shiga)" }],
      [{ ja: "女子団体組手", en: "Girls' team kumite", es: "Kumite por equipos femenino" }, { ja: "泊親会清水（静岡）", en: "泊親会清水 (Shizuoka)" }, { ja: "アンフィニ空手クラブ（石川）", en: "アンフィニ空手クラブ (Ishikawa)" }],
      [{ ja: "男子団体形", en: "Boys' team kata", es: "Kata por equipos masculino" }, { ja: "横浜市立西谷（神奈川）", en: "Nishiya JHS, Yokohama (Kanagawa)", es: "Secundaria Nishiya, Yokohama (Kanagawa)" }, { ja: "明桜塾（千葉）", en: "明桜塾 (Chiba)" }],
      [{ ja: "女子団体形", en: "Girls' team kata", es: "Kata por equipos femenino" }, { ja: "大阪学芸高等学校附属（大阪）", en: "Osaka Gakugei JHS (Osaka)", es: "Secundaria Osaka Gakugei (Osaka)" }, { ja: "富士川町立富士川（山梨）", en: "Fujikawa JHS (Yamanashi)", es: "Secundaria Fujikawa (Yamanashi)" }],
      [{ ja: "男子個人組手", en: "Boys' kumite", es: "Kumite masculino" }, { ja: "山下 遼真（荒賀道場）", en: "山下 遼真 (Araga Dojo)", es: "山下 遼真 (Araga Dojo)" }, { ja: "杉山 流月（橋本道場）", en: "杉山 流月" }],
      [{ ja: "女子個人組手", en: "Girls' kumite", es: "Kumite femenino" }, { ja: "小林 神楽（太田市立城東）", en: "小林 神楽 (Joto JHS, Ota)", es: "小林 神楽 (Secundaria Joto, Ota)" }, { ja: "井手 翼（拳翔華）", en: "井手 翼" }],
      [{ ja: "男子個人形", en: "Boys' kata", es: "Kata masculino" }, { ja: "米田 晃清（志空会）", en: "米田 晃清" }, { ja: "林 勇夢（和歌山大附属）", en: "林 勇夢 (Wakayama Univ. JHS)", es: "林 勇夢 (Secundaria de la Univ. de Wakayama)" }],
      [{ ja: "女子個人形", en: "Girls' kata", es: "Kata femenino" }, { ja: "尾上 華乃音（長崎市立小ケ倉）", en: "尾上 華乃音 (Kogakura JHS, Nagasaki)", es: "尾上 華乃音 (Secundaria Kogakura, Nagasaki)" }, { ja: "呉山 一花（大阪学芸附属）", en: "呉山 一花 (Osaka Gakugei JHS)", es: "呉山 一花 (Secundaria Osaka Gakugei)" }]
    ], src: "https://www.karatedo.co.jp/news/result/20260824/69801" },
  { title: { ja: "2026 インターハイ 空手道競技（8月・兵庫県姫路市）", en: "2026 Inter-High Karate (Aug 2026, Himeji)", es: "Inter-High de karate 2026 (ago. 2026, Himeji)" },
    note: { ja: "男子は高松中央、女子は御殿場西が団体組手で春夏連覇", en: "Takamatsu Chuo (boys) and Gotemba Nishi (girls) win team kumite in both spring and summer", es: "Takamatsu Chuo (masculino) y Gotemba Nishi (femenino) ganan el kumite por equipos en primavera y verano" },
    rows: [
      [{ ja: "男子団体組手", en: "Boys' team kumite", es: "Kumite por equipos masculino" }, { ja: "高松中央（香川）", en: "Takamatsu Chuo (Kagawa)" }, { ja: "浪速（大阪）", en: "Naniwa (Osaka)" }],
      [{ ja: "女子団体組手", en: "Girls' team kumite", es: "Kumite por equipos femenino" }, { ja: "御殿場西（静岡）", en: "Gotemba Nishi (Shizuoka)" }, { ja: "高松中央（香川）", en: "Takamatsu Chuo (Kagawa)" }],
      [{ ja: "男子個人組手", en: "Boys' kumite", es: "Kumite masculino" }, { ja: "鈴木 愛翔（日本航空）", en: "鈴木 愛翔 (Nihon Koku)" }, { ja: "掛園 航矢（共愛学園）", en: "掛園 航矢 (Kyoai Gakuen)" }],
      [{ ja: "女子個人組手", en: "Girls' kumite", es: "Kumite femenino" }, { ja: "西村 まりあ（済美）", en: "西村 まりあ (Saibi)" }, { ja: "刈込 和花（高松中央）", en: "刈込 和花 (Takamatsu Chuo)" }],
      [{ ja: "男子個人形", en: "Boys' kata", es: "Kata masculino" }, { ja: "魚谷 侑輝（浪速）", en: "魚谷 侑輝 (Naniwa)" }, { ja: "掛川 雄大（秀明八千代）", en: "掛川 雄大 (Shumei Yachiyo)" }],
      [{ ja: "女子個人形", en: "Girls' kata", es: "Kata femenino" }, { ja: "伊藤 わかな（城南学園）", en: "伊藤 わかな (Jonan Gakuen)" }, { ja: "山本 真央（大阪学芸）", en: "山本 真央 (Osaka Gakugei)" }]
    ], src: "https://www.karatedo.co.jp/news/result/20260810/68864" },
  { title: { ja: "第45回 全国高等学校空手道選抜大会（2026年3月・長野県松本市）", en: "45th All Japan High School Selection (Mar 2026, Matsumoto)", es: "45.º Campeonato Nacional de Selección de Bachillerato (mar. 2026, Matsumoto)" },
    rows: [
      [{ ja: "男子団体組手（5人制）", en: "Boys' team kumite (5)", es: "Kumite por equipos masculino (5)" }, { ja: "高松中央（香川）", en: "Takamatsu Chuo (Kagawa)" }, { ja: "浪速（大阪）", en: "Naniwa (Osaka)" }],
      [{ ja: "女子団体組手（5人制）", en: "Girls' team kumite (5)", es: "Kumite por equipos femenino (5)" }, { ja: "御殿場西（静岡）", en: "Gotemba Nishi (Shizuoka)" }, { ja: "小松大谷（石川）", en: "Komatsu Otani (Ishikawa)" }],
      [{ ja: "男子団体組手（3人制）", en: "Boys' team kumite (3)", es: "Kumite por equipos masculino (3)" }, { ja: "県立箕島（和歌山）", en: "Minoshima (Wakayama)" }, { ja: "県立岐阜商業（岐阜）", en: "Gifu Commercial (Gifu)" }],
      [{ ja: "女子団体組手（3人制）", en: "Girls' team kumite (3)", es: "Kumite por equipos femenino (3)" }, { ja: "近大附属広島 福山校（広島）", en: "Kindai Hiroshima Fukuyama (Hiroshima)" }, { ja: "阪南大学高校（大阪）", en: "Hannan Univ. HS (Osaka)", es: "Bachillerato Univ. Hannan (Osaka)" }],
      [{ ja: "男子団体形", en: "Boys' team kata", es: "Kata por equipos masculino" }, { ja: "浪速（大阪）", en: "Naniwa (Osaka)" }, { ja: "横浜創学館（神奈川）", en: "Yokohama Sogakukan (Kanagawa)" }],
      [{ ja: "女子団体形", en: "Girls' team kata", es: "Kata por equipos femenino" }, { ja: "八雲学園（東京）", en: "Yakumo Gakuen (Tokyo)" }, { ja: "大阪学芸（大阪）", en: "Osaka Gakugei (Osaka)" }]
    ], src: "https://www.jkf.ne.jp/result/45hssembatsu" },
  { title: { ja: "第53回 全日本空手道選手権大会（2025年12月）", en: "53rd All Japan Karate Championships (Dec 2025)", es: "53.º Campeonato de Japón de Karate (dic. 2025)" },
    note: { ja: "個人戦は全種目で初優勝者が誕生", en: "First-time champions in every individual event", es: "Campeones por primera vez en todas las pruebas individuales" },
    rows: [
      [{ ja: "男子形", en: "Men's kata", es: "Kata masculino" }, { ja: "本 一将（全空連推薦）", en: "本 一将 (JKF nominee)", es: "本 一将 (propuesto por la JKF)" }, { ja: "西山 走", en: "西山 走" }],
      [{ ja: "女子形", en: "Women's kata", es: "Kata femenino" }, { ja: "三島 きり（全実連）", en: "三島 きり (Corporate Karate Fed.)", es: "三島 きり (Fed. de Karate de Empresas)" }, { ja: "尾野 真歩", en: "尾野 真歩" }],
      [{ ja: "男子組手", en: "Men's kumite", es: "Kumite masculino" }, { ja: "阿部 遥佑（学連／法政大）", en: "阿部 遥佑 (Hosei Univ.)", es: "阿部 遥佑 (Univ. Hosei)" }, { ja: "崎山 優成", en: "崎山 優成" }],
      [{ ja: "女子組手", en: "Women's kumite", es: "Kumite femenino" }, { ja: "崎山 紬（香川県／京都産業大）", en: "崎山 紬 (Kyoto Sangyo Univ.)", es: "崎山 紬 (Univ. Kyoto Sangyo)" }, { ja: "小堂 利奈", en: "小堂 利奈" }]
    ], src: "https://www.karatedo.co.jp/news/result/20251214/58917" },
  { title: { ja: "第69回 全日本大学空手道選手権大会（2025年11月）", en: "69th All Japan University Championships (Nov 2025)", es: "69.º Campeonato Universitario de Japón (nov. 2025)" },
    note: { ja: "帝京大学が3冠", en: "Teikyo University wins three titles", es: "La Universidad Teikyo gana tres títulos" },
    rows: [
      [{ ja: "男子団体組手", en: "Men's team kumite", es: "Kumite por equipos masculino" }, { ja: "帝京大学", en: "Teikyo" }, { ja: "京都産業大学", en: "Kyoto Sangyo" }],
      [{ ja: "女子団体組手", en: "Women's team kumite", es: "Kumite por equipos femenino" }, { ja: "中部学院大学", en: "Chubu Gakuin" }, { ja: "帝京大学", en: "Teikyo" }],
      [{ ja: "男子団体形", en: "Men's team kata", es: "Kata por equipos masculino" }, { ja: "帝京大学", en: "Teikyo" }, { ja: "同志社大学", en: "Doshisha" }],
      [{ ja: "女子団体形", en: "Women's team kata", es: "Kata por equipos femenino" }, { ja: "帝京大学", en: "Teikyo" }, { ja: "国士舘大学", en: "Kokushikan" }]
    ], src: "https://www.karatedo.co.jp/news/topics/20251117/57197" },
  { title: { ja: "2025 インターハイ 空手道競技（岡山・倉敷）", en: "2025 Inter-High Karate (Kurashiki, Okayama)", es: "Inter-High de karate 2025 (Kurashiki, Okayama)" },
    rows: [
      [{ ja: "男子団体組手", en: "Boys' team kumite", es: "Kumite por equipos masculino" }, { ja: "浪速（大阪）", en: "Naniwa (Osaka)" }, null],
      [{ ja: "女子団体組手", en: "Girls' team kumite", es: "Kumite por equipos femenino" }, { ja: "高松中央（香川）", en: "Takamatsu Chuo (Kagawa)" }, null],
      [{ ja: "男子個人組手", en: "Boys' kumite", es: "Kumite masculino" }, { ja: "中村 達人（宮崎第一）", en: "中村 達人 (Miyazaki Daiichi)" }, null],
      [{ ja: "女子個人組手", en: "Girls' kumite", es: "Kumite femenino" }, { ja: "関 心葉（埼玉栄）", en: "関 心葉 (Saitama Sakae)" }, null],
      [{ ja: "男子個人形", en: "Boys' kata", es: "Kata masculino" }, { ja: "奥村 宗司（大阪学芸）", en: "奥村 宗司 (Osaka Gakugei)" }, null],
      [{ ja: "女子個人形", en: "Girls' kata", es: "Kata femenino" }, { ja: "伊藤 わかな（城南学園）", en: "伊藤 わかな (Jonan Gakuen)" }, null]
    ], src: "https://www.karatedo.co.jp/news/topics/20250811/52743" }
];
