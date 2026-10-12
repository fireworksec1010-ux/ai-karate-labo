// 流派の本部・統括団体（道場紹介の窓口）。url が無いものは検索リンクを表示
window.ORGS = [
  { name: { ja: "公益財団法人 全日本空手道連盟（JKF）", en: "Japan Karate Federation (JKF)", es: "Federación Japonesa de Karate (JKF)" }, style: { ja: "全流派の統括団体", en: "Governing body for all styles", es: "Organismo rector de todos los estilos" },
    d: { ja: "全日本選手権の主催、ナショナルチーム、公認段位・審判資格。各都道府県の空手道連盟から地域の加盟道場を探せます。", en: "Runs the national championships, national team, official dan grades and referee licences. Find local member dojos through each prefectural federation.", es: "Organiza los campeonatos nacionales, la selección nacional, los grados dan oficiales y las licencias de árbitro. Encuentre dojos afiliados a través de la federación de cada prefectura." },
    url: "https://www.jkf.ne.jp/" },
  { name: { ja: "公益社団法人 日本空手協会（JKA）", en: "Japan Karate Association (JKA)", es: "Asociación Japonesa de Karate (JKA)" }, style: { ja: "松濤館流", en: "Shotokan" },
    d: { ja: "松濤館流の代表的な団体。東京の総本部道場では一般稽古のほか、指導員の養成も行っています。", en: "A leading Shotokan organization. Its Tokyo headquarters dojo offers general classes and an instructor-training program.", es: "Una de las principales organizaciones de Shotokan. Su dojo central en Tokio ofrece clases generales y un programa de formación de instructores." },
    url: "https://www.jka.or.jp/" },
  { name: { ja: "全日本空手道剛柔会", en: "All Japan Karatedo Gojukai" }, style: { ja: "剛柔流", en: "Goju-ryu" },
    d: { ja: "JKFを構成する剛柔流の流派団体。全国の加盟道場を紹介しています。", en: "The Goju-ryu style organization within the JKF, with member dojos across Japan.", es: "La organización del estilo Goju-ryu dentro de la JKF, con dojos afiliados en todo Japón." } },
  { name: { ja: "全日本空手道連盟 糸東会", en: "Japan Karatedo Federation Shitokai" }, style: { ja: "糸東流", en: "Shito-ryu" },
    d: { ja: "JKFを構成する糸東流の流派団体。形競技の強豪選手を多く輩出しています。", en: "The Shito-ryu style organization within the JKF, known for producing top kata competitors.", es: "La organización del estilo Shito-ryu dentro de la JKF, conocida por formar a grandes competidores de kata." } },
  { name: { ja: "全日本空手道連盟 和道会", en: "Japan Karatedo Federation Wadokai" }, style: { ja: "和道流", en: "Wado-ryu" },
    d: { ja: "JKFを構成する和道流の流派団体。", en: "The Wado-ryu style organization within the JKF.", es: "La organización del estilo Wado-ryu dentro de la JKF." } }
];

