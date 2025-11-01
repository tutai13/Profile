<script setup>
import { ref, onMounted } from "vue";

const profile = ref({
  name: "LÊ QUỐC KHA",
  title: "Thợ Điện Chuyên Nghiệp",
  about:
    'Với hơn <strong>5 năm kinh nghiệm</strong>, tôi cam kết mang đến dịch vụ <strong>lắp đặt & sửa chữa điện an toàn, hiệu quả, tiết kiệm</strong>. Luôn cập nhật công nghệ mới nhất, tuân thủ nghiêm ngặt tiêu chuẩn TCVN. <br><br>Phương châm: <span class="highlight">"Nhanh – Gọn – Uy Tín – An Toàn Tuyệt Đối"</span>',
  experiences: [
    {
      year: "2020 - Hiện tại",
      title: "Thợ Điện Tự Do",
      description:
        "Nhận dự án dân dụng & công nghiệp. Tư vấn, thiết kế, bảo trì định kỳ.",
    },
    {
      year: "2018 - 2020",
      title: "Thợ Điện Chính – Minh Phát",
      description: "Lắp đặt hệ thống điện cho 50+ công trình vừa & nhỏ.",
    },
    {
      year: "2016 - 2018",
      title: "Thợ Điện – Xưởng An Phước",
      description: "Bảo trì điện công nghiệp, xử lý sự cố 24/7.",
    },
    {
      year: "2014 - 2016",
      title: "Học Nghề – Trung Tâm An Giang",
      description: "Hoàn thành xuất sắc, đạt loại Giỏi.",
    },
  ],
  skills: [
    {
      name: "Lắp Đặt Điện Dân Dụng",
      description: "Nhà ở, chung cư, văn phòng",
      level: 95,
      animatedLevel: 0,
    },
    {
      name: "Điện Công Nghiệp",
      description: "Nhà xưởng, máy móc 3 pha",
      level: 90,
      animatedLevel: 0,
    },
    {
      name: "Chiếu Sáng Thông Minh",
      description: "LED, cảm biến, tiết kiệm điện",
      level: 92,
      animatedLevel: 0,
    },
    {
      name: "Sửa Chữa & Bảo Trì",
      description: "Xử lý sự cố nhanh, bảo dưỡng định kỳ",
      level: 93,
      animatedLevel: 0,
    },
    {
      name: "An Toàn Điện",
      description: "Tuân thủ TCVN, kiểm tra định kỳ",
      level: 97,
      animatedLevel: 0,
    },
    {
      name: "Đọc Bản Vẽ Kỹ Thuật",
      description: "Sơ đồ mạch, AutoCAD cơ bản",
      level: 88,
      animatedLevel: 0,
    },
  ],
  projects: [
    {
      title: "Chung Cư 24 Căn",
      icon: "fa-building",
      tags: ["Dân dụng", "2023"],
    },
    {
      title: "Xưởng Nội Thất 500m²",
      icon: "fa-industry",
      tags: ["Công nghiệp", "2022"],
    },
    {
      title: "Nhà Hàng Sân Vườn",
      icon: "fa-utensils",
      tags: ["Chiếu sáng", "2023"],
    },
    {
      title: "Biệt Thự Smart Home",
      icon: "fa-home",
      tags: ["Tự động hóa", "2024"],
    },
    { title: "Trường Mầm Non", icon: "fa-school", tags: ["An toàn", "2023"] },
    {
      title: "Siêu Thị Mini",
      icon: "fa-shopping-cart",
      tags: ["Tiết kiệm", "2024"],
    },
  ],
  certifications: [
    {
      name: "Thợ Điện Bậc 4/7",
      org: "Sở LĐTBXH An Giang",
      year: "2018",
      icon: "fa-certificate",
    },
    {
      name: "An Toàn Điện Cao Áp",
      org: "Tổng Công Ty Điện Lực",
      year: "2019",
      icon: "fa-bolt",
    },
    {
      name: "Điện Mặt Trời",
      org: "Trung Tâm Năng Lượng",
      year: "2021",
      icon: "fa-solar-panel",
    },
    {
      name: "Thiết Kế LED",
      org: "Hiệp Hội Chiếu Sáng",
      year: "2022",
      icon: "fa-lightbulb",
    },
  ],
  personality: [
    { name: "Nhanh Nhẹn", icon: "fa-bolt" },
    { name: "Tận Tâm", icon: "fa-heart" },
    { name: "Chuyên Nghiệp", icon: "fa-briefcase" },
    { name: "Đúng Giờ", icon: "fa-clock" },
    { name: "An Toàn", icon: "fa-shield-alt" },
    { name: "Sáng Tạo", icon: "fa-lightbulb" },
  ],
  services: [
    {
      name: "Lắp Đặt Điện Mới",
      time: "2-5 ngày",
      price: "80K/m²",
      status: "Có sẵn",
      class: "available",
    },
    {
      name: "Sửa Chữa Điện",
      time: "2-4 giờ",
      price: "200K+",
      status: "Phổ biến",
      class: "popular",
    },
    {
      name: "Bảo Trì Định Kỳ",
      time: "1-2 giờ",
      price: "300K+",
      status: "Có sẵn",
      class: "available",
    },
    {
      name: "Lắp Đèn LED",
      time: "0.5-2 ngày",
      price: "150K/điểm",
      status: "Phổ biến",
      class: "popular",
    },
    {
      name: "Cải Tạo Hệ Thống",
      time: "3-7 ngày",
      price: "100K/m²",
      status: "Có sẵn",
      class: "available",
    },
    {
      name: "Tư Vấn Miễn Phí",
      time: "1 giờ",
      price: "Miễn phí",
      status: "Luôn sẵn",
      class: "free",
    },
  ],
  contact: {
    phone: "038 5258524",
    email: "lequockha@gmail.com",
    location: "Châu Thành, An Giang",
    hours: "7:00 - 18:00 (T2-T7)",
  },
});

