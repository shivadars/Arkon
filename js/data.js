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
        "name": "V2/V5",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced V2/V5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=V2%2FV5",
        "price": 44957
    },
    {
        "id": 3,
        "name": "V3/V3 Pro",
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
        "id": 4,
        "name": "V1/V1 Pro",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced V1/V1 Pro medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=V1%2FV1%20Pro",
        "price": 68006
    },
    {
        "id": 5,
        "name": "NV50/60/70",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced NV50/60/70 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NV50%2F60%2F70",
        "price": 149126
    },
    {
        "id": 6,
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
        "id": 7,
        "name": "VN Series",
        "brand": "COMEN",
        "category": "Ventilator",
        "description": "Advanced N Series from COMEN.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 88000
    },
    {
        "id": 8,
        "name": "NV8",
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
        "id": 9,
        "name": "NF5",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Advanced NF5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NF5",
        "price": 92161
    },
    {
        "id": 10,
        "name": "HT30",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Advanced HT30 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=HT30",
        "price": 157577
    },
    {
        "id": 11,
        "name": "HT50",
        "brand": "COMEN",
        "category": "High Flow Oxygen Therapy Humidifier",
        "description": "Advanced HT50 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=HT50",
        "price": 47694
    },
    {
        "id": 12,
        "name": "X8",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced X8 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=X8",
        "price": 40676
    },
    {
        "id": 13,
        "name": "AX900",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced AX900 from COMEN.",
        "image": "assets/products/comen-ax900.jpg",
        "price": 232000
    },
    {
        "id": 14,
        "name": "AX-800/AX-700",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced AX-800/AX-700 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=AX-800%2FAX-700",
        "price": 85336
    },
    {
        "id": 15,
        "name": "AX600",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced AX600 from COMEN.",
        "image": "assets/products/comen-ax600.jpg",
        "price": 131000
    },
    {
        "id": 16,
        "name": "AX400/AX500",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced AX400/AX500 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=AX400%2FAX500",
        "price": 99344
    },
    {
        "id": 17,
        "name": "A5/A7",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced A5 / A7 from COMEN.",
        "image": "assets/products/comen-a5-a7.jpg",
        "price": 80000
    },
    {
        "id": 18,
        "name": "AGSS-H/AGSS-L",
        "brand": "COMEN",
        "category": "Anesthesia Machine",
        "description": "Advanced AGSS-H/AGSS-L medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=AGSS-H%2FAGSS-L",
        "price": 76517
    },
    {
        "id": 19,
        "name": "MR-M80T/MR-M60T",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced MR-M80T/MR-M60T medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=MR-M80T%2FMR-M60T",
        "price": 175251
    },
    {
        "id": 20,
        "name": "K Pro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K Pro Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=K%20Pro%20Series",
        "price": 152096
    },
    {
        "id": 21,
        "name": "K22 Pro",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K22 Pro from COMEN.",
        "image": "assets/products/comen-k22-pro.jpg",
        "price": 41000
    },
    {
        "id": 22,
        "name": "K1",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced K1 from COMEN.",
        "image": "assets/products/comen-k1.jpg",
        "price": 37000
    },
    {
        "id": 23,
        "name": "NMPro Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced NMPro Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NMPro%20Series",
        "price": 148492
    },
    {
        "id": 24,
        "name": "N Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced N Series from COMEN.",
        "image": "assets/products/medical_hero_banner.png",
        "price": 88000
    },
    {
        "id": 25,
        "name": "ND Series",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced ND Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=ND%20Series",
        "price": 130276
    },
    {
        "id": 26,
        "name": "eCenter-CMS",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced eCenter-CMS medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=eCenter-CMS",
        "price": 92380
    },
    {
        "id": 27,
        "name": "NC6 &amp; NC7",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced NC6 &amp; NC7 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NC6%20%26amp%3B%20NC7",
        "price": 101126
    },
    {
        "id": 28,
        "name": "NC5",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced NC5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NC5",
        "price": 87628
    },
    {
        "id": 29,
        "name": "NC3",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced NC3 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=NC3",
        "price": 54392
    },
    {
        "id": 30,
        "name": "CF5&amp;CF8",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced CF5&amp;CF8 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CF5%26amp%3BCF8",
        "price": 129445
    },
    {
        "id": 31,
        "name": "H300 &amp; H301",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced H300 &amp; H301 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=H300%20%26amp%3B%20H301",
        "price": 129692
    },
    {
        "id": 32,
        "name": "H1200",
        "brand": "COMEN",
        "category": "Patient Monitoring",
        "description": "Advanced H1200 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=H1200",
        "price": 183452
    },
    {
        "id": 33,
        "name": "S80",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Advanced S80 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=S80",
        "price": 55890
    },
    {
        "id": 34,
        "name": "S50",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Advanced S50 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=S50",
        "price": 190763
    },
    {
        "id": 35,
        "name": "S8",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Advanced S8 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=S8",
        "price": 124264
    },
    {
        "id": 36,
        "name": "S5",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Advanced S5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=S5",
        "price": 103928
    },
    {
        "id": 37,
        "name": "S1",
        "brand": "COMEN",
        "category": "Defibrillator Monitor",
        "description": "Advanced S1 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=S1",
        "price": 66900
    },
    {
        "id": 38,
        "name": "F3/F5",
        "brand": "COMEN",
        "category": "AED",
        "description": "Advanced F3/F5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=F3%2FF5",
        "price": 103017
    },
    {
        "id": 39,
        "name": "G Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Advanced G Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=G%20Series",
        "price": 56179
    },
    {
        "id": 40,
        "name": "F Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Advanced F Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=F%20Series",
        "price": 93366
    },
    {
        "id": 41,
        "name": "ES-Series",
        "brand": "COMEN",
        "category": "AED",
        "description": "Advanced ES-Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=ES-Series",
        "price": 57961
    },
    {
        "id": 42,
        "name": "L9",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "Advanced L9 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=L9",
        "price": 42373
    },
    {
        "id": 43,
        "name": "L5",
        "brand": "COMEN",
        "category": "Surgical Light",
        "description": "Advanced L5 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=L5",
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
        "description": "Advanced WE1/WE2 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=WE1%2FWE2",
        "price": 92255
    },
    {
        "id": 46,
        "name": "WH1/WH2",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "Advanced WH1/WH2 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=WH1%2FWH2",
        "price": 116372
    },
    {
        "id": 47,
        "name": "W5/W3",
        "brand": "COMEN",
        "category": "Operating Table",
        "description": "Advanced W5/W3 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=W5%2FW3",
        "price": 195783
    },
    {
        "id": 48,
        "name": "BQ80",
        "brand": "COMEN",
        "category": "Warmer",
        "description": "Advanced BQ80 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=BQ80",
        "price": 54599
    },
    {
        "id": 49,
        "name": "B10",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Advanced B10 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=B10",
        "price": 46808
    },
    {
        "id": 50,
        "name": "B3",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Advanced B3 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=B3",
        "price": 125293
    },
    {
        "id": 51,
        "name": "B6/B8",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Advanced B6/B8 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=B6%2FB8",
        "price": 106398
    },
    {
        "id": 52,
        "name": "BT800",
        "brand": "COMEN",
        "category": "Incubator",
        "description": "Advanced BT800 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=BT800",
        "price": 61556
    },
    {
        "id": 53,
        "name": "P3/P6",
        "brand": "COMEN",
        "category": "Hypothermia Treatment",
        "description": "Advanced P3/P6 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=P3%2FP6",
        "price": 170304
    },
    {
        "id": 54,
        "name": "BL20",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Advanced BL20 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=BL20",
        "price": 193908
    },
    {
        "id": 55,
        "name": "BL60",
        "brand": "COMEN",
        "category": "Jaundice Treatment",
        "description": "Advanced BL60 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=BL60",
        "price": 75899
    },
    {
        "id": 56,
        "name": "MX8900/M800/ME900",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "Advanced MX8900/M800/ME900 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=MX8900%2FM800%2FME900",
        "price": 64561
    },
    {
        "id": 57,
        "name": "ME660/M260",
        "brand": "COMEN",
        "category": "Infusion System",
        "description": "Advanced ME660/M260 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=ME660%2FM260",
        "price": 146854
    },
    {
        "id": 58,
        "name": "EIS-2000",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "Advanced EIS-2000 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=EIS-2000",
        "price": 57969
    },
    {
        "id": 59,
        "name": "CVL Series",
        "brand": "COMEN",
        "category": "Endoscopy",
        "description": "Advanced CVL Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CVL%20Series",
        "price": 132039
    },
    {
        "id": 60,
        "name": "EP50",
        "brand": "COMEN",
        "category": "Ultrasound",
        "description": "Advanced EP50 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=EP50",
        "price": 167989
    },
    {
        "id": 61,
        "name": "CF9600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CF9600 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CF9600",
        "price": 197949
    },
    {
        "id": 62,
        "name": "CH8600",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8600 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8600",
        "price": 147414
    },
    {
        "id": 63,
        "name": "CH8600CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8600CRP medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8600CRP",
        "price": 186460
    },
    {
        "id": 64,
        "name": "CH8500",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8500 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8500",
        "price": 176154
    },
    {
        "id": 65,
        "name": "CH8500-V Series",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8500-V Series medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8500-V%20Series",
        "price": 144551
    },
    {
        "id": 66,
        "name": "CH8500CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8500CRP medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8500CRP",
        "price": 140707
    },
    {
        "id": 67,
        "name": "CH8300",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8300 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8300",
        "price": 179542
    },
    {
        "id": 68,
        "name": "CH8300CRP",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8300CRP medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8300CRP",
        "price": 32408
    },
    {
        "id": 69,
        "name": "CH8310",
        "brand": "COMEN",
        "category": "In Vitro Diagnostic",
        "description": "Advanced CH8310 medical equipment from COMEN, designed for modern clinical applications.",
        "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=CH8310",
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
    { "id": 110, "name": "Single-use Rhinolaryngoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 5000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Rhinolaryngoscope", "description": "Single-use Rhinolaryngoscope." },
    { "id": 111, "name": "Single-use Choledochoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 6000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Choledochoscope", "description": "Single-use Choledochoscope." },
    { "id": 112, "name": "Single-use Duodenoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 6500, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Duodenoscope", "description": "Single-use Duodenoscope." },
    { "id": 113, "name": "Single-use Bronchoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 5500, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Bronchoscope", "description": "Single-use Bronchoscope." },
    { "id": 114, "name": "Single-use Collector", "brand": "HUGEMED", "category": "Endoscopy", "price": 1000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Collector", "description": "Single-use Collector." },
    { "id": 115, "name": "Broncho Sampler", "brand": "HUGEMED", "category": "Endoscopy", "price": 1200, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Broncho+Sampler", "description": "Broncho Sampler." },
    { "id": 116, "name": "Single-use Ureterorenoscope HU30M", "brand": "HUGEMED", "category": "Endoscopy", "price": 7000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=HU30M", "description": "Single-use Ureterorenoscope HU30M (6.3/3.6Fr)." },
    { "id": 117, "name": "Single-use Ureterorenoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 6800, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Ureterorenoscope", "description": "Single-use Ureterorenoscope." },
    { "id": 118, "name": "Single-use Cystoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 6000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Cystoscope", "description": "Single-use Cystoscope." },
    { "id": 119, "name": "Single-Use Cysto-Nephroscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 7200, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Cysto-Nephroscope", "description": "Single-Use Cysto-Nephroscope." },
    { "id": 120, "name": "Single-use Ureteral Access Sheath", "brand": "HUGEMED", "category": "Endoscopy", "price": 800, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Access+Sheath", "description": "Single-use Ureteral Access Sheath." },
    { "id": 121, "name": "Single-use Stent Removal Cystoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 6500, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Stent+Removal", "description": "Single-use Stent Removal Cystoscope." },
    { "id": 122, "name": "Suction Pump", "brand": "HUGEMED", "category": "Endoscopy", "price": 2500, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Suction+Pump", "description": "Suction Pump." },
    { "id": 123, "name": "Video Laryngoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 15000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Video+Laryngoscope", "description": "Reusable Video Laryngoscope." },
    { "id": 124, "name": "Reusable Ureterorenoscope", "brand": "HUGEMED", "category": "Endoscopy", "price": 25000, "image": "https://placehold.co/800x800/E8F3EC/075C3A?text=Reusable+Ureterorenoscope", "description": "Reusable Ureterorenoscope." }
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