// 全国中学生空手道選手権（全中）は道場・クラブ単位でも出場できる。2026年大会で上位に入った道場・クラブ
// pref が null のものは記事に都道府県の記載なし
window.CLUBS = [
  { name: "泊親会清水", pref: { ja: "静岡県", en: "Shizuoka" }, str: ["kumite"],
    r: { ja: "女子団体組手 優勝、男子個人組手 3位（2名）", en: "Girls' team kumite champion; two boys' kumite 3rd places", es: "Campeón de kumite por equipos femenino; dos terceros puestos en kumite masculino" } },
  { name: "荒賀道場", pref: { ja: "京都府", en: "Kyoto" }, str: ["kumite"],
    r: { ja: "男子個人組手 優勝、男子団体組手 3位", en: "Boys' kumite champion; boys' team kumite 3rd", es: "Campeón de kumite masculino; 3.º en kumite por equipos masculino" } },
  { name: "草野派糸東流拳法空手道会", pref: { ja: "滋賀県", en: "Shiga" }, str: ["kumite"],
    r: { ja: "男子団体組手 準優勝", en: "Boys' team kumite runner-up", es: "Subcampeón de kumite por equipos masculino" } },
  { name: "アンフィニ空手クラブ", pref: { ja: "石川県", en: "Ishikawa" }, str: ["kumite"],
    r: { ja: "女子団体組手 準優勝", en: "Girls' team kumite runner-up", es: "Subcampeón de kumite por equipos femenino" } },
  { name: "倉敷空手クラブ", pref: { ja: "岡山県", en: "Okayama" }, str: ["kumite"],
    r: { ja: "男子団体組手 3位", en: "Boys' team kumite 3rd", es: "3.º en kumite por equipos masculino" } },
  { name: "明桜塾", pref: { ja: "千葉県", en: "Chiba" }, str: ["kata"],
    r: { ja: "男子団体形 準優勝", en: "Boys' team kata runner-up", es: "Subcampeón de kata por equipos masculino" } },
  { name: "一宮空手道教室", pref: { ja: "千葉県", en: "Chiba" }, str: ["kata"],
    r: { ja: "女子団体形 3位", en: "Girls' team kata 3rd", es: "3.º en kata por equipos femenino" } },
  { name: "志空会", pref: null, str: ["kata"],
    r: { ja: "男子個人形 優勝", en: "Boys' kata champion", es: "Campeón de kata masculino" } },
  { name: "喜友名大里龍鳳館", pref: null, str: ["kata"],
    r: { ja: "男子個人形 3位", en: "Boys' kata 3rd", es: "3.º en kata masculino" } },
  { name: "橋本道場", pref: null, str: ["kumite"],
    r: { ja: "男子個人組手 準優勝", en: "Boys' kumite runner-up", es: "Subcampeón de kumite masculino" } },
  { name: "拳翔華", pref: null, str: ["kumite"],
    r: { ja: "女子個人組手 準優勝", en: "Girls' kumite runner-up", es: "Subcampeona de kumite femenino" } }
];
window.CLUBS_SOURCE = "https://www.karatedo.co.jp/news/result/20260824/69801";

window.OKINAWA = [
  { name: { ja: "沖縄空手会館", en: "Okinawa Karate Kaikan" },
    d: { ja: "沖縄県が整備した伝統空手の拠点（豊見城市）。道場・資料展示室があり、空手の歴史を学べます。", en: "The prefecture's center for traditional karate in Tomigusuku, with training halls and an exhibition room on karate history.", es: "El centro de karate tradicional de la prefectura, en Tomigusuku, con salas de entrenamiento y una exposición sobre la historia del karate." } },
  { name: { ja: "沖縄空手案内センター", en: "Okinawa Karate Information Center", es: "Centro de Información del Karate de Okinawa" },
    d: { ja: "海外の空手家向けに、沖縄の道場の紹介や稽古・滞在の相談を多言語で受け付けている窓口です。", en: "Helps visiting karateka find Okinawan dojos and plan training and stays, with multilingual support.", es: "Ayuda a los karatekas visitantes a encontrar dojos en Okinawa y a planificar su entrenamiento y estancia, con atención en varios idiomas." } },
  { name: { ja: "沖縄伝統空手道振興会", en: "Okinawa Traditional Karatedo Promotion Association", es: "Asociación para la Promoción del Karate Tradicional de Okinawa" },
    d: { ja: "沖縄の主要な伝統空手団体が加盟する組織。沖縄の流派（上地流・小林流・剛柔流など）の情報が集まります。", en: "An umbrella body of major Okinawan traditional karate groups (Uechi-ryu, Shorin-ryu, Goju-ryu and more).", es: "Organismo que agrupa a los principales grupos de karate tradicional de Okinawa (Uechi-ryu, Shorin-ryu, Goju-ryu y otros)." } }
];
