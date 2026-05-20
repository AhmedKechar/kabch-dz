/* ==========================================================================
   KABCH ENGINE (APP.JS)
   ========================================================================== */

// 1. MULTILINGUAL DICTIONARY (Arabic / English)
const translations = {
    ar: {
        doc_title: "KABCH-DZ | أضحيتك برؤية تكنولوجية فاخرة",
        brand_arabic: "كبش",
        nav_home: "الرئيسية",
        nav_store: "المتجر الفاخر",
        nav_dashboard: "لوحة المراقبة",
        nav_cta: "احجز أضحيتك",
        hero_tagline: "معايير النخبة للأضاحي العضوية الذكية",
        hero_t1: "مفهوم جديد",
        hero_t2: "لاقتناء الأضحية",
        hero_t3: "شفافية مطلقة",
        hero_desc: "اختر خروفك من بين سلالات بلدية نقية تمت تربيتها في أرقى مراعينا العضوية بالجزائر. تابع فحوصاته الطبية الأسبوعية، تحركاته، ومؤشراته الحيوية، وشاهده مباشرة 24/7 عبر كاميرات إنترنت الأشياء المثبتة بحقله.",
        hero_btn_explore: "استكشف حظيرة النخبة",
        hero_btn_dash: "لوحة المتابعة الذكية",
        img_placeholder_hero: "صورة كبش النخبة الفاخر",
        hero_status_heart: "نبض مستقر",
        hero_status_gps: "المرعى الذهبي - هضاب الجلفة",
        scroll_down: "مرر للأسفل لاستكشاف التكنولوجيا",
        exp_badge: "التكنولوجيا الزراعية الفاخرة",
        exp_title: "ريادة الرعاية والشفافية الرقمية",
        exp_subtitle: "لقد صممنا تجربة تضمن لك جودة لحم استثنائية وراحة بال دينية وصحية تامة طيلة فترة رعاية أضحيتك.",
        stack1_title: "بث مباشر شخصي 24/7 لأضحيتك",
        stack1_desc: "بمجرد اختيار كبشك، نخصص له قلادة ذكية بتقنية الـ RFID وكاميرا تتبع آلية تعمل بالذكاء الاصطناعي في حقولنا. شاهد أضحيتك وهي ترعى وتتحرك في أي وقت تشاء مباشرة عبر لوحة التحكم الخاصة بك.",
        stack1_b1: "كاميرات ذكاء اصطناعي تتتبع خروفك ذاتياً",
        stack1_b2: "بث مستمر عالي الدقة HD مشفر بالكامل",
        stack2_title: "الجواز البيطري والتحصين الرقمي",
        stack2_desc: "لكل كبش سجل طبي رقمي غير قابل للتعديل مسجل على قاعدة البيانات المحلية لدينا. يوثق السجل الفحوصات الطبية الأسبوعية، التطعيمات، والوجبات الغذائية المعتمدة على الأعشاب والشعير الطبيعي الخالي من الهرمونات.",
        stack2_b1: "غذاء نباتي طبيعي 100% خالٍ من المضادات الحيوية",
        stack2_b2: "تقرير صحي رسمي معتمد موقع من بيطري المنصة",
        passport_header: "دفتر الصحة الرقمي",
        passport_breed: "السلالة:",
        passport_status: "الحالة الصحية:",
        passport_status_val: "سليم وخالٍ من العيوب",
        stack3_title: "توصيل مبرد معقم فجر يوم العيد",
        stack3_desc: "نمتلك أسطولاً من شاحنات التبريد الذكية المزودة بأنظمة تتبع حراري مستمر. بعد الذبح الشرعي المعتمد، نقوم بتغليف اللحوم بتقنية سحب الهواء (Vacuum) وتوصيلها مبردة لباب منزلك لضمان سلامتها وطراوتها.",
        stack3_b1: "حفظ اللحوم عند درجة حرارة ثابتة (2°م - 4°م)",
        stack3_b2: "تحديد موعد دقيق للتسليم عبر تتبع نظام GPS",
        gallery_badge: "شركاء المراعي النظيفة",
        gallery_title: "مراعي جبلية شاسعة لتربية مستدامة",
        gallery_subtitle: "نعتمد على مزارع رائدة تم اختيارها بعناية في الجزائر لضمان أفضل تغذية وجودة لحياة الماشية.",
        farm1_loc: "الهضاب العليا، الجلفة",
        farm1_name: "مراعي السهوب الذهبية",
        farm1_desc: "تشتهر هذه المنطقة بجفاف هوائها وأعشاب الشيح والحرمل المغذية، مما يمنح سلالة أولاد جلال قوة بدنية ولحماً قليل الدهون ذا نكهة غنية فريدة.",
        farm_stat_heads: "رأس ماشية",
        farm_stat_rating: "تقييم النخبة",
        farm2_loc: "جبال الأوراس الشامخة",
        farm2_name: "مزرعة قمم الأوراس العضوية",
        farm2_desc: "ترعى الأغنام هنا على سفوح جبال الأوراس الباردة وتتغذى على أعشاب جبلية طبيعية وتتحرك بحرية في مساحات شاسعة، مما يكسبها مناعة طبيعية خارقة ولحماً طرياً.",
        farm3_loc: "سهول التيارت الخصبة",
        farm3_name: "مزارع السنابل الخضراء بتيارت",
        farm3_desc: "مزارع نموذجية حديثة تعتمد على زراعة الشعير العضوي والبرسيم المروي بمياه الآبار العذبة النقية، وتوفر الفحص والتحصين المبرمج لكل رأس أسبوعياً.",
        store_badge: "حظيرة كبش الرقمية",
        store_title: "اختر أضحيتك بعناية تامة",
        store_subtitle: "جميع الكباش المعروضة سلالات بلدية نقية، خاضعة للفحص البيطري والشرعي، وتتغذى على أعلاف طبيعية بنسبة 100%.",
        filter_title: "خيارات التصفية",
        filter_reset: "إعادة تعيين",
        filter_search: "البحث بالمعرّف أو السلالة",
        filter_breed: "السلالة",
        breed_ouled_djellal: "أولاد جلال",
        breed_naimi: "نعيمي بلدي",
        breed_rembi: "الرمبي الجزائري",
        breed_hamra: "الحمراء الغربية",
        breed_tadmit: "سلالة تادمت",
        breed_barbarin: "البربرية التونسية",
        filter_weight: "الوزن المستهدف (كجم)",
        store_results_found: "تم العثور على",
        store_results_unit: "رأس كبش",
        store_sort_by: "ترتيب حسب:",
        sort_default: "الافتراضي (الأفضل جودة)",
        sort_price_asc: "السعر (من الأقل للأعلى)",
        sort_price_desc: "السعر (من الأعلى للأقل)",
        sort_weight_desc: "الوزن (الأثقل أولاً)",
        store_loading_items: "جاري تحميل حظيرة كبش...",
        dash_badge: "بوابة المتابعة البيومترية",
        dash_title: "لوحة التحكم والمراقبة المباشرة",
        dash_subtitle: "تتبع المؤشرات الحيوية لكباشك المحجوزة، وافتح كاميرا البث المباشر للتحقق من الأضحية في أي وقت.",
        dash_reserved_title: "كباشك المحجوزة",
        dash_no_sheep: "لا توجد أضاحي محجوزة بهذا المتصفح حالياً. تفضل بزيارة المتجر لحجز أضحيتك الأولى.",
        dash_btn_go_store: "انتقل للمتجر الآن",
        dash_select_instruction: "يرجى اختيار أضحية من القائمة الجانبية لتنشيط الاتصال البيومتري وتشغيل كاميرا المزرعة الحية.",
        dash_connected: "البث المباشر متصل",
        tel_weight: "الوزن الحالي",
        unit_kg: "كجم",
        tel_bpm: "نبضات القلب",
        unit_bpm: "ن/د",
        tel_temp: "درجة الحرارة",
        tel_steps: "الخطوات اليومية",
        unit_steps: "خطوة",
        dash_actions_title: "التحكم التفاعلي بالأضحية",
        dash_actions_desc: "قم بإرسال أوامر فورية للطوق الذكي المغذي للكبش الخاص بك لمحاكاة الأنشطة التالية:",
        btn_feed_action: "تغذية بمكافأة شعير",
        btn_scare_action: "تحفيز نشاط حركي",
        btn_cancel_action: "إلغاء حجز هذه الأضحية",
        cart_title: "سلة المحجوزات",
        cart_empty: "السلة فارغة حالياً. تصفح الكباش المتاحة وقم بإضافة خيارك المفضل.",
        cart_total: "المجموع الإجمالي:",
        cart_btn_checkout: "الذهاب لتأكيد الحجز",
        qv_weight: "الوزن الفعلي",
        qv_age: "السن",
        qv_months: "شهراً",
        qv_health_title: "الضمان الصحي والشرعي",
        qv_health1: "خالٍ من العرج، العور، والكسور الشرعية.",
        qv_health2: "خاضع للتلقيح السنوي وفحص البيطري أسبوعياً.",
        btn_add_to_cart: "أضف للسلة واحجز الآن",
        checkout_title: "تأكيد حجز الأضحية",
        checkout_subtitle: "الدفع نقداً عند الاستلام فجر يوم العيد. يرجى ملء بيانات التوصيل الأساسية لتسجيل طلبيتك.",
        form_name: "الاسم الكامل",
        form_phone: "رقم الهاتف",
        form_state: "الولاية / المدينة",
        form_state_placeholder: "اختر ولايتك",
        form_address: "العنوان بالتفصيل",
        checkout_count: "عدد الأضاحي المحجوزة:",
        checkout_total_price: "الإجمالي النهائي:",
        btn_confirm_order: "تأكيد وحفظ الطلبية فورا",
        footer_brand_desc: "منصة رائدة لإدارة وحجز الأضاحي الفاخرة بطرق تكنولوجية حديثة لضمان الجودة، الراحة، والشفافية التامة.",
        footer_links_title: "روابط سريعة",
        footer_health_title: "الالتزام الشرعي",
        footer_h1: "مطابقة الأحكام الشرعية",
        footer_h2: "الرقابة الطبية والمخبرية",
        footer_h3: "رعاية نباتية طبيعية"
    },
    en: {
        doc_title: "KABCH-DZ | Premium Sacrificial Sheep Platform",
        brand_arabic: "KABCH-DZ",
        nav_home: "Home",
        nav_store: "Luxury Barn",
        nav_dashboard: "Live Dashboard",
        nav_cta: "Book Sacrifice",
        hero_tagline: "Elite Standards for Smart Organic Sacrifices",
        hero_t1: "A New Concept",
        hero_t2: "To Select Sacrifices",
        hero_t3: "Absolute Clarity",
        hero_desc: "Select your sheep from pure native breeds raised in Algeria's finest organic pastures. Track weekly veterinary checks, movements, biometrics, and watch them live 24/7 via custom IoT field cameras.",
        hero_btn_explore: "Explore Elite Barn",
        hero_btn_dash: "Smart Control Panel",
        img_placeholder_hero: "Premium Sheep Portrait Placeholder",
        hero_status_heart: "Stable Heartbeat",
        hero_status_gps: "Golden Pasture - Djelfa Highlands",
        scroll_down: "Scroll Down to Explore Tech",
        exp_badge: "Luxury AgriTech",
        exp_title: "Leading Care & Digital Transparency",
        exp_subtitle: "We designed an experience that ensures exceptional meat quality and full religious and health peace of mind during the rearing of your sacrifice.",
        stack1_title: "Personal 24/7 Live Stream",
        stack1_desc: "Once you choose your sheep, we assign it a smart RFID collar and an automated AI-guided tracking camera in our fields. Watch your sheep graze and play at any time directly through your dashboard.",
        stack1_b1: "Autonomous AI cameras tracking your sheep",
        stack1_b2: "Continuous HD stream fully encrypted",
        stack2_title: "Digital Health Passport & Vaccines",
        stack2_desc: "Each sheep has an unalterable digital health record saved on our local database. The record documents weekly medical tests, vaccinations, and natural vegetation diets free of hormones.",
        stack2_b1: "100% natural herbal diet, antibiotic-free",
        stack2_b2: "Official health report certified by our veterinarian",
        passport_header: "Digital Health Passport",
        passport_breed: "Breed:",
        passport_status: "Health Status:",
        passport_status_val: "Perfect & Defect-Free",
        stack3_title: "Sanitized Cold-Chain Delivery on Eid Morning",
        stack3_desc: "We own a fleet of smart refrigerated trucks equipped with continuous thermal tracking. After certified Islamic slaughtering, we vacuum-seal the meat and deliver it to your doorstep.",
        stack3_b1: "Meat preserved at constant cold temperature (2°C - 4°C)",
        stack3_b2: "Precise delivery window scheduled via GPS tracking",
        gallery_badge: "Clean Pastures Partners",
        gallery_title: "Spacious Pastures for Sustainable Rearing",
        gallery_subtitle: "We partner with leading, carefully selected organic farms in Algeria to ensure optimal grazing and welfare.",
        farm1_loc: "Highlands, Djelfa",
        farm1_name: "Golden Steppes Pastures",
        farm1_desc: "Renowned for dry air and nutritious wild wormwood herbs, giving Ouled Djellal breed natural muscle tone and low-fat, richly flavored meat.",
        farm_stat_heads: "Heads of Sheep",
        farm_stat_rating: "Elite Rating",
        farm2_loc: "Majestic Aures Mountains",
        farm2_name: "Aures Peaks Organic Farm",
        farm2_desc: "Sheep graze on cool highlands feeding on mountain herbs with absolute freedom, gaining strong natural immunity and tender texture.",
        farm3_loc: "Fertile Tiaret Plains",
        farm3_name: "Tiaret Green Ears Farms",
        farm3_desc: "Modern organic farms relying on cultivated organic barley and alfalfa, providing weekly veterinary logs for every single head.",
        store_badge: "KABCH-DZ Digital Barn",
        store_title: "Choose Your Sacrifice Carefully",
        store_subtitle: "All listed sheep are pure native breeds, subject to strict medical & Islamic vetting, and fed 100% natural feed.",
        filter_title: "Filter Options",
        filter_reset: "Reset All",
        filter_search: "Search ID or Breed",
        filter_breed: "Breed",
        breed_ouled_djellal: "Ouled Djellal",
        breed_naimi: "Naeemi Baladi",
        breed_rembi: "Algerian Rembi",
        breed_hamra: "West Algerian Hamra",
        breed_tadmit: "Tadmit Breed",
        breed_barbarin: "Barbarin Fat-Tailed",
        filter_weight: "Target Weight (Kg)",
        store_results_found: "Found",
        store_results_unit: "heads of sheep",
        store_sort_by: "Sort By:",
        sort_default: "Default (Best Quality)",
        sort_price_asc: "Price (Low to High)",
        sort_price_desc: "Price (High to Low)",
        sort_weight_desc: "Weight (Heaviest First)",
        store_loading_items: "Loading barn...",
        dash_badge: "Biometric Portal",
        dash_title: "Control Panel & Live Telemetry",
        dash_subtitle: "Track live biometric markers of your booked sheep, and open the live pasture CCTV anytime.",
        dash_reserved_title: "Your Booked Sacrifices",
        dash_no_sheep: "No booked sacrifices found in this browser. Please visit the store to place your first reservation.",
        dash_btn_go_store: "Go to Store Now",
        dash_select_instruction: "Please select an item from the sidebar to activate the biometric links and launch the live stream camera.",
        dash_connected: "Live CCTV Stream Online",
        tel_weight: "Current Weight",
        unit_kg: "Kg",
        tel_bpm: "Heart Rate",
        unit_bpm: "BPM",
        tel_temp: "Body Temp",
        tel_steps: "Daily Steps",
        unit_steps: "steps",
        dash_actions_title: "Interactive Sheep Controls",
        dash_actions_desc: "Send instant signals to the smart tracking collar on your sheep to simulate these activities:",
        btn_feed_action: "Feed Barley Treat",
        btn_scare_action: "Simulate Cardio Activity",
        btn_cancel_action: "Cancel Booking",
        cart_title: "Shopping Basket",
        cart_empty: "Your basket is empty. Browse our catalog to reserve your sheep.",
        cart_total: "Total Amount:",
        cart_btn_checkout: "Proceed to Booking Confirmation",
        qv_weight: "Actual Weight",
        qv_age: "Age",
        qv_months: "Months",
        qv_health_title: "Health & Vetting Guarantee",
        qv_health1: "100% free of lameness, blindness, or defect.",
        qv_health2: "Received all vaccinations and weekly vet logs.",
        btn_add_to_cart: "Add to Basket & Reserve",
        checkout_title: "Confirm Your Reservation",
        checkout_subtitle: "Cash on delivery on Eid morning. Please fill in the essential delivery fields to book.",
        form_name: "Full Name",
        form_phone: "Phone Number",
        form_state: "State / Wilaya",
        form_state_placeholder: "Select your Wilaya",
        form_address: "Detailed Street Address",
        checkout_count: "Reserved Sacrifices:",
        checkout_total_price: "Grand Total:",
        btn_confirm_order: "Confirm Order Instantly",
        footer_brand_desc: "A pioneering platform for booking and managing premium sacrifices with high transparency and modern tech.",
        footer_links_title: "Quick Links",
        footer_health_title: "Sharia Compliance",
        footer_h1: "Halal & Sharia Compliance",
        footer_h2: "Vetting & Laboratory Inspection",
        footer_h3: "Natural Herbal Feeding"
    }
};

