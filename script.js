/* ==========================================================================
   ООО «АЙС-УРАЛ» — ИНТЕРАКТИВНАЯ ЛОГИКА И ВЗАИМОДЕЙСТВИЕ
   ========================================================================== */

// Данные о товарах и документах
const PRODUCTS_DATABASE = [
  {
    id: 1,
    title: "Торцовое уплотнение АЙС-2100",
    category: "bellows",
    badge: "ПОПУЛЯРНОЕ",
    img: "assets/seal_bellows.jpg",
    analogs: "Burgmann MG1, AESSeal B02, Vulcan 19, Latty T901",
    pumps: ["Wilo", "Grundfos", "KSB", "Отечественные"],
    shaftDiameter: "10 — 100 мм",
    pressure: "До 1.2 МПа (12 бар)",
    temperature: "От -20°C до +140°C",
    speed: "До 15 м/с",
    materials: "Карбид кремния (SiC), карбид вольфрама, графит, NBR/FKM/EPDM",
    description: "Универсальное торцовое уплотнение с резиновым сильфоном. Идеально подходит для насосов систем водоснабжения, отопления и химических жидкостей без абразива."
  },
  {
    id: 2,
    title: "Картриджное уплотнение АЙС-К100",
    category: "cartridge",
    badge: "ВЫСОКОЕ ДАВЛЕНИЕ",
    img: "assets/seal_cartridge.jpg",
    analogs: "Burgmann Cartex-SN, AESSeal CURC, John Crane 5610",
    pumps: ["KSB", "Alfa Laval", "Отечественные"],
    shaftDiameter: "24 — 85 мм",
    pressure: "До 2.5 МПа (25 бар)",
    temperature: "От -40°C до +220°C",
    speed: "До 20 м/с",
    materials: "Нержавеющая сталь 316L, SiC/SiC, гидравлически уплотненные кольца",
    description: "Одинарное блочное картриджное уплотнение с простой установкой. Полностью исключает ошибки при монтаже и выставляет правильный натяг пружин."
  },
  {
    id: 3,
    title: "Кольца пар трения и подшипники",
    category: "graphite",
    badge: "КОМПЛЕКТУЮЩИЕ",
    img: "assets/graphite_rings.jpg",
    analogs: "Запасные части для уплотнений Burgmann, AES, Crane",
    pumps: ["Grundfos", "Wilo", "Flygt", "KSB"],
    shaftDiameter: "По чертежу заказчика",
    pressure: "До 4.0 МПа",
    temperature: "От -50°C до +400°C",
    speed: "До 30 м/с",
    materials: "Силицированный графит (СГ-Т), Карбид кремния (SiC), Карбид вольфрама (TC)",
    description: "Высокоточные пары трения и втулки подшипников скольжения с зеркальной полировкой поверхности. Высокая химическая стойкость и износостойкость."
  },
  {
    id: 4,
    title: "Двойное картриджное уплотнение АЙС-К200",
    category: "cartridge",
    badge: "API 682 СТАНДАРТ",
    img: "assets/seal_cartridge.jpg",
    analogs: "Burgmann Cartex-DN, AESSeal CDSA, John Crane 5620",
    pumps: ["Lowara", "Ebara", "KSB"],
    shaftDiameter: "25 — 100 мм",
    pressure: "До 2.5 МПа",
    temperature: "От -40°C до +220°C",
    speed: "До 25 м/с",
    materials: "Хастеллой, Дуплексная сталь, SiC/SiC, фторкаучук",
    description: "Двойное торцовое уплотнение с подводом затворной или барьерной жидкости. Применяется для опасных, взрывоопасных и кристаллизующихся сред."
  },
  {
    id: 5,
    title: "Уплотнение для реакторов АЙС-М30",
    category: "mixers",
    badge: "ДЛЯ МЕШАЛОК",
    img: "assets/seal_bellows.jpg",
    analogs: "Burgmann M451, AESSeal MixMaster",
    pumps: ["Отечественные", "KSB"],
    shaftDiameter: "40 — 160 мм",
    pressure: "От вакуума до 1.6 МПа",
    temperature: "От -30°C до +180°C",
    speed: "До 5 м/с",
    materials: "Нержавеющая сталь, Специальный графит, PTFE",
    description: "Уплотнение с подшипниковым узлом для фармацевтических и химических реакторов. Выдерживает радиолокационные и радиальные биения вала."
  },
  {
    id: 6,
    title: "Термосифонные бачки АЙС-БЖ10",
    category: "graphite",
    badge: "ВСПОМОГАТЕЛЬНЫЕ СИСТЕМЫ",
    img: "assets/graphite_rings.jpg",
    analogs: "Системы API Plan 52, 53A",
    pumps: ["Grundfos", "Flygt", "Wilo"],
    shaftDiameter: "Объём бачка: 10 л, 16 л",
    pressure: "До 4.0 МПа",
    temperature: "От -20°C до +200°C",
    speed: "Не применимо",
    materials: "Сталь 12Х18Н10Т с охлаждающим змеевиком",
    description: "Автономные бачки с визуальным указателем уровня и датчиками давления для подачи барьерной жидкости в двойные уплотнения."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCatalogFilters();
  initGlobalSearch();
  initConfigurator();
  initFormSubmissions();
});

