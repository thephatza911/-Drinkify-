// script.js

// 1. อัปเดตข้อมูลเครื่องดื่มให้มีรายละเอียดมากขึ้น
const drinks = [
    {
        id: 1,
        name: 'มอคค่าเย็น',
        image: 'https://images.unsplash.com/photo-1586948217355-65de5f441094?q=80&w=1887&auto=format&fit=crop',
        description: 'ความลงตัวของกาแฟและช็อกโกแลตที่ให้ความสดชื่น',
        rating: 4.5, // คะแนนความอร่อย (เต็ม 5)
        ingredients: [
            { name: 'เอสเปรสโซ', image: 'https://images.unsplash.com/photo-1610889556528-95f8b93a0b11?q=80&w=2070&auto=format&fit=crop' },
            { name: 'นมสด', image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d5?q=80&w=1887&auto=format&fit=crop' },
            { name: 'ซอสช็อกโกแลต', image: 'https://images.unsplash.com/photo-1627808092016-170de4448575?q=80&w=1887&auto=format&fit=crop' }
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
            { name: 'ผงมัทฉะ', image: 'https://images.unsplash.com/photo-1642849419999-33b0ed57c7a3?q=80&w=1894&auto=format&fit=crop' },
            { name: 'น้ำร้อน', image: 'https://images.unsplash.com/photo-1605913295861-39e245a43e3c?q=80&w=1887&auto=format&fit=crop' },
            { name: 'นมสด', image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d5?q=80&w=1887&auto=format&fit=crop' }
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
        image: 'https://images.unsplash.com/photo-1610917228383-9b2f347e4d82?q=80&w=1887&auto=format&fit=crop',
        description: 'เครื่องดื่มเพื่อสุขภาพที่อัดแน่นไปด้วยวิตามินและความอร่อย',
        rating: 4.2,
        ingredients: [
            { name: 'สตรอว์เบอร์รี', image: 'https://images.unsplash.com/photo-1585618739133-3c3e88e2aa63?q=80&w=1887&auto=format&fit=crop' },
            { name: 'โยเกิร์ต', image: 'https://images.unsplash.com/photo-1562114807-a3c3f1503c5d?q=80&w=1887&auto=format&fit=crop' },
            { name: 'น้ำผึ้ง', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1935&auto=format&fit=crop' }
        ],
        instructions: [
            'นำส่วนผสมทั้งหมดใส่ลงในเครื่องปั่น',
            'ปั่นด้วยความเร็วสูงจนเนื้อเนียนละเอียดเข้ากัน',
            'เทใส่แก้ว พร้อมเสิร์ฟทันที'
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