import {
  CgLaptop,
  CgMic,
  CgMusic,
  CgPrinter,
  CgScreenWide,
  CgSmartphone,
  CgAppleWatch,
  CgCamera,
  CgKeyboard,
} from "react-icons/cg";

export const DUMMY_CATEGORIES = [
  {
    name: "Smartphones",
    icon: <CgSmartphone color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Brand",
        array: [
          "Apple",
          "Samsung",
          "Huawei",
          "Xiaomi",
          "Meizu",
          "Lenovo",
          "Oppo",
          "Pixel",
        ],
      },
      {
        title: "Memory (gb)",
        array: ["8", "16", "32", "64", "128", "256", "512", "1024"],
      },
      {
        title: "Display size",
        array: [
          '<= 4.59"',
          '4.6" - 5"',
          '5.01" - 5.5"',
          '5.55" - 6"',
          '6.01" - 6.49"',
          '>= 6.5"',
        ],
      },
      {
        title: "Battery capacity",
        array: [
          "<= 2999 mAh",
          "3000 - 3999 mAh",
          "4000 - 4999 mAh",
          "5000 - 5999 mAh",
          ">= 6000 mAh",
        ],
      },
    ],
  },

  {
    name: "Laptops",
    icon: <CgLaptop color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "Apple",
          "Asus",
          "Lenovo",
          "Acer",
          "Dell",
          "HP",
          "MSI",
          "Samsung",
          "Huawei",
          "Xiaomi",
          "Інше",
        ],
      },
      {
        title: "Процесор",
        array: [
          "Intel Core i9",
          "Intel Core i7",
          "Intel Core i5",
          "Intel Core i3",
          "AMD Ryzen 9",
          "AMD Ryzen 7",
          "AMD Ryzen 5",
          "AMD Ryzen 3",
          "Intel Pentium",
          "Intel Celeron",
          "AMD Athlon",
          "Intel Atom",
          "Intel Xeon",
          "Інше",
        ],
      },
      {
        title: "Діагональ дисплею",
        array: ['9"-12.5"', '13"', '14"', '15"-16"', '17"', '18" та більше'],
      },
      {
        title: "Обсяг оперативної пам'яті",
        array: ["10 - 12 ГБ", "16 - 24 ГБ", "4 ГБ", "6 - 8 ГБ", "Інше"],
      },
      {
        title: "Тип накопичувача",
        array: ["SSD", "HDD", "SSD + HDD", "eMMC"],
      },
      {
        title: "Тип відеокарти",
        array: ["Дискретна", "Інтегрована", "Дискретна + Інтегрована"],
      },
      {
        title: "Обсяг накопичувача",
        array: [
          "64 - 120 ГБ",
          "128 - 250 ГБ",
          "256- 500 ГБ",
          "512 - 1000 ГБ",
          "1 ТБ та більше",
        ],
      },
    ],
  },
  {
    name: "Watches",
    icon: <CgAppleWatch color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "Apple",
          "Samsung",
          "Garmin",
          "Xiaomi",
          "Huawei",
          "Amazfit",
          "Asus",
          "Google",
          "Інше",
        ],
      },
      {
        title: "Сумісні ОС",
        array: ["Android", "Ios", "Інше"],
      },
      {
        title: "Діагональ дисплею",
        array: ['1.5"-1.6"', '1.63" та більше', 'До 1.5"'],
      },
      {
        title: "Обсяг вбудованої пам'яті",
        array: ["До 2 ГБ", "2 ГБ та більше"],
      },
      {
        title: "Операційна система",
        array: ["Android", "Tizen", "IOS", "Nucleus OS", "Watch OS", "Інше"],
      },
      {
        title: "Тип зв'язку",
        array: ["GPS", "GPS + LTE", "Без модуля"],
      },
      {
        title: "Форма годинника",
        array: ["Квадратний", "Круглий", "Прямокутний", "Інше"],
      },

      {
        title: "Матеріал корпусу",
        array: ["Алюміній", "Кераміка", "Сталь", "Пластик", "Титан", "Інше"],
      },
    ],
  },
  {
    name: "Monitors",
    icon: <CgScreenWide color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "Apple",
          "Asus",
          "Lenovo",
          "Acer",
          "Dell",
          "HP",
          "MSI",
          "Samsung",
          "Huawei",
          "Xiaomi",
          "LG",
          "Philips",
          "BenQ",
          "Інше",
        ],
      },
      {
        title: "Діагональ дисплею",
        array: [
          '13"-17.9"',
          '18"-20.9"',
          '21"-22.9"',
          '23"-23.9"',
          '24"-24.9"',
          '25"-26.9"',
          '27"-28.9"',
          '29"-33.9"',
          '34"-41.9"',
          '42" та більше"',
        ],
      },
      {
        title: "Тип матриці",
        array: ["IPS/PLS", "OLED", "QD-OLED", "TN", "VA", "Інше"],
      },
      {
        title: "Вбудовані колонки",
        array: ["Так", "Ні"],
      },
      {
        title: "Максимальна роздільна здатність дисплея",
        array: ["HD", "FullHD", "2K", "4K", "5K", "Інше"],
      },
      {
        title: "Частота оновлення",
        array: ["75 і менше", "75 - 150", "Більше ніж 150"],
      },
    ],
  },
  {
    name: "Keyboards",
    icon: <CgKeyboard color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "A4Tech",
          "Asus",
          "Gembird",
          "Genius",
          "Keychron",
          "Logitech",
          "RZTK",
          "Razer",
          "Vinga",
          "Інше",
        ],
      },
      {
        title: "Тип підключення",
        array: ["Бездротове", "Комбіноване", "Дротове"],
      },
      {
        title: "Тип клавіатури",
        array: [
          "Гібридні механічно-мембранні",
          "Комбіновані мембранні + механічні",
          "Мембранні",
          "Механічні",
          "Ножиці",
          "Оптико-механічні",
        ],
      },
      {
        title: "Форма",
        array: [
          "Без цифрового блоку",
          "Кейпад",
          "Повнорозмірна",
          "Тонка",
          "Ультракомпактна",
          "Цифровий блок (Numpad)",
          "Ергономічна",
        ],
      },
    ],
  },
  {
    name: "Printers",
    icon: <CgPrinter color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "Brother",
          "Canon",
          "Epson",
          "Fujifilm",
          "HP",
          "Jetix",
          "Pantum",
          "Samsung",
          "Xerox",
          "Інше",
        ],
      },
      {
        title: "Технологія друку",
        array: [
          "Лазерний друк",
          "Матричний друк",
          "Світлодіодний друк",
          "Струменевий друк",
          "Термальний друк",
          "Термоперенесення",
          "Термосублімаційний кольоровий друк",
          "Твердочорнильний кольоровий друк",
          "Термотрансферний друк",
        ],
      },
      {
        title: "Формат",
        array: ["А1 ", "А3 ", "А4", "А5 ", "A6"],
      },
      {
        title: "Друк ",
        array: ["Кольорова ", "Чорно-біла"],
      },
    ],
  },

  {
    name: "Cameras",
    icon: <CgCamera color="#2c3034" size={50} />,
    technicalInfo: [
      {
        title: "Бренд",
        array: [
          "Canon  ",
          "Fuji  ",
          "Fujifilm  ",
          "Kodak  ",
          "Leica  ",
          "Nikon  ",
          "Panasonic  ",
          "Polaroid  ",
          "Sony  ",
          "Інше",
        ],
      },
      {
        title: "Система ",
        array: [
          "Бездзеркальна ",
          "Дзеркальна ",
          "Компактна ",
          "Миттєвого друку",
        ],
      },
      {
        title: "Кількість ефективних пікселів",
        array: ["12 - 16 Мп ", "16 - 20 Мп", "Більше 20 Мп", "До 12 Мп "],
      },
    ],
  },
  {
    name: "Headphones",
    icon: (
      <img
        src={require("./../images/headphone.png")}
        style={{ height: 50, width: 50 }}
      />
    ),
  },
  {
    name: "Powerbanks",
    icon: (
      <img
        src={require("./../images/power-bank.png")}
        style={{ height: 50, width: 50 }}
      />
    ),
  },
];

