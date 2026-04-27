// ============================================
// FUNCIONALIDADES DA PÁGINA INICIAL NETFLIX
// ============================================

// 1. FUNCIONALIDADE DOS CARROSSÉIS
console.log("🎬 Netflix Clone - Iniciando...");

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  // Botões para navegar nos carrosséis
  const scrollAmount = 220; // Tamanho do item + gap
  
  // Adiciona comportamento de scroll smooth
  carousel.addEventListener('wheel', (e) => {
    if (carousel.offsetWidth < carousel.scrollWidth) {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY;
    }
  });

  // Scroll automático ao passar o mouse (opcional)
  carousel.addEventListener('mouseenter', () => {
    // Você pode adicionar auto-scroll aqui
  });
});

// ============================================
// 2. FUNCIONALIDADE DE PESQUISA
// ============================================

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log(`🔍 Pesquisando por: ${searchTerm}`);
      // Aqui você poderia filtrar o catálogo ou fazer uma busca
      alert(`Pesquisando por: "${searchTerm}". Iremos para o catálogo com essa busca!`);
      // Redirecionar para catálogo com parâmetro de busca
      // window.location.href = `catalogo/catalogo.html?search=${searchTerm}`;
    }
  });

  // Pesquisar ao pressionar Enter
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
}

// ============================================
// 3. FUNCIONALIDADE DE PERFIS
// ============================================

const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
  profile.addEventListener('click', (e) => {
    e.preventDefault();
    
    const img = profile.querySelector('img');
    const name = profile.querySelector('figcaption').textContent;
    
    // Salvar perfil ativo no localStorage
    const activeProfile = {
      name: name,
      image: img.src,
      timestamp: new Date().getTime()
    };
    
    localStorage.setItem('activeProfile', JSON.stringify(activeProfile));
    console.log(`👤 Perfil selecionado: ${name}`);
    
    // Ir para catálogo
    window.location.href = 'catalogo/catalogo.html';
  });

  // Efeito hover nos perfis
  profile.addEventListener('mouseenter', () => {
    profile.style.transition = 'transform 0.3s ease';
  });
});

// ============================================
// 4. FUNCIONALIDADE DE TEMA (DARK/LIGHT)
// ============================================

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  // Verificar tema salvo
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Atualizar emoji do botão
  updateThemeButton(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
    
    console.log(`🌓 Tema alterado para: ${newTheme}`);
  });
}

function updateThemeButton(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// ============================================
// 5. FUNCIONALIDADE DO MENU
// ============================================

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.textContent.trim();
    console.log(`📍 Menu clicado: ${section}`);
    
    // Aqui você pode adicionar navegação para diferentes seções
    if (section === 'Filmes') {
      window.location.href = 'catalogo/catalogo.html?genre=movies';
    } else if (section === 'Séries') {
      window.location.href = 'catalogo/catalogo.html?genre=series';
    }
  });
});

// ============================================
// 6. FUNCIONALIDADE DOS BOTÕES DO HERO
// ============================================

const playBtn = document.querySelector('.btn-play');
const addBtn = document.querySelector('.btn-add');

if (playBtn) {
  playBtn.addEventListener('click', () => {
    console.log("▶️ Clicou em 'Assistir'");
  });
}

if (addBtn) {
  addBtn.addEventListener('click', () => {
    console.log("➕ Adicionado à minha lista");
    // Muda a cor ou texto do botão
    addBtn.textContent = '✓ Adicionado';
    addBtn.style.backgroundColor = 'rgba(229, 9, 20, 0.5)';
    
    setTimeout(() => {
      addBtn.textContent = '+ Minha Lista';
      addBtn.style.backgroundColor = '';
    }, 3000);
  });
}

// ============================================
// 7. FUNCIONALIDADES DOS CAROUSSÉIS (Hover)
// ============================================

const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.cursor = 'pointer';
    const img = item.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1.08)';
    }
  });

  item.addEventListener('mouseleave', () => {
    const img = item.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  });

  item.addEventListener('click', () => {
    const title = item.querySelector('p').textContent;
    console.log(`🎬 Clicou em: ${title}`);
    // Aqui você pode adicionar lógica para abrir detalhes do filme/série
  });
});

// ============================================
// 8. GERENCIAR PERFIS
// ============================================

const manageProfilesBtn = document.querySelector('.manage-profiles');

if (manageProfilesBtn) {
  manageProfilesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("⚙️ Abrindo gerenciador de perfis");
    alert('Funcionalidade de gerenciar perfis em breve!');
    // Aqui você pode abrir um modal para gerenciar perfis
  });
}

// ============================================
// 9. MENSAGEM DE BEM-VINDO
// ============================================

window.addEventListener('load', () => {
  const activeProfile = localStorage.getItem('activeProfile');
  if (!activeProfile) {
    console.log("✨ Bem-vindo ao Netflix Clone! Selecione um perfil para começar.");
  }
});

// ============================================
// 10. INTERATIVIDADE COM CARDS
// ============================================

// Smooth scroll para carousséis com mouse
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1; // Multiplicador de velocidade
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
});

console.log("✅ Todas as funcionalidades carregadas com sucesso!");