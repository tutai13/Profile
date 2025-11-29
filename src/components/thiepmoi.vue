<template>
  <div class="invite-root">
    <div class="card">
      <!-- HERO SECTION -->
      <section class="hero">
        <h1 class="subtitle" v-scroll-animate data-delay="0">Thiệp</h1>
        <h1 class="title" v-scroll-animate data-delay="0.5">Mời Thôi Nôi</h1>

        <!-- 3 ảnh đứng đẹp như mẫu -->
        <div class="triple-photo" v-scroll-animate data-delay="1">
          <div class="photo-frame">
            <img
              src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg"
              alt="Bé Bình An 1"
            />
          </div>
          <div class="photo-frame middle">
            <img
              src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg"
              alt="Bé Bình An 2"
            />
          </div>
          <div class="photo-frame">
            <img
              src="https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg"
              alt="Bé Bình An 3"
            />
          </div>
        </div>

        <h2 class="baby" v-scroll-animate data-delay="2">Bé Bình An</h2>
      </section>

      <!-- Tên bé trong khung đẹp -->
      <div class="baby-name-framed py-16" v-scroll-animate data-delay="1">
        <div class="name-frame mx-auto">
          <h2 class="name-text">Nguyễn Phương Bình An</h2>
        </div>
      </div>

      <!-- NỘI DUNG CHÍNH -->
      <section class="content" v-if="showSettings">
        <!-- Lời nhắn -->
        <div
          class="section-block message-block"
          v-scroll-animate
          data-delay="5"
        >
          <p class="label">Lời nhắn</p>
          <p class="message">
            Thân mời quý khách đến chung vui cùng gia đình chúng tôi trong ngày
            thôi nôi của bé Bình An. Rất mong được đón tiếp quý khách để buổi
            tiệc thêm phần ấm cúng và trọn vẹn.
          </p>
        </div>

        <!-- Ngày sinh kiểu thiệp thật -->
        <div
          class="section-block birth-real-card"
          v-scroll-animate
          data-delay="6"
        >
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

        <!-- Lịch ngày tổ chức -->
        <div
          class="section-block calendar-block"
          v-scroll-animate
          data-delay="2"
        >
          <div class="calendar">
            <div class="calendar-header">{{ calendarMonth }}</div>
            <div class="calendar-grid">
              <span
                v-for="d in 31"
                :key="d"
                :class="['day', { highlight: d === calendarDay }]"
                >{{ d }}</span
              >
            </div>
          </div>
        </div>

        <!-- Đếm ngược LED -->
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

        <!-- GALLERY ĐƠN GIẢN – SIÊU NHẸ, SIÊU ĐẸP, KHÔNG CRASH SAFARI -->
        <div
          class="section-block gallery-block"
          v-scroll-animate
          data-delay="3.5"
        >
          <p class="label" style="margin-bottom: 20px">Khoảnh khắc của bé</p>
          <div class="simple-gallery">
            <div
              class="gallery-track"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <img
                v-for="(img, i) in galleryImages"
                :key="i"
                :src="img"
                alt="Khoảnh khắc bé"
              />
            </div>
            <button class="prev" @click="prevSlide">‹</button>
            <button class="next" @click="nextSlide">›</button>
          </div>
        </div>

        <!-- Địa điểm -->
        <div
          class="section-block location-block"
          v-scroll-animate
          data-delay="4"
        >
          <p class="label">Địa điểm</p>
          <div class="location-box">
            95 Đồng Kè, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng
          </div>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.534180918249!2d108.1431936153252!3d16.072889776176113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d5079a7285%3A0x3fbce23a7a72671d!2zOTUgxJDhuqFvIEtow6FuaCBCw6FjLCBMw6JuIENow6F1LCDEkMO0w6JuZyBOYW5nIDU1MDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700328754321!5m2!1svi!2s"
              width="100%"
              height="250"
              style="border: 0; border-radius: 12px"
              allowfullscreen=""
              loading="lazy"
            >
            </iframe>
          </div>
        </div>

        <footer class="footer" v-scroll-animate data-delay="8">
          Liên hệ: 0123 456 789 — Vui lòng mặc trang phục tươi sáng
        </footer>

        <!-- Thank you sang trọng -->
        <div class="thank-you-simple" v-scroll-animate data-delay="5.5">
          Thank You
          <span class="underline"></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// DỮ LIỆU
const date = ref("2025-12-07 10:00:00"); // ngày giờ sự kiện
const location = ref("95 Đồng Kè, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng");
const contact = ref("0123 456 789");
const showSettings = ref(true);

// Calendar
const calendarDay = computed(() =>
  Number(date.value.split(" ")[0].split("-")[2])
);
const calendarMonth = computed(() => {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return months[Number(date.value.split(" ")[0].split("-")[1]) - 1];
});

// Countdown
const countdownDays = ref("00");
const countdownHours = ref("00");
const countdownMinutes = ref("00");
const countdownSeconds = ref("00");
let timer = null;

