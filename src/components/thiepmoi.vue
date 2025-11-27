<template>
  <div class="invite-root">
    <div class="card">
   <!-- HERO SECTION -->
    <section class="hero">
      <h1 class="subtitle" v-scroll-animate data-delay="0">Thiệp</h1>
      <h1 class="title" v-scroll-animate data-delay="0.5">Mời Thôi Nôi</h1>

      <div class="hero-image" v-scroll-animate data-delay="1">
      <img :src="image || defaultImage" alt="bé" />
       </div>
      <h2 class="baby" v-scroll-animate data-delay="2">{{ babyName }}</h2>
    </section>
      <!-- SETTINGS / DISPLAY CONTENT -->
      <section class="content" v-if="showSettings">
        <!-- GUEST SECTION -->
        <div class="section-block guest-block" v-scroll-animate data-delay="1">
          <p class="value large">{{ guest }}</p>
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

        <!-- MESSAGE SECTION -->
        <div class="section-block message-block" v-scroll-animate data-delay="5">
          <p class="label">Lời nhắn</p>
          <p class="message">Thân mời bạn đến chung vui cùng gia đình chúng tôi trong ngày thôi nôi của bé. Rất mong sự hiện diện của bạn để buổi tiệc thêm ấm cúng.</p>
        </div>
        <footer class="footer" v-scroll-animate data-delay="8">Liên hệ: {{ contact }} — Lưu ý: mặc trang phục tươi sáng.</footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const defaultImage = 'https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg'

const babyName = ref('Bé An')
const guest = ref('Nguyễn Phương Bình An')
const date = ref('2025-12-14')
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

function openMap(){
  const q = encodeURIComponent(location.value)
  window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank')
}

function copyInfo(){
  const text = `Thiệp mời Thôi Nôi — ${babyName.value}\nNgày: ${date.value} \nĐịa điểm: ${location.value} \nLiên hệ: ${contact.value}`
  navigator.clipboard.writeText(text)
    .then(()=> alert('Đã sao chép thông tin thiệp'))
}

function printInvite(){
  showSettings.value = false
  setTimeout(()=> window.print(), 200)
  setTimeout(()=> showSettings.value = true, 800)
}

function sendRsvp(){
  if(!rsvpName.value){ rsvpMsg.value = 'Vui lòng nhập tên.'; return }
  rsvpMsg.value = `Cảm ơn ${rsvpName.value}! Chúng tôi đã nhận phản hồi.`
  rsvpName.value = ''
  setTimeout(()=> rsvpMsg.value = '', 4000)
}

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
  color: #ffffff;
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
  text-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  animation: gradientShift 3s ease infinite, fadeIn 1.2s ease-out;
  position: relative;
  padding: 0.5rem 0;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

.title::before {
  content: '🎊';
  position: absolute;
  left: -4.5rem;
  animation: bounce 2s ease-in-out infinite;
}

.title::after {
  content: '🎊';
  position: absolute;
  right: -4.5rem;
  animation: bounce 2s ease-in-out infinite ;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(-10deg); }
  50% { transform: translateY(-10px) rotate(10deg); }
}
/* ===== ROOT & CARD ===== */
.invite-root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
}
.card {
  width: 100%;
  max-width: 800px;
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(16, 198, 22, 0.1);
}

/* ===== HERO ===== */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem;
  position: relative;
  background: linear-gradient(180deg, #4caf50 0%, #4caf50 100%);
}
.hero::before { content:'🎈'; position:absolute; top:1rem; left:7rem; font-size:2rem;  animation:float 3s ease-in-out infinite; }
.hero::after { content:'🎈'; position:absolute; top:1rem; right:7rem; font-size:2rem;  animation:float 3s ease-in-out infinite 1.5s; }
@keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }

