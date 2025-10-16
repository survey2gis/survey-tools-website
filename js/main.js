
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("svg").forEach(svg => {
      const paths = svg.querySelectorAll("path, rect, line, circle, polyline");
      paths.forEach(p => {
        const length = p.getTotalLength();
        p.style.strokeDasharray = length;
        p.style.strokeDashoffset = length;
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 3.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: svg, start: "top 80%" }
      });
    });

    // Scrollspy
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });

    // Imprint Modal Functions
    function openImprintModal() {
      document.getElementById('imprintModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeImprintModal() {
      document.getElementById('imprintModal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    document.getElementById('imprintModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeImprintModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeImprintModal();
      }
    });

    window.toggleMobileMenu = function() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }
