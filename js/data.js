// Contact Configuration
const WHATSAPP_NUMBER = "+919876543210"; // Replace with actual WhatsApp number
const PHONE_NUMBER = "+919876543210";    // Replace with actual phone number

// Data Structures
const products = [
        {
            id: 1,
            name: "V6/V8",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "v6-v8-ventilator",
            
            image: "https://alioss.comen.com/cms-v2/229_75e9ba2348.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/229_75e9ba2348.png",
                "https://alioss.comen.com/cms-v2/1_1_a753392834.png",
                "https://alioss.comen.com/cms-v2/2_1_1_b3a74827db.png",
                "https://alioss.comen.com/cms-v2/3_1_1_a1dbaadbbb.png",
                "https://alioss.comen.com/cms-v2/178_99c08a23ff.png"
            ],
            
            short_description: "A high-end life-support medical device designed to assist or replace spontaneous breathing in critically ill patients.",
            key_highlights: [
                "18.5-inch Ultra Large Screen",
                "Large Angle Rotation (up to 270° horizontal)",
                "Detachable Screen Design",
                "Double Driven System (Pneumatic + Electronic)",
                "Intelligent iV-Cycle Technology"
            ],
            
            overview_text: "The V6/V8 series ICU patient ventilator is a life-support medical device designed to assist or replace spontaneous breathing in critically ill patients. This ventilator delivers precise oxygen and airflow control to ensure safe, stable, and effective respiratory therapy in intensive care environments. Comen V8 ventilators and K/NMPro series monitors integrate to provide clinicians with a single view of patient data, enabling them to access information more conveniently.",
            
            features: [
                { title: "Expansive Visual", text: "Features an expansive 18.5-inch high-definition touchscreen, designed to enhance visibility and clinical workflow. The screen supports horizontal rotation up to 270° and vertical adjustment up to 45°, with a detachable design enabling flexible positioning for both bedside and remote operation." },
                { title: "Double Driven System", text: "Pneumatic Driven + Electronic Driven Powerful Gas Delivery System. While the central gas supply ensures consistent ventilation support, the backup turbine-driven air source guarantees uninterrupted operation even in the presence of central gas supply issues." },
                { title: "All Conditions, All Stages", text: "Provides comprehensive invasive ventilation modes, extensive non-invasive ventilation modes, and HFNC mode. Includes both neonatal invasive and non-invasive ventilation (incorporating Comen's exclusive NIPPV and SNIPPV modes)." },
                { title: "Pulmonary Protective Strategy", text: "Provides many tools for lung protective ventilation to minimize ventilator-induced lung injury (VILI) in ARDS patients. Includes Sigh Function, SI Function, static P-V loop, C20/C Monitoring, and Stress Index Monitoring." },
                { title: "Dual Channel Auxiliary Pressure", text: "Precisely monitors transpulmonary pressure by detecting both esophageal and intrapulmonary pressure. Excels in computing transdiaphragmatic pressure—an essential metric for evaluating respiratory muscle strength." },
                { title: "Advanced Weaning Tools", text: "Includes comprehensive weaning tools such as P0.1 (Airway occlusion pressure), NIF (Negative Inspiratory Force), RSBI (Rapid Shallow Breathing Index), and SBT (Spontaneous Breathing Trial)." }
            ],
            
            specifications: {
                "Display": "18.5-inch high-definition touchscreen (detachable)",
                "Gas Delivery System": "Double Driven (Pneumatic + Electronic Turbine Backup)",
                "Ventilation Modes": "Invasive, Non-Invasive, HFNC, Neonatal (NIPPV, SNIPPV)",
                "Lung Protective Tools": "Sigh, SI, Static P-V loop, C20/C, Stress Index",
                "Advanced Calculations": "Energy Metabolism, Functional Residual Capacity, Alveolar Ventilation"
            }
        },
        {
            id: 2,
            name: "V2/V5",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "v2-v5",
            
            image: "https://alioss.comen.com/cms-v2/4_1d606e261b.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/4_1d606e261b.png",
                "https://alioss.comen.com/cms-v2/V2_V5_8_d59268ddf0.png",
                "https://alioss.comen.com/cms-v2/5_750b6e970f.png",
                "https://alioss.comen.com/cms-v2/207_9c721d6dc8.png",
                "https://alioss.comen.com/cms-v2/208_444986d560.png"
            ],
            
            short_description: "A modern ICU ventilator equipped with a powerful turbine-driven system and intuitive 15.6-inch touchscreen.",
            key_highlights: [
                "Turbine-driven System (No central air compressor required)",
                "15.6-inch TFT intuitive touchscreen",
                "18 available ventilation modes",
                "Intelligent iV-Cycle synchronization technology"
            ],
            
            overview_text: "To cope with present and potential clinical challenges, V5 is equipped with a turbine-driven system. Advanced ventilation modes and comprehensively monitored parameters allow medical providers to step closer to the complete clinical picture of patients. A 15.6-inch TFT touchscreen with an intuitive UI system facilitates a smooth workflow: V5, a solution for modern respiratory support.",
            
            features: [
                { title: "Turbine-driven Flexibility", text: "Rather than connecting an air compressor or a central air supply system, the turbine unleashes true mobility and flexibility. Upgraded control algorithms ensure strong power, ultra-sensitive response, and low noise operation." },
                { title: "Sequential Treatments", text: "With 18 ventilation modes available, V5 provides full patient support throughout their treatment journey, from admission to discharge (intubation to weaning, invasive to non-invasive, and high-flow oxygen therapy)." },
                { title: "All-round Monitoring & Diagnosing", text: "Equipped with advanced Weaning Tools (SBT, P0.1, NIF, RSBI) to prevent reintubation, and Lung Protective Tools (Stress Index, C20/C, Transpulmonary Pressure, SI) to reduce ventilation-associated lung injuries (VALI)." },
                { title: "Accurate Oxygenation Assessment", text: "Collects data from high-flow oxygen therapy patients for accurately assessing ARDS prognosis. The oxygenation index assists in predicting respiratory diseases without arterial blood gas analysis." },
                { title: "Intelligent Interconnection", text: "Connects seamlessly with syringe pumps, monitors, and intensive care information systems, forming a complete critical care network solution that elevates hospital management." }
            ],
            
            specifications: {
                "Display": "15.6-inch TFT touchscreen",
                "Drive System": "High-performance Turbine-driven",
                "Max Flow Rate": "≥ 210 L/min",
                "Turbine Noise": "≤ 45dB",
                "Turbine Lifespan": "≥ 20,000 hrs",
                "Calculations": "Energy Metabolism, Alveolar Dead Space, Alveolar Tidal Volume"
            }
        },
        {
            id: 3,
            name: "V3/V3 Pro",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "v3-v3-pro",
            
            image: "https://alioss.comen.com/cms-v2/233_d59172c677.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/233_d59172c677.png",
                "https://alioss.comen.com/cms-v2/234_8c54e0ba6a.png",
                "https://alioss.comen.com/cms-v2/235_94496f96a9.png",
                "https://alioss.comen.com/cms-v2/236_c82929e1f9.png",
                "https://alioss.comen.com/cms-v2/237_848dc5d61e.png"
            ],
            
            short_description: "A powerful yet portable ICU ventilator featuring turbine-driven technology, a hidden carry handle, and extended battery life.",
            key_highlights: [
                "Super Lightweight (10kg) with hidden carry handle",
                "Extended Battery Life (up to 6.6 hours)",
                "Integrated High-Performance Turbine",
                "18 Ventilation Modes with Intelligent iV-Cycle",
                "Modular Turbo Cartridge (20,000 hours runtime)"
            ],
            
            overview_text: "The V3 Pro is a powerful yet portable ICU ventilator, featuring turbine-driven technology, a hidden carry handle, and extended battery life for true mobility. It supports a full range of patients from neonates to adults, offers advanced ventilation modes, and comes equipped with comprehensive clinical support tools.",
            
            features: [
                { title: "Transcends Clinical Boundaries", text: "Engineered for dynamic healthcare environments with an ultra-lightweight design (10kg), endurance-optimized power system (6.6h battery), and hidden handle. Seamlessly serves ER interventions, ICU treatments, and intra-hospital transfers." },
                { title: "Impressive Ventilation Performance", text: "With 18 ventilation modes and high flow oxygen therapy, V3 Pro provides full patient support throughout their treatment journey, from intubation to weaning. Intelligent iV-Cycle technology improves human-machine synchronization in both inspiration and expiration." },
                { title: "Lung Protection Strategy", text: "Provides comprehensive assessment of ventilator-related factors impacting lung injury. Monitors Mechanical Power and Driving Pressure (ΔP) to guide individualized strategies, utilizing Low Tidal Volume Ventilation and Personalized PEEP Titration." },
                { title: "Data-Powered Weaning", text: "Provides reliable weaning tools including RSBI (Rapid Shallow Breathing Index), SBT (Spontaneous Breathing Trial), NIF, and P0.1 to assess a patient's ability to breathe independently." },
                { title: "Hassle-Free Maintenance", text: "Features a modular turbo cartridge that runs for 20,000 hours with one-click removal. Dual valves for inhalation and exhalation are fully autoclavable, killing hidden biofilms, and can be swapped in just 5 seconds." }
            ],
            
            specifications: {
                "Weight": "10 kg (Super Lightweight)",
                "Battery Life": "Up to 6.6 hours of continuous ventilation",
                "Drive System": "Internal Turbine Charged (No air supply needed)",
                "Turbine Lifespan": "20,000 hours (Modular cartridge)",
                "Ventilation Modes": "18 modes (Invasive, Non-invasive, HFNC)",
                "Maintenance": "Autoclavable dual valves, 5-second swap"
            }
        },
        {
            id: 4,
            name: "V1/V1 Pro",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "v1-v1-pro",
            
            image: "https://alioss.comen.com/cms-v2/AI_psd_1_03444929d1.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/AI_psd_1_03444929d1.png",
                "https://alioss.comen.com/cms-v2/404_d72eccda34.png",
                "https://alioss.comen.com/cms-v2/405_9b847cafc0.png",
                "https://alioss.comen.com/cms-v2/407_3881469fa3.png",
                "https://alioss.comen.com/cms-v2/406_82c1d25191.png"
            ],
            
            short_description: "An upgraded turbine-driven emergency and transport ventilator designed for extreme environments.",
            key_highlights: [
                "Extreme Temperature Resilience (-15°C to 50°C)",
                "10+ Hours Dual-Battery Power",
                "6.5kg Ultra-light Ergonomic Design",
                "IP34 Waterproof and Dustproof Rating",
                "Approved for air, land, and sea operations"
            ],
            
            overview_text: "V1 Pro is our newly upgraded turbine-driven emergency and transport ventilator. Engineered for reliability in the most challenging environments, V1 Pro ensures stable ventilation during patient transport, even under extreme conditions. With advanced features and intelligent control, it delivers ICU-level ventilation performance on the move—bringing critical care standards wherever it’s needed most.",
            
            features: [
                { title: "Built to Brave Every Environment", text: "Engineered for extreme conditions. Operates in temperatures from -15°C to 50°C, and at altitudes up to 7,670 meters. IP34 dustproof/waterproof rating, 0.75m drop-tested, and 20G crash-resistant." },
                { title: "Uninterrupted Power & Performance", text: "Features 10+ hours dual-battery power (equivalent to a 6-time-zone flight). The internal turbine eliminates the need for air cylinders and maintains 21% FiO₂ ventilation even during oxygen depletion." },
                { title: "Break Boundaries, Seamless Care", text: "Replaces multiple specialized devices for wilderness rescue, ambulance care, intra-hospital transport, and ICU support. At just 6.5kg, it offers single-handed operation." },
                { title: "Tough Outside, Precise Inside", text: "Harnesses ICU-grade precision with dynamic AMV modulation and CPR-synced response algorithms. Includes neonatal invasive and non-invasive ventilation modes for all age groups." },
                { title: "Scientific Weaning & Synchronization", text: "Uses data-driven weaning assessment tools (RSBI, P0.1, NIF, SBT). Intelligent iV-Cycle technology improves man-machine synchronization in both inspiration and expiration." }
            ],
            
            specifications: {
                "Weight": "6.5 kg (Ergonomic design)",
                "Battery Life": "10+ Hours Dual-Battery Power",
                "Environmental Resilience": "-15°C to 50°C, Altitudes up to 7,670m",
                "Durability Ratings": "IP34, 0.75m drop-tested, 20G crash-resistant",
                "Certifications": "ISO 10651-3, ISO 80601-2-84, EN1789, RTCA/DO-160G",
                "Patient Types": "Neonates, Pediatric, and Adults"
            }
        },
        {
            id: 5,
            name: "NV50/60/70",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "nv50-60-70",
            
            image: "https://alioss.comen.com/cms-v2/231_dc439244a3.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/231_dc439244a3.png",
                "https://alioss.comen.com/cms-v2/215_a1fae07d7d.png",
                "https://alioss.comen.com/cms-v2/216_1b83be35b2.png",
                "https://alioss.comen.com/cms-v2/pic3_112be4437a.png",
                "https://alioss.comen.com/cms-v2/12_4_46f5eb7311.png"
            ],
            
            short_description: "An advanced non-invasive ventilator featuring an 18-inch touchscreen and a powerful turbine for effective mask leakage compensation.",
            key_highlights: [
                "Focus on Non-Invasive Respiratory Support",
                "18-inch rotating touchscreen display",
                "Exceptionally powerful built-in turbine for leakage compensation",
                "iV-Cycle synchronization technology for comfortable breathing"
            ],
            
            overview_text: "Focus on Non-Invasive Respiratory Support. An 18-inch touchscreen with rotating display for easier operation and observation. Upgraded synchronization technology enables patients to have a comfortable breathing experience. An exceptionally powerful turbine ensures effective compensation for any leakage resulting from incomplete facial non-invasive mask sealing.",
            
            features: [
                { title: "Pressure is Guaranteed", text: "With optimized algorithms, the built-in turbine offers compensation to mask air leakage during non-invasive ventilation, thereby establishing the most significant power core in the industry." },
                { title: "Breathing as Casual", text: "iV-Cycle synchronization technology adjusts trigger values based on monitored data to mimic patients' breathing patterns during non-invasive ventilation, reducing discomfort and treatment failure." },
                { title: "Advanced Comfort Technologies", text: "Features 'Rising Time' for comfortable inhalation flow rates, 'C-Free Pressure Reduction' in CPAP mode to reduce positive pressure during exhalation, and 'Ramp' to gradually increase pressure for patient adaptation." },
                { title: "NIV for All Age Groups", text: "Provides non-invasive ventilation modes for adults and children, as well as special modes designed exclusively for newborns that are recommended by healthcare providers." },
                { title: "Advanced NIV Modes", text: "Includes Proportional Pressure Support (PPS) for weaning, Volume Guaranteed Pressure Support (VAPS), and Nasal Intermittent Positive Pressure Ventilation (NIPPV) exclusive for newborns." }
            ],
            
            specifications: {
                "Display": "18-inch rotating touchscreen display",
                "High Flow Therapy": "Wider flow range from 2 to 80 L/min",
                "Key Modes": "PPS, VAPS, NIPPV, CPAP",
                "Oxygenation Indicators": "SpO2, EtCO2, ROX, OSI, RSS, S/F",
                "Target Patients": "Neonates, Pediatric, and Adults"
            }
        },
        {
            id: 6,
            name: "NV10",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "nv10",
            
            image: "https://alioss.comen.com/cms-v2/NV_10_af4a415e8e.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/NV_10_af4a415e8e.png",
                "https://alioss.comen.com/cms-v2/sect1_item1_b5632f983c.png",
                "https://alioss.comen.com/cms-v2/sect1_item2_de4596c176.png",
                "https://alioss.comen.com/cms-v2/sect1_item3_e264134c71.png",
                "https://alioss.comen.com/cms-v2/sect1_item4_0d8ea89b85.png"
            ],
            
            short_description: "A specialized neonatal ventilator providing precise respiratory support, noninvasive high-frequency oscillation, and lung-protective strategies.",
            key_highlights: [
                "Specialized Non-Invasive Ventilation (NIV) for Neonates",
                "Noninvasive High-Frequency Oscillation Therapy",
                "Up to 100% Leakage Compensation",
                "Dual Sensor Synchronization (Abdominal & Pressure)",
                "VentGuide Assisted Strategy Adjustments"
            ],
            
            overview_text: "The NV10 neonatal ventilator is a critical medical device designed to provide respiratory support for newborns and young infants who cannot breathe adequately on their own. It delivers precise airflow and pressure to maintain stable oxygenation. This infant ventilator provides stable, lung-protective ventilation strategies.",
            
            features: [
                { title: "Increase NIV Confidence", text: "Includes a complete NIV set with specialized ventilation tools for neonates, including HFNC + ROX, nCPAP + Apnea Auto-relief, DuoVent, SNIPPV, NIPPV, and Single-limb NHFO." },
                { title: "Oscillation Therapy Revolution", text: "Noninvasive high-frequency oscillation enhances carbon dioxide elimination and treats PPHN effectively. The unique diaphragm oscillation design offers friction cancellation, linear amplitude, and patented noise reduction." },
                { title: "Minimization of Work of Breath", text: "A single-limb setup effectively reduces dead space compared to a dual-limb configuration with a Y-piece, thereby drastically decreasing the work of breathing for infants." },
                { title: "Sensitively Respond to Every Breath", text: "Utilizes 2 Sync Modes with a unique algorithm. An abdominal sensor for quick response and a pressure sensor to minimize false activations due to newborn restlessness, ensuring reduced patient discomfort." },
                { title: "Targeted Pressure & Leakage Compensation", text: "Equipped with a leakage compensation system that provides up to 100% pressure compensation, ensuring that patients receive the precise set pressure even in the event of mask leakage." },
                { title: "Data-Driven Clinical Decisions", text: "VentGuide provides early warnings for ventilation failure. The customizable dashboard monitors real-time parameters, while indicators like ROX assist in HFNC for early prediction of respiratory failure." }
            ],
            
            specifications: {
                "Target Patients": "Neonates and young infants",
                "Oscillator Type": "Diaphragm Oscillation (Quiet & powerful)",
                "Circuit Type": "Single-limb setup (Reduced dead space)",
                "Sensors": "Non-invasive Abdominal and Pressure sensors",
                "Leakage Compensation": "Up to 100% pressure compensatory",
                "Diagnostic Indicators": "VentGuide, ROX (Hypoxic severity index)"
            }
        },
        {
            id: 7,
            name: "VN Series",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "vn-series",
            
            image: "assets/images/products/vn-series-1.png",
            gallery: [
                "assets/images/products/vn-series-1.png",
                "assets/images/products/vn-series-2.png",
                "assets/images/products/vn-series-3.png",
                "assets/images/products/vn-series-4.png"
            ],
            
            short_description: "A comprehensive neonatal and pediatric ventilator delivering full-cycle precision ventilation protection for patients from 200g.",
            key_highlights: [
                "Designed for premature infants ≥ 200g",
                "17 Ventilation Modes covering the full spectrum",
                "5 Exclusive Patents for neonatal protection",
                "Revolutionary HFOV-VG Volume Guarantee",
                "IntelliCuff Intelligent Cuff Management"
            ],
            
            overview_text: "Designed for neonates, premature infants, and pediatric patients with birth weight ≥200 g. Delivering full-cycle precision ventilation protection - from lung recruitment preparation through ventilator weaning assessment. The VN8HFO is a comprehensive neonatal ventilator engineered for critical care environments.",
            
            features: [
                { title: "5 Exclusive Patents — Full Protection", text: "Builds a complete safety and precision framework with synergistic patents covering oscillation mechanics, trigger synchronization, and airway cuff management. Each patent targets a distinct clinical challenge in neonatal ventilation." },
                { title: "Revolutionary HFOV-VG Technology", text: "Industry-leading volume guarantee high frequency ventilation technology provides a ventilation safety net for fragile lungs with tidal volumes as low as 0.1mL." },
                { title: "Patented Voice Coil Diaphragm", text: "Diaphragm oscillation system with rolling motion realizes higher frequency, smoother, and quieter oscillation output, suitable for low lung compliance." },
                { title: "IntelliCuff & TRC Management", text: "IntelliCuff continuously monitors ETT cuff pressure to reduce airway injury. TRC (Tube Resistance Compensation) automatically compensates for resistance, reducing the infant's work of breathing." },
                { title: "Four-fold Synchronous Trigger", text: "Provides four trigger modes (flow, volume, pressure, and abdomen) to accurately match the infant's spontaneous breathing and drastically reduce patient-ventilator asynchrony." },
                { title: "Full-Cycle Clinical Evaluation", text: "Features comprehensive weaning tools, Spontaneous Breathing Trial (SBT), and Functional Residual Capacity (FRC) measurement to assess pulmonary function recovery and guide PEEP optimization." }
            ],
            
            specifications: {
                "Target Patients": "Neonates, premature infants, and pediatric (≥200 g)",
                "Ventilation Modes": "17 modes including HFO, PC-HFO, and HFNC",
                "Tidal Volume Minimum": "As low as 0.1 mL",
                "Trigger Modes": "Flow, Volume, Pressure, and Abdominal",
                "Oscillation Type": "Patented Voice Coil Diaphragm",
                "Advanced Safety": "Automatic Leakage Compensation (up to 45 L/min)"
            }
        },
        {
            id: 8,
            name: "NV8",
            brand: "COMEN",
            category: "Ventilator",
            custom_url: "nv8",
            
            image: "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
            ],
            
            short_description: "A high-end neonatal non-invasive ventilator designed to reduce intubation rates with industry-leading PIP performance.",
            key_highlights: [
                "All-in-one non-invasive ventilation solution",
                "Industry-leading PIP (Peak Inspiratory Pressure) up to 20cmH2O",
                "Provides NIPPV & SNIPPV for newborns",
                "Abdominal respiratory sensor with apnea wake-up function",
                "Online intelligent oxygen calibration without interrupting ventilation"
            ],
            
            overview_text: "In order to reduce the damage caused by invasive ventilation to newborns/infants, Comen works hand in hand with clinical experts and launches NV8, a high-end non-invasive ventilator that fits well with clinical practice. NV8 provides an all-in-one non-invasive ventilation solution with PIP (Peak Inspiratory Pressure) as high as 20cmH2O. The comprehensive ventilation modes and pressure performance help ensure that newborns can avoid tracheal intubation.",
            
            features: [
                { title: "All-in-One Non-Invasive Solution", text: "The NV8 provides NIPPV and SNIPPV for newborns. Clinical studies have proven that NIPPV/SNIPPV mode can effectively reduce the intubation rate and increase the success rate of invasive ventilation withdrawal." },
                { title: "Fully Compatible Accessories", text: "Equipped with the NV Flow / Neo.Flow pressure generator for safe and comfortable sealing. Fully compatible with infant flow, medijet, and other brands. A wide range of nasal plugs and masks are available to meet premature infant needs." },
                { title: "Intelligent Synchronization & Apnea Wake-up", text: "Provides reliable respiratory monitoring through an abdominal sensor with 10 levels of sensitivity. The accuracy of breathing synchronization in SNIPPV mode reaches more than 90%, and NCPAP mode features an apnea wake-up function." },
                { title: "Industry-Leading Performance", text: "Inspiratory pressure is a critical indicator of non-invasive ventilation. The NV8 provides industry-leading performance with PIP (Peak Inspiratory Pressure) up to 20cmH2O, expanding the scope of treatment." },
                { title: "Designed for Healthcare Providers", text: "Features a clear 8-inch LED touchscreen with a 15° tilt. Designed with a calibration-specific circuit that intelligently calibrates the oxygen cell automatically without interrupting ventilation." },
                { title: "SpO2 Monitoring Function", text: "Equipped with Masimo/Nellcor SpO2 to help healthcare professionals determine the effectiveness of non-invasive ventilation therapy by monitoring changes in blood oxygen levels." }
            ],
            
            specifications: {
                "Target Patients": "Newborns and infants",
                "Peak Inspiratory Pressure (PIP)": "Up to 20cmH2O",
                "Key Modes": "NCPAP, NIPPV, SNIPPV",
                "Sensors": "Abdominal respiratory sensor (10 sensitivity levels)",
                "Display": "8-inch LED touchscreen, 15° tilt",
                "Oxygen Calibration": "Intelligent online calibration without interrupting ventilation",
                "SpO2 Monitoring": "Masimo/Nellcor SpO2 integrated"
            }
        },
        {
            id: 9,
            name: "NF5",
            brand: "COMEN",
            category: "High Flow Oxygen Therapy Humidifier",
            custom_url: "nf5",
            
            image: "https://alioss.comen.com/cms-v2/378_af23b22158.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/378_af23b22158.png",
                "https://alioss.comen.com/cms-v2/379_49150abdc1.png",
                "https://alioss.comen.com/cms-v2/2_5_bdbfc2153d.png",
                "https://alioss.comen.com/cms-v2/3_4_1_a8a91c481f.png",
                "https://alioss.comen.com/cms-v2/4_4_1_3d6438ab8a.png"
            ],
            
            short_description: "A high-performance High Flow Heated Respiratory Humidifier with smart temperature control and precise oxygen delivery for all ages.",
            key_highlights: [
                "Wide application range (2-80 L/min) for infants to adults",
                "Smart temperature (37℃) and humidity (100% RH) control",
                "One-touch O₂ flush for rapid oxygen concentration increase",
                "Integrated SpO2 monitoring (Comen, Masimo, Nellcor)",
                "Intra-hospital transport ready with integrated battery and turbine"
            ],
            
            overview_text: "NF5 is a High Flow Heated Respiratory Humidifier designed to be simple, practical, safe, and comfortable. It features an ultra-large 4.3-inch touch screen, an electronic air-O2 mixer system, and an intuitive UI design for caregivers. It provides highly efficient and precise oxygen therapy for both infants and adults.",
            
            features: [
                { title: "Simple and Practical UI", text: "Equipped with a 4.3-inch touch screen and navigation knob for quick operation. Features an intuitive UI with large fonts and an electronic air-O2 mixer system for easy setup." },
                { title: "Safe and Comfortable Heating", text: "Features 3 temperature sensors for real-time monitoring, synchronized closed-loop feedback, smart water level management, and over-temperature protection. Delivered via a soft, ergonomic nasal cannula." },
                { title: "Efficient and Precise Control", text: "Adopt high-precision electronic air-oxygen mixing and monitoring to realize precise regulation. A One-touch O₂ flush rapidly increases oxygen reserve for suctioning or intubation." },
                { title: "Smart Temp & Humidity Control", text: "Provides patients with accurate high-flow oxygen therapy close to human core body temperature (37℃) and 100% relative humidity (44mg/L), optimizing mucus and cilia function." },
                { title: "Wide Range of Application", text: "The 2-80L/min flow control effectively flushes physiological dead space and avoids CO2 retention. Clinically suitable for infants (2-30L/min) and adults (10-80L/min)." },
                { title: "Transport & Monitoring Ready", text: "Features a high-performance turbine (no compressed air needed) and an integrated battery for easy intra-hospital transport. Optional SpO2 monitoring helps doctors optimize treatment plans in real time." }
            ],
            
            specifications: {
                "Display": "4.3-inch touch screen",
                "Adult Flow Range": "10-80 L/min",
                "Infant/Child Flow Range": "2-30 L/min",
                "Temperature Target": "37℃ (Core body temperature)",
                "Humidity Target": "100% relative humidity (44mg/L)",
                "Transport Capability": "Integrated turbine & battery, trolley available"
            }
        },
        {
            id: 10,
            name: "HT30",
            brand: "COMEN",
            category: "High Flow Oxygen Therapy Humidifier",
            custom_url: "ht30",
            
            image: "https://alioss.comen.com/cms-v2/1_H1200_20x_8_2_3821278824.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/1_H1200_20x_8_2_3821278824.png",
                "https://alioss.comen.com/cms-v2/3_H1200_20x_8_1_95d004643a.png",
                "https://alioss.comen.com/cms-v2/4_H1200_20x_8_1_cd852d42a2.png",
                "https://alioss.comen.com/cms-v2/5_H1200_20x_8_3_a3e3050150.png",
                "https://alioss.comen.com/cms-v2/5_H1200_20x_8_1_e12da1046f.png"
            ],
            
            short_description: "An intelligent respiratory humidifier providing precise humidity management, adaptive heated circuit technology, and reliable protective features.",
            key_highlights: [
                "Intelligent humidity control with output ≥12mg/L",
                "Three specialized heating modes",
                "Waterproof upper-and-lower enclosure design",
                "Pressure-resistant up to 300 cmH₂O without leakage",
                "Adaptive heated circuit technology with automatic resistance detection"
            ],
            
            overview_text: "The HT30 Humidifier is primarily designed to deliver gas at appropriate temperature and humidity to patients, maintaining the normal physiological and defensive functions of the respiratory tract mucociliary system. It features an intelligent humidity control system with output humidity above 12mg/L, three heating modes, and automatic heating wire resistance detection to ensure optimal heating power.",
            
            features: [
                { title: "Precise Humidity Management", text: "Independent temperature control of the water chamber and breathing circuit ensures stable humidity delivery, providing an absolute humidity output of ≥12 mg/L." },
                { title: "Automatic Humidity Control Algorithm", text: "An intelligent control algorithm automatically adapts to changing ambient conditions, maintaining consistent humidity delivery while minimizing condensation throughout the breathing circuit." },
                { title: "Adaptive Heated Circuit Technology", text: "Automatically detects heated-wire resistance and dynamically adjusts power output to optimize heating efficiency and ensure reliable humidification performance." },
                { title: "Waterproof Design", text: "The upper-and-lower enclosure design effectively minimizes the risk of water ingress, enhancing the durability and safety of the device." },
                { title: "Pressure-Resistant Design", text: "With an optimized aluminum heating plate and reusable humidification chamber, the system can withstand pressures above 300 cmH₂O without leakage." },
                { title: "Anti-Screw-Fall Design", text: "Vertical PCB mounting avoids the heating-plate fixing screws and reduces the risk of short circuit or fire caused by dropped screws." }
            ],
            
            specifications: {
                "Humidity Output": "≥12 mg/L",
                "Heating Modes": "3 distinct heating modes",
                "Pressure Resistance": "Up to 300 cmH₂O without leakage",
                "Safety Features": "Waterproof enclosure, Anti-screw-fall PCB mounting",
                "Control Algorithm": "Automatic ambient condition adaptation"
            }
        },
        {
            id: 11,
            name: "HT50",
            brand: "COMEN",
            category: "High Flow Oxygen Therapy Humidifier",
            custom_url: "ht50",
            
            image: "https://alioss.comen.com/cms-v2/1_H1200_20x_8_2_87c1ebe0cc.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/1_H1200_20x_8_2_87c1ebe0cc.png",
                "https://alioss.comen.com/cms-v2/4_H1200_20x_8_2_f73839b010.png",
                "https://alioss.comen.com/cms-v2/6_H1200_20x_8_1_44c3d5abe2.png",
                "https://alioss.comen.com/cms-v2/5_H1200_20x_8_2_fdc944f88c.png",
                "https://alioss.comen.com/cms-v2/8_H1200_20x_8_1_cebe990003.png"
            ],
            
            short_description: "An advanced respiratory humidifier featuring precise airflow detection, dual-limb heating, and intelligent humidity control.",
            key_highlights: [
                "Precise airflow detection technology",
                "Dual-Limb Heating Technology",
                "Dry Heating Alarm",
                "Probe Disconnection Detection",
                "Intelligent automatic control algorithms"
            ],
            
            overview_text: "The HT50 humidifier is primarily used to provide gas at appropriate temperature and humidity levels for patients, helping maintain the normal physiological and protective functions of the human airway mucociliary system. With precise airflow detection technology and advanced control algorithms, the HT50 can accurately control temperature and humidity output under a wide range of environmental conditions.",
            
            features: [
                { title: "Intelligent Humidity Control", text: "The humidification chamber and breathing circuit are controlled independently. This ensures delivery of gas at body temperature and saturated humidity levels." },
                { title: "Automatic Ambient Adaptation", text: "Intelligent automatic algorithms enable the system to deliver target humidity across a wide range of environmental conditions while minimizing condensate formation." },
                { title: "Dual-Limb Heating Technology", text: "Heated inspiratory and expiratory limbs minimize condensation throughout the breathing circuit, ensuring stable humidification, accurate monitoring, and enhanced ventilation performance." },
                { title: "Dry Heating Alarm", text: "Effectively detects dry-heating conditions, helping ensure adequate humidification and reducing the risk of secretion accumulation and airway complications." },
                { title: "Probe Disconnection Detection", text: "By monitoring airflow and temperature trends, the system can dynamically identify whether the temperature probe is properly connected." }
            ],
            
            specifications: {
                "Heating Mechanism": "Dual-Limb Heating Technology",
                "Detection Technology": "Precise airflow detection",
                "Alarms": "Dry heating, Probe disconnection, Audible & Visual",
                "Control System": "Independent chamber and circuit control"
            }
        },
        {
            id: 12,
            name: "X8",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "x8",
            
            image: "https://alioss.comen.com/cms-v2/1_7_1_bc7c890884.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/1_7_1_bc7c890884.png",
                "https://alioss.comen.com/cms-v2/1_10_b6fba615d1.png",
                "https://alioss.comen.com/cms-v2/4_8_bb218fe54a.png",
                "https://alioss.comen.com/cms-v2/49_80cbebb0af.png",
                "https://alioss.comen.com/cms-v2/46_7d51a1c3cb.png"
            ],
            
            short_description: "An advanced integrated anesthesia machine delivering ICU-level ventilation, stable fresh-gas delivery, and comprehensive perioperative lung protection.",
            key_highlights: [
                "ICU-Level Ventilation Support with 9 modes",
                "Electronic flowmeter and econometer for low-flow anesthesia",
                "18.5-inch ultra-large capacitive touchscreen with 360° rotation",
                "Built-in AGSS and BIS module for depth indication",
                "Smart Anesthesia and Safe Management tools"
            ],
            
            overview_text: "The X8 is an integrated anesthesia machine designed to support accurate control, stable delivery, ICU-level ventilation support, perioperative lung protection, and smart anesthesia management in one advanced workstation.",
            
            features: [
                { title: "Stable Delivery & Low-Flow Anesthesia", text: "The electronic flowmeter allows direct setting of FiO2 and total flow. The econometer provides real-time fresh-gas usage information, guiding low-flow anesthesia and reducing waste, with a low circuit leakage of just 49.5 ml." },
                { title: "ICU-Level Ventilation Support", text: "Provides comprehensive ventilation support including AMV and APRV. APRV supports the open-lung principle to recruit alveoli, improve oxygenation, and protect lung function. Supports VCV, PCV, PSV/CPAP, SIMV modes, and more." },
                { title: "Integrated Modules & 18.5-inch Touchscreen", text: "An 18.5-inch ultra-large capacitive touchscreen with 360-degree rotation. Features built-in AGSS for waste-gas absorption, an integrated breathing circuit, a BIS module for anesthesia depth, and a negative pressure suction system." },
                { title: "Perioperative Lung Protection", text: "Extends support beyond intraoperative control with High Flow Oxygen Therapy to prolong safe apnea time. Includes lung recruitment tools, esophageal pressure monitoring, sigh ventilation, and a VT/IBW tool for ideal tidal volume calculation." },
                { title: "Smart Anesthesia and Safe Management", text: "Features quick startup, rapid self-tests, and visual self-checking procedures. Includes soda lime tank in-place reminders, gas usage monitoring, anesthesia consumption warnings, and data review/printing for post-case traceability." },
                { title: "Data Interconnection", text: "By connecting with a data platform, X8 supports systematic and continuous data interconnection across emergency surgery, elective surgery, painless surgery, and day surgery, aiding whole-process patient management." }
            ],
            
            specifications: {
                "Display": "18.5-inch ultra-large capacitive touchscreen, 360° rotation",
                "Ventilation Modes": "VCV, PCV, PSV/CPAP, SIMV-VC, SIMV-PC, SIMV-PRVC, PRVC, AMV, APRV",
                "Integrated Modules": "AGSS, BIS module, Negative pressure suction",
                "Leakage Rate": "49.5 ml low leakage of breathing circuits",
                "Lung Protection": "HFNC, Esophageal pressure monitoring, VT/IBW tool"
            }
        },
        {
            id: 13,
            name: "AX900",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "ax900",
            
            image: "https://alioss.comen.com/cms-v2/262_950dcdd550.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/262_950dcdd550.png",
                "https://alioss.comen.com/cms-v2/261_1_7aa5699045.png",
                "https://alioss.comen.com/cms-v2/299_7d92aa09c0.png",
                "https://alioss.comen.com/cms-v2/250_1_4a363d24fb.png",
                "https://alioss.comen.com/cms-v2/263_9a5aa85f18.png"
            ],
            
            short_description: "A high-performance anesthesia workstation featuring advanced pneumatic drive electronic control, precise ventilation, and an independent electronic flow meter.",
            key_highlights: [
                "Classic Ascending Bellows Pneumatic Drive Electronic Control",
                "7% Ventilation Accuracy and 65ml/min Low Leakage",
                "Independent 8-inch LED touch screen for flow meter operation",
                "Advanced Fresh Gas Control System with real-time oxygen correction",
                "Best Flow Indicator Tool for low-flow anesthesia guidance"
            ],
            
            overview_text: "The AX-900 is a modern anesthesia machine ventilator designed to provide safe and precise anesthesia delivery during surgical procedures. Combining precision ventilation with intuitive controls, this anesthesia workstation ensures patient safety and surgical efficiency. It ensures accurate ventilation, continuous patient monitoring, and efficient operation, offering a reliable solution for all anesthesia management needs.",
            
            features: [
                { title: "Classic Pneumatic Drive Electronic Control", text: "Adapts advanced pneumatic components to ensure safety and stability. The ascending bellows design provides a more compact circuit, realizing accurate ventilation, stable SIMV/PSV modes, and sharper triggering." },
                { title: "Comprehensive Perioperative Ventilation", text: "Provides four kinds of control ventilation modes, three SIMV modes, and two pressure support ventilation modes, functioning as a high-performance anesthesia ventilator for induction, maintenance, recovery, and spontaneous breath exercise." },
                { title: "Advanced Fresh Gas Control System", text: "Achieves fresh gas electronic closed-loop control. The system automatically adjusts the ratio of oxygen and balance gas, allowing real-time correction of oxygen concentration and total flow to correct fluid inertia errors." },
                { title: "Best Flow Indicator Tool", text: "Gives the accurate flow of current anesthesia ventilation using a color spectrum diagram, improving efficiency, implementing precise anesthesia, and allowing anesthesiologists to practice low-flow anesthesia safely." },
                { title: "Revolutionary Electronic Flow Meter", text: "Adopts an 8-inch LED touch screen for independent flow meter operation, providing better clarity than traditional integrated panels. Features an electronic gas source pressure gauge that eliminates pointer inertia." },
                { title: "Exceptional Performance Parameters", text: "Achieves 7% ventilation accuracy and a very low leakage rate of 65ml/min. The circuit is autoclavable, and PEEP facilitates lung protection and recruitment maneuvers." }
            ],
            
            specifications: {
                "Flow Meter Display": "8-inch LED touch screen (Independent)",
                "Ventilation Accuracy": "7%",
                "Circuit Leakage": "65ml/min (Low Leakage)",
                "Circuit Sterilization": "Autoclavable",
                "Ventilation Modes": "4 Control, 3 SIMV, 2 Pressure Support modes",
                "Gas Control": "Electronic closed-loop control, Best Flow Indicator"
            }
        },
        {
            id: 14,
            name: "AX-800/AX-700",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "ax-800-ax-700",
            
            image: "assets/images/products/ax-800-ax-700-1.png",
            gallery: [
                "assets/images/products/ax-800-ax-700-1.png",
                "assets/images/products/ax-800-ax-700-2.png",
                "assets/images/products/ax-800-ax-700-3.png",
                "assets/images/products/ax-800-ax-700-4.png"
            ],
            
            short_description: "Versatile anesthesia workstations featuring a modular design, 15-inch rotating touch screen, and classic pneumatic drive electronic control for precise ventilation.",
            key_highlights: [
                "15-inch four-way rotating touch screen (AX-800)",
                "Comprehensive Perioperative Ventilation Modes",
                "Electronic Flow Meter with back light",
                "Modular plug-and-play design (AG, EtCO2, BIS)",
                "Classic Ascending Bellows Pneumatic Drive Electronic Control"
            ],
            
            overview_text: "The AX-800 and AX-700 are versatile anesthesia machines designed to provide safe and precise anesthesia delivery. They feature a modular design, classic pneumatic drive electronic control technology, and a 15-inch four-way rotating touch screen for comfortable operation.",
            
            features: [
                { title: "Rotatable Touch Screen", text: "AX-800 features a 15” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue." },
                { title: "Comprehensive Perioperative Ventilation Modes", text: "Provides four kinds of control ventilation modes, three kinds of SIMV modes and two kinds of pressure support ventilation modes, providing more professional ventilation modes for anesthesia induction, maintenance, recovery and spontaneous breath exercise." },
                { title: "Electronic Flow Meter", text: "Instantly know the fresh gas flow to your patient. A flow meter back light provides a quick reference even in a darkened environment." },
                { title: "Modular Design", text: "Incorporates anesthesia-related monitoring functions such as AG, EtCO2, and BIS. The modular plug-and-play design enables resource sharing, reduces medical costs, and facilitates clinical work." },
                { title: "Classic Pneumatic Drive Electronic Control", text: "The ascending bellows pneumatic electronic control technology provides a more compact circuit, realizing accurate ventilation, stable SIMV/PSV modes, and sharper triggering." },
                { title: "Ergonomic & Practical Design", text: "Features a rotatable and lockable roomy drawer for exceptional storage capacity. An optional central brake system is available for time-saving and convenient use." }
            ],
            
            specifications: {
                "Display": "15-inch four-way rotating touch screen (AX-800)",
                "Ventilation Accuracy": "7%",
                "Circuit Leakage": "65ml/min (Low Leakage)",
                "Circuit Sterilization": "Autoclavable",
                "Modules": "AG, EtCO2, BIS (Plug-and-play)",
                "Storage": "Rotatable and lockable roomy drawer"
            }
        },
        {
            id: 15,
            name: "AX600",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "ax600",
            
            image: "https://alioss.comen.com/cms-v2/253_9cbd8b1f8d.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/253_9cbd8b1f8d.png",
                "https://alioss.comen.com/cms-v2/258_61bb5065ad.png",
                "https://alioss.comen.com/cms-v2/250_1_4a363d24fb.png",
                "https://alioss.comen.com/cms-v2/300_ffc844aadd.png",
                "https://alioss.comen.com/cms-v2/256_3ae8ac77c0.png"
            ],
            
            short_description: "A versatile anesthesia workstation featuring a modular design, 12.1-inch rotating touch screen, and classic pneumatic drive electronic control for precise ventilation.",
            key_highlights: [
                "12.1-inch four-way rotating touch screen",
                "Comprehensive Perioperative Ventilation Modes",
                "Modular plug-and-play design (AG, EtCO2, BIS)",
                "Classic Ascending Bellows Pneumatic Drive Electronic Control",
                "Rotatable and lockable roomy drawer"
            ],
            
            overview_text: "The AX-600 is a versatile anesthesia machine designed to provide safe and precise anesthesia delivery. It features a modular design, classic pneumatic drive electronic control technology, and a 12.1-inch four-way rotating touch screen for comfortable operation.",
            
            features: [
                { title: "Rotatable Touch Screen", text: "AX-600 features a 12.1” four-way rotating touch screen, more comfortable for doctors of different heights in different positions to observe and operate, reducing work fatigue." },
                { title: "Comprehensive Perioperative Ventilation Modes", text: "Provides four kinds of control ventilation modes, three kinds of SIMV modes and two kinds of pressure support ventilation modes, providing more professional ventilation modes for anesthesia induction, maintenance, recovery and spontaneous breath exercise." },
                { title: "Modular Design", text: "Incorporates anesthesia-related monitoring functions such as AG, EtCO2, and BIS. The modular plug-and-play design enables resource sharing, reduces medical costs, and facilitates clinical work." },
                { title: "Classic Pneumatic Drive Electronic Control", text: "The ascending bellows pneumatic electronic control technology provides a more compact circuit, realizing accurate ventilation, stable SIMV/PSV modes, and sharper triggering." },
                { title: "Ergonomic & Practical Design", text: "Features a rotatable and lockable roomy drawer for exceptional storage capacity. An optional central brake system is available for time-saving and convenient use." }
            ],
            
            specifications: {
                "Display": "12.1-inch four-way rotating touch screen",
                "Ventilation Accuracy": "7%",
                "Circuit Leakage": "65ml/min (Low Leakage)",
                "Circuit Sterilization": "Autoclavable",
                "Modules": "AG, EtCO2, BIS (Plug-and-play)",
                "Storage": "Rotatable and lockable roomy drawer"
            }
        },
        {
            id: 16,
            name: "AX-400/AX-500",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "ax400-ax500",
            
            image: "https://alioss.comen.com/cms-v2/249_f7e3110f71.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/249_f7e3110f71.png",
                "https://alioss.comen.com/cms-v2/248_79d9dd69ea.png",
                "https://alioss.comen.com/cms-v2/250_1_4a363d24fb.png",
                "https://alioss.comen.com/cms-v2/251_25403e9b52.png",
                "https://alioss.comen.com/cms-v2/299_7d92aa09c0.png"
            ],
            
            short_description: "Versatile anesthesia workstations featuring a modular design, mechanical flowmeter, 12-inch touch screen, and classic pneumatic drive electronic control for precise ventilation.",
            key_highlights: [
                "12-inch high-resolution individual touch screen (AX-500)",
                "Comprehensive Perioperative Ventilation Modes",
                "Mechanical Flowmeter with dual flow tubes",
                "Modular plug-and-play design (AG, EtCO2, BIS)",
                "Classic Ascending Bellows Pneumatic Drive Electronic Control"
            ],
            
            overview_text: "The AX-400 and AX-500 series are versatile anesthesia machines designed to provide safe and precise anesthesia delivery. They feature a modular design, classic pneumatic drive electronic control technology, a mechanical flowmeter, and a 12-inch high-resolution individual touch screen for comfortable and intuitive operation.",
            
            features: [
                { title: "Individual Touch Screen", text: "The AX-500 features a 12-inch high-resolution screen that provides a clear and comfortable viewing experience. Its intuitive interface presents vital information in a clean, organized layout." },
                { title: "Comprehensive Perioperative Ventilation Modes", text: "Provides four kinds of control ventilation modes, three kinds of SIMV modes and two kinds of pressure support ventilation modes, providing more professional ventilation modes for anesthesia induction, maintenance, recovery and spontaneous breath exercise." },
                { title: "Modular Design", text: "Optional BIS, AG, and CO2 modules. Automatically identifies CO2, N2O, and 5 anesthetic gases. Supports real-time O2 concentration monitoring and allows monitoring modules to be shared with modular monitors." },
                { title: "Mechanical Flowmeter", text: "Individual flow controls with dual flow tubes provide simple, precise control, facilitating easy and accurate minimal/low flow anesthesia. A 3-gas with 6-tubes flowmeter is optional." },
                { title: "Classic Pneumatic Drive Electronic Control", text: "The ascending bellows pneumatic electronic control technology provides a more compact circuit, realizing accurate ventilation, stable SIMV/PSV modes, and sharper triggering." },
                { title: "Safety & Ergonomics", text: "Features a one-hand installation CO2 absorber canister that supports replacement during operation. An optional closed-type active scavenging system (AGSS) effectively removes anesthesia gas from the working area." }
            ],
            
            specifications: {
                "Display": "12-inch high-resolution touch screen (AX-500)",
                "Ventilation Accuracy": "7%",
                "Circuit Leakage": "65ml/min (Low Leakage)",
                "Flowmeter": "Mechanical with dual flow tubes (3-gas with 6-tubes optional)",
                "Modules": "AG, EtCO2, BIS (Plug-and-play)",
                "CO2 Absorber": "One-hand installation, replaceable during operation"
            }
        },
        {
            id: 17,
            name: "A5/A7",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "a5-a7",
            
            image: "https://alioss.comen.com/cms-v2/356_3c5159f081.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/356_3c5159f081.png",
                "https://alioss.comen.com/cms-v2/357_a70c190e77.png",
                "https://alioss.comen.com/cms-v2/358_1_c605bfb47c.png",
                "https://alioss.comen.com/cms-v2/359_bc6e0aea32.png",
                "https://alioss.comen.com/cms-v2/360_9b9b03c466.png"
            ],
            
            short_description: "An ergonomic anesthesia machine providing comprehensive ventilation support, smart modular design, and powerful data storage for efficient perioperative care.",
            key_highlights: [
                "8.4-inch touch screen with smart pulmonary loop",
                "PSVPro innovative pressure support ventilation mode",
                "Three-slot smart modular design (AG+O2, BIS, CO2, NMT)",
                "Highly integrated breathing circuit for compact & precise ventilation",
                "Powerful Data Storage with AIMS interconnection"
            ],
            
            overview_text: "The A7 anesthesia machine provides comprehensive ventilation support with intelligent and ergonomic operating design, serving as an optimal assistant during perioperative procedures. It features a highly integrated breathing circuit and advanced modular options for continuous patient monitoring.",
            
            features: [
                { title: "Comprehensive Ventilation Support", text: "Various ventilation modes satisfy different clinical needs during the perioperation, providing comfortable, safe, and efficient support. Features PSVPro, an innovative mode designed to give smarter and more efficient pressure support." },
                { title: "Compact & Precise Breathing Circuit", text: "The highly integrated breathing circuit design reduces air resistance and combines with fresh gas compensation technology to provide precise ventilation for both adult and child patients." },
                { title: "Smart Modular Design", text: "Features a three-slot modular design supporting AG+O2, AG, BIS, CO2, NMT, and high-end parameters monitoring. Anesthetic gas is automatically recognized with calculation, and values/waveforms are displayed synchronously." },
                { title: "Unlimited Possibilities", text: "Includes Flush O2 for high flow oxygen, an Auxiliary Common Gas Outlet (ACGO) to avoid cross-infection, and an AGSS to safely exhaust waste gas. A mounted rail supports an external GCX bracket." },
                { title: "Ergonomic Operation Platform", text: "Features an 8.4-inch touch screen that displays up to five waveforms simultaneously. A smart pulmonary loop aids real-time monitoring, while a 0-15 l/min dual-channel mechanical flowmeter allows wider flow adjustment. A three-drawer design offers extensive storage." },
                { title: "Powerful Data Storage", text: "The data system supports 2000 setting logs and 60 hours of data review. A backup battery lasts up to 6 hours. Interconnection with AIMS allows dynamic information tracking throughout the anesthetic period." }
            ],
            
            specifications: {
                "Display": "8.4-inch touch screen, up to 5 waveforms",
                "Ventilation Modes": "PSVPro and various other modes",
                "Modules": "Three-slot design (AG+O2, AG, BIS, CO2, NMT)",
                "Flowmeter": "0-15 l/min dual-channel mechanical flowmeter",
                "Data Storage": "2000 setting logs, 60 hours data review",
                "Battery Backup": "Up to 6 hours"
            }
        },
        {
            id: 18,
            name: "AGSS-H/AGSS-L",
            brand: "COMEN",
            category: "Anesthesia Machine",
            custom_url: "agss-h-agss-l",
            
            image: "https://alioss.comen.com/cms-v2/image_png_8c609840ee.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/image_png_8c609840ee.png",
                "https://alioss.comen.com/cms-v2/image_png_1_14541d267b.png",
                "https://alioss.comen.com/cms-v2/image_png_2_851c7fd3eb.png",
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
                "https://alioss.comen.com/cms-v2/8_1e470a31ae.png"
            ],
            
            short_description: "An efficient Anesthetic Gas Scavenging System that safely removes hazardous waste gases and protects healthcare workers, requiring no power or chemical consumables.",
            key_highlights: [
                "AGSS-H suitable for high-velocity exhaust gas pipes (>75 L/min)",
                "AGSS-L suitable for low-velocity exhaust gas pipes (<50 L/min)",
                "Effectively removes high-risk gases (N2O, sevoflurane, isoflurane)",
                "Compatible with all major brands of anesthesia machines",
                "Physical gas absorption with no gas/power supply required"
            ],
            
            overview_text: "The AGSS-H and AGSS-L are Anesthetic Gas Scavenging Systems designed to effectively remove waste anesthetic gases in conjunction with hospital exhaust pipes. They protect healthcare workers from the hazards of exhaled gases like N2O and isoflurane while reducing circuit ventilation abnormalities.",
            
            features: [
                { title: "Effective Gas Removal", text: "Effectively removes intermittent waste anesthetic gases (exhaled gas and driving gas) in conjunction with hospital anesthetic gas exhaust pipes, protecting staff from toxicity." },
                { title: "Reduces Ventilation Abnormalities", text: "Effectively reduces circuit ventilation abnormalities caused by negative pressure in the exhaust gas ducts." },
                { title: "Broad Compatibility", text: "Provides corresponding connection solutions for all major brands of anesthesia machines. Compatible with jet AGS ducts, negative-pressure AGS ducts, or negative-pressure ducts for high- and low-velocity exhaust gas ducts." },
                { title: "Cost-Effective & Maintenance-Free", text: "Absorbs gas through physical means, requiring no gas supply, power supply, or chemical consumables. Ready for use with a simple commissioning process." },
                { title: "Mitigates Health Hazards", text: "Prevents leaks of inhaled anesthetics known to have mutagenicity, carcinogenicity, organ toxicity, and significant impacts on fertility and psychological well-being." }
            ],
            
            specifications: {
                "AGSS-H Flow Rate Target": "> 75 L/min",
                "AGSS-L Flow Rate Target": "< 50 L/min",
                "Compatibility": "All major anesthesia machine brands",
                "Operation Principle": "Physical gas absorption (No power/consumables required)"
            }
        },
        {
            id: 19,
            name: "MR-M80T/MR-M60T",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "mr-m80t-mr-m60t",
            
            image: "https://alioss.comen.com/cms-v2/product_6afe6e94c3.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/product_6afe6e94c3.png",
                "https://alioss.comen.com/cms-v2/mri_environment_b508bccf36.jpg",
                "https://alioss.comen.com/cms-v2/magnetic_field_41ae876f02.png",
                "https://alioss.comen.com/cms-v2/full_chain_0ef9130279.png",
                "https://alioss.comen.com/cms-v2/fiber_optic_icon_a2dd491122.png"
            ],
            
            short_description: "MRI-compatible patient monitors featuring full-chain magnetic-safe design, fiber-optic transmission, and full-HD touchscreens for continuous care in high-field environments.",
            key_highlights: [
                "1.5T/3.0T high-field MRI compatibility",
                "Full-chain magnetic-safe design to reduce projectile hazards",
                "Three layers of anti-interference technology",
                "18.5-inch (MR-M80T) / 15.6-inch (MR-M60T) full-HD touchscreens",
                "Remote Monitoring and Dual-Screen Collaboration"
            ],
            
            overview_text: "The MR-M80T and MR-M60T are advanced patient monitors purpose-built for 1.5T/3.0T high-field MRI environments. With a full-chain magnetic-safe design and real-time magnetic field indication, they provide continuous, safe, and accurate monitoring during MRI examinations.",
            
            features: [
                { title: "Magnetic-Safe Innovation", text: "Purpose-built for 1.5T/3.0T MRI environments. The main unit operates safely in ≤60 mT fields, while acquisition boxes function in 3.0T fields without affecting image quality. Real-time magnetic field indication supports safer positioning." },
                { title: "Full-Chain Magnetic-Safe Design", text: "Internal components, housing, sensors, and probes are magnetic-safe, minimizing risks like magnetic attraction or projectile hazards. Integrates fiber-optic transmission, multi-layer electromagnetic shielding, and adaptive filtering." },
                { title: "Full-Parameter Monitoring", text: "MR-M80T features an 18.5-inch full-HD touchscreen (1920 × 1080), and MR-M60T features a 15.6-inch full-HD touchscreen. Both offer a clear sight of vital parameters." },
                { title: "MRI-Specific Accessories", text: "Includes high-impedance MR ECG leadwires, carbon fiber MR ECG electrodes, and fiber-optic MR SpO2/Temperature probes to reduce image interference, artifacts, and induced burn risks." },
                { title: "Efficient Information Interconnection", text: "The main unit and MR-M10 remote display enable synchronized observation and operation between the control room and shielded room, reducing unnecessary entry into the MRI room and improving workflow safety." }
            ],
            
            specifications: {
                "Display": "18.5-inch (MR-M80T) / 15.6-inch (MR-M60T) full-HD touchscreen (1920 × 1080)",
                "MRI Compatibility": "1.5T / 3.0T high-field MRI",
                "Anti-Interference": "Fiber-optic, multi-layer shielding, adaptive filtering",
                "Accessories": "Magnetic-safe MR ECG, SpO2, and Temperature probes",
                "Remote Collaboration": "Supported with MR-M10 remote display"
            }
        },
        {
            id: 20,
            name: "K Pro Series",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "k-pro-series",
            
            image: "assets/images/products/k-pro-series-1.png",
            gallery: [
                "assets/images/products/k-pro-series-1.png",
                "assets/images/products/k-pro-series-2.png",
                "assets/images/products/k-pro-series-3.png",
                "assets/images/products/k-pro-series-4.png"
            ],
            
            short_description: "An advanced ICU multiparameter patient monitor featuring high-definition touchscreens, cutting-edge arrhythmia classification, scalable modular expansions, and seamless connectivity.",
            key_highlights: [
                "High-definition capacitive touchscreen with auto-brightness",
                "27 arrhythmia classifications for precise rhythm assessment",
                "Scalable modular expansions for Neurology, Respiratory, and Circulatory Monitoring",
                "Seamless connectivity with HIS (HL7), Central Monitors, and Klink",
                "24-hour ECG summary including HR trends and QT variations"
            ],
            
            overview_text: "The K Pro Series intensive care unit monitor is designed with advanced technology, intelligent data integration, and an intuitive user experience to empower healthcare professionals and enhance patient safety in critical care environments.",
            
            features: [
                { title: "Precision Monitoring with Clear Visibility", text: "Features a high-definition capacitive touchscreen with a 7:1 contrast ratio (WCAG 2.0 AAA standards). Auto-brightness adjustment minimizes glare, adapting to lighting conditions in ORs, ICUs, and emergency settings. Intelligent gesture controls allow effortless navigation." },
                { title: "Cutting-Edge Cardiac Monitoring", text: "Integrates advanced monitoring parameters, including 27 arrhythmia classifications, QT/QTc monitoring to reduce sudden cardiac events, 6-lead ECG, and 24-hour ECG summaries detailing HR trends, QT variations, and pacemaker analysis." },
                { title: "Scalable Modular Expansions", text: "Offers modular expansions for diverse clinical needs: Neurology (BIS, SedLine, EEG, aEEG, Masimo O3), Respiratory (RM, EtCO2, O2, Anesthesia Gas), and Circulatory Monitoring (C.O., ICG, PiCCO, ProAQT, Masimo Rainbow SET)." },
                { title: "Seamless Information Integration", text: "Built for real-time data exchange ensuring smooth workflow. Supports direct HIS connection (HL7), centralized display via Central Monitor Systems, and seamless 'Klink' interconnection for real-time display of anesthesia machines, ventilators, and infusion systems." }
            ],
            
            specifications: {
                "Display Interface": "High-definition capacitive touchscreen, Auto-brightness, 7:1 contrast ratio",
                "Cardiac Monitoring": "27 Arrhythmia classifications, QT/QTc, 6-lead ECG, 24-hour summary",
                "Modular Expansions": "Neurology, Respiratory, and Circulatory parameters",
                "Connectivity": "HIS (HL7), Central monitor system, Klink integration"
            }
        },
        {
            id: 21,
            name: "K22 Pro",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "k22-pro",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_f7d611d94a.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_f7d611d94a.png",
                "https://alioss.comen.com/cms-v2/124_24e9de547f.png",
                "https://alioss.comen.com/cms-v2/13_png_d192532fd6.png",
                "https://alioss.comen.com/cms-v2/128_76fff78f85.png",
                "https://alioss.comen.com/cms-v2/129_f5abe4cff1.png"
            ],
            
            short_description: "An expansive, fully modular 21.5-inch patient monitor featuring dual-OS support, embedded clinical tools like SepsisGuide, and seamless data connectivity across care settings.",
            key_highlights: [
                "21.5-inch Capacitive Touchscreen with Portrait & Landscape Modes",
                "Fully modular with up to 8 slots + Z03 plug-in",
                "Embedded Clinical Tools (SepsisGuide, EWS, GCS, ST Graphic)",
                "Dual-OS Support (Linux & Windows) for advanced data processing",
                "Seamless K-Link multi-device integration and HL7 compliance"
            ],
            
            overview_text: "The K22 Pro is a fully modular patient monitor designed to deliver expansive and intuitive clinical support. With its 21.5-inch touchscreen, dual-OS support, and extensive clinical tools, it ensures precision monitoring across Emergency, OR, ICU, and Anesthesia environments.",
            
            features: [
                { title: "Expansive, Intuitive Display", text: "Features a 21.5″ capacitive touchscreen with an intuitive UI and ergonomic design. Effortlessly switch between portrait and landscape modes to focus on detailed trends or display up to 16 channels at once." },
                { title: "Fully Modular Design", text: "Customizable monitoring with up to 8 slots + Z03 plug-in. Easily scale capabilities with cardiac, gas-analysis, neuro, respiratory, and specialty modules as clinical needs evolve." },
                { title: "Versatile Clinical Applications", text: "Ideal for Emergency & OR (seamless data handover with K1 transport monitor), ICU & NICU (Masimo Rainbow SET, dual SpO₂, apnea-wake technology), and Anesthesia Suites (optional Anesthesia Gas, NMT, BIS, SedLine®, Masimo O3)." },
                { title: "Embedded Clinical Support Tools", text: "Includes SepsisGuide (SSC-aligned checklist), Early Warning Score (EWS) for automated risk stratification, Glasgow Coma Scale (GCS) tracking, and ST Graphic for quick assessment of ST segment elevations." },
                { title: "Seamless Data Connectivity", text: "HL7-compliant for smooth integration with HIS, LIS, EMR, and PACS. Features K-Link multi-device integration, Central Monitoring via eCenter-CMS, and Dual-OS support (Linux & Windows) for native Windows applications." }
            ],
            
            specifications: {
                "Display": "21.5-inch capacitive touchscreen, Portrait & Landscape modes",
                "Modularity": "Up to 8 slots + Z03 plug-in",
                "Clinical Tools": "SepsisGuide, EWS, GCS, ST Graphic",
                "OS Support": "Dual-OS (Linux & Windows)",
                "Connectivity": "HL7, K-Link, eCenter-CMS integration"
            }
        },
        {
            id: 22,
            name: "K1",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "k1",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_acf13457da.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_acf13457da.png",
                "https://alioss.comen.com/cms-v2/SYO_01763_5f5b5668f0.png",
                "https://alioss.comen.com/cms-v2/A8_D_3852_4dbe465a79.png",
                "https://alioss.comen.com/cms-v2/SYO_02440_8b9d3fa849.png",
                "https://alioss.comen.com/cms-v2/SYO_02494_72504953c1.png"
            ],
            
            short_description: "A highly portable, cutting-edge emergency and transport patient monitor featuring a 5.5-inch touchscreen, 10-hour battery life, and IP44 ingress protection for reliable prehospital and in-hospital care.",
            key_highlights: [
                "5.5-inch capacitive touchscreen with 1280×720 resolution",
                "Conforms to EN1789 out-of-hospital transport standards",
                "IP44 Ingress Protection against dust and water splashes",
                "Up to 10 hours of uninterrupted battery life",
                "Seamless data transfer to K12Pro, K15Pro, K18Pro, K22Pro"
            ],
            
            overview_text: "The K1 is a cutting-edge emergency and transport patient monitor designed for seamless patient care across multiple hospital settings. Whether in the ICU, OR, Emergency Department, or General Ward, the K1 adapts effortlessly to offer robust monitoring solutions for all patient acuities.",
            
            features: [
                { title: "Robust & Portable", text: "Lightweight and compact design makes it easy to carry. Features a 5.5-inch capacitive touchscreen (1280×720) with a robust structure for stability." },
                { title: "Prehospital & In-Hospital Reliability", text: "Conforms to EN1789 out-of-hospital transport standards and features IP44 Ingress Protection against dust and water splashes, ensuring reliability in challenging environments." },
                { title: "Long-Lasting Battery", text: "Operates for up to 10 hours for uninterrupted patient monitoring during transport." },
                { title: "Advanced Clinical Applications", text: "Provides essential measurements (3/5-lead ECG, NIBP, SpO₂, IBP, Temp, Resp) and intelligent Clinical Support Tools like EWS, GCS, SepsisGuide, CCHD, and ECG 24H Summary." },
                { title: "Scalable Advanced Parameters", text: "Available with a module rack & docking station for Hemodynamic Monitoring (Masimo Rainbow SET, IBP, C.O.), Respiratory (Apnea Wake-Up, RM), Neurology (NMT, SedLine, BIS), and Gas Analysis (Anesthetic Gas, EtCO₂)." },
                { title: "Seamless Connectivity", text: "Ensures real-time patient data access via Wi-Fi and wired connectivity. Supports seamless data transfer to K-Pro series monitors and effortless HIS integration via HL7 protocol." }
            ],
            
            specifications: {
                "Display": "5.5-inch capacitive touchscreen (1280×720)",
                "Battery Life": "Up to 10 hours",
                "Transport Standard": "EN1789 Certified",
                "Ingress Protection": "IP44",
                "Connectivity": "Wi-Fi, Wired, HL7, K-Pro series data transfer"
            }
        },
        {
            id: 23,
            name: "NMPro Series",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "nmpro-series",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_54c73e66f6.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_54c73e66f6.png",
                "https://alioss.comen.com/cms-v2/5_9efb843e52.png",
                "https://alioss.comen.com/cms-v2/Screenshot_d00ae0e7_d42a_4a3d_9d28_22d4b9f7840b_476349183c.png",
                "https://alioss.comen.com/cms-v2/12_png_0eff9f5fb8.png",
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
            ],
            
            short_description: "A versatile semi-modular patient monitor featuring high-resolution displays, plug-and-play advanced modules, and comprehensive clinical decision support tools.",
            key_highlights: [
                "The Perfect Blend of Compactness and Modularity",
                "High-resolution display for enhanced sensitivity and clarity",
                "Plug-and-Play Advanced Modules (CO2, C.O., ICG, AG, BIS, NMT, RM)",
                "Integrated Clinical Decision Support (24-hour ECG, SepsisGuide, CCHD, EWS, GCS)",
                "Seamless integration with EMR, HIS, and PACS via standard HL7 protocol"
            ],
            
            overview_text: "The NMPro Series is a semi-modular patient monitor that offers the perfect blend of compactness and modularity. With a high-resolution display and customizable advanced modules, it ensures flexible, accurate, and dynamic patient monitoring across various departments.",
            
            features: [
                { title: "Flexible Monitoring, Smart Support", text: "Provides accurate, essential parameters (ECG, SpO2, temp, NIBP, respiration). Plug-and-play modules allow seamless integration of advanced parameters to meet specific clinical needs." },
                { title: "Comprehensive Decision Support", text: "Integrated clinical tools like 24-hour ECG summaries, SepsisGuide, CCHD, EWS, and GCS recording empower healthcare teams to make informed, timely decisions." },
                { title: "Emergency Department Versatility", text: "Allows for quick customization, providing basic monitoring and rapid integration of advanced modules (e.g., NMT, Masimo Rainbow SET, BIS) for varied patient conditions." },
                { title: "Intensive Care Unit (ICU) Applications", text: "Perfect for continuous, dynamic monitoring. Its modularity enables the addition of advanced parameters for patients with complex conditions." },
                { title: "Operating Room (OR) Decision Making", text: "Supports advanced parameters like NMT, BIS, and AG, providing surgeons with crucial data for circulation, anesthesia, and neuromuscular function." },
                { title: "Seamless Integration into Hospital Systems", text: "Enables real-time transmission of patient data to Central Monitoring Stations (CMS) and seamless integration with EMR, HIS, and PACS via HL7 protocol for enhanced care coordination." }
            ],
            
            specifications: {
                "Display": "High-resolution display for immersive viewing",
                "Modularity": "Semi-modular, Plug-and-Play Advanced Modules",
                "Clinical Tools": "24-hour ECG, SepsisGuide, CCHD, EWS, GCS",
                "Department Uses": "ED, ICU, OR",
                "Connectivity": "HL7, EMR, HIS, PACS, CMS"
            }
        },
        {
            id: 24,
            name: "N Series",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "n-series",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_1dd4ae416c.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_1dd4ae416c.png",
                "https://alioss.comen.com/cms-v2/5_68569a6fa9.png",
                "https://alioss.comen.com/cms-v2/_30d1953c24.png",
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
                "https://alioss.comen.com/cms-v2/4_87296cd048.png"
            ],
            
            short_description: "An intuitive all-in-one patient monitor series featuring high-resolution touchscreens, advanced clinical algorithms, and specialized transport capabilities (N10).",
            key_highlights: [
                "High-Resolution Touchscreen with Smart Brightness Control",
                "Built-in parameters: ECG, NIBP, SpO₂, EtCO₂, Dual-IBP, and C.O.",
                "Integrated Clinical Decision Support (EWS, SepsisGuide, GCS, CCHD)",
                "Advanced SiQ™ Pulse Oximetry and Smart NBP™",
                "N10 Transport Model: EN 1789 certified, 3.65 kg, 6-hour battery"
            ],
            
            overview_text: "The N Series patient monitors inspire simple and intuitive monitoring. Featuring high-resolution touchscreens, advanced clinical algorithms, and a comprehensive all-in-one suite, they are designed to provide complete insight and support robust clinical decision-making.",
            
            features: [
                { title: "Ergonomic, Intuitive Interface", text: "Choose from three screen dimensions to simultaneously view up to 12 traces. Ambient-light sensors automatically adjust screen luminosity, reducing eye strain in dimmed ICUs or bright emergency bays." },
                { title: "All-in-One Monitoring Suite", text: "Delivers compact care with built-in ECG, NIBP, SpO₂, EtCO₂, Dual-IBP, and Cardiac Output—no extra modules required. Features evidence-based tools including EWS, SepsisGuide, GCS, CCHD, 24-hour ECG summary, and 12-lead Glasgow resting analysis." },
                { title: "Advanced Clinical Algorithms", text: "Includes SiQ™ Pulse Oximetry for accurate tracking even in <0.2% perfusion, motion-resistant Smart NBP™ validated down to neonates, and an Enhanced ECG Suite (optional 3/5/6/12-lead, 27-class arrhythmia detection, ST/QT analysis, HRV)." },
                { title: "N10: Designed for Transport", text: "The N10 model weighs just 3.65 kg and offers up to 6 hours of continuous battery life with DC charging. EN 1789 certified with 0.75 m drop resistance, making it ideal for intra-facility transfers and ambulances." },
                { title: "Ready-to-Go Rescue Bag", text: "Securely dock the N10 monitor in its custom-fitted bag. Access all controls without removal for a truly grab-and-run emergency response." }
            ],
            
            specifications: {
                "Display": "High-Resolution Touchscreen (up to 12 traces)",
                "Built-in Parameters": "ECG, NIBP, SpO₂, EtCO₂, Dual-IBP, C.O.",
                "Algorithms": "SiQ™ Pulse Oximetry, Smart NBP™, Enhanced ECG Suite",
                "N10 Transport Features": "3.65 kg, 6-hr battery, EN 1789, 0.75m drop resistance",
                "Clinical Tools": "EWS, SepsisGuide, GCS, CCHD, Glasgow analysis"
            }
        },
        {
            id: 25,
            name: "ND Series",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "nd-series",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_990b628e04.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_990b628e04.png",
                "https://alioss.comen.com/cms-v2/135_ab76dbf4ec.png",
                "https://alioss.comen.com/cms-v2/136_7e9648a374.png",
                "https://alioss.comen.com/cms-v2/5_f2b6acd1a3.png",
                "https://alioss.comen.com/cms-v2/138_ae735326c0.png"
            ],
            
            short_description: "A versatile, user-friendly patient monitor featuring an effortless 3-tap workflow, intelligent clinical support tools, and seamless data connectivity across multiple display sizes.",
            key_highlights: [
                "Effortless 3-tap workflow and swipe interfaces (UI from KProSeries)",
                "Versatile display sizes (10″/12″/15″) with 10° comfort-first tilt",
                "Intelligent Clinical Support: EWS, CCHD, SepsisGuide™, 24h ECG Summary",
                "Portable and wall-mountable design for accessibility everywhere",
                "Unified monitoring via eCenter-CMS and HL7 V2.6 HIS integration"
            ],
            
            overview_text: "The ND Series patient monitor values simplicity while maximizing care. Featuring an effortless 3-tap workflow and versatile display options, it delivers intelligent clinical support and seamless data connectivity for any healthcare environment.",
            
            features: [
                { title: "Effortless Operation", text: "Complete any task within three taps to prevent training overload, using an intuitive UI inherited from the KProSeries. Swipe interfaces allow quick access to four tailored screens." },
                { title: "Clinical Convenience Design", text: "Available in three model sizes (10″/12″/15″) to ensure optimal visibility. A 10° tilt feature provides a clear, glare-free view to reduce caregiver fatigue, while a flip-out cabinet board ensures effortless cable management." },
                { title: "Intelligent Clinical Support", text: "Includes predictive Early Warning Scores (EWS), Critical Congenital Heart Disease (CCHD) screening for neonates, real-time SepsisGuide™ analytics, and 24-hour ECG activity statistics." },
                { title: "Advanced Algorithms & Data Logging", text: "Combines basic and advanced monitoring for predictive risk stratification. Robust data logging helps detect critical conditions like CCHD in neonates." },
                { title: "Accessibility Everywhere", text: "Portable by design with a lightweight form and built-in handle for seamless inter-unit transfers. Can also be securely wall-mounted via a GCX arm to save space and enhance bedside visibility." },
                { title: "Seamless Data Connectivity", text: "Achieve unified monitoring through eCenter-CMS to view and control bedside monitors in real time. Enjoy instant, bi-directional data exchange with your hospital information system via HL7 V2.6 compatibility." }
            ],
            
            specifications: {
                "Display Sizes": "10-inch / 12-inch / 15-inch options with 10° tilt",
                "Interface": "3-tap workflow, Swipe interfaces",
                "Clinical Support": "EWS, CCHD, SepsisGuide™, 24h ECG",
                "Design": "Portable with built-in handle, Wall-mountable (GCX arm)",
                "Connectivity": "eCenter-CMS, HL7 V2.6 bidirectional integration"
            }
        },
        {
            id: 26,
            name: "eCenter-CMS",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "ecenter-cms",
            
            image: "assets/images/products/ecenter-cms-1.png",
            gallery: [
                "assets/images/products/ecenter-cms-1.png",
                "assets/images/products/ecenter-cms-2.png",
                "assets/images/products/ecenter-cms-3.png",
                "assets/images/products/ecenter-cms-4.png"
            ],
            
            short_description: "An all-in-one central monitoring solution offering comprehensive patient oversight across departments via Central Stations, Workstations, web-based View Stations, and Mobile apps.",
            key_highlights: [
                "All-in-one Central Monitoring Solution",
                "Seamless integration across multiple medical devices",
                "Effortless scalability for hospital expansion",
                "Mobile Station for real-time access on smartphones or tablets",
                "Tailored solutions for different roles: IT, managers, and clinicians"
            ],
            
            overview_text: "eCenter-CMS offers unparalleled functionality to healthcare professionals for efficient workflow and centralized monitoring, putting patient information at their fingertips. It enhances responsiveness and ensures timely, accurate medical attention to significantly improve care outcomes.",
            
            features: [
                { title: "Central Station", text: "Tailored for in-depth monitoring in a single department. Empowers you with comprehensive basic operations and diverse interoperability. The unique patient grouping feature categorizes patients based on clinical focus or attending physician." },
                { title: "Workstation", text: "Perfect for facilities with multiple units. Enables patient information to flow across multiple departments, enhancing patient management, multi-bed monitoring, and remote-control functionalities. Supports data review and system management." },
                { title: "View Station", text: "Tailored for IT and hospital administrative workers. Offers a unique web interface for accessing patient monitoring data from multiple network-connected bedside devices directly from an office PC. Features system maintenance for effective management of organizational structures and user roles." },
                { title: "eCenter Viewer", text: "Access real-time patient information from anywhere. Can be positioned in lounges or corridors to display patient information from one or multiple Central Stations, giving managers critical insights to strategically allocate human resources." },
                { title: "Mobile Station", text: "Redefines patient information access on your fingertips. The perfect tool for on-hospital and off-hospital monitoring via smartphone or pad. Enables access to real-time data, reviews, alarms, and trends for informed decisions anywhere." },
                { title: "Seamless Device Integration", text: "Connects multiple medical devices to offer a comprehensive view of patients' status from various sources, moving beyond traditional single-unit monitoring." }
            ],
            
            specifications: {
                "Software Modules": "Central Station, Workstation, View Station, eCenter Viewer, Mobile Station",
                "Integration": "Seamless connection across multiple medical devices",
                "Accessibility": "PC, Web interface, Smartphone/Pad (Mobile Station)",
                "Scalability": "Effortless scalability across departments"
            }
        },
        {
            id: 27,
            name: "NC6 & NC7",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "nc6-and-nc7",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_7431e37775.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_7431e37775.png",
                "https://alioss.comen.com/cms-v2/6_png_0a0f0f6b08.png",
                "https://alioss.comen.com/cms-v2/pic7_76f55aa900.png",
                "https://alioss.comen.com/cms-v2/pic9_e259a715d6.png",
                "https://alioss.comen.com/cms-v2/148_74525ce13f.png"
            ],
            
            short_description: "A fast and precise vital signs monitor offering rapid NIBP, comprehensive respiratory tracking, flexible temperature monitoring, and a dedicated mobile trolley.",
            key_highlights: [
                "fastBP technology delivers readings in <15s with Orthostatic Hypotension detection",
                "plethRESP™ technology for respiratory rate via SpO₂ (NC7 adds EtCO₂)",
                "Flexible temperature monitoring with multiple probe compatibilities",
                "Tailored modes: Spot Check and Continuous Monitoring",
                "Seamless data integration with eCenter-CMS and HL7"
            ],
            
            overview_text: "The COMEN NC6 & NC7 Patient Monitors set a new benchmark in clinical monitoring, offering speed, accuracy, and intelligent support to enhance ward rounds and optimize patient outcomes.",
            
            features: [
                { title: "Precision Vital Signs Tracking", text: "fastBP technology delivers reliable blood pressure readings in under 15 seconds, with automatic detection of Orthostatic Hypotension (OH) for early fall prevention. plethRESP™ provides respiratory rate from SpO₂ signals, while the NC7 adds EtCO₂ monitoring." },
                { title: "Flexible Temperature Monitoring", text: "Compatible with multiple probes and measurement sites (ear, oral, rectal, temporal artery, axillary), ensuring adaptable patient care." },
                { title: "Optimized Clinical Workflow", text: "Choose between Spot Check for quick assessments or Continuous Monitoring for critical care. Features customizable layouts and clinical tools to fit any scenario." },
                { title: "Empowered Informed Interventions", text: "Integrates evidence-based practices such as EWS, GCS, CCHD screening, and Pain Assessment, enabling comprehensive patient evaluation." },
                { title: "Seamless Data Integration", text: "Connect effortlessly with eCenter-CMS and hospital networks via HL7 for real-time data exchange and centralized access." },
                { title: "Dedicated Upgraded Trolley", text: "A custom-designed trolley ensures mobility with a 5000mAh backup battery for continuous monitoring and a quick-release snap-lock mechanism for instant unit connection." },
                { title: "Real-World Deployment Scenarios", text: "General Wards: Mobile trolley and fastBP streamline ward rounds. ER: EWS auto-scoring and continuous respiratory monitoring. Neonatal Units: Dual SpO₂ for CCHD screening. Post-Op: Pain assessment tools." }
            ],
            
            specifications: {
                "NIBP": "fastBP technology (<15s) with OH detection",
                "Respiration": "plethRESP™ (NC6/NC7) and EtCO₂ (NC7 only)",
                "Temperature Sites": "Ear, oral, rectal, temporal artery, axillary",
                "Workflow Modes": "Spot Check, Continuous Monitoring",
                "Mobility": "Upgraded trolley with 5000mAh backup battery"
            }
        },
        {
            id: 28,
            name: "NC5",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "nc5",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_83d69e1747.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_83d69e1747.png",
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
                "https://alioss.comen.com/cms-v2/4_f5cbcd49b4.png"
            ],
            
            short_description: "A highly portable 8-inch vital signs monitor providing precise multi-parameter tracking and enhanced hospital connectivity for dynamic clinical environments.",
            key_highlights: [
                "Portable and lightweight design (2.5 kg) for efficient patient rounding",
                "8-inch TFT LCD color display (800 × 600) showing up to 2 waveforms",
                "Multi-parameter tracking: 3-lead ECG, NIBP, SpO₂, PR, Temp",
                "Extended battery life: ≥8 hours under full charge",
                "Comprehensive connectivity via Star8800 and HL7 integration"
            ],
            
            overview_text: "The NC5 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. It delivers comprehensive patient surveillance with enhanced connectivity and clinical intelligence, designed for dynamic hospital environments.",
            
            features: [
                { title: "Multi-Parameter Precision Monitoring", text: "Includes 3-lead ECG, NIBP, SpO₂ (Masimo, Nellcor, or Comen), Pulse Rate (PR), and Temperature." },
                { title: "High-Quality Display", text: "Features an 8-inch TFT color LCD screen with an 800 × 600 resolution, capable of simultaneously displaying up to 2 waveforms." },
                { title: "Enhanced Portability", text: "Compact (165 × 250 × 165 mm) and lightweight (2.5 kg), making it ideal for medical/surgical wards, clinics, and emergency triage." },
                { title: "Robust Operation & Durability", text: "Offers ≥8 hours of continuous operation under full charge. Features an IPX2 water ingress protection level on the main unit." },
                { title: "Extensive Data Review", text: "Provides 160h of graph/table trends, 200 alarm events review, 2000 sets of NIBP measurement data, and 48h of waveform review." },
                { title: "Comprehensive Connectivity", text: "Integrates seamlessly with Central Monitoring via Star8800 and Hospital Information Systems via HL7. Supports peripheral connectivity with Dual USB ports." }
            ],
            
            specifications: {
                "Display": "8-inch TFT color LCD, 800 × 600 resolution",
                "Parameters": "3-lead ECG, NIBP, SpO₂, PR, Temp",
                "Battery Life": "≥8 hours",
                "Physical Specs": "165 × 250 × 165 mm, 2.5 kg, IPX2 protection",
                "Data Storage": "160h trends, 2000 NIBP sets, 48h waveforms"
            }
        },
        {
            id: 29,
            name: "NC3",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "nc3",
            
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_abb856a601.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/K_pro3_1_abb856a601.png",
                "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
                "https://alioss.comen.com/cms-v2/4_70c5b080fc.png"
            ],
            
            short_description: "An ultra-compact vital signs monitor offering efficient patient rounding with intuitive single-button operation, reliable multi-parameter tracking, and an integrated transport handle.",
            key_highlights: [
                "Ultra-compact and lightweight (130×125×299 mm, 1.25 kg)",
                "Integrated portable handle for easy bedside-to-bedside transport",
                "Tri-brand SpO₂ compatibility (Masimo, Nellcor, Comen)",
                "Single-button NIBP operation with backlight",
                "Extended battery: ≥12 hours standby plus emergency power reserve"
            ],
            
            overview_text: "The NC3 is a portable vital signs monitor designed for efficient patient rounding across medical/surgical wards, clinics, and emergency triage. Its compact design and intuitive operation streamline clinical workflows while ensuring reliable physiological parameter tracking.",
            
            features: [
                { title: "Multi-Parameter Monitoring", text: "Provides essential vital signs tracking including NIBP, SpO₂, Temperature (infrared ear), and Pulse Rate (PR)." },
                { title: "Tri-Brand SpO₂ Compatibility", text: "Supports leading SpO₂ technologies including Masimo, Nellcor, and Comen for flexible and accurate oxygenation tracking." },
                { title: "Ultra-Portability", text: "Features an exceptionally compact size (130 × 125 × 299 mm) and lightweight design (1.25 kg), complete with an integrated handle for effortless bedside-to-bedside transport." },
                { title: "Intuitive Single-Button Operation", text: "Simplifies workflows with a dedicated, backlit start/stop key for NIBP measurements, allowing for immediate and easy operation." },
                { title: "Reliable Data Storage & Durability", text: "Stores up to 50 sets of patient data for quick review. Features an IPX1 degree of ingress protection (without ear thermometer)." },
                { title: "Extended Battery Life", text: "Offers ≥ 12 hours of operation in standby when fully charged. Includes an emergency power reserve that provides an additional five minutes of runtime after the first low-battery alarm." }
            ],
            
            specifications: {
                "Parameters": "NIBP, SpO₂, Temp (infrared ear), PR",
                "SpO₂ Support": "Masimo, Nellcor, Comen",
                "Physical Specs": "130 × 125 × 299 mm, 1.25 kg, IPX1 protection",
                "Battery Life": "≥12 hours (standby), 5-min emergency reserve",
                "Data Storage": "50 sets"
            }
        },
        {
            id: 30,
            name: "CF5 & CF8",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "cf5andcf8",
            
            image: "assets/images/products/cf5-amp-cf8-1.png",
            gallery: [
                "assets/images/products/cf5-amp-cf8-1.png",
                "assets/images/products/cf5-amp-cf8-2.png",
                "assets/images/products/cf5-amp-cf8-3.png",
                "assets/images/products/cf5-amp-cf8-4.png"
            ],
            
            short_description: "Advanced fetal and maternal monitors featuring high-sensitivity 12-crystal transducers, comprehensive CTG scoring, and wireless waterproof options for continuous care.",
            key_highlights: [
                "High-sensitivity 12-crystal transducer for accurate fetal heart tracking",
                "Comprehensive CTG scoring including seven global standards (NRIES, Fischer, Oxford, etc.)",
                "Continuous maternal monitoring (ECG, SpO₂, NIBP, RESP, TEMP)",
                "Wireless and IP68 waterproof transducer options (CF5R & CF8R models)",
                "Seamless data integration with HL7, built-in network printers, and scanners"
            ],
            
            overview_text: "The Comen CF Series fetal and maternal monitors are designed to deliver high-quality, continuous monitoring with precision and reliability for both maternal and fetal well-being. With advanced technology and user-friendly features, these monitors ensure optimal care for expectant mothers and their babies.",
            
            features: [
                { title: "Advanced Monitoring Technology", text: "Provides high sensitivity and stability with a 12-crystal transducer for fetal heart rate monitoring. The fetal heart signal indicator ensures accurate tracking even in challenging conditions." },
                { title: "Comprehensive Maternal Assessment", text: "Continuously monitors maternal ECG, SpO₂, NIBP, RESP, and TEMP alongside fetal care to provide a complete and comprehensive patient assessment." },
                { title: "Global CTG Scoring", text: "Includes comprehensive CTG scoring using seven global standards (such as NRIES, Fischer, and Oxford) for robust and reliable assessment." },
                { title: "Wireless & Waterproof Design", text: "The CF5R and CF8R models feature wireless transducers to enhance patient comfort and support seamless transfers. The transducers are IP68 waterproof, ensuring reliable performance even in underwater labor situations." },
                { title: "Hidden Handle Aesthetics", text: "Combines functionality with aesthetics through a concealed handle, allowing for easy portability while maintaining a sleek appearance in maternity clinics and hospitals." },
                { title: "Seamless Data Integration", text: "Supports HL7 for easy integration with hospital networks, ensuring smooth data flow. Built-in network printers and scanner compatibility enable quick and efficient data management." }
            ],
            
            specifications: {
                "Fetal Monitoring": "12-crystal transducer, Fetal heart signal indicator",
                "Maternal Parameters": "ECG, SpO₂, NIBP, RESP, TEMP",
                "CTG Scoring": "7 global standards (NRIES, Fischer, Oxford, etc.)",
                "Transducer": "Wireless and IP68 waterproof (CF5R & CF8R)",
                "Connectivity": "HL7, Network printer, Scanner compatible"
            }
        },
        {
            id: 31,
            name: "H300 & H301",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "h300-and-h301",
            
            image: "assets/images/products/h300-amp-h301-1.png",
            gallery: [
                "assets/images/products/h300-amp-h301-1.png",
                "assets/images/products/h300-amp-h301-2.png",
                "assets/images/products/h300-amp-h301-3.png",
                "assets/images/products/h300-amp-h301-4.png"
            ],
            
            short_description: "Ultra-portable electrocardiographs weighing under 1.3kg, featuring an extended 9-hour battery, real-time signal quality monitoring, and seamless hospital IT connectivity.",
            key_highlights: [
                "Smaller, lighter, better: Weighs <1.3kg and under 6cm thick",
                "Extended 9-hour battery life for continuous operation",
                "Real-time Signal Quality Monitoring with color-coded feedback",
                "Automatic lead-off and electrode reversal detection",
                "Seamless connectivity (Email, SFTP, FTP, HTTPS, SAMBA)"
            ],
            
            overview_text: "The H300 & H301 electrocardiographs combine a lightweight, ultra-portable design with software-driven signal quality protection. They ensure trustworthy results wherever you are, supporting continuous operation with extended battery life and seamless hospital integration.",
            
            features: [
                { title: "Lightweight & Portable Design", text: "Weighs less than 1.3kg and is under 6cm thick, allowing it to be easily held in hand for effortless portability across clinical environments." },
                { title: "Extended Battery Life", text: "Features an extended 9-hour battery life that supports continuous operation and allows for simultaneous charging during use." },
                { title: "Real-Time Signal Quality Monitoring", text: "Utilizes color-coded indicators (green/yellow/red) to provide intuitive, real-time feedback on signal quality, ensuring clear and reliable ECG data." },
                { title: "Advanced User Error Protection", text: "Automatically detects lead-off events and electrode reversal, providing real-time popup alerts to minimize operational errors and improve data reliability." },
                { title: "Integrated Connectivity", text: "Supports a wide range of secure data transfer methods—including Email, SFTP, FTP, HTTPS, and SAMBA—for flexible integration with diverse hospital IT workflows." }
            ],
            
            specifications: {
                "Physical Specs": "<1.3 kg weight, <6 cm thickness",
                "Battery Life": "9 hours (continuous operation & charging)",
                "Signal Quality": "Color-coded indicators, Lead-off/reversal detection",
                "Data Transfer": "Email, SFTP, FTP, HTTPS, SAMBA"
            }
        },
        {
            id: 32,
            name: "H1200",
            brand: "COMEN",
            category: "Patient Monitoring",
            custom_url: "h1200",
            
            image: "https://alioss.comen.com/cms-v2/H300_1_1_e003286035.png",
            gallery: [
                "https://alioss.comen.com/cms-v2/H300_1_1_e003286035.png",
                "https://alioss.comen.com/cms-v2/9_H1200_20x_8_1_8d556d25be.png",
                "https://alioss.comen.com/cms-v2/10_H1200_20x_8_1_0360192e96.png",
                "https://alioss.comen.com/cms-v2/11_H1200_20x_8_1_e7a0753ab6.png",
                "https://alioss.comen.com/cms-v2/12_H1200_20x_8_1_37ed42cdfd.png"
            ],
            
            short_description: "An advanced electrocardiograph featuring an alphanumeric keyboard, IPX1 waterproof protection, real-time signal quality monitoring, and comprehensive diagnostic analysis.",
            key_highlights: [
                "Convenient input with an alphanumeric keyboard and shortcut controls",
                "IPX1 waterproof protection",
                "Real-time Signal Quality Monitoring with color-coded feedback",
                "Automatic lead-off and electrode reversal detection",
                "Comprehensive diagnostic tools: VCG, HRV, and ST Segment Graphic Analysis"
            ],
            
            overview_text: "The H1200 Electrocardiograph redefines precision and simplifies care. It features convenient input controls, advanced signal quality monitoring, and robust diagnostic analysis tools designed to empower digital healthcare connectivity.",
            
            features: [
                { title: "Precision Redefined, Care Simplified", text: "Features convenient input and extensive shortcut controls with an integrated alphanumeric keyboard, all protected by an IPX1 waterproof rating." },
                { title: "Advanced Signal Control & Review", text: "Real-time Signal Quality Monitoring provides intuitive color-coded feedback (green/yellow/red). Automatic lead-off and electrode reversal detection trigger real-time popup alerts to minimize user errors and improve data reliability." },
                { title: "Robust Diagnostic Analysis", text: "Equipped with advanced diagnostic tools including Vectorcardiography (VCG), Heart Rate Variability (HRV) Analysis, and ST Segment Graphic Analysis." },
                { title: "Empowering Digital Healthcare", text: "Provides seamless connectivity to support smarter ECG workflows and centralized data management within modern hospital networks." }
            ],
            
            specifications: {
                "Interface": "Alphanumeric keyboard with shortcut controls",
                "Protection Rating": "IPX1 waterproof",
                "Signal Quality": "Color-coded indicators, Lead-off/reversal detection",
                "Diagnostic Tools": "VCG, HRV Analysis, ST Segment Graphic Analysis",
                "Connectivity": "Digital Healthcare Connectivity"
            }
        },
            {
            id: 33,
            name: "S80",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            description: "",
            image: "https://alioss.comen.com/cms-v2/S80_1_0b805d3727.png",
            price: 55890,
            images: [
            "https://alioss.comen.com/cms-v2/S80_1_0b805d3727.png",
            "https://alioss.comen.com/cms-v2/16_3_1_3ee94b8947.png",
            "https://alioss.comen.com/cms-v2/15_1_1_93b4472e6e.png",
            "https://alioss.comen.com/cms-v2/18_2_5682ccbfe0.png",
            "https://alioss.comen.com/cms-v2/17_2_36a2d7a710.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/11_1_6_3ac47918d4.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/12_2_1_6ea1c91420.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/22_1_1_bb5f8a602d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/18_1_2_d42faeb29d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/16_2_1_0eb59daafb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 34,
            name: "S50",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            description: "",
            image: "https://alioss.comen.com/cms-v2/DSC_07626_1_1_35fad92ca4.png",
            price: 190763,
            images: [
            "https://alioss.comen.com/cms-v2/DSC_07626_1_1_35fad92ca4.png",
            "https://alioss.comen.com/cms-v2/DSC_03750_1_86a0954bad.png",
            "https://alioss.comen.com/cms-v2/11_1_5_6519c1d681.png",
            "https://alioss.comen.com/cms-v2/12_1_5_3509558bf3.png",
            "https://alioss.comen.com/cms-v2/13_1_2_40dd4ec77f.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_1_2_2e72366d09.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/16_1_2_7f9926e6aa.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/18_1_1_1600ea6a7a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/16_2_7fa5552762.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 35,
            name: "S8",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            description: "",
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_4a0d97d5ab.png",
            price: 124264,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/K_pro3_1_4a0d97d5ab.png",
            "https://alioss.comen.com/cms-v2/113_320662e3ea.png",
            "https://alioss.comen.com/cms-v2/13_3x_081c8850ca.png",
            "https://alioss.comen.com/cms-v2/108_5821d2ff7a.png",
            "https://alioss.comen.com/cms-v2/114_09183ac2f0.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/115_020557f16d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/4_2622c4efc8.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 36,
            name: "S5",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            description: "",
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_83ce2adb8c.png",
            price: 103928,
            images: [
            "https://alioss.comen.com/cms-v2/K_pro3_1_83ce2adb8c.png",
            "https://alioss.comen.com/cms-v2/A8_D_3550_1_d9952c6a28.png",
            "https://alioss.comen.com/cms-v2/A8_D_3483_b1e4f5a1bf.png",
            "https://alioss.comen.com/cms-v2/_aeaf42bf4b.png",
            "https://alioss.comen.com/cms-v2/image_png_a27715a6ad.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/4_ae5663e9fb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 37,
            name: "S1",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            description: "",
            image: "https://alioss.comen.com/cms-v2/K_pro3_1_9da36277fa.png",
            price: 66900,
            images: [
            "https://alioss.comen.com/cms-v2/K_pro3_1_9da36277fa.png",
            "https://alioss.comen.com/cms-v2/A8_D_3550_f0a6f708bb.png",
            "https://alioss.comen.com/cms-v2/A8_D_3550_1_502414c275.png",
            "https://alioss.comen.com/cms-v2/_3601d8fc5b.png",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/4_c65862004d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 38,
            name: "F3/F5",
            brand: "COMEN",
            category: "AED",
            description: "",
            image: "https://alioss.comen.com/cms-v2/3_1_3_1cdf80fab2.png",
            price: 103017,
            images: [
            "https://alioss.comen.com/cms-v2/3_1_3_1cdf80fab2.png",
            "https://alioss.comen.com/cms-v2/1_1_6_d4a8989f23.png",
            "https://alioss.comen.com/cms-v2/3_2_6_a5089afada.png",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png",
            "https://alioss.comen.com/cms-v2/4_1_2_6b93cf10c2.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/DSC_03294_1_8eb702b0bb.png&#x27;) no-repeat center center / cover\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/F3_F5_5d78da38c6.pdf\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/DSC_03294_1_8eb702b0bb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 39,
            name: "G Series",
            brand: "COMEN",
            category: "AED",
            description: "",
            image: "https://alioss.comen.com/cms-v2/18_10x_1_d2bf247a05.png",
            price: 56179,
            images: [
            "https://alioss.comen.com/cms-v2/18_10x_1_d2bf247a05.png",
            "https://alioss.comen.com/cms-v2/22_10x_1_bd7b3a69bc.png",
            "https://alioss.comen.com/cms-v2/21_10x_1_cd5362a59d.png",
            "https://alioss.comen.com/cms-v2/329_70c4f25e7e.png",
            "https://alioss.comen.com/cms-v2/25_1fa39309a7.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/20_a96c6a9316.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/16_ffa710e7a1.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/21_5c9a8ef625.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/22_1a25658570.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/333_e31be6ef6a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 40,
            name: "F Series",
            brand: "COMEN",
            category: "AED",
            description: "",
            image: "https://alioss.comen.com/cms-v2/233_b9a9bfefeb.png",
            price: 93366,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/233_b9a9bfefeb.png",
            "https://alioss.comen.com/cms-v2/107_806208f27c.png",
            "https://alioss.comen.com/cms-v2/105_3fde470632.png",
            "https://alioss.comen.com/cms-v2/106_1_320bf0e6df.png",
            "https://alioss.comen.com/cms-v2/234_ab3300c26a.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/108_dcefc28fbb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/112_96e49d2f8f.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/4_2eda76e8c5.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 41,
            name: "ES-Series",
            brand: "COMEN",
            category: "AED",
            description: "",
            image: "https://alioss.comen.com/cms-v2/17_3_3ae09fde9b.png",
            price: 57961,
            images: [
            "https://alioss.comen.com/cms-v2/17_3_3ae09fde9b.png",
            "https://alioss.comen.com/cms-v2/12_NV_10_20x_8_1_7fe91e2b30.png",
            "https://alioss.comen.com/cms-v2/13_NV_10_20x_8_1_5d4c7a81f5.png",
            "https://alioss.comen.com/cms-v2/AI_t_psd_NV_10_20x_8_1_a5109f8bce.png",
            "https://alioss.comen.com/cms-v2/352_1_bfadbc23c8.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/1_2a2b6fe93d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/104_2_c0a0f8949b.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/1_psd_1_ee1f8d5e74.png)\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/401_c58fcf905a.png)\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 42,
            name: "L9",
            brand: "COMEN",
            category: "Surgical Light",
            description: "",
            image: "https://alioss.comen.com/cms-v2/l9_261ad57c0c.png",
            price: 42373,
            images: [
            "https://alioss.comen.com/cms-v2/l9_261ad57c0c.png",
            "https://alioss.comen.com/cms-v2/419_8db3a74b9f.png",
            "https://alioss.comen.com/cms-v2/420_53478c1d1a.png",
            "https://alioss.comen.com/cms-v2/protection_Mode_1_6a19cfdd65.png",
            "https://alioss.comen.com/cms-v2/421_df7489ef41.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/green_b9a7aa1082.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/white_366b0aaedd.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/blue_3a1c9ef621.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/surgical_Light_a2d56a3ae7.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/spot_fc8c538892.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 43,
            name: "L5",
            brand: "COMEN",
            category: "Surgical Light",
            description: "",
            image: "https://alioss.comen.com/cms-v2/3_f2f88bfe56.png",
            price: 150688,
            images: [
            "https://alioss.comen.com/cms-v2/3_f2f88bfe56.png",
            "https://alioss.comen.com/cms-v2/7_7e48633792.png",
            "https://alioss.comen.com/cms-v2/275_9e2f01b042.png",
            "https://alioss.comen.com/cms-v2/279_e74d31d3df.png",
            "https://alioss.comen.com/cms-v2/339_e9fd48b8cd.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/338_efd3789783.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/282_3c8631c95c.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/285_54f27a2e9d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/284_116a85c070.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/283_7cedfab773.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 44,
            name: "L3",
            brand: "HugeMed",
            category: "Surgical Light",
            description: "",
            image: "https://alioss.comen.com/cms-v2/265_7c855b7d8b.png",
            price: 158000,
            images: [
            "https://alioss.comen.com/cms-v2/265_7c855b7d8b.png",
            "https://alioss.comen.com/cms-v2/266_6d6fa00b32.png",
            "https://alioss.comen.com/cms-v2/302_417c8acc1c.png",
            "https://alioss.comen.com/cms-v2/268_ceb1a93dd2.png",
            "https://alioss.comen.com/cms-v2/339_e9fd48b8cd.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/338_efd3789783.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/274_6bc3f95cb6.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/273_ce502d3567.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/272_3e3901a7b0.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/271_f54ddf869e.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 45,
            name: "WE1/WE2",
            brand: "COMEN",
            category: "Operating Table",
            description: "",
            image: "https://alioss.comen.com/cms-v2/pic1_f5334ad7a4.png",
            price: 92255,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/pic1_f5334ad7a4.png",
            "https://alioss.comen.com/cms-v2/300_abf0f2d418.png",
            "https://alioss.comen.com/cms-v2/pic4_28e257828a.png",
            "https://alioss.comen.com/cms-v2/pic5_d367f7b622.png",
            "https://alioss.comen.com/cms-v2/pic6_d26b465e35.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/pic7_d99d1dec7a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/309_5242ad91a1.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/307_c01bbe9f0e.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/308_ddf0a11268.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/306_4b3271bbe6.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 46,
            name: "WH1/WH2",
            brand: "COMEN",
            category: "Operating Table",
            description: "",
            image: "https://alioss.comen.com/cms-v2/pic1_f5334ad7a4.png",
            price: 116372,
            images: [
            "https://alioss.comen.com/cms-v2/pic1_f5334ad7a4.png",
            "https://alioss.comen.com/cms-v2/320_2817f6d824.png",
            "https://alioss.comen.com/cms-v2/300_abf0f2d418.png",
            "https://alioss.comen.com/cms-v2/pic4_28e257828a.png",
            "https://alioss.comen.com/cms-v2/pic5_d367f7b622.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/pic6_d26b465e35.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/pic7_d99d1dec7a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/309_5242ad91a1.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/307_c01bbe9f0e.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/308_ddf0a11268.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 47,
            name: "W5/W3",
            brand: "COMEN",
            category: "Operating Table",
            description: "",
            image: "https://alioss.comen.com/cms-v2/387_da4300cb01.png",
            price: 195783,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/387_da4300cb01.png",
            "https://alioss.comen.com/cms-v2/389_6bc9414e75.png",
            "https://alioss.comen.com/cms-v2/392_d80fa71372.png",
            "https://alioss.comen.com/cms-v2/393_d63da35da7.png",
            "https://alioss.comen.com/cms-v2/391_cd322149da.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/390_ebdbb4f722.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/395_3034a15e1d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/397_fb365abd8a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/398_0981b40981.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 48,
            name: "BQ80",
            brand: "COMEN",
            category: "Warmer",
            description: "",
            image: "https://alioss.comen.com/cms-v2/Image0004_1_6b56039ff1.png",
            price: 54599,
            images: [
            "https://alioss.comen.com/cms-v2/Image0004_1_6b56039ff1.png",
            "https://alioss.comen.com/cms-v2/237_1_a769d648bf.png",
            "https://alioss.comen.com/cms-v2/57cbadffa0fc60bc647f6203080efa88_1_f1b63bdaa1.png",
            "https://alioss.comen.com/cms-v2/1_10x_1_e22f0d19df.png",
            "https://alioss.comen.com/cms-v2/31_ff5da9ead4.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/32_668d15004f.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/3_10x_8_1_ab72debe63.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/33_f44b537688.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/34_bdc5a9e87a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/35_1c7f98f905.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 49,
            name: "B10",
            brand: "COMEN",
            category: "Incubator",
            description: "",
            image: "https://alioss.comen.com/cms-v2/B10_1_455907b364.png",
            price: 46808,
            images: [
            "https://alioss.comen.com/cms-v2/B10_1_455907b364.png",
            "https://alioss.comen.com/cms-v2/1_1_88b323ef16.png",
            "https://alioss.comen.com/cms-v2/312_51a5079a5d.png",
            "https://alioss.comen.com/cms-v2/13_10x_8_2_cd10d2ee58.png",
            "https://alioss.comen.com/cms-v2/14_10x_8_2_00533b38f2.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/310_1_f19f2c1b21.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/311_1febe92819.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/13_2x_8_1_ae0b00cd8a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/43_3_131f480ec8.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/43_9a38d3076d.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 50,
            name: "B3",
            brand: "COMEN",
            category: "Incubator",
            description: "",
            image: "https://alioss.comen.com/cms-v2/b3_product_d088428062.png",
            price: 125293,
            images: [
            "https://alioss.comen.com/cms-v2/b3_product_d088428062.png",
            "https://alioss.comen.com/cms-v2/b3_temperature_chart_5c5cb7c08b.png",
            "https://alioss.comen.com/cms-v2/b3_sensor_collector_b4a2e826db.png",
            "https://alioss.comen.com/cms-v2/b3_thermal_airflow_d85a6f8fa7.png",
            "https://alioss.comen.com/cms-v2/b3_water_tank_e99a6cf5a8.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/b3_apnea_rescue_b179a63929.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/b3_electric_bed_e37ed7f193.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/b3_electric_bed_control_544c05357f.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/b3_damper_door_8702882429.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 51,
            name: "B6/B8",
            brand: "COMEN",
            category: "Incubator",
            description: "",
            image: "https://alioss.comen.com/cms-v2/c3dc99bf5afbede4058b5a2716b4c03c_1_bb18845887.png",
            price: 106398,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/c3dc99bf5afbede4058b5a2716b4c03c_1_bb18845887.png",
            "https://alioss.comen.com/cms-v2/222_04053fd357.png",
            "https://alioss.comen.com/cms-v2/226_6bad189582.png",
            "https://alioss.comen.com/cms-v2/224_172dcf7e4b.png",
            "https://alioss.comen.com/cms-v2/225_6abdf357fb.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/eed34d55224f05c25a0723f4d3ded7aa_1_137c488275.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/227_50f0f72da3.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/1_10x_8_1_beabb3f5b8.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/231_73763468b6.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/230_bdb491bdf9.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 52,
            name: "BT800",
            brand: "COMEN",
            category: "Incubator",
            description: "",
            image: "https://alioss.comen.com/cms-v2/218_17814f6b30.png",
            price: 61556,
            images: [
            "https://alioss.comen.com/cms-v2/218_17814f6b30.png",
            "https://alioss.comen.com/cms-v2/219_802d0a6675.png",
            "https://alioss.comen.com/cms-v2/220_707f9c7256.png",
            "https://alioss.comen.com/cms-v2/216_852794265a.png",
            "https://alioss.comen.com/cms-v2/217_c9d8e796c3.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/1_d28cc8165b.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 53,
            name: "P3/P6",
            brand: "COMEN",
            category: "Hypothermia Treatment",
            description: "",
            image: "https://alioss.comen.com/cms-v2/113_7c7d205f5b.png",
            price: 170304,
            images: [
            "https://alioss.comen.com/cms-v2/113_7c7d205f5b.png",
            "https://alioss.comen.com/cms-v2/105_fcd0cff784.png",
            "https://alioss.comen.com/cms-v2/1061_f7fbc15019.png",
            "https://alioss.comen.com/cms-v2/108_f0aeca4bcc.png",
            "https://alioss.comen.com/cms-v2/276_3_368ebc82b8.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/2_92edc7aced.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/276_9b0fc8012e.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/214_22aebbcd00.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/215_6d9784abc3.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 54,
            name: "BL20",
            brand: "COMEN",
            category: "Jaundice Treatment",
            description: "",
            image: "https://alioss.comen.com/cms-v2/3dbbd414891ce5e2133681640627980_4b56d0e483.png",
            price: 193908,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/3dbbd414891ce5e2133681640627980_4b56d0e483.png",
            "https://alioss.comen.com/cms-v2/2_aa51f7a9dd.png",
            "https://alioss.comen.com/cms-v2/1_1_b91388ce64.png",
            "https://alioss.comen.com/cms-v2/3_c7f8c43655.png",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/2_37af1c74fc.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 55,
            name: "BL60",
            brand: "COMEN",
            category: "Jaundice Treatment",
            description: "",
            image: "https://alioss.comen.com/cms-v2/250_e403852a09.png",
            price: 75899,
            images: [
            "https://alioss.comen.com/cms-v2/250_e403852a09.png",
            "https://alioss.comen.com/cms-v2/252_84297727f5.png",
            "https://alioss.comen.com/cms-v2/253_48eef2ba7f.png",
            "https://alioss.comen.com/cms-v2/254_8b7b2de845.png",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/BL_60_1_359024f14b.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 56,
            name: "MX8900/M800/ME900",
            brand: "COMEN",
            category: "Infusion System",
            description: "",
            image: "https://alioss.comen.com/cms-v2/198_f8b4e17cb0.png",
            price: 64561,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/198_f8b4e17cb0.png",
            "https://alioss.comen.com/cms-v2/203_5940b3a709.png",
            "https://alioss.comen.com/cms-v2/267_478ff9f283.png",
            "https://alioss.comen.com/cms-v2/268_6d7727c4d7.png",
            "https://alioss.comen.com/cms-v2/201_55a2b71359.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/202_a2e1a9c86c.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/204_e8acbb10af.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/283_f86f094a09.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/208_fe36681684.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/212_4ce03993da.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 57,
            name: "ME660/M260",
            brand: "COMEN",
            category: "Infusion System",
            description: "",
            image: "https://alioss.comen.com/cms-v2/255_306c2de584.png",
            price: 146854,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/255_306c2de584.png",
            "https://alioss.comen.com/cms-v2/3_6b73c6332d.png",
            "https://alioss.comen.com/cms-v2/269_9701380706.png",
            "https://alioss.comen.com/cms-v2/270_3a583db742.png",
            "https://alioss.comen.com/cms-v2/259_ba357e2fac.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/263_3a07ebe6f8.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/262_b38c1add11.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/264_35d1996dec.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/261_462a578d57.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/260_3db4280b5a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 58,
            name: "EIS-2000",
            brand: "COMEN",
            category: "Endoscopy",
            description: "",
            image: "assets/images/products/eis-2000-1.png",
            price: 57969,
            images: [
            "assets/images/products/eis-2000-1.png",
            "assets/images/products/eis-2000-2.png",
            "assets/images/products/eis-2000-3.png",
            "assets/images/products/eis-2000-4.png"
        ],
            features: [
            
        ]
        },
            {
            id: 59,
            name: "CVL Series",
            brand: "COMEN",
            category: "Endoscopy",
            description: "",
            image: "https://alioss.comen.com/cms-v2/399_a79ccc8cc8.png",
            price: 132039,
            images: [
            "https://alioss.comen.com/cms-v2/399_a79ccc8cc8.png",
            "https://alioss.comen.com/cms-v2/400_fac6d76e59.png",
            "https://alioss.comen.com/cms-v2/image_png_ec295d2041.png",
            "https://alioss.comen.com/cms-v2/317_941da8d797.png",
            "https://alioss.comen.com/cms-v2/2_4_af61c8c1ce.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/3_3_1_fac8bba1bc.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/8_f3d48827af.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 60,
            name: "EP50",
            brand: "COMEN",
            category: "Ultrasound",
            description: "",
            image: "https://alioss.comen.com/cms-v2/11_10x_1_82a3a94f75.png",
            price: 167989,
            images: [
            "https://alioss.comen.com/cms-v2/11_10x_1_82a3a94f75.png",
            "https://alioss.comen.com/cms-v2/342_1_7cdee36ce2.png",
            "https://alioss.comen.com/cms-v2/EP_50_1_d36118899b.png",
            "https://alioss.comen.com/cms-v2/343_1_c1c765fe61.png",
            "https://alioss.comen.com/cms-v2/30_10x_1_a3dd92c589.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/32_10x_1_62d9435de5.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/319_ea31308cfa.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/12_3_1_712e4d19db.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/15_2_2_6492d88c0a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/13_2_8b79e47534.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ],
            features: [
            
        ]
        },
            {
            id: 61,
            name: "CF9600",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/1_1_0f5e290955.png",
            price: 197949,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/1_1_0f5e290955.png",
            "https://alioss.comen.com/cms-v2/2_1_07f9ef282b.png",
            "https://alioss.comen.com/cms-v2/5_1_1_e1d008b584.png",
            "https://alioss.comen.com/cms-v2/EN_1_1_c5a4d9ecde.png",
            "https://alioss.comen.com/cms-v2/3_2_1_9d4de6ff2c.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/changjing1_EN_1_dfde00e5db.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 62,
            name: "CH8600",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/8600_EN_1_2236a37243.png",
            price: 147414,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/8600_EN_1_2236a37243.png",
            "https://alioss.comen.com/cms-v2/10_f9ebc9b544.png",
            "https://alioss.comen.com/cms-v2/11_c6d26bee7d.png",
            "https://alioss.comen.com/cms-v2/image_3_bcf4380c9c.png",
            "https://alioss.comen.com/cms-v2/3_2_1_9d4de6ff2c.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/9_ce8de5d3e6.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 63,
            name: "CH8600CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/EN_CH_8600_CRP_ac91199483_693ba0323f.jpeg",
            price: 186460,
            images: [
            "https://alioss.comen.com/cms-v2/EN_CH_8600_CRP_ac91199483_693ba0323f.jpeg",
            "https://alioss.comen.com/cms-v2/CH_8600_CRP_f954f6cfd3_337584ea32.jpeg",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            features: [
            
        ]
        },
            {
            id: 64,
            name: "CH8500",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/CH_8500_EN_1_d5208e03f1.png",
            price: 176154,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/CH_8500_EN_1_d5208e03f1.png",
            "https://alioss.comen.com/cms-v2/12_315a9fb118.png",
            "https://alioss.comen.com/cms-v2/19_1baeb9404f.png",
            "https://alioss.comen.com/cms-v2/18_265f49cba7.png",
            "https://alioss.comen.com/cms-v2/20_d3304ee2e3.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/21_9671a5ddbb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/3_2_1_9d4de6ff2c.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/8500_EN_1_bca26ced0a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 65,
            name: "CH8500-V Series",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/CH_8500_EN_1_d5208e03f1.png",
            price: 144551,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/CH_8500_EN_1_d5208e03f1.png",
            "https://alioss.comen.com/cms-v2/12_315a9fb118.png",
            "https://alioss.comen.com/cms-v2/19_1baeb9404f.png",
            "https://alioss.comen.com/cms-v2/18_265f49cba7.png",
            "https://alioss.comen.com/cms-v2/20_d3304ee2e3.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/21_9671a5ddbb.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/3_2_1_9d4de6ff2c.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/8500_EN_1_bca26ced0a.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 66,
            name: "CH8500CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/CH_8500_CRP_EN_3c24c30341_ed46414a44.webp",
            price: 140707,
            images: [
            "https://alioss.comen.com/cms-v2/CH_8500_CRP_EN_3c24c30341_ed46414a44.webp",
            "https://alioss.comen.com/cms-v2/CH_8500_CRP_6e5e64b3f7_9cefcfcdd9.jpeg",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            features: [
            
        ]
        },
            {
            id: 67,
            name: "CH8300",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/8300_EN_1_125b7ef083.png",
            price: 179542,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/8300_EN_1_125b7ef083.png",
            "https://alioss.comen.com/cms-v2/image_1_5_be446b34f8.png",
            "https://alioss.comen.com/cms-v2/4_2_2_252d8716d2.png",
            "https://alioss.comen.com/cms-v2/17_d0539f71c6.png",
            "https://alioss.comen.com/cms-v2/3_2_1_9d4de6ff2c.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/8300_1_d5eeef23cd.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 68,
            name: "CH8300CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/8300_CRP_EN_1_fee670492c.png",
            price: 32408,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/8300_CRP_EN_1_fee670492c.png",
            "https://alioss.comen.com/cms-v2/5_2_efda25dd72.png",
            "https://alioss.comen.com/cms-v2/1_5_1_bc9fa641ef.png",
            "https://alioss.comen.com/cms-v2/3_2_1_4_bc63b9841d.png",
            "https://alioss.comen.com/cms-v2/17_6f219e8678.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/8300_1_1_394ec872b2.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 69,
            name: "CH8310",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            description: "",
            image: "https://alioss.comen.com/cms-v2/CH_8310_1_1_22e2f41ab3.png",
            price: 107705,
            features: [
            
        ],
            images: [
            "https://alioss.comen.com/cms-v2/CH_8310_1_1_22e2f41ab3.png",
            "https://alioss.comen.com/cms-v2/image_1_6_011ee9a31d.png",
            "https://alioss.comen.com/cms-v2/jubu_1_5ace88ead2.png",
            "https://alioss.comen.com/cms-v2/2_2_1_e56027eaed.png",
            "https://alioss.comen.com/cms-v2/18ujoa_2_83558310d9.png"
        ],
            advancedSections: [
            {
            title: "Process Explanations & Details",
            points: [
            "<img src=\"https://alioss.comen.com/cms-v2/3_2_1_3_03761755ef.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/17_6f219e8678.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\"><img src=\"https://alioss.comen.com/cms-v2/8310_2_9b1b4015f2.png\" style=\"width:100%; border-radius:8px; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);\">"
        ]
        }
        ]
        },
            {
            id: 100,
            name: "Bassinets",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 10000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Bassinets",
            description: "",
            features: [
            
        ]
        },
            {
            id: 101,
            name: "Hybrid Intensive Care Unit",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 250000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Hybrid+Intensive+Care+Unit",
            description: "",
            features: [
            
        ]
        },
            {
            id: 102,
            name: "Infant Incubators",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 120000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Infant+Incubators",
            description: "",
            features: [
            
        ]
        },
            {
            id: 103,
            name: "Infant Warmer and Total Care",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 150000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Infant+Warmer",
            description: "",
            features: [
            
        ]
        },
            {
            id: 104,
            name: "Neonatal Bubble CPAP",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 80000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Bubble+CPAP",
            description: "",
            features: [
            
        ]
        },
            {
            id: 105,
            name: "Neonatal Humidifier",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 40000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Humidifier",
            description: "",
            features: [
            
        ]
        },
            {
            id: 106,
            name: "Neonatal Resuscitator",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 45000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Resuscitator",
            description: "",
            features: [
            
        ]
        },
            {
            id: 107,
            name: "Oxygen Therapy",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 30000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Oxygen+Therapy",
            description: "",
            features: [
            
        ]
        },
            {
            id: 108,
            name: "Phototherapy",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 150000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Phototherapy",
            description: "",
            features: [
            
        ]
        },
            {
            id: 109,
            name: "Transport Incubators",
            brand: "FANEM",
            category: "Neonatal Care",
            price: 180000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Transport+Incubators",
            description: "",
            features: [
            
        ]
        },
            {
            id: 110,
            name: "Single-use Rhinolaryngoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 5000,
            image: "assets/images/products/single-use-rhinolaryngoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/single-use-rhinolaryngoscope-1.jpg",
            "assets/images/products/single-use-rhinolaryngoscope-2.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 111,
            name: "Single-use Choledochoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 6000,
            image: "assets/images/products/single-use-choledochoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/single-use-choledochoscope-1.jpg",
            "assets/images/products/single-use-choledochoscope-2.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 112,
            name: "Single-use Duodenoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 6500,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Duodenoscope",
            description: "",
            features: [
            
        ]
        },
            {
            id: 113,
            name: "Single-use Bronchoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 5500,
            image: "assets/images/products/single-use-bronchoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/single-use-bronchoscope-1.jpg",
            "assets/images/products/single-use-bronchoscope-2.jpg",
            "assets/images/products/single-use-bronchoscope-3.jpg",
            "assets/images/products/single-use-bronchoscope-4.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 114,
            name: "Single-use Collector",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 1000,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Collector",
            description: "",
            features: [
            
        ]
        },
            {
            id: 115,
            name: "Broncho Sampler",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 1200,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Broncho+Sampler",
            description: "",
            features: [
            
        ]
        },
            {
            id: 116,
            name: "Single-use Ureterorenoscope HU30M",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 7000,
            image: "assets/images/products/single-use-ureterorenoscope-hu30m-1.jpg",
            description: "",
            images: [
            "assets/images/products/single-use-ureterorenoscope-hu30m-1.jpg",
            "assets/images/products/single-use-ureterorenoscope-hu30m-2.png",
            "assets/images/products/single-use-ureterorenoscope-hu30m-3.jpg",
            "assets/images/products/single-use-ureterorenoscope-hu30m-4.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 117,
            name: "Single-use Ureterorenoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 6800,
            image: "assets/images/products/single-use-ureterorenoscope-1.png",
            description: "",
            images: [
            "assets/images/products/single-use-ureterorenoscope-1.png",
            "assets/images/products/single-use-ureterorenoscope-2.png",
            "assets/images/products/single-use-ureterorenoscope-3.jpg",
            "assets/images/products/single-use-ureterorenoscope-4.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 118,
            name: "Single-use Cystoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 6000,
            image: "assets/images/products/single-use-cystoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/single-use-cystoscope-1.jpg",
            "assets/images/products/single-use-cystoscope-2.jpg",
            "assets/images/products/single-use-cystoscope-3.png",
            "assets/images/products/single-use-cystoscope-4.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 119,
            name: "Single-Use Cysto-Nephroscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 7200,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Cysto-Nephroscope",
            description: "",
            features: [
            
        ]
        },
            {
            id: 120,
            name: "Single-use Ureteral Access Sheath",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 800,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Access+Sheath",
            description: "",
            features: [
            
        ]
        },
            {
            id: 121,
            name: "Single-use Stent Removal Cystoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 6500,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Stent+Removal",
            description: "",
            features: [
            
        ]
        },
            {
            id: 122,
            name: "Suction Pump",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 2500,
            image: "https://placehold.co/800x800/E8F3EC/075C3A?text=Suction+Pump",
            description: "",
            features: [
            
        ]
        },
            {
            id: 123,
            name: "Video Laryngoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 15000,
            image: "assets/images/products/video-laryngoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/video-laryngoscope-1.jpg",
            "assets/images/products/video-laryngoscope-2.jpg",
            "assets/images/products/video-laryngoscope-3.jpg"
        ],
            features: [
            
        ]
        },
            {
            id: 124,
            name: "Reusable Ureterorenoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            price: 25000,
            image: "assets/images/products/reusable-ureterorenoscope-1.jpg",
            description: "",
            images: [
            "assets/images/products/reusable-ureterorenoscope-1.jpg",
            "assets/images/products/reusable-ureterorenoscope-2.png",
            "assets/images/products/reusable-ureterorenoscope-3.jpg",
            "assets/images/products/reusable-ureterorenoscope-4.jpg"
        ],
            features: [
            
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


// Export for Node.js build script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