.hero-title h1 {
  font-size:2.2rem; font-weight:700; background:linear-gradient(135deg,#4caf50,#66bb6a);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-align:center; margin:0 0 1.5rem; letter-spacing:0.5px;
}
/* img */
.hero-image { width:100%; max-width:300px; height:300px; border-radius:20px; overflow:hidden; margin-bottom:1.5rem; border:4px solid #fff; box-shadow:0 10px 30px rgba(76,175,80,0.2);}
.hero-image img { width:100%; height:100%; object-fit:cover; transition:transform 0.8s ease-out; }

.hero-baby h2 { font-size:2.5rem; font-weight:800; color:#2e7d32; text-align:center; margin:0; text-shadow:0 2px 8px rgba(46,125,50,0.2); position:relative; padding:0 2rem;}
.hero-baby h2::before, .hero-baby h2::after { content:'✨'; position:absolute; font-size:1.5rem; color:#ffd700; }
.hero-baby h2::before { left:0; animation:sparkle 2s ease-in-out infinite; }
.hero-baby h2::after { right:0; animation:sparkle 2s ease-in-out infinite 1s; }
@keyframes sparkle {0%,100%{opacity:0.3;transform:scale(0.8);}50%{opacity:1;transform:scale(1.2);}}

/* ===== SCROLL ANIMATIONS ===== */
.hero-title,.hero-image,.hero-baby,.section-block{opacity:0; transform:translateY(30px); transition:all 0.8s ease;}
.hero-title.show,.hero-image.show,.hero-baby.show,.section-block.show{opacity:1; transform:translateY(0);}
.hero-image.show img{transform:scale(1);}

/* ===== CONTENT ===== */
.content{padding:2rem 2.5rem; background:#fff;}
.label{font-size:1rem;color:#4caf50;margin-bottom:0.8rem;font-weight:600;text-transform:uppercase;display:flex;align-items:center;gap:0.5rem;}
.label::before{content:'●';color:#81c784;font-size:0.8rem;}
.section-block{margin-bottom:2rem;padding:1.5rem;background:#f9fdf9;border-radius:16px;border:1px solid #e8f5e9;transition:all 0.3s ease;}
.section-block:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(76,175,80,0.1);}

/* ===== CALENDAR ===== */
.calendar{border:2px solid #81c784;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(76,175,80,0.1);}
.calendar-header{background:linear-gradient(135deg,#4caf50,#66bb6a);padding:1rem;text-align:center;font-weight:700;color:#fff;font-size:1.1rem;text-transform:uppercase;}
.calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);padding:1rem;gap:8px;}
.day{padding:10px 0;text-align:center;font-size:0.9rem;border-radius:8px;background:#f1f8e9;color:#558b2f;cursor:default;transition:all 0.2s;}
.day:hover{background:#dcedc8;transform:scale(1.05);}
.day.highlight{background:linear-gradient(135deg,#4caf50,#66bb6a);color:#fff;font-weight:700;font-size:1.1rem;box-shadow:0 4px 12px rgba(76,175,80,0.4);transform:scale(1.1);position:relative;}
.day.highlight::after{content:'🎂';position:absolute;top:-8px;right:-8px;font-size:1rem;}

/* ===== COUNTDOWN ===== */
.countdown-grid{display:flex;justify-content:center;gap:1rem;margin-top:1rem;flex-wrap:wrap;}
.countdown-item{display:flex;flex-direction:column;align-items:center;padding:1.2rem 1.5rem;background:linear-gradient(145deg,#66bb6a,#4caf50);border-radius:16px;min-width:80px;color:#fff;box-shadow:0 6px 20px rgba(76,175,80,0.4),inset 0 -3px 6px rgba(255,255,255,0.3);animation:pulse 2s ease-in-out infinite;position:relative;overflow:hidden;}
.countdown-item::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);transform:rotate(45deg);animation:shimmer 3s infinite;}
@keyframes pulse{0%,100%{box-shadow:0 6px 20px rgba(76,175,80,0.4),inset 0 -3px 6px rgba(255,255,255,0.3);}50%{box-shadow:0 8px 25px rgba(139,195,74,0.6),inset 0 -4px 8px rgba(255,255,255,0.5);}}
@keyframes shimmer{0%{transform:translateX(-100%) translateY(-100%) rotate(45deg);}100%{transform:translateX(100%) translateY(100%) rotate(45deg);}}
.num{font-size:2rem;font-weight:800;text-shadow:0 2px 8px rgba(46,125,50,0.5);font-family:'Courier New', monospace;}
.label-small{font-size:0.75rem;color:#e8f5e9;margin-top:0.5rem;text-transform:uppercase;font-weight:600;}

/* ===== LOCATION ===== */
.location-box{padding:1rem 1.2rem;background:linear-gradient(135deg,#e8f5e9,#f1f8e9);border-radius:12px;border:2px solid #81c784;text-align:center;font-weight:600;font-size:1rem;color:#2e7d32;margin-bottom:1rem;box-shadow:0 2px 8px rgba(76,175,80,0.1);}
.map-container{margin-top:1rem;border-radius:16px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.15);border:3px solid #fff;}

/* ===== MESSAGE ===== */
.message-block .message{line-height:1.8;color:#424242;font-size:1rem;text-align:justify;padding:1rem;background:#fff;border-radius:12px;border-left:4px solid #4caf50;}
/* ===== FOOTER ===== */
.footer{margin-top:2rem;text-align:center;font-size:0.9rem;color:#666;padding:1.5rem;background:#f9fdf9;border-radius:12px;border:1px dashed #c8e6c9;}

/* ===== RESPONSIVE ===== */
@media (max-width:768px){.invite-root{padding:1rem 0.5rem;}.hero{padding:2rem 1rem 1.5rem;}.hero-title h1{font-size:1.8rem;}.hero-image{height:250px;}.hero-baby h2{font-size:2rem;padding:0 1.5rem;}.content{padding:1.5rem 1rem;}.section-block{padding:1rem;}.countdown-grid{gap:0.6rem;}.countdown-item{min-width:70px;padding:1rem 1.2rem;}.num{font-size:1.6rem;}.calendar-grid{gap:4px;padding:0.8rem;}.actions{flex-direction:column;}.btn{width:100%;}}
@media (max-width:480px){.hero-title h1{font-size:1.5rem;}.hero-baby h2{font-size:1.6rem;}.countdown-item{min-width:60px;padding:0.8rem 1rem;}.num{font-size:1.4rem;}}


</style>
