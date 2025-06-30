document.getElementById('accept-button').addEventListener('click', function() {
    showPopup('https://media.tenor.com/gotOLnyvy4YAAAAM/bubu-dancing-dance.gif'); // ใส่ลิ้งค์ภาพ GIF สำหรับปุ่ม "รับ" ที่นี่
});

document.getElementById('decline-button').addEventListener('click', function() {
    showPopup('https://media.tenor.com/Q59LDPQeTiAAAAAM/last-day-of-school.gif'); // ใส่ลิ้งค์ภาพ GIF สำหรับปุ่ม "ไม่รับ" ที่นี่
});

function showPopup(imageUrl) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    
    popupImg.src = imageUrl;
    popup.style.display = "block";

    // ปิดป็อบอัพเมื่อคลิกปุ่ม "ย้อนกลับ"
    document.querySelector('.close').onclick = function() {
        popup.style.display = "none";
    };

    // ปิดป็อบอัพเมื่อคลิกนอกป็อบอัพ
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
}