// 2. DYNAMIC STATE CONFIGURATION
let currentLang = 'ar';
let currentCurrency = 'DZD'; // 'DZD' or 'USD'
const currencyRate = 200; // 1 USD = 200 DZD (approx local/parallel market rate)

// Mock Catalog Data (pre-populated in IndexedDB if empty)
const initialCatalogData = [
    {
        id: "KB-9081",
        breed: "ouled-djellal",
        priceDZD: 204000,
        weight: 58,
        age: 14,
        desc_ar: "سلالة أولاد جلال الشهيرة من سهوب الجلفة. يتميز بالبنية العظمية القوية، الصوف الأبيض الناصع، ونسبة اللحم المرتفعة مع طعم غني بسبب تغذيته على نبات الشيح العطري.",
        desc_en: "Famous Ouled Djellal breed from Djelfa steppes. Features a strong skeletal frame, pure white wool, high meat yield, and a rich herbal flavor from feeding on wild wormwood.",
        farm_ar: "مراعي السهوب الذهبية",
        farm_en: "Golden Steppes Pastures",
        activity: "نشيط جداً (Active)",
        bpm: 72,
        temp: 39.0,
        image: "assets/images/sheep-ouled-djellal.png",
        name_ar: "أولاد جلال الجلفة",
        name_en: "Ouled Djellal of Djelfa"
    },
    {
        id: "KB-9082",
        breed: "naimi",
        priceDZD: 216000,
        weight: 62,
        age: 16,
        desc_ar: "نعيمي بلدي أصيل يتميز بقرون مهيبة وصوف كثيف. يتغذى على الشعير العضوي والبرسيم الجاف في حظائر مخصصة، مما يضمن طعمًا متوازنًا ولحمًا صحيًا تمامًا.",
        desc_en: "Pure Naeemi breed featuring majestic horns and thick coat. Fed on organic barley and alfalfa in special paddocks, ensuring balanced taste and highly healthy meat.",
        farm_ar: "مزارع السنابل الخضراء بتيارت",
        farm_en: "Tiaret Green Ears Farms",
        activity: "مستقر وهادئ (Calm)",
        bpm: 68,
        temp: 38.9,
        image: "assets/images/sheep-naimi.jpeg",
        name_ar: "نعيمي الهضاب",
        name_en: "Naeemi of the Plateaus"
    },
    {
        id: "KB-9083",
        breed: "rembi",
        priceDZD: 177000,
        weight: 51,
        age: 12,
        desc_ar: "سلالة الرمبي الجبلية الأصلية من مرتفعات تيارت. يتميز بالقدرة الكبيرة على الحركة ورعايته على الأعشاب البرية الطبيعية في المنحدرات الباردة مما يقلل نسبة الشحوم.",
        desc_en: "Authentic Rembi mountain breed from Tiaret highlands. Features high agility and feeds on wild mountain herbs on cool slopes, resulting in very lean meat.",
        farm_ar: "مزارع السنابل الخضراء بتيارت",
        farm_en: "Tiaret Green Ears Farms",
        activity: "نشيط (Active)",
        bpm: 74,
        temp: 39.2,
        image: "assets/images/sheep-rembi-new.png",
        name_ar: "رمبي السهوب",
        name_en: "Rembi of the Steppes"
    },
    {
        id: "KB-9084",
        breed: "ouled-djellal",
        priceDZD: 252000,
        weight: 73,
        age: 19,
        desc_ar: "كبش جامبو استثنائي من سلالة أولاد جلال النقية. مثالي للعائلات الكبيرة، خضع لفحوصات إضافية ومحمي بالكامل بقلادة التتبع الذكية.",
        desc_en: "Exceptional Jumbo Ouled Djellal sheep. Ideal for large families, fully vetted and tracked by our smart digital tag system.",
        farm_ar: "مراعي السهوب الذهبية",
        farm_en: "Golden Steppes Pastures",
        activity: "نشيط جداً (Active)",
        bpm: 70,
        temp: 39.1,
        image: "assets/images/sheep-ouled-djellal2.png",
        name_ar: "أولاد جلال الأوراس",
        name_en: "Ouled Djellal of Aures"
    },
    {
        id: "KB-9085",
        breed: "naimi",
        priceDZD: 162000,
        weight: 46,
        age: 11,
        desc_ar: "كبش نعيمي بلدي متوسط الوزن، مثالي للأسر الصغيرة. يتمتع بنشاط حيوي رائع وصحة مثالية مع شهادة تطعيمات كاملة.",
        desc_en: "Naeemi sheep, medium weight, ideal for small families. Features high vitality, perfect health, and full digital vaccine clearance.",
        farm_ar: "مزرعة قمم الأوراس العضوية",
        farm_en: "Aures Peaks Organic Farm",
        activity: "حيوي (Vital)",
        bpm: 76,
        temp: 39.0,
        image: "assets/images/sheep-naimi2.png",
        name_ar: "نعيمي الصحراء",
        name_en: "Naeemi of the Desert"
    },
    {
        id: "KB-9086",
        breed: "rembi",
        priceDZD: 195000,
        weight: 55,
        age: 13,
        desc_ar: "سلالة الرمبي المميز بلون صوفه البني والذهبي المميز. تربى في سفوح الأوراس الباردة على المياه العذبة والأعلاف الطبيعية المنتقاة.",
        desc_en: "Premium Rembi breed with distinct brown-shaded wool. Raised in cool Aures mountains on fresh mountain water and curated natural forage.",
        farm_ar: "مزرعة قمم الأوراس العضوية",
        farm_en: "Aures Peaks Organic Farm",
        activity: "مستقر (Stable)",
        bpm: 71,
        temp: 38.8,
        image: "assets/images/sheep-rembi2.png",
        name_ar: "رمبي الجبال",
        name_en: "Rembi of the Mountains"
    },
    {
        id: "KB-9087",
        breed: "hamra",
        priceDZD: 189000,
        weight: 53,
        age: 13,
        desc_ar: "سلالة الحمراء الأصيلة من مراعي سعيدة. تتميز باللحم الأحمر الطيب قليل الدهون واللون الداكن الجميل، تمت تربيتها على الكلأ الطبيعي.",
        desc_en: "Authentic Hamra breed from Saida pastures. Known for delicious lean red meat and a beautiful dark coat, raised on natural forage.",
        farm_ar: "مراعي الهضاب الغربية",
        farm_en: "Western Plateaus Pastures",
        activity: "نشيط (Active)",
        bpm: 73,
        temp: 39.1,
        image: "assets/images/sheep-hamra.png",
        name_ar: "حمراء سعيدة الأصيلة",
        name_en: "Authentic Saida Hamra"
    },
    {
        id: "KB-9088",
        breed: "tadmit",
        priceDZD: 231000,
        weight: 65,
        age: 17,
        desc_ar: "سلالة تادمت النادرة الناتجة عن تهجين أولاد جلال والميرينوس. تتميز بالصوف الكثيف والناعم ولحمها اللذيذ الطيب، تربت في بيئة سهبية نقية.",
        desc_en: "Rare Tadmit breed created from crossbreeding Ouled Djellal and Merinos. Features dense fine wool and excellent meat quality, raised in a pure steppe environment.",
        farm_ar: "مراعي السهوب الذهبية",
        farm_en: "Golden Steppes Pastures",
        activity: "نشيط (Active)",
        bpm: 71,
        temp: 39.0,
        image: "assets/images/sheep-rembi.png",
        name_ar: "تادمت الجلفة العريقة",
        name_en: "Ancient Tadmit of Djelfa"
    },
    {
        id: "KB-9089",
        breed: "barbarin",
        priceDZD: 210000,
        weight: 59,
        age: 15,
        desc_ar: "سلالة البربرية ذات الذيل السمين العريق. تشتهر في المناطق السهبية بمذاق لحمها الفريد وقدرتها الممتازة على الرعي الطبيعي.",
        desc_en: "Barbarin breed with the traditional fat tail. Popular in steppe regions for its unique flavorful meat and excellent grazing ability.",
        farm_ar: "مزرعة قمم الأوراس العضوية",
        farm_en: "Aures Peaks Organic Farm",
        activity: "مستقر (Stable)",
        bpm: 70,
        temp: 38.9,
        image: "assets/images/hero_sheep_premium.png",
        name_ar: "دبيش غرداية العريق",
        name_en: "Ancient Ghardaia Dbeh"
    }
];

