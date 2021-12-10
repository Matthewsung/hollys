export const menuType = {
  espresso: {
    menuHistory: 'Home > Menu > COFFEE',
    menuTitle: '커피',
  },
  signature: {
    menuHistory: 'Home > Menu > 라떼 · 초콜릿 · 티',
    menuTitle: '라떼·초콜릿·티',
  },
  hollyccino: {
    menuHistory: 'Home > Menu > 할리치노 · 빙수',
    menuTitle: '할리치노·빙수',
  },
  tea: {
    menuHistory: 'Home > Menu > 스파클링',
    menuTitle: '스파클링',
  },
  bakery: {
    menuHistory: 'Home > Menu > 푸드',
    menuTitle: '푸드',
  },
  md: {
    menuHistory: 'Home > Menu > MD상품',
    menuTitle: 'MD상품',
  },
  bean: {
    menuHistory: 'Home > Menu > MD식품',
    menuTitle: 'MD식품',
  },
}


export const beverage = {
  espresso: [
    {
      nameKo: '바닐라오트라떼',
      nameEn: 'Vanilla Oat Latte',
      desc: '바닐라의 부드럽고 달콤한 맛에 오트의 고소한 맛이 어우러진 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리(kcal)',
          sugar: '당류(g)',
          protein: '단백질(g)',
          fat: '포화지방(g)',
          natrium: '나트륨(mg)',
          caffeine: '카페인(mg)',
        },
        {
          contents:'HOT',
          cal: '298kcal',
          sugar: '30g(30%)',
          protein: '10g(15%)',
          fat: '6.5g(43%)',
          natrium: '185mg(9%)',
          caffeine: '127mg',
        },
        {
          contents:'ICED',
          cal: '222kcal',
          sugar: '24g(24%)',
          protein: '7g(12%)',
          fat: '3.8g(26%)',
          natrium: '126mg(6%)',
          caffeine: '127mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유, 대두',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '디카페인 아메리카노',
      nameEn: 'Americano (Decaf blend)',
      desc: '부드러운 풍미와 균형잡힌 바디감의 디카페인 아메리카노',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular 기준)',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '12kcal',
          sugar: '0g/0%',
          protein: '1g/1%',
          fat: '0.0g/0%',
          natrium: '19mg/1%',
          caffeine: '7mg',
        },
        {
          contents:'ICED',
          cal: '12kcal',
          sugar: '0g/0%',
          protein: '1g/1%',
          fat: '0.0g/0%',
          natrium: '19mg/1%',
          caffeine: '7mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
    {
      nameKo: '디카페인 카페라떼',
      nameEn: 'Caffe Latte (Decaf blend)',
      desc: '부드러운 풍미와 균형잡인 바디감의 디카페인 카페라떼',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular 기준)',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '188kcal',
          sugar: '14g/14%',
          protein: '9g/16%',
          fat: '6.3g/42%',
          natrium: '155mg/8%',
          caffeine: '7mg',
        },
        {
          contents:'ICED',
          cal: '122kcal',
          sugar: '9g/9%',
          protein: '6g/10%',
          fat: '3.9g/26%',
          natrium: '104mg/5%',
          caffeine: '7mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '바닐라 딜라이트(디카페인 원두 변경)',
      nameEn: 'Vanilla Delight (Decaf blend)',
      desc: '디카페인 원두로 변경해 더 부드럽고 편안해진 바닐라 딜라이트 (*바닐라 딜라이트 제조에 사용되는 파우더에 카페인이 일부 함유되어 있음)',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular 기준)',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '259kcal',
          sugar: '31g/31%',
          protein: '10g/18%',
          fat: '6.9g/46%',
          natrium: '232mg/12%',
          caffeine: '20mg',
        },
        {
          contents:'ICED',
          cal: '202kcal',
          sugar: '24g/24%',
          protein: '6g/10%',
          fat: '6.1g/40%',
          natrium: '161mg/8%',
          caffeine: '20mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유, 대두',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '프리미엄 블렌드 아메리카노',
      nameEn: 'Premium Blend Americano',
      desc: '화사한 산미와 과일과 같은 달콤함, 깔끔한 후미를 즐길수 있는 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준(Grande / 472ml))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '13kcal',
          sugar: '0g/0%',
          protein: '1g/2%',
          fat: '0.1g/1%',
          natrium: '4mg/0%',
          caffeine: '233mg',
        },
        {
          contents:'ICED',
          cal: '13kcal',
          sugar: '0g/0%',
          protein: '1g/2%',
          fat: '0.1g/1%',
          natrium: '4mg/0%',
          caffeine: '233mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
    {
      nameKo: '콜드브루 딜라이트',
      nameEn: 'Cold Brew Delight',
      desc: '실키한 연유베이스에 콜드브루를 넣어 부담없이 즐기는 라떼',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준(Grande / 472ml))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {
          contents:'HOT',
          cal: '-',
          sugar: '-',
          protein: '-',
          fat: '-',
          natrium: '-',
          caffeine: '-',
        },
        {
          contents:'ICED',
          cal: '207kcal',
          sugar: '24g/24%',
          protein: '6g/12%',
          fat: '4.8g/32%',
          natrium: '103mg/5%',
          caffeine: '148mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '더블샷 바닐라 딜라이트',
      nameEn: 'Double Shot Vanilla Delight',
      desc: '할리스 시그니처 메뉴인 바닐라 딜라이트를 더 진하게 즐길 수 있는 커피 메뉴',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 )',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '280kcal',
          sugar: '31g/31%',
          protein: '11g/20%',
          fat: '8.2g/55%',
          natrium: '234mg/12%',
          caffeine: '169mg',
        },
        {
          contents:'ICED',
          cal: '224kcal',
          sugar: '25g/25%',
          protein: '7g/13%',
          fat: '6.9g/46%',
          natrium: '169mg/8%',
          caffeine: '169mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
    {
      nameKo: '프리미엄 블렌드 딥라떼',
      nameEn: 'Premium Blend Deep Latte',
      desc: '풍성한 우유 거품 위에 프리미엄 블렌드 리스트레또 샷이 더해져 깊은 커피 풍미를 느낄 수 있는 라떼',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '141kcal',
          sugar: '10g/10%',
          protein: '7g/13%',
          fat: '4.7g/31%',
          natrium: '100mg/5%',
          caffeine: '111mg',
        },
        {
          contents:'ICED',
          cal: '109kcal',
          sugar: '8g/8%',
          protein: '5g/9%',
          fat: '3.5g/23%',
          natrium: '75mg/4%',
          caffeine: '111mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '바닐라딜라이트',
      nameEn: 'Vanilla Delight',
      desc: '카페라떼에 바닐라빈으로 만든 바닐라 파우더를 더해 더욱 풍부하고 감미로운 할리스만의 바닐라라떼',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '256kcal',
          sugar: '31g/31%',
          protein: '10g/18%',
          fat: '6.9g/46%',
          natrium: '219mg/11%',
          caffeine: '80mg',
        },
        {
          contents:'ICED',
          cal: '209kcal',
          sugar: '25g/25%',
          protein: '6g/11%',
          fat: '6.2g/41%',
          natrium: '161mg/8%',
          caffeine: '80mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '리스트레또 딜라이트',
      nameEn: 'Ristretto Delight',
      desc: '달콤한 연유와 고소한 할리스 원두, 크리미한 바디가 절묘하게 어우러진 시즌 스페셜 메뉴',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '311kcal',
          sugar: '34g/34%',
          protein: '12g/22%',
          fat: '8.3g/55%',
          natrium: '177mg/9%',
          caffeine: '93mg',
        },
        {
          contents:'ICED',
          cal: '166kcal',
          sugar: '18g/18%',
          protein: '6g/10%',
          fat: '4.3g/29%',
          natrium: '91mg/5%',
          caffeine: '93mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '콜드브루 라떼',
      nameEn: 'Cold Brew Latte',
      desc: '콜드브루 커피의 풍부한 풍미와 우유의 고소함이 더해진 라떼',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {
          contents:'HOT',
          cal: '-',
          sugar: '-',
          protein: '-',
          fat: '-',
          natrium: '-',
          caffeine: '-',
        },
        {
          contents:'ICED',
          cal: '125kcal',
          sugar: '9g/9%',
          protein: '5g/9%',
          fat: '3.9g/26%',
          natrium: '85mg/4%',
          caffeine: '148mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '콜드브루',
      nameEn: 'Cold Brew',
      desc: '콜드브루 전용 블렌드를 상온의 물로 오랜시간 추출해 달콤한 산미와 부드러운 바디감이 살아있는 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {
          contents:'HOT',
          cal: '-',
          sugar: '-',
          protein: '-',
          fat: '-',
          natrium: '-',
          caffeine: '-',
        },
        {
          contents:'ICED',
          cal: '9kcal',
          sugar: '0g/0%',
          protein: '1g/1%',
          fat: '0.2g/1%',
          natrium: '2mg/0%',
          caffeine: '137mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
    {
      nameKo: '카라멜 마키아또',
      nameEn: 'Caramel Macchiato',
      desc: '진한 에스프레소에 바닐라 시럽과 카라멜소스가 더해진 카라멜 커피음료의 대표',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '239kcal',
          sugar: '24g/24%',
          protein: '8g/15%',
          fat: '6.1g/41%',
          natrium: '135mg/7%',
          caffeine: '127mg',
        },
        {
          contents:'ICED',
          cal: '168kcal',
          sugar: '19g/19%',
          protein: '5g/9%',
          fat: '3.6g/24%',
          natrium: '80mg/4%',
          caffeine: '127mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '카페모카',
      nameEn: 'Caffe Mocha',
      desc: '진한 에스프레소와 우유, 달콤 쌉싸름한 초콜릿이 어우러진 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '251kcal',
          sugar: '28g/28%',
          protein: '8g/15%',
          fat: '5.9g/39%',
          natrium: '146mg/7%',
          caffeine: '132mg',
        },
        {
          contents:'ICED',
          cal: '181kcal',
          sugar: '23g/23%',
          protein: '5g/9%',
          fat: '3.4g/23%',
          natrium: '92mg/5%',
          caffeine: '132mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유, 대두',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '카푸치노',
      nameEn: 'Cappuccino',
      desc: '에스프레소에 실키하고 폭신폭신한 우유 거품이 풍부하게 더해진 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '165kcal',
          sugar: '49g/12%',
          protein: '12g/8%',
          fat: '5.5g/37%',
          natrium: '119mg/6%',
          caffeine: '127mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '카페라떼',
      nameEn: 'Caffe Latte',
      desc: '진한 에스프레소에 우유를 넣어 풍부한 커피향을 부드럽게 즐길 수 있는 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '180kcal',
          sugar: '13g/13%',
          protein: '8g/15%',
          fat: '6.0g/40%',
          natrium: '130mg/7%',
          caffeine: '127mg',
        },
        {
          contents:'ICED',
          cal: '104kcal',
          sugar: '7g/7%',
          protein: '5g/9%',
          fat: '3.3g/22%',
          natrium: '72mg/4%',
          caffeine: '127mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '아메리카노',
      nameEn: 'Caffe Americano',
      desc: '진한 에스프레소의 맛과 향을 부드럽게 즐길 수 있는 아메리칸 스타일의 커피',
      nutritionInfo: '제품영양정보 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml, Venti / 591ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '12kcal',
          sugar: '0g/0%',
          protein: '1g/2%',
          fat: '0.1g/0%',
          natrium: '5mg/0%',
          caffeine: '114mg',
        },
        {
          contents:'ICED',
          cal: '12kcal',
          sugar: '0g/0%',
          protein: '1g/2%',
          fat: '0.1g/0%',
          natrium: '5mg/0%',
          caffeine: '114mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
    {
      nameKo: '아포가토',
      nameEn: 'Affogato',
      desc: '바닐라 아이스크림과 리스트레또 더블샷이 어우러져 부드럽고 진한 맛의 아포가토',
      nutritionInfo: '제품영양정보 (1회 제공량 / 150ml 기준)',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {
          contents:'ICED',
          cal: '207kcal',
          sugar: '15g/15%',
          protein: '4g/8%',
          fat: '7.4g/49%',
          natrium: '36mg/2%',
          caffeine: '93mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
    {
      nameKo: '에스프레소',
      nameEn: 'Espresso',
      desc: '강렬한 첫 맛, 풍부한 바디감, 깔끔한 뒷 맛이 특징인 커피의 심장',
      nutritionInfo: '제품영양정보 (1회 제공량 / Solo / 25ml 기준 ( Dopio / 50ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리',
          sugar: '당류',
          protein: '단백질',
          fat: '포화지방',
          natrium: '나트륨',
          caffeine: '카페인',
        },
        {					
          contents:'HOT',
          cal: '5kcal',
          sugar: '0g/0%',
          protein: '0g/1%',
          fat: '0.0g/0%',
          natrium: '0 mg/0%',
          caffeine: '61mg',
        },
      ],
      allergy: [
        '',
        '',
      ]
    },
  ],
  signature: [
    {
      nameKo: '1111',
      nameEn: '111 Oat Latte',
      desc: '111 부드럽고 달콤한 맛에 오트의 고소한 맛이 어우러진 커피',
      nutritionInfo: '111 (1회 제공량 / Regular / 354ml 기준 ( Grande / 472ml ))',
      nutrition: [
        {
          contents:'',
          cal: '칼로리(kcal)',
          sugar: '당류(g)',
          protein: '단백질(g)',
          fat: '포화지방(g)',
          natrium: '나트륨(mg)',
          caffeine: '카페인(mg)',
        },
        {
          contents:'HOT',
          cal: '298kcal',
          sugar: '30g(30%)',
          protein: '10g(15%)',
          fat: '6.5g(43%)',
          natrium: '185mg(9%)',
          caffeine: '127mg',
        },
        {
          contents:'ICED',
          cal: '222kcal',
          sugar: '24g(24%)',
          protein: '7g(12%)',
          fat: '3.8g(26%)',
          natrium: '126mg(6%)',
          caffeine: '127mg',
        },
      ],
      allergy: [
        '알레르기 유발요인 : 우유, 대두',
        '※ 식품 등의 표시 · 광고의 관한 법률에 의거하여 알레르기 표시항목에 한해서만 표기함',
      ]
    },
  ],
  hollyccino: [

  ],
  tea: [

  ],
  bakery: [

  ],
  md: [

  ],
  bean: [

  ],
}
