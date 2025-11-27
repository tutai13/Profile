<template>
  <div class="invite-root">
    <div class="card">
   <!-- HERO SECTION -->
<!-- HERO – 3 ẢNH ĐỨNG ĐẸP Y HỆT ẢNH MẪU -->
<section class="hero">
  <h1 class="subtitle" v-scroll-animate data-delay="0">Thiệp</h1>
  <h1 class="title" v-scroll-animate data-delay="0.5">Mời Thôi Nôi</h1>

  <!-- 3 ảnh kiểu studio như ảnh mẫu -->
  <div class="triple-photo" v-scroll-animate data-delay="1">
    <div class="photo-frame">
      <img src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg" alt="Bé Bình An 1" />
    </div>
    <div class="photo-frame middle">
      <img src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg" alt="Bé Bình An 2" />
    </div>
    <div class="photo-frame">
      <img src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg" alt="Bé Bình An 3" />
    </div>
  </div>

  <h2 class="baby" v-scroll-animate data-delay="2">Bé Bình An</h2>
</section>
      <div class="baby-name-framed py-16" v-scroll-animate data-delay="1">
        <div class="name-frame mx-auto">
          <h2 class="name-text">Nguyễn Phương Bình An</h2>
        </div>
      </div>
      <!-- SETTINGS / DISPLAY CONTENT -->
      <section class="content" v-if="showSettings">
                <!-- MESSAGE SECTION -->
        <div class="section-block message-block" v-scroll-animate data-delay="5">
          <p class="label">Lời nhắn</p>
          <p class="message">Thân mời bạn đến chung vui cùng gia đình chúng tôi trong ngày thôi nôi của bé. Rất mong sự hiện diện của bạn để buổi tiệc thêm ấm cúng.</p>
        </div>
        <!-- NGÀY SINH CỦA BÉ – KIỂU THIỆP THẬT SIÊU ĐẸP -->
        <div class="section-block birth-real-card" v-scroll-animate data-delay="6">
          <p class="label">Bé chào đời</p>
          <div class="birth-card">
            <div class="birth-title">TIỆC MỪNG THÔI NÔI</div>
            <div class="birth-time">VÀO LÚC: 17H00</div>
            
            <div class="birth-date-row">
              <div class="birth-part">
                <span class="birth-label">Thứ Năm</span>
                <span class="birth-big">14</span>
              </div>
              <div class="slash">/</div>
              <div class="birth-part">
                <span class="birth-label">Tháng</span>
                <span class="birth-big">08</span>
              </div>
              <div class="birth-year-big">2025</div>
            </div>
            

          </div>
        </div>
        <!-- DATE SECTION - Calendar Style -->
        <div class="section-block calendar-block" v-scroll-animate data-delay="2">
          <p class="label">Ngày tổ chức</p>
          <div class="calendar">
            <div class="calendar-header">{{ calendarMonth }}</div>
            <div class="calendar-grid">
              <span v-for="d in 31" :key="d" :class="['day', { highlight: d === calendarDay }]">{{ d }}</span>
            </div>
          </div>
        </div>
        <!-- TIME / COUNTDOWN SECTION - LED Style -->
        <div class="section-block time-block" v-scroll-animate data-delay="3">
          <p class="label">Đếm ngược đến sự kiện</p>
          <div class="countdown-grid">
            <div class="countdown-item">
              <div class="num">{{ countdownDays }}</div>
              <div class="label-small">Ngày</div>
            </div>
            <div class="countdown-item">
              <div class="num">{{ countdownHours }}</div>
              <div class="label-small">Giờ</div>
            </div>
            <div class="countdown-item">
              <div class="num">{{ countdownMinutes }}</div>
              <div class="label-small">Phút</div>
            </div>
            <div class="countdown-item">
              <div class="num">{{ countdownSeconds }}</div>
              <div class="label-small">Giây</div>
            </div>
          </div>
        </div>

        <!-- LOCATION SECTION -->
        <div class="section-block location-block" v-scroll-animate data-delay="4">
          <p class="label">Địa điểm</p>
          <div class="location-box">📍 {{ location }}</div>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.534180918249!2d108.1431936153252!3d16.072889776176113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d5079a7285%3A0x3fbce23a7a72671d!2zOTUgxJDhuqFvIEtow6FuaCBCw6FjLCBMw6JuIENow6F1LCDEkMO0w6JuZyBOYW5nIDU1MDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700328754321!5m2!1svi!2s"
              width="100%"
              height="250"
              style="border:0; border-radius:12px;"
              allowfullscreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
        <footer class="footer" v-scroll-animate data-delay="8">Liên hệ: {{ contact }} — Lưu ý: mặc trang phục tươi sáng.</footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'