// ==========================================================================
// INDEXEDDB LOCAL DATABASE ENGINE
// ==========================================================================
class KabchDB {
    constructor() {
        this.dbName = "KabchDB";
        this.dbVersion = 1;
        this.db = null;
    }

    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = (e) => reject("Database error: " + e.target.errorCode);
            
            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve();
            };

            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                
                // Create stores
                if (!db.objectStoreNames.contains("catalog")) {
                    db.createObjectStore("catalog", { keyPath: "id" });
                }
                if (!db.objectStoreNames.contains("cart")) {
                    db.createObjectStore("cart", { keyPath: "id" });
                }
                if (!db.objectStoreNames.contains("orders")) {
                    db.createObjectStore("orders", { keyPath: "id" });
                }
            };
        });
    }

    // Prefill catalog if empty
    prefillCatalog() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("catalog", "readwrite");
            const store = tx.objectStore("catalog");
            
            store.clear();
            initialCatalogData.forEach(item => store.put(item));
            
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject("Failed to update catalog database");
        });
    }

    // Get all catalog products
    getProducts() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("catalog", "readonly");
            const store = tx.objectStore("catalog");
            const request = store.getAll();
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Failed to load products");
        });
    }

    // Cart Operations
    getCart() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("cart", "readonly");
            const store = tx.objectStore("cart");
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Failed to load cart");
        });
    }

    addToCart(product) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("cart", "readwrite");
            const store = tx.objectStore("cart");
            const request = store.put(product);
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to add to cart");
        });
    }

    removeFromCart(id) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("cart", "readwrite");
            const store = tx.objectStore("cart");
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to remove from cart");
        });
    }

    clearCart() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("cart", "readwrite");
            const store = tx.objectStore("cart");
            const request = store.clear();
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to clear cart");
        });
    }

    // Order Operations
    getOrders() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("orders", "readonly");
            const store = tx.objectStore("orders");
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Failed to load orders");
        });
    }

    addOrder(order) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("orders", "readwrite");
            const store = tx.objectStore("orders");
            const request = store.put(order);
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to save order");
        });
    }

    deleteOrder(id) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("orders", "readwrite");
            const store = tx.objectStore("orders");
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to delete order");
        });
    }
}

