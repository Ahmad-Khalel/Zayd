/* ثانوية زيد بن حارثة - نسخة HTML/CSS/JS مستقلة
   جميع البيانات تجريبية وتُحفظ في متصفح المستخدم فقط. */

const SITE = {
  name: "ثانوية زيد بن حارثة الشرعية",
  phone: "0939 623 830",
  whatsapp: "963939623830",
  email: "ZaydSharia@proton.me",
  address: "سورية - ريف دمشق - عين التينة",
  donationAccount: "0541ce966968ea22969d206dad3ce16e",
  socials: {
    Facebook: "https://facebook.com/ZaydSharia",
    Instagram: "https://instagram.com/ZaydSharia",
    Telegram: "https://t.me/ZaydSharia",
    YouTube: "https://youtube.com/ZaydSharia",
  },
};

const STORAGE = {
  admissions: "zayd_static_admissions",
  messages: "zayd_static_messages",
  students: "zayd_static_students",
  news: "zayd_static_news",
  settings: "zayd_static_settings",
  sharia: "zayd_static_sharia",
  educational: "zayd_static_educational",
  admin: "zayd_static_admin",
};

const defaultNews = [
  { id: "n1", title: "فتح باب الانتساب للعام الدراسي الجديد", date: "2026-08-01", category: "إعلانات", text: "تعلن المدرسة عن بدء استقبال طلبات الانتساب للطلاب الراغبين بالدراسة الشرعية والعامة." },
  { id: "n2", title: "لقاء تعريفي لأولياء الأمور", date: "2026-07-21", category: "نشاطات", text: "لقاء تعريفي يوضح مسار الدراسة وآلية المتابعة والتواصل مع إدارة المدرسة." },
  { id: "n3", title: "إصدار ملفات المنهج الشرعي", date: "2026-07-10", category: "المناهج", text: "تم تحديث قسم المناهج وإضافة ملف التجويد للصف الأول الإعدادي." },
];

const defaultStudents = [
  { id: "st1", name: "أحمد محمد", grade: "الصف الأول الإعدادي الشرعي", phone: "09XXXXXXXX", attendance: 94, note: "طالب مجتهد" },
  { id: "st2", name: "عبد الرحمن خالد", grade: "الصف الثاني الثانوي الشرعي العلمي", phone: "09XXXXXXXX", attendance: 88, note: "متابعة جيدة" },
];

const defaultSharia = [
  ["الصف الأول الإعدادي الشرعي", ["التجويد والاستحفاظ", "التفسير", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "الدعوة والخطابة", "السيرة النبوية", "الشمائل النبوية"]],
  ["الصف الثاني الإعدادي الشرعي", ["التجويد والاستحفاظ", "التفسير", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "الدعوة والخطابة", "السيرة النبوية", "الشمائل النبوية"]],
  ["الصف الثالث الإعدادي الشرعي", ["التجويد والاستحفاظ", "التفسير", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "الدعوة والخطابة"]],
  ["الصف الأول الثانوي الشرعي العلمي", ["التجويد والاستحفاظ", "التفسير التحليلي", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "الدعوة والإعلام", "السيرة النبوية", "علم الفرائض", "فن الحوار وأدب الاختلاف", "أصول الفقه وتاريخ التشريع"]],
  ["الصف الثاني الثانوي الشرعي العلمي", ["التجويد والاستحفاظ", "التفسير التحليلي", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "الدعوة والإعلام", "السيرة النبوية", "علم الفرائض", "مصطلح الحديث", "علوم القرآن"]],
  ["الصف الثالث الثانوي الشرعي العلمي", ["التجويد والاستحفاظ", "التفسير التحليلي", "الحديث النبوي الشريف", "الفقه الإسلامي الشافعي", "العقيدة الإسلامية", "علم الفرائض", "مصطلح الحديث", "أصول الفقه وتاريخ التشريع"]],
];

const defaultEducational = [
  ["المرحلة الإعدادية (الصفوف 7 — 9)", ["اللغة العربية", "اللغة الإنكليزية", "اللغة الفرنسية", "الرياضيات", "الاجتماعيات", "علم الأحياء والأرض", "الفيزياء والكيمياء", "تكنولوجيا المعلومات والاتصالات"]],
  ["الصف الأول الثانوي الشرعي العلمي", ["اللغة العربية", "اللغة الإنكليزية", "اللغة الفرنسية", "الرياضيات", "التاريخ", "الجغرافيا", "الفلسفة", "علم الأحياء والأرض", "الفيزياء", "الكيمياء", "تكنولوجيا المعلومات والاتصالات"]],
  ["الصف الثاني الثانوي الشرعي العلمي", ["اللغة العربية", "اللغة الإنكليزية", "اللغة الفرنسية", "الرياضيات", "الفلسفة", "علم الأحياء والأرض", "الفيزياء", "الكيمياء", "تكنولوجيا المعلومات والاتصالات"]],
  ["الصف الثالث الثانوي الشرعي العلمي", ["اللغة العربية", "اللغة الإنكليزية", "اللغة الفرنسية", "الرياضيات", "علم الأحياء", "الفيزياء", "الكيمياء"]],
];

// دوال مساعدة
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const get = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
const formatDate = (value) => new Intl.DateTimeFormat("ar-SY", { dateStyle: "medium" }).format(new Date(value));
const id = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

function toast(message, error = false) {
  const region = $("#toast-region");
  const item = document.createElement("div");
  item.className = `toast${error ? " error" : ""}`;
  item.textContent = message;
  region.appendChild(item);
  setTimeout(() => item.remove(), 3800);
}

