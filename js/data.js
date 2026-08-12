// Contact Configuration
const WHATSAPP_NUMBER = "+919876543210"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919876543210";    // Replace with actual phone number

// Data Structures
const products = [
    {
        "id": 1,
        "name": "V8",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": [
            "The COMEN V8 is a highly advanced modular patient monitor designed for high-acuity environments like Intensive Care Units and Emergency Departments.",
            "It features a massive, high-definition touchscreen interface that allows clinicians to easily track 12-lead ECG, SpO2, NIBP, and advanced hemodynamic parameters in real-time.",
            "Built with a plug-and-play module rack, the V8 provides ultimate flexibility, allowing hospitals to customize the monitor exactly to their specific clinical needs without purchasing entirely new systems."
        ],
        "image": "assets/products/comen-v8.jpg",
        "price": 137000
    },
    {
        "id": 2,
        "name": "V3 / V3 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": [
            "The V3 and V3 Pro are versatile, compact patient monitors perfectly suited for general wards, outpatient clinics, and continuous transport monitoring.",
            "Equipped with a long-lasting internal battery and a rugged, drop-resistant casing, these monitors ensure continuous patient surveillance even while in transit.",
            "The Pro version adds specialized modules for End-tidal CO2 monitoring, making it an indispensable tool for post-operative care and procedural sedation."
        ],
        "image": "assets/products/comen-v3-v3-pro.jpg",
        "price": 155000
    },
    {
        "id": 3,
        "name": "NV10",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": [
            "The COMEN NV10 is a dedicated non-invasive ventilation (NIV) solution engineered to provide exceptional respiratory support without the need for intubation.",
            "It utilizes advanced leak-compensation algorithms and highly responsive triggers to ensure perfect patient-ventilator synchrony and maximize patient comfort.",
            "With its intuitive touchscreen interface and comprehensive monitoring capabilities, the NV10 allows respiratory therapists to quickly adjust therapy and respond to changing patient needs."
        ],
        "image": "assets/products/comen-nv10.jpg",
        "price": 66000
    },
    {
        "id": 4,
        "name": "AX900",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced AX900 from COMEN.",
        "image": "assets/products/comen-ax900.jpg",
        "price": 232000
    },
    {
        "id": 5,
        "name": "AX600",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced AX600 from COMEN.",
        "image": "assets/products/comen-ax600.jpg",
        "price": 131000
    },
    {
        "id": 6,
        "name": "A5 / A7",
        "brand": "COMEN",
        "category": "Anesthesia Machines",
        "description": "Advanced A5 / A7 from COMEN.",
        "image": "assets/products/comen-a5-a7.jpg",
        "price": 80000
    },
    {
        "id": 7,
        "name": "K1",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K1 from COMEN.",
        "image": "assets/products/comen-k1.jpg",
        "price": 37000
    },
    {
        "id": 8,
        "name": "K22 Pro",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K22 Pro from COMEN.",
        "image": "assets/products/comen-k22-pro.jpg",
        "price": 41000
    },
    {
        "id": 9,
        "name": "N Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced N Series from COMEN.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 88000
    },
    {
        "id": 10,
        "name": "Defibrillator Monitor",
        "brand": "COMEN",
        "category": "Defibrillator & AED",
        "description": "Advanced Defibrillator Monitor from COMEN.",
        "image": "assets/products/comen-defibrillator-monitor.jpg",
        "price": 187000
    },
    {
        "id": 11,
        "name": "AED",
        "brand": "COMEN",
        "category": "Defibrillator & AED",
        "description": "Advanced AED from COMEN.",
        "image": "assets/products/comen-aed.jpg",
        "price": 97000
    },
    {
        "id": 12,
        "name": "Ultrasound",
        "brand": "COMEN",
        "category": "Ultrasound & Imaging",
        "description": "Advanced Ultrasound from COMEN.",
        "image": "assets/products/comen-ultrasound.jpg",
        "price": 50000
    },
    {
        "id": 13,
        "name": "M300 / M500",
        "brand": "COMEN",
        "category": "Infusion Systems",
        "description": "Advanced M300 / M500 from COMEN.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 60000
    },
    {
        "id": 14,
        "name": "VL3H Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3H Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3h-video-laryngoscope.jpg",
        "price": 158000
    },
    {
        "id": 15,
        "name": "VL3D/VL4D Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3D/VL4D Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3d-vl4d-video-laryngoscope.jpg",
        "price": 128000
    },
    {
        "id": 16,
        "name": "VL3R/VL4R Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3R/VL4R Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3r-vl4r-video-laryngoscope.jpg",
        "price": 170000
    },
    {
        "id": 17,
        "name": "VL3S Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL3S Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl3s-video-laryngoscope.jpg",
        "price": 22000
    },
    {
        "id": 18,
        "name": "VL4DEX Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL4DEX Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl4dex-video-laryngoscope.jpg",
        "price": 156000
    },
    {
        "id": 19,
        "name": "VL4REX Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced VL4REX Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-vl4rex-video-laryngoscope.jpg",
        "price": 242000
    },
    {
        "id": 20,
        "name": "Single-use Bronchoscope",
        "brand": "HugeMed",
        "category": "Airway Management",
        "description": "Advanced Single-use Bronchoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-bronchoscope.jpg",
        "price": 116000
    },
    {
        "id": 21,
        "name": "Single-use Bronchoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Bronchoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-bronchoscope.jpg",
        "price": 42000
    },
    {
        "id": 22,
        "name": "Single-use Ureterorenoscope HU30M (6.3/3.6Fr)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureterorenoscope HU30M (6.3/3.6Fr) from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureterorenoscope-hu30m-6-3-3-6fr.jpg",
        "price": 50000
    },
    {
        "id": 23,
        "name": "Single-use Cystoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Cystoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-cystoscope.jpg",
        "price": 33000
    },
    {
        "id": 24,
        "name": "Single-use Choledochoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Choledochoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-choledochoscope.jpg",
        "price": 181000
    },
    {
        "id": 25,
        "name": "Single-use Rhinolaryngoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Rhinolaryngoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-rhinolaryngoscope.jpg",
        "price": 124000
    },
    {
        "id": 26,
        "name": "Single-use Biliary Pancreaticobliary Scope (CL-A, CL-B)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Biliary Pancreaticobliary Scope (CL-A, CL-B) from HugeMed.",
        "image": "assets/products/hugemed-single-use-biliary-pancreaticobliary-scope-cl-a-cl-b.jpg",
        "price": 30000
    },
    {
        "id": 27,
        "name": "Single-use Ureterorenoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureterorenoscope from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureterorenoscope.jpg",
        "price": 10000
    },
    {
        "id": 28,
        "name": "Single-use Ureteral Access Sheath",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Ureteral Access Sheath from HugeMed.",
        "image": "assets/products/hugemed-single-use-ureteral-access-sheath.jpg",
        "price": 209000
    },
    {
        "id": 29,
        "name": "Single-use Hysteroscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Hysteroscope from HugeMed.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 22000
    },
    {
        "id": 30,
        "name": "Single-use Duodenoscope",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Duodenoscope from HugeMed.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 143000
    },
    {
        "id": 31,
        "name": "Broncho Sampler",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Broncho Sampler from HugeMed.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 188000
    },
    {
        "id": 32,
        "name": "Single-use Collector (SA01)",
        "brand": "HugeMed",
        "category": "Single-use Endoscope",
        "description": "Advanced Single-use Collector (SA01) from HugeMed.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 176000
    },
    {
        "id": 33,
        "name": "Reusable Ureterorenoscope",
        "brand": "HugeMed",
        "category": "Reusable Endoscope",
        "description": "Advanced Reusable Ureterorenoscope from HugeMed.",
        "image": "assets/products/hugemed-reusable-ureterorenoscope.jpg",
        "price": 222000
    },
    {
        "id": 34,
        "name": "Video Laryngoscope",
        "brand": "HugeMed",
        "category": "Reusable Endoscope",
        "description": "Advanced Video Laryngoscope from HugeMed.",
        "image": "assets/products/hugemed-video-laryngoscope.jpg",
        "price": 139000
    },
    {
        "id": 35,
        "name": "MS-8",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced MS-8 from HugeMed.",
        "image": "assets/products/hugemed-ms-8.jpg",
        "price": 122000
    },
    {
        "id": 36,
        "name": "HUV-02",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced HUV-02 from HugeMed.",
        "image": "assets/products/hugemed-huv-02.jpg",
        "price": 220000
    },
    {
        "id": 37,
        "name": "VLM-02 & VLM-03",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced VLM-02 & VLM-03 from HugeMed.",
        "image": "assets/products/hugemed-vlm-02-vlm-03.jpg",
        "price": 209000
    },
    {
        "id": 38,
        "name": "HUV-01",
        "brand": "HugeMed",
        "category": "Medical Image Processor",
        "description": "Advanced HUV-01 from HugeMed.",
        "image": "assets/products/hugemed-huv-01.jpg",
        "price": 88000
    },
    {
        "id": 39,
        "name": "CM100",
        "brand": "COMEN",
        "category": "ECG",
        "price": 45000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM100+ECG",
        "description": "Portable design. The first one-channel ECG machine with automatic analysis and diagnostic function, compact and portable handle, convenient for house call, AC & DC power supply.",
        "features": [
            "Automatic ECG wave measuring & diagnostic report printout",
            "Complete digital design, digital filtering, auto-gain, automatically adjust baseline and switchleads",
            "Thermal printer, 50mm paper width",
            "Synchronically collect and enlarge 12 leads, can choose any lead to calculate rhythm",
            "Use unique high precision digital filter to eliminate baseline drifting, EMG and other interference, easier to analyze waveforms"
        ]
    },
    {
        "id": 40,
        "name": "CM300",
        "brand": "COMEN",
        "category": "ECG",
        "price": 65000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM300+ECG",
        "description": "Portable digital 3 channel ECG machine with 320X240 dot single color LCD screen.",
        "features": [
            "12-lead ECG simulataneous acquisition",
            "Anti-defibrillation",
            "Completely digital filter, resist baseline drift",
            "Automatic baseline adjustment",
            "Automatic ECG measurement and interpretation",
            "Large patient data storage",
            "Automatic system of a base line fluctuation compensation",
            "Pacementmaker detectable",
            "Support cleaning with disinfection solutions"
        ]
    },
    {
        "id": 41,
        "name": "CM600",
        "brand": "COMEN",
        "category": "ECG",
        "price": 125000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM600+ECG",
        "description": "Six-channel ECG with portable and lightweight handle design, perfect for house calls.",
        "features": [
            "Automatic measurement and interpretation",
            "Manual/Auto/Rhythm modes selectable",
            "Light and small, handle design, portable for house calls"
        ],
        "advancedSections": [
            {
                "title": "Record",
                "points": [
                    "110mm width folded or roll paper",
                    "Printing format 6 X 2, 6 X 2+1R, 3 X 4, 3 X 4+1R 3 X 4+3R to meet different needs"
                ]
            },
            {
                "title": "Thermal printer",
                "points": [
                    "Intellectualized paper calibration function solve paper jam and paper deflection problems"
                ]
            }
        ]
    },
    {
        "id": 42,
        "name": "CM1200B",
        "brand": "COMEN",
        "category": "ECG",
        "price": 185000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM1200B+ECG",
        "description": "Twelve-channel ECG with high performance and accurate measurement. Time constant≥5s, stand voltage≥±650mv, providing a strong guarantee for accurate measurement.",
        "features": [
            "5.7 inch TFT color screen",
            "Lead status indication",
            "Simple & clear keyboard layout, back light support",
            "Internal memory of 300 ECG records",
            "High accurate digital filter (EMG filter, AC filter, Drift filter, lowpass filter)",
            "122 kinds of diagnosis report",
            "120 seconds ECG waveforms review and print",
            "Support 210mm rolling, Z-folded paper",
            "USB port for external printer connection & data transmission",
            "PC-ECG management system",
            "Working mode: Auto, Manual, Rhythm"
        ]
    },
    {
        "id": 43,
        "name": "CM1200A",
        "brand": "COMEN",
        "category": "ECG",
        "price": 245000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM1200A+ECG",
        "description": "Twelve-channel ECG. Uses 12-lead ECG module and Comen's unique high precision digital filter to synchronically collect, enlarge and process 12 leads, eliminating external interference.",
        "features": [
            "8.4\" TFT touch screen, ECG operation via alphanumeric keyboard, function keyboard and touch screen buttons",
            "Intellectualized paper calibration function solve paper jam and paper deflection problems",
            "Convenient for house call"
        ],
        "advancedSections": [
            {
                "title": "Various Formats",
                "points": [
                    "Various Formats: 3×4, 3×4+1R, 3×4+3R, 6×2, 6×2+1R, 12×1, 12×1+T",
                    "1min record of rhythm and leads, average template, Minnesota code etc., diagnosis report & picture printout"
                ]
            }
        ]
    },
    {
        "id": 44,
        "name": "CM1200",
        "brand": "COMEN",
        "category": "ECG",
        "price": 325000,
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CM1200+ECG",
        "description": "High Performance in a compact device. Folding-up 12.1” color TFT screen provides multi-angle observation. Touch screen and hand-writing pen enable easier operation control and quicker information input.",
        "features": [
            "Multi-language interfaces selection",
            "Multi-size recording paper selectable",
            "Intellectualized recording calibration system can solve the ECG paper jam, paper deflection problems completely",
            "Advanced information-based solutions can realize paperless report and long-distance diagnose",
            "World first-class standard 12-channel ECG machine"
        ]
    }
];

