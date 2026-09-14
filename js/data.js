// Contact Configuration
const WHATSAPP_NUMBER = "+919876543210"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919876543210";    // Replace with actual phone number

// Data Structures
const products = [
    {
        "id": 1,
        "name": "V6/V8",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "The V6/V8 series ICU patient ventilator is a life-support medical device designed to assist or replace spontaneous breathing in critically ill patients. This ventilator delivers precise oxygen and airflow control to ensure safe, stable, and effective respiratory therapy in intensive care environment...",
        "image": "assets/images/products/v6-v8.png",
        "price": 137000
    },
    {
        "id": 2,
        "name": "V2/V5",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "To cope with present and potential clinical challenges, V5 is equipped with a turbine-driven system. Advanced ventilation modes and comprehensively monitored parameters allow medical providers to step closer to the complete clinical picture of patients. A 15.6-inch TFT touchscreen with an intuitive ...",
        "image": "assets/images/products/v2-v5.png",
        "price": 44957
    },
    {
        "id": 3,
        "name": "V3/V3 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "The V3 Pro is a powerful yet portable ICU ventilator, featuring turbine-driven technology, a hidden carry handle, and extended battery life for true mobility. It supports a full range of patients from neonates to adults, offers advanced ventilation modes, and comes equipped with comprehensive clinic...",
        "image": "assets/images/products/v3-v3-pro.png",
        "price": 155000
    },
    {
        "id": 4,
        "name": "V1/V1 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Engineered for reliability in the most challenging environments, V1 Pro ensures stable ventilation during patient transport, even under extreme conditions. With advanced features and intelligent control, it delivers ICU-level ventilation performance on the move—bringing critical care standards where...",
        "image": "assets/images/products/v1-v1-pro.png",
        "price": 68006
    },
    {
        "id": 5,
        "name": "NV50/60/70",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "An 18-inch touchscreen with rotating display for easier operation and observation.",
        "image": "assets/images/products/nv50-60-70.png",
        "price": 149126
    },
    {
        "id": 6,
        "name": "NV10",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "The NV10 neonatal ventilator is a critical medical device designed to provide respiratory support for newborns and young infants who cannot breathe adequately on their own. It delivers precise airflow and pressure to maintain stable oxygenation. This infant ventilator provides stable, lung-protectiv...",
        "image": "assets/images/products/nv10.png",
        "price": 66000
    },
    {
        "id": 7,
        "name": "VN Series",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Designed for neonates, premature infants, and pediatric patients with birth weight ≥200 g. Delivering full-cycle precision ventilation protection - from lung recruitment preparation through ventilator weaning assessment.",
        "image": "assets/images/products/vn-series.png",
        "price": 88000
    },
    {
        "id": 8,
        "name": "NV8",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/nv8.png",
        "price": 137000
    },
    {
        "id": 9,
        "name": "NF5",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Rapidly increase the O₂ concentration, increase the patient's O₂ reserve, and facilitate sputum suction, bronchoscopy, intubation and other nursing cares.",
        "image": "assets/images/products/nf5.png",
        "price": 92161
    },
    {
        "id": 10,
        "name": "HT30",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Intelligent Humidification for Advanced Respiratory Care",
        "image": "assets/images/products/ht30.png",
        "price": 157577
    },
    {
        "id": 11,
        "name": "HT50",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Intelligent Humidification for Advanced Respiratory Care",
        "image": "assets/images/products/ht50.png",
        "price": 47694
    },
    {
        "id": 12,
        "name": "X8",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The X8 is an integrated anesthesia machine designed to support accurate control, stable delivery, ICU-level ventilation support, perioperative lung protection, and smart anesthesia management in one advanced workstation.",
        "image": "assets/images/products/x8.png",
        "price": 40676
    },
    {
        "id": 13,
        "name": "AX900",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The AX-900 is a modern anesthesia machine ventilator designed to provide safe and precise anesthesia delivery during surgical procedures. Combining precision ventilation with intuitive controls, this anesthesia workstation ensures patient safety and surgical efficiency. It ensures accurate ventilati...",
        "image": "assets/images/products/ax900.png",
        "price": 232000
    },
    {
        "id": 14,
        "name": "AX-800/AX-700",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AX-800 features 15” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue",
        "image": "assets/images/products/ax-800-ax-700.png",
        "price": 85336
    },
    {
        "id": 15,
        "name": "AX600",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AX-600 Features 12.1” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue",
        "image": "assets/images/products/ax600.png",
        "price": 131000
    },
    {
        "id": 16,
        "name": "AX400/AX500",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The AX-500 features a 12-inch high-resolution screen that provides a clear and comfortable viewing experience for clinicians. Its user-friendly interface is intuitively designed, presenting vital information in a clean, organized layout. With simplified controls and clear display, the AX-500 makes m...",
        "image": "assets/images/products/ax400-ax500.png",
        "price": 99344
    },
    {
        "id": 17,
        "name": "A5/A7",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "A7, with the most comprehensive ventilation and intelligent and ergonomic operating design, is your best assistant during perioperative procedure!",
        "image": "assets/images/products/a5-a7.png",
        "price": 80000
    },
    {
        "id": 18,
        "name": "AGSS-H/AGSS-L",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AGSS _ H is suitable for exhaust gas pipes with a flow rate of> 75 L/min",
        "image": "assets/images/products/agss-h-agss-l.png",
        "price": 76517
    },
    {
        "id": 19,
        "name": "MR-M80T/MR-M60T",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Purpose-built for 1.5T/3.0T high-field MRI environments, the MR series monitor main unit operates stably within a static magnetic field of ≤60 mT, while the acquisition boxes can function within a 3.0T magnetic field without affecting MRI image quality.",
        "image": "assets/images/products/mr-m80t-mr-m60t.png",
        "price": 175251
    },
    {
        "id": 20,
        "name": "K Pro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "In critical care, accuracy and efficiency make all the difference. The K Pro Series intensive care unit monitor is designed with advanced technology, intelligent data integration, and an intuitive user experience to empower healthcare professionals and enhance patient safety.",
        "image": "assets/images/products/k-pro-series.png",
        "price": 152096
    },
    {
        "id": 21,
        "name": "K22 Pro",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "21.5″ Capacitive Touchscreen: Intuitive UI design for viewing at one glance and ergonomic operation design for a good clinical experience. Portrait & Landscape Modes: Effortlessly switch views to focus on detailed trends or display up to 16 channels at once—adapt the screen to your workflow.",
        "image": "assets/images/products/k22-pro.png",
        "price": 41000
    },
    {
        "id": 22,
        "name": "K1",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Stay Connected Anytime, Anywhere with K1: The Next-Generation Transport Monitor",
        "image": "assets/images/products/k1.png",
        "price": 37000
    },
    {
        "id": 23,
        "name": "NMPro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Experience enhanced sensitivity and clarity with a high-resolution display. This ensures effortless control and provides an immersive viewing experience for critical patient data, optimizing user interaction and efficiency.",
        "image": "assets/images/products/nmpro-series.png",
        "price": 148492
    },
    {
        "id": 24,
        "name": "N Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "High-Resolution Touchscreen: Choose from three screen dimensions—simultaneously view up to 12 traces for complete insight.",
        "image": "assets/images/products/n-series.png",
        "price": 88000
    },
    {
        "id": 25,
        "name": "ND Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "3-tap Workflow: Complete any task within three taps—no training overload. (UI inherited from KProSeries)",
        "image": "assets/images/products/nd-series.png",
        "price": 130276
    },
    {
        "id": 26,
        "name": "eCenter-CMS",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "eCenter-CMS offers unparalleled functionality to healthcare professionals for efficient workflow and centralize monitor, achieving patients information at their fingertips enhancing their responsiveness, while simultaneously ensuring that patients receive timely and accurate medical attention, signi...",
        "image": "assets/images/products/ecenter-cms.png",
        "price": 92380
    },
    {
        "id": 27,
        "name": "NC6 &amp; NC7",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The COMEN NC6 & NC7 Patient Monitors set a new benchmark in clinical monitoring, offering speed, accuracy, and intelligent support to enhance ward rounds and optimize patient outcomes.",
        "image": "assets/images/products/nc6--amp--nc7.png",
        "price": 101126
    },
    {
        "id": 28,
        "name": "NC5",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The NC5 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. It delivers comprehensive patient surveillance with enhanced connectivity and clinical intelligence, designed for dynamic hospital environments.",
        "image": "assets/images/products/nc5.png",
        "price": 87628
    },
    {
        "id": 29,
        "name": "NC3",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The NC3 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. Its compact design and intuitive operation streamline clinical workflows while ensuring reliable physiological parameter tracking.",
        "image": "assets/images/products/nc3.png",
        "price": 54392
    },
    {
        "id": 30,
        "name": "CF5&amp;CF8",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The Comen CF Series fetal monitor and Maternal Monitors are designed to deliver high-quality, continuous monitoring with precision and reliability for both maternal and fetal well-being. With advanced technology and user-friendly features, these fetal heart rate monitors ensure optimal care for expe...",
        "image": "assets/images/products/cf5-amp-cf8.png",
        "price": 129445
    },
    {
        "id": 31,
        "name": "H300 &amp; H301",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Weighs less than 1.3kg, easily held in hand, and under 6cm thick for effortless portability.",
        "image": "assets/images/products/h300--amp--h301.png",
        "price": 129692
    },
    {
        "id": 32,
        "name": "H1200",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Convenient input and more shortcut controls with an alphanumeric keyboard, plus IPX1 waterproof protection.",
        "image": "assets/images/products/h1200.png",
        "price": 183452
    },
    {
        "id": 33,
        "name": "S80",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "An all-in-one advanced resuscitation platform that integrates defibrillation, pacing and comprehensive monitoring-empowering clinicians to make faster decisions and save more lives.",
        "image": "assets/images/products/s80.png",
        "price": 55890
    },
    {
        "id": 34,
        "name": "S50",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Provide a full range of functions to meet various life support needs",
        "image": "assets/images/products/s50.png",
        "price": 190763
    },
    {
        "id": 35,
        "name": "S8",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "The COMEN S8 integrates defibrillation, pacing, monitoring, and AED functions in a single portable device. Suitable for pre-hospital emergencies and hospital use, it supports synchronous/asynchronous defibrillation, pacing modes, and extensive vital-sign monitoring (5/12-lead ECG, SpO₂, TEMP, EtCO₂,...",
        "image": "assets/images/products/s8.png",
        "price": 124264
    },
    {
        "id": 36,
        "name": "S5",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "The 4-in-1 design of the S5 Defibrillator Monitor brings multiple functions into one compact unit, offering significant space and cost savings while improving portability.",
        "image": "assets/images/products/s5.png",
        "price": 103928
    },
    {
        "id": 37,
        "name": "S1",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "The 4-in-1 design of the S1 Defibrillator Monitor brings multiple functions into one compact unit, offering significant space and cost savings while improving portability.",
        "image": "assets/images/products/s1.png",
        "price": 66900
    },
    {
        "id": 38,
        "name": "F3/F5",
        "brand": "COMEN",
        "category": "AED",
        "description": "F3/F5, a user-friendly AED that allows fast operation. It is compact, light-weighted and has integrated AED mode and 3-lead ECG monitoring function. The 7-inch large HD screen provides vivid interactive guidance, making rescue process an easy job.",
        "image": "assets/images/products/f3-f5.png",
        "price": 103017
    },
    {
        "id": 39,
        "name": "G Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Designed for life-saving speed, the G-Series AED features an intuitive, responder-focused workflow that enables rapid defibrillation even in high-stress emergencies. With advanced cardiac rhythm analysis and clear, automated step-by-step guidance, it minimizes required actions and removes uncertaint...",
        "image": "assets/images/products/g-series.png",
        "price": 56179
    },
    {
        "id": 40,
        "name": "F Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Comen F Series AED is designed for rapid response, empowering anyone to deliver swift, effective treatment when it matters most.",
        "image": "assets/images/products/f-series.png",
        "price": 93366
    },
    {
        "id": 41,
        "name": "ES-Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Weighing just 7.9 kg, making it exceptionally easy to carry and deploy in critical moments. The back plate is crafted from PPA + 50% glass fiber with a density of 1.6 g/cm³, while the support arm uses PA + 30% glass fiber at only 1.3 g/cm³—offering excellent strength without extra bulk.",
        "image": "assets/images/products/es-series.png",
        "price": 57961
    },
    {
        "id": 42,
        "name": "L9",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "L9 features advanced DC dimming technology, controlling illuminance without the high-frequency flash of light. This prevents eye damage and reduces fatigue in patients, at the same time, ensuring a smooth surgical recording without flicker.",
        "image": "assets/images/products/l9.png",
        "price": 42373
    },
    {
        "id": 43,
        "name": "L5",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "During the surgery, the medical staff will change the height of the surgical light according to the doctor's position change, which means the surgical light doesn’t keep 1 meter from the wound and cause the focus change. L5 adopts adaptive lighting technology, the surgical light will automatically a...",
        "image": "assets/images/products/l5.png",
        "price": 150688
    },
    {
        "id": 44,
        "name": "L3",
        "brand": "HugeMed",
        "category": "Surgical Light",
        "description": "Advanced VL3H Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3h-video-laryngoscope.jpg",
        "price": 158000
    },
    {
        "id": 45,
        "name": "WE1/WE2",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "The WE1/WE2 operating table features a modular design, allowing for flexible configuration to meet diverse surgical requirements.",
        "image": "assets/images/products/we1-we2.png",
        "price": 92255
    },
    {
        "id": 46,
        "name": "WH1/WH2",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "As surgery advances, hybrid operating rooms must fulfill a wide range of surgical needs. WH1/WH2 is an electrohydraulic operating table with a variety of accessories. It features a stable load-bearing capacity and allows for flexible operation. It can efficiently provide a safe, comfortable, and con...",
        "image": "assets/images/products/wh1-wh2.png",
        "price": 116372
    },
    {
        "id": 47,
        "name": "W5/W3",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "The modular design of the W5 is a major feature, with an emphasis on the expandability of the operating table in order to meet a variety of clinical needs and solve the problem of special posture requirements under different surgical settings.",
        "image": "assets/images/products/w5-w3.png",
        "price": 195783
    },
    {
        "id": 48,
        "name": "BQ80",
        "brand": "COMEN",
        "category": "Warmer",
        "description": "This is by far the most powerful 4-in-1 neonatal nursing platform. The BQ80 integrates four key rescue and nursing systems to achieve one-stop operation and management. At the same time, it scientifically optimizes the workflow, helps medical staff to easily respond to urgent medical needs, effectiv...",
        "image": "assets/images/products/bq80.png",
        "price": 54599
    },
    {
        "id": 49,
        "name": "B10",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Preterm infants in the NICU face many challenges, including heat loss, excessive noise and light, infection risk, limited parental contact, complex medical conditions, and the possibility of delayed nursing care.",
        "image": "assets/images/products/b10.png",
        "price": 46808
    },
    {
        "id": 50,
        "name": "B3",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "The water tank is made of transparent material. The water condition inside can be viewed at a glance. This greatly reduces the risk of dry burning.",
        "image": "assets/images/products/b3.png",
        "price": 125293
    },
    {
        "id": 51,
        "name": "B6/B8",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Neonatal incubator is warming equipment used for providing constant temperature and humidity for treatment of premature infants and critically ill neonates which fit well with their physiological characteristics and needs.",
        "image": "assets/images/products/b6-b8.png",
        "price": 106398
    },
    {
        "id": 52,
        "name": "BT800",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Accurate, efficient, long-endurance environment control",
        "image": "assets/images/products/bt800.png",
        "price": 61556
    },
    {
        "id": 53,
        "name": "P3/P6",
        "brand": "COMEN",
        "category": "Hypothermia Treatment",
        "description": "Neonatal hypoxic-ischemic encephalopathy (HIE) is a brain injury disease with a high mortality rate. Therapeutic Hypothermia is regarded as a core treatment for HIE as it helps by maintaining a lower core temperature in newborns for up to 72 hours, effectively lowering mortality by slowing down apop...",
        "image": "assets/images/products/p3-p6.png",
        "price": 170304
    },
    {
        "id": 54,
        "name": "BL20",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Greatly increase effective treatment area together with overhead phototherapy devices (BL60/BL70)",
        "image": "assets/images/products/bl20.png",
        "price": 193908
    },
    {
        "id": 55,
        "name": "BL60",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Maximum irradiance at a wave length of 475nm which is at the perfect peak according to the latest clinical guidelines*",
        "image": "assets/images/products/bl60.png",
        "price": 75899
    },
    {
        "id": 56,
        "name": "MX8900/M800/ME900",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "Comen M800 and ME900 are able to provide tailor-made treatment plans of specific drugs for patients. By pre-setting and save the infusion parameters in pumps, allowing caregiver to easily apply, modify frequently used infusion parameters and drugs.",
        "image": "assets/images/products/mx8900-m800-me900.png",
        "price": 64561
    },
    {
        "id": 57,
        "name": "ME660/M260",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "EN1789 certified for use during transport and E&R scenarios.Shielded from harsh environments with a validated IP44 rating.",
        "image": "assets/images/products/me660-m260.png",
        "price": 146854
    },
    {
        "id": 58,
        "name": "EIS-2000",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "The EIS-2000 gastrointestinal endoscope is a specialized medical device, allowing doctors to conduct a precise examination of the stomach, intestines, and abdominal organs. This advanced endoscopy system supports both UGI scope and LGI endoscopy, providing high-definition imaging through its endosco...",
        "image": "assets/images/products/eis-2000.png",
        "price": 57969
    },
    {
        "id": 59,
        "name": "CVL Series",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "The 3\" screen supports high resolution up to 640*48",
        "image": "assets/images/products/cvl-series.png",
        "price": 132039
    },
    {
        "id": 60,
        "name": "EP50",
        "brand": "COMEN",
        "category": "Ultrasound",
        "description": "Powered by the Comen E-Sonore Ultrasound Platform, EP50 integrates cutting-edge algorithms and AI technology. Its advanced image processing ensures accurate diagnosis.",
        "image": "assets/images/products/ep50.png",
        "price": 167989
    },
    {
        "id": 61,
        "name": "CF9600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Eight channels: DIFF, WNB, RET, PLT-F, WPC, CRP, SAA, ESR",
        "image": "assets/images/products/cf9600.png",
        "price": 197949
    },
    {
        "id": 62,
        "name": "CH8600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Semiconductor laser flow cytometry (FCM), tri-angle laser scatter, chemical dye, and impedance capabilities, enabling accurate WBC 5-part differential analysis and CBC counting.",
        "image": "assets/images/products/ch8600.png",
        "price": 147414
    },
    {
        "id": 63,
        "name": "CH8600CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8600crp.jpeg",
        "price": 186460
    },
    {
        "id": 64,
        "name": "CH8500",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "10.4-inch capacitive TFT touch screen with high resolution",
        "image": "assets/images/products/ch8500.png",
        "price": 176154
    },
    {
        "id": 65,
        "name": "CH8500-V Series",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Explore the advanced capabilities of the CoooSeee CH8500-V series hematology analyzer. With a throughput of 60 samples per hour and a compact design, this innovation represents the latest advancement from CoooSeee for diagnostic excellence in WBC 5-part differentiation.",
        "image": "assets/images/products/ch8500-v-series.png",
        "price": 144551
    },
    {
        "id": 66,
        "name": "CH8500CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8500crp.webp",
        "price": 140707
    },
    {
        "id": 67,
        "name": "CH8300",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8300.png",
        "price": 179542
    },
    {
        "id": 68,
        "name": "CH8300CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8300crp.png",
        "price": 32408
    },
    {
        "id": 69,
        "name": "CH8310",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8310.png",
        "price": 107705
    },
    {
        "id": 100,
        "name": "Bassinets",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 10000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Bassinets",
        "description": "High-quality neonatal bassinets."
    },
    {
        "id": 101,
        "name": "Hybrid Intensive Care Unit",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 250000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Hybrid+Intensive+Care+Unit",
        "description": "Advanced Hybrid Intensive Care Unit."
    },
    {
        "id": 102,
        "name": "Infant Incubators",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 120000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Infant+Incubators",
        "description": "Optimal microclimate infant incubators."
    },
    {
        "id": 103,
        "name": "Infant Warmer and Total Care",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 150000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Infant+Warmer",
        "description": "Infant warmer and total care systems."
    },
    {
        "id": 104,
        "name": "Neonatal Bubble CPAP",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 80000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Bubble+CPAP",
        "description": "Neonatal Bubble CPAP systems."
    },
    {
        "id": 105,
        "name": "Neonatal Humidifier",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 40000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Humidifier",
        "description": "Advanced neonatal humidifiers."
    },
    {
        "id": 106,
        "name": "Neonatal Resuscitator",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 45000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Resuscitator",
        "description": "Safe and controlled neonatal resuscitation."
    },
    {
        "id": 107,
        "name": "Oxygen Therapy",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 30000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Oxygen+Therapy",
        "description": "Oxygen therapy solutions."
    },
    {
        "id": 108,
        "name": "Phototherapy",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 150000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Phototherapy",
        "description": "Effective LED phototherapy systems."
    },
    {
        "id": 109,
        "name": "Transport Incubators",
        "brand": "FANEM",
        "category": "Neonatal Care",
        "price": 180000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Transport+Incubators",
        "description": "Safe transport incubators."
    },
    {
        "id": 110,
        "name": "Single-use Rhinolaryngoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 5000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Rhinolaryngoscope",
        "description": "Single-use Rhinolaryngoscope."
    },
    {
        "id": 111,
        "name": "Single-use Choledochoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Choledochoscope",
        "description": "Single-use Choledochoscope."
    },
    {
        "id": 112,
        "name": "Single-use Duodenoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6500,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Duodenoscope",
        "description": "Single-use Duodenoscope."
    },
    {
        "id": 113,
        "name": "Single-use Bronchoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 5500,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Bronchoscope",
        "description": "Single-use Bronchoscope."
    },
    {
        "id": 114,
        "name": "Single-use Collector",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 1000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Collector",
        "description": "Single-use Collector."
    },
    {
        "id": 115,
        "name": "Broncho Sampler",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 1200,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Broncho+Sampler",
        "description": "Broncho Sampler."
    },
    {
        "id": 116,
        "name": "Single-use Ureterorenoscope HU30M",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 7000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=HU30M",
        "description": "Single-use Ureterorenoscope HU30M (6.3/3.6Fr)."
    },
    {
        "id": 117,
        "name": "Single-use Ureterorenoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6800,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Ureterorenoscope",
        "description": "Single-use Ureterorenoscope."
    },
    {
        "id": 118,
        "name": "Single-use Cystoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Cystoscope",
        "description": "Single-use Cystoscope."
    },
    {
        "id": 119,
        "name": "Single-Use Cysto-Nephroscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 7200,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Cysto-Nephroscope",
        "description": "Single-Use Cysto-Nephroscope."
    },
    {
        "id": 120,
        "name": "Single-use Ureteral Access Sheath",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 800,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Access+Sheath",
        "description": "Single-use Ureteral Access Sheath."
    },
    {
        "id": 121,
        "name": "Single-use Stent Removal Cystoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6500,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Stent+Removal",
        "description": "Single-use Stent Removal Cystoscope."
    },
    {
        "id": 122,
        "name": "Suction Pump",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 2500,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Suction+Pump",
        "description": "Suction Pump."
    },
    {
        "id": 123,
        "name": "Video Laryngoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 15000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Video+Laryngoscope",
        "description": "Reusable Video Laryngoscope."
    },
    {
        "id": 124,
        "name": "Reusable Ureterorenoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 25000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Reusable+Ureterorenoscope",
        "description": "Reusable Ureterorenoscope."
    }
];

