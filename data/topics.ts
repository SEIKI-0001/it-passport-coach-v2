import type { StudyDomain, Topic } from "@/types/content";

export const domainLabels: Record<StudyDomain, string> = {
  strategy: "ストラテジ系",
  management: "マネジメント系",
  technology: "テクノロジ系"
};

export const topics: Topic[] = [
  {
    id: "strategy-business-model",
    domain: "strategy",
    title: "ビジネスモデルと収益の流れ",
    summary: "企業が誰に価値を届け、どこで収益を得るかを整理するテーマです。",
    beginnerExplanation:
      "ビジネスモデルは「お店のもうけ方の設計図」です。商品を売るだけでなく、広告、月額課金、仲介手数料など、収益の入り口がどこにあるかを見ます。",
    analogy:
      "文化祭の屋台で、たこ焼き販売だけでなく、場所代やスポンサー掲示でも収益を得るようなイメージです。",
    diagramText:
      "顧客 -> 価値提供 -> 支払い -> 企業、という流れに加えて、仕入先・広告主・提携先がどこに関わるかを矢印で描くと理解しやすいです。",
    keyTerms: ["B2B", "B2C", "サブスクリプション", "プラットフォーム", "フリーミアム"],
    commonTraps: ["売上と利益を混同する", "利用者と支払者が同じとは限らない"],
    relatedPastExamThemes: ["経営戦略", "eビジネス", "マーケティング"],
    reviewPriority: 3,
    recommendedMinutes: 25,
    bookReferenceNotes: {
      generic: "ストラテジ系の経営戦略・ビジネスモデルの節",
      yasashii: "企業活動の章: ビジネスモデルと収益構造",
      speed: "ストラテジ頻出用語: eビジネス"
    }
  },
  {
    id: "strategy-break-even",
    domain: "strategy",
    title: "損益分岐点",
    summary: "売上と費用が同じになり、利益がゼロになる販売量や売上高を求めます。",
    beginnerExplanation:
      "損益分岐点は「ここまで売れたら赤字ではなくなるライン」です。固定費は売れても売れなくてもかかる費用、変動費は売れるほど増える費用です。",
    analogy:
      "ライブ開催で、会場代は固定費、来場者ごとのドリンク代は変動費です。チケット収入がそれらを超えたところから利益になります。",
    diagramText:
      "横軸を販売数量、縦軸を金額にして、売上線と総費用線が交わる点が損益分岐点です。",
    keyTerms: ["固定費", "変動費", "利益", "変動費率", "損益分岐点売上高"],
    commonTraps: ["固定費と変動費を逆にする", "利益が最大になる点と勘違いする"],
    relatedPastExamThemes: ["会計", "利益計算", "経営分析"],
    reviewPriority: 5,
    recommendedMinutes: 35,
    bookReferenceNotes: {
      generic: "会計・財務の損益分岐点分析",
      yasashii: "経営分析: 固定費と変動費",
      speed: "計算問題: 損益分岐点"
    },
    minigameId: "break-even-slider"
  },
  {
    id: "strategy-legal-security",
    domain: "strategy",
    title: "知的財産権と個人情報保護",
    summary: "ITサービスで守るべき権利や個人データの扱いを学びます。",
    beginnerExplanation:
      "アプリや文章、画像、発明、ブランド名には守られる権利があります。個人情報は、本人が特定できる情報として慎重に扱います。",
    analogy:
      "友だちの写真を勝手にSNSに載せない、好きな曲を無断で配布しない、という日常のマナーが法律で決められたものです。",
    diagramText:
      "著作権・特許権・商標権・個人情報を4つの箱に分け、何を守るかを入れていくと整理できます。",
    keyTerms: ["著作権", "特許権", "商標権", "個人情報", "要配慮個人情報"],
    commonTraps: ["アイデアそのものと表現物を混同する", "個人情報は氏名だけだと思う"],
    relatedPastExamThemes: ["法務", "知的財産権", "個人情報保護"],
    reviewPriority: 4,
    recommendedMinutes: 30,
    bookReferenceNotes: {
      generic: "法務の知的財産権・個人情報保護",
      yasashii: "法律とセキュリティの基本",
      speed: "法務頻出まとめ"
    }
  },
  {
    id: "management-project",
    domain: "management",
    title: "プロジェクト管理",
    summary: "期限・費用・品質を見ながら、作業を計画して進める考え方です。",
    beginnerExplanation:
      "プロジェクト管理は、ゴールまでに必要な作業を分解して、いつ誰が何をやるかを決めることです。遅れやリスクを早めに見つけるのが大切です。",
    analogy:
      "学園祭の準備で、装飾、買い出し、告知、当日の担当を分けて進み具合を見るのと同じです。",
    diagramText:
      "WBSで作業を階層に分け、ガントチャートで横軸に日付、縦軸に作業を置くと全体の流れが見えます。",
    keyTerms: ["WBS", "ガントチャート", "クリティカルパス", "リスク管理", "スコープ"],
    commonTraps: ["WBSを日程表だと思う", "リスクは発生後だけ対応すると考える"],
    relatedPastExamThemes: ["プロジェクトマネジメント", "工程管理"],
    reviewPriority: 4,
    recommendedMinutes: 30,
    bookReferenceNotes: {
      generic: "マネジメント系のプロジェクトマネジメント",
      yasashii: "開発を進める管理方法",
      speed: "PM頻出図表"
    }
  },
  {
    id: "management-service",
    domain: "management",
    title: "ITサービスマネジメント",
    summary: "システムを安定して使えるように運用・改善する考え方です。",
    beginnerExplanation:
      "ITサービスは作って終わりではありません。問い合わせ対応、障害対応、変更管理、再発防止を続けて、利用者が安心して使える状態にします。",
    analogy:
      "コンビニが商品補充、レジ対応、故障対応、クレーム対応を続けることで店を回しているイメージです。",
    diagramText:
      "インシデント -> 一時対応 -> 原因調査 -> 問題管理 -> 変更管理、という流れを矢印で追うと整理できます。",
    keyTerms: ["SLA", "インシデント管理", "問題管理", "変更管理", "可用性"],
    commonTraps: ["インシデント管理と問題管理の目的を混同する", "SLAを社内目標だけだと思う"],
    relatedPastExamThemes: ["サービスマネジメント", "システム運用"],
    reviewPriority: 3,
    recommendedMinutes: 25,
    bookReferenceNotes: {
      generic: "サービスマネジメントの運用管理",
      yasashii: "システムを使い続けるための管理",
      speed: "ITIL・SLA頻出"
    }
  },
  {
    id: "management-audit",
    domain: "management",
    title: "システム監査",
    summary: "システムや運用が適切かを第三者目線で確認します。",
    beginnerExplanation:
      "システム監査は、ルール通りに安全・正確にシステムが使われているかをチェックする活動です。問題があれば改善を提案します。",
    analogy:
      "文化祭の会計係とは別の人が、レシートや記録を見てお金の使い方を確認するようなものです。",
    diagramText:
      "監査計画 -> 予備調査 -> 本調査 -> 評価 -> 報告 -> フォローアップ、の順に並べると流れが見えます。",
    keyTerms: ["監査証跡", "内部統制", "独立性", "監査報告", "フォローアップ"],
    commonTraps: ["監査人が直接システムを修正すると考える", "開発担当者と監査人の独立性を忘れる"],
    relatedPastExamThemes: ["システム監査", "内部統制"],
    reviewPriority: 3,
    recommendedMinutes: 25,
    bookReferenceNotes: {
      generic: "システム監査と内部統制",
      yasashii: "監査の流れ",
      speed: "監査頻出用語"
    }
  },
  {
    id: "technology-binary",
    domain: "technology",
    title: "2進数と情報量",
    summary: "コンピュータが0と1で情報を扱う基本を学びます。",
    beginnerExplanation:
      "コンピュータは電気のON/OFFを0と1として扱います。ビットは0/1の1桁、バイトは一般的に8ビットです。",
    analogy:
      "スイッチが1個なら2通り、2個なら4通り、3個なら8通りの合図が作れるイメージです。",
    diagramText:
      "1ビットで2通り、2ビットで4通り、3ビットで8通り、と枝分かれ図で増え方を見ると理解しやすいです。",
    keyTerms: ["ビット", "バイト", "2進数", "16進数", "文字コード"],
    commonTraps: ["1バイトを10ビットと勘違いする", "2進数と10進数の桁の重みを混同する"],
    relatedPastExamThemes: ["基礎理論", "情報量", "データ表現"],
    reviewPriority: 4,
    recommendedMinutes: 30,
    bookReferenceNotes: {
      generic: "テクノロジ系の基礎理論",
      yasashii: "コンピュータの数字の表し方",
      speed: "基礎理論の計算"
    }
  },
  {
    id: "technology-database-normalization",
    domain: "technology",
    title: "データベースの正規化",
    summary: "データの重複や更新ミスを減らすために表を整理します。",
    beginnerExplanation:
      "正規化は、同じ情報を何度も書かないように表を分けることです。データを一か所で管理できると、修正漏れが起きにくくなります。",
    analogy:
      "クラス名簿に住所を毎回書くより、生徒表と住所表に分けて番号でつなぐイメージです。",
    diagramText:
      "注文表の中に顧客名や商品名が繰り返し出る場合、顧客表・商品表・注文表に分けて線で結びます。",
    keyTerms: ["主キー", "外部キー", "第1正規形", "第2正規形", "第3正規形"],
    commonTraps: ["表を分ければ必ず速くなると思う", "主キーと外部キーを混同する"],
    relatedPastExamThemes: ["データベース", "関係データベース", "正規化"],
    reviewPriority: 5,
    recommendedMinutes: 35,
    understandingExperience: {
      id: "experience-db-normalization-duplicate-address",
      title: "住所を何か所直すことになる？",
      situation:
        "注文表に同じ顧客の住所が3行ぶん重複して入っています。その顧客が引っ越したので、住所を新しいものに直す必要があります。",
      question: "この表のままだと、住所は何か所修正する必要がありますか？",
      interactionType: "choice",
      choices: [
        {
          id: "one",
          label: "1か所だけ直せばよい",
          isCorrect: false,
          feedback:
            "1か所だけ直すと、同じ顧客なのに古い住所が残った行と新しい住所の行が混ざります。これがデータの不整合です。"
        },
        {
          id: "two",
          label: "2か所直せば十分",
          isCorrect: false,
          feedback:
            "2か所直しても、残り1行が古い住所のままです。重複している情報は、直し忘れが起きやすくなります。"
        },
        {
          id: "three",
          label: "3か所すべて直す",
          isCorrect: true,
          feedback:
            "その通りです。同じ住所が3行に重複しているので、すべて直さないと表の中で矛盾が起きます。"
        },
        {
          id: "none",
          label: "修正しなくてよい",
          isCorrect: false,
          feedback:
            "住所が古いままだと、配送や請求のような実務で困ります。データは現実の状態に合わせて更新する必要があります。"
        }
      ],
      resultExplanation:
        "同じ情報を何度も持つ表では、更新のたびに複数箇所を直す必要があります。1つでも漏れると、同じ顧客に複数の住所があるように見えてしまいます。",
      conceptExplanation:
        "そこで、顧客の住所は顧客表に1回だけ持たせ、注文表には顧客IDだけを書くように分けます。直す場所が1か所になり、修正漏れを防ぎやすくなります。",
      connectionToTerm:
        "このように、重複を減らしてデータの不整合を防ぐために表を整理する考え方が「正規化」です。"
    },
    bookReferenceNotes: {
      generic: "データベースの正規化",
      yasashii: "表の整理とキー",
      speed: "DB頻出: 正規化"
    }
  },
  {
    id: "technology-network-ip",
    domain: "technology",
    title: "IPアドレスとネットワーク",
    summary: "ネットワーク上の機器を識別し、通信先を見つける基本です。",
    beginnerExplanation:
      "IPアドレスはネットワーク上の住所です。同じネットワーク内か、別のネットワークかによって、通信の通り道が変わります。",
    analogy:
      "同じ学校内の教室へ行くのと、別の学校へ郵便を送るのでは、届け方が違うイメージです。",
    diagramText:
      "端末 -> ルータ -> インターネット -> 相手サーバ、という道順に、IPアドレスとネットワーク部/ホスト部を添えると整理できます。",
    keyTerms: ["IPアドレス", "サブネットマスク", "ルータ", "デフォルトゲートウェイ", "NAT"],
    commonTraps: ["IPアドレスとMACアドレスを混同する", "サブネットマスクを住所そのものだと思う"],
    relatedPastExamThemes: ["ネットワーク", "TCP/IP", "通信プロトコル"],
    reviewPriority: 5,
    recommendedMinutes: 35,
    bookReferenceNotes: {
      generic: "ネットワーク: IPアドレスとTCP/IP",
      yasashii: "インターネットの住所",
      speed: "ネットワーク頻出"
    }
  },
  {
    id: "technology-cache",
    domain: "technology",
    title: "キャッシュ",
    summary: "一度使ったデータを近くに置き、次回以降の表示や処理を速くする仕組みです。",
    beginnerExplanation:
      "キャッシュは、よく使うデータのコピーを手元に置いておく仕組みです。毎回遠い場所へ取りに行かなくてよいので、表示や処理が速くなります。",
    analogy:
      "毎回倉庫まで資料を取りに行く代わりに、よく使う資料のコピーを机の上に置いておくイメージです。",
    diagramText:
      "利用者 -> 近くのキャッシュを確認 -> あればすぐ使う、なければ元データを取りに行ってコピーを置く、という流れで描くと理解しやすいです。",
    keyTerms: ["キャッシュ", "キャッシュヒット", "キャッシュミス", "有効期限", "更新"],
    commonTraps: ["キャッシュは常に最新だと思う", "速くなる仕組みと保存先そのものを混同する"],
    relatedPastExamThemes: ["Web", "メモリ", "性能改善"],
    reviewPriority: 4,
    recommendedMinutes: 25,
    understandingExperience: {
      id: "experience-cache-desk-copy",
      title: "2回目も倉庫まで取りに行く？",
      situation:
        "あなたは授業で同じ資料を何度も使います。毎回遠くの倉庫へ取りに行く方法と、机の上にコピーを置いておく方法があります。",
      question: "2回目以降、いちばん早く資料を見られるのはどれですか？",
      interactionType: "choice",
      choices: [
        {
          id: "warehouse",
          label: "毎回倉庫に取りに行く",
          isCorrect: false,
          feedback:
            "確実に原本を見られますが、毎回移動するので遅くなります。コンピュータでも遠い場所へのアクセスは時間がかかります。"
        },
        {
          id: "desk-copy",
          label: "机の上のコピーを見る",
          isCorrect: true,
          feedback:
            "正解です。近くにコピーがあれば、同じ資料をすぐ見られます。これがキャッシュの基本の感覚です。"
        },
        {
          id: "same",
          label: "どちらも同じ速さ",
          isCorrect: false,
          feedback:
            "近くにあるものを見る方が、遠くまで取りに行くより速いです。距離や処理の手間を減らすのがキャッシュの強みです。"
        },
        {
          id: "throw-away",
          label: "資料を毎回捨ててから探す",
          isCorrect: false,
          feedback:
            "毎回捨てると、同じ資料をまた探すことになります。再利用できるコピーを残すから速くなります。"
        }
      ],
      resultExplanation:
        "一度手に入れたデータを近くに保存しておくと、次回は遠くのサーバや遅い記憶装置まで取りに行かずにすみます。",
      conceptExplanation:
        "ただし、コピーは古くなることがあります。元の資料が更新されたら、キャッシュの有効期限を切ったり、更新したり、削除したりする必要があります。",
      connectionToTerm:
        "近くのコピーが使えた状態を「キャッシュヒット」、コピーがなく元データを取りに行く状態を「キャッシュミス」と呼びます。"
    },
    bookReferenceNotes: {
      generic: "テクノロジ系: Web・メモリ・性能改善のキャッシュ",
      yasashii: "インターネットやコンピュータを速くする仕組み",
      speed: "頻出用語: キャッシュ・ヒット・ミス"
    }
  },
  {
    id: "technology-dns",
    domain: "technology",
    title: "DNSの名前解決",
    summary: "ドメイン名からIPアドレスを調べる仕組みです。",
    beginnerExplanation:
      "DNSはインターネットの電話帳のようなものです。人が覚えやすいドメイン名を、コンピュータが使うIPアドレスに変換します。",
    analogy:
      "友だちの名前から電話番号を連絡先アプリで調べて、実際に電話をかけるような流れです。",
    diagramText:
      "ブラウザ -> DNSリゾルバ -> ルートDNS -> TLD DNS -> 権威DNS -> IPアドレス取得、という順番を矢印で描きます。",
    keyTerms: ["DNS", "名前解決", "リゾルバ", "ルートDNS", "キャッシュ"],
    commonTraps: ["DNSがWebページ本体を返すと思う", "キャッシュが常に最新だと思う"],
    relatedPastExamThemes: ["ネットワーク", "インターネット", "サーバ"],
    reviewPriority: 5,
    recommendedMinutes: 30,
    understandingExperience: {
      id: "experience-dns-name-to-address",
      title: "名前だけで通信できる？",
      situation:
        "あなたはブラウザで example.com を開きたいと思っています。でもコンピュータは、人間向けの名前だけでは通信先を特定できません。",
      question: "Webページを取りに行く前に、最初に必要なことは何ですか？",
      interactionType: "choice",
      choices: [
        {
          id: "direct",
          label: "Webサーバーへ直接アクセスする",
          isCorrect: false,
          feedback:
            "相手の住所が分からないままでは直接向かえません。コンピュータ同士の通信には、まずIPアドレスが必要です。"
        },
        {
          id: "ask-dns",
          label: "DNSにIPアドレスを問い合わせる",
          isCorrect: true,
          feedback:
            "正解です。DNSに問い合わせることで、example.com に対応するIPアドレスを調べられます。"
        },
        {
          id: "encrypt",
          label: "先に暗号化する",
          isCorrect: false,
          feedback:
            "暗号化は安全に送るための仕組みですが、送り先の住所が分からない問題は解決できません。"
        },
        {
          id: "clear-cache",
          label: "キャッシュを削除する",
          isCorrect: false,
          feedback:
            "キャッシュは過去に調べた結果を早く使うためのものです。まず必要なのは、名前から住所を知ることです。"
        }
      ],
      resultExplanation:
        "コンピュータが通信するには、相手の住所にあたるIPアドレスが必要です。example.com のような名前は人間には分かりやすい一方、そのままでは通信先になりません。",
      conceptExplanation:
        "DNSは、ドメイン名からIPアドレスを調べる電話帳のような仕組みです。住所が分かってから、はじめてWebサーバへアクセスできます。",
      connectionToTerm:
        "この「名前からIPアドレスを調べること」を「名前解決」と呼びます。"
    },
    bookReferenceNotes: {
      generic: "ネットワーク: DNSと名前解決",
      yasashii: "URLとWeb表示のしくみ",
      speed: "DNS・プロトコル"
    },
    minigameId: "dns-resolver"
  },
  {
    id: "technology-security-crypto",
    domain: "technology",
    title: "暗号化と公開鍵・秘密鍵",
    summary: "安全に情報を送るための暗号方式と鍵の考え方です。",
    beginnerExplanation:
      "暗号化は、第三者に読まれない形に変えることです。共通鍵暗号方式は同じ鍵で閉めて開け、公開鍵暗号方式は公開鍵で閉めて秘密鍵で開けます。",
    analogy:
      "公開鍵は誰でも使える南京錠、秘密鍵は自分だけが持つ鍵です。誰でも南京錠をかけられますが、開けられるのは秘密鍵の持ち主だけです。",
    diagramText:
      "送信者が受信者の公開鍵で暗号化し、受信者が秘密鍵で復号する流れを左右に描くと分かりやすいです。",
    keyTerms: ["共通鍵暗号方式", "公開鍵暗号方式", "秘密鍵", "電子署名", "ハッシュ"],
    commonTraps: ["公開鍵で復号すると勘違いする", "暗号化とハッシュ化を同じものと思う"],
    relatedPastExamThemes: ["情報セキュリティ", "暗号", "認証"],
    reviewPriority: 5,
    recommendedMinutes: 35,
    bookReferenceNotes: {
      generic: "セキュリティ: 暗号化と認証",
      yasashii: "安全に通信するしくみ",
      speed: "暗号・認証頻出"
    }
  },
  {
    id: "technology-algorithm",
    domain: "technology",
    title: "アルゴリズムとフローチャート",
    summary: "処理手順を順番・分岐・繰り返しで整理します。",
    beginnerExplanation:
      "アルゴリズムは問題を解く手順です。フローチャートは、その手順を図にして、条件分岐や繰り返しを見えるようにします。",
    analogy:
      "料理レシピで、材料を切る、炒める、味見して足りなければ塩を足す、という手順を書くようなものです。",
    diagramText:
      "開始、処理、判断、終了の記号を使い、条件が真なら右、偽なら下のように流れを追います。",
    keyTerms: ["順次", "分岐", "反復", "フローチャート", "擬似言語"],
    commonTraps: ["繰り返し条件の終了タイミングを読み飛ばす", "判断記号のYes/Noを逆に追う"],
    relatedPastExamThemes: ["アルゴリズム", "プログラミング的思考"],
    reviewPriority: 4,
    recommendedMinutes: 30,
    bookReferenceNotes: {
      generic: "アルゴリズムとプログラミング",
      yasashii: "処理の流れを読む",
      speed: "擬似言語・フローチャート"
    }
  }
];

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((topic) => topic.id === topicId);
}

export function getTopicsByDomain(domain: StudyDomain): Topic[] {
  return topics.filter((topic) => topic.domain === domain);
}
