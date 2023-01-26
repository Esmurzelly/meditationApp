export const categories = [
  {
    id: 3,
    name: 'Короткая',
    photo_url:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
  },
  {
    id: 1,
    name: 'Длительная',
    photo_url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
  },
  {
    id: 2,
    name: 'Стандартная',
    photo_url:
      'https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623.jpeg'
  },
  {
    id: 4,
    name: 'Гибрид',
    photo_url:
    'https://content.presspage.com/uploads/2580/1920_nature_and_happiness-503786.jpg?10000'
  }
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Направленная медитация',
    photo_url: 'https://thumbs.dreamstime.com/b/%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B8%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0-%D0%B2-215281856.jpg',
    photosArray: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
      "https://png.pngtree.com/thumb_back/fw800/background/20191120/pngtree-sunset-nature-landscape-with-big-tree-image_322506.jpg",
      'https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg',
      'https://wwf.ca/wp-content/uploads/2022/03/IMG_5547-scaled.jpg'
    ],
    time: '10',
    audio: [
      {
        name: "first",
        song: '../../../assets/audio/meditExapmple.mp3'
      },
      {
        name: "second",
        song: '../../../assets/audio/diet_fifth.mp3'
      },
      {
        name: "third",
        song: '../../../assets/audio/diet_first.mp3'
      }
    ],
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      'С помощью данной техники, также называемой управляемыми психическими образами, направленная медитация обеспечивает спокойствие и расслабление, пробуждая максимальное количество различных чувств и создавая образы или ситуации в нашем сознании. Если вы только начинаете занятия медитацией, направленная медитация будет для вас наиболее подходящим видом медитации.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Медитация Випассана',
    photo_url:
      'https://thumbs.dreamstime.com/b/%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%BE%D1%81%D0%BB%D0%B0%D0%B1%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-215184487.jpg',
    photosArray: [
      'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
      "https://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill",
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*',
      'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg'
    ],
    time: '5-20',
    audio: [
      '../../../assets/audio/diet_second.mp3',
      '../../../assets/audio/diet_sixth.mp3',
      '../../../assets/audio/diet_third.mp3',      
    ],
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'Випассана — это вид медитации озарения. Медитации озарения направлены на трансформацию разума за счет развития таких качеств, как сострадание и мудрость. Как правило, в процессе медитации основное внимание уделяется дыханию и осознанию изменений, которые происходят как в физических ощущениях, так и в эмоциональном состоянии.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Медитация Шаматха',
    photo_url: 'https://thumbs.dreamstime.com/b/audio-guided-meditation-portrait-young-african-woman-wearing-headphones-eyes-closed-listening-to-relaxing-music-sounds-216363894.jpg',
    photosArray: [
      'https://cdn.unenvironment.org/2022-11/Mangroves%2C_Orpheus_Island%2C_Australia.jpeg',
      "https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg",
      'https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg',
      'https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623.jpeg'
    ],
    time: '10',
    ingredients: [
      [0, '2 quarts'],
      [16, '1'],
      [12, '1 cup'],
      [18, '1 cup'],
      [19, '1 teaspoon'],
      [1, '2 teaspoons'],
      [4, '1/4 teaspoons'],
      [7, '1/8 teaspoons'],
      [20, '1/2 teaspoons'],
      [21, '4']
    ],
    description:
      'Медитация Шаматха призвана сбалансировать и успокоить разум. Следовательно, данная практика медитации также полезна для снятия стресса. Она освобождает разум от отвлекающего действия тревоги и паники с помощью техники концентрации внимания на конкретном объекте — зачастую внимание концентрируется на дыхании. Внимание можно сосредоточить на множестве разных вещей.'
  },
  {
    recipeId: 3,
    categoryId: 2,
    title: 'Трансцендентальная медитация',
    photo_url:
      'https://thumbs.dreamstime.com/b/audio-guided-meditation-portrait-young-caucasian-woman-wearing-headphones-eyes-closed-listening-to-relaxing-music-215281879.jpg',
    photosArray: [
      'https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg',
      "https://media.istockphoto.com/id/699620004/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D1%8F%D1%81%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D1%82%D0%BE%D0%BA%D0%B0.jpg?s=640x640&k=20&c=vKquc0W7Pt0FdVW_cpCfgA8HP5zr03dOnzNkFrIMfBk=",
      'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg',
      'https://naturalengland.blog.gov.uk/wp-content/uploads/sites/183/2020/03/Untitled-5.png'
    ],
    time: '20',
    ingredients: [
      [0, '2 tablespoons'],
      [22, '1/2'],
      [23, '2 tablespoons'],
      [7, '2 cloves'],
      [3, '1 teaspoon'],
      [24, '1 tablespoon'],
      [25, '1 lb'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
      [26, '15 oz'],
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description: 'Это простая практика использования слов, звуков или коротких фраз в качестве личной мантры. Применяется данная практика дважды в день в течение 20 минут в сидячем положении с закрытыми глазами. Благодаря данной практике вы сможете достичь внутреннего покоя, глубокого расслабления и отдыха, не прилагая дополнительных усилий по концентрации внимания.'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Медитация на чакры',
    photo_url: 'https://thumbs.dreamstime.com/b/audio-guided-meditation-senior-african-woman-relaxing-headphones-audio-guided-meditation-portrait-senior-african-woman-216454353.jpg',
    photosArray: [
      'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg',
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      'https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1652899582924-FPWXES6GG7EGOQSRDE16/unsplash-image-pQMM63GE7fo.jpg?format=2500w',
    ],
    time: '10',
    ingredients: [
      [1, '2 tablespoons'],
      [3, '1 tablespoon'],
      [4, '1 teaspoon'],
      [5, '1/2 teaspoons'],
      [6, '1/2 teaspoons'],
      [7, '1/2 teaspoons'],
      [8, '1/2 teaspoons'],
      [9, '1/2 teaspoons'],
      [10, '1/2 teaspoons'],
      [11, '1/2 teaspoons'],
      [12, '1/2 cups'],
      [13, '1 tablespoon'],
      [14, '1 tablespoon'],
      [15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
      [16, '1'],
      [17, '2 quarts']
    ],
    description: 'Чакра, что в переводе с санскрита означает “колесо”, представляет собой энергетические и духовные центры силы внутри нашего тела. Считается, что в теле человека насчитывается всего семь чакр, и каждая из них расположена в разных частях тела. Каждой из чакр соответствует свой цвет. Медитация на чакры направлена на то, чтобы они оставались открытыми и текучими.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Медитация в йоге',
    photo_url: 'https://thumbs.dreamstime.com/b/audio-guided-meditation-young-caucasian-man-relaxing-headphones-portrait-wearing-eyes-closed-listening-to-music-215773866.jpg',
    photosArray: [
      'https://content.presspage.com/uploads/2580/1920_nature_and_happiness-503786.jpg?10000',
      "https://www.undp.org/sites/g/files/zskgke326/files/styles/banner_image_desktop/public/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg?h=8f74817f&itok=C1CZm-bQ",
      'https://static.toiimg.com/thumb/msid-92233948,width-1070,height-580,resizemode-75/92233948,pt-32,y_pad-40/92233948.jpg',
    ],
    time: '30',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1']
    ],
    description: 'Кундалини-йога — это стиль йоги, представляющий собой форму медитации, в которой сочетаются медитация и йога. Таким образом, это форма медитации, сочетающая активные физические упражнения с дыхательными упражнениями и мантрами. Следовательно, медитация для йоги полезна как для психического здоровья, позволяя снизить уровень стресса в повседневной жизни и укрепить нервную систему, так и для физического здоровья, способствуя развитию выносливости и гибкости.'
    },
  {
    recipeId: 1,
    categoryId: 1,
    title: 'Дзен-медитация',
    photo_url:
      'https://thumbs.dreamstime.com/b/audio-guided-meditation-senior-caucasian-man-relaxing-headphones-audio-guided-meditation-portrait-senior-caucasian-man-215281856.jpg',
    photosArray: [
      'https://www.salesforce.com/news/wp-content/uploads/sites/3/2022/10/nature-policy-priorities.jpg',
      "https://th-thumbnailer.cdn-si-edu.com/8ciAzzKoUyvv-4kt1rLa3mLgwU0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
      'https://media.istockphoto.com/id/1283852667/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%B5%D0%B6%D0%B5%D0%B3%D0%BE-%D0%BC%D1%85%D0%B0-%D0%B2-%D0%BB%D0%B5%D1%81%D1%83.jpg?s=612x612&w=0&k=20&c=PNhC6V4N9UNnVeZ5TaJiNMNdDazGxOwH2nNbHjbvc2c=',
      'https://www.sciencealert.com/images/2022/09/ManWalkingInForest.jpg'
    ],
    time: 30,
    ingredients: [
      [9, '1/2 teaspoons'],
      [0, '4 tablespoons'],
      [1, '1/2 teaspoons'],
      [30, '2 tablespoons'],
      [31, '1 teaspoon'],
      [7, '1 teaspoon'],
      [24, '1/2 teaspoons'],
      [3, '1/2 teaspoons'],
      [21, '1 pound'],
      [22, '1/2 cup'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description: 'Дзен-медитация направлена на пробуждение естественной способности ума постигать истину. В процессе медитации нужно сидеть прямо. Заняв сидячее положение, необходимо предоставить разум самому себе и сосредоточиться на дыхании. Также необходимо закрепить и усилить ощущение присутствия и концентрации.'
  },
  {
    recipeId: 2,
    categoryId: 2,
    title: 'Дыхательные упражнения',
    photo_url:
      'https://thumbs.dreamstime.com/b/audio-guided-meditation-senior-caucasian-woman-relaxing-headphones-portrait-wearing-eyes-closed-listening-to-music-216082490.jpg',
    photosArray: [
      'https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L',
      "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=9382&index=0&w=605&h=434",
      'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80',
      'https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000'
    ],
    time: 15,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz']
    ],
    description: 'В медитации важно правильное дыхание. Большинство взрослых людей дышат верхней частью груди, а не животом. Для медитации и йоги лучше всего подходит диафрагмальное дыхание, которое наполняет кровь большим количеством кислорода и успокаивает разум. Когда вы начнете использовать диафрагмальное дыхание, вы заметите, что дыхательный паттерн, который вы неосознанно используете, изменится. При использовании данной методики, также известной как диафрагмальное дыхание, брюшная полость также движется в процессе дыхания.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Oil',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
