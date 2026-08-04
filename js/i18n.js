/* ============================================================
   Internationalization Data
   ============================================================ */
const i18n = {
  en: {
    // Sidebar
    name: "Yuxuan Hu",
    title: "Ph.D. Student in Microelectronics",
    affiliation: "HKUST(GZ)",
    location: "Guangzhou, China",

    // Tabs
    tabCV: "CV",
    tabGallery: "Gallery",

    // Gallery
    gallerySelfie: "Selfie",
    galleryLuxembourg: "Luxembourg",

    // CV Sections
    cvEducation: "Education",
    cvPublications: "Publications",
    cvICExperience: "IC Related Experience",
    cvLanguage: "Language",
    cvSkills: "Skills",
    cvHonors: "Honors and Awards",
    cvProjects: "Project Experience",

    // Education
    edu1: {
      school: "Hong Kong University of Science and Technology (Guangzhou)",
      location: "China",
      date: "2026 – Present",
      degree: "Ph.D. student in Microelectronics"
    },
    edu2: {
      school: "Katholieke Universiteit Leuven (KUL)",
      location: "Belgium",
      date: "2024 – 2026",
      degree: "B.Eng. in Electronics and ICT Engineering, graduated July 2026"
    },
    edu3: {
      school: "South China University of Technology (SCUT)",
      location: "China",
      date: "2022 – 2026",
      degree: "B.Eng. in Integrated Circuit Design and Integrated System, graduated July 2026",
      note: "From 2024 Sep studied in Belgium but continued on research project and B.Eng Thesis of SCUT remotely. Received an average score: 85.15/100"
    },

    // Publications
    pub1: {
      title: "A Lightweight LSTM-Based Open-Set RF Fingerprinting Identification for Edge Deployment",
      authors: "Yuxuan Hu¹, Yutong Fu², Ye Chen³,*",
      venue: "Scientific Reports (JCR Q1)",
      link: "https://www.nature.com/articles/s41598-025-25417-2"
    },

    // IC Experience
    icExp1: {
      title: "Ranked 11th in ICCAD Contest 2025 C Problem",
      desc: "Incremental Placement Optimization Beyond Detailed Placement"
    },
    icExp2: "Ranked 10th in ISPD Contest 2026",
    icExp3: "Worked as research assistant at Hong Kong University of Science and Technology (Guangzhou)",
    icExp4: "B.Eng. Thesis of SCUT: Incremental Optimization via Gate Sizing and Cell Relocation After Detailed Placement",

    // Language
    lang1: "English – Fluent (IELTS 7.0) and dual bachelor's degree program in English",
    lang2: "Chinese – Native speaker",

    // Skills
    skill1: "Programming: C++, Tcl, Shell, CUDA, MATLAB, Python, Verilog, Java, Assembly",
    skill2: "Modeling & CFD: Solidworks, Ansys Fluent",
    skill3: "3D Printing",
    skill4: "Embedded Development: STM8S, STM32, ESP32, Raspberry Pi, NRF24",

    // Honors
    honor1: { text: "First-class \"Hong Ping Chang Qing\" Technology Innovation Scholarship", date: "2023" },
    honor2: { text: "Full scholarship on Innovative Talents Science Training Summer Research Program from China International Education Institute", date: "2024" },
    honor3: { text: "Meritorious Winner on MCM/ICM", date: "2024" },
    honor4: { text: "First Prize on Asia and Pacific Mathematical Contest in Modeling", date: "2023" },
    honor5: { text: "Second Prize of Guangdong on China Undergraduate Mathematical Contest in Modeling", date: "2023" },
    honor6: { text: "Third-class Scholarship of SCUT", date: "2023" },
    honor7: { text: "Third-class Scholarship of Excellence Group", date: "2023" },
    honor8: { text: "Advanced Individual of SCUT", date: "2022" },
    honor9: { text: "Third Prize on Asia and Pacific Mathematical Contest in Modeling", date: "2022" },
    honor10: { text: "Second Prize of Guangdong on Chinese Physics Olympiad", date: "2020" },
    honor11: { text: "First Prize on Shenzhen Physics Olympiad", date: "2019" },

    // Projects
    project1: {
      title: "Led a research project supervised by Prof. Danijela Cabric (UCLA)",
      desc: "Deep learning for radio frequency fingerprinting and its implementation on edge computing system"
    },
    project2: "Developed a video game and its video display driver on FPGA",
    project3: "Intelligent home system based on Raspberry Pi",
    project4: "Smoking behavior identification alerts in open environments",
    project5: "Bluetooth access control system based on STM8S and Android",
    project6: "Building an online gaming web server",
    project7: "Self-balancing two-wheeler based on STM32"
  },

  zh: {
    // Sidebar
    name: "胡宇轩",
    title: "微电子学博士研究生",
    affiliation: "香港科技大学(广州)",
    location: "中国·广州",

    // Tabs
    tabCV: "简历",
    tabGallery: "相册",

    // Gallery
    gallerySelfie: "自拍",
    galleryLuxembourg: "卢森堡",

    // CV Sections
    cvEducation: "教育背景",
    cvPublications: "学术发表",
    cvICExperience: "集成电路相关经历",
    cvLanguage: "语言能力",
    cvSkills: "技能",
    cvHonors: "荣誉与奖项",
    cvProjects: "项目经历",

    // Education
    edu1: {
      school: "香港科技大学(广州)",
      location: "中国",
      date: "2026 – 至今",
      degree: "微电子学博士研究生"
    },
    edu2: {
      school: "鲁汶大学 (KUL)",
      location: "比利时",
      date: "2024 – 2026",
      degree: "电子与ICT工程工学学士，2026年7月毕业"
    },
    edu3: {
      school: "华南理工大学 (SCUT)",
      location: "中国",
      date: "2022 – 2026",
      degree: "集成电路设计与集成系统工学学士，2026年7月毕业",
      note: "2024年9月起在比利时学习，同时远程继续华南理工大学的研究项目和毕业论文。平均分：85.15/100"
    },

    // Publications
    pub1: {
      title: "A Lightweight LSTM-Based Open-Set RF Fingerprinting Identification for Edge Deployment",
      authors: "胡宇轩¹, 付玉彤², 陈烨³,*",
      venue: "Scientific Reports (JCR Q1)",
      link: "https://www.nature.com/articles/s41598-025-25417-2"
    },

    // IC Experience
    icExp1: {
      title: "ICCAD Contest 2025 C题 第11名",
      desc: "增量式布局优化超越详细布局"
    },
    icExp2: "ISPD Contest 2026 第10名",
    icExp3: "在香港科技大学(广州)担任研究助理",
    icExp4: "华南理工大学毕业论文：详细布局后的增量优化——门尺寸调整与单元重定位",

    // Language
    lang1: "英语 – 流利 (雅思7.0)，全英文双学位项目",
    lang2: "中文 – 母语",

    // Skills
    skill1: "编程：C++, Tcl, Shell, CUDA, MATLAB, Python, Verilog, Java, Assembly",
    skill2: "建模与CFD：Solidworks, Ansys Fluent",
    skill3: "3D打印",
    skill4: "嵌入式开发：STM8S, STM32, ESP32, 树莓派, NRF24",

    // Honors
    honor1: { text: "\"宏平长青\"科技创新奖学金一等奖", date: "2023" },
    honor2: { text: "中国国际教育学院创新型人才科学训练暑期研究项目全额奖学金", date: "2024" },
    honor3: { text: "美国大学生数学建模竞赛(MCM/ICM) 一等奖(Meritorious Winner)", date: "2024" },
    honor4: { text: "亚太地区大学生数学建模竞赛一等奖", date: "2023" },
    honor5: { text: "全国大学生数学建模竞赛广东省二等奖", date: "2023" },
    honor6: { text: "华南理工大学奖学金三等奖", date: "2023" },
    honor7: { text: "卓越集团奖学金三等奖", date: "2023" },
    honor8: { text: "华南理工大学先进个人", date: "2022" },
    honor9: { text: "亚太地区大学生数学建模竞赛三等奖", date: "2022" },
    honor10: { text: "全国中学生物理竞赛广东省二等奖", date: "2020" },
    honor11: { text: "深圳市中学生物理竞赛一等奖", date: "2019" },

    // Projects
    project1: {
      title: "主导由UCLA Danijela Cabric教授指导的研究项目",
      desc: "基于深度学习的射频指纹识别及其在边缘计算系统上的实现"
    },
    project2: "在FPGA上开发视频游戏及其视频显示驱动",
    project3: "基于树莓派的智能家居系统",
    project4: "开放环境下的吸烟行为识别与预警",
    project5: "基于STM8S和Android的蓝牙门禁系统",
    project6: "搭建在线游戏网页服务器",
    project7: "基于STM32的自平衡两轮车"
  }
};
