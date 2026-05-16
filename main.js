(function () {
  const LANG_KEY = "penzastudy-lang";
  const EMAIL = "rumocgate@gmail.com";

  /** @type {Record<string, Record<"en"|"ar", string>>} */
  const T = {
    page_title: {
      en: "Study in Penza — Penza State University | Morocco → Russia",
      ar: "الدراسة في بنزا — جامعة بنزا الحكومية | المغرب ← روسيا",
    },
    meta_desc: {
      en: "Moroccan students: study in Penza, Russia at Penza State University. Programs, admissions support, and life in Penza.",
      ar: "لطلاب المغرب: الدراسة في بنزا، روسيا في جامعة بنزا الحكومية. البرامج، دعم القبول، والحياة في بنزا.",
    },
    logo_pen: { en: "Penza", ar: "بنزا" },
    logo_study: { en: "Study", ar: "دراسة" },
    title_ma: { en: "Morocco", ar: "المغرب" },
    title_ru: { en: "Russia", ar: "روسيا" },
    nav_why: { en: "Why Penza", ar: "لماذا بنزا" },
    nav_univ: { en: "Penza State University", ar: "جامعة بنزا الحكومية" },
    nav_path: { en: "Your pathway", ar: "مسارك" },
    nav_cta: { en: "Get guidance", ar: "طلب إرشاد" },
    nav_open: { en: "Open menu", ar: "فتح القائمة" },
    nav_close: { en: "Close menu", ar: "إغلاق القائمة" },
    lang_group: { en: "Language", ar: "اللغة" },
    eyebrow: { en: "Morocco → Penza, Russia", ar: "المغرب ← بنزا، روسيا" },
    hero_title: {
      en: "Study in <em>Penza</em> at <strong>Penza State University</strong>",
      ar: "ادرس في <em>بنزا</em> في <strong>جامعة بنزا الحكومية</strong>",
    },
    hero_lead: {
      en: "A clear route for Moroccan students: recognized degrees, affordable living in a historic university city, and structured support from first questions to enrollment.",
      ar: "مسار واضح للطلاب المغاربة: شهادات معترف بها، تكلفة معيشة مناسبة في مدينة جامعية تاريخية، ودعم منظم من أول سؤال حتى التسجيل.",
    },
    btn_request: { en: "Request information", ar: "طلب معلومات" },
    btn_about: { en: "About the university", ar: "عن الجامعة" },
    stat_loc: { en: "Location", ar: "الموقع" },
    stat_loc_city: { en: "Penza", ar: "بنزا" },
    stat_loc_muted: { en: "· European Russia", ar: "· روسيا الأوروبية" },
    stat_host: { en: "Host institution", ar: "الجهة الاستضافية" },
    stat_host_dd: { en: "Penza State University", ar: "جامعة بنزا الحكومية" },
    stat_focus: { en: "Focus", ar: "مجالات التركيز" },
    stat_focus_dd: { en: "Medicine, engineering, IT & more", ar: "الطب، الهندسة، تقنية المعلومات وأكثر" },
    hero_badge_label: { en: "Destination", ar: "الوجهة" },
    hero_badge_value: { en: "Penza", ar: "بنزا" },
    hero_img_alt: {
      en: "Penza State University — study destination",
      ar: "جامعة بنزا الحكومية — وجهة للدراسة",
    },
    why_title: {
      en: "Why Penza — not only Moscow or SPb",
      ar: "لماذا بنزا — ليس موسكو وسانت بطرسبرغ فقط",
    },
    why_sub: {
      en: "Penza is a regional capital with universities, theaters, and green spaces. Costs of living are typically lower than in the largest metros, while transport links keep you connected across Russia.",
      ar: "بنزا عاصمة إقليمية فيها جامعات ومسارح ومساحات خضراء. غالباً ما تكون تكلفة المعيشة أقل من كبرى المدن، مع بقاء شبكة النقل تربطك ببقية روسيا.",
    },
    card1_alt: { en: "Life and public spaces in Penza", ar: "الحياة والأماكن العامة في بنزا" },
    card1_h: { en: "Student-friendly city", ar: "مدينة مناسبة للطلاب" },
    card1_p: {
      en: "Parks, cafés, and a calm rhythm that helps you focus on studies while still offering a full Russian cultural experience.",
      ar: "حدائق ومقاهي وإيقاع هادئ يساعدك على التركيز في الدراسة مع تجربة ثقافية روسية كاملة.",
    },
    card2_alt: {
      en: "Penza State University — campus and student life",
      ar: "جامعة بنزا الحكومية — الحرم والحياة الطلابية",
    },
    card2_h: { en: "Strong academic hub", ar: "قطب أكاديمي قوي" },
    card2_p: {
      en: "Multiple faculties and research activity in a city built around higher education — ideal for long-term degree goals.",
      ar: "كليات متعددة ونشاط بحثي في مدينة مبنية حول التعليم العالي — مثالية لأهداف شهادة على المدى الطويل.",
    },
    card3_alt: {
      en: "Morocco — students heading to study in Russia",
      ar: "المغرب — طلاب يتجهون للدراسة في روسيا",
    },
    card3_h: { en: "Built for internationals", ar: "مصمم للطلاب الدوليين" },
    card3_p: {
      en: "Russian language prep, degree programs, and dorms — structured paths that Moroccan families can understand and plan for.",
      ar: "تمهيد للغة الروسية، برامج دراسية، وسكن جامعي — مسارات واضحة يمكن للعائلات المغربية فهمها والتخطيط لها.",
    },
    uni_h: { en: "Penza State University", ar: "جامعة بنزا الحكومية" },
    uni_lead: {
      en:
        "<strong>Penza State University</strong> (Пензенский государственный университет) is the flagship public university in Penza Oblast. It offers undergraduate and graduate programs across sciences, engineering, medicine-related tracks, economics, humanities, and education — with pathways designed for international applicants.",
      ar:
        "<strong>جامعة بنزا الحكومية</strong> (Пензенский государственный университет) هي الجامعة العامة الرئيسية في مقاطعة بنزا. تقدم برامج البكالوريوس والدراسات العلى في العلوم، والهندسة، والمسارات الطبية، والاقتصاد، والعلوم الإنسانية، والتربية — مع مسارات مخصصة للمتقدمين الدوليين.",
    },
    check1: {
      en: "Recognized degrees and campus infrastructure in Penza city center area",
      ar: "شهادات معترف بها وبنية تحتية في منطقة وسط مدينة بنزا",
    },
    check2: {
      en: "Russian language courses and degree programs taught according to federal standards",
      ar: "دورات في اللغة الروسية وبرامج دراسية وفق المعايير الفيدرالية الروسية",
    },
    check3: {
      en: "Student housing options and on-campus services for enrolled students",
      ar: "خيارات سكن جامعي وخدمات للطلاب المسجلين",
    },
    check4: {
      en: "Regional networking — internships and local industry ties in Penza",
      ar: "شبكة إقليمية — تدريب وارتباط مع القطاع المحلي في بنزا",
    },
    btn_programs: { en: "Talk about programs", ar: "مناقشة البرامج" },
    uni_img_alt: { en: "Penza State University", ar: "جامعة بنزا الحكومية" },
    uni_caption: {
      en: "Penza State University · Penza, Russia",
      ar: "جامعة بنزا الحكومية · بنزا، روسيا",
    },
    path_title: { en: "Your pathway from Morocco", ar: "مسارك من المغرب" },
    path_sub: {
      en: "A simple outline — exact steps depend on faculty and year; we help you align documents and timelines.",
      ar: "مخطط بسيط — التفاصيل تعتمد على الكلية والسنة؛ نساعدك على تنسيق الوثائق والمواعيد.",
    },
    t1_h: { en: "Choose program & intake", ar: "اختيار البرنامج وموعد الالتحاق" },
    t1_p: {
      en: "Select field (e.g. general medicine, engineering, IT), language of instruction goal, and target semester.",
      ar: "اختر المجال (مثل الطب العام، الهندسة، تقنية المعلومات)، لغة التدريس المستهدفة، والفصل الدراسي.",
    },
    t2_h: { en: "Documents & legalization", ar: "الوثائق والتصديق" },
    t2_p: {
      en: "Secondary school certificate, passport, translations/apostille as required — prepared for Penza State University admissions.",
      ar: "شهادة الثانوية، جواز السفر، الترجمات/الأبوستيل حسب المطلوب — مُجهّزة لقبول جامعة بنزا الحكومية.",
    },
    t3_h: { en: "Invitation & visa", ar: "الدعوة والتأشيرة" },
    t3_p: {
      en: "Enrollment steps leading to invitation letter and Russian student visa application in Morocco.",
      ar: "خطوات التسجيل المؤدية إلى رسالة الدعوة وتقديم تأشيرة الطالب الروسية من المغرب.",
    },
    t4_h: { en: "Arrival in Penza", ar: "الوصول إلى بنزا" },
    t4_p: {
      en: "Registration, dorm or housing, orientation — start classes at Penza State University with clarity.",
      ar: "التسجيل، السكن الجامعي أو الخاص، التوجيه — ابدأ الدراسة في جامعة بنزا الحكومية بوضوح.",
    },
    cta_h: {
      en: "Ready to plan Penza State University?",
      ar: "مستعد للتخطيط لجامعة بنزا الحكومية؟",
    },
    cta_p: {
      en: "Email or message us on WhatsApp — we’ll answer questions about Penza, programs, and budgets for Moroccan families.",
      ar: "راسلنا بالبريد أو عبر واتساب — نجيب عن أسئلة بنزا والبرامج والميزانيات للعائلات المغربية.",
    },
    cta_btn: { en: "Start the conversation", ar: "ابدأ المحادثة" },
    contact_h: { en: "Get guidance", ar: "احصل على إرشاد" },
    contact_sub: {
      en: "Reach out by email or WhatsApp — we reply with next steps for Penza State University and life in Penza.",
      ar: "تواصل بالبريد أو واتساب — نرد بخطوات لاحقة لجامعة بنزا الحكومية والحياة في بنزا.",
    },
    email_btn_label: {
      en: "Email rumocgate@gmail.com",
      ar: "البريد: rumocgate@gmail.com",
    },
    wa_btn_label: {
      en: "WhatsApp +7\u00a0996\u00a0080\u00a00960",
      ar: "واتساب +7\u00a0996\u00a0080\u00a00960",
    },
    contact_hint: {
      en: "Tip: in your first message, mention your program interest and when you hope to start.",
      ar: "نصيحة: في أول رسالة اذكر التخصص الذي يهمك وموعد البدء الذي تفضّله.",
    },
    footer_line: {
      en: "Moroccan students to Penza State University.",
      ar: "طلاب مغاربة نحو جامعة بنزا الحكومية.",
    },
    footer_wa: {
      en: "WhatsApp +7\u00a0996\u00a0080\u00a00960",
      ar: "واتساب +7\u00a0996\u00a0080\u00a00960",
    },
    footer_disclaimer: {
      en: "Penza, Russia · Informational page — verify requirements with official admissions.",
      ar: "بنزا، روسيا · صفحة معلومات — تحقّق من المتطلبات لدى القبول الرسمي.",
    },
  };

  function pickDict(lang) {
    return lang === "ar" ? "ar" : "en";
  }

  function tr(lang, key) {
    const entry = T[key];
    if (!entry) return "";
    return entry[pickDict(lang)] ?? entry.en;
  }

  function mailtoHref(lang) {
    const subject =
      lang === "ar"
        ? "استفسار — الدراسة في بنزا / جامعة بنزا الحكومية"
        : "Inquiry — Study in Penza / Penza State University";
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject);
  }

  function applyLang(iso) {
    const lang = pickDict(iso);
    const html = document.documentElement;
    html.setAttribute("lang", lang === "ar" ? "ar" : "en");
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.title = tr(lang, "page_title");
    const meta = document.getElementById("meta-desc");
    if (meta) meta.setAttribute("content", tr(lang, "meta_desc"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && T[key]) el.textContent = tr(lang, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && T[key]) el.innerHTML = tr(lang, key);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && T[key]) el.setAttribute("alt", tr(lang, key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key && T[key]) el.setAttribute("title", tr(lang, key));
    });

    const emailBtn = document.getElementById("contact-email-btn");
    if (emailBtn) emailBtn.setAttribute("href", mailtoHref(lang));

    const langGroup = document.querySelector(".lang-switch");
    if (langGroup) langGroup.setAttribute("aria-label", tr(lang, "lang_group"));

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const wantsAr = btn.getAttribute("data-set-lang") === "ar";
      const active = (lang === "ar" && wantsAr) || (lang !== "ar" && !wantsAr);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const nav = document.querySelector(".nav");
    const navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      const open = nav && nav.classList.contains("is-open");
      navToggle.setAttribute("aria-label", open ? tr(lang, "nav_close") : tr(lang, "nav_open"));
    }

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (_) {}
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      const lang = document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en";
      navToggle.setAttribute("aria-label", open ? tr(lang, "nav_close") : tr(lang, "nav_open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        const lang = document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en";
        navToggle.setAttribute("aria-label", tr(lang, "nav_open"));
      });
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });

  let initial = "en";
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "ar" || stored === "en") initial = stored;
  } catch (_) {}

  applyLang(initial);

  const reveals = document.querySelectorAll("[data-reveal]");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
