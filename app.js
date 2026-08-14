/**
 * ECO WEAVES STUDIO LLP - INTERACTIVE ENGINE
 * Est. March 7, 2025
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initScrollProgress();
  initParticleCanvas();
  initHeroSlider();
  initStickyHeader();
  initSmoothScroll();
  initStatsCounter();
  initProductFilterAndModal();
  initGalleryLightbox();
  initContactForm();
  initMobileMenu();
});

/* 1. Preloader Fadeout */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 600);
  });
  // Fallback timeout in case load event fired early
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
    }
  }, 2500);
}

/* 2. Custom Animated Cursor */
function initCustomCursor() {
  const cursorRing = document.getElementById('cursorRing');
  const cursorDot = document.getElementById('cursorDot');

  if (!cursorRing || !cursorDot) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Add hover effect on interactive elements
  const interactables = document.querySelectorAll('a, button, input, select, textarea, .glass-card, .filter-btn, .gallery-item');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('active-hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('active-hover'));
  });
}

/* 3. Scroll Progress Bar */
function initScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }
  });
}

/* 4. Canvas Floating Particles Overlay */
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 25), 45);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4 - 0.2;
      this.color = Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(37, 211, 102, ';
      this.alpha = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

/* 5. Auto-Changing Hero Slider */
function initHeroSlider() {
  const slides = document.querySelectorAll('#heroSlider .slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startSlider() {
    stopSlider();
    slideInterval = setInterval(nextSlide, 4500);
  }

  function stopSlider() {
    if (slideInterval) clearInterval(slideInterval);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.target.getAttribute('data-slide'));
      goToSlide(slideIndex);
      startSlider();
    });
  });

  startSlider();
}

/* 6. Sticky Glass Header Scroll Effect */
function initStickyHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 7. Smooth Auto-Scroll & Active Nav Link Highlighter */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          
          // Close mobile menu if open
          const navMenu = document.getElementById('navMenu');
          const mobileToggle = document.getElementById('mobileToggle');
          if (navMenu) navMenu.classList.remove('active');
          if (mobileToggle) mobileToggle.classList.remove('active');

          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Active section highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  });
}