// Instantiate Database
const db = new KabchDB();

// ==========================================================================
// TOAST NOTIFICATIONS & PRICE FORMATTER
// ==========================================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '<i class="fa-solid fa-circle-check toast-icon"></i>';
    if (type === 'danger') {
        icon = '<i class="fa-solid fa-triangle-exclamation toast-icon"></i>';
    }
    
    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.animation = 'toastIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) reverse';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Convert and Format Price
function formatPrice(dzdPrice) {
    if (currentCurrency === 'USD') {
        const usdPrice = (dzdPrice / currencyRate).toFixed(2);
        return `$${Number(usdPrice).toLocaleString()}`;
    } else {
        const formatted = dzdPrice.toLocaleString();
        return currentLang === 'ar' ? `${formatted} د.ج` : `${formatted} DZD`;
    }
}

// ==========================================================================
// MULTILINGUAL & RENDER SYSTEM
// ==========================================================================
function translatePage() {
    const dict = translations[currentLang];
    
    // Set html dir and lang attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Translate text of all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Update active indicators in nav (guarded - elements may not exist)
    const activeLangEl = document.getElementById('active-lang');
    if (activeLangEl) activeLangEl.textContent = currentLang === 'ar' ? 'EN' : 'AR';
}

// Switch Currency
function toggleCurrency() {
    currentCurrency = currentCurrency === 'DZD' ? 'USD' : 'DZD';
    const activeCurrencyEl = document.getElementById('active-currency');
    if (activeCurrencyEl) activeCurrencyEl.textContent = currentCurrency;
    
    // Force re-render of catalog, cart, and prices
    renderCatalog();
    renderCart();
    updateCheckoutSummary();
    
    // If telemetry dashboard is active, re-render dashboard values
    if (activeDashboardSheep) {
        document.getElementById('db-stat-price').textContent = formatPrice(activeDashboardSheep.priceDZD);
    }
    
    const currencyMsg = currentLang === 'ar' 
        ? `تم تحويل العملة إلى ${currentCurrency === 'DZD' ? 'الدينار الجزائري' : 'الدولار الأمريكي'}` 
        : `Currency switched to ${currentCurrency}`;
    showToast(currencyMsg);
}

// Switch Language
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    translatePage();
    renderCatalog();
    renderCart();
    renderBookedSheepList();
    
    const langMsg = currentLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language switched to English';
    showToast(langMsg);
}

// ==========================================================================
// SPA ROUTER & VIEWS transitions
// ==========================================================================
let activeView = 'home';