const categories = [
    {
        "name": "Ventilator",
        "desc": "High quality Ventilator by COMEN.",
        "img": "assets/products/comen-v8.jpg"
    },
    {
        "name": "Anesthesia Machines",
        "desc": "High quality Anesthesia Machines by COMEN.",
        "img": "assets/products/comen-ax900.jpg"
    },
    {
        "name": "Patient Monitoring",
        "desc": "High quality Patient Monitoring by COMEN.",
        "img": "assets/products/comen-k1.jpg"
    },
    {
        "name": "Defibrillator & AED",
        "desc": "High quality Defibrillator & AED by COMEN.",
        "img": "assets/products/comen-defibrillator-monitor.jpg"
    },
    {
        "name": "Ultrasound & Imaging",
        "desc": "High quality Ultrasound & Imaging by COMEN.",
        "img": "assets/products/comen-ultrasound.jpg"
    },
    {
        "name": "Infusion Systems",
        "desc": "High quality Infusion Systems by COMEN.",
        "img": "assets/products/medical_hero_banner.png"
    },
    {
        "name": "Airway Management",
        "desc": "High quality Airway Management by HugeMed.",
        "img": "assets/products/hugemed-vl3h-video-laryngoscope.jpg"
    },
    {
        "name": "Single-use Endoscope",
        "desc": "High quality Single-use Endoscope by HugeMed.",
        "img": "assets/products/hugemed-single-use-bronchoscope.jpg"
    },
    {
        "name": "Reusable Endoscope",
        "desc": "High quality Reusable Endoscope by HugeMed.",
        "img": "assets/products/hugemed-reusable-ureterorenoscope.jpg"
    },
    {
        "name": "Medical Image Processor",
        "desc": "High quality Medical Image Processor by HugeMed.",
        "img": "assets/products/hugemed-ms-8.jpg"
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
    { title: "Hospitals", desc: "Equipment for all hospital environments including OT, ICU, and wards.", icon: "🏥" },
    { title: "Clinics", desc: "Reliable solutions for clinics and OPDs focusing on primary care.", icon: "⚕️" },
    { title: "Diagnostic Centers", desc: "Advanced diagnostic equipment for accurate test results.", icon: "🔬" },
    { title: "Laboratories", desc: "High-quality lab instruments for pathological and research facilities.", icon: "🧪" }
];

const services = [
    { title: "Equipment Supply", desc: "Wide range of genuine medical equipment from top brands.", icon: "📦" },
    { title: "Installation & Commissioning", desc: "Professional installation and setup by certified engineers.", icon: "🔧" },
    { title: "Training & Demonstration", desc: "Hands-on training for staff to ensure optimal equipment usage.", icon: "👨‍🏫" },
    { title: "Maintenance & Support", desc: "Prompt technical support and routine maintenance services.", icon: "⚙️" },
    { title: "AMC / Service Contracts", desc: "Annual maintenance contracts available for long-term peace of mind.", icon: "📄" }
];

const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Healthcare Clients" },
    { value: "1000+", label: "Installations" }
];

const testimonials = [
  {
    id: 1,
    quote: "Arkon Medical System has completely transformed our ICU setup. Their ventilators are top-tier and incredibly reliable.",
    name: "Dr. Rajesh Kumar",
    role: "Medical Superintendent",
    company: "City Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    quote: "The after-sales support is unmatched. When we needed urgent maintenance on our anesthesia machines, their team was there within hours.",
    name: "Sarah Fernandez",
    role: "Head of Procurement",
    company: "St. Mary's Clinic",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    quote: "We sourced all our new diagnostic equipment through them. The quality of the HugeMed endoscopes has been fantastic for our surgical wing.",
    name: "Dr. Arvind Patel",
    role: "Chief Surgeon",
    company: "Metro Health",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  }
];