export const DUMMY_PRODUCTS = {
  Laptops: [
    {
      id: "lap1",
      image:
        "https://rtx.com.ua/image/cache/catalog/product/35/72/product_image_58072_825929-1500x1500.jpg",
      name: "HP Pavilion 15",
      technicalInfo: "15.6', AMD Ryzen 7, 512GB",
      price: 19000,
      adress: "Kyiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "lap2",
      image:
        "https://hoshyarpakistan.com/wp-content/uploads/2023/01/Apple-MacBook-Pro-14-inch-M2-Max-review-%E2%80%A2-TechCrunch-HP.jpg",
      name: "Macbook Pro 2021",
      technicalInfo: "14', Apple M1, 1TB",
      price: 65999,
      adress: "Odesa, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
    {
      id: "lap3",
      name: "MSI Modern 14",
      technicalInfo: "14', AMD Ryzen 5, 256GB",
      price: 15500,
      adress: "Lviv, Ukraine",
      description:
        "Donec commodo tincidunt velit. Sed convallis mollis ex sed ultrices. Donec odio lorem, faucibus ut rutrum a, pellentesque in est. Proin ac libero dolor. Aliquam tristique feugiat tellus. Donec quis lobortis nisl, nec eleifend erat. Aliquam erat volutpat. Praesent sed tristique turpis. Aenean facilisis, erat eu euismod cursus, enim tortor pretium justo, sit amet efficitur risus diam eu orci. Cras ultricies sit amet metus nec finibus. Suspendisse dapibus accumsan arcu a posuere. Sed sed elit at lacus faucibus dictum nec eu ipsum. Vestibulum at nibh ut justo interdum cursus sit amet vel enim.",
      seller: {
        name: "Kyrylo",
        phoneNumber: "+380985544370",
        image:
          "https://media.licdn.com/dms/image/D5635AQFp-WoqpFYJow/profile-framedphoto-shrink_800_800/0/1678824940381?e=1685473200&v=beta&t=v5Ex5zvAqKRbWfLnSy9uruRDHDFgpx_5EmhwocD3c5E",
      },
    },
    {
      id: "lap4",
      name: "Acer Swift 3",
      technicalInfo: "15.6', Intel Core i3",
      price: 19000,
      adress: "Dnipro, Ukraine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      seller: {
        name: "Dmytro",
        phoneNumber: "+380983447577",
      },
    },
  ],
  Smartphones: [
    {
      id: "smartphone1",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2019/09/iphone11-review.jpg?resize=625%2C417&p=1",
      name: "Iphone 11",
      technicalInfo: 'new, 128gb, 6"',
      price: 19000,
      adress: "Kyiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "smartphone2",
      image:
        "https://assets.mspimages.in/gear/Samsung%20Galaxy%20S10%20Plus%20Box.jpeg",
      name: "Samsung S10",
      technicalInfo: "14', Apple M1, 1TB",
      price: 9999,
      adress: "Odesa, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
    {
      id: "smartphone4",
      name: "Iphone XS",
      technicalInfo: "б/в, 256gb, ",
      price: 12000,
      adress: "Dnipro, Ukraine",
      image:
        "https://cdn.mos.cms.futurecdn.net/ectBmWU3njvsQTcfe2t6vj-1200-80.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      seller: {
        name: "Kyrylo",
        phoneNumber: "+380983447577",
      },
    },
  ],
  Watches: [
    {
      id: "watch1",
      image:
        "https://i.pcmag.com/imagery/articles/04P8YS6YExiQmDhfKiaQF83-3..v1662602994.jpg",
      name: "Apple watch 8 ultra 49 mm",
      technicalInfo: "б/в, 49 mm, LTE",
      price: 25500,
      adress: "Kharkiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "watch2",
      image:
        "https://cdn.shopify.com/s/files/1/2028/1681/products/samsung-galaxy-watch-silver-2_9447aaee-a139-4058-b4ac-6c4220915d67_1024x.jpg?v=1646052835",
      name: "Samsung galaxy watch 4G",
      technicalInfo: "б/в, 44 mm, LTE",
      price: 7250,
      adress: "Lviv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
    {
      id: "watch3",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/3/2021/06/xiaomi_mi_watch_review-5ccf006.jpg?quality=90&resize=980,654",
      name: "Xiaomi Redmi watch 5 ultra ",
      technicalInfo: "Новий, 42 mm, GPS",
      price: 15500,
      adress: "Lviv, Ukraine",
      description:
        "Donec commodo tincidunt velit. Sed convallis mollis ex sed ultrices. Donec odio lorem, faucibus ut rutrum a, pellentesque in est. Proin ac libero dolor. Aliquam tristique feugiat tellus. Donec quis lobortis nisl, nec eleifend erat. Aliquam erat volutpat. Praesent sed tristique turpis. Aenean facilisis, erat eu euismod cursus, enim tortor pretium justo, sit amet efficitur risus diam eu orci. Cras ultricies sit amet metus nec finibus. Suspendisse dapibus accumsan arcu a posuere. Sed sed elit at lacus faucibus dictum nec eu ipsum. Vestibulum at nibh ut justo interdum cursus sit amet vel enim.",
      seller: {
        name: "Kyrylo",
        phoneNumber: "+380985544370",
        image:
          "https://media.licdn.com/dms/image/D5635AQFp-WoqpFYJow/profile-framedphoto-shrink_800_800/0/1678824940381?e=1685473200&v=beta&t=v5Ex5zvAqKRbWfLnSy9uruRDHDFgpx_5EmhwocD3c5E",
      },
    },
  ],
  Monitors: [
    {
      id: "mon1",
      image: "https://i.ebayimg.com/images/g/t8wAAOSwyDliAUNc/s-l1600.jpg",
      name: "Samsung C24F39OF curved",
      technicalInfo: "бв, 24', VA",
      price: 4900,
      adress: "Odesa, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "mon2",
      image:
        "https://ireland.apollo.olxcdn.com/v1/files/824fjsx7mzln3-UA/image;s=1500x2000",
      name: "HP Z23n G2",
      technicalInfo: "б/в, 23', IPS",
      price: 3999,
      adress: "Kyiv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
  ],
  Keyboards: [
    {
      id: "key1",
      image:
        "https://images.prom.ua/3826074877_w640_h640_klaviatura-kompyuternaya-bu.jpg",
      name: "Real-EL Standard 500 USB",
      technicalInfo: "б/в, USB",
      price: 105,
      adress: "Kharkiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "key2",
      image: "https://hotline.ua/img/tx/787/787756265.jpg",
      name: "Logitech k380",
      technicalInfo: "Новий, wireless ",
      price: 1900,
      adress: "Lviv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
    {
      id: "key3",
      image: "https://i.ebayimg.com/images/g/b8YAAOSwR2NivXAm/s-l1600.jpg",
      name: "Apple magic keyboard A2449 ",
      technicalInfo: "б/в, wireless",
      price: 3400,
      adress: "Lviv, Ukraine",
      description:
        "Donec commodo tincidunt velit. Sed convallis mollis ex sed ultrices. Donec odio lorem, faucibus ut rutrum a, pellentesque in est. Proin ac libero dolor. Aliquam tristique feugiat tellus. Donec quis lobortis nisl, nec eleifend erat. Aliquam erat volutpat. Praesent sed tristique turpis. Aenean facilisis, erat eu euismod cursus, enim tortor pretium justo, sit amet efficitur risus diam eu orci. Cras ultricies sit amet metus nec finibus. Suspendisse dapibus accumsan arcu a posuere. Sed sed elit at lacus faucibus dictum nec eu ipsum. Vestibulum at nibh ut justo interdum cursus sit amet vel enim.",
      seller: {
        name: "Kyrylo",
        phoneNumber: "+380985544370",
        image:
          "https://media.licdn.com/dms/image/D5635AQFp-WoqpFYJow/profile-framedphoto-shrink_800_800/0/1678824940381?e=1685473200&v=beta&t=v5Ex5zvAqKRbWfLnSy9uruRDHDFgpx_5EmhwocD3c5E",
      },
    },
  ],
  Printers: [
    {
      id: "pr1",
      image:
        "https://ireland.apollo.olxcdn.com/v1/files/yxlfl6uk7agf3-UA/image;s=1632x1224",
      name: "Canon lbp800",
      technicalInfo: "бв, black-white",
      price: 800,
      adress: "Odesa, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "pr2",
      image: "https://img.ktc.ua/img/base/1/2/451942.jpg",
      name: "Canon PIXMA G1430",
      technicalInfo: "Новий, color",
      price: 6998,
      adress: "Kyiv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
  ],
  Cameras: [
    {
      id: "cam1",
      image: "https://hotline.ua/img/tx/269/2696374915.jpg",
      name: "Canon EOS 4000D",
      technicalInfo: "Новий, 18 Mp",
      price: 17899,
      adress: "Kharkiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "cam2",
      image:
        "https://ireland.apollo.olxcdn.com/v1/files/hbscimywkufg1-UA/image;s=1600x1200",
      name: "Gopro hero 3",
      technicalInfo: "б/в, 12 Mp ",
      price: 450,
      adress: "Lviv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
  ],
  Headphones: [
    {
      id: "hp1",
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/09/RXV06632.jpg",
      name: "Sony WH1000XM3 ",
      technicalInfo: "б/в, Накладні, Безпровідні",
      price: 4899,
      adress: "Kharkiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "hp2",
      image: "https://hotline.ua/img/tx/211/2113157695.jpg",
      name: "Airpods pro",
      technicalInfo: "Новий, вкладиші ",
      price: 5000,
      adress: "Lviv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
  ],
  Powerbanks: [
    {
      id: "pb1",
      image:
        "https://mobile-review.com/accessories/review/image/xiaomi/powerbank-3-pro/pic/3.jpg",
      name: "Xiaomi Power Bank 3 pro",
      technicalInfo: "б/в, 30000 mAh",
      price: 950,
      adress: "Kharkiv, Ukraine",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      seller: {
        name: "Yaroslav",
        phoneNumber: "+380985545347",
        image:
          "https://media.licdn.com/dms/image/D4D03AQGnO6VdA2afkQ/profile-displayphoto-shrink_800_800/0/1678871340642?e=1690416000&v=beta&t=aKaOAEreaMtrViOMZK1Dov2SsvYRx7aKXvF-C3Wv49E",
      },
    },
    {
      id: "pb2",
      image: "https://storeinua.com/image/cache/catalog/015/007/6-800x800.jpg",
      name: "Apple MagSafe Power Bank",
      technicalInfo: "Новий, 5000 mAh",
      price: 4299,
      adress: "Kyiv, Ukraine",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      seller: {
        name: "Daniil",
        phoneNumber: "+380985542242",
        image:
          "https://media.licdn.com/dms/image/D4E35AQGoQFlfEi0BXA/profile-framedphoto-shrink_800_800/0/1677174550068?e=1685473200&v=beta&t=zpRVrfmaT-78EpbnGM7vGxKQaXoO0DBSIGodcovkQLg",
      },
    },
    {
      id: "pb3",
      image:
        "https://the-gadgeteer.com/wp-content/uploads/2021/08/EcoFlow-20-800x600.jpg",
      name: "Ecoflow delta pro ",
      technicalInfo: "Б/в, 1125000 Вт/год",
      price: 74500,
      adress: "Lviv, Ukraine",
      description:
        "Donec commodo tincidunt velit. Sed convallis mollis ex sed ultrices. Donec odio lorem, faucibus ut rutrum a, pellentesque in est. Proin ac libero dolor. Aliquam tristique feugiat tellus. Donec quis lobortis nisl, nec eleifend erat. Aliquam erat volutpat. Praesent sed tristique turpis. Aenean facilisis, erat eu euismod cursus, enim tortor pretium justo, sit amet efficitur risus diam eu orci. Cras ultricies sit amet metus nec finibus. Suspendisse dapibus accumsan arcu a posuere. Sed sed elit at lacus faucibus dictum nec eu ipsum. Vestibulum at nibh ut justo interdum cursus sit amet vel enim.",
      seller: {
        name: "Kyrylo",
        phoneNumber: "+380985544370",
        image:
          "https://media.licdn.com/dms/image/D5635AQFp-WoqpFYJow/profile-framedphoto-shrink_800_800/0/1678824940381?e=1685473200&v=beta&t=v5Ex5zvAqKRbWfLnSy9uruRDHDFgpx_5EmhwocD3c5E",
      },
    },
  ],
};