function switchView(targetView) {
    if (activeView === targetView) return;
    
    const cols = document.querySelectorAll('.transition-cols .t-col');
    const logo = document.querySelector('.curtain-logo');
    const oldView = document.getElementById(`${activeView}-view`);
    const newView = document.getElementById(`${targetView}-view`);
    
    const isRtl = document.documentElement.dir === 'rtl';
    const enterOrigin = isRtl ? "right" : "left";
    const exitOrigin = isRtl ? "left" : "right";
    
    // 1. Column stagger sweep horizontally & active view slide out
    gsap.timeline()
        .set('.transition-cols', { pointerEvents: 'all' })
        .to(oldView, {
            opacity: 0,
            x: isRtl ? 60 : -60,
            duration: 0.55,
            ease: "power3.in"
        }, 0)
        .to(cols, {
            scaleX: 1,
            transformOrigin: enterOrigin,
            duration: 0.75,
            stagger: 0.06,
            ease: "power4.inOut"
        }, 0)
        .to(logo, { 
            opacity: 1, 
            y: 0, 
            scale: 1.05,
            duration: 0.45,
            ease: "back.out(1.7)"
        }, "-=0.35")
        .call(() => {
            // 2. Hide old view, show new view
            oldView.classList.add('hidden');
            oldView.classList.remove('active');
            gsap.set(oldView, { opacity: 1, x: 0 }); // Reset old view styles for next visit
            
            newView.classList.remove('hidden');
            newView.classList.add('active');
            
            // Set initial state for incoming new view (offset for sweep parallax entry)
            gsap.set(newView, { opacity: 0, x: isRtl ? -60 : 60 });
            
            // Update nav links active class
            document.querySelectorAll('.nav-link-item').forEach(link => {
                if (link.getAttribute('data-view') === targetView) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            activeView = targetView;
            window.scrollTo(0, 0);
            
            // Re-sync GSAP ScrollTrigger since DOM size changed
            ScrollTrigger.refresh();
            
            // If target view is dashboard, refresh the lists
            if (targetView === 'dashboard') {
                renderBookedSheepList();
            }
        })
        .to(logo, { 
            opacity: 0, 
            y: -20, 
            scale: 0.95,
            duration: 0.35, 
            ease: "power3.in",
            delay: 0.15 
        })
        .to(cols, {
            scaleX: 0,
            transformOrigin: exitOrigin,
            duration: 0.75,
            stagger: 0.06,
            ease: "power4.inOut"
        }, "-=0.25")
        .to(newView, {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power3.out"
        }, "-=0.65") // Overlap content entry with curtain sliding away
        .set('.transition-cols', { pointerEvents: 'none' });
}

// ==========================================================================
// CATALOG ENGINE (STORE)
// ==========================================================================
let catalogProducts = [];

async function loadStoreCatalog() {
    try {
        catalogProducts = await db.getProducts();
        renderCatalog();
    } catch (err) {
        console.error(err);
    }
}

function getSheepImage(product) {
    if (product && product.image) return product.image;
    const breed = typeof product === 'string' ? product : (product ? product.breed : '');
    if (breed === 'ouled-djellal') return 'assets/images/sheep-ouled-djellal.png';
    if (breed === 'naimi') return 'assets/images/sheep-naimi.jpeg';
    if (breed === 'rembi') return 'assets/images/sheep-rembi.png';
    return 'assets/images/sheep-ouled-djellal.png';
}

function renderCatalog() {
    const grid = document.getElementById('catalog-products-grid');
    if (!grid) return;
    
    // Apply filters
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    
    // Checkboxes
    const breedCheckboxes = document.querySelectorAll('.breed-filter-checkbox');
    const activeBreeds = [];
    breedCheckboxes.forEach(cb => {
        if (cb.checked) activeBreeds.push(cb.value);
    });
    
    // Weight slider
    const weightLimit = parseInt(document.getElementById('filter-weight-slider').value);
    
    // Sorting
    const sortVal = document.getElementById('sort-select').value;
    
    let filtered = catalogProducts.filter(item => {
        const matchesSearch = item.id.toLowerCase().includes(searchVal) || 
                              item.breed.toLowerCase().includes(searchVal) ||
                              (currentLang === 'ar' ? item.desc_ar : item.desc_en).toLowerCase().includes(searchVal);
        
        const matchesBreed = activeBreeds.includes(item.breed);
        const matchesWeight = item.weight >= weightLimit;
        
        return matchesSearch && matchesBreed && matchesWeight;
    });
    
    // Sort logic
    if (sortVal === 'price-asc') {
        filtered.sort((a, b) => a.priceDZD - b.priceDZD);
    } else if (sortVal === 'price-desc') {
        filtered.sort((a, b) => b.priceDZD - a.priceDZD);
    } else if (sortVal === 'weight-desc') {
        filtered.sort((a, b) => b.weight - a.weight);
    }
    
    // Render
    grid.innerHTML = '';
    
    document.getElementById('results-count-num').textContent = filtered.length;
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="grid-loading-state">
                <i class="fa-regular fa-face-frown" style="font-size: 3rem; color: var(--text-muted)"></i>
                <p>${currentLang === 'ar' ? 'لا توجد أضاحي تطابق خيارات التصفية الحالية.' : 'No sacrifices match the chosen filters.'}</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const title = currentLang === 'ar' 
            ? (product.name_ar || `كبش ${getBreedNameAr(product.breed)}`)
            : (product.name_en || `${getBreedNameEn(product.breed)}`);
            
        const ageLabel = currentLang === 'ar' ? 'شهراً' : 'Months';
        const kgLabel = currentLang === 'ar' ? 'كجم' : 'Kg';
        
        card.innerHTML = `
            <div class="p-card-image-box" style="background-image: url('${getSheepImage(product)}'); ${product.image && product.image.includes('sheep-naimi.jpeg') ? 'background-position: 85% center !important;' : ''}">
                <button class="qv-trigger-btn" data-id="${product.id}" title="${currentLang === 'ar' ? 'معاينة سريعة' : 'Quick View'}">
                    <i class="fa-solid fa-eye"></i>
                </button>
            </div>
            <div class="p-card-details">
                <div>
                    <span class="p-card-breed">${currentLang === 'ar' ? getBreedNameAr(product.breed) : getBreedNameEn(product.breed)}</span>
                    <h3 class="p-card-title">${title} (${product.id})</h3>
                    <div class="p-card-specs">
                        <span><i class="fa-solid fa-weight-hanging"></i> <strong class="num-font">${product.weight}</strong> ${kgLabel}</span>
                        <span><i class="fa-solid fa-calendar-days"></i> <strong class="num-font">${product.age}</strong> ${ageLabel}</span>
                    </div>
                </div>
                <div class="p-card-footer">
                    <span class="p-card-price price-tag">${formatPrice(product.priceDZD)}</span>
                    <button class="add-cart-btn-icon btn-add-to-cart-action" data-id="${product.id}" title="${currentLang === 'ar' ? 'أضف للسلة' : 'Add to Basket'}">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function getBreedNameAr(breed) {
    if (breed === 'ouled-djellal') return 'أولاد جلال';
    if (breed === 'naimi') return 'نعيمي بلدي';
    if (breed === 'rembi') return 'الرمبي';
    if (breed === 'hamra') return 'الحمراء';
    if (breed === 'tadmit') return 'تادمت';
    if (breed === 'barbarin') return 'البربرية';
    return breed;
}

function getBreedNameEn(breed) {
    if (breed === 'ouled-djellal') return 'Ouled Djellal';
    if (breed === 'naimi') return 'Naeemi';
    if (breed === 'rembi') return 'Rembi';
    if (breed === 'hamra') return 'Hamra';
    if (breed === 'tadmit') return 'Tadmit';
    if (breed === 'barbarin') return 'Barbarin';
    return breed;
}

// ==========================================================================
// QUICKVIEW MODAL ENGINE
// ==========================================================================
let activeQuickViewProduct = null;

function openQuickView(id) {
    const product = catalogProducts.find(p => p.id === id);
    if (!product) return;
    
    activeQuickViewProduct = product;
    
    const modal = document.getElementById('quick-view-modal');
    
    // Populate details
    document.getElementById('qv-val-breed').textContent = currentLang === 'ar' ? getBreedNameAr(product.breed) : getBreedNameEn(product.breed);
    document.getElementById('qv-val-id').textContent = `KABCH-DZ ID: ${product.id}`;
    document.getElementById('qv-val-price').textContent = formatPrice(product.priceDZD);
    document.getElementById('qv-val-weight').textContent = product.weight;
    document.getElementById('qv-val-age').textContent = product.age;
    
    document.getElementById('qv-val-desc').textContent = currentLang === 'ar' ? product.desc_ar : product.desc_en;
    
    // Set Image
    const qvImageBox = document.getElementById('qv-image-box');
    qvImageBox.innerHTML = `<img src="${getSheepImage(product)}" alt="${product.breed}" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));">`;
    
    modal.classList.remove('hidden');
    gsap.fromTo('.modal-content', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
}

function closeQuickView() {
    gsap.to('.modal-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            document.getElementById('quick-view-modal').classList.add('hidden');
            activeQuickViewProduct = null;
        }
    });
}

// ==========================================================================
// CART & CHECKOUT ENGINE
// ==========================================================================
let cartItems = [];

async function loadCart() {
    try {
        cartItems = await db.getCart();
        updateCartBadge();
    } catch (err) {
        console.error(err);
    }
}

