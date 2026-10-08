/**
 * Multilingual Translation Engine for TO THE MOON & BACK (TTMB)
 * English (Default) & Arabic (RTL)
 */

const translations = {
  en: {
    // Nav
    "nav.brand": "TTMB",
    "nav.brand_sub": "TO THE MOON & BACK",
    "nav.menu": "MENU",
    "nav.story": "STORY",
    "nav.find_us": "FIND US",
    "nav.lang": "AR",

    // Hero
    "hero.location": "JUMEIRAH · DUBAI",
    "hero.title_en": "TO THE MOON & BACK",
    "hero.title_ar": "إلى القمر والعودة",
    "hero.subtitle": "Specialty Coffee · Food · Dubai",
    "hero.btn_menu": "EXPLORE MENU",
    "hero.btn_find": "FIND US",
    "hero.scroll": "SCROLL TO DISCOVER",

    // A Little Escape
    "escape.eyebrow": "JUMEIRAH 2 · DUBAI",
    "escape.title": "A LITTLE ESCAPE\nIN JUMEIRAH",
    "escape.lead": "More than coffee.\nA place to slow down, meet, and enjoy the moment.",
    "escape.link": "OUR STORY",
    "escape.badge": "A calm sanctuary in the heart of Jumeirah",

    // Signature Menu
    "menu.eyebrow": "CURATED SELECTION",
    "menu.title": "OUR SIGNATURES",
    "menu.lead": "Discover a few of the favourites that make TTMB worth the journey.",
    "menu.tab_coffee": "COFFEE",
    "menu.tab_food": "FOOD",
    "menu.tab_sweet": "SWEET",
    "menu.btn_full": "VIEW FULL MENU",

    // Signatures Items - Coffee
    "item.flatwhite.title": "Flat White",
    "item.flatwhite.desc": "Silky microfoam over a rich double ristretto, roasted to honor Melbourne coffee culture.",
    "item.flatwhite.badge": "Signature Pour",
    "item.flatwhite.tag": "Single Origin",

    "item.filter.title": "Specialty Pour Over V60",
    "item.filter.desc": "Artisanal hand-dripped single origin coffee with distinct floral clarity and bright berry notes.",
    "item.filter.badge": "Slow Bar",
    "item.filter.tag": "Ethiopia Yirgacheffe",

    "item.caramel.title": "Iced Salted Amber Latte",
    "item.caramel.desc": "House-crafted salted caramel balanced with chilled espresso and velvet milk over crystal ice.",
    "item.caramel.badge": "House Blend",
    "item.caramel.tag": "Artisanal Craft",

    // Signatures Items - Food
    "item.avo.title": "Herby Smashed Avo",
    "item.avo.desc": "Seeded artisanal sourdough, crushed fresh avocado, soft poached egg, garden mint, and pistachio dukkah.",
    "item.avo.badge": "Brunch Favourite",
    "item.avo.tag": "Artisan Sourdough",

    "item.toastie.title": "Truffle Grilled Cheese",
    "item.toastie.desc": "Toasted brioche layered with melted mature gruyère and sharp cheddar, brushed with black truffle butter.",
    "item.toastie.badge": "Melbourne Toastie",
    "item.toastie.tag": "House Melt",

    "item.pastrami.title": "Cured Pastrami Sando",
    "item.pastrami.desc": "Tender spiced pastrami, house dill pickles, wholegrain Dijon mustard, and melted Swiss cheese on sourdough.",
    "item.pastrami.badge": "Artisan Sando",
    "item.pastrami.tag": "Slow Cured",

    // Signatures Items - Sweet
    "item.cheesecake.title": "Outer Space Cheesecake",
    "item.cheesecake.desc": "Caramelized Basque burnt cheesecake topped with a deep galaxy blackberry reduction and edible gold flakes.",
    "item.cheesecake.badge": "Celestial Signature",
    "item.cheesecake.tag": "House Bake",

    "item.babka.title": "Cardamom Spiced Babka",
    "item.babka.desc": "Warm buttery braided brioche filled with freshly crushed cardamom, dark chocolate, and blossom glaze.",
    "item.babka.badge": "Daily Bake",
    "item.babka.tag": "Fresh Batch",

    "item.acai.title": "Acai of the Stars",
    "item.acai.desc": "Organic Amazonian acai bowl with crisp maple granola, fresh dragonfruit, blueberries, and raw local honey.",
    "item.acai.badge": "Organic Bowl",
    "item.acai.tag": "Superfood",

    // The TTMB Experience
    "exp.eyebrow": "ATMOSPHERE & RITUAL",
    "exp.title": "COFFEE. FOOD. GOOD VIBES.",
    "exp.lead": "A hidden corner in Jumeirah, made for slow mornings and good conversations.",
    "exp.pill_1": "Melbourne Coffee Culture",
    "exp.pill_2": "Quiet Residential Sanctuary",
    "exp.pill_3": "Artisanal Scratch Kitchen",
    "exp.pill_4": "Cozy Community Space",

    // Cosmic Brand Moment
    "cosmic.eyebrow": "THE CELESTIAL IDENTITY",
    "cosmic.sub": "TAKE A LITTLE TRIP",
    "cosmic.headline": "TO THE MOON & BACK",
    "cosmic.lead": "Specialty coffee, good food, and a place worth discovering.",
    "cosmic.mural_caption": "The 2-Meter Astronaut Mural · Jumeirah 2, Dubai",

    // Our Story
    "story.eyebrow": "OUR STORY",
    "story.title": "OUR STORY",
    "story.tagline": "From Melbourne\nto Jumeirah.",
    "story.p1": "TTMB was born from a deep love for Melbourne's iconic specialty coffee scene—a culture grounded in uncompromising roasting precision, slow rituals, and honest warmth.",
    "story.p2": "Brought to Dubai, TTMB opened its doors in the tranquil, low-rise residential neighborhood of Jumeirah 2. Underneath the gaze of our iconic astronaut mural, guests find a quiet respite to connect, reflect, and savor exceptional coffee.",
    "story.quote": "A cup crafted with intention, in a space that lets you breathe.",
    "story.link": "READ OUR STORY",

    // Gallery
    "gallery.eyebrow": "VISUAL DIARY",
    "gallery.title": "OUR LITTLE UNIVERSE",
    "gallery.handle": "@ttmb.coffee",
    "gallery.follow": "FOLLOW ON INSTAGRAM",

    // Find Us
    "find.eyebrow": "VISIT US",
    "find.title": "FIND YOUR WAY\nTO THE MOON",
    "find.venue": "TTMB — To The Moon & Back",
    "find.sub_jumeirah": "Jumeirah 2, Dubai",
    "find.addr_label": "LOCATION",
    "find.addr_val": "La Plage Complex, Al Athar Street, Jumeirah 2, Dubai, United Arab Emirates",
    "find.hours_label": "OPENING HOURS",
    "find.hours_val": "Daily: 7:00 AM – 9:00 PM",
    "find.contact_label": "INSTAGRAM",
    "find.contact_val": "@ttmb.coffee",
    "find.btn_directions": "GET DIRECTIONS",

    // Final CTA
    "cta.title": "READY FOR A LITTLE ESCAPE?",
    "cta.lead": "Come find us.",
    "cta.btn_menu": "EXPLORE MENU",
    "cta.btn_find": "FIND US",

    // Footer
    "footer.brand": "TO THE MOON & BACK",
    "footer.brand_ar": "إلى القمر والعودة",
    "footer.location": "Jumeirah 2 · Dubai",
    "footer.nav_title": "PAGES",
    "footer.social_title": "CONNECT",
    "footer.rights": "© 2026 To The Moon & Back. All rights reserved.",

    // Modal Headings
    "modal.menu_title": "THE FULL MENU",
    "modal.menu_sub": "Carefully roasted beans & wholesome kitchen crafts",
    "modal.story_title": "THE TTMB NARRATIVE",
    "modal.close": "Close"
  },

  ar: {
    // Nav
    "nav.brand": "TTMB",
    "nav.brand_sub": "إلى القمر والعودة",
    "nav.menu": "القائمة",
    "nav.story": "قصتنا",
    "nav.find_us": "موقعنا",
    "nav.lang": "EN",

    // Hero
    "hero.location": "جميرا · دبي",
    "hero.title_en": "TO THE MOON & BACK",
    "hero.title_ar": "إلى القمر والعودة",
    "hero.subtitle": "قهوة مختصة · مأكولات راقية · دبي",
    "hero.btn_menu": "استكشف القائمة",
    "hero.btn_find": "موقعنا في جميرا",
    "hero.scroll": "اكتشف المزيد",

    // A Little Escape
    "escape.eyebrow": "جميرا 2 · دبي",
    "escape.title": "ملاذ هادئ\nفي جميرا",
    "escape.lead": "أكثر من مجرد قهوة.\nمساحة للهدوء، واللقاء، وعيش اللحظة.",
    "escape.link": "قصتنا",
    "escape.badge": "ملاذ هادئ لصباحات ملهمة في جميرا",

    // Signature Menu
    "menu.eyebrow": "مختاراتنا",
    "menu.title": "مختاراتنا المميزة",
    "menu.lead": "اكتشف بعض الإبداعات التي تجعل زيارة TTMB تجربة تستحق العناء.",
    "menu.tab_coffee": "القهوة",
    "menu.tab_food": "المأكولات",
    "menu.tab_sweet": "الحلويات",
    "menu.btn_full": "عرض القائمة الكاملة",

    // Signatures Items - Coffee
    "item.flatwhite.title": "فلات وايت",
    "item.flatwhite.desc": "رغوة حليب مخملية متقنة فوق دوبل ريستريتو غني، مستوحى من تقاليد القهوة المختصة في ملبورن.",
    "item.flatwhite.badge": "تحضير خاص",
    "item.flatwhite.tag": "سلالة مختصة",

    "item.filter.title": "قهوة مقطرة V60",
    "item.filter.desc": "استخلاص يدوي متأنٍ لحبوب فردية المصدر يبرز نفحات زهرية ونقاءً لا مثيل له.",
    "item.filter.badge": "سلو بار",
    "item.filter.tag": "إثيوبيا يرغاتشيفي",

    "item.caramel.title": "آيسد كراميل مملح",
    "item.caramel.desc": "كراميل عنبري محضر يدويًا مع إسبراسو متوازن وحليب مخملي فوق مكعب ثلج نقي.",
    "item.caramel.badge": "تحضير منزلي",
    "item.caramel.tag": "مزيج حصري",

    // Signatures Items - Food
    "item.avo.title": "أفوكادو مهروس بالأعشاب",
    "item.avo.desc": "خبز ساوردو ريفي بالحبوب، أفوكادو طازج، بيض بوشيه، نعناع، ودقة فستق مع لمسة فلفل خفيفة.",
    "item.avo.badge": "طبق البرانش المفضل",
    "item.avo.tag": "ساوردو ريفي",

    "item.toastie.title": "توستي جبن بالكمأة",
    "item.toastie.desc": "خبز بريوش فاخر محمص، جبن غرويير وتشيدر معتق، متبل بزبدة الكمأة السوداء العطرية.",
    "item.toastie.badge": "توستي ملبورن",
    "item.toastie.tag": "إعداد طازج",

    "item.pastrami.title": "ساندويتش باستارمي ريفي",
    "item.pastrami.desc": "باستارمي متبل معتق، مخلل شبت محضر منزليًا، خردل حب، وجبن سويسري ذائب على خبز الجاودار.",
    "item.pastrami.badge": "مذاق شهي",
    "item.pastrami.tag": "معتق ببطء",

    // Signatures Items - Sweet
    "item.cheesecake.title": "تشيزكيك الفضاء",
    "item.cheesecake.desc": "تشيزكيك الباسك المحترق الأيقوني مغطى بطبقة توت بري مجري ساحرة ورقائق ذهب عيار 24 صالحة للأكل.",
    "item.cheesecake.badge": "أيقونة المكان",
    "item.cheesecake.tag": "مخبوز في المحل",

    "item.babka.title": "بابكا الهيل الدافئة",
    "item.babka.desc": "بريوش زبدي مضفور بالهيل المحمص والشوكولاتة الداكنة، مسقى بقطر زهر البرتقال الرقيق.",
    "item.babka.badge": "مخبوز يومي",
    "item.babka.tag": "طازج يوميًا",

    "item.acai.title": "أساي النجوم",
    "item.acai.desc": "أساي أمازوني عضوي مع غرانولا المابل المقرمشة، فاكهة التنين، التوت الطازج، وعسل السدر الطبيعي.",
    "item.acai.badge": "وعاء عضوي",
    "item.acai.tag": "طبيعي بالكامل",

    // The TTMB Experience
    "exp.eyebrow": "الأجواء والتجربة",
    "exp.title": "قهوة. طعام. وأجواء ملهمة.",
    "exp.lead": "ركن هادئ متوارٍ في جميرا، صُمم لصباحات هادئة وحوارات دافئة.",
    "exp.pill_1": "ثقافة قهوة ملبورن",
    "exp.pill_2": "ملاذ سكني هادئ",
    "exp.pill_3": "مطبخ حرفي طازج",
    "exp.pill_4": "مساحة اجتماعية دافئة",

    // Cosmic Brand Moment
    "cosmic.eyebrow": "الهوية الكونية",
    "cosmic.sub": "رحلة قصيرة",
    "cosmic.headline": "إلى القمر والعودة",
    "cosmic.lead": "قهوة مختصة، طعام متقن، ومكان يستحق أن تكتشفه.",
    "cosmic.mural_caption": "جدارية رائد الفضاء (قطر مترين) · جميرا 2، دبي",

    // Our Story
    "story.eyebrow": "قصتنا",
    "story.title": "قصتنا",
    "story.tagline": "من ملبورن\nإلى جميرا.",
    "story.p1": "انطلقت حكاية TTMB من عشق عميق لثقافة القهوة المختصة في مدينة ملبورن، حيث يُعد تحضير القهوة طقسًا يوميًا عنوانه الدقة والسكينة والدفء.",
    "story.p2": "وفي دبي، اخترنا جميرا 2 بهدوئها السكني الأخاذ لتكون موطنًا لهذا الملاذ. هنا، وتحت أنظار جدارية رائد الفضاء الشهيرة، يلتقي الباحثون عن الهدوء للاستمتاع بفنجان قهوة استثنائي ولقاء لا يُنسى.",
    "story.quote": "فنجان قُدّم بعناية، في مساحة تمنحك متسعًا للتنفس والسكينة.",
    "story.link": "اقرأ قصتنا",

    // Gallery
    "gallery.eyebrow": "يوميات بصرية",
    "gallery.title": "عالمنا الصغير",
    "gallery.handle": "@ttmb.coffee",
    "gallery.follow": "تابعنا على إنستغرام",

    // Find Us
    "find.eyebrow": "تفضل بزيارتنا",
    "find.title": "طريقك\nإلى القمر",
    "find.venue": "TTMB — إلى القمر والعودة",
    "find.sub_jumeirah": "جميرا 2، دبي",
    "find.addr_label": "الموقع",
    "find.addr_val": "مجمع لا بلاج، شارع الآثار، جميرا 2، دبي، الإمارات العربية المتحدة",
    "find.hours_label": "أوقات العمل",
    "find.hours_val": "يوميًا: 7:00 صباحًا – 9:00 مساءً",
    "find.contact_label": "إنستغرام",
    "find.contact_val": "@ttmb.coffee",
    "find.btn_directions": "الاتجاهات عبر Google Maps",

    // Final CTA
    "cta.title": "هل أنت مستعد لملاذ هادئ؟",
    "cta.lead": "ننتظرك بيننا.",
    "cta.btn_menu": "استكشف القائمة",
    "cta.btn_find": "موقعنا في جميرا",

    // Footer
    "footer.brand": "إلى القمر والعودة",
    "footer.brand_ar": "TO THE MOON & BACK",
    "footer.location": "جميرا 2 · دبي",
    "footer.nav_title": "الصفحات",
    "footer.social_title": "تواصل معنا",
    "footer.rights": "© 2026 إلى القمر والعودة. جميع الحقوق محفوظة.",

    // Modal Headings
    "modal.menu_title": "القائمة الكاملة",
    "modal.menu_sub": "حبوب مختصة محمصة بعناية ومخبوزات طازجة يوميًا",
    "modal.story_title": "حكاية TTMB",
    "modal.close": "إغلاق"
  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
