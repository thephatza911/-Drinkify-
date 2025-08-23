// script.js

// 1. อัปเดตข้อมูลเครื่องดื่มให้มีรายละเอียดมากขึ้น
const drinks = [
    {
        id: 1,
        name: 'มอคค่าเย็น',
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
        name: 'น้ำผึ้งมะนาวโซดา',
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
        image: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-75f0-622f-a716-24c0447fadef/raw?se=2025-08-23T18%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=7c798083-e03b-5eeb-a01c-61aaa033d04c&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-23T16%3A40%3A56Z&ske=2025-08-24T16%3A40%3A56Z&sks=b&skv=2024-08-04&sig=ZZGhLF2yCm4T3yfofvSYKjGdV%2BnCSYCh3Zz9Wom4yi0%3D',
        description: 'ว้อดก้าจากแดนไกล ผสมผสานกับความนัวจากแดนไทย',
        rating: 5,
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
        image: 'https://sdmntprcentralus.oaiusercontent.com/files/00000000-bfcc-61f5-9da5-58ee054a1791/raw?se=2025-08-23T18%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=cc529183-35fd-532f-9be6-6c4487cacadd&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-22T21%3A52%3A21Z&ske=2025-08-23T21%3A52%3A21Z&sks=b&skv=2024-08-04&sig=ZzJTAX8ItOQr41gIO%2BbBzdLf7Jl9pyhG6tvI2yJFcm8%3D',
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
        image: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-aea4-622f-85e3-11623343bb46/raw?se=2025-08-23T18%3A05%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=65e156bc-730e-5a99-a79f-bca193a6d2cf&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-23T11%3A06%3A58Z&ske=2025-08-24T11%3A06%3A58Z&sks=b&skv=2024-08-04&sig=P6d32AiUjvYl2Lf/V5j6n9BbDQ7qV774Y7qxfwJ9WcY%3D',
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
        image: 'https://sdmntprukwest.oaiusercontent.com/files/00000000-26a4-6243-8996-31235abd7cd8/raw?se=2025-08-23T18%3A59%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=201ca054-3540-5486-908c-a85c6bbaaa71&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-22T21%3A52%3A27Z&ske=2025-08-23T21%3A52%3A27Z&sks=b&skv=2024-08-04&sig=IqGj7f9ykE/2IELWVW1NBZx3rgXbjeznJygd8gTGOCg%3D',
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
        image: 'https://i.pinimg.com/736x/14/eb/6b/14eb6b6f0557ce5588abe87ae54a90b9.jpg',
        description: 'ชามะนาวหอมแตะจมูก เหมาะสำหรับดื่มคู่กับทั้งของคาวทั้งของหวาน',
        rating: 4.2,
        ingredients: [
            { name: 'ผงชาไทยหรือผงชาแดง', image: 'https://s359.kapook.com/pagebuilder/65ed7db4-6670-41ea-bc25-991008d5bce8.jpg' },
            { name: 'น้ำร้อนจัด', image: 'https://i.pinimg.com/736x/8c/05/18/8c0518d7fc7ce1be27b2199629a72b64.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
            { name: 'เกลือป่น', image:'https://i.pinimg.com/736x/bd/86/40/bd8640f4ba82b996445e9e781588b0fd.jpg'},
            { name: 'น้ำมะนาว', image:'https://i.pinimg.com/736x/60/fa/6a/60fa6a2e416fe4e2896f55331bfd50d9.jpg'},
            { name: 'สาระแหน่', image:'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'}
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
        image: 'https://lwfiles.mycourse.app/ikonclass-public/ea686876816a98d325ef38aae2b577df.jpeg',
        description: 'ดื่มด่ำกับค็อกเทลรสชาติดี',
        rating: 5,
        ingredients: [
            { name: 'มะนาวครึ่งลูก', image: '' },
            { name: 'สาระแหน่', image: 'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg' },
            { name: 'น้ำตาลทราย', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7TajMV9iJkD0lI5Ym2aKKyJR7OxqZ0TnwulzXKwnGpuaid2KMAYj7xQ14ArfFI3dlzO_ElF2emYqt0rDBc445LUHVX9gFUqGuLMiDEn7GB-aw814g-fe1NsYFTrn9j-irJaUcducFos/s1600/sucrose.jpg' },
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
        image: 'https://i.pinimg.com/1200x/64/d1/70/64d170f7c9fe80f71ac1fb832f4b5b6f.jpg',
        description: 'บลูเบอร์รี่หวานเปรี้ยว ครองใจคนทั่วโลก', 
        rating: 4.9, 
        ingredients: [ 
            { name: 'โยเกิร์ต', image: 'https://i.pinimg.com/1200x/37/56/1f/37561f1a60d60c387db3a2aa3d5c18b3.jpg' }, 
            { name: 'บลูเบอร์รี่', image: 'https://i.pinimg.com/736x/2c/ea/98/2cea98039ffe491b7e458655da7a4749.jpg' }, 
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' }, 
            { name: 'ใบสาระแหน่', image:'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg'}
        ],
        instructions: [ 
            'ใส่โยเกิร์ต บลูเบอร์รี่ น้ำแข็งลงโถปั่น ปั่นเข้าด้วยกัน', 
            'เทใส่แก้ว ตกแต่งด้วยบลูเบอร์รี่และใบสาระแหน่'
        ]
    },
    {
        id:13,
        name: 'ค็อกเทล Sex on the Beach',
        image: 'https://i.namu.wiki/i/MKo-9L4_uLKjiw0bDVbkRUDq_tMQ4Gb3-UdI-AjijAk33tdvq2FEIy8gmsdXnTx4xYAyVzJouy9z-oFVMupjrg.webp',
        description: 'ดื่มด่ำไปกับค็อกเทลสูตรพิเศษที่คัดสรรอย่างพิถีพิถัน',
        rating: 4.9,
        ingredients: [
            { name: 'น้ำแครนเบอร์รี', image: 'https://res.cloudinary.com/freshketimage001/image/upload/v1596008096/iwhheiptqkrwbgsxx7op.jpg' },
            { name: 'น้ำส้ม', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpASMJ2wLkSjwFlqRuiP_EP1PmiJZbFoy6A&s'},
            { name: 'วอดก้า', image: 'https://i.pinimg.com/1200x/7e/04/13/7e04139726e51e8fe59e46c832e9880d.jpg' },
            { name: 'เหล้าพีช ชแนปส์', image: 'https://mcgrocer.com/cdn/shop/files/angels-peach-schnapps-70cl-41369426723054.jpg?v=1735973951' },
            { name: 'น้ำแข็ง', image: 'https://i.pinimg.com/736x/57/74/63/57746397ad30315179abe312e2d5a269.jpg' },
            { name: ' ส้มหั่นซีก', image:'https://img.sistacafe.com/resizer?url=sistacafe-assets:____%2Fc%2F49378%2Fthumbnail.jpeg?v=20240305231809&w=275'}
        ],
        instructions: [
            'เทน้ำแข็งใส่แก้ว Highball glass',
            'เทวอดก้า เหล้าพีช และน้ำส้มลงในแก้ว',
            'เทน้ำแครนเบอร์รีตาม',
            'ตกแต่งด้วยส้มหั่นซีก'
        ]
    }
];

//  ดึง element จาก HTML มาใช้งาน
const drinkListView = document.getElementById('drink-list-view');
const drinkListContainer = document.getElementById('drink-list-container');
const drinkDetailsView = document.getElementById('drink-details-view');
const drinkDetailsContent = document.getElementById('drink-details-content');
const backButton = document.getElementById('back-button');
const searchInput = document.getElementById('search-input');


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

function displayDrinkList(searchTerm = '') { // ✨ เพิ่มตัวแปร searchTerm
    drinkListContainer.innerHTML = ''; // เคลียร์ของเก่าทิ้งก่อนเสมอ

    // ✨ กรองข้อมูล
    const filteredDrinks = drinks.filter(drink =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ✨ ตรวจสอบผลลัพธ์
    if (filteredDrinks.length === 0) {
        drinkListContainer.innerHTML = '<p>ไม่พบเมนูที่คุณค้นหา</p>';
        return; // ออกจากฟังก์ชัน ไม่ต้องทำต่อ
    }

    // ✨ วนลูปแสดงผลเฉพาะข้อมูลที่กรองแล้ว
    filteredDrinks.forEach(drink => {
        const drinkElement = document.createElement('div');
        drinkElement.classList.add('drink-item');
        drinkElement.innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <h3>${drink.name}</h3>
        `;

        drinkElement.addEventListener('click', () => showDrinkDetails(drink.id));

        drinkListContainer.appendChild(drinkElement);
    });
}
//  ส่วนที่ 4: เพิ่ม Event Listener ให้ช่องค้นหา
searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value;
    displayDrinkList(searchTerm);
});
//  เพิ่ม Event Listener ให้ปุ่มย้อนกลับ
backButton.addEventListener('click', () => {
    drinkDetailsView.classList.add('hidden');
    drinkListView.classList.remove('hidden');
});

//  เริ่มการทำงาน: เรียกใช้ฟังก์ชันแสดงรายการเครื่องดื่มเมื่อเปิดหน้าเว็บ
displayDrinkList();