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
            { name: 'ใบสะระแหน่', image: 'https://i.pinimg.com/736x/2f/4a/e2/2f4ae2ca3fa73b7dd78b56d3436f20ad.jpg' },
        ],
        instructions: [
            'ผสมน้ำผึ้งกับน้ำมะนาวให้ละลายเข้ากัน',
            'เทใส่แก้วที่มีน้ำแข็ง ตามด้วยโซดาแช่เย็นจนเต็มแก้ว',
            'แต่งด้วยมะนาวฝานและใบสะระแหน่'
        ]
    }
];

// 2. ดึง element จาก HTML มาใช้งาน
const drinkListView = document.getElementById('drink-list-view');
const drinkListContainer = document.getElementById('drink-list-container');
const drinkDetailsView = document.getElementById('drink-details-view');
const drinkDetailsContent = document.getElementById('drink-details-content');
const backButton = document.getElementById('back-button');


// 3. ฟังก์ชันสำหรับสร้างดาวคะแนน
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


// 4. ฟังก์ชันสำหรับแสดงรายละเอียดเครื่องดื่ม
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


// 5. ฟังก์ชันสำหรับแสดงรายการเครื่องดื่ม (หน้าหลัก)
function displayDrinkList() {
    drinkListContainer.innerHTML = ''; // เคลียร์ของเก่าก่อน
    drinks.forEach(drink => {
        const drinkElement = document.createElement('div');
        drinkElement.classList.add('drink-item');
        drinkElement.innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <h3>${drink.name}</h3>
        `;
        
        // เมื่อคลิกที่รายการ ให้เรียกใช้ฟังก์ชันแสดงรายละเอียด
        drinkElement.addEventListener('click', () => showDrinkDetails(drink.id));
        
        drinkListContainer.appendChild(drinkElement);
    });
}


// 6. เพิ่ม Event Listener ให้ปุ่มย้อนกลับ
backButton.addEventListener('click', () => {
    drinkDetailsView.classList.add('hidden');
    drinkListView.classList.remove('hidden');
});


// 7. เริ่มการทำงาน: เรียกใช้ฟังก์ชันแสดงรายการเครื่องดื่มเมื่อเปิดหน้าเว็บ
displayDrinkList();