const animatedExperience = ref(0);
const animatedProjects = ref(0);
const animatedClients = ref(0);

const randomPosition = (n) => `${(n * 6.7) % 100}%`;
const randomDelay = (n) => `${(n % 5) * 0.3}s`;
const randomDuration = (n) => `${4 + (n % 3)}s`;

const animateNumbers = () => {
  const duration = 2000,
    steps = 60;
  const targets = { exp: 5, proj: 150, client: 200 };
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const p = Math.min(step / steps, 1);
    animatedExperience.value = Math.floor(targets.exp * p);
    animatedProjects.value = Math.floor(targets.proj * p);
    animatedClients.value = Math.floor(targets.client * p);
    if (step >= steps) clearInterval(interval);
  }, duration / steps);
};

const animateSkills = () => {
  setTimeout(() => {
    profile.value.skills.forEach((s, i) => {
      setTimeout(() => (s.animatedLevel = s.level), i * 180);
    });
  }, 600);
};

const handleContact = () => {
  alert(`Liên hệ ngay: ${profile.value.contact.phone}`);
};

onMounted(() => {
  animateNumbers();
  animateSkills();
});
</script>

<template>
  <div class="app-container">
    <div class="profile-card">
      <!-- HEADER -->
      <header class="header">
        <div class="particles">
          <div
            v-for="n in 25"
            :key="n"
            class="spark"
            :style="{
              left: randomPosition(n),
              animationDelay: randomDelay(n),
              animationDuration: randomDuration(n),
            }"
          ></div>
        </div>

        <div class="avatar">
          <i class="fas fa-bolt"></i>
        </div>
        <h1 class="name">{{ profile.name }}</h1>
        <p class="title">{{ profile.title }}</p>

        <div class="stats">
          <div class="stat">
            <div class="number">{{ animatedExperience }}+</div>
            <div class="label">Năm kinh nghiệm</div>
          </div>
          <div class="stat">
            <div class="number">{{ animatedProjects }}+</div>
            <div class="label">Dự án hoàn thành</div>
          </div>
          <div class="stat">
            <div class="number">{{ animatedClients }}+</div>
            <div class="label">Khách hài lòng</div>
          </div>
        </div>
      </header>

      <!-- CONTENT -->
      <main class="content">
        <!-- ABOUT -->
        <section class="section">
          <h2 class="section-title">Giới Thiệu</h2>
          <div class="about-text" v-html="profile.about"></div>
        </section>

        <!-- EXPERIENCE -->
        <section class="section">
          <h2 class="section-title">Kinh Nghiệm</h2>
          <div class="timeline">
            <div
              v-for="exp in profile.experiences"
              :key="exp.year"
              class="timeline-item"
            >
              <div class="year">{{ exp.year }}</div>
              <div class="exp-title">{{ exp.title }}</div>
              <div class="exp-desc">{{ exp.description }}</div>
            </div>
          </div>
        </section>

        <!-- SKILLS -->
        <section class="section">
          <h2 class="section-title">Kỹ Năng</h2>
          <div class="skills-grid">
            <div v-for="s in profile.skills" :key="s.name" class="skill-card">
              <div class="skill-header">
                <div class="skill-name">{{ s.name }}</div>
                <div class="skill-level">{{ s.level }}%</div>
              </div>
              <div class="skill-desc">{{ s.description }}</div>
              <div class="skill-bar">
                <div
                  class="fill"
                  :style="{ width: s.animatedLevel + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <!-- PROJECTS -->
        <section class="section">
          <h2 class="section-title">Dự Án Nổi Bật</h2>
          <div class="projects-grid">
            <div
              v-for="p in profile.projects"
              :key="p.title"
              class="project-card"
            >
              <div class="project-icon">
                <i :class="['fas', p.icon]"></i>
              </div>
              <div class="project-info">
                <h3>{{ p.title }}</h3>
                <div class="tags">
                  <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CERTIFICATIONS -->
        <section class="section">
          <h2 class="section-title">Chứng Chỉ</h2>
          <div class="certs-grid">
            <div
              v-for="c in profile.certifications"
              :key="c.name"
              class="cert-card"
            >
              <div class="cert-icon">
                <i :class="['fas', c.icon]"></i>
              </div>
              <div class="cert-name">{{ c.name }}</div>
              <div class="cert-org">{{ c.org }} • {{ c.year }}</div>
            </div>
          </div>
        </section>

        <!-- PERSONALITY -->
        <section class="section">
          <h2 class="section-title">Phong Cách Làm Việc</h2>
          <div class="traits-grid">
            <div
              v-for="t in profile.personality"
              :key="t.name"
              class="trait-card"
            >
              <div class="trait-icon">
                <i :class="['fas', t.icon]"></i>
              </div>
              <div class="trait-name">{{ t.name }}</div>
            </div>
          </div>
        </section>

        <!-- PRICING -->
        <section class="section">
          <h2 class="section-title">Bảng Giá Dịch Vụ</h2>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Dịch Vụ</th>
                  <th>Thời Gian</th>
                  <th>Giá</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s in profile.services" :key="s.name">
                  <td>
                    <strong>{{ s.name }}</strong>
                  </td>
                  <td>{{ s.time }}</td>
                  <td class="price">{{ s.price }}</td>
                  <td>
                    <span :class="['status', s.class]">{{ s.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- CONTACT -->
        <section class="section contact-section">
          <h2 class="contact-title">Liên Hệ Ngay!</h2>
          <p class="contact-subtitle">
            Tư vấn miễn phí – Phản hồi trong 30 phút
          </p>
          <div class="contact-grid">
            <div class="contact-card">
              <div class="c-icon"><i class="fas fa-phone"></i></div>
              <div class="c-label">Điện thoại</div>
              <div class="c-value">{{ profile.contact.phone }}</div>
            </div>
            <div class="contact-card">
              <div class="c-icon"><i class="fas fa-envelope"></i></div>
              <div class="c-label">Email</div>
              <div class="c-value">{{ profile.contact.email }}</div>
            </div>
            <div class="contact-card">
              <div class="c-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div class="c-label">Địa chỉ</div>
              <div class="c-value">{{ profile.contact.location }}</div>
            </div>
            <div class="contact-card">
              <div class="c-icon"><i class="fas fa-clock"></i></div>
              <div class="c-label">Giờ làm</div>
              <div class="c-value">{{ profile.contact.hours }}</div>
            </div>
          </div>
          <button class="cta-btn" @click="handleContact">
            Gọi Ngay – Báo Giá Miễn Phí
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* === TOÀN BỘ CSS GIỮ NGUYÊN – CHỈ SỬA ICON === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 20px;
  font-family: "Segoe UI", Tahoma, sans-serif;
}
.profile-card {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.9s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes spark {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) scale(1.2);
    opacity: 0;
  }
}

