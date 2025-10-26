/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  //Pick mode
  (function () {
  var pano = document.getElementById('pano');
  window.pickMode = null; // 'info' | 'link' | null

  // Activadores sencillos
  window.pickInfo = function () { window.pickMode = 'info'; alert('Pick INFO: haz clic en el punto.'); };
  window.pickLink = function () { window.pickMode = 'link'; alert('Pick LINK: haz clic en el punto.'); };
  window.pickOff  = function () { window.pickMode = null;  alert('Pick desactivado.'); };

  pano.addEventListener('click', function (e) {
    if (!window.pickMode || !window.activeScene) return;

    var rect = pano.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var c = activeScene.view.screenToCoordinates({ x: x, y: y });
    var yaw = +c.yaw.toFixed(6), pitch = +c.pitch.toFixed(6);

    var snippet = '';
    if (window.pickMode === 'info') {
      snippet = `{
  "yaw": ${yaw},
  "pitch": ${pitch},
  "title": "Título",
  "text": "Descripción"
}`;
      console.log('Pega esto en data.js → escena "%s" → infoHotspots:\n%s', activeScene.data.id, snippet);
    } else {
      snippet = `{
  "yaw": ${yaw},
  "pitch": ${pitch},
  "rotation": 0,
  "target": "ID_DESTINO"
}`;
      console.log('Pega esto en data.js → escena "%s" → linkHotspots:\n%s', activeScene.data.id, snippet);
    }

    (navigator.clipboard?.writeText(snippet) || Promise.reject()).catch(()=>{});
    alert('Coordenadas copiadas. Mira la consola.');
    window.pickMode = null; 
  });
})();


  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

 /* function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }*/

    function switchScene(scene, customViewParameters) {
  stopAutorotate();

  // Si me pasan una vista personalizada, úsala; si no, usa la initial.
  if (customViewParameters) {
    scene.view.setParameters(customViewParameters);
  } else {
    scene.view.setParameters(scene.data.initialViewParameters);
  }

  // Marca la escena activa (sirve para dumpView()).
  window.activeScene = scene;

  // Cambia de escena
  scene.scene.switchTo();

  startAutorotate();
  updateSceneName(scene);
  updateSceneList(scene);
}


  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
    var dest = findSceneById(hotspot.target);
    // Si el hotspot trae un campo "view", úsalo; si no, que use la initial por defecto.
    switchScene(dest, hotspot.view || null);
    });

    /*wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });*/

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    /*var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = hotspot.name || findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }*/

   if (hotspot.name && hotspot.name.trim() !== "") {
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = hotspot.name;
    wrapper.appendChild(tooltip);
  }

  // Append icon al final
  wrapper.appendChild(icon);

  return wrapper;
}

// Función para configurar enlaces clicables en móvil
function setupClickableLinks(container) {
  var links = container.querySelectorAll('.clickable-link');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    
    // Agregar event listeners específicos para móvil
    link.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    }, { passive: false });
    
    link.addEventListener('touchend', function(e) {
      e.stopPropagation();
      e.preventDefault();
      // Abrir el enlace
      if (this.href) {
        window.open(this.href, this.target || '_self');
      }
    }, { passive: false });
    
    link.addEventListener('click', function(e) {
      e.stopPropagation();
      // Para desktop, permitir el comportamiento normal
      if (window.innerWidth > 768) {
        return true;
      }
      // Para móvil, prevenir el comportamiento por defecto y manejarlo manualmente
      e.preventDefault();
      if (this.href) {
        window.open(this.href, this.target || '_self');
      }
    }, { passive: false });
  }
}

