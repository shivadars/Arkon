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
            
            image: "../../assets/products/229_75e9ba2348.png",
            gallery: [
                "../../assets/products/229_75e9ba2348.png",
                "../../assets/products/1_1_a753392834.png",
                "../../assets/products/2_1_1_b3a74827db.png",
                "../../assets/products/3_1_1_a1dbaadbbb.png",
                "../../assets/products/178_99c08a23ff.png"
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
            
            image: "../../assets/products/4_1d606e261b.png",
            gallery: [
                "../../assets/products/4_1d606e261b.png",
                "../../assets/products/V2_V5_8_d59268ddf0.png",
                "../../assets/products/5_750b6e970f.png",
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
            
            image: "../../assets/products/233_d59172c677.png",
            gallery: [
                "../../assets/products/233_d59172c677.png",
                "../../assets/products/237_848dc5d61e.png"
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
            
            image: "../../assets/products/AI_psd_1_03444929d1.png",
            gallery: [
                "../../assets/products/AI_psd_1_03444929d1.png",
                "../../assets/products/404_d72eccda34.png",
                "../../assets/products/405_9b847cafc0.png",
                "../../assets/products/407_3881469fa3.png",
                "../../assets/products/406_82c1d25191.png"
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
            
            image: "../../assets/products/231_dc439244a3.png",
            gallery: [
                "../../assets/products/231_dc439244a3.png",
                "../../assets/products/215_a1fae07d7d.png",
                "../../assets/products/216_1b83be35b2.png",
                "../../assets/products/12_4_46f5eb7311.png"
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
            
            image: "../../assets/products/NV_10_af4a415e8e.png",
            gallery: [
                "../../assets/products/NV_10_af4a415e8e.png",
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
            
            gallery: [
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
            
            image: "../../assets/products/378_af23b22158.png",
            gallery: [
                "../../assets/products/378_af23b22158.png",
                "../../assets/products/379_49150abdc1.png",
                "../../assets/products/2_5_bdbfc2153d.png",
                "../../assets/products/3_4_1_a8a91c481f.png",
                "../../assets/products/4_4_1_3d6438ab8a.png"
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
            
            image: "../../assets/products/1_H1200_20x_8_2_3821278824.png",
            gallery: [
                "../../assets/products/1_H1200_20x_8_2_3821278824.png",
                "../../assets/products/3_H1200_20x_8_1_95d004643a.png",
                "../../assets/products/4_H1200_20x_8_1_cd852d42a2.png",
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
            
            image: "../../assets/products/1_H1200_20x_8_2_87c1ebe0cc.png",
            gallery: [
                "../../assets/products/1_H1200_20x_8_2_87c1ebe0cc.png",
                "../../assets/products/4_H1200_20x_8_2_f73839b010.png",
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
            
            image: "../../assets/products/1_7_1_bc7c890884.png",
            gallery: [
                "../../assets/products/1_7_1_bc7c890884.png",
                "../../assets/products/4_8_bb218fe54a.png",
                "../../assets/products/49_80cbebb0af.png",
                "../../assets/products/46_7d51a1c3cb.png"
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
            
            image: "../../assets/products/262_950dcdd550.png",
            gallery: [
                "../../assets/products/262_950dcdd550.png",
                "../../assets/products/261_1_7aa5699045.png",
                "../../assets/products/299_7d92aa09c0.png",
                "../../assets/products/250_1_4a363d24fb.png",
                "../../assets/products/263_9a5aa85f18.png"
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
            
            image: "../../assets/products/253_9cbd8b1f8d.png",
            gallery: [
                "../../assets/products/253_9cbd8b1f8d.png",
                "../../assets/products/258_61bb5065ad.png",
                "../../assets/products/250_1_4a363d24fb.png",
                "../../assets/products/300_ffc844aadd.png",
                "../../assets/products/256_3ae8ac77c0.png"
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
            
            image: "../../assets/products/249_f7e3110f71.png",
            gallery: [
                "../../assets/products/249_f7e3110f71.png",
                "../../assets/products/248_79d9dd69ea.png",
                "../../assets/products/250_1_4a363d24fb.png",
                "../../assets/products/251_25403e9b52.png",
                "../../assets/products/299_7d92aa09c0.png"
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
            
            image: "../../assets/products/356_3c5159f081.png",
            gallery: [
                "../../assets/products/356_3c5159f081.png",
                "../../assets/products/357_a70c190e77.png",
                "../../assets/products/358_1_c605bfb47c.png",
                "../../assets/products/359_bc6e0aea32.png",
                "../../assets/products/360_9b9b03c466.png"
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
            
            image: "../../assets/products/image_png_8c609840ee.png",
            gallery: [
                "../../assets/products/image_png_8c609840ee.png",
                "../../assets/products/image_png_1_14541d267b.png",
                "../../assets/products/8_1e470a31ae.png"
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
            
            image: "../../assets/products/product_6afe6e94c3.png",
            gallery: [
                "../../assets/products/product_6afe6e94c3.png",
                "../../assets/products/mri_environment_b508bccf36.jpg",
                "../../assets/products/magnetic_field_41ae876f02.png",
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
            
            image: "../../assets/products/K_pro3_1_f7d611d94a.png",
            gallery: [
                "../../assets/products/K_pro3_1_f7d611d94a.png",
                "../../assets/products/124_24e9de547f.png",
                "../../assets/products/13_png_d192532fd6.png",
                "../../assets/products/128_76fff78f85.png",
                "../../assets/products/129_f5abe4cff1.png"
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
            
            image: "../../assets/products/K_pro3_1_acf13457da.png",
            gallery: [
                "../../assets/products/K_pro3_1_acf13457da.png",
                "../../assets/products/SYO_01763_5f5b5668f0.png",
                "../../assets/products/A8_D_3852_4dbe465a79.png",
                "../../assets/products/SYO_02440_8b9d3fa849.png",
                "../../assets/products/SYO_02494_72504953c1.png"
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
            
            image: "../../assets/products/K_pro3_1_54c73e66f6.png",
            gallery: [
                "../../assets/products/K_pro3_1_54c73e66f6.png",
                "../../assets/products/5_9efb843e52.png",
                "../../assets/products/Screenshot_d00ae0e7_d42a_4a3d_9d28_22d4b9f7840b_476349183c.png",
                "../../assets/products/12_png_0eff9f5fb8.png",
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
            
            image: "../../assets/products/K_pro3_1_1dd4ae416c.png",
            gallery: [
                "../../assets/products/K_pro3_1_1dd4ae416c.png",
                "../../assets/products/_30d1953c24.png",
                "../../assets/products/4_87296cd048.png"
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
            
            image: "../../assets/products/K_pro3_1_990b628e04.png",
            gallery: [
                "../../assets/products/K_pro3_1_990b628e04.png",
                "../../assets/products/135_ab76dbf4ec.png",
                "../../assets/products/5_f2b6acd1a3.png",
                "../../assets/products/138_ae735326c0.png"
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
            
            image: "../../assets/products/K_pro3_1_7431e37775.png",
            gallery: [
                "../../assets/products/K_pro3_1_7431e37775.png",
                "../../assets/products/6_png_0a0f0f6b08.png",
                "../../assets/products/pic9_e259a715d6.png",
                "../../assets/products/148_74525ce13f.png"
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
            
            image: "../../assets/products/K_pro3_1_83d69e1747.png",
            gallery: [
                "../../assets/products/K_pro3_1_83d69e1747.png",
                "../../assets/products/4_f5cbcd49b4.png"
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
            
            image: "../../assets/products/K_pro3_1_abb856a601.png",
            gallery: [
                "../../assets/products/K_pro3_1_abb856a601.png",
                "../../assets/products/4_70c5b080fc.png"
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
            
            image: "../../assets/products/H300_1_1_e003286035.png",
            gallery: [
                "../../assets/products/H300_1_1_e003286035.png",
                "../../assets/products/9_H1200_20x_8_1_8d556d25be.png",
                "../../assets/products/10_H1200_20x_8_1_0360192e96.png",
                "../../assets/products/12_H1200_20x_8_1_37ed42cdfd.png"
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
            custom_url: "s80",
            
            image: "../../assets/products/S80_1_0b805d3727.png",
            gallery: [
                "../../assets/products/S80_1_0b805d3727.png",
                "../../assets/products/16_3_1_3ee94b8947.png",
                "../../assets/products/15_1_1_93b4472e6e.png",
                "../../assets/products/18_2_5682ccbfe0.png",
                "../../assets/products/17_2_36a2d7a710.png"
            ],
            
            short_description: "An advanced resuscitation platform integrating up to 360J defibrillation, pacing, and comprehensive monitoring with real-time CPR feedback on a 9.52-inch touchscreen.",
            key_highlights: [
                "Integrates defibrillation, pacing, and comprehensive monitoring",
                "Large 9.52-inch high-resolution capacitive touchscreen with gesture control",
                "Versatile display modes: NVG mode, night mode, and high contrast mode",
                "Powerful Therapy: Up to 360J energy, 20-300Ω impedance range, BTE waveform",
                "Real-time CPR feedback ensuring AHA compliance for high-quality resuscitation"
            ],
            
            overview_text: "An all-in-one advanced resuscitation platform that integrates defibrillation, pacing and comprehensive monitoring—empowering clinicians to make faster decisions and save more lives through a cohesive Assess, Decide, Treat, and Review workflow.",
            
            features: [
                { title: "Advanced All-In-One Resuscitation Platform", text: "Integrates defibrillation, pacing, and comprehensive monitoring into a unified platform. Streamlines the clinical workflow (Assess, Decide, Treat, Review) to empower faster decision-making." },
                { title: "Clearer Insights, Intuitive Operation", text: "Features a large 9.52-inch high-resolution capacitive touchscreen, bringing vital signs and waveforms to life at a glance. Gesture operation allows clinicians to interact quickly and intuitively, even in demanding environments." },
                { title: "Adaptable Viewing Modes", text: "Includes NVG (Night Vision Goggles) mode, night mode, and high contrast mode to ensure clear visibility across various, potentially challenging, rescue environments." },
                { title: "Powerful & Fast Therapy", text: "Delivers powerful therapy with up to 360J of energy, utilizing a BTE (Biphasic Truncated Exponential) waveform. Supports a wide impedance range of 20-300Ω for faster, more effective response." },
                { title: "High-Quality CPR Feedback", text: "Provides real-time CPR feedback to monitor compression depth and rate, aligning with AHA recommendations. This supports more consistent, standardized, and effective resuscitation performance." },
                { title: "Diverse Interconnection", text: "Offers diverse interconnection methods, providing multiple solutions for seamless data integration and product safety/performance monitoring." }
            ],
            
            specifications: {
                "Display": "9.52-inch high-resolution capacitive touchscreen",
                "Energy Output": "Up to 360J (BTE waveform)",
                "Impedance Range": "20-300Ω",
                "Therapy Modes": "Defibrillation, Pacing, Monitoring",
                "CPR Support": "Real-time CPR feedback (AHA compliant)"
            }
        },
        {
            id: 34,
            name: "S50",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            custom_url: "s50",
            
            image: "../../assets/products/DSC_07626_1_1_35fad92ca4.png",
            gallery: [
                "../../assets/products/DSC_07626_1_1_35fad92ca4.png",
                "../../assets/products/DSC_03750_1_86a0954bad.png",
                "../../assets/products/11_1_5_6519c1d681.png",
                "../../assets/products/12_1_5_3509558bf3.png",
                "../../assets/products/13_1_2_40dd4ec77f.png"
            ],
            
            short_description: "An integrated defibrillator monitor with AED and pacing, featuring an IP55 waterproof design, real-time CPR feedback, and versatile power options for all rescue environments.",
            key_highlights: [
                "4-in-1 integration: Manual defibrillation, AED, pacing, and monitoring (ECG, SpO₂, NIBP, CO₂)",
                "Multiple power options including a 4700mAh large-capacity lithium battery",
                "User-friendly, rounded, easy-to-clean body with a clear interface",
                "IP55 dust and water proof rating for demanding environments",
                "Real-time CPR feedback and diverse interconnection methods (HDMI, Network port)"
            ],
            
            overview_text: "The S50 Defibrillator Monitor provides a full range of functions to meet various life support needs. It integrates manual defibrillation, AED, pacing, and comprehensive monitoring to make life-saving more efficient in both pre-hospital and in-hospital scenarios.",
            
            features: [
                { title: "Comprehensive 4-in-1 Life Support", text: "Integrates manual defibrillation, AED, pacing, and monitoring (ECG, SpO₂, NIBP, CO₂) into a single device, suitable for both pre-hospital emergency care and in-hospital use." },
                { title: "Versatile Power Solutions", text: "Supports independent AC power, a 4700mAh large-capacity lithium battery, fixed base power, and inverter power supply, ensuring continuous operation." },
                { title: "Ergonomic & Resilient Design", text: "Features a clear interface, a rounded and easy-to-clean body, and a thoughtful handle design. Its IP55 dust and waterproof rating ensures reliability across all emergency scenarios." },
                { title: "High-Quality CPR Guidance", text: "Equipped with a CPR sensor that provides real-time feedback on compression rate, depth, and recoil, supporting AHA recommendations for standardized resuscitation." },
                { title: "Extensive Interconnectivity", text: "Supports multiple interfaces including HDMI for high-definition synchronous display expansion and a network port for versatile information interconnection." }
            ],
            
            specifications: {
                "Functions": "Manual Defib, AED, Pacing, Monitoring",
                "Monitoring Parameters": "ECG, SpO₂, NIBP, CO₂",
                "Power Supply": "AC, 4700mAh battery, fixed base, inverter",
                "Durability": "IP55 dust and water proof",
                "Connectivity": "HDMI, Network port"
            }
        },
        {
            id: 35,
            name: "S8",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            custom_url: "s8",
            
            image: "../../assets/products/K_pro3_1_4a0d97d5ab.png",
            gallery: [
                "../../assets/products/K_pro3_1_4a0d97d5ab.png",
                "../../assets/products/113_320662e3ea.png",
                "../../assets/products/13_3x_081c8850ca.png",
                "../../assets/products/108_5821d2ff7a.png",
                "../../assets/products/114_09183ac2f0.png"
            ],
            
            short_description: "A highly durable 4-in-1 defibrillator monitor offering up to 360J BTE energy, instantaneous 3-step operation, and seamless hospital integration for extreme emergency conditions.",
            key_highlights: [
                "All-in-One: Defibrillation, Pacing, Monitoring (5/12-lead ECG, SpO₂, EtCO₂, etc.), AED",
                "Rapid 3-step operation with <1s instantaneous energy setup",
                "Advanced BTE waveform technology with up to 360J energy selection",
                "Durable IP44 rating and shock resistance for outdoor and extreme environments",
                "Advanced information management: 80mm thermal printer, Wi-Fi, HL7/HIS integration"
            ],
            
            overview_text: "The COMEN S8 integrates defibrillation, pacing, monitoring, and AED functions in a single portable device. Suitable for pre-hospital emergencies and hospital use, it supports synchronous/asynchronous defibrillation, pacing modes, and extensive vital-sign monitoring (5/12-lead ECG, SpO₂, TEMP, EtCO₂, IBP), ensuring comprehensive patient care.",
            
            features: [
                { title: "All-in-One Life Support Solution", text: "Integrates defibrillation, pacing, monitoring, and AED functions. Supports synchronous/asynchronous defibrillation, pacing modes, and extensive vital-sign monitoring (5/12-lead ECG, SpO₂, TEMP, EtCO₂, IBP)." },
                { title: "Rapid, Simplified Operation", text: "Designed for quick response, it simplifies lifesaving procedures: Defibrillation in just 3 steps, one-knob mode switching, and instantaneous (<1s) energy setup with 25 energy levels and easy one-button 12-lead ECG access." },
                { title: "High Energy & Advanced Waveform Technology", text: "Provides energy selection up to 360J. Utilizes advanced Biphasic Truncated Exponential (BTE) waveform technology with automatic impedance compensation to ensure efficient energy delivery and minimized myocardial damage." },
                { title: "Durable & Reliable in All Conditions", text: "Robustly engineered for extreme conditions with IP44 ingress protection and shock resistance. Features a large-capacity lithium battery delivering over 420 maximum discharges per charge." },
                { title: "Seamless Connectivity & Integration", text: "Offers advanced information management with an 80mm thermal printer and 240-minute voice recording storage. Complete networking compatibility (Wi-Fi, wired, HL7/HIS) supports centralized monitoring." }
            ],
            
            specifications: {
                "Functions": "Defibrillation (Sync/Async), Pacing, AED, Monitoring",
                "Monitoring": "5/12-lead ECG, SpO₂, TEMP, EtCO₂, IBP",
                "Energy/Waveform": "Up to 360J, BTE Waveform",
                "Durability": "IP44 ingress protection, Shock resistance",
                "Data Management": "80mm thermal printer, Wi-Fi, HL7/HIS"
            }
        },
        {
            id: 36,
            name: "S5",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            custom_url: "s5",
            
            image: "../../assets/products/K_pro3_1_83ce2adb8c.png",
            gallery: [
                "../../assets/products/K_pro3_1_83ce2adb8c.png",
                "../../assets/products/A8_D_3550_1_d9952c6a28.png",
                "../../assets/products/A8_D_3483_b1e4f5a1bf.png",
                "../../assets/products/_aeaf42bf4b.png",
            ],
            
            short_description: "A compact and cost-efficient 4-in-1 defibrillator monitor offering up to 360J BTE technology, built tough with an IPX4 waterproof rating for extreme environments.",
            key_highlights: [
                "4-in-1 Design: Defibrillation, AED, Pacing, and Monitoring in one unit",
                "Advanced BTE Technology for lower energy use and improved success rates",
                "Up to 360J high energy selection for complex conditions (obesity, myocardial infarction)",
                "Shockproof and IPX4 waterproof design for extreme environments",
                "Information-Based Network Solution with HL7 HIS integration"
            ],
            
            overview_text: "The 4-in-1 design of the S5 Defibrillator Monitor brings multiple functions into one compact unit, offering significant space and cost savings while improving portability. It reduces the need for multiple separate devices, saving up to 30% of space in ambulances and hospital rooms.",
            
            features: [
                { title: "Cost-Efficient 4-in-1 Design", text: "Integrates manual defibrillation (synchronous/asynchronous), AED, pacing, and monitoring. This space-saving design reduces the need for separate devices by up to 30% in ambulances and hospitals." },
                { title: "Advanced BTE Technology", text: "Uses Advanced Biphasic Truncated Exponential (BTE) technology to deliver precise shocks with lower energy, reducing heart tissue damage and improving defibrillation success." },
                { title: "Higher Energy for Complex Cases", text: "Offers up to 360J energy selection to accommodate patients with higher defibrillation thresholds, supporting a wide impedance range of 20-300Ω." },
                { title: "Reliable and Durable", text: "Built for extreme environments with shockproof/anti-fall features and IPX4 ingress protection against splashes. Includes manual/automatic self-tests and a long-lasting battery supporting up to 210 discharges." },
                { title: "Seamless Information Network", text: "Integrates smoothly into hospital networks (HL7/HIS) for easy patient data access, and features direct patient data printing for efficient documentation." }
            ],
            
            specifications: {
                "Functions": "Defibrillation, AED, Pacing, Monitor",
                "Energy/Waveform": "Up to 360J, BTE Technology",
                "Impedance Range": "20-300Ω",
                "Durability": "IPX4 waterproof, Shockproof",
                "Battery Capacity": "Up to 210 maximum discharges"
            }
        },
        {
            id: 37,
            name: "S1",
            brand: "COMEN",
            category: "Defibrillator Monitor",
            custom_url: "s1",
            
            image: "../../assets/products/K_pro3_1_9da36277fa.png",
            gallery: [
                "../../assets/products/K_pro3_1_9da36277fa.png",
                "../../assets/products/A8_D_3550_f0a6f708bb.png",
                "../../assets/products/A8_D_3550_1_502414c275.png",
                "../../assets/products/_3601d8fc5b.png",
            ],
            
            short_description: "An ultra-light 4-in-1 defibrillator monitor offering industry-leading 3-second charging to 200J and a 6-hour continuous battery for rapid emergency response.",
            key_highlights: [
                "4-in-1 Space-saving Design: Defibrillation, AED, Pacing, and Monitoring",
                "Industry-leading charging: 3s to 200J, 7s to 360J",
                "Ultra-lightweight (4.5kg) and portable with bedside hooks",
                "Multifunctional paddles switchable between adult/child <1s",
                "Strong battery duration: 6 hours continuous monitoring, up to 210 discharges"
            ],
            
            overview_text: "The 4-in-1 design of the S1 Defibrillator Monitor brings multiple functions into one compact unit, offering significant space and cost savings while improving portability. It reduces the need for multiple separate devices, saving up to 30% of space in ambulances and hospital rooms.",
            
            features: [
                { title: "Cost-Efficient 4-in-1 Design", text: "Integrates manual defibrillation (synchronous/asynchronous), AED, pacing, and monitoring functions. This space-saving design reduces the need for multiple separate devices by up to 30% in ambulances and hospital rooms." },
                { title: "Faster Charging & Operation", text: "Offers industry-leading charging speeds—achieving 200J in just 3 seconds and 360J in 7 seconds. The 7-inch multi-color display simplifies defibrillation into 3 easy steps to reduce response time in critical moments." },
                { title: "Lightweight & Portable Build", text: "Weighing only 4.5kg, the S1 is ultra-light to reduce physical strain during transport. Its compact design includes handles and bedside hooks for rapid transfer across various clinical and emergency scenarios." },
                { title: "Multifunctional Paddles", text: "Designed for quick and efficient defibrillation, the paddles can be switched between large and small electrode pads within 1 second, allowing for immediate treatment of both adults and children." },
                { title: "Strong Battery Duration", text: "Built for long-lasting use, the powerful battery supports extended operations—providing up to 6 hours of continuous use in monitoring mode, or up to 210 maximum discharges." }
            ],
            
            specifications: {
                "Functions": "Defibrillation, AED, Pacing, Monitor",
                "Charging Speed": "3s to 200J, 7s to 360J",
                "Display": "7-inch multi-color display",
                "Portability": "4.5 kg, Built-in hooks and handle",
                "Battery Life": "6 hours continuous monitoring / 210 discharges"
            }
        },
        {
            id: 38,
            name: "F3/F5",
            brand: "COMEN",
            category: "AED",
            custom_url: "f3-f5",
            
            image: "../../assets/products/3_1_3_1cdf80fab2.png",
            gallery: [
                "../../assets/products/3_1_3_1cdf80fab2.png",
                "../../assets/products/1_1_6_d4a8989f23.png",
                "../../assets/products/3_2_6_a5089afada.png",
                "../../assets/products/4_1_2_6b93cf10c2.png"
            ],
            
            short_description: "A fast, durable, and user-friendly Automatic External Defibrillator with a 7-inch HD screen and 3-lead ECG monitoring, designed for rapid response in harsh environments.",
            key_highlights: [
                "Integrated AED mode and 3-lead ECG monitoring",
                "Large 7-inch HD screen with vivid interactive guidance",
                "Fast operation: powers up in 2s, charges to 200J in <4s",
                "Durable IP55 rating and 1.5-meter drop test certified",
                "4-year battery life with rechargeable options; EN1789 compliant"
            ],
            
            overview_text: "F3/F5, a user-friendly AED that allows fast operation. It is compact, light-weighted and has integrated AED mode and 3-lead ECG monitoring function. The 7-inch large HD screen provides vivid interactive guidance, making rescue process an easy job.",
            
            features: [
                { title: "Standby for All Times", text: "Compact, light-weighted, and user-friendly. Integrates AED mode and 3-lead ECG monitoring. The 7-inch large HD screen provides vivid interactive guidance, making the rescue process an easy job." },
                { title: "Fast and Effective", text: "Every second counts during the treatment of VF. With cutting-edge technologies, F3/F5 is able to power up in 2s, taking less than 4s to charge to 200J and 7s to 360J." },
                { title: "Durable Design", text: "Built to IP55 standards, it is fearless of harsh environments. Passes a 1.5-meter dropping test, making it ready for unexpected situations." },
                { title: "Long Battery Life", text: "Proper setting allows a 4-year life cycle. A rechargeable battery is available to reduce maintenance costs." },
                { title: "Emergency Vehicle Ready", text: "Meets the EN1789 standard and is fully certified to be used on emergency vehicles." }
            ],
            
            specifications: {
                "Functions": "AED Mode, 3-lead ECG Monitoring",
                "Display": "7-inch HD screen",
                "Charging Speed": "Powers up in 2s, <4s to 200J",
                "Durability": "IP55 rating, 1.5m drop test, EN1789",
                "Battery Life": "4-year life cycle (rechargeable option available)"
            }
        },
        {
            id: 39,
            name: "G Series",
            brand: "COMEN",
            category: "AED",
            custom_url: "g-series",
            
            image: "../../assets/products/18_10x_1_d2bf247a05.png",
            gallery: [
                "../../assets/products/18_10x_1_d2bf247a05.png",
                "../../assets/products/329_70c4f25e7e.png",
            ],
            
            short_description: "A lightning-fast, responder-focused AED featuring an intuitive workflow, <2s startup, and pre-connected pads for ultra-rapid defibrillation in high-stress emergencies.",
            key_highlights: [
                "Ultra-fast response: <2s readiness, <7s ready-to-shock",
                "Pre-connected adult and pediatric electrode pads to save rescue time",
                "Automatic volume adjustment for noisy rescue environments",
                "Wide impedance tolerance (20Ω - 300Ω) for diverse patients",
                "Highly durable: IP55 dust/waterproof, 1.5m drop resilient, EN1789 ambulance certified"
            ],
            
            overview_text: "Designed for life-saving speed, the G-Series AED features an intuitive, responder-focused workflow that enables rapid defibrillation even in high-stress emergencies. With advanced cardiac rhythm analysis and clear, automated step-by-step guidance, it minimizes required actions and removes uncertainty for lay rescuers.",
            
            features: [
                { title: "Minimalist, Responder-Focused Operation", text: "Features an intuitive workflow that minimizes required actions for lay rescuers. Provides clear, automated step-by-step guidance to remove uncertainty and ensure fast, confident intervention when every second counts." },
                { title: "Lightning-Fast Rescue Timeline", text: "Achieves full operational readiness in under 2 seconds after opening the lid. Rhythm analysis and 200J charging are completed simultaneously within 5 seconds, bringing the total ready-to-shock time to no more than 7 seconds." },
                { title: "Pre-Connected Electrode Pads", text: "Equipped with adult and pediatric electrodes that are pre-connected to the device, saving critical seconds during setup and deployment." },
                { title: "Adaptive Audio Guidance", text: "The device automatically adjusts its volume output to remain clear and audible, adapting seamlessly to noisy, chaotic rescue environments." },
                { title: "Robust Environmental Resilience", text: "Certified for ambulance transport (EN1789), featuring an IP55 dustproof and waterproof rating alongside 1.5m drop resilience. Supports a wide patient impedance range (20Ω to 300Ω) for reliable therapy in extreme conditions." }
            ],
            
            specifications: {
                "Response Time": "<2s startup, <7s ready-to-shock",
                "Impedance Range": "20Ω - 300Ω",
                "Audio": "Automatic Volume Adjustment",
                "Pads": "Pre-connected adult/pediatric electrodes",
                "Durability": "IP55, 1.5m drop resilience, EN1789 Certified"
            }
        },
        {
            id: 40,
            name: "F Series",
            brand: "COMEN",
            category: "AED",
            custom_url: "f-series",
            
            image: "../../assets/products/233_b9a9bfefeb.png",
            gallery: [
                "../../assets/products/233_b9a9bfefeb.png",
                "../../assets/products/107_806208f27c.png",
                "../../assets/products/105_3fde470632.png",
                "../../assets/products/106_1_320bf0e6df.png",
                "../../assets/products/234_ab3300c26a.png"
            ],
            
            short_description: "A fast, intuitive, and rugged AED with guided CPR support, synchronized rhythm analysis, and up to 360J energy output to empower anyone to deliver lifesaving treatment.",
            key_highlights: [
                "Instant activation upon opening the lid",
                "Guided CPR support with real-time voice and animated visuals",
                "Up to 360J BTE energy output with automatic pediatric adaptation",
                "Synchronized rhythm analysis for rapid first shock within 7s",
                "Rigorously tested durability: IP55 waterproof, 1.5m drop resistant"
            ],
            
            overview_text: "In sudden cardiac arrest, every second counts. Comen F Series AED is designed for rapid response, empowering anyone to deliver swift, effective treatment when it matters most. Fast. Simple. Effective.",
            
            features: [
                { title: "Instant Rescue Assistance", text: "Designed for rapid first-aid operations. Instant activation automatically powers on the device when the lid is opened, eliminating delays. Pre-connected, ready-to-use pads cater to both adults and children." },
                { title: "Intuitive Guided Support", text: "Features real-time voice prompts and continuous audio instructions to guide effective CPR. The 7-inch HD Display (F2/F2A models) provides vivid animated visuals illustrating each step to reduce stress and uncertainty for the rescuer." },
                { title: "Powerful Defibrillation", text: "Employs advanced Biphasic Truncated Exponential (BTE) waveform technology with impedance compensation. With up to 360J energy output, it successfully treats challenging cases while automatically adjusting energy for maximum safety in pediatric mode." },
                { title: "Intelligent & Rapid Analysis", text: "Seamlessly integrates heart rhythm analysis and charging. Synchronized Rhythm Analysis means no wasted time—the device analyzes and charges simultaneously, delivering the first shock within 7 seconds for optimal effectiveness." },
                { title: "Rugged & Durable Design", text: "Built tough for all environments. Features IP55 waterproof and dustproof ratings, high and low-temperature resistance, and rugged 1.5-meter drop resistance, compliant with rigorous 160G & 810H standards." }
            ],
            
            specifications: {
                "Operation": "Instant lid activation",
                "Defibrillation Energy": "Up to 360J (BTE Waveform)",
                "Analysis & Shock Time": "<7 seconds",
                "User Interface": "7-inch HD Display (F2/F2A), Voice/Visual Prompts",
                "Durability": "IP55, 1.5m drop, 160G & 810H Standards"
            }
        },
        {
            id: 41,
            name: "ES-Series",
            brand: "COMEN",
            category: "Chest Compression System",
            custom_url: "es-series",
            
            image: "../../assets/products/17_3_3ae09fde9b.png",
            gallery: [
                "../../assets/products/17_3_3ae09fde9b.png",
                "../../assets/products/12_NV_10_20x_8_1_7fe91e2b30.png",
                "../../assets/products/13_NV_10_20x_8_1_5d4c7a81f5.png",
                "../../assets/products/AI_t_psd_NV_10_20x_8_1_a5109f8bce.png",
                "../../assets/products/352_1_bfadbc23c8.png"
            ],
            
            short_description: "A lightweight, IP43-rated Chest Compression System weighing just 7.9 kg, offering precision-controlled compressions with structural deformation compensation for emergency transport.",
            key_highlights: [
                "Compact & Lightweight: Weighs only 7.9 kg for rapid deployment",
                "Precision compressions: 30-60mm depth, 100-120 cpm rate",
                "30:2 mode and Active Continuous mode with pressure pad release technology",
                "Displacement monitoring and structural deformation compensation",
                "IP43 rated, EN1789 certified, supports DC vehicle power"
            ],
            
            overview_text: "Heartbeat in Rhythm, Life in Motion. The ES Series Chest Compression System features a compact design weighing just 7.9 kg, built for emergency efficiency and Exceptionally easy to carry and deploy in critical moments.",
            
            features: [
                { title: "Compact & Efficient Design", text: "Weighing just 7.9 kg, it's exceptionally easy to carry and deploy. The back plate uses PPA + 50% glass fiber (1.6 g/cm³), and the support arm uses PA + 30% glass fiber (1.3 g/cm³) for excellent strength without extra bulk." },
                { title: "Streamlined Clinical Workflow", text: "Features a smooth edge back plate to avoid patient injury during placement. Exposed visual locking clips provide instant confirmation of secure fixation, reducing CPR preparation time in fast-paced environments." },
                { title: "Precision-Controlled Compressions", text: "Supports 30:2 mode (3s ventilation pause) and Active Continuous mode. Features pressure pad release technology, allowing the piston to momentarily dwell at the bottom of each compression to enhance coronary and cerebral perfusion." },
                { title: "Adaptive Treatment", text: "Offers adjustable compression depth of 30–60 mm (±2 mm) and rate of 100–120 compressions per minute (±2 cpm), allowing caregivers to tailor treatment based on patient body size and clinical needs." },
                { title: "Advanced Monitoring & Reliability", text: "Integrates a displacement monitoring system and structural deformation compensation algorithm to maintain consistent compression depth during prolonged CPR. IP43 rated and EN1789 certified for secure ambulance transport." }
            ],
            
            specifications: {
                "Weight": "7.9 kg",
                "Compression Depth": "30–60 mm (±2 mm)",
                "Compression Rate": "100–120 compressions/minute",
                "Modes": "30:2 mode, Active Continuous mode",
                "Durability": "IP43, EN1789 certified"
            }
        },
        {
            id: 42,
            name: "L9",
            brand: "COMEN",
            category: "Surgical Light",
            custom_url: "l9",
            
            image: "../../assets/products/l9_261ad57c0c.png",
            gallery: [
                "../../assets/products/l9_261ad57c0c.png",
                "../../assets/products/419_8db3a74b9f.png",
                "../../assets/products/420_53478c1d1a.png",
                "../../assets/products/protection_Mode_1_6a19cfdd65.png",
                "../../assets/products/421_df7489ef41.png"
            ],
            
            short_description: "An advanced surgical light featuring DC dimming, an intelligent shadow management system, and adaptive auto-focus for unparalleled, eye-protective surgical illumination.",
            key_highlights: [
                "Eyes-protection DC dimming technology prevents flicker and fatigue",
                "Up to six endoscopic light colors in Multi-color Endo Mode",
                "Intelligent shadow management system preserves an uninterrupted surgical field",
                "Elliptical light pattern designed for lengthy and narrow incisions",
                "Adaptive auto-focus maintains consistent illumination from 75cm to 125cm"
            ],
            
            overview_text: "The L9 Surgical Light features advanced DC dimming technology, controlling illuminance without high-frequency flash. This eyes-protection illumination prevents eye damage and reduces fatigue, while ensuring smooth, flicker-free surgical recording.",
            
            features: [
                { title: "Eye-Protective Illumination", text: "Features advanced DC dimming technology to control illuminance without high-frequency flash. Eye-protection mode minimizes contrast between the surgical site and surroundings, effectively reducing eye strain and allowing for flicker-free surgical recording." },
                { title: "Multi-Color Endo Mode", text: "Offers up to six endoscopic light colors. Surgeons can choose a comfortable lighting tone during laparoscopic surgery to reduce fatigue and easily distinguish specific tissues while alleviating patient anxiety." },
                { title: "Intelligent Shadow Management", text: "Ensures a shadow-free environment. When a surgeon obstructs part of the light panel, the system enhances illumination in the remaining area while reducing light (and heat generation) around the surgeon's head." },
                { title: "Elliptical Spot Design", text: "Features an elliptical light pattern specifically designed to effectively illuminate lengthy and narrow incisions (like those in cardiac surgeries), preventing the distracting metal reflections caused by traditional circular beams." },
                { title: "Adaptive Auto Focus", text: "Boasts 3 automatic modes that detect the distance to the incision as the light is adjusted vertically. This ensures unwavering focus and consistent illumination within the optimal range of 75cm to 125cm without repetitive adjustments." }
            ],
            
            specifications: {
                "Illumination Tech": "DC Dimming Technology",
                "Endo Modes": "Up to 6 colors",
                "Shadow Management": "Intelligent compensation system",
                "Light Spot Pattern": "Elliptical Spot",
                "Auto Focus Range": "75cm to 125cm"
            }
        },
        {
            id: 43,
            name: "L5",
            brand: "COMEN",
            category: "Surgical Light",
            custom_url: "l5",
            
            image: "../../assets/products/3_f2f88bfe56.png",
            gallery: [
                "../../assets/products/3_f2f88bfe56.png",
                "../../assets/products/7_7e48633792.png",
                "../../assets/products/275_9e2f01b042.png",
                "../../assets/products/279_e74d31d3df.png",
                "../../assets/products/339_e9fd48b8cd.png"
            ],
            
            short_description: "A specialized surgical light with adaptive lighting technology, smart intensity adjustment, and stable DC dimming to prevent eye strain and deliver flicker-free recording.",
            key_highlights: [
                "Adaptive Lighting auto-focuses based on wound distance",
                "Smart Intensity maintains illuminance when reducing spot size",
                "Stable DC dimming prevents high-frequency flash and eye damage",
                "High Color Rendering Index (Ra up to 98) for precise tissue distinction",
                "Multiple control methods (panel, handle, wall, dual-lamp)"
            ],
            
            overview_text: "As a new generation surgical light, L5 is able to provide a specialized surgical lighting solution for different surgery such as heart, orthopedics, endoscopy, spine, obstetrics and gynecology operations. Doctors are allowed to customize the setup such as illuminance, spot and other parameters according to the characteristics of the operation.",
            
            features: [
                { title: "Adaptive Lighting Auto-Focus", text: "Automatically adapts to the distance of the wound during surgery. When the medical staff changes the height of the light, the system ensures the focus remains perfectly on the surgical site." },
                { title: "Smart Intensity Control", text: "Adjusts spot size by turning on/off specific LED bulbs. Unlike traditional lights where a smaller spot decreases intensity, L5's smart technology maintains the original high illuminance, crucial for deep-cavity surgeries like heart operations." },
                { title: "Stable, Flicker-Free Illumination", text: "Adopts advanced DC dimming technology that controls illuminance via voltage changes rather than high-frequency switching. This prevents eye damage for surgeons and avoids waves/flicker during surgical recording." },
                { title: "Versatile & Specialized Modes", text: "Provides specialized solutions with bright, normal, and endoscopic modes. Customizable for various procedures including orthopedics, spine, and OB/GYN, with the ability to save preferred parameter setups." },
                { title: "Efficient Operation & Control", text: "Offers a high Color Rendering Index (Ra up to 98) to help surgeons distinguish tissues, organs, and bones clearly. Configurable with control panels, handles, wall controls, and dual-lamp synchronous control for maximum convenience." }
            ],
            
            specifications: {
                "Dimming Tech": "DC Dimming Technology",
                "Color Rendering Index": "Ra up to 98",
                "Lighting Modes": "Bright, Normal, Endoscopic",
                "Control Options": "Panel, Handle, Wall, Dual-lamp synchronous",
                "Focus Technology": "Adaptive Auto-Focus"
            }
        },
        {
            id: 44,
            name: "L3",
            brand: "COMEN",
            category: "Surgical Light",
            custom_url: "l3",
            
            image: "../../assets/products/265_7c855b7d8b.png",
            gallery: [
                "../../assets/products/265_7c855b7d8b.png",
                "../../assets/products/266_6d6fa00b32.png",
                "../../assets/products/268_ceb1a93dd2.png",
                "../../assets/products/339_e9fd48b8cd.png"
            ],
            
            short_description: "A compact, lightweight surgical light with DC dimming, dual endoscopy modes, and a high CRI for narrow operating rooms and day surgeries.",
            key_highlights: [
                "Unconventional 3-petal design saves space in narrow operating rooms",
                "Dual control with 10 levels of adjustable illumination",
                "Advanced DC dimming technology prevents eye fatigue and video flicker",
                "Two Endoscopy Modes: White light and Green light",
                "High Color Rendering Index (Ra up to 98) for precise tissue visibility"
            ],
            
            overview_text: "L3 is a new lightweight shadowless surgical light from COMEN, specifically designed for outpatient emergency, gynecology, day surgery, minimally invasive surgery, and narrow operating rooms.",
            
            features: [
                { title: "Compact 3-Petal Design", text: "Adopts a transparent three-petal exterior design to save space. This unconventional structure applies to more scenarios, making it ideal for outpatient emergency and narrow operating rooms." },
                { title: "Convenient Dual Control", text: "User-friendly design upgrades the comfort of operation. Offers 10 levels of adjustable illumination through either the control panel or the lamp-mounted sterile handle, alongside unhampered 360-degree rotation." },
                { title: "Eye-Protection Illumination", text: "Unlike traditional lights using PWM dimming that cause eye fatigue and ripple effects on recordings, L3 adopts advanced DC dimming technology. This ensures clear recording quality while causing no eye fatigue." },
                { title: "Dual Endoscopy Modes", text: "Equipped with two dedicated endoscopy modes—white light mode and green light mode—to satisfy different clinical needs and enhance visibility during endoscopic surgeries." },
                { title: "Top-Tier Color Rendering", text: "Features an exceptional Color Rendering Index (CRI) with an Ra value as high as 98, reaching the top level in the industry for distinguishing delicate tissues and structures." }
            ],
            
            specifications: {
                "Design": "Transparent 3-petal exterior",
                "Dimming Tech": "DC Dimming Technology",
                "Endoscopy Modes": "White Light, Green Light",
                "Color Rendering Index": "Ra up to 98",
                "Control": "Dual control (Panel/Handle), 10 levels"
            }
        },
        {
            id: 45,
            name: "WE1/WE2",
            brand: "COMEN",
            category: "Operating Table",
            custom_url: "we1-we2",
            
            image: "../../assets/products/pic1_f5334ad7a4.png",
            gallery: [
                "../../assets/products/pic1_f5334ad7a4.png",
                "../../assets/products/300_abf0f2d418.png",
                "../../assets/products/pic4_28e257828a.png",
                "../../assets/products/pic5_d367f7b622.png",
                "../../assets/products/pic6_d26b465e35.png"
            ],
            
            short_description: "A highly functional electric operating table with a powerful electro-mechanical motor system and modular design, supporting versatile positioning for diverse surgical disciplines.",
            key_highlights: [
                "Powerful electro-mechanical motor system ensures steady, sway-free positioning",
                "Modular design with quick-plug connections for flexible configuration",
                "Double Control System with override panel and hand remote",
                "High-quality, moisture-proof melamine resin tabletop supports X-ray",
                "Ultra-thin base with universal wheels and one-button emergency stop"
            ],
            
            overview_text: "WE1/WE2, a general operating table, supports various surgical applications. The high performance is based on a powerful electro-mechanical motor system. The operating table is steady and does not sway or move when the patient shifts positions. Modular design allows flexible positions and operations.",
            
            features: [
                { title: "Modular Design & Versatile Positioning", text: "Allows for flexible configuration to meet diverse surgical requirements. Features a quick-plug connection for easy assembly of plates, and a kidney bridge that adjusts from 0 to 130 mm." },
                { title: "Double Control System", text: "Equipped with an override control panel and a hand remote on standby. The override panel enables all movements in case of hand remote failure, ensuring uninterrupted operation." },
                { title: "Focusing on Details: Tabletop", text: "The high-quality tabletop is made of melamine resin material that is moisture-proof, mildew-proof, easy to clean, and supports X-ray transmission. Optional carbon fiber bed plates are available." },
                { title: "Memory Foam Cushion", text: "The top layer includes pressure-relieving memory foam that conforms to the patient's anatomy, increasing surface area and distributing weight to help prevent pressure ulcers." },
                { title: "Ultra-Thin Mobility Base", text: "The base is ultra-thin and includes universal wheels, making movement convenient and labor-saving. Features a one-button emergency stop switch for rapid braking and easy C-arm access." }
            ],
            
            specifications: {
                "Motor System": "Electro-mechanical",
                "Kidney Bridge Adjustment": "0 mm to 130 mm",
                "Brake Options": "Mechanic or Electric",
                "Control System": "Hand remote, Override panel",
                "Cushion Material": "Memory Foam"
            }
        },
        {
            id: 46,
            name: "WH1/WH2",
            brand: "COMEN",
            category: "Operating Table",
            custom_url: "wh1-wh2",
            
            image: "../../assets/products/pic1_f5334ad7a4.png",
            gallery: [
                "../../assets/products/pic1_f5334ad7a4.png",
                "../../assets/products/320_2817f6d824.png",
                "../../assets/products/300_abf0f2d418.png",
                "../../assets/products/pic4_28e257828a.png",
                "../../assets/products/pic5_d367f7b622.png"
            ],
            
            short_description: "A highly functional electrohydraulic operating table with a stable load-bearing capacity and modular design, supporting versatile positioning for diverse surgical disciplines.",
            key_highlights: [
                "Electrohydraulic system ensures steady, high-capacity load-bearing",
                "WH2 model achieves an ultra-low 500mm height for seated surgeries",
                "Modular design with quick-plug connections for flexible configuration",
                "Double Control System with override panel and hand remote",
                "High-quality, moisture-proof melamine resin tabletop supports X-ray"
            ],
            
            overview_text: "As surgery advances, hybrid operating rooms must fulfill a wide range of surgical needs. WH1/WH2 is an electrohydraulic operating table with a variety of accessories. It features a stable load-bearing capacity and allows for flexible operation, providing a safe, comfortable, and convenient environment for surgeries.",
            
            features: [
                { title: "Ultra-Low Position (WH2)", text: "The WH2 model can lower the bed height to below 500mm, achieving an ultra-low position to comfortably meet the seated operating requirements for specialized surgeries such as ophthalmology and neurosurgery." },
                { title: "Modular Design & Versatile Positioning", text: "Allows for flexible configuration to meet diverse surgical requirements. Features a quick-plug connection for easy assembly of plates, and a kidney bridge that adjusts from 0 to 130 mm." },
                { title: "Double Control System", text: "Equipped with an override control panel and a hand remote on standby. The override panel enables all movements in case of hand remote failure, ensuring uninterrupted operation." },
                { title: "Focusing on Details: Tabletop", text: "The high-quality tabletop is made of melamine resin material that is moisture-proof, mildew-proof, easy to clean, and supports X-ray transmission. Optional carbon fiber bed plates are available." },
                { title: "Memory Foam Cushion & Ultra-Thin Base", text: "Features a pressure-relieving memory foam top layer that conforms to the patient's anatomy to prevent pressure ulcers. The ultra-thin base includes universal wheels and a one-button emergency stop switch for easy C-arm access." }
            ],
            
            specifications: {
                "Motor System": "Electrohydraulic",
                "Minimum Height (WH2)": "< 500mm",
                "Kidney Bridge Adjustment": "0 mm to 130 mm",
                "Brake Options": "Mechanic or Electric",
                "Control System": "Hand remote, Override panel"
            }
        },
        {
            id: 47,
            name: "W5/W3",
            brand: "COMEN",
            category: "Operating Table",
            custom_url: "w5-w3",
            
            image: "../../assets/products/387_da4300cb01.png",
            gallery: [
                "../../assets/products/387_da4300cb01.png",
                "../../assets/products/389_6bc9414e75.png",
                "../../assets/products/392_d80fa71372.png",
                "../../assets/products/393_d63da35da7.png",
                "../../assets/products/391_cd322149da.png"
            ],
            
            short_description: "An exceptionally adaptable electrohydraulic operating table featuring a modular design, heavy-duty upgraded leg plates, and uncompromised Grade 304 Stainless Steel construction.",
            key_highlights: [
                "Electrohydraulic technology ensures fluid movement with high weight capacity",
                "Upgraded leg plates engineered to withstand up to 60kg with an overload alarm",
                "Constructed with corrosion-resistant, high-quality Grade 304 Stainless Steel",
                "Unique pipeline manager for organizing wires and tubing",
                "Auto-lock safety feature engages after 60 seconds of idle time"
            ],
            
            overview_text: "The W5/W3 Electrohydraulic Operating Table is designed for exceptional adaptability. Its modular design emphasizes expandability to meet a variety of clinical needs, solving special posture requirements across different surgical settings.",
            
            features: [
                { title: "Modular & Adaptable Design", text: "Boasts a modular design with an emphasis on expandability. It features the widest range of rotational angles among products of its class, allowing precise patient positioning for complex procedures." },
                { title: "Premium Material & Build", text: "Uses high-quality Grade 304 Stainless Steel treated for maximum strength and corrosion resistance. The table plates are made of hexakis (methoxymethyl) melamine, supporting orthopedic surgeries and achieving X-ray filtration of ≤ 1mmAL." },
                { title: "Heavy-Duty Leg Plates", text: "Addresses a common drawback in OR tables with upgraded leg plates capable of withstanding up to 60kg. An automatic alarm is activated if this weight threshold is exceeded to ensure patient safety." },
                { title: "Operational Stability & Testing", text: "Electro-hydraulic technology provides a high weight-bearing capacity (1,250 kg static load / 550 kg dynamic load) while remaining fluid and quiet. Validated with rigorous testing, including a 10-year life span test and extensive motion testing." },
                { title: "User-Friendly Organization & Safety", text: "Features a unique pipeline manager to organize monitor and anesthesia wires, keeping the OR orderly. Equipped with an auto-lock safety feature that secures the system after 60 seconds of idle time to prevent accidents." }
            ],
            
            specifications: {
                "Motor System": "Electrohydraulic",
                "Frame Material": "Grade 304 Stainless Steel",
                "Leg Plate Capacity": "Up to 60kg (with alarm)",
                "X-ray Filtration": "≤ 1mmAL",
                "Static Load Capacity": "1,250 kg"
            }
        },
        {
            id: 48,
            name: "BQ80",
            brand: "COMEN",
            category: "Warmer",
            custom_url: "bq80",
            
            image: "../../assets/products/Image0004_1_6b56039ff1.png",
            gallery: [
                "../../assets/products/Image0004_1_6b56039ff1.png",
                "../../assets/products/57cbadffa0fc60bc647f6203080efa88_1_f1b63bdaa1.png",
                "../../assets/products/1_10x_1_e22f0d19df.png",
                "../../assets/products/31_ff5da9ead4.png"
            ],
            
            short_description: "A powerful 4-in-1 neonatal nursing and rescue platform featuring an Elstein far infrared heating tube, built-in jaundice treatment, and hands-free operation.",
            key_highlights: [
                "Powerful 4-in-1 neonatal nursing and rescue platform",
                "Elstein far infrared ceramic heating tube for improved radiation efficiency",
                "Hands-free alarm silence via motion sensor",
                "High-efficiency LED light for uniform Jaundice Treatment",
                "Thermal conduction gel mattress with antibacterial properties"
            ],
            
            overview_text: "The BQ80 Infant Radiant Warmer is a comprehensive 4-in-1 neonatal nursing platform that integrates four key rescue and nursing systems to achieve one-stop operation and management. It scientifically optimizes the workflow to help medical staff easily respond to urgent medical needs, save valuable rescue time, and provide meticulous care for newborns.",
            
            features: [
                { title: "Warm and Caring Heating System", text: "Utilizes an Elstein far infrared ceramic heating tube which greatly improves radiation efficiency and extends duration." },
                { title: "Thermal Conduction Gel Mattress", text: "Made from environmental silicon gel with excellent biocompatibility. It is soft, comfortable, offers great thermal performance, is antibacterial, and helps reduce bedsores." },
                { title: "Jaundice Treatment", text: "A high-efficiency LED light delivers uniform, gentle blue light with customizable intensity and a long lifespan for effective jaundice treatment." },
                { title: "Ergonomic & Hands-Free Operation", text: "Features hands-free alarm silence—just wave your hand in front of the sensor. The 10.4-inch color LCD touch screen offers self-adaptive brightness, paired with a 360° visible alarm indicator and a humanized damping door." },
                { title: "Built-in Clinical Utilities", text: "Includes a built-in X-ray film cassette (no need to move the neonate during imaging), a rotary lamp, and a dedicated LED lamp for punctures featuring high, medium, and low intensity adjustments." }
            ],
            
            specifications: {
                "Heating System": "Elstein far infrared ceramic tube",
                "Mattress": "Thermal conduction silicon gel",
                "Jaundice Light": "High-efficiency LED (blue light)",
                "Display": "10.4-inch self-adaptive color LCD touch screen",
                "Built-in Utilities": "X-ray Cassette, Rotary Lamp, Puncture LED"
            }
        },
        {
            id: 49,
            name: "B10",
            brand: "COMEN",
            category: "Incubator",
            custom_url: "b10",
            
            image: "../../assets/products/B10_1_455907b364.png",
            gallery: [
                "../../assets/products/B10_1_455907b364.png",
                "../../assets/products/1_1_88b323ef16.png",
                "../../assets/products/312_51a5079a5d.png",
                "../../assets/products/14_10x_8_2_00533b38f2.png"
            ],
            
            short_description: "A 3-in-1 Trinity Incubator offering intelligent thermoregulation, active neurodevelopmental support, and a mechanically assisted instant transition to a radiant warmer.",
            key_highlights: [
                "3-in-1 Trinity design transitions from incubator to radiant warmer in just 2 seconds",
                "Intelligent thermoregulation and humidity control with rapid warmth startup",
                "Active Neurodevelopmental Support with internal noise management and audio player",
                "Supports Family-Centered Care (FCC) with Koala mode for skin-to-skin contact",
                "One-click tilting and 360° rotation for effortless positioning and access"
            ],
            
            overview_text: "Preterm infants in the NICU face challenges including heat loss, noise, light, and infection risks. The B10 3-in-1 Trinity Incubator is designed to reduce these risks by creating a stable and protective microenvironment for premature neonates.",
            
            features: [
                { title: "Intelligent Thermoregulation & Humidity", text: "Delivers rapid warmth startup and real-time servo temperature control using multi-temp sensors for fast response. High humidification efficiency provides a stable and responsive humidity environment." },
                { title: "Active Neurodevelopmental Support", text: "Fosters neurodevelopment by shielding internal noise to support restful sleep. Includes an audio player for music or a parent’s voice, and a mood light to create a gentle ambiance for breastfeeding and bonding." },
                { title: "Optimized Clinical Workflow", text: "Features one-click tilting and 360° rotation for effortless access. A three-step disassembly makes cleaning fast, while one-click temperature settings and multi-parameter monitoring inform rapid decisions." },
                { title: "Instant Emergency Transition", text: "Designed for rapid emergency response, the mechanically assisted lift-up canopy requires no power source, enabling an instant transition from incubator mode to radiant warmer mode in just 2 seconds." },
                { title: "Family-Centered Care (FCC) & Transport", text: "Actively supports skin-to-skin contact under Koala mode to encourage breastfeeding and calm the baby. Also engineered for seamless and secure intra-hospital transport from the delivery room to the NICU." }
            ],
            
            specifications: {
                "Type": "3-in-1 Trinity Incubator",
                "Transition Time": "2 seconds (Incubator to Warmer)",
                "Positioning": "One-click tilting, 360° rotation",
                "Developmental Support": "Noise management, Audio player, Mood light",
                "Care Modes": "Koala Mode (Skin-to-skin), Multi-controlled temp"
            }
        },
        {
            id: 50,
            name: "B3",
            brand: "COMEN",
            category: "Incubator",
            custom_url: "b3",
            
            image: "../../assets/products/b3_product_d088428062.png",
            gallery: [
                "../../assets/products/b3_product_d088428062.png",
                "../../assets/products/b3_temperature_chart_5c5cb7c08b.png",
                "../../assets/products/b3_sensor_collector_b4a2e826db.png",
                "../../assets/products/b3_thermal_airflow_d85a6f8fa7.png",
                "../../assets/products/b3_water_tank_e99a6cf5a8.png"
            ],
            
            short_description: "An advanced neonatal incubator featuring delicate thermal regulation, an automated apnea rescue system, and safe, efficient humidification.",
            key_highlights: [
                "Cascade PID algorithm prevents overheating and provides steady temperature control",
                "Safe & Efficient Humidification with a transparent, easily disassembled water tank",
                "World's leading Apnea Rescue System with automatic vibrator stimulation",
                "Electric tilting bed for efficient daily nursing",
                "Access doors with built-in dampers to reduce noise and startle responses"
            ],
            
            overview_text: "B3 is a neonatal incubator providing delicate and robust thermal regulation. It is engineered with accurate monitoring and control algorithms, safe humidification systems, and intelligent rescue functions to foster a peaceful and stable healing environment.",
            
            features: [
                { title: "Delicate & Robust Thermal-Regulation", text: "Uses thin dual skin probes and 7 sensors with a compact data collector to simulate an optimal environment. The Cascade PID algorithm prevents overheating, offering a monitoring accuracy of ±0.1℃ and controlling accuracy of ±0.5℃." },
                { title: "Fast Readiness & High Uniformity", text: "Features an enlarged effective heating area with a symmetrical heater and fine-tuned heat distribution chamber. Prewarms in ≤ 15 mins and achieves a horizontal uniformity of ≤ 0.5℃ with low air velocity above the mattress." },
                { title: "Safe & Efficient Humidification", text: "Maintains maximum humidity at 99% with an accuracy of ±5%. The transparent water tank allows immediate observation to prevent dry burning and is easily disassembled to significantly reduce infection risks." },
                { title: "Apnea Rescue System", text: "Features a world-leading apnea rescue system. Abdominal sensors continuously monitor breathing, and a vibrator tied to the infant's foot automatically triggers to stimulate and wake the infant if abnormal breathing occurs." },
                { title: "Electric Bed & Damper Doors", text: "Abandons traditional manual tilting for electric tilting to make nursing more efficient. The access doors feature built-in dampers to reduce unwanted noise, ensuring a peaceful healing environment." }
            ],
            
            specifications: {
                "Temperature Monitoring Accuracy": "±0.1℃",
                "Temperature Controlling Accuracy": "±0.5℃",
                "Prewarm Time": "≤ 15 min",
                "Horizontal Uniformity": "≤ 0.5℃",
                "Max Humidity": "99% (±5% accuracy)"
            }
        },
        {
            id: 51,
            name: "B6/B8",
            brand: "COMEN",
            category: "Incubator",
            custom_url: "b6-b8",
            
            image: "../../assets/products/c3dc99bf5afbede4058b5a2716b4c03c_1_bb18845887.png",
            gallery: [
                "../../assets/products/c3dc99bf5afbede4058b5a2716b4c03c_1_bb18845887.png",
                "../../assets/products/222_04053fd357.png",
                "../../assets/products/226_6bad189582.png",
                "../../assets/products/224_172dcf7e4b.png",
                "../../assets/products/225_6abdf357fb.png"
            ],
            
            short_description: "An advanced neonatal incubator featuring intelligent variable resistance heating, high-efficiency humidity control, and a specialized integrated monitoring system.",
            key_highlights: [
                "Intelligent Variable Resistance Heating Technology shortens heating time to ≤ 35 mins",
                "3 independent over-temperature protections (System, Hardware, Mechanical)",
                "Specialized Neonatal Monitoring System featuring ExNeo® ECG and Masimo SpO2",
                "Electric lift and intelligent adjustment of bed tilt via a 12.1-inch LED touch screen",
                "Advanced air circulation with symmetrical dual inlet and outlet"
            ],
            
            overview_text: "Neonatal incubators provide a constant temperature and humidity environment for the treatment of premature infants and critically ill neonates. The COMEN B8/B6 incubator is thoughtfully designed to provide stable thermoregulation and features a configured vital signs monitoring system to care for even the most fragile patients.",
            
            features: [
                { title: "Intelligent Heating & 3-Tier Protection", text: "Dual resistive heating tubes shorten heating time to ≤ 35 mins with temperature fluctuations reduced to 0.5 ℃. Protected by 3 independent systems: software control, hardware sensor signaling, and a mechanical over-temperature switch." },
                { title: "Humidity Control Technology", text: "Utilizes PWM control technology and an advanced humidity generator for fast humidification (up to > 95%). Evaporation components are made of corrosion-resistant titanium alloy, and thermal isolation is ensured with high-temperature resistant PEEK material." },
                { title: "Specialized Neonatal Monitoring System", text: "A tailored NICU system featuring ExNeo® ECG, Adap-DSP® adaptive NIBP, Masimo SET SpO2, and Apnea self-rescue technology. Ensures precise physiological data collection while addressing neonatal respiratory distress." },
                { title: "Human-Machine Interaction & Adjustments", text: "Features a 12.1-inch LED touch-screen with a backlit keyboard. Dual operation (pedal and touch screen) controls the electric lift, and the bed tilt angle is intelligently adjustable." },
                { title: "Integrated & Quiet Design", text: "The incubator integrates the monitor seamlessly and adopts easy-to-open damping access panels on the left and right. These slow-falling panels drastically reduce noise, creating a quiet environment for neonates." }
            ],
            
            specifications: {
                "Heating Time": "≤ 35 mins",
                "Temperature Fluctuation": "0.5 ℃",
                "Effective Humidity": "> 95%",
                "Evaporation Material": "Titanium alloy",
                "Display": "12.1 inches LED touch-screen"
            }
        },
        {
            id: 52,
            name: "BT800",
            brand: "COMEN",
            category: "Incubator",
            custom_url: "bt800",
            
            image: "../../assets/products/218_17814f6b30.png",
            gallery: [
                "../../assets/products/218_17814f6b30.png",
                "../../assets/products/219_802d0a6675.png",
                "../../assets/products/220_707f9c7256.png",
                "../../assets/products/216_852794265a.png",
                "../../assets/products/217_c9d8e796c3.png"
            ],
            
            short_description: "A world-class transport incubator providing accurate, efficient, and long-endurance environment control as a reassuring infant guard.",
            key_highlights: [
                "Re-defines world-class incubator systems",
                "Reassuring Infant Guard design",
                "Accurate, efficient, long-endurance environment control",
                "1-stop service with customized configuration",
                "Tailored assembling platform for flexible transport"
            ],
            
            overview_text: "The BT-800 is a transport incubator that re-defines the world-class incubator system. It acts as a reassuring infant guard by providing accurate, efficient, and long-endurance environment control during transit.",
            
            features: [
                { title: "Reassuring Infant Guard", text: "Acts as a reassuring infant guard by maintaining a safe, stable, and highly controlled microenvironment during the critical phases of neonatal transport." },
                { title: "Long-Endurance Environment Control", text: "Designed for demanding transport scenarios, providing accurate, efficient, and long-endurance environment control to sustain optimal temperature and humidity." },
                { title: "1-Stop Customized Configuration", text: "Offers a 1-stop service approach with a highly customized configuration and assembling platform, adapting seamlessly to specific clinical transport requirements." }
            ],
            
            specifications: {
                "Type": "Transport Incubator",
                "Environment Control": "Accurate, efficient, long-endurance",
                "Configuration": "Customized 1-stop assembling platform",
                "System Class": "World-class incubator system"
            }
        },
        {
            id: 53,
            name: "P3/P6",
            brand: "COMEN",
            category: "Hypothermia Treatment",
            custom_url: "p3-p6",
            
            image: "../../assets/products/113_7c7d205f5b.png",
            gallery: [
                "../../assets/products/113_7c7d205f5b.png",
                "../../assets/products/105_fcd0cff784.png",
                "../../assets/products/1061_f7fbc15019.png",
                "../../assets/products/108_f0aeca4bcc.png",
                "../../assets/products/276_3_368ebc82b8.png"
            ],
            
            short_description: "A state-of-the-art comprehensive temperature control system offering therapeutic hypothermia for HIE, featuring i-Servo™ closed-loop control and modular monitoring.",
            key_highlights: [
                "Therapeutic hypothermia lowers mortality for Neonatal HIE",
                "Innovative Semiconductor Cooling Technology for rapid target temperatures",
                "i-Servo™ closed-loop system automatically adjusts water temperature based on core temp",
                "Flat-type Water Blanket for full-body wrapping",
                "Plug & Play modular monitoring compatible with COMEN neonatal products"
            ],
            
            overview_text: "Neonatal hypoxic-ischemic encephalopathy (HIE) is a brain injury disease with a high mortality rate. The P3/P6 is a state-of-the-art comprehensive temperature control solution providing therapeutic hypothermia—a core treatment for HIE that effectively lowers mortality by slowing apoptotic processes and reducing oxygen dependence in the brain.",
            
            features: [
                { title: "Rapid Cooling Induction", text: "Utilizes innovative Semiconductor Cooling Technology and cooling blankets to rapidly reach a core body temperature of 33°C to 34°C within 2 hours, essential for effective therapeutic hypothermia." },
                { title: "i-Servo™ Temperature Control System", text: "An intelligent closed-loop system that automatically adjusts water temperature based on monitored patient skin and core temperatures. This ensures safety throughout treatment, rewarming, and maintenance while avoiding long-term hypothermia complications." },
                { title: "Constant Vigilance via Modular Monitoring", text: "Provides round-the-clock protection through a plug-and-play C31 modular monitoring system. Seamlessly compatible with COMEN products including the P6, B8 incubator, BQ80 radiant warmer, and C-series patient monitors." },
                { title: "Intimate Care & Cost-Effective Design", text: "Delivers full-body wrapping using a flat-type water blanket. Designed to offer high-quality intimate care without breaking the bank." }
            ],
            
            specifications: {
                "Target Core Temp": "33°C - 34°C",
                "Cooling Technology": "Semiconductor Cooling Technology",
                "Control System": "i-Servo™ Closed-loop control",
                "Compatibility": "COMEN C31 Modular Monitor",
                "Blanket Type": "Flat-type Water Blanket (Full-body wrap)"
            }
        },
        {
            id: 54,
            name: "BL20",
            brand: "COMEN",
            category: "Jaundice Treatment",
            custom_url: "bl20",
            
            image: "../../assets/products/3dbbd414891ce5e2133681640627980_4b56d0e483.png",
            gallery: [
                "../../assets/products/3dbbd414891ce5e2133681640627980_4b56d0e483.png",
                "../../assets/products/3_c7f8c43655.png",
            ],
            
            short_description: "A highly effective phototherapy mattress that delivers 360˚ 'sandwich' treatment, maximizing therapeutic efficiency while minimizing adverse stimuli.",
            key_highlights: [
                "360˚ 'sandwich' phototherapy with overhead devices (BL60/BL70)",
                "Minimizes adverse stimuli and physical injury risks during device transitions",
                "Partitioned controller reduces door openings, preserving temp and humidity",
                "3 selectable levels up to 63μW/cm²/nm",
                "Detached design with an air gap reduces temperature rising rate"
            ],
            
            overview_text: "The BL20 Phototherapy Mattress delivers 360˚ 'sandwich' phototherapy when used in tandem with overhead devices like the BL60 or BL70. This combined approach greatly increases the effective treatment area and significantly enhances therapeutic efficiency for jaundice treatment.",
            
            features: [
                { title: "360˚ Sandwich Phototherapy", text: "Greatly increases the effective treatment area when used together with overhead phototherapy devices like the BL60/BL70, multiplying therapeutic efficiency." },
                { title: "User-Friendly Partitioned Controller", text: "Allows for controller adjustments without opening the incubator door, minimizing temperature and humidity loss and reducing adverse stimuli." },
                { title: "Detached Design for Thermal Stability", text: "Better bottom phototherapy thanks to a detached design. An air gap reduces the temperature rising rate, significantly improving treatment effectiveness." },
                { title: "Adjustable Output & Timer", text: "Offers 3 selectable treatment intensity levels up to 63μW/cm²/nm, complemented by a count-up or count-down timer for precise session management." },
                { title: "Clinical Utility", text: "Includes a dedicated compartment available for an X-ray detector, minimizing the need to move the patient during imaging." }
            ],
            
            specifications: {
                "Max Intensity": "63μW/cm²/nm",
                "Intensity Levels": "3 selectable levels",
                "Treatment Type": "360˚ Sandwich Phototherapy (with BL60/BL70)",
                "Timer": "Count up or down",
                "Design Type": "Detached Design (bottom mattress)"
            }
        },
        {
            id: 55,
            name: "BL60",
            brand: "COMEN",
            category: "Jaundice Treatment",
            custom_url: "bl60",
            
            image: "../../assets/products/250_e403852a09.png",
            gallery: [
                "../../assets/products/250_e403852a09.png",
                "../../assets/products/252_84297727f5.png",
                "../../assets/products/253_48eef2ba7f.png",
                "../../assets/products/254_8b7b2de845.png",
            ],
            
            short_description: "A high-performance LED phototherapy light delivering maximum irradiance at the perfect 475nm peak for effective jaundice treatment.",
            key_highlights: [
                "Maximum irradiance at an optimal 475nm wavelength",
                "Stable and uniform irradiance distribution",
                "White light mode for infant observation and caregiver comfort",
                "Aligns with AAP clinical guidelines for hyperbilirubinemia"
            ],
            
            overview_text: "The BL60 BiliCure™ LED Phototherapy Light offers powerful and uniform jaundice treatment. It operates at a peak wavelength of 475nm, aligning perfectly with the latest clinical guidelines from the American Academy of Pediatrics.",
            
            features: [
                { title: "Powerful Phototherapy Performance", text: "Achieves maximum irradiance at a wavelength of 475nm, the perfect peak recommended by the American Academy of Pediatrics (2022) for managing hyperbilirubinemia." },
                { title: "Uniform Irradiance Distribution", text: "The BiliCure™ system provides stable and uniform irradiance, ensuring that the effective phototherapy evenly covers the entire bed surface for consistent treatment." },
                { title: "Care for the Caregivers", text: "Features an available white light setting that allows caregivers to easily observe the infant between sessions, or it can be turned on to soften the intense blue light for improved comfort." }
            ],
            
            specifications: {
                "Wavelength": "475nm Peak",
                "Light Source": "BiliCure™ LED",
                "Clinical Guideline": "American Academy of Pediatrics (2022)",
                "Light Modes": "Blue Jaundice Light, White Observation Light"
            }
        },
        {
            id: 56,
            name: "MX8900/M800/ME900",
            brand: "COMEN",
            category: "Infusion System",
            custom_url: "mx8900-m800-me900",
            
            image: "../../assets/products/198_f8b4e17cb0.png",
            gallery: [
                "../../assets/products/198_f8b4e17cb0.png",
                "../../assets/products/203_5940b3a709.png",
                "../../assets/products/267_478ff9f283.png",
                "../../assets/products/268_6d7727c4d7.png",
                "../../assets/products/201_55a2b71359.png"
            ],
            
            short_description: "Advanced Syringe and Infusion Workstation Systems featuring intelligent treatment planning, rapid start-ups, and robust safety mechanisms.",
            key_highlights: [
                "Intelli. Plan™ provides tailor-made treatment plans for specific drugs",
                "Intelli. Fast™ delivers timely infusion within 9 seconds of startup",
                "Dynamic Pressure System (DPS) provides real-time pressure monitoring and alarm prediction",
                "3.5'' touchscreen with intuitive UI and auto-dimming system",
                "Centralized management with wired/WiFi connectivity and HL7 protocol support"
            ],
            
            overview_text: "The MX8900, M800, and ME900 are advanced Syringe and Infusion Pumps designed to be easier, faster, and stronger than ever. Featuring intelligent systems like Intelli. Plan™ and Intelli. Fast™, they offer precise delivery and powerful interconnection for centralized clinical management.",
            
            features: [
                { title: "Intelligent Treatment Planning", text: "Intelli. Plan™ allows the pre-setting and saving of infusion parameters, enabling caregivers to easily apply or modify frequently used treatment plans for specific drugs." },
                { title: "Rapid & Precise Delivery", text: "Intelli. Fast™ ensures timely infusion starts within 9 seconds after machine boot. The system also guarantees high precision and consistent performance for long-term infusions." },
                { title: "Uncompromising Safety Features", text: "The Dynamic Pressure System (DPS) provides real-time monitoring of pressure changes. Color-coded, graphical, and numerical indicators help predict occlusion alarms in advance." },
                { title: "Usability & Seamless Design", text: "Includes a graphical guide to reduce installation maloperation. Designed for all conditions with seamless part matching for higher liquid ingress protection. The 3.5'' touchscreen features an intuitive UI and an auto-dimming system." },
                { title: "Powerful Inter-Connection", text: "Supports wired and WiFi connectivity for clinical integration, accessing HIS/CIS/EMR via the HL7 protocol. Features multiple reserved ports for a barcode scanner, nurse call, and drop sensor." }
            ],
            
            specifications: {
                "Type": "Syringe Pump / Infusion Pump",
                "Startup Time": "≤ 9 seconds (Intelli. Fast™)",
                "Display": "3.5'' Touchscreen (Auto-dimming)",
                "Connectivity": "Wired/WiFi, HL7 Protocol",
                "Safety": "Dynamic Pressure System (DPS)"
            }
        },
        {
            id: 57,
            name: "ME660/M260",
            brand: "COMEN",
            category: "Infusion System",
            custom_url: "me660-m260",
            
            image: "../../assets/products/255_306c2de584.png",
            gallery: [
                "../../assets/products/255_306c2de584.png",
                "../../assets/products/259_ba357e2fac.png"
            ],
            
            short_description: "A robust, multi-functional infusion pump featuring a large screen, extensive working modes, and transport certification for reliable clinical delivery.",
            key_highlights: [
                "EN1789 certified for use during transport and E&R scenarios",
                "Shielded from harsh environments with a validated IP44 rating",
                "Bigger screen and lighter weight for improved usability",
                "10 different working modes with up to 9 phases of ramp and 10 sequential setups",
                "Safer for pediatric and neonatal use with high accuracy"
            ],
            
            overview_text: "The ME660/M260 Infusion Pump is a new multifunction comprehensive solution for clinical environments. Certified for transport and designed with high durability, it offers extensive functionality and a flexible workflow to meet diverse patient needs.",
            
            features: [
                { title: "Transport & Durability", text: "EN1789 certified for safe use during transport and emergency & rescue scenarios. It is shielded from harsh environments with a validated IP44 ingress protection rating." },
                { title: "Enhanced Usability", text: "Designed with a bigger screen and lighter weight. Features higher sensitivity, greater accuracy, a larger storage capacity, and longer battery endurance." },
                { title: "Functionally Extensive Modes", text: "Offers 10 different working modes with wider setting ranges: Rate, Time, Weight, Drip (ME660 only), Dose Time, Intermittent, Ramp, Micro, First Dose, and Sequential." },
                { title: "Flexible Workflow", text: "Provides a smooth and flexible workflow with up to 9 phases of ramp up/down and up to 10 sequential setups available." },
                { title: "Wide Application Range", text: "Capable of rates up to 2200ml/h for large-volume fluids administration, and supports an infusion time set up to ~100 hours. Specifically engineered to be safer for pediatric and neonatal use." }
            ],
            
            specifications: {
                "Max Infusion Rate": "2200 ml/h",
                "Max Infusion Time": "~100 hrs",
                "Working Modes": "10 modes (including Drip for ME660)",
                "Transport Certification": "EN1789",
                "Protection Rating": "IP44"
            }
        },

        {
            id: 60,
            name: "EP50",
            brand: "COMEN",
            category: "Ultrasound",
            custom_url: "ep50",
            
            image: "../../assets/products/11_10x_1_82a3a94f75.png",
            gallery: [
                "../../assets/products/11_10x_1_82a3a94f75.png",
                "../../assets/products/EP_50_1_d36118899b.png",
                "../../assets/products/343_1_c1c765fe61.png",
                "../../assets/products/30_10x_1_a3dd92c589.png"
            ],
            
            short_description: "An advanced ultrasound platform utilizing E-Sonore® technology and AI to deliver intelligent imaging, high-speed processing, and outstanding ergonomic design.",
            key_highlights: [
                "E-Sonore® Ultrasound Platform powered by AI technology",
                "Zone Focus Imaging for uniform high resolution across the field of view",
                "Ultra-fast parallel beam processing for smooth, real-time imaging",
                "Frequency Compound Imaging suppresses speckle noise and enhances contrast",
                "Ideal for NICU and comprehensive clinical applications (ICU, OB/GYN, Anesthesia)"
            ],
            
            overview_text: "Powered by the Comen E-Sonore® Ultrasound Platform, the EP50 integrates cutting-edge algorithms and AI technology. Its advanced image processing ensures accurate, radiation-free diagnosis across a wide range of clinical scenarios.",
            
            features: [
                { title: "Intelligent Imaging Platform", text: "Powered by the E-Sonore® Ultrasound Platform, integrating cutting-edge algorithms and AI technology for advanced image processing and accurate diagnosis." },
                { title: "Zone Focus Imaging Technology", text: "Dynamic full-range focusing delivers uniform high resolution across the entire field of view, revealing fine details and true anatomical structures." },
                { title: "High-Speed Beam Parallel Processing", text: "Ultra-fast parallel beam processing significantly increases frame rates, instantly capturing dynamic information for a smooth, real-time imaging experience—ideal for high-speed moving targets." },
                { title: "Frequency Compound Imaging Technology", text: "Multi-frequency fusion imaging effectively suppresses speckle noise, balancing penetration and resolution to enhance tissue contrast and deliver authentic image quality." },
                { title: "Wide Clinical Application", text: "Supports extensive clinical scenarios including ICU/EMR, Anesthesia, General Imaging, Neonatal, and OB/GYN. It is ideal for NICU, supporting the radiation-free diagnosis of conditions like intracranial hemorrhage, hydrocephalus, and pneumonia." }
            ],
            
            specifications: {
                "Platform Type": "E-Sonore® Ultrasound Platform",
                "Imaging Technologies": "Zone Focus, High-Speed Beam, Frequency Compound",
                "Supported Probes": "Convex, Endocavitary, Linear, Phased",
                "NICU Diagnostics": "Intracranial hemorrhage, hydrocephalus, pneumonia",
                "Radiation": "Zero radiation"
            }
        },
        {
            id: 61,
            name: "CF9600",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "cf9600",
            
            image: "../../assets/products/1_1_0f5e290955.png",
            gallery: [
                "../../assets/products/1_1_0f5e290955.png",
                "../../assets/products/2_1_07f9ef282b.png",
                "../../assets/products/5_1_1_e1d008b584.png",
                "../../assets/products/EN_1_1_c5a4d9ecde.png",
                "../../assets/products/3_2_1_9d4de6ff2c.png"
            ],
            
            short_description: "An advanced automatic hematology analyzer featuring 8-channel fluorescent cell analysis, 6-parameter detection, and intelligent handling of abnormal samples.",
            key_highlights: [
                "Eight channels including DIFF, WNB, RET, PLT-F, WPC, CRP, SAA, ESR",
                "Six parameters: CBC + RET + CRP + SAA + ESR + NRBC",
                "42 reportable and 43 research parameters (plus 7 reportable in body fluid mode)",
                "Advanced Platelet detection with low-value platelet doubling technology",
                "Intelligent Leukocyte detection with enhanced abnormal cell recognition"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CF9600 Automatic Hematology Analyzer sets a new benchmark in fluorescent cell analysis. With its advanced eight-channel technology and six-parameter detection, it delivers synergized technologies and demonstrated excellence in clinical laboratories.",
            
            features: [
                { title: "Comprehensive Multi-Channel Analysis", text: "Features an eight-channel (DIFF, WNB, RET, PLT-F, WPC, CRP, SAA, ESR) and six-parameter (CBC + RET + CRP + SAA + ESR + NRBC) detection system, delivering 42 reportable and 43 research parameters for comprehensive diagnostics." },
                { title: "Automated Sampling & Mixing", text: "Supports automatic rotation, mixing, and sampling of peripheral blood, significantly reducing manual errors and streamlining the laboratory workflow." },
                { title: "Advanced Platelet Detection", text: "Employs aggregated sample processing to correct mildly aggregated samples, self-developed PLT staining reagents with high specificity for abnormal PLT samples, and automatic 8-fold counting for low-value platelets to ensure accuracy." },
                { title: "Flexible Testing Modes", text: "Offers multiple testing modes (CBC, DIFF, NRBC, RET, PLT-F, WPC, CRP, SAA, ESR, BF) for flexible switching, covering routine blood, body fluids, inflammatory markers, and sedimentation to meet diverse clinical needs." },
                { title: "Intelligent Leukocyte Detection", text: "Enhances abnormal cell recognition (e.g., primitive/immature cells) and automatically retests low concentration samples via multiplication counting. Its intelligent expert system provides abnormal alarms to reduce retesting rates and assist rapid clinical decisions." }
            ],
            
            specifications: {
                "Channels": "8 (DIFF, WNB, RET, PLT-F, WPC, CRP, SAA, ESR)",
                "Parameters": "6 (CBC + RET + CRP + SAA + ESR + NRBC)",
                "Reportable Parameters": "42 (Blood) / 7 (Body Fluid)",
                "Research Parameters": "43 (Blood) / 11 (Body Fluid)",
                "Platelet Technology": "Low-value 8-fold doubling counting"
            }
        },
        {
            id: 62,
            name: "CH8600",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8600",
            
            image: "../../assets/products/8600_EN_1_2236a37243.png",
            gallery: [
                "../../assets/products/8600_EN_1_2236a37243.png",
                "../../assets/products/10_f9ebc9b544.png",
                "../../assets/products/11_c6d26bee7d.png",
                "../../assets/products/3_2_1_9d4de6ff2c.png"
            ],
            
            short_description: "A 5-part autoloader hematology analyzer offering rapid emergency/outpatient testing, analyzing up to 90 tests per hour with advanced laser cytometry.",
            key_highlights: [
                "5-Part Autoloader Hematology Analyzer",
                "Up to 90 tests/hour and STAT function capabilities",
                "25 reportable parameters + 6 research parameters",
                "Large data storage capacity: 200,000 results",
                "Wide linearity ranges for WBC and RBC counts"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CH8600 Automatic Hematology Analyzer is a 5-Part Autoloader system serving as a rapid testing solution for emergency and outpatient departments, combining simplicity with high-efficiency workflows.",
            
            features: [
                { title: "Efficient & Convenient Testing", text: "Performs WBC 5-Part differential analysis in under one minute. The autoloader automatically mixes and loads sample tubes, while an open-tube mode caters to STAT samples." },
                { title: "Advanced Detection Technology", text: "Utilizes semiconductor laser flow cytometry (FCM), tri-angle laser scatter, chemical dyes, and impedance capabilities to ensure highly accurate WBC 5-part differential analysis and CBC counting." },
                { title: "Intelligent & Powerful Operation", text: "Features a power-on self-test function, smooth routine operations, and real-time monitoring of reagent residue. One-button detection mode switching makes the system flexible and convenient." },
                { title: "Space-Saving & Maintainable Design", text: "Engineered with a space-conscious base that facilitates large storage and organization of reagents, making routine maintenance easy and efficient." },
                { title: "Exceptional Linearity", text: "Offers wider clinical linearity for precise readings across a broad spectrum: WBC (0.00-520) * 10⁹ / L and RBC (0.00-8.70) * 10¹² / L." }
            ],
            
            specifications: {
                "Analyzer Type": "5-Part Autoloader Hematology Analyzer",
                "Throughput": "Up to 90 tests/hour",
                "Parameters": "25 reportable + 6 research parameters",
                "Storage Capacity": "200,000 results",
                "Detection Technology": "FCM, Tri-angle laser scatter, Impedance"
            }
        },
        {
            id: 63,
            name: "CH8600CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8600crp",
            
            gallery: [
            ],
            
            short_description: "An automated hematology analyzer integrating 5-part differential analysis with CRP measurement to offer rapid, accurate diagnostic results.",
            key_highlights: [
                "CBC, 5-part differential, and CRP measurement in one system",
                "Up to 60 tests/hour for CBC+DIFF+CRP (90 tests/hour for CBC+DIFF)",
                "Continuous auto-loading for up to 50 samples with a dedicated STAT position",
                "29 reportable parameters + 4 research parameters",
                "10.4-inch color touch screen with LIS connectivity"
            ],
            
            overview_text: "The CH8600CRP Auto Hematology Analyzer provides comprehensive solutions for clinical diagnosis, combining advanced CBC and 5-part differential analysis with latex-enhanced immunoturbidimetric CRP measurement for evaluating bacterial infections and inflammatory diseases.",
            
            features: [
                { title: "Advanced Detection Technologies", text: "Combines semiconductor laser flow cytometry, cytochemistry, and impedance methods for CBC and 5-part differential analysis. Utilizes latex-enhanced immunoturbidimetric method for rapid and accurate CRP measurement." },
                { title: "Innovative Auto-Loading", text: "Enables walk-away automation with continuous loading of up to 50 samples per batch. Includes a dedicated STAT position for immediate testing of emergency samples and supports capillary blood sampling." },
                { title: "Comprehensive Parameters", text: "Provides 29 reportable parameters (including hs-CRP and NLR) and 4 research parameters, along with 2 histograms and 2 scattergrams. It covers a wide CRP range of 0.2 - 320 mg/L." },
                { title: "User-Friendly Operation", text: "Features a 10.4-inch high-resolution color touch screen, a built-in barcode scanner to minimize errors, and an intelligent reagent management system with real-time status monitoring and alarms." },
                { title: "Robust Data & Maintenance Management", text: "Offers large storage capacity for up to 100,000 results, customizable report formats, and seamless LIS connectivity (LAN, HL7). Simplifies daily upkeep with automated cleaning and self-diagnostic tools." }
            ],
            
            specifications: {
                "Throughput (CBC+DIFF+CRP)": "Up to 60 tests/hour",
                "Throughput (CBC+DIFF)": "Up to 90 tests/hour",
                "Parameters": "29 reportable + 4 research",
                "CRP Range": "0.2 - 320 mg/L",
                "Sample Capacity": "Up to 50 samples in one batch"
            }
        },
        {
            id: 64,
            name: "CH8500",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8500",
            
            image: "../../assets/products/CH_8500_EN_1_d5208e03f1.png",
            gallery: [
                "../../assets/products/CH_8500_EN_1_d5208e03f1.png",
                "../../assets/products/12_315a9fb118.png",
                "../../assets/products/19_1baeb9404f.png",
                "../../assets/products/18_265f49cba7.png",
                "../../assets/products/20_d3304ee2e3.png"
            ],
            
            short_description: "A highly reliable 5-part autoloader hematology analyzer featuring microfluidic flow technology and integrated lyse storage for space-saving efficiency.",
            key_highlights: [
                "5-Part Autoloader Hematology Analyzer",
                "Throughput: 70 Tests/Hour",
                "25 reportable parameters + 23 research parameters",
                "High temperature resistance: 10-35℃",
                "Precise cell measurement via microfluidics flow + specific staining"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CH8500 Automatic Hematology Analyzer is a 5-Part Autoloader engineered for uncompromised hematology, highly specialized in reliability and efficiency.",
            
            features: [
                { title: "Uncompromised Performance", text: "Engineered for high reliability with a throughput of 70T/H, delivering 25 reportable and 23 research parameters. Achieves precise cell measurement through advanced microfluidics flow and specific staining technology." },
                { title: "Durable & Adaptable", text: "Built with high temperature resistance (10-35℃), ensuring stable and consistent performance across varying laboratory environments." },
                { title: "Space-Saving Integration", text: "Designed with a compact footprint featuring an integrated lyse position, optimizing workspace organization without sacrificing capability." },
                { title: "Highly Specialized Usability", text: "Equipped with a 10.4-inch high-resolution capacitive TFT touch screen. Includes one-click troubleshooting and unclogging functions for maximum operational efficiency." },
                { title: "Versatile Output Solutions", text: "Supports versatile printing solutions, including an optional built-in thermal printer and external printer compatibility." }
            ],
            
            specifications: {
                "Analyzer Type": "5-Part Autoloader Hematology Analyzer",
                "Throughput": "70 Tests/Hour",
                "Parameters": "25 reportable + 23 research",
                "Display": "10.4-inch capacitive TFT touch screen",
                "Operating Temp": "10-35℃"
            }
        },
        {
            id: 65,
            name: "CH8500-V Series",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8500-v-series",
            
            image: "../../assets/products/CH_8500_EN_1_d5208e03f1.png",
            gallery: [
                "../../assets/products/CH_8500_EN_1_d5208e03f1.png",
                "../../assets/products/12_315a9fb118.png",
                "../../assets/products/19_1baeb9404f.png",
                "../../assets/products/18_265f49cba7.png",
                "../../assets/products/20_d3304ee2e3.png"
            ],
            
            short_description: "A specialized 5-part veterinary hematology analyzer series offering 60 samples/hour throughput, tailored editions for companion, farming, and research needs.",
            key_highlights: [
                "5-part Hematology Analyzer Tailored for Veterinary Use",
                "Throughput: Up to 60 samples per hour",
                "28 comprehensive parameters including NLR, PLR, and 3D scattergrams",
                "Three tailored editions: Companion (VC), Farming (VF), Research (VR)",
                "Large data storage capacity: Up to 200,000 results"
            ],
            
            overview_text: "Tailored for Every Tail. The CoooSeee CH8500-V Series is a 5-Part Hematology Analyzer designed specifically for veterinary diagnostic excellence, representing the latest advancement in WBC 5-part differentiation.",
            
            features: [
                { title: "Veterinary Diagnostic Excellence", text: "Tailored for every tail, the CH8500-V Series delivers advanced capabilities for WBC 5-part differentiation. Available in three distinct editions—Companion (VC), Farming (VF), and Research (VR)—to meet diverse customer needs." },
                { title: "Comprehensive Analytics", text: "Provides 28 parameters (including NLR and PLR), 3 histograms (WBC, RBC, PLT), 1 BASO scattergram, 3 2D scattergrams, and 1 3D scattergram for precise WBC differential analysis." },
                { title: "Advanced Measurement Principles", text: "Utilizes the impedance method for reliable RBC and PLT counting, alongside a cyanide-free reagent for hemoglobin testing via the colorimetry method." },
                { title: "Efficient Workflow & Reagents", text: "Achieves a throughput of up to 60 samples per hour requiring only 17.5μL of whole blood. Reagent specifications ensure high efficiency with ≥200 tests/kit and a 100-day validity." },
                { title: "Convenient Operations", text: "Features optional built-in thermal printing or USB direct connection to external printers. Designed for diverse environments with tolerances for 10°~35°C temperatures and 20%~85% humidity." }
            ],
            
            specifications: {
                "Analyzer Type": "Veterinary 5-part Hematology Analyzer",
                "Throughput": "Up to 60 samples/hour",
                "Sample Volume (Whole Blood)": "17.5μL",
                "Parameters": "28 Parameters",
                "Storage": "Up to 200,000 results"
            }
        },
        {
            id: 66,
            name: "CH8500CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8500crp",
            
            gallery: [
            ],
            
            short_description: "An advanced 5-part hematology analyzer with integrated CRP measurement, delivering exceptional precision and up to 200,000 sample records storage.",
            key_highlights: [
                "Integrated 5-part differential analysis and full-range CRP measurement",
                "Throughput: ≥60 samples/hour (CBC+DIFF) and ≥40 samples/hour (CBC+DIFF+CRP)",
                "28 reportable parameters with 3D scattergram + 12 research parameters",
                "Eco-friendly cyanide-free reagents; only 3 routine reagents for CBC counting",
                "Large storage capacity: Up to 200,000 sample records"
            ],
            
            overview_text: "Enhance Blood Cell Analysis with Unprecedented Precision. The COMEN CH8500CRP hematology analyzer represents the latest advancement in diagnostic excellence, combining WBC 5-part differentiation and full-range CRP measurement in a compact, highly efficient design.",
            
            features: [
                { title: "Unprecedented Precision & Efficiency", text: "Delivers up to 60 samples per hour in CBC+DIFF mode and 40 samples per hour in CBC+DIFF+CRP mode. Employs advanced flow cytometry, tri-angle laser scatter, and chemical dye technology for highly precise WBC counting and 5-part differential analysis." },
                { title: "Advanced CRP Measurement", text: "Utilizes a latex-enhanced nephelometric method with wide linearity to accurately measure CRP across its full range. The system features an independent cooling system for CRP latex and effectively detects inflammation and monitors response to treatments." },
                { title: "Eco-Friendly & Cost-Effective", text: "Low reagent consumption using only 3 routine reagents for CBC counting. Features a cyanide-free reagent for hemoglobin testing and a capillary whole blood mode dedicated to pediatric and small blood samples." },
                { title: "Drastically Improved Usability", text: "Equipped with a high-resolution 10.4-inch capacitive TFT touch screen. Includes one-click troubleshooting and unclogging functions, plus a space-saving design with integrated lyse storage." },
                { title: "Expanded Data Management", text: "Stores up to 200,000 sample records with customizable report formats. Features 4 USB ports for versatile connectivity (mouse, keyboard, external printer, barcode scanner) and offers bi-directional LIS connection via a LAN port." }
            ],
            
            specifications: {
                "Principles": "Impedance (RBC/PLT), Colorimetry (HGB), FCM + Laser Scatter + Chemical Dye (WBC 5-part), Latex-enhanced nephelometric method (CRP)",
                "Throughput": "CBC+DIFF: ≥60 samples/h, CBC+DIFF+CRP: ≥40 samples/h",
                "Parameters": "28 reportable + 12 research parameters",
                "Reagents": "5DS Diluent, 5LHS Lyse, 5 LDS Lyse, Probe Cleanser, CH A Buffer, FR-CRP Assay Kit",
                "Sample Volume": "CBC: ≤12μL, CBC+DIFF: ≤18μL, PD: ≤20μL, CRP: ≤16μL",
                "Display": "10.4-inch capacitive TFT touch screen",
                "Measurement Mode": "CBC, CBC+CRP, CRP, CBC+DIFF, CBC+DIFF+CRP",
                "Data Storage Capacity": "Up to 200,000 records",
                "Communication": "LAN port supports HL7 protocol",
                "Interface": "4 USB ports, 1 LAN port for bi-directional LIS connection",
                "Operating Environment": "Temperature: 10°C~35°C, Humidity: 20%~80%",
                "Power Requirement": "AC 100-240V, 50Hz/60Hz, ≤240VA",
                "Dimension and Weight": "330mm × 514mm × 430mm, 34kg"
            }
        },
        {
            id: 67,
            name: "CH8300",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8300",
            
            image: "../../assets/products/8300_EN_1_125b7ef083.png",
            gallery: [
                "../../assets/products/8300_EN_1_125b7ef083.png",
                "../../assets/products/image_1_5_be446b34f8.png",
                "../../assets/products/4_2_2_252d8716d2.png",
                "../../assets/products/17_d0539f71c6.png",
                "../../assets/products/3_2_1_9d4de6ff2c.png"
            ],
            
            short_description: "A highly efficient 3-part hematology analyzer designed for small sample volumes, offering 70 tests/hour and smart diagnostic workflows.",
            key_highlights: [
                "3-Part Hematology Analyzer optimized for small samples",
                "Throughput: 70 Tests/Hour for high efficiency",
                "Minimal blood requirement: Only 9μL to 11.5μL per test",
                "Reportable parameters + 6 research parameters",
                "10.4-inch capacitive touch screen with an intuitive interface"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CH8300 Automatic Hematology Analyzer is a 3-part analyzer specially developed for users with small sample volumes, delivering lab-grade accuracy with minimal blood requirements.",
            
            features: [
                { title: "Minimal Blood, Maximum Insight", text: "Requires as little as 9μL to 11.5μL of blood to obtain comprehensive hematological information. Specially developed for users and patients who can only provide small sample volumes." },
                { title: "High-Efficiency & Reliable Performance", text: "Delivers a throughput of 70 tests/hour to quantify efficiency. Utilizes a cyanide-free method combined with multiple histograms to prevent error analysis and ensure lab-grade accuracy." },
                { title: "Intelligent Diagnostics System", text: "Features a streamlined workflow from sample preparation to result interpretation. Includes convenient access lyse placement, flexible reagent tube options, and a 10.4-inch capacitive touch screen." },
                { title: "Smarter Testing, Smaller Expenses", text: "Requires only 3 blood reagents, reducing reagent consumption by 70% compared to competitors. Supports both open and closed systems for versatile lab integration." },
                { title: "Advanced Access Management", text: "Enforces role-based access controls for access permission management. Employs stricter control measures, such as multi-factor authentication, for high-privilege accounts to secure sensitive data." }
            ],
            
            specifications: {
                "Analyzer Type": "3-Part Hematology Analyzer",
                "Throughput": "70 Tests/Hour",
                "Sample Volume": "9μL - 11.5μL",
                "Display": "10.4-inch capacitive touch screen",
                "Reagent System": "Open & Closed systems (3 blood reagents)"
            }
        },
        {
            id: 68,
            name: "CH8300CRP",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8300crp",
            
            image: "../../assets/products/8300_CRP_EN_1_fee670492c.png",
            gallery: [
                "../../assets/products/8300_CRP_EN_1_fee670492c.png",
                "../../assets/products/5_2_efda25dd72.png",
                "../../assets/products/1_5_1_bc9fa641ef.png",
            ],
            
            short_description: "A specialized 3-part hematology analyzer with integrated CRP detection, designed for high-efficiency testing of small sample volumes.",
            key_highlights: [
                "Integrated 3-Part Hematology and CRP Detection",
                "Throughput: 40 Tests/Hour for CRP detection",
                "Minimal blood requirement: 9μL - 11.5μL per test",
                "Provides detailed reports with 26 parameters (including CRP, FR-CRP, hs-CRP)",
                "10.4-inch capacitive touch screen with an intuitive guided interface"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CH8300CRP Automatic Hematology Analyzer combines 3-part differential analysis with integrated CRP detection, delivering lab-grade accuracy specifically optimized for small sample volumes.",
            
            features: [
                { title: "Minimal Blood, Maximum Insight", text: "Requires only 9μL to 11.5μL of blood to obtain comprehensive hematological information. Specially developed for users and patients who can only provide small sample volumes." },
                { title: "High-Efficiency CRP Detection", text: "Delivers a throughput of 40 tests/hour specifically for CRP detection. Utilizes a cyanide-free method combined with multiple histograms to prevent error analysis and ensure lab-grade accuracy." },
                { title: "Comprehensive Parameter Reporting", text: "Provides detailed reports featuring 26 parameters, which include 24 reportable and 2 research parameters, encompassing critical markers like CRP, FR-CRP, and hs-CRP." },
                { title: "Intelligent Diagnostics System", text: "Streamlines the entire workflow from sample preparation to result interpretation. It features convenient access lyse placement, flexible reagent tube options, and a highly responsive 10.4-inch capacitive touch screen." },
                { title: "Improved Usability", text: "Drastically improves usability and operability with its intuitive guided interface, making it easier for technicians to navigate and process tests quickly." }
            ],
            
            specifications: {
                "Analyzer Type": "3-Part Hematology Analyzer + CRP",
                "Throughput (CRP)": "40 Tests/Hour",
                "Sample Volume": "9μL - 11.5μL",
                "Parameters": "26 parameters (24 reportable + 2 research)",
                "Display": "10.4-inch capacitive touch screen"
            }
        },
        {
            id: 69,
            name: "CH8310",
            brand: "COMEN",
            category: "In Vitro Diagnostic",
            custom_url: "ch8310",
            
            image: "../../assets/products/CH_8310_1_1_22e2f41ab3.png",
            gallery: [
                "../../assets/products/CH_8310_1_1_22e2f41ab3.png",
                "../../assets/products/image_1_6_011ee9a31d.png",
                "../../assets/products/jubu_1_5ace88ead2.png",
                "../../assets/products/2_2_1_e56027eaed.png",
                "../../assets/products/18ujoa_2_83558310d9.png"
            ],
            
            short_description: "A highly cost-effective, space-saving 3-part hematology analyzer delivering 45 tests/hour and robust data management capabilities.",
            key_highlights: [
                "3-Part Hematology Analyzer",
                "Throughput: 45 Tests/Hour",
                "20 reportable parameters + 2 research parameters",
                "Minimal blood requirement: Only 9μL for CBC counting",
                "Cost-Effective: Requires only 2 routine reagents and 1 probe cleanser"
            ],
            
            overview_text: "Redefining Blood Diagnostics – One Drop at a Time. The CH8310 Automatic Hematology Analyzer is your gateway to better diagnostics, offering unmatched core performance in a compact, user-centric design.",
            
            features: [
                { title: "Unmatched Core Performance", text: "Delivers a throughput of 45 tests/hour. Provides 20 reportable and 2 research parameters while requiring only 9μL of blood sample for CBC counting." },
                { title: "User-Centric Design & Connectivity", text: "Features a space-saving design with built-in lyse storage for more flexible operations. Offers various printer connectivity options tailored to your lab's needs." },
                { title: "Modern & Intuitive Interface", text: "Equipped with a 10.4-inch capacitive touch screen offering a modern and intuitive interface, complete with one-click troubleshooting and unclogging functions." },
                { title: "Optimized Data Management", text: "Boasts a large data storage capacity of up to 200,000 records. Includes 4 USB ports for peripherals (mouse, keyboard, external printer, barcode scanner) and a LAN port for enhanced connectivity." },
                { title: "Cost-Effective Operation", text: "Maintains low running costs by requiring only 2 routine reagents and 1 probe cleanser for maintenance. Flexible configuration supports both open and closed systems." }
            ],
            
            specifications: {
                "Analyzer Type": "3-Part Hematology Analyzer",
                "Throughput": "45 Tests/Hour",
                "Sample Volume (CBC)": "9μL",
                "Parameters": "22 Parameters (20 reportable + 2 research)",
                "Reagents Required": "2 routine reagents, 1 probe cleanser"
            }
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
            custom_url: "single-use-rhinolaryngoscope",
            
            image: "../../assets/products/hugemed-rhinolaryngoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-rhinolaryngoscope-1.png",
                "../../assets/products/hugemed-rhinolaryngoscope-2.png"
            ],
            
            short_description: "Pre-sterilized and ready for immediate use, significantly boosting workflow efficiency and accelerating clinical turnaround in OPD settings.",
            key_highlights: [
                "Sterile Convenience, Streamlined Workflow",
                "High-definition CMOS camera for clear visualization",
                "Medical-grade Pebax insertion tube for flexibility and support",
                "Ergonomic handle under 300g for maximum comfort"
            ],
            
            overview_text: "Making Rhinolaryngoscopy Safer and More Efficient. The Single-use Rhinolaryngoscope features sterile, single-use packaging, eliminating the need for reprocessing and allowing for immediate use. Its medical-grade Pebax insertion tube provides the ideal balance of flexibility and support for effortless exploration of the nasopharynx, while a high-definition CMOS camera ensures clear visualization.",
            
            features: [
                { title: "Born for OPDs", text: "Single-use for fast clinical turnaround; quick connection to the portable image processor MS-8 with its integrated 15.6\" FHD touchscreen display for instant report generation and printing." },
                { title: "Lightweight and Easily Maneuverable", text: "Compact and lightweight ergonomic handle (under 300g), ensuring ease of handling and portability." },
                { title: "Enhanced Patient Comfort", text: "Designed for a gentle and well-tolerated examination experience. The rhinolaryngoscope's smooth insertion tube and ergonomic design minimize patient discomfort." },
                { title: "Improved Efficiency", text: "“Always Ready-to-use” with no waiting time, eliminating reprocessing and accelerating hospital turnover rate." },
                { title: "Advanced Control & Connectivity", text: "Features smooth bending control, a suction port/button, a working channel for biopsies, and dual multifunction buttons for quick white balance adjustment and screenshots." },
                { title: "Stable Quality", text: "Single-use design ensures that imaging and bending angles always remain in pristine, optimal condition for every patient." }
            ],
            
            specifications: {
                "Insertion Tube": "Medical-grade Pebax",
                "Handle Weight": "< 300g",
                "Camera": "High-definition CMOS, LED at Distal Tip",
                "Controls": "Bending Control, Suction Button, Dual Multifunction Buttons",
                "Working Channel": "Yes (Suction and Biopsy capable)",
                "System Compatibility": "Portable image processor MS-8 (15.6\" FHD display)"
            }
        },
            {
            id: 111,
            name: "Single-use Choledochoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            custom_url: "single-use-choledochoscope",
            
            image: "../../assets/products/hugemed-choledochoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-choledochoscope-1.png",
                "../../assets/products/hugemed-choledochoscope-2.png"
            ],
            
            short_description: "An ideal choice for percutaneous choledochoscopy and bedside T-tube tract choledochoscopy.",
            key_highlights: [
                "Ideal for percutaneous and bedside T-tube tract choledochoscopy",
                "Sterile packaging for immediate use, reducing sterilization costs",
                "Soft, hydrophilic Pebax insertion tube for smooth insertion",
                "Slim 5mm outer diameter for easy sinus tract access"
            ],
            
            overview_text: "The Single-use Choledochoscope offers an effective solution for percutaneous lithotripsy of biliary stones, while also serving as an ideal tool for postoperative care via sinus tract at the bedside. Its sterile packaging allows medical staff to use it immediately across various clinical scenarios, significantly improving diagnostic and treatment efficiency while reducing the cost of sterilization and maintenance.",
            
            features: [
                { title: "Improved Efficiency", text: "“Always Ready-to-use” with no waiting time, accelerating hospital turnover rate and significantly improving diagnostic and treatment efficiency." },
                { title: "Visualized Inspection", text: "The flexible insertion tube, combined with a CMOS camera at distal tip, enables physicians to perform precise diagnosis and treatment under direct visualization." },
                { title: "Smooth Insertion & Navigation", text: "210° up/down angulation at the distal tip, combined with passive bending technology, helps navigate difficult bending section with ease, allowing accurate access to target area." },
                { title: "Minimize Patient Trauma", text: "Features a soft, hydrophilic Pebax insertion tube and a slim 5mm outer diameter for easy bedside sinus tract access and intervention." },
                { title: "Ergonomic & Lightweight Control", text: "The handle is ergonomically designed, with an overall weight of less than 300g, making it comfortable for medical staff to use." },
                { title: "Comprehensive Toolset", text: "Equipped with an irrigation valve, working channel port for biopsies, suction connector/button, and dual multifunction buttons for quick white balance adjustment and screenshots." }
            ],
            
            specifications: {
                "Insertion Tube": "Medical-grade Pebax (Hydrophilic)",
                "Outer Diameter": "5mm",
                "Distal Tip Angulation": "210° Up/Down",
                "Camera": "CMOS with LED at Distal Tip",
                "Handle Weight": "< 300g",
                "Working Channel": "Yes (Suction and Biopsy capable)",
                "Irrigation": "Irrigation Valve included"
            }
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
            custom_url: "single-use-bronchoscope",
            
            image: "../../assets/products/hugemed-bronchoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-bronchoscope-1.png",
                "../../assets/products/hugemed-bronchoscope-2.png"
            ],
            
            short_description: "Available in 9 models, offering comprehensive solutions for airway management and the diagnosis and treatment of respiratory diseases.",
            key_highlights: [
                "9 Model Options (1 Diagnostic, 8 Therapeutic)",
                "Sterile packaging for immediate use, reducing sterilization costs",
                "Compatible with the MS-8 medical image processor",
                "Always Ready-to-use to accelerate ICU patient turnover"
            ],
            
            overview_text: "The Single-use Bronchoscope is available in 9 models (1 diagnostic and 8 therapeutic), designed for different patient groups. These versatile options can handle complex clinical scenarios efficiently, supporting routine and difficult airway intubation, respiratory examinations, bronchoalveolar lavage, biopsy, foreign body removal, and drug delivery in ICU, bedside, and operating room.",
            
            features: [
                { title: "Improved Efficiency", text: "“Always Ready-to-use” with no waiting time, accelerating hospital turnover rate and eliminating sterilization downtime." },
                { title: "Smooth Insertion", text: "210° up/down angulation at the distal tip, combined with passive bending technology, helps navigate difficult bending section with ease. It allows accurate access to target area for precise diagnosis and treatment." },
                { title: "Effortless Handling", text: "With 9 models featuring varied specifications, our single-use bronchoscopes cover a wide range of patient populations and clinical conditions, providing effective solutions for complex respiratory disease management." },
                { title: "Brand-New Design", text: "Newly upgraded to enhance product performance and optimize user experience, delivering clear surgical visuals and ensuring an efficient clinical workflow." },
                { title: "Instructions For Use", text: "Available in Download Center: Instructions for Use for Single-use Bronchoscope V1.0 (7.08MB) and V2.1 (2.89MB)." }
            ],
            
            specifications: {
                "Models": "9 variants (1 Diagnostic, 8 Therapeutic)",
                "Applications": "Intubation, Lavage, Biopsy, Foreign Body Removal, Drug Delivery",
                "Distal Tip Angulation": "210° Up/Down",
                "System Compatibility": "MS-8 Medical Image Processor",
                "Sterilization": "Pre-sterilized, Single-use",
                "Settings": "ICU, Bedside, Operating Room"
            }
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
            name: "HU Series Single-use Ureterorenoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            custom_url: "single-use-ureterorenoscope",
            image: "../../assets/products/hu-series-1.png",
            gallery: [
                "../../assets/products/hu-series-1.png",
                "../../assets/products/hu-series-evolution.png"
            ],
            short_description: "The HU Series Single-use Ureterorenoscope embodies ‘smaller, safer, and more efficient’ innovation—redefining urological standards. It delivers cost-effective and advanced solutions for clinicians and patients.",
            key_highlights: [
                "The World's First Clinically Approved 6.3Fr",
                "Cost-effective with no maintenance",
                "User-friendly ergonomic handle",
                "Up to 285° up and down bending angle",
                "Optimized Imaging with 160K CMOS sensor chip"
            ],
            overview_text: "Slim yet powerful: Through three generations of innovation, the HU series has overcome significant technical challenges. Without changing the working channel diameter 3.6Fr, the insertion tube diameter has progressively been reduced from 9.0Fr to 7.5Fr, and ultimately reach to the extraordinary 6.3Fr. Clinically proven, it reduces Ratio of Endoscope-Sheath Diameter (RESD), enhances maneuverability in RIRS surgery, improves intrarenal pressure management, and sets a new standard in precision urology.",
            features: [
                { title: "Cost-Effective Advantage Over Traditional RIRS", text: "The HU30 series Single-use Ureterorenoscope delivers significant cost savings compared to reusable systems. By eliminating reprocessing and maintenance expenses, it reduces both surgical costs for patients and operational burdens for hospitals. This cost-efficient solution makes advanced RIRS accessible to the value-segment market without compromising performance." },
                { title: "Optimized Usability and Surgical Efficiency", text: "Weighing less than 300g, the HU30M effectively alleviates surgeon fatigue during long procedures. Its standard features, including an adjustable angle knob, 285° bending range, 1080P optimization algorithm, and passive bending function, support doctors in easily tackling even the most challenging surgeries." },
                { title: "Cost-effective", text: "Raise cash flow ratio; No maintenance & disinfection cost." },
                { title: "User-friendly", text: "Simple and intuitive ergonomic handle, giving more comfort and preciseness on the examination." },
                { title: "285° Bending Angle", text: "Bending section made by medical grade stainless steel, Up to 285°up and down bending angle." },
                { title: "1:1 Torque Ratio", text: "The 1:1 torque ratio maximizes the replication of the medical staff's precise movements, ensure smooth surgical procedures." },
                { title: "Optimized Imaging", text: "160K CMOS sensor chip on tip design; Optimized algorithm improves image quality." }
            ]
        },
            {
            id: 118,
            name: "Single-use Cystoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            custom_url: "single-use-cystoscope",
            image: "../../assets/products/hugemed-cystoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-cystoscope-1.png",
                "../../assets/products/hugemed-cystoscope-2.png"
            ],
            short_description: "Designed to lower hospital costs and ensure patient comfort and safety, especially for bladder diverticulum diagnosis and treatment.",
            key_highlights: [
                "Streamlined bullet-shaped tip for minimal resistance",
                "Soft insertion tube wrapped in Pebax",
                "Lightweight and easily maneuverable (< 300g)",
                "210° up-and-down deflection"
            ],
            overview_text: "The Single-use Cystoscope is designed to lower hospital costs and ensures patient comfort and safety. It is suitable for lower urinary system diagnosis and treatment, especially for bladder diverticulum. This disposable solution eliminates reprocessing costs while maintaining high clinical performance. The CY series reduces hospital costs by eliminating disinfection and maintenance. Its affordability enables outpatient cystoscopy, while single-use sterile packaging enhances diagnostic and treatment efficiency.",
            features: [
                { title: "Streamlined Bullet-shaped Tip", text: "The bullet-shaped low-resistance design for tip allows the insertion tube to enter the urethra more easily." },
                { title: "Lightweight and Easily Maneuverable", text: "Compact and lightweight design (less than 300g), ensuring ease of handling and portability." },
                { title: "Cost-effective", text: "Raise cash flow ratio; No maintenance & disinfection cost." },
                { title: "Improved Efficiency", text: "“Always Ready-to-use” with no waiting time, accelerating hospital turnover rate." },
                { title: "Stable Quality", text: "Single-use design ensures that imaging and bending angles always remain in optimal condition." }
            ],
            specifications: {
                "Insertion Tube": "Soft, Pebax wrapped",
                "Deflection": "210° Up/Down",
                "Handle Weight": "< 300g",
                "Tip Design": "Bullet-shaped, low-resistance"
            }
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
            custom_url: "single-use-ureteral-access-sheath",
            image: "../../assets/products/hugemed-ureteral-access-sheath-1.png",
            gallery: [
                "../../assets/products/hugemed-ureteral-access-sheath-1.png",
                "../../assets/products/hugemed-ureteral-access-sheath-2.png"
            ],
            short_description: "A single-use device used together with a URS for RIRS, establishing a flexible and stable pathway in complex urinary anatomy.",
            key_highlights: [
                "Improves single-session stone-free rate (SFR)",
                "Available in 20 flexible combinations of lengths and diameters",
                "Slider Valve for fine control of suction power",
                "Hydrophilic coating and tapered tip for smooth insertion"
            ],
            overview_text: "The Single-use Ureteral Access Sheath establishes a flexible and stable pathway in the complex urinary anatomy to facilitate multiple instrument entries. Clinically, it broadens indications, improves single-session stone-free rate (SFR), shortens operative time, lowers intrarenal pressure and temperature, and enhances visualization and irrigation efficiency. It comes in working lengths of 40/45/50/55 cm and diameters of 8.5/10.5, 9/11, 10/12, 11/13, and 12/14 Fr, yielding 20 flexible combinations that cover needs from ultra-slim access to general negative-pressure aspiration.",
            features: [
                { title: "Slimmer for Smoother Access", text: "Benefiting from active suction that improves outflow and intrarenal pressure control, it allows usage up to RESD ≤ 0.85, enabling the tackling of challenging stones in narrower, deeper calyces." },
                { title: "Advanced Suction Control", text: "Features a Slider Valve for fine control of suction power, enabling effective intrarenal pressure management while improving efficiency." },
                { title: "Reduced Insertion Trauma", text: "The sheath's Beveled Edge design and Tapered Dilator tip design minimize insertion trauma." },
                { title: "Flexible Yet Strong", text: "The Stainless-Steel Flat Coil reinforced shaft balances flexibility with structural strength, while the hydrophilic coating ensures smoother access." },
                { title: "Instructions For Use", text: "Available in Download Center for multiple languages (EN, ES, FR, IT, etc.)" }
            ],
            specifications: {
                "Lengths Available": "40 cm, 45 cm, 50 cm, 55 cm",
                "Diameters Available (Fr)": "8.5/10.5, 9/11, 10/12, 11/13, 12/14",
                "Shaft Design": "Stainless-Steel Flat Coil reinforced",
                "Suction Control": "Slider Valve",
                "Coating": "Hydrophilic Coating with Depth Mark"
            }
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
            custom_url: "video-laryngoscope",
            image: "../../assets/products/hugemed-video-laryngoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-video-laryngoscope-1.png",
                "../../assets/products/hugemed-video-laryngoscope-2.png"
            ],
            short_description: "Reusable flexible scopes that provide patients with a comfortable and cost-effective rhinolaryngoscopy experience.",
            key_highlights: [
                "3 types of imaging parts for different application scenarios",
                "Smart Handle with quick buttons for snapshots and video recording",
                "IPX7 waterproof operational part for easy immersion disinfection",
                "Reusable design helps reduce medical consumable usage"
            ],
            overview_text: "The Video Laryngoscope consists of an imaging part and an operational part. 3 types of imaging part meet the requirements of different application scenarios. The reusable flexible scopes provides patients with comfortable and cost-effective rhinolaryngoscopy experience. The Video Laryngoscope flexible insertion tube offers a notably more comfortable experience for patients compared to rigid ones. It features an IPX7 waterproof operational part, allowing the entire device to be disinfected by immersion after attaching the waterproof cap. Its reusable design helps reduce the use of medical consumables and lowers patient hospitalization costs.",
            features: [
                { title: "Smart Handle", text: "The handle integrates a quick button for snapshots and video recording, along with suction function and bending angle control lever, enhancing clinical efficiency." },
                { title: "Easy Immersion Disinfection", text: "IPX7 waterproofing allows safe and thorough cleaning after attaching the waterproof cap, ensuring reliable reprocessing." },
                { title: "Enhanced Patient Comfort", text: "Designed for a gentle and well-tolerated examination experience, the rhinolaryngoscope's smooth insertion tube and ergonomic design minimize patient discomfort." }
            ],
            specifications: {
                "Design": "Reusable flexible scopes",
                "Waterproofing": "IPX7 (operational part)",
                "Handle Features": "Snapshots, video recording, suction, bending angle control",
                "Imaging Parts": "3 types available"
            }
        },
            {
            id: 124,
            name: "Reusable Ureterorenoscope",
            brand: "HUGEMED",
            category: "Endoscopy",
            custom_url: "reusable-ureterorenoscope",
            image: "../../assets/products/hugemed-reusable-ureterorenoscope-1.png",
            gallery: [
                "../../assets/products/hugemed-reusable-ureterorenoscope-1.png",
                "../../assets/products/hugemed-reusable-ureterorenoscope-2.png"
            ],
            short_description: "Providing cost-effective URS solutions for developing regions with a reusable design and superior durability.",
            key_highlights: [
                "Cost-effective reusable alternative to single-use devices",
                "Streamlined bullet-shaped tip for low resistance and comfort",
                "285° bidirectional bending angle for precision",
                "316L stainless steel bending section for enhanced durability"
            ],
            overview_text: "The Reusable Ureterorenoscope can be reused after immersion disinfection, offering a cost-effective alternative to single-use devices. Its flexible insertion tube and 285° bending angle ensure enhanced maneuverability with no blind spots, improving both patient comfort and procedural efficiency. The bullet-shaped tip features a low-resistance design, allowing smoother insertion into the urethra. Combined with a soft Pebax-wrapped insertion tube, it minimizes urethral trauma, ensuring a safer and more comfortable experience for patients. With a bidirectional bending angle of up to 285° and double bending capability, the reusable ureterorenoscope reaches complex renal anatomy, eliminating blind spots for more accurate diagnosis and treatment.",
            features: [
                { title: "Streamlined Bullet-shaped Tip", text: "The bullet-shaped low-resistance design for tip allows the insertion tube to enter the urethra more easily." },
                { title: "Medical-grade Material", text: "The insertion tube is wrapped in medical-grade composite material Pebax, providing a balanced experience of rigidity and flexibility." },
                { title: "Optimized Imaging", text: "160K CMOS sensor chip on tip design; Optimized algorithm improves image quality." },
                { title: "User-friendly", text: "Simple and intuitive ergonomic handle, giving more comfort and preciseness on the examination." },
                { title: "285° Bending Angle", text: "Bending section made by medical grade stainless steel, Up to 285° up and down bending angle." },
                { title: "1:1 Torque Ratio", text: "The 1:1 torque ratio maximizes the replication of the medical staff's precise movements, ensure smooth surgical procedures." },
                { title: "Superior Durability", text: "316L stainless steel bending section enhances with laser engraving and multi-point micro-welding for exceptional stability and longevity. And the integrated CMOS camera tip is more impact-resistant than fiber-optic endoscopes, significantly reducing repair costs." }
            ],
            specifications: {
                "Design": "Reusable after immersion disinfection",
                "Bending Angle": "285° Up/Down",
                "Insertion Tube": "Soft Pebax-wrapped",
                "Bending Section Material": "316L stainless steel",
                "Camera": "160K CMOS sensor chip"
            }
        },
        {
            id: 125,
            name: "Single-use Ureterorenoscope HU30M",
            brand: "HUGEMED",
            category: "Endoscopy",
            custom_url: "single-use-ureterorenoscope-hu30m",
            image: "../../assets/products/hu30m-hero.png",
            gallery: [
                "../../assets/products/hu30m-hero.png",
                "../../assets/products/hu-series-1.png"
            ],
            short_description: "The world’s first 6.3Fr Single-use Ureterorenoscope approved for surgery, the HU30M, redefines ureteroscopy with effortless ureter engagement, superior maneuverability, and optimal irrigation flow.",
            key_highlights: [
                "6.3Fr O.D. insertion tube",
                "120° left and right insertion tube rotation",
                "Up to 285° up and down bending angle",
                "1:1 Torque Ratio",
                "Facilitates the \"no-touch\" technique"
            ],
            overview_text: "Clinically proven and trusted by global experts, the HU30M enhances safety, efficiency, and patient outcomes—making it the smart choice for modern urology. Its ultra-slim design minimizes trauma while ensuring precision in complex cases.",
            features: [
                { title: "Challenging the Limits of URS", text: "The 6.3Fr insertion tube diameter of the HU30M challenges the conventional limits of ureterorenoscope (URS) design. This innovation provides a surgical solution for congenital or pathological ureteral strictures previously deemed inoperable, expanding treatment options for complex cases." },
                { title: "Enhanced Patient Comfort and Safety", text: "The ultra-thin insertion tube makes it possible to perform procedures without pre-placed double-J stents, sheaths, or guidewires, significantly enhancing patient comfort before and after surgery and accelerating postoperative recovery. Additionally, it provides greater infusion space, helping reduce temperature rise caused by laser lithotripsy, relieving renal pressure, improving the stone-clearance rate in soft-scope RIRS surgeries, and reducing the likelihood of \"stone street\" formation postoperatively." },
                { title: "Optimized Usability and Surgical Efficiency", text: "Weighing less than 300g, the HU30M effectively alleviates surgeon fatigue during long procedures. Its standard features, including an adjustable angle knob, 285° bending range, 1080P optimization algorithm, and passive bending function, support doctors in easily tackling even the most challenging surgeries." },
                { title: "6.3Fr O.D.", text: "Clinical studies have proven its ability to facilitate the \"no-touch\" technique, navigating challenging anatomies while maintaining optimal flow rates for clear visualization." },
                { title: "Adjustable Angle Knob", text: "120° left and right insertion tube rotation." },
                { title: "User-friendly", text: "Simple and intuitive ergonomic handle, giving more comfort and preciseness on the examination." },
                { title: "285° Bending Angle", text: "Bending section made by medical grade stainless steel, Up to 285° up and down bending angle." },
                { title: "1:1 Torque Ratio", text: "The 1:1 torque ratio maximizes the replication of the medical staff's precise movements, ensure smooth surgical procedures." },
                { title: "Stable Quality", text: "Single-use design ensures that imaging and bending angles always remain in optimal condition." }
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
