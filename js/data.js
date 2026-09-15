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
        "description": "The V6/V8 series ICU patient ventilator is a life-support medical device designed to assist or replace spontaneous breathing in critically ill patients. This ventilator delivers precise oxygen and airflow control to ensure safe, stable, and effective respiratory therapy in intensive care environments.",
        "image": "assets/images/products/v6-v8-1.png",
        "price": 137000,
        "features": [
            "Precisely monitor transpulmonary pressure by detecting both esophageal pressure and intrapulmonary pressure.",
            "Can better improve the prognosis of patients and reduce the 28-day mortality rate of patients."
        ],
        "images": [
            "assets/images/products/v6-v8-1.png",
            "assets/images/products/v6-v8-2.png",
            "assets/images/products/v6-v8-3.png",
            "assets/images/products/v6-v8-4.png"
        ]
    },
    {
        "id": 2,
        "name": "V2/V5",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Technology Guides Greatness",
        "image": "assets/images/products/v2-v5-1.png",
        "price": 44957,
        "features": [
            "Ultra-sensitive response",
            "Noise ≤ 45dB",
            "Maximum flow rate ≥ 210 L/min",
            "Minimum lifespan ≥ 20,000 hrs"
        ],
        "images": [
            "assets/images/products/v2-v5-1.png",
            "assets/images/products/v2-v5-2.png",
            "assets/images/products/v2-v5-3.png",
            "assets/images/products/v2-v5-4.png"
        ]
    },
    {
        "id": 3,
        "name": "V3/V3 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "The V3 Pro is a powerful yet portable ICU ventilator, featuring turbine-driven technology, a hidden carry handle, and extended battery life for true mobility. It supports a full range of patients from neonates to adults, offers advanced ventilation modes, and comes equipped with comprehensive clinical support tools.",
        "image": "assets/images/products/v3-v3-pro-1.png",
        "price": 155000,
        "images": [
            "assets/images/products/v3-v3-pro-1.png",
            "assets/images/products/v3-v3-pro-2.png",
            "assets/images/products/v3-v3-pro-3.png",
            "assets/images/products/v3-v3-pro-4.png"
        ]
    },
    {
        "id": 4,
        "name": "V1/V1 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Engineered for reliability in the most challenging environments, V1 Pro ensures stable ventilation during patient transport, even under extreme conditions. With advanced features and intelligent control, it delivers ICU-level ventilation performance on the move—bringing critical care standards wherever it’s needed most.",
        "image": "assets/images/products/v1-v1-pro-1.png",
        "price": 68006,
        "images": [
            "assets/images/products/v1-v1-pro-1.png",
            "assets/images/products/v1-v1-pro-2.png",
            "assets/images/products/v1-v1-pro-3.png",
            "assets/images/products/v1-v1-pro-4.png"
        ]
    },
    {
        "id": 5,
        "name": "NV50/60/70",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Technology Guides Greatness",
        "image": "assets/images/products/nv50-60-70-1.png",
        "price": 149126,
        "images": [
            "assets/images/products/nv50-60-70-1.png",
            "assets/images/products/nv50-60-70-2.png",
            "assets/images/products/nv50-60-70-3.png",
            "assets/images/products/nv50-60-70-4.png"
        ]
    },
    {
        "id": 6,
        "name": "NV10",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "The NV10 neonatal ventilator is a critical medical device designed to provide respiratory support for newborns and young infants who cannot breathe adequately on their own. It delivers precise airflow and pressure to maintain stable oxygenation. This infant ventilator provides stable, lung-protective ventilation strategies.",
        "image": "assets/images/products/nv10-1.png",
        "price": 66000,
        "images": [
            "assets/images/products/nv10-1.png",
            "assets/images/products/nv10-2.png",
            "assets/images/products/nv10-3.png",
            "assets/images/products/nv10-4.png"
        ]
    },
    {
        "id": 7,
        "name": "VN Series",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Neonatal and Pediatric Ventilator",
        "image": "assets/images/products/vn-series-1.png",
        "price": 88000,
        "images": [
            "assets/images/products/vn-series-1.png",
            "assets/images/products/vn-series-2.png",
            "assets/images/products/vn-series-3.png",
            "assets/images/products/vn-series-4.png"
        ]
    },
    {
        "id": 8,
        "name": "NV8",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "NV8\nNeonatal Ventilator",
        "image": "assets/images/products/nv8-1.png",
        "price": 137000,
        "images": [
            "assets/images/products/nv8-1.png"
        ]
    },
    {
        "id": 9,
        "name": "NF5",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Rapidly increase the O₂ concentration, increase the patient's O₂ reserve, and facilitate sputum suction, bronchoscopy, intubation and other nursing cares.",
        "image": "assets/images/products/nf5-1.png",
        "price": 92161,
        "features": [
            "Ultra-large touch screen: NF5 is equipped with a 4.3-inch touch screen, which allows easy and quick operation by touch and navigation knob.",
            "Electronic air-O2 mixer system: easy to set up flow rate and O2 concentration.",
            "Intuitive UI design: large font, easy for caregiver to operate and observe.",
            "High-performance nasal cannula: ergonomic design, soft and comfortable, free of constriction.",
            "Ultra-quiet design: The ultra-quiet turbine significantly reduces noise, provides a quiet O2 therapy environment, and reduces irritability.",
            "High performance turbine, no need for compressed air supply",
            "Integrated battery for transportation",
            "Light and compact medical trolley eases intra-hospital transport"
        ],
        "images": [
            "assets/images/products/nf5-1.png",
            "assets/images/products/nf5-2.png",
            "assets/images/products/nf5-3.png",
            "assets/images/products/nf5-4.png"
        ]
    },
    {
        "id": 10,
        "name": "HT30",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Respiratory Humidifier",
        "image": "assets/images/products/ht30-1.png",
        "price": 157577,
        "images": [
            "assets/images/products/ht30-1.png",
            "assets/images/products/ht30-2.png",
            "assets/images/products/ht30-3.png",
            "assets/images/products/ht30-4.png"
        ]
    },
    {
        "id": 11,
        "name": "HT50",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Respiratory Humidifier",
        "image": "assets/images/products/ht50-1.png",
        "price": 47694,
        "images": [
            "assets/images/products/ht50-1.png",
            "assets/images/products/ht50-2.png",
            "assets/images/products/ht50-3.png",
            "assets/images/products/ht50-4.png"
        ]
    },
    {
        "id": 12,
        "name": "X8",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The X8 is an integrated anesthesia machine designed to support accurate control, stable delivery, ICU-level ventilation support, perioperative lung protection, and smart anesthesia management in one advanced workstation.",
        "image": "assets/images/products/x8-1.png",
        "price": 40676,
        "images": [
            "assets/images/products/x8-1.png",
            "assets/images/products/x8-2.png",
            "assets/images/products/x8-3.png",
            "assets/images/products/x8-4.png"
        ]
    },
    {
        "id": 13,
        "name": "AX900",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The AX-900 is a modern anesthesia machine ventilator designed to provide safe and precise anesthesia delivery during surgical procedures. Combining precision ventilation with intuitive controls, this anesthesia workstation ensures patient safety and surgical efficiency. It ensures accurate ventilation, continuous patient monitoring, and efficient operation, offering a reliable solution for all anesthesia management needs.",
        "image": "assets/images/products/ax900-1.png",
        "price": 232000,
        "features": [
            "Provides more stable ventilation and sharper triggering under SIMV mode and PSV mode.",
            "Provide higher compression capacity.",
            "PEEP facilitates lung protection and recruitment maneuvers",
            "7% Ventilation Accuracy.",
            "65ml/min Low Leakage",
            "Autoclavable"
        ],
        "images": [
            "assets/images/products/ax900-1.png",
            "assets/images/products/ax900-2.png",
            "assets/images/products/ax900-3.png",
            "assets/images/products/ax900-4.png"
        ]
    },
    {
        "id": 14,
        "name": "AX-800/AX-700",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AX-800 features 15” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue",
        "image": "assets/images/products/ax-800-ax-700-1.png",
        "price": 85336,
        "features": [
            "Instantly know the fresh gas flow to your patient.",
            "Identifying key information quickly and easily is critical to your practice.",
            "Providing a quick reference even in a darkened environment.",
            "Provides more stable ventilation and sharper triggering under SIMV mode and PSV mode.",
            "Provide higher compression capacity.",
            "PEEP facilitates lung protection and recruitment maneuvers",
            "7% Ventilation Accuracy.",
            "65ml/min Low Leakage"
        ],
        "images": [
            "assets/images/products/ax-800-ax-700-1.png",
            "assets/images/products/ax-800-ax-700-2.png",
            "assets/images/products/ax-800-ax-700-3.png",
            "assets/images/products/ax-800-ax-700-4.png"
        ]
    },
    {
        "id": 15,
        "name": "AX600",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AX-600 Features 12.1” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue",
        "image": "assets/images/products/ax600-1.png",
        "price": 131000,
        "features": [
            "Provides more stable ventilation and sharper triggering under SIMV mode and PSV mode.",
            "Provide higher compression capacity.",
            "PEEP facilitates lung protection and recruitment maneuvers",
            "7% Ventilation Accuracy.",
            "65ml/min Low Leakage",
            "Autoclavable"
        ],
        "images": [
            "assets/images/products/ax600-1.png",
            "assets/images/products/ax600-2.png",
            "assets/images/products/ax600-3.png",
            "assets/images/products/ax600-4.png"
        ]
    },
    {
        "id": 16,
        "name": "AX400/AX500",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "The AX-500 features a 12-inch high-resolution screen that provides a clear and comfortable viewing experience for clinicians. Its user-friendly interface is intuitively designed, presenting vital information in a clean, organized layout. With simplified controls and clear display, the AX-500 makes monitoring and operation more efficient, helping medical staff stay focused on patient care",
        "image": "assets/images/products/ax400-ax500-1.png",
        "price": 99344,
        "features": [
            "BIS / AG / CO2 module optional",
            "Automatically identify CO2, N2O and 5 Anesthetic Gases",
            "Support CO2, N2O, anesthesia gas waveform display, support MAC value display",
            "Monitoring modules can be shared with our modular monitor, cost effective",
            "Support real-time O2 concentration monitoring",
            "BIS value display and EEG waveform display once plug in the BIS module",
            "Sample gas conncet with AGSS port design",
            "Individual flow controls with dual flow tubes provide simple, precise control, facilitate easy and accurate minimal / low flow anesthesia"
        ],
        "images": [
            "assets/images/products/ax400-ax500-1.png",
            "assets/images/products/ax400-ax500-2.png",
            "assets/images/products/ax400-ax500-3.png",
            "assets/images/products/ax400-ax500-4.png"
        ]
    },
    {
        "id": 17,
        "name": "A5/A7",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "A7, with the most comprehensive ventilation and intelligent and ergonomic operating design, is your best assistant during perioperative procedure!",
        "image": "assets/images/products/a5-a7-1.png",
        "price": 80000,
        "features": [
            "PSVPro: Innovative ventilation mode, is designed to give smarter and more efficient pressure support for the patient.",
            "PSVPro: Innovative ventilation mode, is designed to give smarter and more efficient pressure support for the patient."
        ],
        "images": [
            "assets/images/products/a5-a7-1.png",
            "assets/images/products/a5-a7-2.png",
            "assets/images/products/a5-a7-3.png",
            "assets/images/products/a5-a7-4.png"
        ]
    },
    {
        "id": 18,
        "name": "AGSS-H/AGSS-L",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "AGSS _ H is suitable for exhaust gas pipes with a flow rate of> 75 L/min",
        "image": "assets/images/products/agss-h-agss-l-1.png",
        "price": 76517,
        "features": [
            "Comen AGSS effectively reduces circuit ventilation abnormalities caused by negative pressure in the exhaust gas ducts.",
            "Comen AGSS effectively removes anesthesia exhaust gases in conjunction with hospital anesthetic gas exhaust pipes.",
            "Compatible with jet AGS ducts, negative-pressure AGS ducts, or negative-pressure ducts for high- and low-velocity exhaust gas ducts.",
            "Corresponding connection solutions for all major brands of anesthesia machines, which are suitable for almost all anesthesia machines.",
            "The system is ready for use with a simple commissioning process, and the exhaust discharge is thorough and stable.",
            "Absorbs gas through physical means, no gas/power supply or chemical consumables required"
        ],
        "images": [
            "assets/images/products/agss-h-agss-l-1.png",
            "assets/images/products/agss-h-agss-l-2.png",
            "assets/images/products/agss-h-agss-l-3.png",
            "assets/images/products/agss-h-agss-l-4.png"
        ]
    },
    {
        "id": 19,
        "name": "MR-M80T/MR-M60T",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Purpose-built for 1.5T/3.0T high-field MRI environments, the MR series monitor main unit operates stably within a static magnetic field of ≤60 mT, while the acquisition boxes can function within a 3.0T magnetic field without affecting MRI image quality.",
        "image": "assets/images/products/mr-m80t-mr-m60t-1.png",
        "price": 175251,
        "images": [
            "assets/images/products/mr-m80t-mr-m60t-1.png",
            "assets/images/products/mr-m80t-mr-m60t-2.png",
            "assets/images/products/mr-m80t-mr-m60t-3.jpg",
            "assets/images/products/mr-m80t-mr-m60t-4.png"
        ]
    },
    {
        "id": 20,
        "name": "K Pro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Precision Monitoring, Protecting Lives",
        "image": "assets/images/products/k-pro-series-1.png",
        "price": 152096,
        "features": [
            "Auto-brightness adjustment adapts to different lighting conditions in ORs, ICUs, and emergency settings",
            "7:1 contrast ratio, meeting WCAG 2.0 AAA standards for superior readability",
            "Intelligent gesture controls allow effortless navigation through patient data",
            "Neurology Monitoring: BIS , SedLine, EEG, aEEG, Masimo O3",
            "Respiratory Monitoring: RM, EtCO2, O2, Anesthesia Gas",
            "Circulatory Monitoring: C.O., ICG, PiCCO, ProAQT, Masimo Rainbow SET",
            "HIS Connection: Direct integration with hospital information systems through HL7.",
            "Central monitor: Supports central display on one screen through central monitor system."
        ],
        "images": [
            "assets/images/products/k-pro-series-1.png",
            "assets/images/products/k-pro-series-2.png",
            "assets/images/products/k-pro-series-3.png",
            "assets/images/products/k-pro-series-4.png"
        ]
    },
    {
        "id": 21,
        "name": "K22 Pro",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Convenient and Efficient",
        "image": "assets/images/products/k22-pro-1.png",
        "price": 41000,
        "features": [
            "HL7-Compliant Connectivity: Smooth integration with HIS, LIS, EMR, and PACS for real-time data exchange.",
            "K-Link Multi-Device Integration: Integration from anesthesia machines, ventilators, and infusion pumps—view all parameters on one screen.",
            "Dual-OS Support: Linux & Windows, Run native Windows applications for advanced data processing and seamlessly join hospital networks.",
            "Central Monitoring via eCenter-CMS: Remote, real-time patient oversight across your facility—streamline care and response."
        ],
        "images": [
            "assets/images/products/k22-pro-1.png",
            "assets/images/products/k22-pro-2.png",
            "assets/images/products/k22-pro-3.png",
            "assets/images/products/k22-pro-4.png"
        ]
    },
    {
        "id": 22,
        "name": "K1",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Stay Connected Anytime, Anywhere with K1: The Next-Generation Transport Monitor",
        "image": "assets/images/products/k1-1.png",
        "price": 37000,
        "features": [
            "Essential Measurements: 3/5-lead ECG, NIBP, SpO₂, IBP, Temperature, and Respiration.",
            "1. Hemodynamic Monitoring: Masimo Rainbow SET, IBP, Cardiac Output",
            "2. Respiratory Monitoring: Apnea Wake-Up Module, RM,",
            "3. Neurology Monitoring: NMT, SedLine, BIS",
            "4. Gas Analysis: Anesthetic Gas, EtCO₂",
            "Seamless Data Transfer to K12Pro, K15Pro, K18Pro, K22Pro: Ensure uninterrupted monitoring and continuous information flow for enhanced patient care.",
            "Wi-Fi and Wired Connectivity: Enable real-time data transmission to central monitoring systems, supporting remote oversight and decision-making."
        ],
        "images": [
            "assets/images/products/k1-1.png",
            "assets/images/products/k1-2.png",
            "assets/images/products/k1-3.png",
            "assets/images/products/k1-4.png"
        ]
    },
    {
        "id": 23,
        "name": "NMPro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Easy Flexibility Within Touch",
        "image": "assets/images/products/nmpro-series-1.png",
        "price": 148492,
        "images": [
            "assets/images/products/nmpro-series-1.png",
            "assets/images/products/nmpro-series-2.png",
            "assets/images/products/nmpro-series-3.png",
            "assets/images/products/nmpro-series-4.png"
        ]
    },
    {
        "id": 24,
        "name": "N Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Inspire Simple and Intuitive Monitoring",
        "image": "assets/images/products/n-series-1.png",
        "price": 88000,
        "features": [
            "Built-in Parameters: Compact care with ECG, NIBP, SpO₂, EtCO₂, Dual-IBP, and Cardiac Output—no extra modules required.",
            "SiQ™ Pulse Oximetry: Tracks SpO₂ accurately even in perfusion below 0.2%, with quantifiable reliability metrics.",
            "Smart NBP™: Motion-resistant oscillometric blood pressure measurement, rigorously validated down to neonatal patients.",
            "Rugged Reliability: EN 1789 certification and 0.75 m drop resistance ensure steadfast operation in ambulances and field environments.",
            "Ready-to-Go Rescue Bag: Securely dock the monitor in its custom-fitted bag; access all controls without removal for truly grab-and-run response."
        ],
        "images": [
            "assets/images/products/n-series-1.png",
            "assets/images/products/n-series-2.png",
            "assets/images/products/n-series-3.png",
            "assets/images/products/n-series-4.png"
        ]
    },
    {
        "id": 25,
        "name": "ND Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Valuing Simplicity, Maximizing Care",
        "image": "assets/images/products/nd-series-1.png",
        "price": 130276,
        "features": [
            "Versatile Display Sizes: Three model choices (10″/12″/15″) ensure optimal visibility in every clinical setting.",
            "Comfort-First Viewing: The 10° tilt feature delivers a clear, glare-free screen and alleviates caregiver fatigue.",
            "Effortless Cable Management: Flip-out cabinet board ensures all accessories stay organized and fully accessible for cleaning.",
            "Early Warning Scores (EWS): Predictive risk stratification",
            "CCHD Screening: Critical Congenital Heart Disease detection for neonates",
            "SepsisGuide™: Real-time sepsis risk analytics",
            "24h ECG Summary: Provides the current patient's ECG activity statistics for the last 24 hours.",
            "Basic plus Advanced Monitor: Predictive risk stratification"
        ],
        "images": [
            "assets/images/products/nd-series-1.png",
            "assets/images/products/nd-series-2.png",
            "assets/images/products/nd-series-3.png",
            "assets/images/products/nd-series-4.png"
        ]
    },
    {
        "id": 26,
        "name": "eCenter-CMS",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "All-in-one Central Monitoring Solution",
        "image": "assets/images/products/ecenter-cms-1.png",
        "price": 92380,
        "images": [
            "assets/images/products/ecenter-cms-1.png",
            "assets/images/products/ecenter-cms-2.png",
            "assets/images/products/ecenter-cms-3.png",
            "assets/images/products/ecenter-cms-4.png"
        ]
    },
    {
        "id": 27,
        "name": "NC6 &amp; NC7",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The COMEN NC6 & NC7 Patient Monitors set a new benchmark in clinical monitoring, offering speed, accuracy, and intelligent support to enhance ward rounds and optimize patient outcomes.",
        "image": "assets/images/products/nc6-amp-nc7-1.png",
        "price": 101126,
        "features": [
            "Seamless Data Integration: Connect effortlessly with eCenter-CMS and hospital networks via HL7 for real-time data exchange and centralized access."
        ],
        "images": [
            "assets/images/products/nc6-amp-nc7-1.png",
            "assets/images/products/nc6-amp-nc7-2.png",
            "assets/images/products/nc6-amp-nc7-3.png",
            "assets/images/products/nc6-amp-nc7-4.png"
        ]
    },
    {
        "id": 28,
        "name": "NC5",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The NC5 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. It delivers comprehensive patient surveillance with enhanced connectivity and clinical intelligence, designed for dynamic hospital environments.",
        "image": "assets/images/products/nc5-1.png",
        "price": 87628,
        "features": [
            "Multi-Parameter Precision Monitoring: 3-lead ECG, NIBP, SpO₂(Masimo or Nellcor or Comen), PR, and Temp.",
            "Display: 8-inch screen, TFT display, color LCD, 800 × 600 resolution; Up to 2 waveforms display simultaneously",
            "Water ingress protection level (main unit) : IPX2",
            "Portability: Compact size: 165 × 250 × 165 mm; Light weight: 2.5 kg",
            "Operation time: ≥8 hours under full charge and normal use.",
            "Data review: Graph/Table trend: 160h; alarm events review: 200 events; NIBP measurement data: 2000 sets; waveform review: 48h",
            "Comprehensive Connectivity Solution: Central Monitoring Integration via Star8800, Hospital information system integration via HL7",
            "Peripheral Connectivity Support: Dual USB ports (mouse/keyboard/printers"
        ],
        "images": [
            "assets/images/products/nc5-1.png",
            "assets/images/products/nc5-2.png",
            "assets/images/products/nc5-3.png"
        ]
    },
    {
        "id": 29,
        "name": "NC3",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The NC3 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. Its compact design and intuitive operation streamline clinical workflows while ensuring reliable physiological parameter tracking.",
        "image": "assets/images/products/nc3-1.png",
        "price": 54392,
        "features": [
            "Multi-Parameter Monitoring: NIBP, SpO₂ , Temp (infrared ear), and PR.",
            "Tri-brand SpO₂ compatibility: Supports Masimo, Nellcor, and Comen.",
            "Portability: compact size: 130*125*299mm & 1.25kg &Integrated portable handle for bedside-to-bedside transport",
            "Single-button NIBP operation: Start/stop key with backlight",
            "Data Review: 50 sets data can be storage in monitor.",
            "Degree of ingress protection (w/o ear thermo): IPX1"
        ],
        "images": [
            "assets/images/products/nc3-1.png",
            "assets/images/products/nc3-2.png",
            "assets/images/products/nc3-3.png"
        ]
    },
    {
        "id": 30,
        "name": "CF5&amp;CF8",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "The Perfect Blend of Compactness and Modularity",
        "image": "assets/images/products/cf5-amp-cf8-1.png",
        "price": 129445,
        "features": [
            "Maternal Parameters: Continuously monitor ECG, SpO₂, NIBP, RESP, and TEMP alongside fetal care, providing comprehensive patient assessment.",
            "Comprehensive CTG scoring includes seven global standards (NRIES, Fischer, Oxford, etc.) for robust assessment."
        ],
        "images": [
            "assets/images/products/cf5-amp-cf8-1.png",
            "assets/images/products/cf5-amp-cf8-2.png",
            "assets/images/products/cf5-amp-cf8-3.png",
            "assets/images/products/cf5-amp-cf8-4.png"
        ]
    },
    {
        "id": 31,
        "name": "H300 &amp; H301",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Weighs less than 1.3kg, easily held in hand, and under 6cm thick for effortless portability.",
        "image": "assets/images/products/h300-amp-h301-1.png",
        "price": 129692,
        "images": [
            "assets/images/products/h300-amp-h301-1.png",
            "assets/images/products/h300-amp-h301-2.png",
            "assets/images/products/h300-amp-h301-3.png",
            "assets/images/products/h300-amp-h301-4.png"
        ]
    },
    {
        "id": 32,
        "name": "H1200",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Convenient input and more shortcut controls with an alphanumeric keyboard, plus IPX1 waterproof protection.",
        "image": "assets/images/products/h1200-1.png",
        "price": 183452,
        "images": [
            "assets/images/products/h1200-1.png",
            "assets/images/products/h1200-2.png",
            "assets/images/products/h1200-3.png",
            "assets/images/products/h1200-4.png"
        ]
    },
    {
        "id": 33,
        "name": "S80",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Defibrillator Monitor",
        "image": "assets/images/products/s80-1.png",
        "price": 55890,
        "images": [
            "assets/images/products/s80-1.png",
            "assets/images/products/s80-2.png",
            "assets/images/products/s80-3.png",
            "assets/images/products/s80-4.png"
        ]
    },
    {
        "id": 34,
        "name": "S50",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Provide a full range of functions to meet various life support needs",
        "image": "assets/images/products/s50-1.png",
        "price": 190763,
        "images": [
            "assets/images/products/s50-1.png",
            "assets/images/products/s50-2.png",
            "assets/images/products/s50-3.png",
            "assets/images/products/s50-4.png"
        ]
    },
    {
        "id": 35,
        "name": "S8",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "The COMEN S8 integrates defibrillation, pacing, monitoring, and AED functions in a single portable device. Suitable for pre-hospital emergencies and hospital use, it supports synchronous/asynchronous defibrillation, pacing modes, and extensive vital-sign monitoring (5/12-lead ECG, SpO₂, TEMP, EtCO₂, IBP), ensuring comprehensive patient care.",
        "image": "assets/images/products/s8-1.png",
        "price": 124264,
        "features": [
            "Defibrillation in just 3 steps (Energy selection–Charging–Discharging).",
            "One-knob mode switching (manual defibrillation, pacing, AED).",
            "Instantaneous (<1s) energy setup, 25 energy levels, and easy one-button 12-lead ECG access."
        ],
        "images": [
            "assets/images/products/s8-1.png",
            "assets/images/products/s8-2.png",
            "assets/images/products/s8-3.png",
            "assets/images/products/s8-4.png"
        ]
    },
    {
        "id": 36,
        "name": "S5",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Convenient and Efficient",
        "image": "assets/images/products/s5-1.png",
        "price": 103928,
        "images": [
            "assets/images/products/s5-1.png",
            "assets/images/products/s5-2.png",
            "assets/images/products/s5-3.png",
            "assets/images/products/s5-4.png"
        ]
    },
    {
        "id": 37,
        "name": "S1",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Designed for Efficiency, Built for Mobility",
        "image": "assets/images/products/s1-1.png",
        "price": 66900,
        "images": [
            "assets/images/products/s1-1.png",
            "assets/images/products/s1-2.png",
            "assets/images/products/s1-3.png",
            "assets/images/products/s1-4.png"
        ]
    },
    {
        "id": 38,
        "name": "F3/F5",
        "brand": "COMEN",
        "category": "AED",
        "description": "F3/F5, a user-friendly AED that allows fast operation. It is compact, light-weighted and has integrated AED mode and 3-lead ECG monitoring function. The 7-inch large HD screen provides vivid interactive guidance, making rescue process an easy job.",
        "image": "assets/images/products/f3-f5-1.png",
        "price": 103017,
        "images": [
            "assets/images/products/f3-f5-1.png",
            "assets/images/products/f3-f5-2.png",
            "assets/images/products/f3-f5-3.png",
            "assets/images/products/f3-f5-4.png"
        ]
    },
    {
        "id": 39,
        "name": "G Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Designed for life-saving speed, the G-Series AED features an intuitive, responder-focused workflow that enables rapid defibrillation even in high-stress emergencies. With advanced cardiac rhythm analysis and clear, automated step-by-step guidance, it minimizes required actions and removes uncertainty for lay rescuers—helping ensure fast, confident intervention when every second counts.",
        "image": "assets/images/products/g-series-1.png",
        "price": 56179,
        "images": [
            "assets/images/products/g-series-1.png",
            "assets/images/products/g-series-2.png",
            "assets/images/products/g-series-3.png",
            "assets/images/products/g-series-4.png"
        ]
    },
    {
        "id": 40,
        "name": "F Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Life-saving Speed at Your Fingertips",
        "image": "assets/images/products/f-series-1.png",
        "price": 93366,
        "features": [
            "7-inch HD Display (F2/F2A models only) with vivid animations illustrating each step.",
            "Continuous Voice Instructions: Step-by-step audio guidance to reduce stress and uncertainty.",
            "One-button Patient & Language Selection: (F2/F2A models only) with vivid animations illustrating each step.",
            "Up to 360J Energy Output: Successfully treats challenging cases, including obese patients or those with underlying conditions.",
            "Automatic Energy Adjustment: Energy levels automatically adapt when switching between adult and pediatric modes for maximum safety.",
            "Synchronized Rhythm Analysis: No wasted time, device analyzes rhythm and charges simultaneously",
            "Rapid Shock Delivery: First shock within 7 seconds, optimal rescue effectiveness.",
            "IP55 Waterproof & Dustproof: Reliable performance in demanding settings"
        ],
        "images": [
            "assets/images/products/f-series-1.png",
            "assets/images/products/f-series-2.png",
            "assets/images/products/f-series-3.png",
            "assets/images/products/f-series-4.png"
        ]
    },
    {
        "id": 41,
        "name": "ES-Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Chest compression system",
        "image": "assets/images/products/es-series-1.png",
        "price": 57961,
        "images": [
            "assets/images/products/es-series-1.png",
            "assets/images/products/es-series-2.png",
            "assets/images/products/es-series-3.png",
            "assets/images/products/es-series-4.png"
        ]
    },
    {
        "id": 42,
        "name": "L9",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "Illuminate Brilliance, Preserve Vision",
        "image": "assets/images/products/l9-1.png",
        "price": 42373,
        "images": [
            "assets/images/products/l9-1.png",
            "assets/images/products/l9-2.png",
            "assets/images/products/l9-3.png",
            "assets/images/products/l9-4.png"
        ]
    },
    {
        "id": 43,
        "name": "L5",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "During the surgery, the medical staff will change the height of the surgical light according to the doctor's position change, which means the surgical light doesn’t keep 1 meter from the wound and cause the focus change. L5 adopts adaptive lighting technology, the surgical light will automatically adapt to the distance of the wound and always keep the focus on the wound.",
        "image": "assets/images/products/l5-1.png",
        "price": 150688,
        "images": [
            "assets/images/products/l5-1.png",
            "assets/images/products/l5-2.png",
            "assets/images/products/l5-3.png",
            "assets/images/products/l5-4.png"
        ]
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
        "image": "assets/images/products/we1-we2-1.png",
        "price": 92255,
        "features": [
            "WE1/WE2 is the most economical solution for the construction of new hospitals and the upgrading of old ORs."
        ],
        "images": [
            "assets/images/products/we1-we2-1.png",
            "assets/images/products/we1-we2-2.png",
            "assets/images/products/we1-we2-3.png",
            "assets/images/products/we1-we2-4.png"
        ]
    },
    {
        "id": 46,
        "name": "WH1/WH2",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "As surgery advances, hybrid operating rooms must fulfill a wide range of surgical needs. WH1/WH2 is an electrohydraulic operating table with a variety of accessories. It features a stable load-bearing capacity and allows for flexible operation. It can efficiently provide a safe, comfortable, and convenient operating environment for surgeries while also providing the most cost-effective alternative for the construction and upgrade of new hospitals.",
        "image": "assets/images/products/wh1-wh2-1.png",
        "price": 116372,
        "images": [
            "assets/images/products/wh1-wh2-1.png",
            "assets/images/products/wh1-wh2-2.png",
            "assets/images/products/wh1-wh2-3.png",
            "assets/images/products/wh1-wh2-4.png"
        ]
    },
    {
        "id": 47,
        "name": "W5/W3",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "The modular design of the W5 is a major feature, with an emphasis on the expandability of the operating table in order to meet a variety of clinical needs and solve the problem of special posture requirements under different surgical settings.",
        "image": "assets/images/products/w5-w3-1.png",
        "price": 195783,
        "features": [
            "1,250 kg static load test；",
            "550 kg dynamic load test；",
            "18,000 times load motion test；",
            "10-year life span test；",
            "Manual upper backboard 10,000 times exercise test；",
            "Head board 10,000 times movement test；",
            "Leg board 5000 times exercise test;Circuit board stress test"
        ],
        "images": [
            "assets/images/products/w5-w3-1.png",
            "assets/images/products/w5-w3-2.png",
            "assets/images/products/w5-w3-3.png",
            "assets/images/products/w5-w3-4.png"
        ]
    },
    {
        "id": 48,
        "name": "BQ80",
        "brand": "COMEN",
        "category": "Warmer",
        "description": "This is by far the most powerful 4-in-1 neonatal nursing platform. The BQ80 integrates four key rescue and nursing systems to achieve one-stop operation and management. At the same time, it scientifically optimizes the workflow, helps medical staff to easily respond to urgent medical needs, effectively saves valuable rescue time, and provides comprehensive and meticulous care for newborns.",
        "image": "assets/images/products/bq80-1.png",
        "price": 54599,
        "images": [
            "assets/images/products/bq80-1.png",
            "assets/images/products/bq80-2.png",
            "assets/images/products/bq80-3.png",
            "assets/images/products/bq80-4.png"
        ]
    },
    {
        "id": 49,
        "name": "B10",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Illuminate Brilliance, Preserve Vision",
        "image": "assets/images/products/b10-1.png",
        "price": 46808,
        "images": [
            "assets/images/products/b10-1.png",
            "assets/images/products/b10-2.png",
            "assets/images/products/b10-3.png",
            "assets/images/products/b10-4.png"
        ]
    },
    {
        "id": 50,
        "name": "B3",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "The water tank is made of transparent material. The water condition inside can be viewed at a glance. This greatly reduces the risk of dry burning.",
        "image": "assets/images/products/b3-1.png",
        "price": 125293,
        "images": [
            "assets/images/products/b3-1.png",
            "assets/images/products/b3-2.png",
            "assets/images/products/b3-3.png",
            "assets/images/products/b3-4.png"
        ]
    },
    {
        "id": 51,
        "name": "B6/B8",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Neonatal incubator is warming equipment used for providing constant temperature and humidity for treatment of premature infants and critically ill neonates which fit well with their physiological characteristics and needs.",
        "image": "assets/images/products/b6-b8-1.png",
        "price": 106398,
        "features": [
            "Effective humidity of up to more than 95%:Suitable for premature infants with low weight",
            "Titanium alloy material for evaporation:corrosion resistance and limescale reduction"
        ],
        "images": [
            "assets/images/products/b6-b8-1.png",
            "assets/images/products/b6-b8-2.png",
            "assets/images/products/b6-b8-3.png",
            "assets/images/products/b6-b8-4.png"
        ]
    },
    {
        "id": 52,
        "name": "BT800",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Accurate, efficient, long-endurance environment control",
        "image": "assets/images/products/bt800-1.png",
        "price": 61556,
        "images": [
            "assets/images/products/bt800-1.png",
            "assets/images/products/bt800-2.png",
            "assets/images/products/bt800-3.png",
            "assets/images/products/bt800-4.png"
        ]
    },
    {
        "id": 53,
        "name": "P3/P6",
        "brand": "COMEN",
        "category": "Hypothermia Treatment",
        "description": "Neonatal hypoxic-ischemic encephalopathy (HIE) is a brain injury disease with a high mortality rate. Therapeutic Hypothermia is regarded as a core treatment for HIE as it helps by maintaining a lower core temperature in newborns for up to 72 hours, effectively lowering mortality by slowing down apoptotic processes and reducing oxygen dependence in the brain.",
        "image": "assets/images/products/p3-p6-1.png",
        "price": 170304,
        "images": [
            "assets/images/products/p3-p6-1.png",
            "assets/images/products/p3-p6-2.png",
            "assets/images/products/p3-p6-3.png",
            "assets/images/products/p3-p6-4.png"
        ]
    },
    {
        "id": 54,
        "name": "BL20",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Greatly increase effective treatment area together with overhead phototherapy devices (BL60/BL70)",
        "image": "assets/images/products/bl20-1.png",
        "price": 193908,
        "features": [
            "3 selectable levels up to 63μW/cm²/nm",
            "Timer: Count up or down",
            "Air gap to reduce temperature rising rate, significantly improve treatment effectiveness",
            "Compartment available for X-ray detector"
        ],
        "images": [
            "assets/images/products/bl20-1.png",
            "assets/images/products/bl20-2.png",
            "assets/images/products/bl20-3.png",
            "assets/images/products/bl20-4.png"
        ]
    },
    {
        "id": 55,
        "name": "BL60",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Maximum irradiance at a wave length of 475nm which is at the perfect peak according to the latest clinical guidelines*",
        "image": "assets/images/products/bl60-1.png",
        "price": 75899,
        "images": [
            "assets/images/products/bl60-1.png",
            "assets/images/products/bl60-2.png",
            "assets/images/products/bl60-3.png",
            "assets/images/products/bl60-4.png"
        ]
    },
    {
        "id": 56,
        "name": "MX8900/M800/ME900",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "Syringe Pump / Infusion Pump",
        "image": "assets/images/products/mx8900-m800-me900-1.png",
        "price": 64561,
        "features": [
            "Its color-code, graphical and numerical pressure indicators, help predict occlusion alarm in advance.",
            "Its color-code, graphical and numerical pressure indicators, help predict occlusion alarm in advance."
        ],
        "images": [
            "assets/images/products/mx8900-m800-me900-1.png",
            "assets/images/products/mx8900-m800-me900-2.png",
            "assets/images/products/mx8900-m800-me900-3.png",
            "assets/images/products/mx8900-m800-me900-4.png"
        ]
    },
    {
        "id": 57,
        "name": "ME660/M260",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "EN1789 certified for use during transport and E&R scenarios.Shielded from harsh environments with a validated IP44 rating.",
        "image": "assets/images/products/me660-m260-1.png",
        "price": 146854,
        "features": [
            "Safer for pediatric/neonatal use",
            "Smooth & flexible workflow - up to 9 phases of ramp up/down and up to 10 sequential setups available",
            "Rates of up to 2200ml/h, applicable for large-volume fluids administration",
            "Infusion Time up to ~100hrs[2]"
        ],
        "images": [
            "assets/images/products/me660-m260-1.png",
            "assets/images/products/me660-m260-2.png",
            "assets/images/products/me660-m260-3.png",
            "assets/images/products/me660-m260-4.png"
        ]
    },
    {
        "id": 58,
        "name": "EIS-2000",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "Expanding Horizons，Elevating Precision",
        "image": "assets/images/products/eis-2000-1.png",
        "price": 57969,
        "images": [
            "assets/images/products/eis-2000-1.png",
            "assets/images/products/eis-2000-2.png",
            "assets/images/products/eis-2000-3.png",
            "assets/images/products/eis-2000-4.png"
        ]
    },
    {
        "id": 59,
        "name": "CVL Series",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "The 3\" screen supports high resolution up to 640*48",
        "image": "assets/images/products/cvl-series-1.png",
        "price": 132039,
        "images": [
            "assets/images/products/cvl-series-1.png",
            "assets/images/products/cvl-series-2.png",
            "assets/images/products/cvl-series-3.png",
            "assets/images/products/cvl-series-4.png"
        ]
    },
    {
        "id": 60,
        "name": "EP50",
        "brand": "COMEN",
        "category": "Ultrasound",
        "description": "Everywhere   Easy   Efficiency",
        "image": "assets/images/products/ep50-1.png",
        "price": 167989,
        "images": [
            "assets/images/products/ep50-1.png",
            "assets/images/products/ep50-2.png",
            "assets/images/products/ep50-3.png",
            "assets/images/products/ep50-4.png"
        ]
    },
    {
        "id": 61,
        "name": "CF9600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/cf9600-1.png",
        "price": 197949,
        "features": [
            "Automatic retesting of low concentration samples: Ensuring the accuracy of classification of low value samples by automatic multiplication counting."
        ],
        "images": [
            "assets/images/products/cf9600-1.png",
            "assets/images/products/cf9600-2.png",
            "assets/images/products/cf9600-3.png",
            "assets/images/products/cf9600-4.png"
        ]
    },
    {
        "id": 62,
        "name": "CH8600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/ch8600-1.png",
        "price": 147414,
        "features": [
            "Up to 90 tests/ hour and STAT function. \n     25 reportable parameters + 6 research parameters.",
            "Large data storage capacity: 200,000 results.",
            "Real-time monitoring of reagent residue.",
            "One-button switching of detection mode, flexible and convenient.",
            "Wider linear: WBC (0.00-520) * 10⁹ / L.\nRBC (0.00-8.70) * 10¹² / L.",
            "WBC 5-Part differential analysis in less than one minute.",
            "Automatic mixing of sample tubes with autoloader that allows fully automatic loading of samples.",
            "Open-tube mode available for STAT samples."
        ],
        "images": [
            "assets/images/products/ch8600-1.png",
            "assets/images/products/ch8600-2.png",
            "assets/images/products/ch8600-3.png",
            "assets/images/products/ch8600-4.png"
        ]
    },
    {
        "id": 63,
        "name": "CH8600CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8600crp-1.jpg",
        "price": 186460,
        "images": [
            "assets/images/products/ch8600crp-1.jpg",
            "assets/images/products/ch8600crp-2.jpg",
            "assets/images/products/ch8600crp-3.png"
        ]
    },
    {
        "id": 64,
        "name": "CH8500",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/ch8500-1.png",
        "price": 176154,
        "features": [
            "Throughput: 70T/H",
            "25 reportable parameters + 23 research parameters",
            "High temperature resistance: 10-35℃",
            "Compact size with built in Lyse position",
            "Achieve precise cells measurement by microfluidics flow + specific staining  technology"
        ],
        "images": [
            "assets/images/products/ch8500-1.png",
            "assets/images/products/ch8500-2.png",
            "assets/images/products/ch8500-3.png",
            "assets/images/products/ch8500-4.png"
        ]
    },
    {
        "id": 65,
        "name": "CH8500-V Series",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Explore the advanced capabilities of the CoooSeee CH8500-V series hematology analyzer. With a throughput of 60 samples per hour and a compact design, this innovation represents the latest advancement from CoooSeee for diagnostic excellence in WBC 5-part differentiation.",
        "image": "assets/images/products/ch8500-v-series-1.png",
        "price": 144551,
        "features": [
            "3 histograms for WBC, RBC and PLT",
            "1 BASO scattergram, 3 2D scattergrams and 1 3D scattergram for WBC differential",
            "Impedance method for RBC and PLT counting Cyanide free reagent for hemoglobin test by colorim etry method",
            "3 histograms for WBC, RBC and PLT",
            "Whole Blood Mode: 17.5μL",
            "3 histograms for WBC, RBC and PLT",
            "Up to 60 samples per hour",
            "≥200 tests/kit, validity: 100 days"
        ],
        "images": [
            "assets/images/products/ch8500-v-series-1.png",
            "assets/images/products/ch8500-v-series-2.png",
            "assets/images/products/ch8500-v-series-3.png",
            "assets/images/products/ch8500-v-series-4.png"
        ]
    },
    {
        "id": 66,
        "name": "CH8500CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "No.2 FIYTA Timepiece Building, Nanhuan Avenue, Gongming Sub-district, Guangming District, Shenzhen, 518106, Guangdong, China",
        "image": "assets/images/products/ch8500crp-1.webp",
        "price": 140707,
        "images": [
            "assets/images/products/ch8500crp-1.webp",
            "assets/images/products/ch8500crp-2.jpg",
            "assets/images/products/ch8500crp-3.png"
        ]
    },
    {
        "id": 67,
        "name": "CH8300",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/ch8300-1.png",
        "price": 179542,
        "features": [
            "Throughput: 70T/H",
            "2 reportable parameters+ 6 research parameters",
            "Only 9μL blood sample is required",
            "Specially developed for users with small sample volumes",
            "10.4-inch capacitive touch screen, intuitive guided interface",
            "70 tests/hour throughput to quantify efficiency",
            "Cyanide-free method + multiple histograms prevent error analysis",
            "Streamlined Workflow from sample preparation to result interpretation"
        ],
        "images": [
            "assets/images/products/ch8300-1.png",
            "assets/images/products/ch8300-2.png",
            "assets/images/products/ch8300-3.png",
            "assets/images/products/ch8300-4.png"
        ]
    },
    {
        "id": 68,
        "name": "CH8300CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/ch8300crp-1.png",
        "price": 32408,
        "features": [
            "Throughput: 40T/H",
            "24 reportable parameters + 2 research parameters",
            "Only 9μL blood sample is required",
            "Specially developed for users with small sample volumes",
            "10.4-inch capacitive touch screen, intuitive guided interface",
            "40 tests/hour throughput for CRP detection",
            "Cyanide-free method + multiple histograms prevent error analysis",
            "Streamlined workflow from sample preparation to result interpretation"
        ],
        "images": [
            "assets/images/products/ch8300crp-1.png",
            "assets/images/products/ch8300crp-2.png",
            "assets/images/products/ch8300crp-3.png",
            "assets/images/products/ch8300crp-4.png"
        ]
    },
    {
        "id": 69,
        "name": "CH8310",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Automatic Hematology Analyzer",
        "image": "assets/images/products/ch8310-1.png",
        "price": 107705,
        "features": [
            "Throughput: 45T/H",
            "20 reportable parameters + 2 research parameters",
            "Only 9μL blood sample for CBC counting",
            "10.4-inch capacitive touch screen, modern & intuitive interface",
            "One-click troubleshooting and unclogging functions",
            "Built-in lyse storage, saving space for more flexible operation",
            "Compact & space-saving design",
            "Various printer connectivity options tailored to your lab's needs"
        ],
        "images": [
            "assets/images/products/ch8310-1.png",
            "assets/images/products/ch8310-2.png",
            "assets/images/products/ch8310-3.png",
            "assets/images/products/ch8310-4.png"
        ]
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
        "image": "assets/images/products/single-use-rhinolaryngoscope-1.jpg",
        "description": "Pre-sterilized and ready for immediate use, the Single-use Rhinolaryngoscopes significantly boost workflow efficiency and accelerate clinical turnaround in OPD settings.\n\n\n\n\nSterile Convenience, Streamlined Workflow\n\nThe Single-use Rhinolaryngoscopes feature sterile, single-use packaging, eliminating the need for reprocessing and allowing for immediate use, enhancing workflow efficiency and accelerates patient flow in outpatient departments.\n\nNavigate with Confidence and Clarity\n\nThe medical-grade Pebax insertion tube provides the ideal balance of flexibility and support for effortless exploration of the nasopharynx. Combined with a high-definition CMOS camera, it ensures clear and comprehensive visualization for accurate diagnosis.\n\nThe Right Size for Every Patient\n\nThe Single-use Rhinolaryngoscopes offer a selection of models in various sizes, ensuring a precise fit and optimal examination for diverse patient anatomies.",
        "images": [
            "assets/images/products/single-use-rhinolaryngoscope-1.jpg",
            "assets/images/products/single-use-rhinolaryngoscope-2.jpg"
        ]
    },
    {
        "id": 111,
        "name": "Single-use Choledochoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6000,
        "image": "assets/images/products/single-use-choledochoscope-1.jpg",
        "description": "The Single-use Choledochoscope offers an effective solution for percutaneous lithotripsy of biliary stones, while also serving as an ideal tool for postoperative care via sinus tract at the bedside.\n\n\nThe Single-use Revolution: Cost Savings & Efficiency Gains\n\nThe Single-use Choledochoscope reduces the cost of sterilization and maintenance. Its sterile packaging allows medical staff to use it immediately across various clinical scenarios, significantly improving diagnostic and treatment efficiency.\n\nMinimize Patient Trauma\n\nThe Single-use Choledochoscope features a soft, hydrophilic Pebax insertion tube that ensures smooth insertion and excellent flexibility. With a slim 5mm outer diameter, it enables easy sinus tract access at the bedside for postoperative examination and intervention, offering an optimal solution for both operating room and bedside care.",
        "images": [
            "assets/images/products/single-use-choledochoscope-1.jpg",
            "assets/images/products/single-use-choledochoscope-2.jpg"
        ]
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
        "image": "assets/images/products/single-use-bronchoscope-1.jpg",
        "description": "The Single-use Bronchoscope is available in 9 models, offering comprehensive solutions for airway management and the diagnosis and treatment of respiratory diseases across diverse patient populations. Its single-use nature significantly reduces the costs associated with disinfection, sterilization, and maintenance. The \"ready-to-use\" design enhances clinical efficiency and accelerates patient turnover in the ICU.\n\n\n\n\nNine Model Options to Fully Meet Clinical Demands\n\nThe Single-use Bronchoscope includes 1 diagnostic and 8 therapeutic models, designed for different patient groups. These versatile options can handle complex clinical scenarios efficiently, supporting routine and difficult airway intubation, respiratory examinations, bronchoalveolar lavage, biopsy, foreign body removal, and drug delivery in ICU, bedside, and operating room.\n\n\n\n\nBrand-New Design, Enhanced Performance\n\nOutstanding Functional Design\n\nThe Single-use Bronchoscope has been newly upgraded to enhance product perfo",
        "images": [
            "assets/images/products/single-use-bronchoscope-1.jpg",
            "assets/images/products/single-use-bronchoscope-2.jpg",
            "assets/images/products/single-use-bronchoscope-3.jpg",
            "assets/images/products/single-use-bronchoscope-4.jpg"
        ]
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
        "image": "assets/images/products/single-use-ureterorenoscope-hu30m-1.jpg",
        "description": "The world’s first 6.3Fr Single-use Ureterorenoscope approved for surgery, the HU30M, redefines ureteroscopy with effortless ureter engagement, superior maneuverability, and optimal irrigation flow. Its ultra-slim design minimizes trauma while ensuring precision in complex cases.\n\nClinically proven and trusted by global experts, the HU30M enhances safety, efficiency, and patient outcomes—making it the smart choice for modern urology.\n\n\n\n\nHow can a smaller diameter benefit ureteral surgery?\n\nChallenging the Limits of URS\n\nThe 6.3Fr insertion tube diameter of the HU30M challenges the conventional limits of ureterorenoscope (URS) design. This innovation provides a surgical solution for congenital or pathological ureteral strictures previously deemed inoperable, expanding treatment options for complex cases. Clinical studies have proven its ability to facilitate the \"no-touch\" technique, navigating challenging anatomies while maintaining optimal flow rates for clear visualization.\n\nEnhanced",
        "images": [
            "assets/images/products/single-use-ureterorenoscope-hu30m-1.jpg",
            "assets/images/products/single-use-ureterorenoscope-hu30m-2.png",
            "assets/images/products/single-use-ureterorenoscope-hu30m-3.jpg",
            "assets/images/products/single-use-ureterorenoscope-hu30m-4.jpg"
        ]
    },
    {
        "id": 117,
        "name": "Single-use Ureterorenoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6800,
        "image": "assets/images/products/single-use-ureterorenoscope-1.png",
        "description": "The HU Series Single-use Ureterorenoscope embodies ‘smaller, safer, and more efficient’ innovation—redefining urological standards. It delivers cost-effective and advanced solutions for clinicians and patients.\n△ Click on the image to view the details of 6.3Fr\n\n\n\n\nSlim yet powerful: The World's First Clinically Approved 6.3Fr\n\nThrough three generations of innovation, the HU series has overcome significant technical challenges. Without changing the working channel diameter 3.6Fr, the insertion tube diameter has progressively been reduced from 9.0Fr to 7.5Fr, and ultimately reach to the extraordinary 6.3Fr. Clinically proven, it reduces Ratio of Endoscope-Sheath Diameter (RESD), enhances maneuverability in RIRS surgery, improves intrarenal pressure management, and sets a new standard in precision urology.\n\nCost-Effective Advantage Over Traditional RIRS\n\nThe HU30 series Single-use Ureterorenoscope delivers significant cost savings compared to reusable systems. By eliminating reprocessing ",
        "images": [
            "assets/images/products/single-use-ureterorenoscope-1.png",
            "assets/images/products/single-use-ureterorenoscope-2.png",
            "assets/images/products/single-use-ureterorenoscope-3.jpg",
            "assets/images/products/single-use-ureterorenoscope-4.jpg"
        ]
    },
    {
        "id": 118,
        "name": "Single-use Cystoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 6000,
        "image": "assets/images/products/single-use-cystoscope-1.jpg",
        "description": "The Single-use Cystoscope is designed to lower hospital costs and ensures patient comfort and safety. It is suitable for lower urinary system diagnosis and treatment, especially for bladder diverticulum. This disposable solution eliminates reprocessing costs while maintaining high clinical performance.\n\n\n\n\nThe Single-Use Revolution: Cost Savings & Efficiency Gains\n\nThe CY series reduces hospital costs by eliminating disinfection and maintenance. Its affordability enables outpatient cystoscopy, while single-use sterile packaging enhances diagnostic and treatment efficiency.\n\nOptimized Configuration, Enhanced Operational Experience\n\nWeighing less than 300g, the CY series features a standard adjustable angle knob and 210° up-and-down deflection. Combined with a high-definition processor, it allows for clear visualization of the bladder and diverticulum.\n\nPatient Comfort & Safety First\n\nThe streamlined, bullet-shaped tip ensures smooth urethral insertion with minimal resistance. Combined w",
        "images": [
            "assets/images/products/single-use-cystoscope-1.jpg",
            "assets/images/products/single-use-cystoscope-2.jpg",
            "assets/images/products/single-use-cystoscope-3.png",
            "assets/images/products/single-use-cystoscope-4.jpg"
        ]
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
        "description": "HugeMed Single-use Ureteral Access Sheath is a single-use device used together with a URS for RIRS. It establishes a flexible and stable pathway in the complex urinary anatomy to facilitate multiple instrument entries. Clinically, it broadens indications, improves single-session stone-free rate (SFR), shortens operative time, lowers intrarenal pressure and temperature, and enhances visualization and irrigation efficiency.\n\n\n\n\nSlimmer for Smoother Access\n\nSpecifications: the Single-use Ureteral Access Sheath is available in working lengths of 40/45/50/55 cm and diameters of 8.5/10.5, 9/11, 10/12, 11/13, and 12/14 Fr, yielding 20 flexible combinations that cover needs from ultra-slim access to general negative-pressure aspiration.\n\nFor traditional non-suction UAS, the recommended safety rule is RESD ≤ 0.75. Benefiting from active suction that improves outflow and intrarenal pressure control, the Single-use Ureteral Access Sheath allows usage up to RESD ≤ 0.85. In particular, the combinat"
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
        "image": "assets/images/products/video-laryngoscope-1.jpg",
        "description": "The Video Laryngoscope consists of an imaging part and an operational part. 3 types of imaging part meet the requirements of different application scenarios. The reusable flexible scopes provides patients with comfortable and cost-effective rhinolaryngoscopy  experience.\n\n\n\n\nFlexible for Superior Patient Comfort\n\nThe Video Laryngoscope flexible insertion tube offers a notably more comfortable experience for patients compared to rigid ones.\n\nReusable and Cost-Effective Design\n\nThe Video Laryngoscope features an IPX7 waterproof operational part, allowing the entire device to be disinfected by immersion after attaching the attachment of waterproof cap. Its reusable design helps reduce the use of medical consumables and lowers patient hospitalization costs.",
        "images": [
            "assets/images/products/video-laryngoscope-1.jpg",
            "assets/images/products/video-laryngoscope-2.jpg",
            "assets/images/products/video-laryngoscope-3.jpg"
        ]
    },
    {
        "id": 124,
        "name": "Reusable Ureterorenoscope",
        "brand": "HUGEMED",
        "category": "Endoscopy",
        "price": 25000,
        "image": "assets/images/products/reusable-ureterorenoscope-1.jpg",
        "description": "The Reusable Ureterorenoscope can be reused after immersion disinfection, offering a cost-effective alternative to single-use devices. Its flexible insertion tube and 285° bending angle ensure enhanced maneuverability with no blind spots, improving both patient comfort and procedural efficiency.\n\n\n\n\nStreamlined Bullet-Shaped Tip for Low Resistance and Comfort\n\nThe bullet-shaped tip features a low-resistance design, allowing smoother insertion into the urethra. Combined with a soft Pebax-wrapped insertion tube, it minimizes urethral trauma, ensuring a safer and more comfortable experience for patients.\n\n285° Bending Angle for Better Access & Precision\n\nWith a bidirectional bending angle of up to 285° and double bending capability, the reusable ureterorenoscope reaches complex renal anatomy, eliminating blind spots for more accurate diagnosis and treatment.\n\nSuperior Durability, Lower Maintenance Costs\n\n316L stainless steel bending section enhances with laser engraving and multi-point mi",
        "images": [
            "assets/images/products/reusable-ureterorenoscope-1.jpg",
            "assets/images/products/reusable-ureterorenoscope-2.png",
            "assets/images/products/reusable-ureterorenoscope-3.jpg",
            "assets/images/products/reusable-ureterorenoscope-4.jpg"
        ]
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
        "icon": "????"
    },
    {
        "title": "Clinics",
        "desc": "Reliable solutions for clinics and OPDs focusing on primary care.",
        "icon": "??????"
    },
    {
        "title": "Diagnostic Centers",
        "desc": "Advanced diagnostic equipment for accurate test results.",
        "icon": "????"
    },
    {
        "title": "Laboratories",
        "desc": "High-quality lab instruments for pathological and research facilities.",
        "icon": "????"
    }
];