function createInfoHotspotElement(hotspot) {
  // Función para detectar si es dispositivo táctil
  function isTouchDevice() {
    // Detectar si es móvil basado en el ancho de pantalla
    return window.innerWidth <= 768;
  }
  
  // Función para convertir emails, teléfonos y enlaces en clicables
  function makeContactClickable(text) {
    if (!text) return text;
    
    // Convertir enlaces en formato Markdown [texto](url) en enlaces clicables
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" class="clickable-link" style="color: #fff; text-decoration: underline; font-weight: 600;">$1</a>');
    
    // Convertir emails en enlaces mailto
    text = text.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, 
      '<a href="mailto:$1" class="clickable-link" style="color: #fff; text-decoration: underline;">$1</a>');
    
    // Convertir números de teléfono en enlaces tel
    text = text.replace(/(\+?[0-9\s\-\(\)]{7,})/g, function(match) {
      // Limpiar el número para el enlace tel
      var cleanNumber = match.replace(/[\s\-\(\)]/g, '');
      return '<a href="tel:' + cleanNumber + '" class="clickable-link" style="color: #fff; text-decoration: underline;">' + match + '</a>';
    });
    
    return text;
  }
  
  // Verificar si tiene descripción
  var hasText = typeof hotspot.text === 'string' && hotspot.text.trim() !== '';

  // Wrapper principal
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'info-hotspot', 'collapsed');

  // Header / chip
  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');
  header.setAttribute('role', 'button');
  header.setAttribute('tabindex', '0');
  header.style.touchAction = 'manipulation'; // Elimina delay de 300ms

  // Icono
  var iconWrapper = document.createElement('div');
  iconWrapper.classList.add('info-hotspot-icon-wrapper');
  var icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.classList.add('info-hotspot-icon');
  iconWrapper.appendChild(icon);

  // Título
  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('info-hotspot-title-wrapper');
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.textContent = hotspot.title || '';
  titleWrapper.appendChild(title);

  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  wrapper.appendChild(header);

  // ====== CON DESCRIPCIÓN ======
  if (hasText) {
    // Botón de cerrar para desktop
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);
    wrapper.appendChild(closeWrapper);

    // Panel de texto para desktop
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = makeContactClickable(hotspot.text);
    wrapper.appendChild(text);

    // Modal para móvil
    var modal = document.createElement('div');
    modal.classList.add('info-hotspot-modal');

    var modalHeader = document.createElement('div');
    modalHeader.classList.add('info-hotspot-header');

    var modalIconW = document.createElement('div');
    modalIconW.classList.add('info-hotspot-icon-wrapper');
    var modalIcon = document.createElement('img');
    modalIcon.src = 'img/info.png';
    modalIcon.classList.add('info-hotspot-icon');
    modalIconW.appendChild(modalIcon);

    var modalTitleW = document.createElement('div');
    modalTitleW.classList.add('info-hotspot-title-wrapper');
    var modalTitle = document.createElement('div');
    modalTitle.classList.add('info-hotspot-title');
    modalTitle.textContent = hotspot.title || '';
    modalTitleW.appendChild(modalTitle);

    var modalCloseW = document.createElement('div');
    modalCloseW.classList.add('info-hotspot-close-wrapper');
    var modalCloseIcon = document.createElement('img');
    modalCloseIcon.src = 'img/close.png';
    modalCloseIcon.classList.add('info-hotspot-close-icon');
    modalCloseW.appendChild(modalCloseIcon);

    var modalText = document.createElement('div');
    modalText.classList.add('info-hotspot-text');
    modalText.innerHTML = makeContactClickable(hotspot.text);

    modalHeader.appendChild(modalIconW);
    modalHeader.appendChild(modalTitleW);
    modalHeader.appendChild(modalCloseW);
    modal.appendChild(modalHeader);
    modal.appendChild(modalText);
    document.body.appendChild(modal);

    // Funciones de control
    function openMobile() {
      modal.classList.add('visible');
      wrapper.classList.remove('visible');
      wrapper.classList.add('collapsed');
    }

    function closeMobile() {
      modal.classList.remove('visible');
      wrapper.classList.add('collapsed');
    }

    function toggleDesktop() {
      wrapper.classList.toggle('visible');
      wrapper.classList.toggle('collapsed', !wrapper.classList.contains('visible'));
    }

    // Handler unificado para activación
    function handleActivation(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      
      if (isTouchDevice()) {
        if (modal.classList.contains('visible')) {
          closeMobile();
        } else {
          openMobile();
        }
      } else {
        toggleDesktop();
      }
    }

    // Event listeners robustos - SOLO UNO por tipo de evento
    wrapper.addEventListener('click', handleActivation, { passive: false });
    
    // Soporte para teclado
    wrapper.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivation(e);
      }
    });

    // Cerrar modal
    modalCloseW.addEventListener('click', function(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      closeMobile();
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeMobile();
      }
    });

    // Cerrar panel desktop
    closeWrapper.addEventListener('click', function(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      wrapper.classList.remove('visible');
      wrapper.classList.add('collapsed');
    });

  } else {
    // ====== SIN DESCRIPCIÓN ======
    // Para hotspots sin texto, solo mostrar el chip
    // En móvil, opcionalmente mostrar peek
    var peek = document.createElement('div');
    peek.classList.add('info-hotspot-peek');
    peek.innerHTML = '<div class="info-hotspot-peek-title">' + (hotspot.title || '') + '</div>';
    document.body.appendChild(peek);

    var timer = null;
    function showPeek(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      
      // Solo mostrar peek en móvil
      if (isTouchDevice()) {
        peek.classList.add('visible');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() { 
          peek.classList.remove('visible'); 
        }, 2000);
      }
    }

    // Event listener para todos los casos
    wrapper.addEventListener('click', showPeek, { passive: false });
  }

  // Bloquea propagación al visor (pan/zoom)
  stopTouchAndScrollEventPropagation(wrapper);

  // Configurar enlaces clicables después de un breve delay para asegurar que el DOM esté listo
  setTimeout(function() {
    setupClickableLinks(wrapper);
  }, 100);

  return wrapper;
}




/* =====================================================
  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }*/

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);

  // Get view function
window.activeScene = window.activeScene || null;

// Copia a portapapeles la vista actual { yaw, pitch, fov } de la escena activa
window.dumpView = function () {
  if (!window.activeScene || !activeScene.view) {
    alert('No hay escena activa aún. Entra a alguna escena primero.');
    return;
  }
  var p = activeScene.view.parameters();
  var out = { yaw: +p.yaw.toFixed(6), pitch: +p.pitch.toFixed(6), fov: +p.fov.toFixed(6) };
  var text = JSON.stringify(out, null, 2);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(function () { console.log('Vista copiada:\n', text); alert('Vista copiada al portapapeles.'); })
      .catch(function () { console.log('Vista:\n', text); alert('No se pudo copiar. Mira la consola.'); });
  } else {
    console.log('Vista:\n', text);
    alert('Tu navegador no permite copiar; revisa la consola.');
  }
};

//=================================================================

(function setupAbout() {
  const aboutBtn = document.getElementById('aboutToggle');
  const aboutPanel = document.getElementById('aboutPanel');
  if (!aboutBtn || !aboutPanel) return;

  const toggle = (e) => {
    e.stopPropagation();
    aboutPanel.classList.toggle('visible');
    aboutPanel.setAttribute('aria-hidden', aboutPanel.classList.contains('visible') ? 'false' : 'true');
  };

  aboutBtn.addEventListener('click', toggle);

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!aboutPanel.classList.contains('visible')) return;
    const inside = aboutPanel.contains(e.target) || aboutBtn.contains(e.target);
    if (!inside) aboutPanel.classList.remove('visible');
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') aboutPanel.classList.remove('visible');
  });
})();

})();