const date = ref('2025-12-07')
const location = ref('95 Đồng Kè, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng , Việt Nam')
const contact = ref('0123 456 789')
const image = ref('')

const showSettings = ref(true)
const rsvpName = ref('')
const rsvpMsg = ref('')

const calendarDay = computed(() => Number(date.value.split('-')[2]))
const calendarMonth = computed(() => {
  const months = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12']
  return months[Number(date.value.split('-')[1]) - 1]
})

// Countdown LED
const countdownDays = ref('00')
const countdownHours = ref('00')
const countdownMinutes = ref('00')
const countdownSeconds = ref('00')
const countdown = ref('')

let timerInterval = null
function updateCountdown() {
  const target = new Date(`${date.value} 10:00:00`)
  const now = new Date()
  const diff = target - now

  if (diff <= 0) {
    countdownDays.value = countdownHours.value = countdownMinutes.value = countdownSeconds.value = '00'
    countdown.value = 'Đã đến giờ tổ chức 🎉'
    clearInterval(timerInterval)
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  countdownDays.value = String(days).padStart(2, '0')
  countdownHours.value = String(hours).padStart(2, '0')
  countdownMinutes.value = String(minutes).padStart(2, '0')
  countdownSeconds.value = String(seconds).padStart(2, '0')
}

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})