const services = [
    {
        "title": "Equipment Supply",
        "desc": "Wide range of genuine medical equipment from top brands.",
        "icon": "????"
    },
    {
        "title": "Installation & Commissioning",
        "desc": "Professional installation and setup by certified engineers.",
        "icon": "????"
    },
    {
        "title": "Training & Demonstration",
        "desc": "Hands-on training for staff to ensure optimal equipment usage.",
        "icon": "???????????"
    },
    {
        "title": "Maintenance & Support",
        "desc": "Prompt technical support and routine maintenance services.",
        "icon": "??????"
    },
    {
        "title": "AMC / Service Contracts",
        "desc": "Annual maintenance contracts available for long-term peace of mind.",
        "icon": "????"
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
const categories = [];
const _catNames = [
    "Ventilator", "High Flow Oxygen Therapy Humidifier", "Anesthesia Machine", "Patient Monitoring", 
    "Defibrillator Monitor", "AED", "Surgical Light", "Operating Table", "Warmer", "Incubator", 
    "Hypothermia Treatment", "Jaundice Treatment", "Infusion System", "Endoscopy", "Ultrasound", 
    "In Vitro Diagnostic", "Neonatal Care"
];

_catNames.forEach(catName => {
    const prod = products.find(p => p.category === catName);
    categories.push({
        id: catName.toLowerCase().replace(/ /g, '-'),
        name: catName,
        img: prod && prod.image ? prod.image : "https://placehold.co/800x800/E8F3EC/075C3A?text=" + encodeURIComponent(catName)
    });
});