function updateCartBadge() {
    document.getElementById('cart-badge-count').textContent = cartItems.length;
}

async function addItemToCart(id) {
    const product = catalogProducts.find(p => p.id === id);
    if (!product) return;
    
    // Check if already in cart
    if (cartItems.find(item => item.id === id)) {
        const msg = currentLang === 'ar' ? 'هذه الأضحية مضافة بالفعل للسلة.' : 'This sacrifice is already in your basket.';
        showToast(msg, 'danger');
        return;
    }
    
    try {
        await db.addToCart(product);
        cartItems.push(product);
        updateCartBadge();
        renderCart();
        
        const msg = currentLang === 'ar' ? 'تمت إضافة الأضحية للسلة بنجاح.' : 'Sacrifice added to basket.';
        showToast(msg);
    } catch (err) {
        console.error(err);
    }
}

async function removeItemFromCart(id) {
    try {
        await db.removeFromCart(id);
        cartItems = cartItems.filter(item => item.id !== id);
        updateCartBadge();
        renderCart();
        
        const msg = currentLang === 'ar' ? 'تمت إزالة الأضحية من السلة.' : 'Sacrifice removed from basket.';
        showToast(msg, 'danger');
    } catch (err) {
        console.error(err);
    }
}

function renderCart() {
    const wrapper = document.getElementById('cart-items-wrapper');
    const totalText = document.getElementById('cart-total-price');
    if (!wrapper) return;
    
    wrapper.innerHTML = '';
    
    if (cartItems.length === 0) {
        wrapper.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3.5rem; color: var(--text-muted)"></i>
                <p>${currentLang === 'ar' ? 'السلة فارغة حالياً. تصفح الكباش المتاحة وقم بإضافة خيارك المفضل.' : 'Your basket is empty. Browse our catalog to reserve your sheep.'}</p>
            </div>
        `;
        totalText.textContent = formatPrice(0);
        return;
    }
    
    let totalDZD = 0;
    
    cartItems.forEach(item => {
        totalDZD += item.priceDZD;
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        
        const title = currentLang === 'ar' 
            ? (item.name_ar || `كبش ${getBreedNameAr(item.breed)}`)
            : (item.name_en || `${getBreedNameEn(item.breed)}`);
            
        row.innerHTML = `
            <div class="cart-item-image-placeholder" style="background-image: url('${getSheepImage(item)}'); background-size: cover; background-position: center;">
            </div>
            <div class="cart-item-info">
                <span class="cart-item-id">${title} (${item.id})</span>
                <span class="cart-item-breed">${currentLang === 'ar' ? getBreedNameAr(item.breed) : getBreedNameEn(item.breed)} | ${item.weight} ${currentLang === 'ar' ? 'كجم' : 'Kg'}</span>
                <span class="cart-item-price">${formatPrice(item.priceDZD)}</span>
            </div>
            <button class="btn-remove-cart-item btn-remove-item-action" data-id="${item.id}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        
        wrapper.appendChild(row);
    });
    
    totalText.textContent = formatPrice(totalDZD);
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    if (open) {
        drawer.classList.add('active');
    } else {
        drawer.classList.remove('active');
    }
}

// Checkout Summary
function updateCheckoutSummary() {
    let totalDZD = 0;
    cartItems.forEach(item => totalDZD += item.priceDZD);
    
    document.getElementById('co-summary-count').textContent = cartItems.length;
    document.getElementById('co-summary-total').textContent = formatPrice(totalDZD);
}

// Checkout Dialog
function openCheckoutModal() {
    if (cartItems.length === 0) {
        const msg = currentLang === 'ar' ? 'السلة فارغة، لا يمكنك الدفع.' : 'Your basket is empty.';
        showToast(msg, 'danger');
        return;
    }
    
    updateCheckoutSummary();
    document.getElementById('checkout-modal').classList.remove('hidden');
    gsap.fromTo('.checkout-modal-card', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
}

function closeCheckoutModal() {
    gsap.to('.checkout-modal-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            document.getElementById('checkout-modal').classList.add('hidden');
        }
    });
}

// Submit Order (Save to IndexedDB)
async function submitOrder(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('co-fullname').value;
    const phone = document.getElementById('co-phone').value;
    const state = document.getElementById('co-state').value;
    const address = document.getElementById('co-address').value;
    
    // We create one order record, storing all cart items inside it
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    
    let totalDZD = 0;
    cartItems.forEach(item => totalDZD += item.priceDZD);
    
    const orderData = {
        id: orderId,
        customerName: fullName,
        customerPhone: phone,
        customerState: state,
        customerAddress: address,
        items: [...cartItems],
        totalDZD: totalDZD,
        status: "قيد المراجعة (Pending)",
        orderDate: new Date().toLocaleDateString()
    };
    
    try {
        await db.addOrder(orderData);
        await db.clearCart();
        
        cartItems = [];
        updateCartBadge();
        renderCart();
        
        closeCheckoutModal();
        toggleCartDrawer(false);
        
        const successMsg = currentLang === 'ar' 
            ? `تهانينا! تم حجز أضحيتك بنجاح. رقم الطلب: ${orderId}` 
            : `Congratulations! Order placed. ID: ${orderId}`;
            
        showToast(successMsg);
        
        // Reset form
        document.getElementById('checkout-form').reset();
        
        // Transition to Dashboard to view the live tracking
        setTimeout(() => {
            switchView('dashboard');
        }, 1000);
        
    } catch (err) {
        console.error(err);
        showToast("Error processing order.", "danger");
    }
}

// ==========================================================================
// DASHBOARD ENGINE & LIVE TELEMETRY SIMULATOR
// ==========================================================================
let bookedOrders = [];
let activeDashboardSheep = null;
let telemetryInterval = null;
let clockInterval = null;

async function renderBookedSheepList() {
    try {
        bookedOrders = await db.getOrders();
        const container = document.getElementById('booked-sheep-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Extract flat sheep list from orders to show in sidebar
        let flatSheepList = [];
        bookedOrders.forEach(order => {
            order.items.forEach(sheep => {
                flatSheepList.push({
                    sheepId: sheep.id,
                    orderId: order.id,
                    breed: sheep.breed,
                    priceDZD: sheep.priceDZD,
                    weight: sheep.weight,
                    status: order.status,
                    rawSheep: sheep
                });
            });
        });
        
        document.getElementById('saved-sheep-count').textContent = flatSheepList.length;
        
        if (flatSheepList.length === 0) {
            container.innerHTML = `
                <div class="empty-booked-state">
                    <i class="fa-regular fa-folder-open"></i>
                    <p>${currentLang === 'ar' ? 'لا توجد أضاحي محجوزة بهذا المتصفح حالياً.' : 'No reserved sacrifices found.'}</p>
                    <button class="btn btn-primary btn-sm btn-navigate" data-view="store">${currentLang === 'ar' ? 'انتقل للمتجر الآن' : 'Go to Store'}</button>
                </div>
            `;
            // Reset main telemetry view
            document.getElementById('db-no-selection').classList.remove('hidden');
            document.getElementById('db-active-panel').classList.add('hidden');
            stopTelemetrySimulation();
            return;
        }
        
        flatSheepList.forEach(item => {
            const card = document.createElement('div');
            card.className = `booked-sheep-card-item ${activeDashboardSheep && activeDashboardSheep.id === item.sheepId ? 'active' : ''}`;
            card.setAttribute('data-sheep-id', item.sheepId);
            
            const title = currentLang === 'ar' 
                ? (item.rawSheep.name_ar || `كبش ${getBreedNameAr(item.breed)}`)
                : (item.rawSheep.name_en || `${getBreedNameEn(item.breed)}`);
                
            card.innerHTML = `
                <div class="bs-card-header">
                    <span class="bs-card-id">${item.sheepId}</span>
                    <span class="bs-card-status">${currentLang === 'ar' ? 'مؤمن ومحجوز' : 'Reserved'}</span>
                </div>
                <div class="bs-card-breed">${title} | ${item.weight} ${currentLang === 'ar' ? 'كجم' : 'Kg'}</div>
            `;
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.booked-sheep-card-item').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                activateTelemetryView(item.rawSheep, item.orderId);
            });
            
            container.appendChild(card);
        });
        
    } catch (err) {
        console.error(err);
    }
}

