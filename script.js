/* =========================================================
       HELPERS
    ========================================================= */

    function escapeHTML(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function safeURL(url) {
      if (!url) return "";
      const value = String(url).trim();
      if (
        value.startsWith("https://") ||
        value.startsWith("http://") ||
        value.startsWith("mailto:")
      ) {
        return value;
      }
      return "";
    }


    /* =========================================================
       CONTACT INFO CONFIG
    ========================================================= */

    const CONTACT = {
      EMAIL: 'praveenkrpal216' + '@' + 'gmail' + '.com',
      PHONE: '+91 ' + '7217' + '869637',
      PHONE_LINK: '+91' + '7217869637',
      GITHUB: 'https://github' + '.com/Praveenkrpal',
      LINKEDIN: 'https://linkedin' + '.com/in/praveenkrpal',
      RESUME: 'assets/Praveen-Kumar-Resume.pdf'
    };


    /* =========================================================
       INITIALIZE CONTACT INFO
    ========================================================= */

    function initializeSecureData() {
      document.querySelectorAll('[data-social="github"]').forEach(el => {
        el.href = CONTACT.GITHUB;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      });

      document.querySelectorAll('[data-social="linkedin"]').forEach(el => {
        el.href = CONTACT.LINKEDIN;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      });

      document.querySelectorAll('[data-social="email"]').forEach(el => {
        el.href = 'mailto:' + CONTACT.EMAIL;
      });

      document.querySelectorAll('[data-contact="email"]').forEach(el => {
        el.href = 'mailto:' + CONTACT.EMAIL;
        const display = el.querySelector('#emailDisplay');
        if (display) display.textContent = CONTACT.EMAIL;
      });

      document.querySelectorAll('[data-contact="phone"]').forEach(el => {
        el.href = 'tel:' + CONTACT.PHONE_LINK;
        const display = el.querySelector('#phoneDisplay');
        if (display) display.textContent = CONTACT.PHONE;
      });

      const contactBtn = document.getElementById('contactEmailBtn');
      if (contactBtn) contactBtn.href = 'mailto:' + CONTACT.EMAIL;
    }


    /* =========================================================
       HERO FLIP CARD TOGGLE
    ========================================================= */

    function initializeHeroFlip() {
      const wrapper = document.getElementById("heroFlipWrapper");
      if (!wrapper) return;

      wrapper.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        wrapper.classList.toggle("flipped");
      });

      wrapper.setAttribute("tabindex", "0");
      wrapper.setAttribute("role", "button");
      wrapper.setAttribute("aria-label", "Click to flip the card");

      wrapper.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          wrapper.classList.toggle("flipped");
        }
      });
    }


    /* =========================================================
       RESUME DOWNLOAD
    ========================================================= */

    function downloadResumeFile() {
      const uploaded = localStorage.getItem("portfolioResume");
      const fileName = localStorage.getItem("portfolioResumeName") || "Praveen-Kumar-Resume.pdf";

      const link = document.createElement("a");
      if (uploaded) {
        link.href = uploaded;
        link.download = fileName;
      } else {
        link.href = CONTACT.RESUME;
        link.download = "Praveen-Kumar-Resume.pdf";
      }
      document.body.appendChild(link);
      link.click();
      link.remove();
    }


    /* =========================================================
       TOAST
    ========================================================= */

    let toastTimer;

    function showToast(message) {
      const toast = document.getElementById("toast");
      const toastMessage = document.getElementById("toastMessage");
      if (!toast || !toastMessage) return;
      toastMessage.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
    }


    /* =========================================================
       DEFAULT DATA
    ========================================================= */

    const DEFAULT_SKILLS = [
      {
        id: "frontend", category: "Frontend", icon: "fa-code",
        skills: [
          { id: "html5", name: "HTML5", icon: "fa-brands fa-html5" },
          { id: "css3", name: "CSS3", icon: "fa-brands fa-css3-alt" },
          { id: "javascript", name: "JavaScript", icon: "fa-brands fa-js" },
          { id: "react", name: "React.js", icon: "fa-brands fa-react" },
          { id: "redux-toolkit", name: "Redux Toolkit", icon: "fa-solid fa-layer-group" },
          { id: "api-integration", name: "API Integration", icon: "fa-solid fa-plug" },
          { id: "tailwind", name: "Tailwind CSS", icon: "fa-solid fa-wind" },
          { id: "bootstrap", name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
          { id: "ant-design", name: "Ant Design", icon: "fa-solid fa-palette" },
          { id: "material-ui", name: "Material UI", icon: "fa-solid fa-layer-group" }
        ]
      },
      {
        id: "backend", category: "Backend", icon: "fa-server",
        skills: [
          { id: "node", name: "Node.js", icon: "fa-brands fa-node-js" },
          { id: "express", name: "Express.js", icon: "fa-solid fa-server" },
          { id: "rest", name: "REST APIs", icon: "fa-solid fa-plug" },
          { id: "jwt", name: "JWT Authentication", icon: "fa-solid fa-shield-halved" },
          { id: "socketio", name: "Socket.IO", icon: "fa-solid fa-tower-broadcast" },
          { id: "nodemailer", name: "Nodemailer", icon: "fa-solid fa-envelope" },
          { id: "resend-mail", name: "Resend Mail", icon: "fa-solid fa-paper-plane" },
          { id: "mobile-otp", name: "Mobile OTP Authentication", icon: "fa-solid fa-mobile-screen-button" }
        ]
      },
      {
        id: "database", category: "Database", icon: "fa-database",
        skills: [
          { id: "mongodb", name: "MongoDB", icon: "fa-solid fa-leaf" },
          { id: "sql", name: "SQL", icon: "fa-solid fa-database" },
          { id: "mongoose", name: "Mongoose", icon: "fa-solid fa-leaf" },
          { id: "sequelize", name: "Sequelize", icon: "fa-solid fa-database" }
        ]
      },
      {
        id: "tools", category: "Tools & Deployment", icon: "fa-screwdriver-wrench",
        skills: [
          { id: "git", name: "Git", icon: "fa-brands fa-git-alt" },
          { id: "github", name: "GitHub", icon: "fa-brands fa-github" },
          { id: "framer-motion", name: "Framer Motion", icon: "fa-solid fa-wand-magic-sparkles" },
          { id: "vercel", name: "Vercel", icon: "fa-solid fa-cloud" },
          { id: "iis", name: "IIS", icon: "fa-solid fa-server" },
          { id: "vscode", name: "VS Code", icon: "fa-solid fa-code" }
        ]
      }
    ];

    const DEFAULT_EXPERIENCE = [{
      id: "dns-group",
      role: "Full Stack Developer",
      company: "DNS Group",
      location: "New Delhi",
      start: "March 2025",
      end: "Present",
      summary: "Working on enterprise ERP applications and developing scalable business solutions for internal users.",
      points: [
        "Developed ERP application with 15+ business modules.",
        "Built reusable pagination, tax calculation, auto-select and stock components.",
        "Implemented role-based permissions and user rights.",
        "Optimized SQL and Sequelize queries for better performance.",
        "Managed deployment and application access through IIS.",
        "Participated in code reviews and mentored team members."
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Sequelize", "Tailwind", "Bootstrap", "Material UI", "IIS"]
    }];

    const DEFAULT_PROJECTS = [
      {
        id: "nexchat",
        title: "NexChat — Real-Time Chat Application",
        description: "A MERN-stack real-time messaging application with JWT authentication, Socket.IO chat, online status, typing indicators, image and file sharing through MongoDB GridFS, and message delivery/read receipts.",
        github: "",
        live: "",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO", "JWT", "GridFS", "REST API"],
        image: "images/nexchat.png",
        screenshots: [
          "images/nexchat.png",
          "images/nexchat-login.png",
          "images/nexchat-signup.png"
        ],
        features: [
          "Real-time one-to-one messaging with Socket.IO",
          "JWT-based authentication and protected routes",
          "Image and file sharing with MongoDB GridFS",
          "Online presence and typing indicators",
          "Message delivery status and read receipts"
        ]
      },
      {
        id: 3,
        title: "Skills-with-Notes",
        description: "A modern notes reading/learning platform built with React.js. Skillswit-Notes is a React-powered platform designed to help users discover, read, and organize educational notes efficiently!",
        github: "",
        live: "https://skilled-with-notes.vercel.app",
        technologies: ["ReactJS", "Tailwind CSS"],
        image: "images/Skilled-with-Notes snap.png"
      },
      {
        id: 1,
        title: "Plant Shop",
        description: "A modern React e-commerce website for plant lovers, featuring product browsing, cart management, user authentication, and an easy shopping experience.",
        github: "",
        live: "https://plant-shop-virid.vercel.app",
        technologies: ["ReactJS", "Tailwind CSS"],
        image: "images/plantshop-website-snap.png"
      },
      {
        id: 2,
        title: "ImageSearch",
        description: "A responsive web application that allows users to search for high-quality images and videos from Unsplash and Pexels APIs.",
        github: "",
        live: "https://praveenkrimagesearch.netlify.app",
        technologies: ["React", "Tailwind CSS", "Redux Toolkit"],
        image: "images/image-search-website-snap.png"
      }
    ];
    let skills = [];
    let experiences = [];
    let projects = [];


    /* =========================================================
       SKILLS
    ========================================================= */

    function initializeSkills() {
      const saved = localStorage.getItem("portfolioSkills");
      try {
        if (saved) {
          const savedSkills = JSON.parse(saved);
          // Preserve user-managed skills while adding any new resume skills to existing categories.
          skills = Array.isArray(savedSkills) ? savedSkills : JSON.parse(JSON.stringify(DEFAULT_SKILLS));
          DEFAULT_SKILLS.forEach(defaultCategory => {
            let category = skills.find(item => item.id === defaultCategory.id);
            if (!category) {
              skills.push(JSON.parse(JSON.stringify(defaultCategory)));
              return;
            }
            if (!Array.isArray(category.skills)) category.skills = [];
            defaultCategory.skills.forEach(defaultSkill => {
              const exists = category.skills.some(item =>
                item.id === defaultSkill.id || item.name.toLowerCase() === defaultSkill.name.toLowerCase()
              );
              if (!exists) category.skills.push({ ...defaultSkill });
            });
          });
          localStorage.setItem("portfolioSkills", JSON.stringify(skills));
        } else {
          skills = JSON.parse(JSON.stringify(DEFAULT_SKILLS));
        }
      } catch {
        skills = JSON.parse(JSON.stringify(DEFAULT_SKILLS));
      }
      renderSkills();
    }

    function saveSkills() {
      localStorage.setItem("portfolioSkills", JSON.stringify(skills));
    }

    function renderSkills() {
      const container = document.getElementById("skillsContainer");
      if (!container) return;
      container.innerHTML = "";

      skills.forEach(category => {
        const card = document.createElement("div");
        card.className = "skill-card";

        const skillHTML = category.skills.length
          ? category.skills.map(skill => `
            <div class="skill-item">
              <i class="${escapeHTML(skill.icon)}"></i>
              <span>${escapeHTML(skill.name)}</span>
              <div class="skill-item-actions">
                <button type="button" class="skill-action-btn" onclick="openEditSkillModal('${category.id}', '${skill.id}')">
                  <i class="fas fa-pen"></i>
                </button>
                <button type="button" class="skill-action-btn delete" onclick="deleteSkill('${category.id}', '${skill.id}')">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          `).join("")
          : `<div class="skill-empty"><i class="far fa-folder-open"></i>No skills added yet</div>`;

        card.innerHTML = `
          <div class="skill-card-header">
            <div class="skill-category-info">
              <div class="skill-category-icon">
                <i class="fas ${escapeHTML(category.icon)}"></i>
              </div>
              <div>
                <h3>${escapeHTML(category.category)}</h3>
                <span class="skill-count">${category.skills.length} ${category.skills.length === 1 ? "technology" : "technologies"}</span>
              </div>
            </div>
            <button type="button" class="skill-add-btn" onclick="openAddSkillModal('${category.id}')">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="skill-list">${skillHTML}</div>
        `;
        container.appendChild(card);
      });
    }

    function openAddSkillModal(categoryId) {
      const category = skills.find(item => item.id === categoryId);
      if (!category) return;

      document.getElementById("skillModalTitle").textContent = `Add Skill to ${category.category}`;
      document.getElementById("skillId").value = "";
      document.getElementById("skillCategory").value = category.category;
      document.getElementById("skillCategory").disabled = true;
      document.getElementById("skillName").value = "";
      document.getElementById("skillIcon").value = "fa-solid fa-code";
      document.getElementById("skillForm").dataset.categoryId = categoryId;

      document.getElementById("skillModal").classList.add("active");
      document.body.classList.add("modal-open");
      setTimeout(() => document.getElementById("skillName").focus(), 100);
    }

    function openEditSkillModal(categoryId, skillId) {
      const category = skills.find(item => item.id === categoryId);
      if (!category) return;
      const skill = category.skills.find(item => item.id === skillId);
      if (!skill) return;

      document.getElementById("skillModalTitle").textContent = "Edit Skill";
      document.getElementById("skillId").value = skill.id;
      document.getElementById("skillCategory").value = category.category;
      document.getElementById("skillCategory").disabled = true;
      document.getElementById("skillName").value = skill.name;
      document.getElementById("skillIcon").value = skill.icon;
      document.getElementById("skillForm").dataset.categoryId = categoryId;
      document.getElementById("skillModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function closeSkillModal() {
      document.getElementById("skillModal").classList.remove("active");
      document.body.classList.remove("modal-open");
      document.getElementById("skillForm").reset();
      document.getElementById("skillForm").dataset.categoryId = "";
      document.getElementById("skillCategory").disabled = false;
    }

    function saveSkill(event) {
      event.preventDefault();
      const form = document.getElementById("skillForm");
      const categoryId = form.dataset.categoryId;
      const skillId = document.getElementById("skillId").value.trim();
      const name = document.getElementById("skillName").value.trim();
      const icon = document.getElementById("skillIcon").value.trim();

      if (!name) { showToast("Please enter a skill name."); return; }

      const category = skills.find(item => item.id === categoryId);
      if (!category) { showToast("Category not found."); return; }

      if (skillId) {
        const skill = category.skills.find(item => item.id === skillId);
        if (skill) {
          skill.name = name;
          skill.icon = icon || "fa-solid fa-code";
          showToast(`${name} updated successfully.`);
        }
      } else {
        category.skills.push({
          id: "skill-" + Date.now(),
          name,
          icon: icon || "fa-solid fa-code"
        });
        showToast(`${name} added to ${category.category}.`);
      }

      saveSkills();
      renderSkills();
      closeSkillModal();
    }

    function deleteSkill(categoryId, skillId) {
      const category = skills.find(item => item.id === categoryId);
      if (!category) return;
      const skill = category.skills.find(item => item.id === skillId);
      if (!skill) return;

      if (!confirm(`Delete "${skill.name}" from ${category.category}?`)) return;

      category.skills = category.skills.filter(item => item.id !== skillId);
      saveSkills();
      renderSkills();
      showToast(`${skill.name} deleted.`);
    }


    /* =========================================================
       EXPERIENCE
    ========================================================= */

    function initializeExperience() {
      const saved = localStorage.getItem("portfolioExperience");
      try {
        experiences = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_EXPERIENCE));
      } catch {
        experiences = JSON.parse(JSON.stringify(DEFAULT_EXPERIENCE));
      }
      renderExperience();
    }

    function saveExperience() {
      localStorage.setItem("portfolioExperience", JSON.stringify(experiences));
    }

    function renderExperience() {
      const container = document.getElementById("experienceContainer");
      if (!container) return;

      if (!experiences.length) {
        container.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-briefcase"></i>
            <h3>No experience added</h3>
            <p>Click "Manage Experience" to add your experience.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = experiences.map((experience, index) => {
        const points = experience.points.map(point => `
          <div><i class="fas fa-arrow-right"></i><span>${escapeHTML(point)}</span></div>
        `).join("");

        const technologies = experience.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join("");

        return `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="experience-top">
                <div>
                  <span class="experience-date">${escapeHTML(experience.start)} — ${escapeHTML(experience.end)}</span>
                  <h3>${escapeHTML(experience.role)}</h3>
                  <p class="company">${escapeHTML(experience.company)}${experience.location ? ` · ${escapeHTML(experience.location)}` : ""}</p>
                </div>
                <div class="experience-number">${String(index + 1).padStart(2, "0")}</div>
              </div>
              ${experience.summary ? `<p class="experience-summary">${escapeHTML(experience.summary)}</p>` : ""}
              ${experience.points.length ? `<div class="experience-points">${points}</div>` : ""}
              ${experience.technologies.length ? `<div class="technology-tags">${technologies}</div>` : ""}
              <div class="experience-admin-actions">
                <button type="button" onclick="openEditExperienceModal('${experience.id}')">
                  <i class="fas fa-pen"></i> Edit
                </button>
                <button type="button" class="delete" onclick="deleteExperience('${experience.id}')">
                  <i class="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    function openAddExperienceModal() {
      document.getElementById("experienceForm").reset();
      document.getElementById("experienceId").value = "";
      document.getElementById("experienceModalTitle").textContent = "Add Experience";
      document.getElementById("experienceModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function openEditExperienceModal(id) {
      const exp = experiences.find(item => item.id === id);
      if (!exp) return;

      document.getElementById("experienceId").value = exp.id;
      document.getElementById("experienceRole").value = exp.role;
      document.getElementById("experienceCompany").value = exp.company;
      document.getElementById("experienceLocation").value = exp.location || "";
      document.getElementById("experienceStart").value = exp.start || "";
      document.getElementById("experienceEnd").value = exp.end || "";
      document.getElementById("experienceSummary").value = exp.summary || "";
      document.getElementById("experiencePoints").value = exp.points.join("\n");
      document.getElementById("experienceTech").value = exp.technologies.join(", ");
      document.getElementById("experienceModalTitle").textContent = "Edit Experience";
      document.getElementById("experienceModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function closeExperienceModal() {
      document.getElementById("experienceModal").classList.remove("active");
      document.body.classList.remove("modal-open");
    }

    function saveExperienceForm(event) {
      event.preventDefault();
      const id = document.getElementById("experienceId").value.trim();
      const role = document.getElementById("experienceRole").value.trim();
      const company = document.getElementById("experienceCompany").value.trim();
      const location = document.getElementById("experienceLocation").value.trim();
      const start = document.getElementById("experienceStart").value.trim();
      const end = document.getElementById("experienceEnd").value.trim();
      const summary = document.getElementById("experienceSummary").value.trim();
      const points = document.getElementById("experiencePoints").value.split("\n").map(i => i.trim()).filter(Boolean);
      const technologies = document.getElementById("experienceTech").value.split(",").map(i => i.trim()).filter(Boolean);

      if (!role || !company) { showToast("Role and company are required."); return; }

      if (id) {
        const index = experiences.findIndex(item => item.id === id);
        if (index !== -1) {
          experiences[index] = { ...experiences[index], role, company, location, start, end, summary, points, technologies };
        }
        showToast("Experience updated successfully.");
      } else {
        experiences.unshift({
          id: "experience-" + Date.now(),
          role, company, location, start, end, summary, points, technologies
        });
        showToast("Experience added successfully.");
      }

      saveExperience();
      renderExperience();
      closeExperienceModal();
    }

    function deleteExperience(id) {
      const exp = experiences.find(item => item.id === id);
      if (!exp) return;
      if (!confirm(`Delete "${exp.role} at ${exp.company}"?`)) return;
      experiences = experiences.filter(item => item.id !== id);
      saveExperience();
      renderExperience();
      showToast("Experience deleted.");
    }


    /* =========================================================
       PROJECTS
    ========================================================= */

    function initializeProjects() {
      const saved = localStorage.getItem("portfolioProjects");
      try {
        projects = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
        if (!Array.isArray(projects)) {
          projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
        }
      } catch {
        projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
      }

      // Remove the two unwanted duplicate cards from previously saved browser data.
      // Keep Plant Shop, ImageSearch, Skills-with-Notes, and NexChat.
      const beforeCleanup = projects.length;
      projects = projects.filter(project => {
        const title = String(project.title || "").trim().toLowerCase();
        return !title.includes("greenleaf") && title !== "skillswit-notes";
      });

      // Migrate existing browser-saved projects: add NexChat once without
      // overwriting projects that the portfolio owner has already managed.
      const nexChat = DEFAULT_PROJECTS.find(project => project.id === "nexchat");
      const alreadyAdded = projects.some(project =>
        String(project.id) === "nexchat" ||
        String(project.title || "").toLowerCase().includes("nexchat")
      );

      if (nexChat && !alreadyAdded) {
        projects.push({ ...nexChat });
      }

      // Keep the requested project order even when projects were saved in Local Storage.
      const getProjectOrder = project => {
        const id = String(project.id || "").toLowerCase();
        const title = String(project.title || "").trim().toLowerCase();
        if (id === "nexchat" || title.includes("nexchat")) return 0;
        if (title.includes("skill") && title.includes("notes")) return 1;
        if (title === "plant shop") return 2;
        if (title === "imagesearch" || title.includes("image search")) return 3;
        return 4;
      };
      projects.sort((a, b) => getProjectOrder(a) - getProjectOrder(b));

      // Keep NexChat's image paths in sync with the actual files in the images folder,
      // including projects that were already saved in the browser's Local Storage.
      projects.forEach(project => {
        const isNexChat =
          String(project.id || "").toLowerCase() === "nexchat" ||
          String(project.title || "").toLowerCase().includes("nexchat");

        if (isNexChat) {
          project.image = "images/nexchat.png";
          project.screenshots = [
            "images/nexchat.png",
            "images/nexchat-login.png",
            "images/nexchat-signup.png"
          ];
        }
      });

      // Save cleanup, migration, and ordering so it persists after refresh.
      if (projects.length !== beforeCleanup || (nexChat && !alreadyAdded) || saved) {
        saveProjects();
      }

      renderProjects();
    }

    function saveProjects() {
      localStorage.setItem("portfolioProjects", JSON.stringify(projects));
    }

    function renderProjects() {
      const container = document.getElementById("projectsContainer");
      if (!container) return;

      if (!projects.length) {
        container.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-folder-open"></i>
            <h3>No projects yet</h3>
            <p>Click "Manage Projects" to add your first project.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = projects.map(project => {
        const github = safeURL(project.github);
        const live = safeURL(project.live);

        const imageContent = project.image
          ? `<img src="${project.image}" alt="${escapeHTML(project.title)}" />`
          : `<div style="display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:40px;height:100%;"><i class="fas fa-code"></i></div>`;

        const imageSection = live
          ? `<a href="${escapeHTML(live)}" target="_blank" rel="noopener noreferrer" class="project-image-link" aria-label="Open ${escapeHTML(project.title)}">${imageContent}</a>`
          : imageContent;

        const technologyTags = (project.technologies || []).map(tech => `<span>${escapeHTML(tech)}</span>`).join("");
        const featureList = Array.isArray(project.features) && project.features.length
          ? `<ul class="project-feature-list">${project.features.map(feature => `<li><i class="fas fa-check-circle"></i><span>${escapeHTML(feature)}</span></li>`).join("")}</ul>`
          : "";
        const screenshotGallery = Array.isArray(project.screenshots) && project.screenshots.length > 1
          ? `<div class="project-screenshot-gallery" aria-label="${escapeHTML(project.title)} screenshots">${project.screenshots.slice(1).map((src, index) => `<a href="${escapeHTML(src)}" target="_blank" rel="noopener noreferrer" aria-label="Open screenshot ${index + 2} for ${escapeHTML(project.title)}"><img src="${escapeHTML(src)}" alt="${escapeHTML(project.title)} screenshot ${index + 2}" loading="lazy"></a>`).join("")}</div>`
          : "";

        const titleHTML = live
          ? `<a href="${escapeHTML(live)}" target="_blank" rel="noopener noreferrer" class="project-title-link"><h3>${escapeHTML(project.title)}</h3></a>`
          : `<h3>${escapeHTML(project.title)}</h3>`;

        const viewBtn = live
          ? `<a href="${escapeHTML(live)}" target="_blank" rel="noopener noreferrer" class="project-view-btn">View More <i class="fas fa-arrow-right"></i></a>`
          : `<a href="#" class="project-view-btn">View More <i class="fas fa-arrow-right"></i></a>`;

        return `
          <article class="project-card">
            <div class="project-image">${imageSection}</div>
            <div class="project-content">
              <div class="project-title-row">
                ${titleHTML}
                <div class="project-links">
                  ${github ? `<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ""}
                  ${live ? `<a href="${escapeHTML(live)}" target="_blank" rel="noopener noreferrer" aria-label="Live Project"><i class="fas fa-arrow-up-right-from-square"></i></a>` : ""}
                </div>
              </div>
              <p>${escapeHTML(project.description)}</p>
              ${featureList}
              ${screenshotGallery}
              <div class="project-tags">${technologyTags}</div>
              ${viewBtn}
              <div class="project-admin-actions">
                <button type="button" onclick="openEditProject('${project.id}')">
                  <i class="fas fa-pen"></i> Edit
                </button>
                <button type="button" class="delete" onclick="deleteProject('${project.id}')">
                  <i class="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    let selectedProjectImage = "";

    function openAddProject() {
      document.getElementById("projectForm").reset();
      document.getElementById("projectId").value = "";
      selectedProjectImage = "";
      document.getElementById("projectModalTitle").textContent = "Add Project";
      resetProjectImagePreview();
      document.getElementById("projectModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function openEditProject(id) {
      const project = projects.find(item => String(item.id) === String(id));
      if (!project) return;

      document.getElementById("projectId").value = project.id;
      document.getElementById("projectTitle").value = project.title;
      document.getElementById("projectDescription").value = project.description;
      document.getElementById("projectGithub").value = project.github || "";
      document.getElementById("projectLive").value = project.live || "";
      document.getElementById("projectTech").value = project.technologies.join(", ");
      selectedProjectImage = project.image || "";
      renderProjectImagePreview();
      document.getElementById("projectModalTitle").textContent = "Edit Project";
      document.getElementById("projectModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function closeProjectModalFunction() {
      document.getElementById("projectModal").classList.remove("active");
      document.body.classList.remove("modal-open");
    }

    function saveProject(event) {
      event.preventDefault();
      const title = document.getElementById("projectTitle").value.trim();
      const description = document.getElementById("projectDescription").value.trim();
      const github = document.getElementById("projectGithub").value.trim();
      const live = document.getElementById("projectLive").value.trim();
      const technologies = document.getElementById("projectTech").value.split(",").map(i => i.trim()).filter(Boolean);
      const id = document.getElementById("projectId").value;

      if (!title || !description) { showToast("Project title and description are required."); return; }

      if (id) {
        const index = projects.findIndex(item => String(item.id) === String(id));
        if (index !== -1) {
          projects[index] = { ...projects[index], title, description, github, live, technologies, image: selectedProjectImage || projects[index].image || "" };
        }
        showToast("Project updated successfully.");
      } else {
        projects.unshift({
          id: Date.now(),
          title, description, github, live, technologies,
          image: selectedProjectImage
        });
        showToast("Project added successfully.");
      }

      saveProjects();
      renderProjects();
      closeProjectModalFunction();
    }

    function deleteProject(id) {
      const project = projects.find(item => String(item.id) === String(id));
      if (!project) return;
      if (!confirm(`Delete "${project.title}"?`)) return;
      projects = projects.filter(item => String(item.id) !== String(id));
      saveProjects();
      renderProjects();
      showToast("Project deleted.");
    }

    function resetProjectImagePreview() {
      document.getElementById("projectImagePreview").innerHTML = `
        <i class="fas fa-image"></i>
        <span>Click to upload project image</span>
        <small>PNG, JPG or WEBP · Max 2MB</small>
      `;
    }

    function renderProjectImagePreview() {
      const preview = document.getElementById("projectImagePreview");
      if (selectedProjectImage) {
        preview.innerHTML = `<img src="${selectedProjectImage}" alt="Project preview" />`;
      } else {
        resetProjectImagePreview();
      }
    }

    function handleProjectImage(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) { showToast("Please select an image file."); return; }
      if (file.size > 2 * 1024 * 1024) {
        showToast("Image must be smaller than 2MB.");
        event.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        selectedProjectImage = reader.result;
        renderProjectImagePreview();
      };
      reader.readAsDataURL(file);
    }


    /* =========================================================
       RESUME MODAL
    ========================================================= */

    function getResumeName() {
      return localStorage.getItem("portfolioResumeName") || "Praveen-Kumar-Resume.pdf";
    }

    function openResumeModal() {
      document.getElementById("resumeFileName").textContent = getResumeName();
      document.getElementById("resumeStatus").textContent = localStorage.getItem("portfolioResume") ? "Uploaded resume" : "Default resume";
      document.getElementById("resumeModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function closeResumeModalFunction() {
      document.getElementById("resumeModal").classList.remove("active");
      document.body.classList.remove("modal-open");
    }

    function handleResumeUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
        showToast("Please upload a PDF file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast("Resume must be smaller than 5MB.");
        return;
      }

      const progress = document.getElementById("uploadProgress");
      const progressBar = progress.querySelector(".progress-bar span");
      progress.classList.add("show");
      progressBar.style.width = "20%";

      const reader = new FileReader();
      reader.onprogress = e => {
        if (!e.lengthComputable) return;
        const percent = Math.round((e.loaded / e.total) * 100);
        progressBar.style.width = percent + "%";
      };
      reader.onload = () => {
        localStorage.setItem("portfolioResume", reader.result);
        localStorage.setItem("portfolioResumeName", file.name);
        progressBar.style.width = "100%";
        setTimeout(() => {
          progress.classList.remove("show");
          document.getElementById("resumeFileName").textContent = file.name;
          document.getElementById("resumeStatus").textContent = "Uploaded resume";
          showToast("Resume uploaded successfully.");
        }, 500);
      };
      reader.readAsDataURL(file);
    }


    /* =========================================================
       PORTFOLIO MANAGER
    ========================================================= */

    function openPortfolioManager() {
      document.getElementById("portfolioManagerModal").classList.add("active");
      document.body.classList.add("modal-open");
    }

    function closePortfolioManager() {
      document.getElementById("portfolioManagerModal").classList.remove("active");
      document.body.classList.remove("modal-open");
    }


    /* =========================================================
       NAVIGATION
    ========================================================= */

    function initializeNavigation() {
      const menu = document.getElementById("menuBtn");
      const nav = document.getElementById("navLinks");
      if (!menu || !nav) return;

      menu.addEventListener("click", () => nav.classList.toggle("show"));

      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("show"));
      });
    }


    /* =========================================================
       SCROLL SPY
    ========================================================= */

    function initializeScrollSpy() {
      const sections = document.querySelectorAll("main section[id]");
      const links = document.querySelectorAll(".nav-links a");

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        });
      }, { threshold: 0.35 });

      sections.forEach(section => observer.observe(section));
    }


    /* =========================================================
       BACK TO TOP
    ========================================================= */

    function initializeBackTop() {
      const button = document.getElementById("backTop");
      if (!button) return;
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) button.classList.add("show");
        else button.classList.remove("show");
      });
      button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }


    /* =========================================================
       MODAL BACKDROP
    ========================================================= */

    function initializeModalBackdrop() {
      document.querySelectorAll(".modal").forEach(modal => {
        const overlay = modal.querySelector(".modal-overlay");
        if (overlay) {
          overlay.addEventListener("click", () => {
            modal.classList.remove("active", "show");
            document.body.classList.remove("modal-open");
          });
        }
      });

      const resume = document.getElementById("resumeModal");
      if (resume) {
        resume.addEventListener("click", event => {
          if (event.target === resume) closeResumeModalFunction();
        });
      }
    }


    /* =========================================================
       DOM READY
    ========================================================= */

    document.addEventListener("DOMContentLoaded", () => {

      initializeSecureData();
      initializeHeroFlip();
      initializeSkills();
      initializeExperience();
      initializeProjects();
      initializeNavigation();
      initializeScrollSpy();
      initializeBackTop();
      initializeModalBackdrop();

      // const year = document.getElementById("currentYear");
      if (year) year.textContent = new Date().getFullYear();

      document.getElementById("heroResumeBtn")?.addEventListener("click", downloadResumeFile);
      document.getElementById("downloadResumeModal")?.addEventListener("click", downloadResumeFile);

      document.getElementById("openSkillManager")?.addEventListener("click", openPortfolioManager);
      document.getElementById("skillForm")?.addEventListener("submit", saveSkill);
      document.getElementById("closeSkillModal")?.addEventListener("click", closeSkillModal);
      document.getElementById("cancelSkill")?.addEventListener("click", closeSkillModal);

      document.getElementById("openExperienceManager")?.addEventListener("click", openAddExperienceModal);
      document.getElementById("experienceForm")?.addEventListener("submit", saveExperienceForm);
      document.getElementById("closeExperienceModal")?.addEventListener("click", closeExperienceModal);
      document.getElementById("cancelExperience")?.addEventListener("click", closeExperienceModal);

      document.getElementById("openProjectManager")?.addEventListener("click", openAddProject);
      document.getElementById("projectForm")?.addEventListener("submit", saveProject);
      document.getElementById("closeProjectModal")?.addEventListener("click", closeProjectModalFunction);
      document.getElementById("cancelProject")?.addEventListener("click", closeProjectModalFunction);
      document.getElementById("projectImageInput")?.addEventListener("change", handleProjectImage);

      document.getElementById("closePortfolioManager")?.addEventListener("click", closePortfolioManager);
      document.getElementById("managerSkillsBtn")?.addEventListener("click", () => {
        closePortfolioManager();
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      });
      document.getElementById("managerExperienceBtn")?.addEventListener("click", () => {
        closePortfolioManager();
        openAddExperienceModal();
      });
      document.getElementById("managerProjectsBtn")?.addEventListener("click", () => {
        closePortfolioManager();
        openAddProject();
      });

      document.getElementById("closeResumeModal")?.addEventListener("click", closeResumeModalFunction);
      document.getElementById("resumeInput")?.addEventListener("change", handleResumeUpload);

      document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        document.querySelectorAll(".modal.active, .resume-modal.active").forEach(modal => {
          modal.classList.remove("active", "show");
        });
        document.body.classList.remove("modal-open");
      });
    });