const categories = [
    {
        "id": "ventilator",
        "name": "Ventilator",
        "image": ""
    },
    {
        "id": "high-flow-oxygen-therapy-humidifier",
        "name": "High Flow Oxygen Therapy Humidifier",
        "image": ""
    },
    {
        "id": "anesthesia-machine",
        "name": "Anesthesia Machine",
        "image": ""
    },
    {
        "id": "patient-monitoring",
        "name": "Patient Monitoring",
        "image": ""
    },
    {
        "id": "defibrillator-monitor",
        "name": "Defibrillator Monitor",
        "image": ""
    },
    {
        "id": "aed",
        "name": "AED",
        "image": ""
    },
    {
        "id": "surgical-light",
        "name": "Surgical Light",
        "image": ""
    },
    {
        "id": "operating-table",
        "name": "Operating Table",
        "image": ""
    },
    {
        "id": "warmer",
        "name": "Warmer",
        "image": ""
    },
    {
        "id": "incubator",
        "name": "Incubator",
        "image": ""
    },
    {
        "id": "hypothermia-treatment",
        "name": "Hypothermia Treatment",
        "image": ""
    },
    {
        "id": "jaundice-treatment",
        "name": "Jaundice Treatment",
        "image": ""
    },
    {
        "id": "infusion-system",
        "name": "Infusion System",
        "image": ""
    },
    {
        "id": "endoscopy",
        "name": "Endoscopy",
        "image": ""
    },
    {
        "id": "ultrasound",
        "name": "Ultrasound",
        "image": ""
    },
    {
        "id": "in-vitro-diagnostic",
        "name": "In Vitro Diagnostic",
        "image": ""
    },
    {
        "id": "neonatal-care",
        "name": "Neonatal Care",
        "image": ""
    }
];

const clients = [
    {
        "name": "Regional Cancer Centre",
        "img": "assets/clients/regional-cancer-centre.png"
    },
    {
        "name": "KIMS Hospital",
        "img": "assets/clients/kims-hospital.png"
    },
    {
        "name": "Holy Ghost Mission",
        "img": "assets/clients/holy-ghost-mission.png"
    },
    {
        "name": "Jubilee Mission",
        "img": "assets/clients/jubilee-mission.png"
    },
    {
        "name": "Govt Medical College Thrissur",
        "img": "assets/clients/medical-college-thrissur.png"
    },
    {
        "name": "Pushpagiri Institutions",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Pushpagiri"
    },
    {
        "name": "Rajagiri Hospital",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Rajagiri"
    },
    {
        "name": "Caritas Hospital",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Caritas"
    },
    {
        "name": "Care with Love",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=Care+With+Love"
    },
    {
        "name": "KMSCL",
        "img": "https://placehold.co/150x80/FFFFFF/17211D?text=KMSCL"
    }
];

const providers = [
    {
        "title": "Hospitals",
        "desc": "Equipment for all hospital environments including OT, ICU, and wards.",
        "icon": "🏥"
    },
    {
        "title": "Clinics",
        "desc": "Reliable solutions for clinics and OPDs focusing on primary care.",
        "icon": "⚕️"
    },
    {
        "title": "Diagnostic Centers",
        "desc": "Advanced diagnostic equipment for accurate test results.",
        "icon": "🔬"
    },
    {
        "title": "Laboratories",
        "desc": "High-quality lab instruments for pathological and research facilities.",
        "icon": "🧪"
    }
];