/* 8. Stats Counter Animation on Scroll */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = +stat.getAttribute('data-target');
          let count = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / (target || 1)));

          const counter = setInterval(() => {
            count += Math.ceil(target / 40) || 1;
            if (count >= target) {
              stat.innerText = target;
              clearInterval(counter);
            } else {
              stat.innerText = count;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const banner = document.querySelector('.stats-banner');
  if (banner) observer.observe(banner);
}

/* 9. Product Category Filter & Details Modal */
function initProductFilterAndModal() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  // Filter Tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // Modal Setup
  const productData = {
    1: {
      title: "High-Performance Sports T-Shirts",
      category: "Sports & Athletic",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
      desc: "Engineered with micro-pique dry-fit moisture-wicking technology. Designed specifically for intense workouts, running marathons, and team sports. Ultra-breathable texture prevents sweat buildup and odor.",
      specs: ["Micro-Pique Moisture Wicking Fabric", "100% Non-Toxic Skin-Safe Colors", "Odor-Free & Anti-Bacterial Finish", "Custom Sublimation & Logo Printing Available"]
    },
    2: {
      title: "Custom Printed T-Shirts",
      category: "Custom & Teams",
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      desc: "Premium combed cotton and poly-cotton blend t-shirts customized with high-precision screen printing, embroidery, or vinyl transfer. Ideal for corporate branding, promotional events, and group wear.",
      specs: ["100% Combed Organic Cotton", "Stitch-Perfect Collar & Hem Finishing", "High Color-Fastness Guarantee", "Available in 50+ Fabric Colors"]
    },
    3: {
      title: "Self-Photo Printed T-Shirts",
      category: "Custom & Teams",
      img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
      desc: "Turn your favorite memories and artwork into high-definition wearables. Our advanced heat-transfer sublimation ensures vivid picture clarity without fading or cracking after washes.",
      specs: ["HD Digital Photo Sublimation", "Soft-Touch Poly-Cotton Blend", "Zero-Crack Print Guarantee", "Customized Single & Bulk Orders"]
    },
    4: {
      title: "Lowers & Gym Wear",
      category: "Gym & Activewear",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      desc: "Flexible, high-durability track pants and gym lowers crafted with 4-way stretch spandex fabrics. Features deep zipper pockets, elastic waistband, and anti-chafing seams.",
      specs: ["4-Way Stretch Elastic Spandex", "Reinforced Double Stitching", "Moisture-Wicking Interior", "Ergonomic Athletic Fit"]
    },
    5: {
      title: "Professional Running Wear",
      category: "Sports & Athletic",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      desc: "Ultra-lightweight mesh gear designed for long-distance marathon runners and sprinters. Offers maximum body airflow and thermal cooling.",
      specs: ["Featherlight Ventilation Mesh", "Reflective Safety Trims", "Fast-Drying Eco Dyes", "Zero Friction Seams"]
    },
    6: {
      title: "School & Player T-Shirts",
      category: "Custom & Teams",
      img: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?q=80&w=800&auto=format&fit=crop",
      desc: "Heavy-duty school sports house uniforms and student team apparel. Stain-resistant, easy to wash, and built to endure daily physical activity.",
      specs: ["High-Durability Cotton Blend", "Stain-Resistant Finishing", "School Badge Embroidery", "Affordable Wholesale Pricing"]
    },
    7: {
      title: "Marathon & Cricket Team Uniforms",
      category: "Custom & Teams",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
      desc: "Complete sublimated sports uniforms featuring individual player names, squad numbers, team logos, and sponsor graphics in vibrant permanent inks.",
      specs: ["Full 360-Degree Sublimation", "Cool-Mesh Breathable Fabric", "Customized Squad Sizing", "On-Time Event Delivery"]
    },
    8: {
      title: "Commercial & Chef Aprons",
      category: "Home & Accessories",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
      desc: "Sturdy canvas and heavy cotton aprons with cross-back adjustable straps and multiple utility pockets. Perfect for kitchens, cafes, salons, and workshops.",
      specs: ["Heavy Canvas Cotton Weave", "Water & Stain Resistant Coating", "Adjustable Metal Hardware", "Custom Logo Embroidery"]
    },
    9: {
      title: "Cushion Covers & Pillows",
      category: "Home & Accessories",
      img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop",
      desc: "Luxurious decorative cushion covers and soft pillows. Available in rich velvet, jacquard, and printed designs with hidden zipper closures.",
      specs: ["Premium Velvet & Jacquard Weaves", "Hidden Zipper Closure", "100% Eco-Friendly Non-Fade Inks", "Custom Sizes & Prints"]
    },
    10: {
      title: "Flags & Rally T-Shirts",
      category: "Home & Accessories",
      img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
      desc: "Vibrant political and promotional campaign flags along with high-volume rally t-shirts manufactured on short turnaround times.",
      specs: ["Weatherproof Knit Fabric", "Vivid High-Visibility Colors", "Bulk Quantity Discounts", "Swift Production Lead Times"]
    },
    11: {
      title: "Customized Curtains",
      category: "Home & Accessories",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      desc: "Elegantly tailored window and door curtains. Choose from blackout room-darkening fabrics or soft sheer drapes with custom hem lengths.",
      specs: ["Custom Window & Door Sizing", "UV & Sun-Fading Protection", "Grommet or Ring Eyelet Header", "50+ Texture Selections"]
    },
    12: {
      title: "Sports Sandos & Sleeveless Tees",
      category: "Sports & Athletic",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      desc: "Sleeveless gym sandos designed for uninhibited arm movement, bodybuilding, and summer running.",
      specs: ["Deep Armhole Athletic Cut", "Quick-Dry Stretch Knit", "Skin-Safe Non-Allergic Fabric", "Anti-Odor Micro Treatment"]
    },
    13: {
      title: "Winter Jackets (Men & Women)",
      category: "Gym & Outerwear",
      img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop",
      desc: "Stylish, thermal insulated bomber and puffer jackets crafted for cold winter protection. Features smooth heavy-duty zippers and fleece lining.",
      specs: ["Thermal Fleece & Poly Padding", "Windproof Outer Shell", "Durable YKK Style Zippers", "Men & Women Tailored Fits"]
    },
    14: {
      title: "Premium Innerwear & Bras",
      category: "Innerwear",
      img: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=800&auto=format&fit=crop",
      desc: "Ultra-soft modal and microfiber innerwear line. Engineered with non-binding elastic and seamless stitching for supreme everyday comfort.",
      specs: ["Super-Soft Modal Microfiber", "Anti-Bacterial & Hypoallergenic", "Seamless Skin-Safe Elastic", "Breathable Day-Long Comfort"]
    }
  };

  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImg');
  const modalCat = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const modalClose = document.getElementById('modalClose');

  // Quick View Button Handler
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const item = productData[id];
      if (item && modal) {
        modalImg.src = item.img;
        modalCat.innerText = item.category;
        modalTitle.innerText = item.title;
        modalDesc.innerText = item.desc;

        modalSpecsList.innerHTML = item.specs.map(s => `<li><i class="fa-solid fa-check gold-icon"></i> ${s}</li>`).join('');

        const message = encodeURIComponent(`Hi Eco Weaves Studio, I am interested in inquiring about ${item.title}. Please share fabric samples and pricing.`);
        modalWhatsAppBtn.href = `https://wa.me/?text=${message}`;

        modal.classList.add('active');
      }
    });
  });

  // Direct Inquire Button Handler
  document.querySelectorAll('.inquire-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-name');
      const message = encodeURIComponent(`Hi Eco Weaves Studio, I want to place a custom order inquiry for ${productName}.`);
      window.open(`https://wa.me/?text=${message}`, '_blank');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* 10. Gallery Lightbox Popup */
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.getAttribute('data-img');
      if (fullSrc && lightbox && lightboxImg) {
        lightboxImg.src = fullSrc;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
}

/* 11. Contact Form Live Validation & Submission */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const productCategory = document.getElementById('productCategory');
  const message = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Helper validation
    function checkField(input, condition) {
      const parent = input.closest('.form-group');
      if (!condition) {
        parent.classList.add('error');
        isValid = false;
      } else {
        parent.classList.remove('error');
      }
    }

    checkField(fullName, fullName.value.trim().length >= 2);
    checkField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
    checkField(phone, phone.value.trim().length >= 7);
    checkField(productCategory, productCategory.value !== "");
    checkField(message, message.value.trim().length >= 5);

    if (isValid) {
      // Show Success Toast
      showToast(`Thank you ${fullName.value.trim()}! Your inquiry has been logged for Eco Weaves Studio.`);

      // Send mailto prefilled trigger
      const mailSubject = encodeURIComponent(`New Inquiry: ${productCategory.value} from ${fullName.value.trim()}`);
      const mailBody = encodeURIComponent(
        `Client Name: ${fullName.value.trim()}\n` +
        `Email: ${email.value.trim()}\n` +
        `Phone: ${phone.value.trim()}\n` +
        `Product Category: ${productCategory.value}\n\n` +
        `Requirement Details:\n${message.value.trim()}`
      );
      
      setTimeout(() => {
        window.location.href = `mailto:ECOM.RAVI@YAHOO.COM?subject=${mailSubject}&body=${mailBody}`;
        form.reset();
      }, 1200);
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* 12. Mobile Menu Toggle */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
}