function activateTelemetryView(sheep, orderId) {
    activeDashboardSheep = sheep;
    
    document.getElementById('db-no-selection').classList.add('hidden');
    document.getElementById('db-active-panel').classList.remove('hidden');
    
    // Fill static text
    const title = currentLang === 'ar' 
        ? (sheep.name_ar || `كبش ${getBreedNameAr(sheep.breed)}`)
        : (sheep.name_en || `${getBreedNameEn(sheep.breed)} Sheep`);
    document.getElementById('active-sheep-title').textContent = title;
    document.getElementById('active-sheep-id').textContent = sheep.id;
    document.getElementById('active-sheep-breed').textContent = currentLang === 'ar' ? getBreedNameAr(sheep.breed) : getBreedNameEn(sheep.breed);
    
    // HUD Camera
    document.getElementById('active-cctv-cam').textContent = currentLang === 'ar' 
        ? `CCTV CAM 04 - ${sheep.farm_ar}` 
        : `CCTV CAM 04 - ${sheep.farm_en}`;
        
    // Telemetry display values
    document.getElementById('tel-val-weight').textContent = sheep.weight;
    document.getElementById('tel-val-bpm').textContent = sheep.bpm;
    document.getElementById('tel-val-temp').textContent = sheep.temp.toFixed(1);
    
    // Start simulations
    startTelemetrySimulation(sheep, orderId);
}

function startTelemetrySimulation(sheep, orderId) {
    stopTelemetrySimulation();
    
    // 1. Clock timer simulation
    clockInterval = setInterval(() => {
        const now = new Date();
        document.getElementById('active-cctv-time').textContent = now.toLocaleTimeString();
    }, 1000);
    
    // 2. Real-time biometrics fluctuation
    let baseBpm = sheep.bpm;
    let steps = 4280;
    
    telemetryInterval = setInterval(() => {
        // Heart rate fluctuations
        const deltaBpm = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let currentBpm = baseBpm + deltaBpm;
        currentBpm = Math.max(60, Math.min(100, currentBpm)); // clamp
        document.getElementById('tel-val-bpm').textContent = currentBpm;
        
        // Tiny temp fluctuations
        const deltaTemp = (Math.random() * 0.2) - 0.1;
        let currentTemp = sheep.temp + deltaTemp;
        document.getElementById('tel-val-temp').textContent = currentTemp.toFixed(1);
        
        // Steps increase
        steps += Math.floor(Math.random() * 3);
        document.getElementById('tel-val-steps').textContent = steps;
    }, 2000);
}

function stopTelemetrySimulation() {
    if (telemetryInterval) clearInterval(telemetryInterval);
    if (clockInterval) clearInterval(clockInterval);
}

// Interactive Feed Barley Reward Action
function feedSheepAction() {
    if (!activeDashboardSheep) return;
    
    const msg = currentLang === 'ar' 
        ? `تم إرسال إشارة مكافأة الشعير إلى خزان التغذية الآلي للكبش ${activeDashboardSheep.id}!` 
        : `Signal sent to automatic feeder for sheep ${activeDashboardSheep.id}!`;
        
    showToast(msg);
    
    // Temporarily increase heart rate and weight slightly
    const tempBpm = document.getElementById('tel-val-bpm');
    const tempWeight = document.getElementById('tel-val-weight');
    
    tempBpm.textContent = parseInt(tempBpm.textContent) + 12;
    tempWeight.textContent = parseFloat(tempWeight.textContent) + 0.5;
    
    setTimeout(() => {
        tempBpm.textContent = parseInt(tempBpm.textContent) - 8;
    }, 3000);
}

// Simulate activity spikes
function cardioActivityAction() {
    if (!activeDashboardSheep) return;
    
    const msg = currentLang === 'ar' 
        ? `تم تشغيل محفز الحركة الخفيف! الكبش ${activeDashboardSheep.id} يهرول الآن في المرعى.` 
        : `Cardio stimulation activated! Sheep ${activeDashboardSheep.id} is trotting.`;
        
    showToast(msg);
    
    const tempBpm = document.getElementById('tel-val-bpm');
    const tempSteps = document.getElementById('tel-val-steps');
    
    tempBpm.textContent = parseInt(tempBpm.textContent) + 25;
    tempSteps.textContent = parseInt(tempSteps.textContent) + 150;
    
    setTimeout(() => {
        tempBpm.textContent = parseInt(tempBpm.textContent) - 15;
    }, 4000);
}

// Cancel Booking Order (Removes sheep from order or order completely)
async function cancelBookingAction() {
    if (!activeDashboardSheep) return;
    
    const confirmation = confirm(
        currentLang === 'ar' 
            ? `هل أنت متأكد من إلغاء حجز الأضحية ${activeDashboardSheep.id}؟` 
            : `Are you sure you want to cancel the booking for sheep ${activeDashboardSheep.id}?`
    );
    
    if (!confirmation) return;
    
    try {
        // Find the order that contains this sheep
        const targetOrder = bookedOrders.find(ord => ord.items.some(item => item.id === activeDashboardSheep.id));
        if (targetOrder) {
            // Remove sheep from order items
            targetOrder.items = targetOrder.items.filter(item => item.id !== activeDashboardSheep.id);
            
            if (targetOrder.items.length === 0) {
                // Delete order completely
                await db.deleteOrder(targetOrder.id);
            } else {
                // Update order price and save
                targetOrder.totalDZD = targetOrder.items.reduce((acc, curr) => acc + curr.priceDZD, 0);
                await db.addOrder(targetOrder);
            }
            
            const cancelMsg = currentLang === 'ar' 
                ? `تم إلغاء حجز الأضحية ${activeDashboardSheep.id} بنجاح.` 
                : `Booking for sheep ${activeDashboardSheep.id} has been canceled.`;
            showToast(cancelMsg, 'danger');
            
            activeDashboardSheep = null;
            renderBookedSheepList();
        }
    } catch (err) {
        console.error(err);
    }
}