const services = [
    {
        "title": "Equipment Supply",
        "desc": "Wide range of genuine medical equipment from top brands.",
        "icon": "📦"
    },
    {
        "title": "Installation & Commissioning",
        "desc": "Professional installation and setup by certified engineers.",
        "icon": "🔧"
    },
    {
        "title": "Training & Demonstration",
        "desc": "Hands-on training for staff to ensure optimal equipment usage.",
        "icon": "👨‍🏫"
    },
    {
        "title": "Maintenance & Support",
        "desc": "Prompt technical support and routine maintenance services.",
        "icon": "⚙️"
    },
    {
        "title": "AMC / Service Contracts",
        "desc": "Annual maintenance contracts available for long-term peace of mind.",
        "icon": "📄"
    }
];

const stats = [
    {
        "value": "10+",
        "label": "Years of Experience"
    },
    {
        "value": "500+",
        "label": "Products"
    },
    {
        "value": "50+",
        "label": "Healthcare Clients"
    },
    {
        "value": "1000+",
        "label": "Installations"
    }
];

const testimonials = [
    {
        "id": 1,
        "quote": "Arkon Medical System has completely transformed our ICU setup. Their ventilators are top-tier and incredibly reliable.",
        "name": "Dr. Rajesh Kumar",
        "role": "Medical Superintendent",
        "company": "City Hospital",
        "image": "assets/testimonials/rajesh-kumar.jpg"
    },
    {
        "id": 2,
        "quote": "The after-sales support is unmatched. When we needed urgent maintenance on our anesthesia machines, their team was there within hours.",
        "name": "Sarah Fernandez",
        "role": "Head of Procurement",
        "company": "St. Mary's Clinic",
        "image": "assets/testimonials/sarah-fernandez.jpg"
    },
    {
        "id": 3,
        "quote": "We sourced all our new diagnostic equipment through them. The quality of the HugeMed endoscopes has been fantastic for our surgical wing.",
        "name": "Dr. Arvind Patel",
        "role": "Chief Surgeon",
        "company": "Metro Health",
        "image": "assets/testimonials/arvind-patel.jpg"
    }
];