// ===== تخطيط الصفحة =====
function layout(content, active = "") {
  const links = [
    ["#", "الرئيسية", "home"],
    ["#about", "عن الثانوية", "about"],
    ["#admissions", "الانتساب", "admissions"],
    ["#curriculum", "المناهج", "curriculum"],
    ["#news", "الأخبار", "news"],
    ["#contact", "تواصل معنا", "contact"],
  ];
  return `
    <a class="skip-link" href="#main">تجاوز إلى المحتوى</a>
    <header class="navbar" id="navbar"><div class="container nav-inner">
      <a class="brand" href="#">
        <img src="assets/logo.png" alt="شعار المدرسة" onerror="this.src='assets/logo-profile.png'" />
        <div class="brand-text">
          <img src="assets/zayd-name2.png" alt="ثانوية زيد بن حارثة" />
        </div>
      </a>
      <nav class="nav-links" id="nav-links" aria-label="التنقل الرئيسي">
        ${links.map(([href, label, key]) => `<a class="${active === key ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        <a class="${active === "parents" ? "active" : ""}" href="#parents">بوابة الأهل</a>
        <a class="${active === "donate" ? "active" : ""}" href="#donate">التبرع</a>
        <a class="${active === "admin" ? "active" : ""}" href="#admin">الإدارة</a>
      </nav>
      <div class="nav-actions">
        <button class="icon-btn" id="theme-toggle" title="تبديل الوضع" aria-label="تبديل الوضع">
          <i class="fa-regular fa-moon"></i> <!-- سيتم تبديله بين fa-moon و fa-sun -->
        </button>
        <button class="menu-btn" id="menu-toggle" aria-label="فتح القائمة"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div></header>
    <!-- فاصل بين الهيدر والمحتوى -->
    <main id="main">${content}</main>
    <!-- زر الواتساب الطافي -->
    <a class="whatsapp-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="التواصل عبر واتساب"><i class="fa-brands fa-whatsapp"></i></a>
    ${footer()}
  `;
}

function footer() {
  return `<footer class="footer"><div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="#">
          <img src="assets/zayd-logo1.png" alt="شعار الثانوية" />
          <div class="brand-text">
            <img src="assets/zayd-name4.png" alt="ثانوية زيد بن حارثة" style="width:170px;" />
          </div>
        </a>
        <div class="footer-bottom1"></div>
        <p>صرح تربوي يجمع بين أصالة العلم الشرعي وجودة التعليم، <br> ويصنع بيئة آمنة لنمو الطالب علماً وخلقاً.</p>
      </div>
      <div>
        <h3>روابط سريعة</h3>
        <div class="footer-links">
          <a href="#about">عن الثانوية</a>
          <a href="#admissions">التسجيل والانتساب</a>
          <a href="#curriculum">المناهج الدراسية</a>
          <a href="#parents">بوابة الأهل</a>
        </div>
      </div>
      <div>
        <h3>تواصل معنا</h3>
        <div class="footer-links">
          <a href="tel:${SITE.phone.replaceAll(" ", "")}"><i class="fa-solid fa-phone"></i> ${SITE.phone}</a>
          <a href="mailto:${SITE.email}"><i class="fa-solid fa-envelope"></i> ${SITE.email}</a>
          <span><i class="fa-solid fa-location-dot"></i> ${SITE.address}</span>
          <div class="socials">
            ${Object.entries(SITE.socials).map(([name, url]) => `<a href="${url}" target="_blank" rel="noreferrer"><i class="fa-brands fa-${name.toLowerCase()}"></i> ${name}</a>`).join("")}
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ثانوية زيد بن حارثة — جميع الحقوق محفوظة</span>
      <span>By <a href="https://AhmadKhalel.com" target="_blank"> Ahmad Khalel </a> </span>
    </div>
  </div></footer>`;
}

// ===== الصفحات =====
function homePage() {
  const news = get(STORAGE.news, defaultNews).slice(0, 3);
  return layout(`
    <section class="hero"><div class="container hero-grid">
      <div><span class="eyebrow">بوابة العلم والتربية</span><h1>نبني جيلاً راسخ العلم، <span>رفيع الخلق</span></h1><p>في ثانوية زيد بن حارثة نرافق أبناءنا في رحلة تجمع القرآن والعلم، وتمنحهم أساساً متيناً لمستقبل واثق ومشرق.</p><div class="hero-actions"><a class="btn btn-primary" href="#admissions"><i class="fa-solid fa-arrow-left"></i> ابدأ رحلة التسجيل</a><a class="btn btn-secondary" href="#about">تعرّف إلى المدرسة</a></div></div>
      <div class="hero-art">
        <img class="hero-logo" src="assets/Zayd-view.png" alt="شعار ثانوية زيد بن حارثة" onerror="this.src='assets/logo.png'" />
        <div class="hero-badge one">تعليم شرعي وأكاديمي</div>
        <div class="hero-badge two">بيئة آمنة ومحفزة</div>
      </div>
    </div></section>
    <br><br><br><br><br><br>
    <section class="stats"><div class="container stats-grid"><div class="stat"><strong>3+</strong><span>سنوات من العطاء</span></div><div class="stat"><strong>12</strong><span>مساراً تعليمياً</span></div><div class="stat"><strong>100%</strong><span>اهتمام ومتابعة</span></div><div class="stat"><strong>24/7</strong><span>تواصل مع الأهل</span></div></div></section>
    <section class="section"><div class="container"><div class="section-head center"><span class="section-kicker">لماذا زيد بن حارثة؟</span><h2>تعليم يلامس العقل والقلب</h2><p>نقدم تجربة تربوية متوازنة تجعل الطالب محباً للعلم، معتزاً بهويته، وقادراً على صناعة أثره.</p></div><div class="features-grid">${[
      ["تعليم شرعي أصيل", "منهج متدرج في القرآن والتجويد والفقه والحديث والسيرة."],
      ["منهاج متكامل", "نوازن بين المواد الشرعية والمواد الأكاديمية وفق احتياجات الطالب."],
      ["متابعة مستمرة", "تواصل فاعل مع ولي الأمر وملاحظة دقيقة لتقدم كل طالب."],
      ["بيئة آمنة", "أجواء تربوية تحترم الطالب وتشجعه على السؤال والمبادرة."],
      ["كادر متخصص", "معلمون يحملون رسالة التعليم ويجمعون الخبرة بالرحمة."],
      ["مستقبل واعد", "مهارات ومعارف تساعد الطالب على مواصلة دراسته بثقة."],
    ].map(([title, text]) => `<article class="card fade-in"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container split"><div class="image-card"><img src="assets/Zayd-view.png" alt="هوية المدرسة" /></div><div><span class="section-kicker">رسالتنا</span><h2>نزرع اليوم ما يثمر غداً</h2><p class="lead">نؤمن أن التربية ليست معلومات تحفظ فحسب، بل علاقة تبني الإنسان وتمنحه معنى ومسؤولية. لذلك نعمل على أن يكون الطالب متوازناً في علمه، سلوكه، وثقته بنفسه.</p><ul class="check-list"><li>إتقان القرآن الكريم ومبادئ العلوم الشرعية.</li><li>تحصيل أكاديمي يفتح أبواب التعليم الجامعي.</li><li>تنمية الشخصية والآداب وروح التعاون.</li><li>شراكة مستمرة مع الأسرة في متابعة الطالب.</li></ul><a class="btn btn-primary" href="#about">المزيد عن المدرسة</a></div></div></section>
    <section class="section purple-band"><div class="container cta"><div><span class="section-kicker">خطوتك الأولى تبدأ هنا</span><h2>هل تبحث عن بيئة يتعلم فيها ابنك ويزدهر؟</h2><p>اطلع على شروط الانتساب وقدّم طلبك خلال دقائق.</p></div><a class="btn btn-primary" href="#admissions">بوابة الانتساب</a></div></section>
    <section class="section"><div class="container"><div class="section-head"><span class="section-kicker">آخر المستجدات</span><h2>أخبار المدرسة وإعلاناتها</h2></div><div class="news-grid">${news.map(newsCard).join("")}</div></div></section>
  `, "home");
}

function newsCard(item) {
  return `<article class="card news-card fade-in"><div class="news-thumb">✦</div><div class="news-content"><span class="news-date">${formatDate(item.date)} · ${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><button class="btn btn-ghost btn-sm" data-news="${item.id}">قراءة المزيد</button></div></article>`;
}

function aboutPage() {
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / عن المدرسة</span><h1>عن ثانوية زيد بن حارثة</h1><p class="lead">تربية تجمع بين أصالة المنهج الشرعي ومتطلبات التعليم الحديث.</p></div></section>
    <section class="section"><div class="container split"><div class="prose"><span class="section-kicker">من نحن</span><h2>مدرسة ترى في التعليم أمانة وبناءً للإنسان</h2><p>ثانوية زيد بن حارثة مؤسسة تعليمية تهتم بتكوين الطالب تكويناً متوازناً، يجمع بين العلم النافع والأخلاق الحسنة والمهارات التي يحتاجها في حياته.</p><p>نعمل ضمن بيئة تحفز على حفظ القرآن وفهمه، وتقدم تعليماً أكاديمياً منظماً، مع متابعة مستمرة للطالب وشراكة حقيقية مع أسرته.</p></div><div class="image-card"><img src="assets/zayd-logo.png" alt="شعار المدرسة" /></div></div></section>
    <section class="section"><div class="container"><div class="section-head center"><span class="section-kicker">قيمنا</span><h2>قيم نعيشها كل يوم</h2></div><div class="values-grid">${[["الأمانة","نؤدي رسالتنا بإخلاص ومسؤولية."],["الإتقان","نبحث عن أفضل طريقة ليتعلم الطالب."],["الرحمة","نربي بالحوار والاحترام والاحتواء."],["الانتماء","نصنع مجتمعاً مدرسياً متعاوناً."]].map(([t,p]) => `<article class="card value-card fade-in"><h3>${t}</h3><p>${p}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="section-head"><span class="section-kicker">رؤيتنا ورسالتنا</span><h2>منهج واضح، وأثر ممتد</h2></div><div class="features-grid"><article class="card fade-in"><h3>الرؤية</h3><p>الريادة في بناء جيل مسلم واعٍ، متعلم، وفاعل في مجتمعه.</p></article><article class="card fade-in"><h3>الرسالة</h3><p>تقديم تعليم شرعي وأكاديمي متكامل ضمن بيئة آمنة ومحفزة.</p></article><article class="card fade-in"><h3>الهدف</h3><p>تمكين الطالب من أدوات العلم والشخصية ليواصل طريقه بثقة.</p></article></div></div></section>`, "about");
}

function admissionsPage() {
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / الانتساب</span><h1>بوابة الانتساب والتسجيل</h1><p class="lead">املأ الطلب، وسيتواصل معك فريق المدرسة لمتابعة الخطوات.</p></div></section>
    <section class="section"><div class="container split"><div><span class="section-kicker">قبل أن تبدأ</span><h2>خطوات واضحة لتسجيل أسهل</h2><ul class="check-list"><li>تأكد من اختيار الصف المناسب للطالب.</li><li>جهّز الوثائق المطلوبة عند التواصل مع الإدارة.</li><li>أرسل بيانات صحيحة ليتم التواصل معك بسرعة.</li><li>الطلب الأولي لا يعني القبول النهائي.</li></ul><div class="notice">بعد إرسال الطلب سيظهر لك رقم متابعة. احتفظ به عند التواصل مع المدرسة.</div></div><div class="card"><h3>الوثائق المطلوبة</h3><ul class="check-list"><li>صورة عن الهوية الشخصية أو بيان الولادة.</li><li>آخر شهادة دراسية أو كشف علامات.</li><li>صور شخصية عند إتمام التسجيل.</li><li>موافقة ولي الأمر.</li></ul></div></div></section>
    <section class="section" id="registration-form"><div class="container form-shell"><div class="section-head center"><span class="section-kicker">الخطوة الأخيرة</span><h2>نموذج طلب الانتساب</h2><p>الحقول التي تحمل نجمة مطلوبة.</p></div><form class="card" id="admission-form"><div class="form-grid">
      ${inputField("firstName", "اسم الطالب الأول *", "text", true)}${inputField("fatherName", "اسم الأب *", "text", true)}${inputField("familyName", "اسم العائلة *", "text", true)}${inputField("birthDate", "تاريخ الميلاد", "date")}${selectField("gender", "الجنس", ["ذكر", "أنثى"])}${selectField("grade", "الصف المطلوب *", ["الصف الأول الإعدادي الشرعي", "الصف الثاني الإعدادي الشرعي", "الصف الثالث الإعدادي الشرعي", "الصف الأول الثانوي الشرعي العلمي", "الصف الثاني الثانوي الشرعي العلمي", "الصف الثالث الثانوي الشرعي العلمي"], true)}${inputField("guardian", "اسم ولي الأمر *", "text", true)}${inputField("phone", "رقم هاتف ولي الأمر *", "tel", true)}${inputField("altPhone", "رقم هاتف بديل", "tel")}${inputField("email", "البريد الإلكتروني", "email")}${inputField("area", "المنطقة / المحافظة", "text")}${inputField("address", "عنوان السكن", "text")}${inputField("notes", "ملاحظات إضافية", "text", false, true)}<label class="check full"><input name="consent" type="checkbox" required /> أقر بصحة البيانات المدخلة وأوافق على تواصل إدارة المدرسة معي.</label></div><div class="form-actions"><button class="btn btn-primary" type="submit"><i class="fa-regular fa-paper-plane"></i> إرسال طلب الانتساب</button><button class="btn btn-ghost" type="reset">مسح الحقول</button></div></form></div></section>`, "admissions");
}

function inputField(name, label, type = "text", required = false, textarea = false) {
  return `<div class="field ${textarea ? "full" : ""}"><label for="${name}">${label}</label>${textarea ? `<textarea id="${name}" name="${name}" placeholder="اكتب ملاحظتك هنا"></textarea>` : `<input id="${name}" name="${name}" type="${type}" ${required ? "required" : ""} />`}</div>`;
}
function selectField(name, label, options, required = false) {
  return `<div class="field"><label for="${name}">${label}</label><select id="${name}" name="${name}" ${required ? "required" : ""}><option value="">اختر من القائمة</option>${options.map((o) => `<option>${o}</option>`).join("")}</select></div>`;
}

function curriculumPage() {
  const sharia = get(STORAGE.sharia, defaultSharia);
  const educational = get(STORAGE.educational, defaultEducational);
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / المناهج</span><h1>المناهج الدراسية</h1><p class="lead">منهج شرعي متدرج، ومنهج أكاديمي يفتح أبواب المستقبل.</p></div></section>
    <section class="section"><div class="container"><div class="tabs"><button class="tab active" data-curriculum-tab="sharia">المنهج الشرعي</button><button class="tab" data-curriculum-tab="educational">المنهج الأكاديمي</button></div><div id="curriculum-list">${curriculumList(sharia, true)}</div></div></section>`, "curriculum");
}
function curriculumList(items, sharia) {
  return `<div class="curriculum-grid">${items.map(([grade, subjects]) => `<article class="card fade-in"><span class="section-kicker">${sharia ? "تعليم شرعي" : "تعليم أكاديمي"}</span><h3>${grade}</h3><div class="subject-list">${subjects.map((subject, index) => `<div class="subject"><span class="subject-name"><span>${String(index + 1).padStart(2, "0")}</span>${subject}</span>${sharia && index === 0 ? `<a class="btn btn-ghost btn-sm" href="assets/tajweed7.pdf" target="_blank"><i class="fa-regular fa-file-pdf"></i> PDF</a>` : ""}</div>`).join("")}</div></article>`).join("")}</div>`;
}

function newsPage() {
  const items = get(STORAGE.news, defaultNews);
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / الأخبار</span><h1>أخبار وإعلانات المدرسة</h1><p class="lead">تابع آخر الأخبار والأنشطة والمواعيد.</p></div></section><section class="section"><div class="container"><div class="card" style="margin-bottom:20px"><div class="field"><label for="news-search"><i class="fa-solid fa-search"></i> ابحث في الأخبار</label><input id="news-search" placeholder="اكتب كلمة البحث..." /></div></div><div class="news-grid" id="news-list">${items.map(newsCard).join("")}</div></div></section>`, "news");
}

function donatePage() {
  const faqs = [
    { q: "أين تذهب التبرعات؟", a: "توجه لدعم التعليم والمواد والأنشطة وخدمة الطلاب." },
    { q: "كيف أتأكد من وصول التبرع؟", a: "احتفظ بإيصال التحويل وتواصل مع الإدارة لتأكيده." },
    { q: "هل يوجد مبلغ محدد؟", a: "كل مساهمة نافعة، ولا يوجد حد أدنى مفروض." },
  ];
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / التبرع</span><h1>ساهم في بناء جيل واعٍ</h1><p class="lead">كل مساهمة تصنع فرصة تعليم، وتدعم استمرار الرسالة.</p></div></section><section class="section"><div class="container"><div class="card donate-box"><div><img src="assets/shamcash-logo.png" alt="وسيلة التبرع" onerror="this.style.display='none'" /></div><div><span class="section-kicker">التبرع عبر ShamCash</span><h2>دعمك يصل إلى التعليم مباشرة</h2><p class="lead">تُستخدم التبرعات في دعم العملية التعليمية والأنشطة والاحتياجات التي تخدم الطلاب.</p><div class="copy-row"><code id="donation-number">${SITE.donationAccount}</code><button class="btn btn-primary btn-sm" id="copy-donation"><i class="fa-regular fa-copy"></i> نسخ الرقم</button></div><div class="notice">التبرع اختياري، وللاستفسار عن أي تفاصيل يرجى التواصل مع إدارة المدرسة.</div></div></div></div></section><section class="section"><div class="container"><div class="section-head center"><span class="section-kicker">أسئلة شائعة</span><h2>قبل التبرع</h2></div><div class="faq-list">${faqs.map((f, i) => `<div class="faq-item"><div class="faq-question" data-faq="${i}"><span>${f.q}</span><i class="fa-solid fa-chevron-down"></i></div><div class="faq-answer" id="faq-answer-${i}"><p>${f.a}</p></div></div>`).join("")}</div></div></section>`, "donate");
}