/* HEADER */
.header {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 90px 40px 70px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.spark {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #fbbf24;
  border-radius: 50%;
  box-shadow: 0 0 8px #fbbf24;
  animation: spark linear infinite;
}

.avatar {
  width: 160px;
  height: 160px;
  margin: 0 auto 20px;
  background: radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 68px;
  color: white;
  border: 8px solid white;
  box-shadow: 0 0 0 8px #3b82f6, 0 0 40px rgba(251, 191, 36, 0.5);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
}

.name {
  font-size: 40px;
  font-weight: 800;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  letter-spacing: 1.5px;
}
.title {
  font-size: 22px;
  color: #dbeafe;
  margin: 12px 0 30px;
  font-weight: 500;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}
.stat {
  text-align: center;
  color: white;
}
.number {
  font-size: 38px;
  font-weight: 900;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.label {
  font-size: 14px;
  opacity: 0.9;
  margin-top: 4px;
}

/* CONTENT */
.content {
  padding: 60px 40px;
}
.section {
  margin-bottom: 60px;
  animation: fadeIn 0.8s ease-out both;
}
.section:nth-child(1) {
  animation-delay: 0.1s;
}
.section:nth-child(2) {
  animation-delay: 0.2s;
}
.section:nth-child(3) {
  animation-delay: 0.3s;
}
.section:nth-child(4) {
  animation-delay: 0.4s;
}
.section:nth-child(5) {
  animation-delay: 0.5s;
}
.section:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.section-title::before {
  content: "";
  width: 6px;
  height: 36px;
  background: linear-gradient(#f59e0b, #f97316);
  border-radius: 3px;
}

.about-text {
  font-size: 16.5px;
  line-height: 1.9;
  color: #475569;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 24px;
  border-radius: 16px;
  border-left: 5px solid #f59e0b;
}
.highlight {
  color: #ea580c;
  font-weight: 600;
}

/* ICONS */
.project-icon,
.cert-icon,
.trait-icon,
.c-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
}
.project-icon {
  height: 160px;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
}
.cert-icon,
.trait-icon {
  font-size: 42px;
  margin-bottom: 12px;
  color: #f59e0b;
}
.c-icon {
  font-size: 38px;
  margin-bottom: 12px;
  color: white;
}

/* TIMELINE, SKILLS, PROJECTS, TABLE, CONTACT – GIỮ NGUYÊN */
.timeline {
  position: relative;
  padding-left: 40px;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(#3b82f6, #1d4ed8);
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  margin-bottom: 32px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 14px;
  transition: all 0.3s ease;
}
.timeline-item:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
}
.timeline-item::before {
  content: "";
  position: absolute;
  left: -34px;
  top: 24px;
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #3b82f6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.skill-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  transition: all 0.4s ease;
}
.skill-card:hover {
  transform: translateY(-6px);
  border-color: #3b82f6;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.2);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.project-card:hover {
  transform: scale(1.04);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.certs-grid,
.traits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}
.cert-card,
.trait-card {
  background: #f8fafc;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  transition: all 0.3s ease;
  border-left: 5px solid #f59e0b;
}
.cert-card:hover,
.trait-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(251, 158, 11, 0.15);
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: linear-gradient(135deg, #1e40af, #3b82f6);
}
th {
  padding: 18px;
  text-align: left;
  color: white;
  font-weight: 600;
  font-size: 15px;
}
td {
  padding: 16px 18px;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}
tbody tr:hover {
  background: #f8fafc;
}
.price {
  font-weight: 700;
  color: #ea580c;
}
.status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}
.available {
  background: #d1fae5;
  color: #065f46;
}
.popular {
  background: #fff7ed;
  color: #92400e;
}
.free {
  background: #ecfdf5;
  color: #065f46;
}

.contact-section {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  padding: 60px 40px;
  border-radius: 20px;
  color: white;
  text-align: center;
}
.contact-title {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 12px;
}
.contact-subtitle {
  font-size: 17px;
  opacity: 0.95;
  margin-bottom: 36px;
  margin-bottom: 32px;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}
.contact-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  padding: 24px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.contact-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-6px);
}
.c-label {
  font-size: 13px;
  opacity: 0.9;
  margin-bottom: 6px;
}
.c-value {
  font-size: 18px;
  font-weight: 700;
}

.cta-btn {
  background: #fbbf24;
  color: #1e293b;
  padding: 16px 42px;
  border: none;
  border-radius: 30px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
}
.cta-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 35px rgba(251, 191, 36, 0.5);
  background: #f59e0b;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header {
    padding: 60px 20px 50px;
  }
  .name {
    font-size: 32px;
  }
  .content {
    padding: 40px 20px;
  }
  .section-title {
    font-size: 24px;
  }
  .stats {
    gap: 20px;
  }
}
</style>