const solutions = [
    {
        "id": "critical-care",
        "name": "Critical Care",
        "products": [
            "V6&V8",
            "V2&V5",
            "NV50/60/70",
            "V3/V3 Pro",
            "V1/V1 Pro",
            "NF5",
            "K Pro Series",
            "S5",
            "MX8900",
            "eCenter-CMS"
        ]
    },
    {
        "id": "peri-operative-care",
        "name": "Peri-operative Care",
        "products": [
            "K Pro Series",
            "X8",
            "AX900",
            "AX-700/AX-800",
            "AX600",
            "AX400/AX500",
            "S8",
            "MX8900",
            "L9",
            "L5",
            "CVL Series"
        ]
    },
    {
        "id": "emergency-care",
        "name": "Emergency Care",
        "products": [
            "V3/V3 Pro",
            "V1/V1 Pro",
            "K1",
            "NMPro Series",
            "S5",
            "F Series",
            "MX8900",
            "CVL Series",
            "eCenter-CMS"
        ]
    },
    {
        "id": "obstetrics",
        "name": "Obstetrics",
        "products": [
            "CF5&CF8",
            "NC6 & NC7",
            "M260",
            "ME660",
            "eCenter-CMS",
            "L5"
        ]
    },
    {
        "id": "neonatal-care",
        "name": "Neonatal Care",
        "products": [
            "Bassinets",
            "Hybrid Intensive Care Unit",
            "Infant Incubators",
            "Infant Warmer and Total Care",
            "Neonatal Bubble CPAP",
            "Neonatal Humidifier",
            "Neonatal Resuscitator",
            "Oxygen Therapy",
            "Phototherapy",
            "Transport Incubators"
        ]
    },
    {
        "id": "general-ward",
        "name": "General Ward",
        "products": [
            "N Series",
            "ND Series",
            "NC6 & NC7",
            "M260",
            "ME660",
            "eCenter-CMS"
        ]
    },
    {
        "id": "endoscopy",
        "name": "Endoscopy",
        "products": [
            "Single-use Rhinolaryngoscope",
            "Single-use Choledochoscope",
            "Single-use Duodenoscope",
            "Single-use Bronchoscope",
            "Single-use Collector",
            "Broncho Sampler",
            "Single-use Ureterorenoscope HU30M",
            "Single-use Ureterorenoscope",
            "Single-use Cystoscope",
            "Single-Use Cysto-Nephroscope",
            "Single-use Ureteral Access Sheath",
            "Single-use Stent Removal Cystoscope",
            "Suction Pump",
            "Video Laryngoscope",
            "Reusable Ureterorenoscope"
        ]
    }
];