function contactPage() {
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / تواصل معنا</span><h1>نحن قريبون منكم</h1><p class="lead">يسعدنا استقبال استفساراتكم وملاحظاتكم.</p></div></section><section class="section"><div class="container contact-grid"><div class="card"><h2>معلومات التواصل</h2><div class="contact-list">${[["☎", "الهاتف", SITE.phone],["◉", "واتساب", "تواصل معنا مباشرة"],["✉", "البريد الإلكتروني", SITE.email],["⌂", "العنوان", SITE.address],["◷", "أوقات الدوام", "من الأحد إلى الخميس"]].map(([i, t, v], index) => `<div class="contact-item"><div class="mini-icon ${index % 2 ? "purple" : ""}">${i}</div><div><strong>${t}</strong><span>${v}</span></div></div>`).join("")}</div></div><form class="card" id="contact-form"><h2>أرسل رسالة</h2><div class="form-grid">${inputField("contactName", "الاسم *", "text", true)}${inputField("contactPhone", "رقم الهاتف *", "tel", true)}${inputField("contactEmail", "البريد الإلكتروني", "email")}${inputField("contactSubject", "الموضوع *", "text", true)}${inputField("contactMessage", "الرسالة *", "text", true, true)}</div><div class="form-actions"><button class="btn btn-primary" type="submit"><i class="fa-regular fa-paper-plane"></i> إرسال الرسالة</button></div></form></div></section>`, "contact");
}

function parentsPage() {
  const session = sessionStorage.getItem("zayd_parent_session");
  if (!session) return layout(`<section class="section login-shell"><div class="card login-card"><a class="brand" href="#"><img src="assets/logo-profile.png" alt="الشعار" /><div class="brand-text"><img src="assets/zayd-name2.png" alt="ثانوية زيد بن حارثة" style="width:150px;" /></div></a><h2>مرحباً بكم</h2><p class="lead">سجّل الدخول لمتابعة بيانات الطالب وإعلانات المدرسة.</p><form id="parent-login" class="form-grid"><div class="field"><label for="parent-user">اسم المستخدم</label><input id="parent-user" name="username" required /></div><div class="field"><label for="parent-pass">كلمة المرور</label><input id="parent-pass" name="password" type="password" required /></div><button class="btn btn-primary" type="submit"><i class="fa-solid fa-arrow-left"></i> تسجيل الدخول</button></form><p class="muted">هذه بوابة تجريبية محلية، ولا تستخدم بيانات حقيقية.</p></div></section>`, "parents");
  const student = defaultStudents[0];
  return layout(`<section class="page-hero"><div class="container"><span class="breadcrumbs">الرئيسية / بوابة الأهل</span><h1>لوحة ولي الأمر</h1><p class="lead">متابعة سهلة لحضور الطالب ومستواه وإعلانات المدرسة.</p></div></section><section class="section"><div class="container portal-dashboard"><div class="card portal-top"><div class="portal-user"><div class="avatar">أم</div><div><strong>ولي أمر الطالب</strong><div class="muted">مرحباً بكم في بوابة الأهل</div></div></div><button class="btn btn-ghost btn-sm" id="parent-logout"><i class="fa-solid fa-sign-out-alt"></i> تسجيل الخروج</button></div><div class="card"><div class="portal-user"><div class="avatar">أح</div><div><h2 style="margin:0">${student.name}</h2><span class="muted">${student.grade}</span></div></div></div><div class="portal-grid"><article class="card"><span class="section-kicker">الحضور</span><div class="admin-number">${student.attendance}%</div><div class="progress"><i style="width:${student.attendance}%"></i></div><p>نسبة الحضور لهذا الفصل</p></article><article class="card"><span class="section-kicker">المعدل العام</span><div class="admin-number">87%</div><p>آخر تحديث: هذا الأسبوع</p></article><article class="card"><span class="section-kicker">الإعلانات</span><div class="admin-number">${get(STORAGE.news, defaultNews).length}</div><p>إعلانات متاحة للقراءة</p></article></div><div class="card"><h3>آخر الدرجات</h3><div class="table-wrap"><table><thead><tr><th>المادة</th><th>الدرجة</th><th>الملاحظة</th></tr></thead><tbody><tr><td>التجويد والاستحفاظ</td><td>92 / 100</td><td>ممتاز</td></tr><tr><td>اللغة العربية</td><td>86 / 100</td><td>جيد جداً</td></tr><tr><td>الرياضيات</td><td>83 / 100</td><td>جيد جداً</td></tr></tbody></table></div></div></div></section>`, "parents");
}

function adminPage() {
  if (sessionStorage.getItem("zayd_admin_session") !== "1") return layout(`<section class="section login-shell"><div class="card login-card"><a class="brand" href="#"><img src="assets/logo-profile.png" alt="الشعار" /><div class="brand-text"><img src="assets/zayd-name2.png" alt="ثانوية زيد بن حارثة" style="width:150px;" /></div></a><h2>دخول الإدارة</h2><p class="lead">هذه لوحة تجريبية تحفظ البيانات في هذا المتصفح فقط.</p><form id="admin-login" class="form-grid"><div class="field"><label for="admin-user">اسم المستخدم</label><input id="admin-user" name="username" required /></div><div class="field"><label for="admin-pass">كلمة المرور</label><input id="admin-pass" name="password" type="password" required /></div><button class="btn btn-primary" type="submit"><i class="fa-solid fa-arrow-left"></i> دخول اللوحة</button></form><div class="notice" style="text-align:right;margin-top:16px">غيّر بيانات الدخول التجريبية في أعلى ملف <code>script.js</code> قبل الاستخدام.</div></div></section>`, "admin");
  return layout(`<section class="section"><div class="container admin-shell"><aside class="admin-nav" id="admin-nav">${[["overview","نظرة عامة","fa-solid fa-gauge-high"],["admissions","طلبات التسجيل","fa-solid fa-file-pen"],["messages","الرسائل","fa-solid fa-envelope"],["students","الطلاب","fa-solid fa-graduation-cap"],["news","الأخبار","fa-solid fa-newspaper"],["curriculum","المناهج","fa-solid fa-book"],["settings","الإعدادات","fa-solid fa-gear"]].map(([k, v, icon], i) => `<button class="${i === 0 ? "active" : ""}" data-admin-tab="${k}"><i class="${icon}"></i> ${v}</button>`).join("")}<button id="admin-logout"><i class="fa-solid fa-sign-out-alt"></i> تسجيل الخروج</button></aside><div class="admin-content" id="admin-content"></div></div></section>`, "admin");
}

// ===== عرض لوحة الإدارة =====
function adminRender(tab = "overview") {
  const content = $("#admin-content");
  if (!content) return;
  const admissions = get(STORAGE.admissions, []);
  const messages = get(STORAGE.messages, []);
  const students = get(STORAGE.students, defaultStudents);
  const news = get(STORAGE.news, defaultNews);
  const views = {
    overview: `<div class="admin-head"><div><span class="section-kicker">لوحة التحكم</span><h2>مرحباً بك في إدارة المدرسة</h2></div></div><div class="admin-cards">${[["طلبات التسجيل", admissions.length],["الرسائل", messages.length],["عدد الطلاب", students.length]].map(([t,n]) => `<article class="card"><span>${t}</span><div class="admin-number">${n}</div><small class="muted">بيانات محلية تجريبية</small></article>`).join("")}</div><div class="card"><h3>آخر طلبات الانتساب</h3>${admissions.length ? admissions.slice(-5).reverse().map((a) => `<div class="admin-item"><span>${escapeHtml(a.firstName)} ${escapeHtml(a.familyName)}<small class="muted"> · ${escapeHtml(a.grade)}</small></span><span class="status pending">جديد</span></div>`).join("") : `<div class="empty">لا توجد طلبات بعد.</div>`}</div>`,
    admissions: adminAdmissions(admissions),
    messages: adminMessages(messages),
    students: adminStudents(students),
    news: adminNews(news),
    curriculum: adminCurriculum(),
    settings: `<div class="admin-head"><div><span class="section-kicker">الإعدادات</span><h2>بيانات الموقع</h2></div></div><div class="card"><div class="notice">يمكن تعديل معلومات الاتصال الأساسية من الثوابت الموجودة في أعلى ملف script.js. هذه اللوحة لا ترفع البيانات إلى الإنترنت.</div><div class="form-actions"><button class="btn btn-ghost" id="export-data"><i class="fa-regular fa-file-arrow-down"></i> تصدير نسخة JSON</button><label class="btn btn-ghost"><i class="fa-regular fa-file-arrow-up"></i> استيراد JSON<input id="import-data" type="file" accept=".json" hidden /></label><button class="btn btn-danger" id="clear-data"><i class="fa-regular fa-trash-can"></i> مسح البيانات المحلية</button></div></div>`,
  };
  content.innerHTML = views[tab] || views.overview;
  $$(".admin-nav button").forEach((button) => button.classList.toggle("active", button.dataset.adminTab === tab));
  bindAdminActions(tab);
}

function adminAdmissions(items) {
  return `<div class="admin-head"><div><span class="section-kicker">الانتساب</span><h2>طلبات التسجيل</h2></div><button class="btn btn-ghost btn-sm" data-export="admissions"><i class="fa-regular fa-file-csv"></i> تصدير CSV</button></div><div class="card admin-table">${items.length ? `<table><thead><tr><th>الطالب</th><th>الصف</th><th>الهاتف</th><th>التاريخ</th><th>الإجراء</th></tr></thead><tbody>${items.map((a) => `<tr><td>${escapeHtml(a.firstName)} ${escapeHtml(a.fatherName)} ${escapeHtml(a.familyName)}</td><td>${escapeHtml(a.grade)}</td><td>${escapeHtml(a.phone)}</td><td>${formatDate(a.submittedAt)}</td><td><button class="btn btn-danger btn-sm" data-delete-admission="${a.id}"><i class="fa-regular fa-trash-can"></i> حذف</button></td></tr>`).join("")}</tbody></table>` : `<div class="empty">لا توجد طلبات تسجيل حتى الآن.</div>`}</div>`;
}
function adminMessages(items) {
  return `<div class="admin-head"><div><span class="section-kicker">صندوق الوارد</span><h2>رسائل التواصل</h2></div></div><div class="card">${items.length ? items.map((m) => `<div class="admin-item"><div><strong>${escapeHtml(m.name)} · ${escapeHtml(m.subject)}</strong><p class="muted">${escapeHtml(m.message)}</p></div><button class="btn btn-danger btn-sm" data-delete-message="${m.id}"><i class="fa-regular fa-trash-can"></i> حذف</button></div>`).join("") : `<div class="empty">لا توجد رسائل بعد.</div>`}</div>`;
}
function adminStudents(items) {
  return `<div class="admin-head"><div><span class="section-kicker">السجل الدراسي</span><h2>بيانات الطلاب</h2></div><button class="btn btn-primary btn-sm" id="add-student"><i class="fa-regular fa-plus"></i> إضافة طالب</button></div><div class="card admin-table">${items.length ? `<table><thead><tr><th>الاسم</th><th>الصف</th><th>الهاتف</th><th>الحضور</th><th>الإجراء</th></tr></thead><tbody>${items.map((s) => `<tr><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.grade)}</td><td>${escapeHtml(s.phone)}</td><td>${s.attendance}%</td><td><button class="btn btn-danger btn-sm" data-delete-student="${s.id}"><i class="fa-regular fa-trash-can"></i> حذف</button></td></tr>`).join("")}</tbody></table>` : `<div class="empty">لا يوجد طلاب.</div>`}</div>`;
}
function adminNews(items) {
  return `<div class="admin-head"><div><span class="section-kicker">المحتوى</span><h2>الأخبار والإعلانات</h2></div><button class="btn btn-primary btn-sm" id="add-news"><i class="fa-regular fa-plus"></i> إضافة خبر</button></div><div class="card">${items.map((n) => `<div class="admin-item"><div><strong>${escapeHtml(n.title)}</strong><small class="muted"> · ${formatDate(n.date)}</small></div><button class="btn btn-danger btn-sm" data-delete-news="${n.id}"><i class="fa-regular fa-trash-can"></i> حذف</button></div>`).join("")}</div>`;
}
function adminCurriculum() {
  const sharia = get(STORAGE.sharia, defaultSharia);
  return `<div class="admin-head"><div><span class="section-kicker">التعليم</span><h2>إدارة المناهج</h2></div></div><div class="card">${sharia.map(([grade, subjects]) => `<div class="admin-item"><span>${grade}</span><span class="status">${subjects.length} مواد</span></div>`).join("")}<p class="muted">لتعديل أسماء المواد، عدّل المصفوفات الافتراضية في أعلى script.js أو أضف نظام خادم لاحقاً.</p></div>`;
}

function bindAdminActions(tab) {
  $$("[data-delete-admission]").forEach((button) => button.onclick = () => {
    if (!confirm("هل تريد حذف هذا الطلب؟")) return;
    save(STORAGE.admissions, get(STORAGE.admissions, []).filter((x) => x.id !== button.dataset.deleteAdmission)); adminRender(tab); toast("تم حذف الطلب");
  });
  $$("[data-delete-message]").forEach((button) => button.onclick = () => { save(STORAGE.messages, get(STORAGE.messages, []).filter((x) => x.id !== button.dataset.deleteMessage)); adminRender(tab); toast("تم حذف الرسالة"); });
  $$("[data-delete-student]").forEach((button) => button.onclick = () => { save(STORAGE.students, get(STORAGE.students, defaultStudents).filter((x) => x.id !== button.dataset.deleteStudent)); adminRender(tab); toast("تم حذف الطالب"); });
  $$("[data-delete-news]").forEach((button) => button.onclick = () => { save(STORAGE.news, get(STORAGE.news, defaultNews).filter((x) => x.id !== button.dataset.deleteNews)); adminRender(tab); toast("تم حذف الخبر"); });
  $("#add-student")?.addEventListener("click", () => {
    const name = prompt("اسم الطالب:");
    if (!name) return;
    const list = get(STORAGE.students, defaultStudents); list.push({ id: id("student"), name, grade: "يحدد لاحقاً", phone: "غير مضاف", attendance: 100, note: "" }); save(STORAGE.students, list); adminRender(tab); toast("تمت إضافة الطالب");
  });
  $("#add-news")?.addEventListener("click", () => {
    const title = prompt("عنوان الخبر:");
    if (!title) return;
    const list = get(STORAGE.news, defaultNews); list.unshift({ id: id("news"), title, date: new Date().toISOString(), category: "إعلانات", text: "أضف تفاصيل الخبر من ملف script.js." }); save(STORAGE.news, list); adminRender(tab); toast("تمت إضافة الخبر");
  });
  $("[data-export]")?.addEventListener("click", () => exportCsv(get(STORAGE.admissions, [])));
  $("#export-data")?.addEventListener("click", () => download("zayd-school-data.json", JSON.stringify(Object.fromEntries(Object.values(STORAGE).map((key) => [key, get(key, null)])), null, 2), "application/json"));
  $("#import-data")?.addEventListener("change", (event) => {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader(); reader.onload = () => { try { const data = JSON.parse(reader.result); Object.entries(data).forEach(([key, value]) => save(key, value)); toast("تم استيراد البيانات"); adminRender(tab); } catch { toast("ملف JSON غير صالح", true); } }; reader.readAsText(file);
  });
  $("#clear-data")?.addEventListener("click", () => { if (confirm("سيتم حذف البيانات المحلية للنماذج. هل أنت متأكد؟")) { Object.values(STORAGE).forEach((key) => localStorage.removeItem(key)); toast("تم مسح البيانات المحلية"); adminRender(tab); } });
}
function exportCsv(rows) {
  if (!rows.length) return toast("لا توجد بيانات لتصديرها", true);
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(","), ...rows.map((row) => headers.map((h) => `"${String(row[h] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
  download("zayd-admissions.csv", "\ufeff" + csv, "text/csv;charset=utf-8");
}
function download(name, content, type) {
  const blob = new Blob([content], { type }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = name; link.click(); URL.revokeObjectURL(link.href);
}

// ===== التصيير الرئيسي =====
function render() {
  const route = location.hash.replace("#", "").replace("/", "") || "home";
  const pages = { home: homePage, about: aboutPage, admissions: admissionsPage, curriculum: curriculumPage, news: newsPage, donate: donatePage, contact: contactPage, parents: parentsPage, admin: adminPage };
  $("#app").innerHTML = (pages[route] || homePage)();
  bindCommon(route);
  if (route === "admin" && sessionStorage.getItem("zayd_admin_session") === "1") adminRender();
  applyFadeIn();
  // تحديث أيقونة الثيم بناءً على الوضع الحالي
  updateThemeIcon();
}

// ===== ربط الأحداث =====
function bindCommon(route) {
  $("#menu-toggle")?.addEventListener("click", () => $("#nav-links").classList.toggle("open"));
  $$(".nav-links a").forEach((link) => link.addEventListener("click", () => $("#nav-links")?.classList.remove("open")));
  
  // تبديل الثيم وتغيير الأيقونة
  $("#theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("zayd_dark", document.body.classList.contains("dark") ? "1" : "0");
    updateThemeIcon();
  });
  
  $$("[data-news]").forEach((button) => button.addEventListener("click", () => {
    const item = get(STORAGE.news, defaultNews).find((n) => n.id === button.dataset.news); if (!item) return;
    openModal(`<h3>${escapeHtml(item.title)}</h3><p class="muted">${formatDate(item.date)} · ${escapeHtml(item.category)}</p><p>${escapeHtml(item.text)}</p>`);
  }));
  $("#admission-form")?.addEventListener("submit", (event) => {
    event.preventDefault(); const data = Object.fromEntries(new FormData(event.target)); const request = { ...data, id: id("admission"), submittedAt: new Date().toISOString() };
    const list = get(STORAGE.admissions, []); list.push(request); save(STORAGE.admissions, list); event.target.reset();
    openModal(`<div class="empty"><div class="feature-icon" style="margin:auto">✓</div><h3>تم استلام طلبك بنجاح</h3><p>رقم المتابعة الخاص بك:</p><strong style="font-size:1.3rem;color:var(--green-dark)">${request.id}</strong><p class="muted">احتفظ بهذا الرقم عند التواصل مع الإدارة.</p></div>`);
  });
  $("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault(); const data = Object.fromEntries(new FormData(event.target)); const list = get(STORAGE.messages, []); list.push({ ...data, id: id("message"), date: new Date().toISOString() }); save(STORAGE.messages, list); event.target.reset(); toast("تم إرسال رسالتك بنجاح");
  });
  $("#parent-login")?.addEventListener("submit", (event) => {
    event.preventDefault(); const data = Object.fromEntries(new FormData(event.target));
    if (data.username === "parent" && data.password === "demo123") { sessionStorage.setItem("zayd_parent_session", "1"); render(); toast("تم تسجيل الدخول"); } else toast("بيانات الدخول التجريبية غير صحيحة", true);
  });
  $("#parent-logout")?.addEventListener("click", () => { sessionStorage.removeItem("zayd_parent_session"); render(); });
  $("#admin-login")?.addEventListener("submit", (event) => {
    event.preventDefault(); const data = Object.fromEntries(new FormData(event.target));
    if (data.username === "admin" && data.password === "demo123") { sessionStorage.setItem("zayd_admin_session", "1"); render(); toast("تم تسجيل الدخول إلى اللوحة"); } else toast("بيانات الدخول التجريبية غير صحيحة", true);
  });
  $("#admin-logout")?.addEventListener("click", () => { sessionStorage.removeItem("zayd_admin_session"); render(); });
  $$("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => adminRender(button.dataset.adminTab)));
  $$("[data-curriculum-tab]").forEach((button) => button.addEventListener("click", () => {
    $$("[data-curriculum-tab]").forEach((b) => b.classList.toggle("active", b === button));
    $("#curriculum-list").innerHTML = curriculumList(get(button.dataset.curriculumTab === "sharia" ? STORAGE.sharia : STORAGE.educational, button.dataset.curriculumTab === "sharia" ? defaultSharia : defaultEducational), button.dataset.curriculumTab === "sharia");
  }));
  $("#news-search")?.addEventListener("input", (event) => {
    const term = event.target.value.trim(); const items = get(STORAGE.news, defaultNews).filter((n) => `${n.title} ${n.text} ${n.category}`.includes(term));
    $("#news-list").innerHTML = items.length ? items.map(newsCard).join("") : `<div class="empty" style="grid-column:1/-1">لا توجد أخبار مطابقة للبحث.</div>`; bindCommonNews();
  });
  $("#copy-donation")?.addEventListener("click", async () => { try { await navigator.clipboard.writeText(SITE.donationAccount); toast("تم نسخ رقم الحساب"); } catch { toast("انسخ الرقم يدوياً من المربع", true); } });
  // الأسئلة الشائعة
  $$(".faq-question").forEach((el) => {
    el.addEventListener("click", function() {
      const idx = this.dataset.faq;
      const answer = document.getElementById(`faq-answer-${idx}`);
      if (answer) {
        answer.classList.toggle("open");
        this.classList.toggle("open");
      }
    });
  });
  // تأثير تمرير الشريط
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }
}
function bindCommonNews() { $$("[data-news]").forEach((button) => button.addEventListener("click", () => { const item = get(STORAGE.news, defaultNews).find((n) => n.id === button.dataset.news); if (item) openModal(`<h3>${escapeHtml(item.title)}</h3><p class="muted">${formatDate(item.date)}</p><p>${escapeHtml(item.text)}</p>`); })); }
function openModal(content) {
  const modal = document.createElement("div"); modal.className = "modal-backdrop"; modal.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><div class="modal-head"><span></span><button class="close-btn" aria-label="إغلاق"><i class="fa-regular fa-xmark"></i></button></div>${content}</div>`;
  document.body.appendChild(modal); const close = () => modal.remove(); $(".close-btn", modal).onclick = close; modal.addEventListener("click", (event) => { if (event.target === modal) close(); }); document.addEventListener("keydown", function esc(event) { if (event.key === "Escape") { close(); document.removeEventListener("keydown", esc); } });
}
function applyFadeIn() {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

// دالة لتحديث أيقونة الثيم
function updateThemeIcon() {
  const icon = $("#theme-toggle i");
  if (!icon) return;
  if (document.body.classList.contains("dark")) {
    icon.className = "fa-regular fa-sun";
  } else {
    icon.className = "fa-regular fa-moon";
  }
}

// ===== بدء التشغيل =====
if (localStorage.getItem("zayd_dark") === "1") document.body.classList.add("dark");
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