/* ==========================================================================
   НАВИГАЦИЯ И ПЛАВНЫЙ СКРОЛЛ
   ========================================================================== */

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   ФИЛЬТРАЦИЯ КАТАЛОГА ПО КАТЕГОРИЯМ
   ========================================================================== */

function initCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   ПОИСК ПО КАТАЛОГУ И АНАЛОГАМ
   ========================================================================== */

function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const productCards = document.querySelectorAll('.product-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    productCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   КОНФИГУРАТОР И ПОДБОР УПЛОТНЕНИЙ
   ========================================================================== */

function initConfigurator() {
  const form = document.getElementById('configuratorForm');
  const matchCountEl = document.getElementById('matchCount');
  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showToast(`Выбран режим: ${tab.textContent}`);
    });
  });

  if (!form) return;

  form.addEventListener('input', updateMatchingCount);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
      showToast('Фильтры каталога обновлены согласно вашему запросу!');
    }
  });

  function updateMatchingCount() {
    const pumpVal = document.getElementById('selectPumpBrand').value;
    const typeVal = document.getElementById('selectSealType').value;
    
    let count = 0;
    PRODUCTS_DATABASE.forEach(item => {
      let matches = true;
      if (typeVal && item.category !== typeVal) matches = false;
      if (pumpVal && !item.pumps.includes(pumpVal)) matches = false;
      if (matches) count++;
    });

    if (matchCountEl) {
      matchCountEl.textContent = count;
    }
  }
}

/* ==========================================================================
   МОДАЛЬНЫЕ ОКНА И ДЕТАЛЬНЫЙ ПРОСМОТР ТОВАРА
   ========================================================================== */

