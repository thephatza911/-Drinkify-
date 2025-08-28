// script.js

// 1. อัปเดตข้อมูลเครื่องดื่มให้มีรายละเอียดมากขึ้น
const drinks = [
    {
        id: 1,
        name: 'มอคค่าเย็น',
        ategory: 'กาแฟ',
        isRecommended: false,
        image: 'https://i.pinimg.com/736x/b5/5c/06/b55c06b03724413fb48baac017f4ac0d.jpg',
        description: 'ความลงตัวของกาแฟและช็อกโกแลตที่ให้ความสดชื่น',
        rating: 4.5, // คะแนนความอร่อย (เต็ม 5)
        ingredients: [
            { name: 'เอสเปรสโซ', image: 'https://i.pinimg.com/736x/80/af/5a/80af5ada8b9078d1edac6246a687aaed.jpg' },
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'ซอสช็อกโกแลต', image: 'https://i.pinimg.com/736x/86/ac/70/86ac7052f9acf98e1b77a60fea5b28b6.jpg' }
        ],
        instructions: [
            'นำซอสช็อกโกแลตมาวาดลวดลายข้างแก้ว',
            'ใส่น้ำแข็งลงไปให้เต็มแก้ว',
            'เทนมสดตามลงไปเกือบเต็มแก้ว',
            'ค่อยๆ เทช็อตเอสเปรสโซลงไปด้านบนสุด'
        ]
    },
    {
        id: 2,
        name: 'ชาเขียวมัทฉะลาเต้',
        category: 'ชา',
        isRecommended: false,
        image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1887&auto=format&fit=crop',
        description: 'รสชาติเข้มข้นหอมกรุ่นของมัทฉะแท้ผสมนมสดนุ่มละมุน',
        rating: 4.8,
        ingredients: [
            { name: 'ผงมัทฉะ', image: 'https://i.pinimg.com/736x/1a/a4/ba/1aa4ba70829685f32d9c0321a61859f1.jpg' },
            { name: 'น้ำร้อน', image: 'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg' },
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' }
        ],
        instructions: [
            'ใส่ผงมัทฉะลงในแก้วแล้วเทน้ำร้อนตาม',
            'ใช้แปรงชงชาคนให้ผงมัทฉะละลายเข้ากันดี',
            'เทนมสดและน้ำแข็งลงในแก้วอีกใบ',
            'ค่อยๆ เทส่วนผสมมัทฉะลงไปด้านบน'
        ]
    },
    {
        id: 3,
        name: 'สตรอว์เบอร์รีสมูทตี้',
        category: 'ผลไม้',
        isRecommended: false,
        image: 'https://i.pinimg.com/1200x/75/16/86/751686f10341eda2aa7baf351be10079.jpg',
        description: 'เครื่องดื่มเพื่อสุขภาพที่อัดแน่นไปด้วยวิตามินและความอร่อย',
        rating: 4.2,
        ingredients: [
            { name: 'สตรอว์เบอร์รี', image: 'https://i.pinimg.com/1200x/9b/8d/ac/9b8dacbbc984cc12818a74bc78da36e3.jpg' },
            { name: 'โยเกิร์ต', image: 'https://i.pinimg.com/1200x/37/56/1f/37561f1a60d60c387db3a2aa3d5c18b3.jpg' },
            { name: 'น้ำผึ้ง', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1935&auto=format&fit=crop' }
        ],
        instructions: [
            'นำส่วนผสมทั้งหมดใส่ลงในเครื่องปั่น',
            'ปั่นด้วยความเร็วสูงจนเนื้อเนียนละเอียดเข้ากัน',
            'เทใส่แก้ว พร้อมเสิร์ฟทันที'
        ]
    },
    { 
        id: 4,
        name: 'อเมริกาโน่เย็น',
        category: 'กาแฟ',
        isRecommended: false,
        image: 'https://www.lemon8-app.com/seo/image?item_id=7262215197161456129&index=0&sign=602394189b6a8447aaa6f4531738a5ae',
        description: 'กาแฟดำรสเข้มข้น ดื่มง่าย สดชื่นตลอดวัน',
        rating: 4.4,
        ingredients: [
             { name: 'เอสเปรสโซ', image: 'https://i.pinimg.com/736x/80/af/5a/80af5ada8b9078d1edac6246a687aaed.jpg' },
             { name: 'น้ำเปล่า', image: 'https://www.matichon.co.th/wp-content/uploads/2017/08/1.-92.jpg' }
        ],
        instructions: [
            'เตรียมแก้วใส่น้ำแข็ง',
            'เทน้ำเปล่าลงไปประมาณ 3/4 ของแก้ว',
            'ค่อยๆ เทช็อตเอสเปรสโซตามลงไป'
        ]
    },
    {
        id: 4,
        name: 'น้ำผึ้งมะนาวโซดา',
        category: 'ชา',
        isRecommended: false,
        image: 'https://i.pinimg.com/736x/90/59/a2/9059a24f605847931db091c05e4448c6.jpg',
        description: 'ความหวานเปรี้ยวกลมกล่อม ตัดกับความซ่าของโซดา',
        rating: 4.3,
        ingredients: [
            { name: 'น้ำผึ้ง', image: 'https://i.pinimg.com/736x/af/b8/ba/afb8baea100fb2ddbc1472c2512dfc9d.jpg' },
            { name: 'น้ำมะนาว', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'โซดา', image: 'https://i.pinimg.com/1200x/04/12/60/0412601814a9bb694a9f4d470216d741.jpg' },
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' },
            { name: 'มะนาวฝานเป็นชิ้นบาง', image: 'https://i.pinimg.com/736x/f4/02/18/f40218570742c342d0cf35372bce4fd1.jpg' },
            { name: 'ใบสะระแหน่', image: 'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg' }
        ],
        instructions: [
            'ผสมน้ำผึ้งกับน้ำมะนาวให้ละลายเข้ากัน',
            'เทใส่แก้วที่มีน้ำแข็ง ตามด้วยโซดาแช่เย็นจนเต็มแก้ว',
            'แต่งด้วยมะนาวฝานและใบสะระแหน่'
        ]
    },
    {
        id:5,
        name: 'วอดก้ามะนาว',
        category: 'วอดก้า',
        isRecommended: false,
        image: 'https://img.freepik.com/free-photo/blend-cocktails-glasses-with-lime-salty-rims_23-2149384417.jpg?semt=ais_hybrid&w=740&q=80',
        description: 'ว้อดก้าจากแดนไกล ผสมผสานกับความนัวจากแดนไทย',
        rating: 4.8,
        ingredients: [
            { name: 'เหล้าวอดก้า', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'มะนาว', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'เกลือป่น', image: 'https://i.pinimg.com/736x/bd/86/40/bd8640f4ba82b996445e9e781588b0fd.jpg' }
        ],
        instructions: [
            'เทว้อดก้าใส่แก้วป้อกครึ่งแก้ว',
            'บีบมะนาวสดใส่ หยิบเกลือใส่นิดหน่อย',
            'เทใส่แก้ว พร้อมเสิร์ฟทันที',
            'เอามือข้างนึงที่ถนัดปิดปากแก้วให้สนิท แล้วยกตอกกับพื้น (แนะนำให้รองพื้นด้วยผ้านหนากันแก้วแตกเวลาตอกแก้วลงพื้น)',
            'เอามือออกรีบยกดื่มรวดทีเดียวหมดแก้ว'
        ]
    },
    {
        id:6,
        name: 'น้ำเผือกหอม',
        category: 'ผัก',
        isRecommended: false,
        image: 'https://t3.ftcdn.net/jpg/07/02/30/84/360_F_702308445_pQ7HZ8Yicc5qhVTkFKLWYsmMENSjbMzo.jpg',
        description: 'น้ำเผือกหอมหอม หวานมันอร่อยจนต้องซ้ำ',
        rating: 4.3,
        ingredients: [
            { name: 'เผือกหอมต้มสุก', image: 'https://i.pinimg.com/1200x/2f/8c/21/2f8c21ae5cbbab67a644e9934f7e5764.jpg' },
            { name: 'น้ำเปล่า', image: 'https://www.matichon.co.th/wp-content/uploads/2017/08/1.-92.jpg' },
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'น้ำตาลทราย', image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'ปั่นเผือกต้มกับนมสด น้ำเปล่าและน้ำตาลจนเนียนละเอียด',
            'กรองด้วยผ้าขาวบางหรือกระชอนละเอียด(จะทำให้น้ำเนื้อเนียนมากขึ้น)',
            'เทใส่แก้ว เติมน้ำแข็ง พร้อมดื่มได้เลย'
        ]
    },
    {
        id:7,
        name: 'นมสดคาราเมล',
        category: 'นม',
        isRecommended: true,
        image: 'https://www.dessertfortwo.com/wp-content/uploads/2021/05/caramel-latte-4.jpg',
        description: 'นมสดหอมละมุน ผสานคาราเมลหวานหอม ละลายในปากทุกคำจิบ',
        rating: 4.6,
        ingredients: [
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'ซอสคาราเมล', image: 'https://www.bluemochatea.com/wp-content/uploads/2018/09/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%8B%E0%B8%AD%E0%B8%AA%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'เทซอสคาราเมลลงก้นแก้ว (แต่งขอบแก้วได้ตามชอบ)',
            'เติมน้ำแข็งลงไป รินนมสดตามลงในแก้ว คนเบาๆให้เข้ากัน',
            'ราดซอสคาราเมลด้านบนนิดหน่อย'
        ]
    },
    {
        id:8,
        name: 'โซจูองุ่นโซดา',
        category: 'โซจู',
        isRecommended: false,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN3p68AEdxKPgDBKgksGiw1bLeCAM-qcFw7gS27FfFekKFZHqWSFlKeGWVMdi6_nkaaex92cnUcSIu1qDXFaDKLUVvtWaez7vlp3rwIMH69hsIbdX_QxuJ1zDER15vVdB9xi8saGIAvXdToERc7GCB9=w567-h919-s-no-gm?authuser=0',
        description: 'น้ำซ่าสดชื่น ทำให้วันของคุณสดใสขึ้น',
        rating: 5,
        ingredients: [
            { name: 'น้ำองุ่นขาว', image: 'https://i.pinimg.com/736x/8c/f2/b8/8cf2b8508ed485bb0107060840430ded.jpg' },
            { name: 'โซจู', image: 'https://jangjihoo.com/wp-content/uploads/2023/07/5d3afdc85fd0ae5e6c2d5281_800x0xcover_bzJJnFA_.jpg' },
            { name: 'โซดา', image: 'https://i.pinimg.com/1200x/04/12/60/0412601814a9bb694a9f4d470216d741.jpg' },
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'ผสมโซจูกับน้ำองุ่นขาว',
            'ตามด้วยโซดาและน้ำแข็ง พร้อมเสิร์ฟ'
        ]
    },
    {
        id:9,
        name: 'ชามะนาว ',
        category: 'ชา',
        isRecommended: false,
        image: 'https://i.pinimg.com/736x/14/eb/6b/14eb6b6f0557ce5588abe87ae54a90b9.jpg',
        description: 'ชามะนาวหอมแตะจมูก เหมาะสำหรับดื่มคู่กับทั้งของคาวทั้งของหวาน',
        rating: 4.2,
        ingredients: [
            { name: 'ผงชาไทยหรือผงชาแดง', image: 'https://s359.kapook.com/pagebuilder/65ed7db4-6670-41ea-bc25-991008d5bce8.jpg' },
            { name: 'น้ำร้อนจัด', image: 'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
            { name: 'เกลือป่น', image:'https://i.pinimg.com/736x/bd/86/40/bd8640f4ba82b996445e9e781588b0fd.jpg'},
            { name: 'น้ำมะนาว', image:'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg'},
            { name: 'สะระแหน่', image:'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'}
        ],
        instructions: [
            'ตักผงชาลงในถุงชงชา เติมน้ำร้อนลงไป ',
            'กรองชาสลับไป-มาจนชาสีเข้มตามชอบ พักไว้ 2-3 นาที',
            'ใส่น้ำตาลทรายลงในภาชนะทนความร้อน เติมเกลือ ใส่น้ำชาลงไป คนผสมจนน้ำตาลละลาย',
            'เติมน้ำมะนาว คนผสมจนเข้ากัน เทใส่แก้วน้ำแข็ง พร้อมเสิร์ฟ'
        ]
    },
    {
        id:10,
        name: 'ค็อกเทล Mojito',
        category: 'ค็อกเทล',
        isRecommended: true,
        image: 'https://lwfiles.mycourse.app/ikonclass-public/ea686876816a98d325ef38aae2b577df.jpeg',
        description: 'ดื่มด่ำกับค็อกเทลรสชาติดี',
        rating: 5,
        ingredients: [
            { name: 'มะนาวครึ่งลูก', image: 'https://s.isanook.com/he/0/ud/0/2381/istock-91829587.jpg?ip/crop/w670h402/q80/jpg'},
            { name: 'สะระแหน่', image: 'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'},
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg'},
            { name: 'เหล้ารัม', image:'https://www.wine-searcher.com/images/labels/24/17/10432417.jpg'},
            { name: 'โซดาเย็นจัด/สไปรท์', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rDXyhY0VdaiMKhsswxhf9qN13DkPiUIycZ5lNZqiC9NF_fkkZMziX6Q5eirh1BxqNOU&usqp=CAU'},
            { name: 'สตรอว์เบอร์รี หรือ ราสเบอร์รี (แล้วแต่ความชอบ ใส่หรือไม่ใส่ก็ได้)', image:'https://res.cloudinary.com/dk0z4ums3/image/upload/v1657012287/attached_image_th/strawberryblueberryraspberryvarietyonwoodenandwhitebackground.jpg'}
        ],
        instructions: [
            'ใส่มะนาว ใบสะระแหน่ น้ำตาล และเบอร์รี่ (ถ้ามี) ลงในแก้ว บดเล็กน้อยให้พอเข้ากัน',
            'ติมเหล้ารัม',
            'ท็อปด้วยโซดา แล้วคนให้เข้ากัน'
        ]
    },
    {
        id:12, 
        name: 'บลูเบอร์รี่โยเกิร์ต',
        category: 'ผลไม้',
        isRecommended: false, 
        image: 'https://i.pinimg.com/1200x/64/d1/70/64d170f7c9fe80f71ac1fb832f4b5b6f.jpg',
        description: 'บลูเบอร์รี่หวานเปรี้ยว ครองใจคนทั่วโลก', 
        rating: 4.9, 
        ingredients: [ 
            { name: 'โยเกิร์ต', image: 'https://i.pinimg.com/1200x/37/56/1f/37561f1a60d60c387db3a2aa3d5c18b3.jpg' }, 
            { name: 'บลูเบอร์รี่', image: 'https://i.pinimg.com/736x/2c/ea/98/2cea98039ffe491b7e458655da7a4749.jpg' }, 
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' }, 
            { name: 'ใบสะระแหน่', image:'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'}
        ],
        instructions: [ 
            'ใส่โยเกิร์ต บลูเบอร์รี่ น้ำแข็งลงโถปั่น ปั่นเข้าด้วยกัน', 
            'เทใส่แก้ว ตกแต่งด้วยบลูเบอร์รี่และใบสาระแหน่'
        ]
    },
    {
        id:13,
        name: 'ค็อกเทล Sex on the Beach',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://i.namu.wiki/i/MKo-9L4_uLKjiw0bDVbkRUDq_tMQ4Gb3-UdI-AjijAk33tdvq2FEIy8gmsdXnTx4xYAyVzJouy9z-oFVMupjrg.webp',
        description: 'ดื่มด่ำไปกับค็อกเทลสูตรพิเศษที่คัดสรรอย่างพิถีพิถัน',
        rating: 5,
        ingredients: [
            { name: 'น้ำแครนเบอร์รี', image: 'https://res.cloudinary.com/freshketimage001/image/upload/v1596008096/iwhheiptqkrwbgsxx7op.jpg' },
            { name: 'น้ำส้ม', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpASMJ2wLkSjwFlqRuiP_EP1PmiJZbFoy6A&s'},
            { name: 'วอดก้า', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'เหล้าพีช ชแนปส์', image: 'https://mcgrocer.com/cdn/shop/files/angels-peach-schnapps-70cl-41369426723054.jpg?v=1735973951' },
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' },
            { name: 'ส้มหั่นซีก', image:'https://img.sistacafe.com/resizer?url=sistacafe-assets:____%2Fc%2F49378%2Fthumbnail.jpeg?v=20240305231809&w=275'}
        ],
        instructions: [
            'เทน้ำแข็งใส่แก้ว Highball glass',
            'เทวอดก้า เหล้าพีช และน้ำส้มลงในแก้ว',
            'เทน้ำแครนเบอร์รีตาม',
            'ตกแต่งด้วยส้มหั่นซีก'
        ]
    },
    {
        id:14,
        name: 'ค็อกเทล Screwdriver',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://i.pinimg.com/474x/c6/f3/db/c6f3dbe476f3fbee23b1914c705e181c.jpg',
        description: 'รสชาติความเปรี่ยวที่ผสมผสานกับว้อดก้าที่แสนสดชื่น',
        rating: 4.8,
        ingredients: [
            { name: 'เหล้าวอดก้า', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'น้ำส้ม', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpASMJ2wLkSjwFlqRuiP_EP1PmiJZbFoy6A&s' }
        ],
        instructions: [
            'เตรียมแก้ว เติมน้ำแข็งก้อน เทเหล้าวอดก้าลงบนน้ำแข็ง',
            'จากนั้น เทน้ำส้มตามลงไป พร้อมดื่ม'
        ]
    },
    {
        id:15,
        name: 'ค็อกเทล Very Sexy Martini ',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://i0.wp.com/www.imbored-letsgo.com/wp-content/uploads/2014/12/Berry-Merry-Christmas-Martini.jpg?ssl=1',
        description: 'ดื่มด่ำไปกับความอร่อยของแชมเปญสุดหรู พร้อมกับความเปรี้ยวของราสเบอร์รี่',
        rating: 4.9,
        ingredients: [
            { name: 'ราสเบอร์รี่', image: 'https://i.pinimg.com/736x/31/47/8e/31478e0bb1219f53afdf88d74057ee01.jpg' },
            { name: 'ใบมิ้นต์', image: 'https://img.pikbest.com/ai/illus_our/20230423/7c087a5110a486e75d809639645ea7ce.jpg!w700wp' },
            { name: 'น้ำเชื่อม', image: 'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp' },
            { name: 'วอดก้ารสส้ม', image:'https://f.ptcdn.info/573/023/000/1411046380-cointreau1-o.jpg'},
            { name: 'น้ำมะนาว', image:'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg'},
            { name: 'แชมเปญ Moët & Chandon Rosé Imperial', image:'https://liberationqualitydrinks.je/cdn/shop/files/WEBSITE_4_e60413d5-ecb4-4839-90a1-bf98307275d1_900x.png?v=1715587057'},
            { name: 'สะระแหน่', image:'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'}
        ],
        instructions: [
            'ปั่นราสเบอร์รี่ มินต์ และน้ำเชื่อมเข้าด้วยกัน',
            'เติมวอดก้าและน้ำมะนาว เติมน้ำแข็ง และเขย่าจนเย็นดี',
            'กรองลงในแก้วค็อกเทล',
            'ปิดท้ายด้วยแชมเปญ และตกแต่งด้วยใบมิ้นต์และราสเบอร์รี่'
        ]
    },
    {
        id:16,
        name: 'ค็อกเทล Pink Lady',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://amandascookin.com/wp-content/uploads/2019/01/pink-lady-cocktail-V2.jpg',
        description: ' สีสันสดใส รสชาติเปรี้ยว หวาน กลมกล่อม ละมุนลิ้นสุด ๆ',
        rating: 5,
        ingredients: [
            { name: 'เหล้าจิน', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3tgfl2I-I1sceKGiF9wDlaT8zIFhrkakuA&s' },
            { name: 'เหล้าบรั่นดี', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_TKqHbdr-6UBIaBLt0qMnMawwhYuPO_0Aw&s' },
            { name: 'น้ำมะนาว', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'น้ำเชื่อมเกรนาดีน', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuaWDIQKfU7TAPQbMWS7SuPAME8XpbenHEw&s'},
            { name: 'ไข่ขาวสด', image:'https://mpics.mgronline.com/pics/Images/558000009961901.JPEG'}
        ],
        instructions: [
            'ผสมเหล้ารัมจิน (Gin) เหล้าบรั่นดี น้ำมะนาว น้ำเชื่อมเกรนาดีน และไข่ขาว Shake แบบไม่ใส่น้ำแข็ง ให้เข้ากัน 20 วินาที',
            'จากนั้น เติมน้ำแข็ง Shake ให้เข้ากันอีก 20 วินาที เทใส่แก้วค็อกเทลมาร์ตินี พร้อมดื่ม'
        ]
    },
    {
        id:17,
        name: 'ค็อกเทล Blue Hawaii',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://www.shakedrinkrepeat.com/wp-content/uploads/2021/05/Frozen-Blue-Hawaiian-3.jpg',
        description: 'รสชาติหวานอมเปรี้ยว เหมาะสำหรับสาว ๆ เป็นที่สุด',
        rating: 4.8,
        ingredients: [
            { name: 'เหล้ารัม ', image: 'https://www.wine-searcher.com/images/labels/24/17/10432417.jpg' },
            { name: 'เหล้า Blue Curacao', image: 'https://image.makewebcdn.com/makeweb/m_1920x0/pdqJ2irR1/TeisseireBarmanMT/Mathieu_Teisseire_Le_blue_Blue_Curacao_syrup.png' },
            { name: 'น้ำมะนาว', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'น้ำสับปะรด', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbgZXLgvYvQWE7nMw17yk1fitHTR04bY_yMpFOVU6q-TYxGJAkmbIZN2Any1nFFTa0gs&usqp=CAU'}
        ],
        instructions: [
            'ผสม เหล้ารัม เหล้า Blue Curacao น้ำมะนาว และน้ำสับปะรด ใส่น้ำแข็ง Shake ให้เข้ากัน 10 วินาที',
            'เทใส่แก้วทรงสูง ตกแต่งด้วยสับปะรด พร้อมดื่ม'
        ]
    },
    {
        id:18,
        name: 'ค็อกเทล Margarita',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://delicerecipes.com/wp-content/uploads/2021/01/Frozen-Margarita-Cocktail.jpg',
        description: 'รสชาติอร่อยสดชื่น ดื่มง่าย ประยุกต์ได้หลากหลาย',
        rating: 5,
        ingredients: [
            { name: 'เหล้าเตกีล่า ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmnsWBaEmMAI75CI3gqlo_k43_WZVgPMYHg&s' },
            { name: 'เหล้าเปลือกส้ม (Triple Sec)', image: 'https://image.makewebcdn.com/makeweb/m_1920x0/6KKhXhmFQ/Liqueurnew/Cointreau.png' },
            { name: 'น้ำมะนาว', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'น้ำเชื่อม', image:'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp'},
            { name: 'เกลือ มะนาวหั่นบาง สำหรับตกแต่ง', image:'https://image-thaihometown.com/content19/13998/4.jpg'}
        ],
        instructions: [
            'ผสม เหล้าเตกีล่า เหล้าเปลือกส้ม และน้ำมะนาว ใส่น้ำแข็ง Shake ให้เข้ากัน 10 วินาที จากนั้นค่อย ๆ รินส่วนที่เป็นน้ำอย่างเดียวลงไปในแก้วค็อกเทล',
            'ตกแต่งแก้วด้วยมะนาวหั่น ก่อนดื่มให้ทาเกลือลงบนปากแก้ว และนำชิ้นมะนาวทาวนลงบนเกลืออีกครั้ง พร้อมดื่ม'
        ]
    },
    {
        id:19,
        name: 'ค็อกเทลB52',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://media.istockphoto.com/id/1221673893/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%97%E0%B8%A5-b-52-%E0%B8%9A%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=0w279hWi3IoPKHI2lYDsAsp-mBc9uU17OhItjXXa9yU=',
        description: 'ค็อกเทลคอแข็ง ไม่ได้แข็งแค่คอ ดอก็แข็ง',
        rating: 4.9,
        ingredients: [
            { name: 'เหล้าเปลือกส้ม', image: 'https://image.makewebcdn.com/makeweb/m_1920x0/6KKhXhmFQ/Liqueurnew/Cointreau.png' },
            { name: 'เหล้าหวาน Baileys Cream', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDubx93-Zb0CjXv8O1sljP5MorWwoRvH6nJA&s' },
            { name: 'เหล้าหวาน Kahlua', image: 'https://bottlebuzz.com/cdn/shop/products/kahlua-coffee-liqueur-vanilla-574318.jpg?v=1700410284' }
        ],
        instructions: [
            'ผสมผสม เหล้าเปลือกส้ม เหล้า Baileys Cream (เบย์ลี่ย์ ครีม) และเหล้า Kahlua (คาลัวร์) ลงในแก้ว Shot ตามลำดับ แล้วจุดไฟ ใช้หลอดดูด พร้อมดื่มทันที'
        ]
    },
    {
        id:20,
        name: 'ค็อกเทล Long Island',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/07/Long_island_iced_tea-1-4s.jpg',
        description: 'สำหรับชาวคอแข็งเท่านั้น! เมนู Long Island Iced Tea เป็นค็อกเทลที่มีส่วนผสมของเหล้าอยู่เป็นจำนวนมาก แต่ผู้หญิงก็ดื่มได้ รสชาติเข้ม',
        rating: 5,
        ingredients: [
            { name: 'เหล้าจิน ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3tgfl2I-I1sceKGiF9wDlaT8zIFhrkakuA&s' },
            { name: 'เหล้ารัมขาว', image: 'https://us-fbcloud.net/wb/data/1466/1466689-img.w3b05k.34djw.opsb5eqz.webp' },
            { name: 'เหล้าเตกีล่าสีเงิน ', image: 'https://s.alicdn.com/@sc04/kf/H5f554b653c2a4efa9248d8b203d4d94dH/OEM-750ml-High-Quality-Blue-Colored-Glass-Bottles-Tequila-with-Custom-Label.jpg_300x300.jpg' },
            { name: 'เหล้าวอดก้า', image:'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg'},
            { name: 'เหล้าเปลือกส้ม (Triple Se,c)', image:'https://image.makewebcdn.com/makeweb/m_1920x0/6KKhXhmFQ/Liqueurnew/Cointreau.png'},
            { name: 'น้ำอัดลม รสโคล่า', image:'https://inwfile.com/s-dz/78wru7.jpg'},
            { name: 'น้ำเลม่อนสด', image:'https://file.sogoodweb.com/upload/156/7K8dcZe8Z5.jpg'},
            { name: 'ไซรัปหวา', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKS8DblNf2dq-DLgGSrhYfALgcls86DoCjgBtDF3qYFwDzGK1UtTqmNjr909o8rVKY8k&usqp=CAU'}
        ],
        instructions: [
            'ส่วนผสม Sour mix = น้ำเลม่อนสด 0.75 ออนซ์ + ไซรัปหวาน 1/2 ออนซ์',
            'ทำ Sour mix ผสมน้ำเลม่อนสด และไซรัปหวาน ให้เข้ากัน',
            'ผสมผสม เหล้าจิน เหล้ารัม เหล้าเตกีล่า เหล้าวอดก้า เหล้าเปลือกส้ม และ Sour mix ใส่น้ำแข็ง Shake ให้เข้ากัน',
            'รินเครื่องดื่มใส่แก้วค็อกเทล ท็อปด้วยน้ำอัดลมรสโคล่า พร้อมดื่ม'
        ]
    },
    {
        id:21,
        name: 'กาแฟดัลโกน่า',
        category: 'กาแฟ',
        isRecommended: false,
        image: 'https://st-th-1.byteark.com/assets.punpro.com/contents/i8848/1588045137549-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%202563-04-28%20%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%2010.38.25.png',
        description: 'รสรสชาติหวานละมุนลิ้นเต็มไปด้วยกลิ่นหอมของกาแฟ',
        rating: 4.7,
        ingredients: [
            { name: 'กาแฟสำเร็จรูป', image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5FZYji87zLA8OKyokLNPoYKPRoP640uyBswuMDwokWOablxsyoPKc4.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'น้ำเปล่า', image:'https://www.matichon.co.th/wp-content/uploads/2017/08/1.-92.jpg'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'ใส่น้ำเปล่า น้ำตาลทราย และกาแฟสำเร็จรูป ลงในแก้ว',
            'ตีฟองนมให้เนียนนุ่มแล้วพักไว้',
            'ใส่น้ำแข็งลงแก้ว เทนมสด แล้วค่อยๆ เทกาแฟให้เต็มแก้ว พร้อมจัดเสิร์ฟทันที'
        ]
    },
    {
        id:22,
        name: 'นมสดสตอเบอร์รี',
        category: 'นม',
        isRecommended: false,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgHdhAmndOK90qzg88xRaVsrCd1q-i5AiVFjyv4-TlkFl4tWaova8lXS5AVZkA3QYPfo&usqp=CAU',
        description: 'รสชาติหอมมันและเปรี้ยวหวานของสตอเบอร์รี่',
        rating: 4.5,
        ingredients: [
            { name: 'สตอเบอร์รี', image: 'https://kaset.today/wp-content/uploads/2021/03/2-98.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
            { name: 'นมสด', image:'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg'}
        ],
        instructions: [
            'เอาสตอเบอร์รีกับน้ำตาลทรายใส่ลงในหม้อ จากนั้นตั้งไฟและใช้ทัพพีบี้ให้สตรอเบอร์รีแหลก ตั้งไฟจนเดือด แล้วยกขึ้น พักไว้ให้เย็น เราจะได้ ซอลสตอเบอร์รี',
            'เอาสตอเบอร์รี มาหั่นเป็นลูกเต๋ามา ใส่แก้วพร้อมกับซอลสตอเบอร์รี่',
            'ใส่นมสดลงในขวดที่เตรียมไว้ เท่านี้ก็พร้อมเสิร์ฟ แนะนำให้แช่เย็นและคนก่อนดื่มด้วย'
        ]
    },
    {
        id:23,
        name: 'ช็อกมิ้นต์',
        category: 'นม',
        isRecommended: false,
        image: 'https://obs-ect.line-scdn.net/r/ect/ect/image_167895196408892357522dc4370t114eed0c',
        description: 'เมนูดับร้อนที่รวมความเข้ม หวานและเย็นฉ่ำไว้ในแก้ว',
        rating: 4.7,
        ingredients: [
            { name: 'นมข้นหวาน', image: 'https://aromathailand.com/wp-content/uploads/2024/02/shutterstock_1341048866.jpeg' },
            { name: 'นมตีฟองและผสมเครื่องดื่ม', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'นมข้นจืด', image: 'https://assets.central.co.th/CARNATION-FreshMilk405g-MKP1638053-1?$JPEG$&wid=550' },
            { name: 'ผงโกโก้', image: 'https://inwfile.com/s-ga/ymt6oc.jpg' },
            { name: 'น้ำร้อน', image: 'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg' },
            { name: 'น้ำเชื่อมมินต์', image: 'https://inwfile.com/s-cm/fkemhd.jpg' } 
        ],
        instructions: [
            'ละลายผงโกโก้กับน้ำร้อน เติมนมข้นหวาน คนให้เข้ากันดี',
            'เติมนมตีฟองและผสมในเครื่องดื่มลงไปในโกโก้ที่ละลายกับส่วนผสมไว้',
            'ผสมน้ำเชื่อมมิ้นต์เข้ากับข้นจืด เทน้ำเชื่อมมิ้นต์เตรียมไว้ในแก้ว ตามด้วยน้ำแข็ง',
            'เทส่วนนมมิ้นต์ลงไปครึ่งแก้ว ตามด้วยโกโก้ที่ชงไว้ ราดน้ำเชื่อมมิ้นต์ตบท้ายพร้อมเสิร์ฟ'
        ]
    },
    {
        id:24,
        name: 'นมสดมะพร้าว',
        category: 'นม',
        isRecommended: false,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHJTZbttTkbuTMgWnQGrwzsxLz05rUlgnqA&s',
        description: 'คู่ซัมเมอร์เพิ่มความสดชื่น ด้วยความอร่อยหวานมัน',
        rating: 4.8,
        ingredients: [
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'นมข้นหวาน', image: 'https://aromathailand.com/wp-content/uploads/2024/02/shutterstock_1341048866.jpeg' },
            { name: 'น้ำมะพร้าว', image: 'https://cms.dmpcdn.com/food/2023/09/28/95cb5ad0-5dda-11ee-a58b-4191f4c71f6a_webp_original.webp' },
            { name: 'เนื้อมะพร้าว', image: 'https://cf.shopee.co.th/file/9b92653394f3e1b9a2de032628b01409' },
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'},
            { name: 'น้ำเชื่อม', image:'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp'}
        ],
        instructions: [
            'ใช้โถปั่น ใส่น้ำมะพร้าว เนื้อมะพร้าว นมข้นหวาน น้ำแข็ง นมสด ปั่นให้เข้ากันดี ทยอยใส่นมข้นหวานแล้วคอยชิม อยากได้หวานมากหวานน้อยแค่ไหน',
            'ตักชิมรสดู ถ้าขาดรสไหนก็เติมเพิ่ม ใส่เกลือได้เล็กน้อยถ้าชอบติดเค็มนิดๆ',
            'ปั่นต่อจนเข้ากันดี แล้วเทใส่แก้ว แต่งด้านบนด้วยชิ้นมะพร้าว เสิร์ฟทันที '
        ]
    },
    {
        id:25,
        name: 'น้ำพั้นซ์',
        category: 'ผลไม้',
        isRecommended: true,
        image: 'https://image.makewebeasy.net/makeweb/m_1920x0/jWAjx4eri/DefaultData/OJ_Punch_2__1_.jpg?v=202405291424',
        description: 'น้ำพั้นซ์แสนสดชื่นในอากาศร้อนๆ ทำง่ายแสนอร่อย',
        rating: 4.5,
        ingredients: [
            { name: 'น้ำแดงเฮลบลูบอย', image: 'https://images.mango-prod.siammakro.cloud/product-images/369854537800391-51151477-4fe8-4d1f-8908-38fd4e9722a1.jpeg' },
            { name: 'น้ำสับประรด', image: 'https://media.istockphoto.com/id/1419572486/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%B0%E0%B8%A3%E0%B8%94.jpg?s=612x612&w=0&k=20&c=ou9iM4FJMTrR2DI7PRC-DDDC6eN6H8yFBD2oCqNlgog=' },
            { name: 'น้ำส้มแมนดารินชนิดเข้มข้น', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqf2bVewF0FuoYbjxf6Xrmb5wtTwPP-0z6w&s' },
            { name: 'น้ำมะนาว', image:'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg'},
            { name: 'น้ำเปล่าหรือโซดา', image:'https://www.matichon.co.th/wp-content/uploads/2017/08/1.-92.jpg'},
            { name: 'ส้มและมะนาวแบบแว่น', image:'https://sordaotieam.com/cdn/shop/files/500_8fe07cff-4ede-47b6-a5f5-b04d3aaad20a.jpg?v=1683023194'}
        ],
        instructions: [
            'เทส่วนผสม น้ำสับปะรด น้ำส้มแมนดารินชนิดเข้มข้น น้ำแดงเฮลบลูบอยลงไป คนส่วนผสมให้เข้ากัน',
            'จากนั้นใส่น้ำเปล่า และน้ำมะนาวลงไป คนให้เข้ากัน เคล็ดลับ: หรือถ้าชอบแบบซ่าหน่อยๆเปลี่ยนจากน้ำเปล่าเป็นน้ำโซดาได้',
            'ใส่ส้มที่ฝานไว้ลงไป หรือผลไม้อื่นได้ตามชอบ',
            'นำไปแช่เย็นหรือใช่น้ำแข็งนิดหน่อย ตักใส่แก้วเสริฟความชดชื่น'
        ]
    },
    {
        id:26,
        name: 'ค็อกเทล Woo Woo',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://mixthatdrink.com/wp-content/uploads/2014/02/woo-woo-drink.jpg',
        description: 'ดื่มด่ำกับรสชาติหวานหอมของค็อกเทลยอดนิยม',
        rating: 4.8,
        ingredients: [
            { name: 'เหล้าพีช ชแนปส์ ', image: 'https://mcgrocer.com/cdn/shop/files/angels-peach-schnapps-70cl-41369426723054.jpg?v=1735973951' },
            { name: 'วอดก้า ', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'น้ำแครนเบอร์รี ', image: 'https://res.cloudinary.com/freshketimage001/image/upload/v1596008096/iwhheiptqkrwbgsxx7op.jpg' },
            { name: 'น้ำมะนาวคั้นสดเล็กน้อย', image: 'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg' },
            { name: 'น้ำแข็ง ', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' },
            { name: 'มะนาวหั่นซีก', image:'https://s.isanook.com/he/0/ud/0/2381/istock-91829587.jpg?ip/crop/w670h402/q80/jpg'}
        ],
        instructions: [
            'เทเหล้าพีช วอดก้า น้ำแครนเบอร์รี น้ำมะนาว และน้ำแข็ง ใส่แก้ว Shake',
            'Shake ส่วนผสมทั้งหมดจนด้านนอกของแก้วเย็น',
            'เทเฉพาะน้ำใส่แก้ว เติมน้ำแข็งเพิ่ม ตกแต่งด้วยมะนาวหั่นซีก'
        ]
    },
    {
        id:27,
        name: 'ค็อกเทล Tom Collins',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://www.acouplecooks.com/wp-content/uploads/2019/12/Tom-Collins-001.jpg',
        description: 'สูตรของทอม คอลลินส์นี้ทำได้ง่ายๆ ด้วยจิน น้ำมะนาว น้ำเชื่อมธรรมดา และโซดา ค็อกเทลคลาสสิกนี้ซ่าและสดชื่น',
        rating: 4.6,
        ingredients: [
            { name: 'เหล้าจิน ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3tgfl2I-I1sceKGiF9wDlaT8zIFhrkakuA&s' },
            { name: 'น้ำเลมอนคั้นสด', image: 'https://img.freepik.com/free-photo/glass-cup-fresh-lemon-juice-wooden-board_114579-53580.jpg' },
            { name: 'น้ำเชื่อม', image: 'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp' },
            { name: 'โซดาเย็นจัด', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rDXyhY0VdaiMKhsswxhf9qN13DkPiUIycZ5lNZqiC9NF_fkkZMziX6Q5eirh1BxqNOU&usqp=CAU'},
            { name: 'เลมอนฝาน', image:'https://www.easycookingmenu.com/images/aor_file/article/lemonsoda/Lem1_resize.jpg'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            ' เทเหล้าจิน น้ำเลมอน และน้ำเชื่อมลงในแก้วคอลลินส์ (Collins glass)',
            'คนส่วนผสมเบา ๆ ให้เข้ากันเติมน้ำแข็ง',
            'ท็อปด้วยโซดาจนเต็มแก้ว ตกแต่งด้วยเลมอนฝาน'
        ]
    }, 
   {
        id:28,
        name: 'ค็อกเทล Gin Fizz',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://www.moodymixologist.com/wp-content/uploads/2020/02/Ramos-Gin-Fizz-classic-new-orleans-cocktail-7122041.jpg',
        description: 'เครื่องดื่มที่มีรสชาติเปรี้ยวอมหวานของสโลจินรสเบอร์รี่',
        rating: 4.7,
        ingredients: [
            { name: 'เหล้าจิน', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3tgfl2I-I1sceKGiF9wDlaT8zIFhrkakuA&s' },
            { name: 'น้ำเลมอนคั้นสด', image: 'https://img.freepik.com/free-photo/glass-cup-fresh-lemon-juice-wooden-board_114579-53580.jpg' },
            { name: 'น้ำเชื่อม', image: 'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp' },
            { name: 'โซดา', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rDXyhY0VdaiMKhsswxhf9qN13DkPiUIycZ5lNZqiC9NF_fkkZMziX6Q5eirh1BxqNOU&usqp=CAU'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'},
            { name: 'เลมอนฝาน', image:'https://www.easycookingmenu.com/images/aor_file/article/lemonsoda/Lem1_resize.jpg'}
        ],
        instructions: [
            'เท เหล้าจิน น้ำเลมอน น้ำเชื่อม และน้ำแข็งใส่แก้ว Shake ',
            'Shake ส่วนผสมทั้งหมดจนด้านนอกของแก้วเย็น',
            'เทเฉพาะน้ำใส่แก้ว Tall glass เติมน้ำแข็งเพิ่ม แล้วท็อปด้วยโซดา ตกแต่งด้วยเลมอนฝาน'
        ]
    },  
   {
        id:29,
        name: 'ค็อกเทล Greyhound Drink',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://www.garnishwithlemon.com/wp-content/uploads/2020/01/Greyhound-Cocktail-1-of-5.jpg',
        description: 'ป็นค็อกเทลคลาสสิกสองส่วนผสม ประกอบด้วยจินหรือวอดก้าและน้ำเกรปฟรุต รสชาติเรียบง่าย เปรี้ยวอมหวาน และสดชื่น',
        rating: 4.9,
        ingredients: [
            { name: 'วอดก้า', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'น้ำเกรปฟรุต', image: 'https://img.kapook.com/u/surauch/movie2/shutterstock_65109943_grapefruit-juice_1.jpg' },
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' },
            { name: 'มะนาวหรือเลมอนหั่นซีก สำหรับตกแต่ง', image:''},
        ],
        instructions: [
            'ทวอดก้าและน้ำเกรปฟรุตลงในแก้วคอลลินส์ (Collins glass) ที่ใส่น้ำแข็งเตรียมไว้',
            'คนให้เข้ากัน',
            'ตกแต่งแก้วด้วยมะนาวหรือเลมอนหั่นซีก'
        ]
    }, 
   {
        id:30,
        name: 'ค็อกเทล Brandy Eggnog by ',
        category: 'ค็อกเทล',
        isRecommended: false,
        image: 'https://anothercocktailblog.com/wp-content/uploads/2021/10/Spiked-Eggnog-Cocktail-9-768x1152.jpg',
        description: 'ผสมผสานบรั่นดีและครีมมี่อย่างลงตัว',
        rating: 4.8,
        ingredients: [
            { name: 'บรั่นดี', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_TKqHbdr-6UBIaBLt0qMnMawwhYuPO_0Aw&s' },
            { name: 'นมสด', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'ครีมนมคาร์เนชั่น', image: 'https://assets.tops.co.th//CARNATION-CarnationExtraHalfUnsweetCreamer385g-8850124070999-1?$JPEG$' },
            { name: 'น้ำเชื่อม', image:'https://bluemochateas.com/wp-content/uploads/2021/04/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1.jpeg.webp'},
            { name: 'กลิ่นวานิลา', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1RxjxZQFsmRCUzgS2JN_dl1mNMdtfkikZQ&s'},
            { name: 'ไข่ขาวและไข่แดง', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2w5kmkbkJMIDtPCwYwsQRN8mjyUsqjsoIA&s'},
        ],
        instructions: [
            'ผสมบรั่นดี นม น้ำเชื่อม และไข่แดง ในเชคเกอร์ค็อกเทล เขย่าแห้งโดยไม่ใส่น้ำแข็ง',
            'เติมน้ำแข็งลงในเครื่องปั่น จากนั้น  เขย่าอย่างแรง  ประมาณ 30 วินาทีเพื่อให้แน่ใจว่าไข่แดงเข้ากันดี',
            'กรองใส่ แก้ว สไตล์ โบราณหรือแก้วค็อกเทล',
            'โรยลูกจันทน์เทศขูดหรืออบเชยเล็กน้อยเพื่อตกแต่ง เสิร์ฟและรับประทานได้เลย'
        ]
    },
    {
        id:31,
        name: 'ไมโลโรงเรียน',
        category: 'นม',
        isRecommended: true,
        image: 'https://img.kapook.com/u/2017/wanwanat/75_milo/milo4.jpg',
        description: 'ลิ้มรสความอร่อยสุดหอมหวาน ย้อนวัยกับไมโลโรงเรียน',
        rating: 4.6,
        ingredients: [
            { name: 'ไมโล แอคทิฟ-โก ชนิดผง', image: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/73/88/8850127009873/8850127009873_1-20241018174107-.jpg'},
            { name: 'น้ำร้อน ', image: 'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg' },
            { name: 'เนสท์เล่สวีทไทม์', image: 'https://www.nestle.co.th/sites/g/files/pydnoa486/files/asset-library/publishingimages/brand%20page/nestle_professional/nes-sweet.jpg' },
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'},
            { name: 'นมข้นจืดสำหรับโรยหน้า', image:'https://assets.central.co.th/CARNATION-FreshMilk405g-MKP1638053-1?$JPEG$&wid=550'}
        ],
        instructions: [
            'ตักไมโล แอคทิฟ-โก ชนิดผง ลงแก้วชงกดน้ำร้อนให้ได้ ระดับขีด 1/2 ถ้วยตวง คนให้ละลาย',
            'ตักเนสท์เล่สวีทไทม์ ลงไปคนพอละลายเข้ากัน เติมน้ำร้อนเพิ่มให้ได้ระดับขีดที่ 3/4 ถ้วยตวงคนพอเข้ากัน',
            'ตักน้ำแข็งลงแก้วเสิร์ฟ ใส่ส่วนผสมที่ชงไว้ลงไป โรยด้วยนมข้นจืด พร้อมเสิร์ฟทันทีขณะเย็น'
        ]
    },
    {
        id:32,
        name: 'โกโก้ลาวา',
        category: 'นม',
        isRecommended: false,
        image: 'https://www.bluemochatea.com/wp-content/uploads/2020/09/iced-chocolate-milkshake-drink_1339-98834.jpg',
        description: '',
        rating: 4.6,
        ingredients: [
            { name: 'ทิวลิปผงโกโก้สีเข้ม', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTP7VTtwovrwhPMO8OE20cFVBVvjKk_KiSw&s' },
            { name: 'นมข้นจืด', image: 'https://assets.central.co.th/CARNATION-FreshMilk405g-MKP1638053-1?$JPEG$&wid=550' },
            { name: 'นมข้นหวาน', image: 'https://aromathailand.com/wp-content/uploads/2024/02/shutterstock_1341048866.jpeg' },
            { name: 'น้ำร้อน', image:'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg'}
        ],
        instructions: [
            'เตรียมภาชนะผสม ใส่ผงโกโก้ นมข้นจืด ตามด้วยนมข้นหวาน และน้ำร้อน',
            'เตรียมชามใหญ่ ใส่น้ำร้อน 1/3 ของชาม นำภาชนะ ที่ใส่ส่วนผสมทุกอย่างแล้ว นำมาแช่ในชามใหญ่ เพื่อทำการตุ๋น และคนให้ส่วนผสมทุกอย่างเข้ากัน หรือจนกว่าผงโกโก้ละลาย ไม่จับกันเป็นก้อน จึงพักทิ้งไว้'
        ]
    },
    {
        id:33,
        name: 'ชาไทยเย็น',
        category: 'ชา',
        isRecommended: false,
        image: 'https://www.bluemochatea.com/wp-content/uploads/2020/10/traditional-iced-milk-tea-red-tea-powder_1150-26447.jpg',
        description: 'ความกลมกล่อม หอมมัน และความเข้มข้นรสชา',
        rating: 4.7,
        ingredients: [
            { name: 'นมข้นหวาน', image: 'https://aromathailand.com/wp-content/uploads/2024/02/shutterstock_1341048866.jpeg' },
            { name: 'นมตีฟองและผสมเครื่องดื่ม', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'นมข้นจืด', image: 'https://assets.central.co.th/CARNATION-FreshMilk405g-MKP1638053-1?$JPEG$&wid=550' },
            { name: 'ผงชาไทย', image:'https://inwfile.com/s-dz/86dgpw.png'},
            { name: 'น้ำร้อน', image:'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg'},
            { name: 'น้ำชาไทย', image:'https://cdn.shopify.com/s/files/1/0778/0591/2351/files/Thai_tea_style_1024x1024.jpg?v=1740592565'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'ละลายผงชาไทยและน้ำตาลทรายในน้ำร้อน',
            'เติมนมข้นหวานเติมนมตีฟองและผสมในเครื่องดื่มลงไปในชาไทยที่ละลายกับส่วนผสมไว้้',
            'เทลงแก้วที่มีน้ำแข็งเตรียมไว้เติมข้นจืด ฟอลคอน เอ็กซ์ตร้า ลงไปในแก้ว'
        ]
    },
    {
        id:34,
        name: 'นมชมพู',
        category: 'นม',
        isRecommended: false,
        image: 'https://img.wongnai.com/p/1920x0/2022/12/23/6c84330003f14fe48b97fae87ca3280c.jpg',
        description: 'เมนูหวานเย็นชื่นใจ เพิ่มความอร่อยด้วยฟองนมฟูนุ่ม',
        rating: 4.8,
        ingredients: [
            { name: 'นมข้นหวาน', image: 'https://aromathailand.com/wp-content/uploads/2024/02/shutterstock_1341048866.jpeg' },
            { name: 'นมตีฟองและผสมเครื่องดื่ม', image: 'https://i.pinimg.com/1200x/e1/24/ac/e124ac5a6569514efcae67fbca173032.jpg' },
            { name: 'นมข้นจืด', image: 'https://assets.central.co.th/CARNATION-FreshMilk405g-MKP1638053-1?$JPEG$&wid=550' },
            { name: 'น้ำหวานกลิ่นสละ', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWfS47BzCuSb9FYjJRoz4nACPtCPg01M-hA&s'},
            { name: 'น้ำร้อน', image:'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'}
        ],
        instructions: [
            'ละลายน้ำหวานกลิ่นสละสีชมพูในน้ำร้อน ติมนมข้นหวาน',
            'เติมนมตีฟองและผสมในเครื่องดื่มลงไปในน้ำหวานที่ละลายกับส่วนผสมไว้',
            'เทลงแก้วที่มีน้ำแข็งเตรียมไว้ เติมข้นจืด ฟอลคอน เอ็กซ์ตร้า ลงไปในแก้ว',
            'ตีนมตีฟองและผสมในเครื่องดื่ม นกเหยี่ยว ฟอลคอน ให้ฟูสวยเพื่อเติมไว้ด้านบนของเมนู'
        ]
    },
        {
        id:35,
        name: 'สมูทตี้ช็อกโกบานานา',
        category: 'ผลไม้',
        isRecommended: false,
        image: 'https://img.wongnai.com/p/1920x0/2019/04/09/29187ff7934c4fd6bad9dab74a5c2157.jpg',
        description: '',
        rating: 4.5,
        ingredients: [
            { name: ' กล้วยหอม ', image: 'https://image.makewebcdn.com/makeweb/m_1920x0/pe8a3Zpoi/DefaultData/375459607_321842447039954_218696352194399963_n.jpg' },
            { name: 'ผงโกโก้', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTP7VTtwovrwhPMO8OE20cFVBVvjKk_KiSw&s' },
            { name: 'นมผง', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM3I63Wm6igd1qUKT7WrekbKudBg5hluu37GW11XYpDgk_YyuWR6nC-QINrjOzKZowYU&usqp=CAU' },
            { name: 'น้ำต้มสุกอุณหภูมิห้อง', image:'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg'},
            { name: 'น้ำแข็ง', image:'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg'},
            { name: 'ช็อกโกแลตชิป สำหรับโรยหน้า', image:''},
        ],
        instructions: [
            'ชงนมกับน้ำต้มสุกอุณหภูมิห้อง 200 มิลลิลิตร ชงง่าย ละลายในน้ำอุณหภูมิห้อง',
            'เทน้ำแข็ง กล้วยหอม ผงโกโก้ และ นมผงลงในเครื่องปั่น ปั่นจนละเอียดเป็นเนื้อเดียวกัน ',
            'เทใส่แก้วเสิร์ฟ ตกแต่งด้วยกล้วยหอมหั่นชิ้น และช็อกโกแลตชิป '
        ]
    },
];

//  ดึง element จาก HTML มาใช้งาน
const drinkListView = document.getElementById('drink-list-view');
const drinkListContainer = document.getElementById('drink-list-container');
const drinkDetailsView = document.getElementById('drink-details-view');
const drinkDetailsContent = document.getElementById('drink-details-content');
const backButton = document.getElementById('back-button');
const searchInput = document.getElementById('search-input');
const categoryButtonsContainer = document.getElementById('category-buttons'); 
const recommendedListContainer = document.getElementById('recommended-list'); 
const drinkListTitle = document.getElementById('drink-list-title'); 

let currentCategory = 'ทั้งหมด';

//  ฟังก์ชันสำหรับสร้างดาวคะแนน
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★'; // ดาวเต็มดวง
    }
    if (halfStar) {
        starsHTML += '☆'; // อาจจะใช้ไอคอนดาวครึ่งดวงที่ซับซ้อนกว่านี้ได้
    }
    // เติมดาวโปร่งให้ครบ 5 ดวง
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '☆';
    }
    return starsHTML;
}


// ฟังก์ชันสำหรับแสดงรายละเอียดเครื่องดื่ม
function showDrinkDetails(drinkId) {
    const drink = drinks.find(d => d.id === drinkId);
    if (!drink) return;

    // สร้าง HTML สำหรับส่วนผสม
    const ingredientsHTML = drink.ingredients.map(ing => `
        <li>
            <img src="${ing.image}" alt="${ing.name}">
            <span>${ing.name}</span>
        </li>
    `).join('');

    // สร้าง HTML สำหรับวิธีทำ
    const instructionsHTML = drink.instructions.map(step => `<li>${step}</li>`).join('');

    // นำทั้งหมดมารวมกันเป็น HTML ที่จะแสดงผล
    drinkDetailsContent.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}" class="details-image">
        <h2>${drink.name}</h2>
        <p>${drink.description}</p>
        
        <div class="rating-section">
            <strong>คะแนนความอร่อย:</strong>
            <div class="stars">${createRatingStars(drink.rating)}</div>
            <span>${drink.rating} / 5</span>
        </div>

        <div class="ingredients-section">
            <h3>ส่วนผสม</h3>
            <ul class="ingredients-list">${ingredientsHTML}</ul>
        </div>

        <div class="instructions-section">
            <h3>วิธีทำ</h3>
            <ol>${instructionsHTML}</ol>
        </div>
    `;

    // สลับหน้าจอ
    drinkListView.classList.add('hidden');
    drinkDetailsView.classList.remove('hidden');
}


//  ฟังก์ชันสำหรับแสดงรายการเครื่องดื่ม (หน้าหลัก)

// 📍 ฟังก์ชันสำหรับสร้างและแสดงการ์ดเครื่องดื่ม (แยกออกมาเพื่อให้ใช้ซ้ำได้)
function createDrinkCard(drink) {
    const drinkElement = document.createElement('div');
    drinkElement.classList.add('drink-item');
    drinkElement.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}">
        <h3>${drink.name}</h3>
    `;
    drinkElement.addEventListener('click', () => showDrinkDetails(drink.id));
    return drinkElement;
}

// 📍 ฟังก์ชันสำหรับแสดงรายการเครื่องดื่ม (เวอร์ชันที่ถูกต้อง)
function displayDrinkList(searchTerm = '', category = 'ทั้งหมด') {
    drinkListContainer.innerHTML = '';
    currentCategory = category; // อัปเดตหมวดหมู่ปัจจุบัน

    let filteredDrinks = drinks;

    // 1. กรองตามหมวดหมู่ก่อน
    if (category !== 'ทั้งหมด') {
        filteredDrinks = filteredDrinks.filter(drink => drink.category === category);
        drinkListTitle.textContent = `หมวดหมู่: ${category}`;
    } else {
        drinkListTitle.textContent = 'เครื่องดื่มทั้งหมด';

    }

    // 2. กรองตามคำค้นหาทีหลัง
    if (searchTerm) {
        filteredDrinks = filteredDrinks.filter(drink =>
            drink.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // แสดงผลลัพธ์
    if (filteredDrinks.length === 0) {
        drinkListContainer.innerHTML = '<p>ไม่พบเมนูที่คุณค้นหา</p>';
        return;
    }

    // วนลูปเพื่อสร้างการ์ดโดยเรียกใช้ createDrinkCard
    filteredDrinks.forEach(drink => {
        const drinkCard = createDrinkCard(drink);
        drinkListContainer.appendChild(drinkCard);
    });
}


//  ฟังก์ชันสำหรับสร้างและแสดงปุ่มหมวดหมู่
function displayCategoryButtons() {
    // หาหมวดหมู่ทั้งหมดที่ไม่ซ้ำกัน
    const categories = ['ทั้งหมด', ...new Set(drinks.map(drink => drink.category))];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-btn');
        button.textContent = category;
        if (category === currentCategory) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            // จัดการสไตล์ปุ่ม active
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // กรองรายการใหม่
            displayDrinkList(searchInput.value, category);
        });

        categoryButtonsContainer.appendChild(button);
    });
}

// 📍 ส่วนที่ 6: ฟังก์ชันสำหรับแสดงเมนูแนะนำ
function displayRecommendedDrinks() {
    const recommendedDrinks = drinks.filter(drink => drink.isRecommended);
    
    recommendedDrinks.forEach(drink => {
        const drinkCard = createDrinkCard(drink);
        recommendedListContainer.appendChild(drinkCard);
    });
}

//  ส่วนที่ 4: เพิ่ม Event Listener ให้ช่องค้นหา
searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value;
    displayDrinkList(searchTerm, currentCategory); // ส่งหมวดหมู่ปัจจุบันไปด้วย
});
//  เพิ่ม Event Listener ให้ปุ่มย้อนกลับ
backButton.addEventListener('click', () => {
    drinkDetailsView.classList.add('hidden');
    drinkListView.classList.remove('hidden');
});

//  เริ่มการทำงาน: เรียกใช้ฟังก์ชันแสดงรายการเครื่องดื่มเมื่อเปิดหน้าเว็บ
function initializeApp() {
    displayCategoryButtons();
    displayRecommendedDrinks();
    displayDrinkList();
}

initializeApp()
