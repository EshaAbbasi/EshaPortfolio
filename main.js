(function () {
  "use strict";

  /* ---------- EDIT YOUR CONTACT LINKS HERE ---------- */
  var contact = {
    email: "esha.ashfar@example.com",
    linkedin: "https://www.linkedin.com/in/esha-ashfar",
    github: "https://github.com/eshaabbasi",
  };

  document.getElementById("yr").textContent = new Date().getFullYear();
  document.getElementById("lnk-linkedin").href = contact.linkedin;
  document.getElementById("lnk-github").href = contact.github;
  document.getElementById("lnk-email").href = "mailto:" + contact.email;

  var esc = function (s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  };
  var chips = function (a) {
    return (
      '<div class="chips">' +
      a
        .map(function (x) {
          return '<span class="chip">' + esc(x) + "</span>";
        })
        .join("") +
      "</div>"
    );
  };

  var projects = [
    [
      "Weasleys' Wizard Wheezes",
      "capstone",
      "Harry Potter themed marketplace with admin, owner and customer dashboards, JWT auth, cart and order tracking.",
      "React · FastAPI · PostgreSQL · Supabase",
      "https://weasleys-wizard-frontend.vercel.app",
    ],
    [
      "Basira",
      "graduation",
      "Product-safety assistant checking products against a health profile. Allergens detected in 98% of test samples, results under 5s.",
      "Laravel · PHP · Groq API",
      "",
    ],
    [
      "Tatawwu'",
      "team",
      "Bilingual English/Arabic volunteering platform with campaigns, attendance and PDF certificates.",
      "React · Express · MongoDB · Leaflet",
      "https://tatawuu-frontend.vercel.app/",
    ],
    [
      "Workforce Management",
      "university",
      "Web, Android & iOS: GPS check-in, leave requests, chat, reports and real-time notifications.",
      "TypeScript · Node · React Native · Supabase",
      "",
    ],
    [
      "LitCritique",
      "MEN stack",
      "Social book review platform with images, favorites, search and session auth.",
      "Node · Express · MongoDB · EJS",
      "https://litcritique-g1ho.onrender.com/",
    ],
    [
      "Burn & Run",
      "game",
      "Browser dodging game with easy/hard modes, sound effects and a countdown timer.",
      "HTML · CSS · JavaScript",
      "https://eshaabbasi.github.io/Burn-Run--game/",
    ],
  ];

  var sections = {
    about: {
      file: "about.ts",
      cmd: "cat about.ts",
      html:
        '<pre class="code"><span class="c-com">// hello world 👋</span>\n' +
        '<span class="c-kw">const</span> esha = {\n' +
        '  <span class="c-key">name</span>: <span class="c-str">"Esha Ashfar"</span>,\n' +
        '  <span class="c-key">role</span>: <span class="c-str">"Software Engineer"</span>,\n' +
        '  <span class="c-key">location</span>: <span class="c-str">"Bahrain"</span>,\n' +
        '  <span class="c-key">degree</span>: <span class="c-str">"B.Sc. Software Engineering, UoB"</span>, <span class="c-com">// 2026</span>\n' +
        '  <span class="c-key">stack</span>: [<span class="c-str">"Laravel"</span>, <span class="c-str">"Node.js"</span>, <span class="c-str">"React Native"</span>, <span class="c-str">"Supabase"</span>],\n' +
        '  <span class="c-key">strengths</span>: [<span class="c-str">"MVC"</span>, <span class="c-str">"REST APIs"</span>, <span class="c-str">"RBAC"</span>, <span class="c-str">"testing"</span>],\n' +
        '  <span class="c-key">languages</span>: [<span class="c-str">"Urdu"</span>, <span class="c-str">"English"</span>],\n' +
        '  <span class="c-key">projectsShipped</span>: <span class="c-num">6</span>,\n' +
        '};\n\n<span class="c-com">// "The best way to learn is to build."</span></pre>',
    },
    skills: {
      file: "skills.json",
      cmd: "npm ls --depth=0",
      html:
        '<p class="label">languages</p>' +
        chips([
          "Java",
          "Python",
          "C++",
          "C#",
          "PHP",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "SQL",
        ]) +
        '<p class="label">frameworks</p>' +
        chips([
          "Laravel",
          "Node.js",
          "Express",
          "React",
          "React Native",
          "FastAPI",
          "Ionic",
          "Oracle APEX",
        ]) +
        '<p class="label">databases</p>' +
        chips(["MySQL", "PostgreSQL", "MongoDB", "Supabase"]) +
        '<p class="label">tools</p>' +
        chips([
          "Git",
          "GitHub",
          "VS Code",
          "Maven",
          "JUnit",
          "Jest",
          "Supertest",
          "Vercel",
          "Render",
          "Blender",
        ]) +
        '<p class="label">concepts</p>' +
        chips([
          "MVC",
          "REST APIs",
          "Role-Based Access",
          "JWT Auth",
          "Unit & API Testing",
          "Zod",
        ]),
    },
    experience: {
      file: "experience.log",
      cmd: "git log --oneline",
      html:
        '<div class="timeline">' +
        '<div><p class="when">Jul – Oct 2026</p><h3>Software Engineering Bootcamp</h3><p class="org">General Assembly, Bahrain</p><p>Intensive full-stack program; built and deployed MEN, MERN and React + FastAPI projects.</p></div>' +
        '<div><p class="when">Jun – Aug 2024</p><h3>Full Stack Developer Intern</h3><p class="org">Sama Card, Bahrain</p><p>Built frontend and backend features for Sama Pet with Laravel and Ionic; designed MySQL databases.</p></div>' +
        '<div><p class="when">Part-time</p><h3>Tutor</h3><p class="org">Sabina Al Ansari Mosque & Al Eslah Society</p><p>Academic tutoring and learning guidance for students.</p></div>' +
        "</div>",
    },
    projects: {
      file: "projects/",
      cmd: "ls ./projects",
      html:
        '<div class="grid">' +
        projects
          .map(function (p) {
            var title = p[4]
              ? '<a href="' +
                p[4] +
                '" target="_blank" rel="noreferrer">' +
                esc(p[0]) +
                " ↗</a>"
              : esc(p[0]);
            return (
              '<div class="card"><h3>' +
              title +
              '<span class="tag">' +
              p[1] +
              "</span></h3><p>" +
              esc(p[2]) +
              '</p><p class="stack">' +
              p[3] +
              "</p></div>"
            );
          })
          .join("") +
        "</div>" +
        '<p class="label" style="margin-top:14px">also: Library System (Java) · Museum App · Airline Reservation · Clinic Management · Olympic Games 2024 (Oracle) · Assignment Management · Anonymous Feedback</p>',
    },
    education: {
      file: "education.md",
      cmd: "cat education.md",
      html:
        '<div class="timeline">' +
        '<div><p class="when">2026</p><h3>B.Sc. Software Engineering</h3><p class="org">College of IT, University of Bahrain</p></div>' +
        '<div><p class="when">Jul – Oct 2026</p><h3>Software Engineering Bootcamp</h3><p class="org">General Assembly, Bahrain</p></div></div>',
    },
    certs: {
      file: "certs.txt",
      cmd: "cat certs.txt",
      html: '<ul class="list"><li>Microsoft Certified: Power Platform Developer Associate (2024)</li><li>Accelerated Computing with CUDA C++ (NVIDIA)</li><li>Parallel Computing with MPI (Coursera)</li><li>Regular Expressions in SQL (Coursera)</li><li>SQL CASE Statements (Coursera)</li><li>Introduction to GitHub Actions (Coursera)</li><li>Azure DevOps Boards (Coursera)</li></ul>',
    },
    volunteer: {
      file: "volunteer.txt",
      cmd: "cat volunteer.txt",
      html: '<ul class="list"><li>Redesigning Team Member, Dream Big Bahrain</li><li>Event Volunteer, ISF Gymnasiade 2024</li><li>School-Level Volunteer, Iqra Private School</li></ul>',
    },
    contact: {
      file: "contact.sh",
      cmd: "./contact.sh",
      html:
        "<h2>Let's build something together.</h2><p>Open to software engineering roles and collaborations.</p>" +
        '<pre class="code"><span class="c-key">email</span>    → <a class="u" href="mailto:' +
        contact.email +
        '">' +
        contact.email +
        "</a>\n" +
        '<span class="c-key">linkedin</span> → <a class="u" target="_blank" rel="noreferrer" href="' +
        contact.linkedin +
        '">' +
        contact.linkedin.replace("https://www.", "") +
        "</a>\n" +
        '<span class="c-key">github</span>   → <a class="u" target="_blank" rel="noreferrer" href="' +
        contact.github +
        '">' +
        contact.github.replace("https://", "") +
        "</a></pre>",
    },
  };

  var keys = [].slice.call(document.querySelectorAll(".key[data-sec]"));
  var panel = document.getElementById("panel"),
    cmdEl = document.getElementById("cmd"),
    fileEl = document.getElementById("file");
  var typer;

  function showMonitor() {
    var m = document.querySelector(".monitor");
    var r = m.getBoundingClientRect();
    if (r.top < 0 || r.top > innerHeight * 0.4)
      m.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function open(sec) {
    var s = sections[sec];
    if (!s) return;
    keys.forEach(function (k) {
      k.classList.toggle(
        "on",
        k.dataset.sec === sec && !k.classList.contains("k-plain"),
      );
    });
    fileEl.textContent = s.file;
    clearInterval(typer);
    var i = 0;
    cmdEl.textContent = "";
    typer = setInterval(function () {
      cmdEl.textContent = s.cmd.slice(0, ++i);
      if (i >= s.cmd.length) clearInterval(typer);
    }, 28);
    panel.innerHTML = s.html;
    panel.style.animation = "none";
    void panel.offsetWidth;
    panel.style.animation = "";
  }

  keys.forEach(function (k) {
    k.addEventListener("click", function () {
      open(k.dataset.sec);
      showMonitor();
    });
  });
  document.getElementById("cv").addEventListener("click", function () {
    var n = Object.keys(sections);
    open(n[Math.floor(Math.random() * n.length)]);
    showMonitor();
  });

  / physical keyboard /;
  var map = {
    a: "about",
    s: "skills",
    e: "experience",
    p: "projects",
    d: "education",
    c: "certs",
    v: "volunteer",
    enter: "contact",
    escape: "about",
    " ": "contact",
  };
  addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var sec = map[e.key.toLowerCase()];
    if (!sec) return;
    if (e.key === " ") e.preventDefault();
    var btn = keys.filter(function (k) {
      return k.dataset.sec === sec;
    })[0];
    if (btn) {
      btn.classList.add("down");
      setTimeout(function () {
        btn.classList.remove("down");
      }, 120);
    }
    open(sec);
  });

  / 3D tilt follows the mouse /;
  var kb = document.getElementById("keyboard");
  if (matchMedia("(pointer: fine)").matches) {
    addEventListener("mousemove", function (e) {
      var x = e.clientX / innerWidth - 0.5,
        y = e.clientY / innerHeight - 0.5;
      kb.style.setProperty("--ry", (x * 14).toFixed(2) + "deg");
      kb.style.setProperty("--rx", (40 + y * 12).toFixed(2) + "deg");
    });
  }

  open("about");
})();