function openProductModal(productId) {
  const product = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!product) return;

  const modalBody = document.getElementById('productModalBody');
  const modal = document.getElementById('productModal');

  modalBody.innerHTML = `
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
      <img src="${product.img}" alt="${product.title}" style="width: 240px; height: 180px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
      <div style="flex-grow: 1;">
        <span class="preview-tag" style="margin-bottom: 0.5rem; display: inline-block;">${product.badge}</span>
        <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 0.5rem;">${product.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${product.description}</p>
      </div>
    </div>

    <h4 style="color: var(--color-accent-cyan); margin-bottom: 0.75rem; font-size: 1.1rem;">Технические характеристики</h4>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-main);">
      <tbody>
        <tr style="border-bottom: 1px solid var(--border-light);"><td style="padding: 0.5rem 0; color: var(--text-muted);">Диаметр вала:</td><td style="font-weight: 600; text-align: right;">${product.shaftDiameter}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-light);"><td style="padding: 0.5rem 0; color: var(--text-muted);">Рабочее давление:</td><td style="font-weight: 600; text-align: right;">${product.pressure}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-light);"><td style="padding: 0.5rem 0; color: var(--text-muted);">Диапазон температур:</td><td style="font-weight: 600; text-align: right;">${product.temperature}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-light);"><td style="padding: 0.5rem 0; color: var(--text-muted);">Скорость вращения:</td><td style="font-weight: 600; text-align: right;">${product.speed}</td></tr>
        <tr style="border-bottom: 1px solid var(--border-light);"><td style="padding: 0.5rem 0; color: var(--text-muted);">Материалы пар трения:</td><td style="font-weight: 600; text-align: right;">${product.materials}</td></tr>
        <tr><td style="padding: 0.5rem 0; color: var(--text-muted);">Заменяемые аналоги:</td><td style="font-weight: 600; color: var(--color-accent-cyan); text-align: right;">${product.analogs}</td></tr>
      </tbody>
    </table>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="btn btn-primary" style="flex-grow: 1;" onclick="closeModal('productModal'); openOrderModal('${product.title}');">
        <span>Запросить КП на этот товар</span>
      </button>
      <button class="btn btn-outline" onclick="downloadPdfDoc('Спецификация ${product.title}.pdf')">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        <span>Скачать чертёж PDF</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function openOrderModal(productName = '') {
  const modal = document.getElementById('orderModal');
  const title = document.getElementById('orderModalTitle');
  const productNameInput = document.getElementById('modalProductName');

  if (productName) {
    title.textContent = `Запрос КП: ${productName}`;
    productNameInput.value = productName;
  } else {
    title.textContent = 'Заказать обратный звонок';
    productNameInput.value = 'Обратный звонок';
  }

  modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Закрытие при клике вне окна
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

/* ==========================================================================
   СКАЧИВАНИЕ PDF ДОКУМЕНТОВ
   ========================================================================== */

function downloadPdfDoc(filename) {
  showToast(`Формирование документа: «${filename}»...`);

  setTimeout(() => {
    const dummyContent = `ООО «АЙС-УРАЛ» — Официальный технический документ\n\nФайл: ${filename}\nДата генерации: ${new Date().toLocaleDateString('ru-RU')}\nАдрес: г. Уфа, ул. Айская, д. 46\nТелефон: 8 (927) 238-73-58\nEmail: aesseal-ufa@mail.ru\n\nНастоящий документ подтверждает технические характеристики уплотнения.`;
    
    const blob = new Blob([dummyContent], { type: 'application/pdf;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Файл «${filename}» успешно скачан!`);
  }, 800);
}

/* ==========================================================================
   ОБРАБОТКА ФОРМ И УВЕДОМЛЕНИЯ
   ========================================================================== */

function initFormSubmissions() {
  const mainForm = document.getElementById('mainContactForm');
  const modalForm = document.getElementById('modalOrderForm');
  const callBtn = document.getElementById('openCallModalBtn');
  const downloadFullPdfBtn = document.getElementById('downloadFullPdfBtn');

  if (callBtn) {
    callBtn.addEventListener('click', () => openOrderModal('Обратный звонок'));
  }

  if (downloadFullPdfBtn) {
    downloadFullPdfBtn.addEventListener('click', () => downloadPdfDoc('Каталог уплотнений ООО «АЙС-Урал» 2026.pdf'));
  }

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      showToast(`Спасибо, ${name}! Ваша заявка успешно принята. Наш главный инженер свяжется с вами.`);
      mainForm.reset();
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName').value;
      closeModal('orderModal');
      showToast(`Заявка принята, ${name}! Ожидайте звонка специалиста.`);
      modalForm.reset();
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