// Directive scroll animation
const vScrollAnimate = {
  mounted(el) {
    const delayIndex = el.dataset.delay || 0
    el.classList.add('slide-up')
    el.style.transitionDelay = `${delayIndex * 0.2}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          el.classList.add('show')
          observer.unobserve(el)
        }
      }, { threshold: 0.1 }
    )
    observer.observe(el)
  }
}
</script>

<style scoped>
/* ===== HERO TITLES ===== */
.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #ecfdf5;
  text-align: center;
  margin: 0 0 0.5rem;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
  opacity: 0.9;
  animation: fadeIn 1s ease-out;
}

.title {
  font-size: 2.0rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin: 0 0 2rem;
  letter-spacing: 3px;
  text-shadow: 0 4px 12px rgba(6, 78, 59, 0.4);
  animation: gradientShift 3s ease infinite, fadeIn 1.2s ease-out;
  position: relative;
  padding: 0.5rem 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
  background: linear-gradient(135deg, #34d399, #86efac, #d1fae5);
  -webkit-background-clip: text;
}
/* ===== NGÀY SINH KIỂU THIỆP THẬT ===== */
.birth-real-card {
  margin-bottom: 2rem;
  padding: 1.8rem;
  background: linear-gradient(135deg, #f0fdfa, #ecfdf5);
  border-radius: 24px;
  border: 1px solid #a7f3d0;
  text-align: center;
}

.birth-card {
  position: relative;
  background: linear-gradient(135deg, #059669, #047857);
  border-radius: 28px;
  padding: 2rem 1.5rem 2.5rem;
  color: white;
  box-shadow: 0 12px 35px rgba(5, 150, 105, 0.4);
  overflow: hidden;
}

.birth-title {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.birth-time {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 1.2rem;
}

.birth-date-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.birth-part {
  text-align: center;
}

.birth-label {
  font-size: 0.85rem;
  opacity: 0.9;
  display: block;
  margin-bottom: 0.3rem;
}

.birth-big {
  font-size: 3.6rem;
  font-weight: 900;
  font-family: 'Playfair Display', serif;
  line-height: 1;
}

.slash {
  font-size: 2.4rem;
  font-weight: 300;
  opacity: 0.8;
}

.birth-year-big {
  font-size: 5rem;
  font-weight: 800;
  font-family: 'Playfair Display', serif;
}

/* Responsive */
@media (max-width: 480px) {
  .birth-big { font-size: 2.8rem; }
  .birth-year-big { font-size: 5rem; }
  .slash { font-size: 2rem; }

}
.title::before { content: '💌'; position: absolute; left: -3.5rem; animation: bounce 2s ease-in-out infinite; }
.title::after  { content: '💌'; position: absolute; right: -3.5rem; animation: bounce 2s ease-in-out infinite; }

@keyframes gradientShift { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
@keyframes fadeIn { from{opacity:0;transform:translateY(-20px);} to{opacity:1;transform:translateY(0);} }
@keyframes bounce { 0%,100%{transform:translateY(0) rotate(-10deg);} 50%{transform:translateY(-10px) rotate(10deg);} }

/* ===== ROOT & CARD ===== */
.invite-root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%);
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
}
.card {
  width: 100%;
  max-width: 1000px;
  border-radius: 24px;
  overflow: hidden;
  background: #f0fdfa;
    /* background: linear-gradient(180deg, #064e3b 0%, #065f46 100%); */
  box-shadow: 0 20px 60px rgba(16,194,121,0.18), 0 0 0 1px rgba(134,239,172,0.2);
}

/* ===== HERO ===== */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem;
  position: relative;
  background: linear-gradient(180deg, #064e3b 0%, #065f46 100%);
}
.hero::before { content:'💐'; position:absolute; top:1rem; left:4.5rem; font-size:2rem; animation:float 3s ease-in-out infinite; }
.hero::after  { content:'💐'; position:absolute; top:1rem; right:5rem; font-size:2rem; animation:float 3s ease-in-out infinite 1.5s; }
@keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }

/* tên dưới ảnh */
.baby { font-size:2rem; font-weight:500; color:#ecfdf5; text-align:center; margin:0; text-shadow:0 2px 8px rgba(6,78,59,0.4); position:relative; padding:0 2rem;}
.baby::before, .baby::after { content:'❤️'; position:absolute; font-size:1.5rem; color:#86efac; }
.baby::before { left:0; animation:sparkle 2s ease-in-out infinite; }
.baby::after  { right:0; animation:sparkle 2s ease-in-out infinite 1s; }
@keyframes sparkle {0%,100%{opacity:0.4;transform:scale(0.8);}50%{opacity:1;transform:scale(1.2);}}

/* ===== SCROLL ANIMATIONS ===== */
.subtitle,.title,.hero-image,.baby,.section-block{opacity:0; transform:translateY(30px); transition:all 0.8s ease;}
.subtitle.show,.title.show,.hero-image.show,.baby.show,.section-block.show{opacity:1; transform:translateY(0);}
.hero-image.show img{transform:scale(1);}

/* ===== CONTENT ===== */
.content{padding:2rem 2.5rem; background:#fff;}
.label{font-size:1rem;color:#059669;margin-bottom:0.8rem;font-weight:600;text-transform:uppercase;display:flex;align-items:center;gap:0.5rem;}
.label::before{content:'❖';color:#34d399;font-size:0.8rem;}
.section-block{margin-bottom:2rem;padding:1.5rem;background:#f0fdfa;border-radius:16px;border:1px solid #a7f3d0;transition:all 0.3s ease;}
.section-block:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(16,194,121,0.15);}

/* ===== CALENDAR ===== */
.calendar{border:2px solid #86efac;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(134,239,172,0.2);}
.calendar-header{background:linear-gradient(135deg,#059669,#10b981);padding:1rem;text-align:center;font-weight:700;color:#fff;font-size:1.1rem;text-transform:uppercase;}
.calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);padding:1rem;gap:8px;}
.day{padding:10px 0;text-align:center;font-size:0.9rem;border-radius:8px;background:#ecfdf5;color:#065f46;cursor:default;transition:all 0.2s;}
.day:hover{background:#a7f3d0;transform:scale(1.05);}
.day.highlight{background:linear-gradient(135deg,#059669,#10b981);color:#fff;font-weight:700;font-size:1.1rem;box-shadow:0 4px 12px rgba(16,194,121,0.5);transform:scale(1.1);position:relative;}
.day.highlight::after{content:'🎂';position:absolute;top:-8px;right:-8px;font-size:1rem;}

/* ===== COUNTDOWN ===== */
.countdown-grid {
  display: flex;
  justify-content: center;
  gap: 0.8rem;              /* giảm gap một chút cho vừa */
  margin-top: 1rem;
  flex-wrap: nowrap;        /* BẮT BUỘC: không cho xuống dòng */
  padding: 0.5rem 0;        /* thêm chút padding để cuộn mượt */
  scrollbar-width: none;    /* ẩn thanh cuộn trên Firefox */
}.countdown-item{display:flex;flex-direction:column;align-items:center;padding:1.2rem 1.5rem;background:linear-gradient(145deg,#059669,#047857);border-radius:16px;min-width:80px;color:#fff;box-shadow:0 6px 20px rgba(5,150,105,0.45),inset 0 -3px 6px rgba(255,255,255,0.2);animation:pulse 2s ease-in-out infinite;position:relative;overflow:hidden;}
.countdown-item::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.12),transparent);transform:rotate(45deg);animation:shimmer 3s infinite;}
@keyframes pulse{0%,100%{box-shadow:0 6px 20px rgba(5,150,105,0.45),inset 0 -3px 6px rgba(255,255,255,0.2);}50%{box-shadow:0 8px 25px rgba(16,194,121,0.6),inset 0 -4px 8px rgba(255,255,255,0.4);}}
@keyframes shimmer{0%{transform:translateX(-100%) translateY(-100%) rotate(45deg);}100%{transform:translateX(100%) translateY(100%) rotate(45deg);}}
.num{font-size:2rem;font-weight:800;text-shadow:0 2px 8px rgba(0,0,0,0.4);font-family:'Courier New', monospace;}
.label-small{font-size:0.75rem;color:#d1fae5;margin-top:0.5rem;text-transform:uppercase;font-weight:600;}

/* ===== LOCATION ===== */
.location-box{padding:1rem 1.2rem;background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border-radius:12px;border:2px solid #86efac;text-align:center;font-weight:600;font-size:1rem;color:#064e3b;margin-bottom:1rem;box-shadow:0 2px 8px rgba(134,239,172,0.15);}
.map-container{margin-top:1rem;border-radius:16px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.15);border:3px solid #fff;}

/* ===== MESSAGE ===== */
.message-block .message{line-height:1.8;color:#374151;font-size:1rem;text-align:justify;padding:1rem;background:#fff;border-radius:12px;border-left:4px solid #10b981;}

/* ===== FOOTER ===== */
.footer{margin-top:2rem;text-align:center;font-size:0.9rem;color:#065f46;padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px dashed #86efac;}

/* ===== RESPONSIVE ===== */
@media (max-width:768px){.invite-root{padding:1rem 0.5rem;}.hero{padding:2rem 1rem 1.5rem;}.hero-image{height:250px;}.content{padding:1.5rem 1rem;}.section-block{padding:1rem;}.countdown-grid{gap:0.6rem;}.countdown-item{min-width:70px;padding:1rem 1.2rem;}.num{font-size:1.6rem;}.calendar-grid{gap:4px;padding:0.8rem;}}
@media (max-width:480px){.num{font-size:1.4rem;}}
/* Font chữ tay sang trọng */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.baby-name-framed {
  padding: 4rem 2rem;
  text-align: center;
}

/* Khung viền đẹp */
.name-frame {
  max-width: 720px;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f8fdf9 0%, #f0fdf4 100%);
  border: double 6px #86efac;
  border-radius: 32px;
  box-shadow: 
    0 10px 40px rgba(16, 194, 121, 0.15),
    inset 0 0 30px rgba(134, 239, 172, 0.2);
  position: relative;
  overflow: hidden;
}

/* 4 góc trang trí nhỏ */
.name-frame::before {
  content: '';
  position: absolute;
  top: 12px; left: 12px;
  width: 40px; height: 40px;
  border-left: 4px solid #34d399;
  border-top: 4px solid #34d399;
  border-radius: 12px 0 0 0;
}

.name-frame::after {
  content: '';
  position: absolute;
  bottom: 12px; right: 12px;
  width: 40px; height: 40px;
  border-right: 4px solid #34d399;
  border-bottom: 4px solid #34d399;
  border-radius: 0 0 12px 0;
}

.name-frame > div {
  position: absolute;
  width: 40px; height: 40px;
  border: 4px solid hsl(158, 64%, 52%);
  border-radius: 12px;
}

.name-frame > div:nth-child(1) { top: 12px; right: 12px; border-left: none; border-bottom: none; }
.name-frame > div:nth-child(2) { bottom: 12px; left: 12px; border-right: none; border-top: none; }

/* Chữ tên */
.name-text {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(120deg, #064e3b, #059669, #10b981, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 6px 20px rgba(16, 194, 121, 0.2);
}

/* Hiệu ứng hiện khi scroll */
.baby-name-framed {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.baby-name-framed.show {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 640px) {
  .name-text { font-size: 1rem; }
  .name-frame { padding: 2rem 1.5rem; border-width: 5px; }
}
/* ===== 3 ẢNH STUDIO – MÁY TÍNH ĐẸP Y HỆT ẢNH MẪU ===== */
.triple-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;                    /* khoảng cách rộng rãi như mẫu */
  margin: 3rem auto;
  padding: 0 2rem;
  max-width: 1200px;
}

.photo-frame {
  border: 14px solid #ffffff;
  border-bottom-width: 18px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
  background: #fff;
  position: relative;
  transition: transform 0.4s ease;
}

/* Ảnh giữa to hơn đúng như mẫu */
.photo-frame.middle {
  flex: 0 0 300px;
  transform: translateY(-20px) scale(1.08);
  z-index: 2;
}


.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  aspect-ratio: 3 / 4;
}

/* ==================== ĐIỆN THOẠI – NHỎ LẠI VỪA ĐẸP, VẪN NẰM NGANG ==================== */
@media (max-width: 768px) {
  .triple-photo {
    gap: 6px;
    padding: 0px;
  }
  .photo-frame {
      /* nhỏ lại vừa điện thoại */
    border-width: 10px;
    border-bottom-width: 14px;
    border-radius: 24px;
  }
  .photo-frame::before {
    inset: 5px;
    border-width: 4px;
  }
  .photo-frame.middle {

    transform: translateY(-12px) scale(1.07);
  }
}

@media (max-width: 480px) {
  .triple-photo { gap: 6px; }
  .photo-frame {

    min-width: 100px;
    border-width: 7px;
    border-bottom-width: 10px;
    border-radius: 18px;
  }
  .photo-frame::before {
    inset: 4px;
    border-width: 3px;
  }
  .photo-frame.middle {
    flex: 0 0 33vw;
    min-width: 110px;
    transform: translateY(-8px) scale(1.06);
  }
}

</style> 