const updateCountdown = () => {
  const target = new Date(date.value).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    countdownDays.value =
      countdownHours.value =
      countdownMinutes.value =
      countdownSeconds.value =
        "00";
    clearInterval(timer);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  countdownDays.value = String(d).padStart(2, "0");
  countdownHours.value = String(h).padStart(2, "0");
  countdownMinutes.value = String(m).padStart(2, "0");
  countdownSeconds.value = String(s).padStart(2, "0");
};

// Simple Gallery (siêu nhẹ)
const galleryImages = ref([
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
  "https://i.pinimg.com/originals/1d/4e/ce/1d4ecef2334c51f3b8b0ca95875b18e5.jpg",
]);
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.value.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + galleryImages.value.length) %
    galleryImages.value.length;
};

// Auto slide
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
  setInterval(nextSlide, 1000); // tự chuyển ảnh mỗi 3.5s
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

// Scroll animate directive
const vScrollAnimate = {
  mounted(el) {
    const delay = el.dataset.delay || 0;
    el.classList.add("scroll-anim");
    el.style.transitionDelay = `${delay * 0.18}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  },
};
</script>

<style scoped>
/* ==== FONTS ==== */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Dancing+Script:wght@700&family=Quicksand&display=swap");

/* ==== ROOT ==== */
.invite-root {
  min-height: 100vh;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  font-family: "Quicksand", sans-serif;
}

.card {
  width: 100%;
  max-width: 1000px;
  border-radius: 20px;
  overflow: hidden;
  background: #f0fdfa;
  box-shadow: 0 20px 60px rgba(16, 194, 121, 0.2);
}

/* ==== HERO ==== */
.hero {
  padding: 3rem 1.5rem 2.5rem;
  text-align: center;
  background: linear-gradient(180deg, #064e3b 0%, #065f46 100%);
  position: relative;
  overflow: hidden;
}

.subtitle {
  font-size: 1.3rem;
  color: #d1fae5;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-weight: 500;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  font-family: "Playfair Display", serif;
  margin: 0.5rem 0 1.5rem;
  background: linear-gradient(135deg, #34d399, #86efac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.triple-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
}

.photo-frame {
  border: 8px solid #fff;
  border-bottom-width: 14px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  width: 28%;
}

.photo-frame.middle {
  transform: translateY(-15px) scale(1.08);
  z-index: 2;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
  display: block;
}

.baby {
  font-size: 2rem;
  color: #ecfdf5;
  margin: 1.5rem 0 0;
  font-weight: 600;
}

/* Tên bé khung đẹp */
.baby-name-framed {
  padding: 2.5rem 1rem;
  text-align: center;
}

.name-frame {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #f8fdf9 0%, #f0fdf4 100%);
  border: double 5px #86efac;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(16, 194, 121, 0.2);
  position: relative;
}

.name-text {
  font-family: "Dancing Script", cursive;
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(120deg, #064e3b, #059669, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

/* Content */
.content {
  padding: 1.5rem 1rem 3rem;
  background: #fff;
}

.label {
  font-size: 0.9rem;
  color: #059669;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.label::before {
  content: "◆";
  color: #34d399;
  font-size: 0.8rem;
}

.section-block {
  margin-bottom: 2rem;
  padding: 1.5rem 1rem;
  background: #f0fdfa;
  border-radius: 16px;
  border: 1px solid #a7f3d0;
}

/* Message */
.message {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #065f46;
  text-align: justify;
}

/* Birth card */
.birth-card {
  background: linear-gradient(135deg, #059669, #047857);
  color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(5, 150, 105, 0.4);
}

.birth-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.birth-time {
  font-size: 1rem;
  margin-bottom: 1.2rem;
}

.birth-date-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.birth-part {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.birth-label {
  font-size: 0.85rem;
  opacity: 0.9;
  margin-bottom: 0.3rem;
}

.birth-big {
  font-size: 3rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  line-height: 1;
}

.slash {
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0.5rem;
}

.birth-year-big {
  font-size: 4rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  line-height: 1;
}

/* Calendar */
.calendar {
  border: 2px solid #86efac;
  border-radius: 16px;
  overflow: hidden;
}

.calendar-header {
  background: linear-gradient(135deg, #059669, #10b981);
  color: #fff;
  padding: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  padding: 1rem;
}

.day {
  padding: 8px 0;
  text-align: center;
  border-radius: 8px;
  background: #ecfdf5;
  font-size: 0.9rem;
}

.day.highlight {
  background: linear-gradient(135deg, #059669, #10b981);
  color: #fff;
  font-weight: 700;
  transform: scale(1.15);
}

/* Countdown */
.countdown-grid {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.countdown-item {
  background: linear-gradient(145deg, #059669, #047857);
  color: #fff;
  padding: 1.2rem 0.8rem;
  border-radius: 12px;
  min-width: 70px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(5, 150, 105, 0.5);
}

.num {
  font-size: 2rem;
  font-weight: 800;
  font-family: "Courier New", monospace;
  line-height: 1;
}

.label-small {
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
  opacity: 0.95;
}

/* Simple Gallery */
.simple-gallery {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.gallery-track {
  display: flex;
  transition: transform 0.6s ease;
}

.gallery-track img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  flex-shrink: 0;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(5, 150, 105, 0.8);
  color: #fff;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.3s ease;
}

.prev:hover,
.next:hover {
  background: rgba(5, 150, 105, 1);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Location */
.location-box {
  background: #ecfdf5;
  padding: 1rem;
  border: 2px solid #86efac;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
}

.map-container iframe {
  width: 100%;
  height: 220px;
  border: 0;
}

/* Footer & Thank you */
.footer {
  text-align: center;
  padding: 1.5rem 1rem;
  background: #f0fdfa;
  border-radius: 16px;
  margin-top: 2rem;
  color: #065f46;
  font-size: 0.9rem;
  line-height: 1.6;
}

.thank-you-simple {
  text-align: center;
  font-size: 3.2rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  margin: 3rem 0 1.5rem;
  background: linear-gradient(135deg, #047857, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  padding-bottom: 20px;
}

.thank-you-simple .underline {
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  width: 55%;
  height: 5px;
  background: #047857;
  border-radius: 3px;
}

/* Scroll animation */
.scroll-anim {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}

.scroll-anim.show {
  opacity: 1;
  transform: translateY(0);
}

/* ==================== RESPONSIVE ==================== */

/* Tablet */
@media (max-width: 768px) {
  .subtitle {
    font-size: 1.1rem;
    letter-spacing: 4px;
  }

  .title {
    font-size: 2.2rem;
  }

  .baby {
    font-size: 1.8rem;
  }

  .name-text {
    font-size: 2rem;
  }

  .birth-title {
    font-size: 1rem;
  }

  .birth-time {
    font-size: 0.95rem;
  }

  .birth-big {
    font-size: 2.6rem;
  }

  .slash {
    font-size: 2rem;
  }

  .birth-year-big {
    font-size: 3.5rem;
  }

  .thank-you-simple {
    font-size: 2.6rem;
  }

  .gallery-track img {
    height: 350px;
  }

  .message {
    font-size: 0.95rem;
  }
}

/* Smartphone */
@media (max-width: 480px) {
  .invite-root {
    padding: 0;
  }

  .card {
    border-radius: 0;
  }

  .hero {
    padding: 2.5rem 1rem 2rem;
  }

  .subtitle {
    font-size: 1rem;
    letter-spacing: 3px;
  }

  .title {
    font-size: 2rem;
  }

  .triple-photo {
    gap: 0.5rem;
  }

  .photo-frame {
    border-width: 6px;
    border-bottom-width: 10px;
    border-radius: 12px;
  }

  .photo-frame.middle {
    transform: translateY(-10px) scale(1.05);
  }

  .baby {
    font-size: 1.6rem;
  }

  .baby-name-framed {
    padding: 2rem 1rem;
  }

  .name-frame {
    padding: 1.5rem 1rem;
    border-width: 4px;
  }

  .name-text {
    font-size: 1.8rem;
  }

  .content {
    padding: 1rem 0.8rem 2.5rem;
  }

  .section-block {
    padding: 1.2rem 0.8rem;
    margin-bottom: 1.5rem;
  }

  .birth-card {
    padding: 1.5rem 1rem;
  }

  .birth-title {
    font-size: 0.9rem;
  }

  .birth-time {
    font-size: 0.85rem;
  }

  .birth-date-row {
    gap: 0.8rem;
  }

  .birth-big {
    font-size: 2.3rem;
  }

  .slash {
    font-size: 1.8rem;
    margin: 0 0.3rem;
  }

  .birth-year-big {
    font-size: 3rem;
  }

  .calendar-grid {
    gap: 4px;
    padding: 0.8rem;
  }

  .day {
    padding: 6px 0;
    font-size: 0.85rem;
  }

  .countdown-grid {
    gap: 0.5rem;
  }

  .countdown-item {
    min-width: 65px;
    padding: 1rem 0.6rem;
  }

  .num {
    font-size: 1.8rem;
  }

  .label-small {
    font-size: 0.7rem;
  }

  .gallery-track img {
    height: 320px;
  }

  .prev,
  .next {
    width: 38px;
    height: 38px;
    font-size: 1.4rem;
  }

  .prev {
    left: 8px;
  }

  .next {
    right: 8px;
  }

  .location-box {
    font-size: 0.9rem;
    padding: 0.9rem;
  }

  .map-container iframe {
    height: 200px;
  }

  .footer {
    font-size: 0.85rem;
    padding: 1.2rem 0.8rem;
  }

  .thank-you-simple {
    font-size: 2.2rem;
    margin: 2.5rem 0 1rem;
  }

  .message {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

/* Smartphone nhỏ */
@media (max-width: 360px) {
  .title {
    font-size: 1.8rem;
  }

  .name-text {
    font-size: 1.6rem;
  }

  .birth-big {
    font-size: 2rem;
  }

  .birth-year-big {
    font-size: 2.6rem;
  }

  .countdown-item {
    min-width: 60px;
    padding: 0.8rem 0.5rem;
  }

  .num {
    font-size: 1.6rem;
  }

  .gallery-track img {
    height: 280px;
  }

  .thank-you-simple {
    font-size: 2rem;
  }
}
</style>