// ==========================================================================
// GSAP & ANIMATION SCHEDULER
// ==========================================================================
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup for columns
    gsap.set('.transition-cols .t-col', { scaleX: 0 });
    gsap.set('.curtain-logo', { opacity: 0, y: 20, xPercent: -50, yPercent: -50 });

    // 1. Initial Page Load Animation (Premium WOW effect)
    window.addEventListener('load', () => {
        
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        
        // Stagger hero title words
        tl.fromTo('.hero-word', 
            { y: 150, opacity: 0, rotateX: -90, scale: 0.8 }, 
            { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1.8, stagger: 0.15 }
        )
        // Stagger paragraph words
        .fromTo('.premium-desc .word', 
            { y: 40, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.02 }, "-=1.2"
        )
        .fromTo('.hero-actions .btn-magnetic', 
            { y: 50, opacity: 0, scale: 0.9 }, 
            { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: "back.out(2)" }, "-=0.8"
        )
        .fromTo('.main-visual-container-premium', 
            { scale: 0.7, opacity: 0, filter: 'blur(20px)' }, 
            { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 2.5, ease: "power4.out" }, "-=2.0"
        );

        // Premium Mouse Parallax for hero sheep
        const sheepImg = document.querySelector('.premium-sheep-img');
        if (sheepImg) {
            window.addEventListener('mousemove', (e) => {
                const xPos = (e.clientX / window.innerWidth - 0.5) * 40; // max 20px move
                const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
                gsap.to(sheepImg, {
                    x: xPos,
                    y: yPos,
                    duration: 1.5,
                    ease: "power2.out"
                });
            });
        }

        // Custom Cursor Logic
        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.custom-cursor-follower');
        
        if (cursor && follower) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Dot follows immediately
                gsap.to(cursor, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.1,
                    ease: "none"
                });
                
                // Follower has a slight delay
                gsap.to(follower, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.6,
                    ease: "power3.out"
                });
            });
            
            // Magnetic effect on interactive elements
            const interactives = document.querySelectorAll('a, button, .interactive-sheep-card');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(212, 175, 55, 0.1)', duration: 0.3 });
                    gsap.to(cursor, { scale: 0, duration: 0.3 });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
                    gsap.to(cursor, { scale: 1, duration: 0.3 });
                });
            });
        }
    });

    // 2. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium ease out
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 3. ScrollTrigger animations
    // Sticky Stack Cards scrolling triggers
    const stackItems = document.querySelectorAll('.stack-item');
    stackItems.forEach((item, index) => {
        if (index > 0) {
            gsap.fromTo(item, 
                { scale: 0.85, opacity: 0, y: 150 },
                {
                    scale: 1, opacity: 1, y: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: 1.5, // ultra smooth scrub
                        markers: false
                    }
                }
            );
        }
    });

    // 4. Pastures Gallery Horizontal Scroll & Parallax
    const wrapper = document.querySelector('.horizontal-scroll-wrapper');
    if (wrapper) {
        gsap.to(wrapper, {
            x: () => {
                const width = wrapper.scrollWidth - window.innerWidth;
                return document.documentElement.dir === 'rtl' ? width : -width;
            },
            ease: "none",
            scrollTrigger: {
                trigger: ".pastures-gallery",
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1,
                invalidateOnRefresh: true,
                markers: false
            }
        });
    }

    // Parallax on Pasture Cards Background
    const pastureCards = document.querySelectorAll('.pasture-card');
    pastureCards.forEach(card => {
        gsap.fromTo(card,
            { backgroundPosition: "50% 0%" },
            {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    });

    // 5. Custom Cursor & Magnetic Buttons Setup
    setupCustomCursor();
    setupMagneticButtons();
}

function setupCustomCursor() {
    // Only setup on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    gsap.set(cursor, {xPercent: -50, yPercent: -50});
    gsap.set(follower, {xPercent: -50, yPercent: -50});

    window.addEventListener('mousemove', e => {
        gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out"});
        gsap.to(follower, {x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out"});
    });

    // Delegate hover events for dynamic elements
    document.body.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button, .interactive-sheep-card, .p-card-image-box, .nav-link-item, .qv-trigger-btn, .btn-add-to-cart-action');
        if (target) {
            gsap.to(follower, {scale: 1.8, backgroundColor: "rgba(212, 175, 55, 0.1)", borderColor: "rgba(212, 175, 55, 0)", duration: 0.3});
        }
    });
    document.body.addEventListener('mouseout', (e) => {
        const target = e.target.closest('a, button, .interactive-sheep-card, .p-card-image-box, .nav-link-item, .qv-trigger-btn, .btn-add-to-cart-action');
        if (target) {
            gsap.to(follower, {scale: 1, backgroundColor: "transparent", borderColor: "var(--accent-gold)", duration: 0.3});
        }
    });
}

function setupMagneticButtons() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Move button slightly
            gsap.to(btn, {x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out"});
            
            // Move text/icon inside if it exists
            const content = btn.querySelector('span, i');
            if (content) {
                gsap.to(content, {x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out"});
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)"});
            const content = btn.querySelector('span, i');
            if (content) {
                gsap.to(content, {x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)"});
            }
        });
    });
}


// ==========================================================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================================================
async function initApp() {
    // A. Initialize database
    await db.init();
    await db.prefillCatalog();
    
    // B. Load initial data
    await loadStoreCatalog();
    await loadCart();
    
    // C. Initial language translation
    translatePage();
    
    // D. Navigation view buttons
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const view = btn.getAttribute('data-view');
            switchView(view);
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) navLinks.classList.remove('active');
            const toggleIcon = document.querySelector('#mobile-toggle i');
            if (toggleIcon) {
                toggleIcon.className = 'fa-solid fa-bars';
            }
        });
    });

    // Logo click goes home
    document.getElementById('logo-btn').addEventListener('click', (e) => {
        e.preventDefault();
        switchView('home');
    });

    // Language toggle click (guarded)
    const langToggleEl = document.getElementById('lang-toggle');
    if (langToggleEl) langToggleEl.addEventListener('click', toggleLanguage);

    // Currency toggle click (guarded)
    const currencyToggleEl = document.getElementById('currency-toggle');
    if (currencyToggleEl) currencyToggleEl.addEventListener('click', toggleCurrency);

    // Cart Drawer triggers
    document.getElementById('cart-toggle-btn').addEventListener('click', () => toggleCartDrawer(true));
    document.getElementById('btn-close-cart').addEventListener('click', () => toggleCartDrawer(false));
    document.getElementById('cart-drawer-overlay-bg').addEventListener('click', () => toggleCartDrawer(false));

    // Cart events (delegated for dynamic list rendering)
    document.getElementById('cart-items-wrapper').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.btn-remove-item-action');
        if (removeBtn) {
            const id = removeBtn.getAttribute('data-id');
            removeItemFromCart(id);
        }
    });

    // Store Card click events (delegated)
    document.getElementById('catalog-products-grid').addEventListener('click', (e) => {
        const qvBtn = e.target.closest('.qv-trigger-btn');
        if (qvBtn) {
            const id = qvBtn.getAttribute('data-id');
            openQuickView(id);
            return;
        }

        const addCartBtn = e.target.closest('.btn-add-to-cart-action');
        if (addCartBtn) {
            const id = addCartBtn.getAttribute('data-id');
            addItemToCart(id);
        }
    });

    // Quickview modal action clicks
    document.getElementById('btn-close-quickview').addEventListener('click', closeQuickView);
    document.getElementById('quick-view-modal-overlay').addEventListener('click', closeQuickView);
    document.getElementById('btn-qv-add-cart').addEventListener('click', () => {
        if (activeQuickViewProduct) {
            addItemToCart(activeQuickViewProduct.id);
            closeQuickView();
        }
    });

    // Checkout trigger buttons
    document.getElementById('btn-go-checkout').addEventListener('click', () => {
        toggleCartDrawer(false);
        openCheckoutModal();
    });
    document.getElementById('btn-close-checkout').addEventListener('click', closeCheckoutModal);
    document.getElementById('checkout-modal-overlay').addEventListener('click', closeCheckoutModal);
    
    // Checkout Form submit
    document.getElementById('checkout-form').addEventListener('submit', submitOrder);

    // Filters event listeners
    document.getElementById('search-input').addEventListener('input', renderCatalog);
    document.querySelectorAll('.breed-filter-checkbox').forEach(cb => {
        cb.addEventListener('change', renderCatalog);
    });
    
    const weightSlider = document.getElementById('filter-weight-slider');
    weightSlider.addEventListener('input', (e) => {
        document.getElementById('filter-weight-val').textContent = e.target.value;
        renderCatalog();
    });
    
    document.getElementById('sort-select').addEventListener('change', renderCatalog);
    
    document.getElementById('btn-reset-filters').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        document.querySelectorAll('.breed-filter-checkbox').forEach(cb => cb.checked = true);
        weightSlider.value = 40;
        document.getElementById('filter-weight-val').textContent = 40;
        document.getElementById('sort-select').value = 'default';
        renderCatalog();
    });

    // Dashboard Telemetry Actions click
    document.getElementById('btn-feed-telemetry').addEventListener('click', feedSheepAction);
    document.getElementById('btn-pulse-telemetry').addEventListener('click', cardioActivityAction);
    document.getElementById('btn-cancel-reservation').addEventListener('click', cancelBookingAction);

    // Mobile Navigation burger toggle
    const mobileToggleBtn = document.getElementById('mobile-toggle');
    const navLinksEl = document.querySelector('.nav-links');
    if (mobileToggleBtn && navLinksEl) {
        mobileToggleBtn.addEventListener('click', () => {
            const isActive = navLinksEl.classList.toggle('active');
            const icon = mobileToggleBtn.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });
    }



    // E. Setup scroll triggers and Lenis
    initAnimations();
}

// Run App
initApp();
