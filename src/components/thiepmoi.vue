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

        <!-- Lịch ngày tổ chức -->
        <div
          class="section-block calendar-block"
          v-scroll-animate
          data-delay="2"
        >
          <p class="label">Ngày tổ chức</p>
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
  padding: 2rem 1rem;
  font-family: "Quicksand", sans-serif;
}
.card {
  width: 100%;
  max-width: 1000px;
  border-radius: 28px;
  overflow: hidden;
  background: #f0fdfa;
  box-shadow: 0 20px 60px rgba(16, 194, 121, 0.2);
}

/* ==== HERO ==== */
.hero {
  padding: 4rem 2rem 3rem;
  text-align: center;
  background: linear-gradient(180deg, #064e3b 0%, #065f46 100%);
  position: relative;
  overflow: hidden;
}
.subtitle {
  font-size: 1.6rem;
  color: #d1fae5;
  letter-spacing: 8px;
  text-transform: uppercase;
  font-weight: 500;
}
.title {
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  font-family: "Playfair Display", serif;
  margin: 0.5rem 0 2rem;
  background: linear-gradient(135deg, #34d399, #86efac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.triple-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
}
.photo-frame {
  border: 14px solid #fff;
  border-bottom-width: 20px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.photo-frame.middle {
  transform: translateY(-20px) scale(1.1);
  z-index: 2;
}
.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
}
.baby {
  font-size: 2.4rem;
  color: #ecfdf5;
  margin: 2rem 0 0;
  font-weight: 600;
}

/* Tên bé khung đẹp */
.baby-name-framed {
  padding: 4rem 2rem;
  text-align: center;
}
.name-frame {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8fdf9 0%, #f0fdf4 100%);
  border: double 7px #86efac;
  border-radius: 32px;
  box-shadow: 0 15px 40px rgba(16, 194, 121, 0.2);
  position: relative;
}
.name-text {
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(120deg, #064e3b, #059669, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Content */
.content {
  padding: 2rem 2rem 4rem;
  background: #fff;
}
.label {
  font-size: 1rem;
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
  font-size: 0.9rem;
}
.section-block {
  margin-bottom: 2.5rem;
  padding: 1.8rem;
  background: #f0fdfa;
  border-radius: 20px;
  border: 1px solid #a7f3d0;
}

/* Birth card */
.birth-card {
  background: linear-gradient(135deg, #059669, #047857);
  color: #fff;
  padding: 2.5rem 2rem;
  border-radius: 28px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(5, 150, 105, 0.4);
}
.birth-title {
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.birth-time {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.birth-date-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.birth-big {
  font-size: 4rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
}
.birth-year-big {
  font-size: 5.5rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
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
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 1rem;
}
.day {
  padding: 10px 0;
  text-align: center;
  border-radius: 8px;
  background: #ecfdf5;
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
  gap: 1rem;
  flex-wrap: wrap;
}
.countdown-item {
  background: linear-gradient(145deg, #059669, #047857);
  color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  min-width: 85px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(5, 150, 105, 0.5);
}
.num {
  font-size: 2.4rem;
  font-weight: 800;
  font-family: "Courier New", monospace;
}
.label-small {
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
}

/* Simple Gallery – SIÊU NHẸ */
.simple-gallery {
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}
.gallery-track {
  display: flex;
  transition: transform 0.6s ease;
}
.gallery-track img {
  width: 100%;
  height: 520px;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: 10;
}
.prev {
  left: 15px;
}
.next {
  right: 15px;
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
}

/* Footer & Thank you */
.footer {
  text-align: center;
  padding: 2rem;
  background: #f0fdfa;
  border-radius: 16px;
  margin-top: 2rem;
  color: #065f46;
}
.thank-you-simple {
  text-align: center;
  font-size: 4.5rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  margin: 4rem 0 2rem;
  background: linear-gradient(135deg, #047857, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
.thank-you-simple .underline {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 60%;
  height: 6px;
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

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2.6rem;
  }
  .birth-big {
    font-size: 3rem;
  }
  .birth-year-big {
    font-size: 4.5rem;
  }
  .name-text {
    font-size: 2.4rem;
  }
  .thank-you-simple {
    font-size: 3rem;
  }
  .countdown-item {
    min-width: 70px;
    padding: 1.2rem 0.8rem;
  }
  .num {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .triple-photo {
    gap: 0.5rem;
  }
  .photo-frame {
    border-width: 8px;
    border-bottom-width: 12px;
  }
  .photo-frame.middle {
    transform: translateY(-10px) scale(1.05);
  }
}
</style>
