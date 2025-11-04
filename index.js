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

  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

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

  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

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

    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

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

  (function () {
  var pano = document.getElementById('pano');
  window.pickMode = null; 

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
    window.pickMode = null; 
  });
})();


  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  autorotateToggleElement.addEventListener('click', toggleAutorotate);

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

  sceneListToggleElement.addEventListener('click', toggleSceneList);

  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  scenes.forEach(function(scene) {
    var elements = document.querySelectorAll('#sceneList .scene[data-id="' + scene.data.id + '"]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      el.addEventListener('click', function() {
        switchScene(scene);
        if (document.body.classList.contains('mobile')) {
          hideSceneList();
        }
      });
    }
  });

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene, customViewParameters) {
  stopAutorotate();

  if (customViewParameters) {
    scene.view.setParameters(customViewParameters);
  } else {
    scene.view.setParameters(scene.data.initialViewParameters);
  }

  window.activeScene = scene;

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

    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    wrapper.addEventListener('click', function() {
    var dest = findSceneById(hotspot.target);
    switchScene(dest, hotspot.view || null);
    });

    stopTouchAndScrollEventPropagation(wrapper);

   if (hotspot.name && hotspot.name.trim() !== "") {
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = hotspot.name;
    wrapper.appendChild(tooltip);
  }

  wrapper.appendChild(icon);

  return wrapper;
}

function setupClickableLinks(container) {
  var links = container.querySelectorAll('.clickable-link');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    
    link.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    }, { passive: false });
    
    link.addEventListener('touchend', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.href) {
        window.open(this.href, this.target || '_self');
      }
    }, { passive: false });
    
    link.addEventListener('click', function(e) {
      e.stopPropagation();
      if (window.innerWidth > 768) {
        return true;
      }
      e.preventDefault();
      if (this.href) {
        window.open(this.href, this.target || '_self');
      }
    }, { passive: false });
  }
}

function createInfoHotspotElement(hotspot) {
  function isTouchDevice() {
    return window.innerWidth <= 768;
  }
  
  function makeContactClickable(text) {
    if (!text) return text;
    
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" class="clickable-link" style="color: #fff; text-decoration: underline; font-weight: 600;">$1</a>');
    
    text = text.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, 
      '<a href="mailto:$1" class="clickable-link" style="color: #fff; text-decoration: underline;">$1</a>');
    
      text = text.replace(/(\+?[0-9\s\-\(\)]{7,})/g, function(match) {
      var cleanNumber = match.replace(/[\s\-\(\)]/g, '');
      return '<a href="tel:' + cleanNumber + '" class="clickable-link" style="color: #fff; text-decoration: underline;">' + match + '</a>';
    });
    
    return text;
  }
  
  var hasText = typeof hotspot.text === 'string' && hotspot.text.trim() !== '';

  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'info-hotspot', 'collapsed');

  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');
  header.setAttribute('role', 'button');
  header.setAttribute('tabindex', '0');
  header.style.touchAction = 'manipulation'; 

  var iconWrapper = document.createElement('div');
  iconWrapper.classList.add('info-hotspot-icon-wrapper');
  var icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.classList.add('info-hotspot-icon');
  iconWrapper.appendChild(icon);

  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('info-hotspot-title-wrapper');
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.textContent = hotspot.title || '';
  titleWrapper.appendChild(title);

  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  wrapper.appendChild(header);

  if (hasText) {
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);
    wrapper.appendChild(closeWrapper);

    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = makeContactClickable(hotspot.text);
    wrapper.appendChild(text);

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

    wrapper.addEventListener('click', handleActivation, { passive: false });
    
    wrapper.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivation(e);
      }
    });

    modalCloseW.addEventListener('click', function(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      closeMobile();
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeMobile();
      }
    });

    closeWrapper.addEventListener('click', function(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      wrapper.classList.remove('visible');
      wrapper.classList.add('collapsed');
    });

  } else {
    var peek = document.createElement('div');
    peek.classList.add('info-hotspot-peek');
    peek.innerHTML = '<div class="info-hotspot-peek-title">' + (hotspot.title || '') + '</div>';
    document.body.appendChild(peek);

    var timer = null;
    function showPeek(e) {
      e.stopPropagation();
      if (e.cancelable) e.preventDefault();
      
      if (isTouchDevice()) {
        peek.classList.add('visible');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() { 
          peek.classList.remove('visible'); 
        }, 2000);
      }
    }

    wrapper.addEventListener('click', showPeek, { passive: false });
  }

  stopTouchAndScrollEventPropagation(wrapper);

  setTimeout(function() {
    setupClickableLinks(wrapper);
  }, 100);

  return wrapper;
}



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
  
  var initialScene = null;
  for (var i = 0; i < scenes.length; i++) {
    if (scenes[i].data.id === "0-a1") {
      initialScene = scenes[i];
      break;
    }
  }

  if (!initialScene) {
    console.log("Escena '0-a1' no encontrada, usando primera escena:", scenes[0].data.id);
    initialScene = scenes[0];
  }
  
  switchScene(initialScene);

window.activeScene = window.activeScene || null;

window.dumpView = function () {
  if (!window.activeScene || !activeScene.view) {
    return;
  }
  var p = activeScene.view.parameters();
  var out = { yaw: +p.yaw.toFixed(6), pitch: +p.pitch.toFixed(6), fov: +p.fov.toFixed(6) };
  var text = JSON.stringify(out, null, 2);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(function () { console.log('Vista copiada:\n', text); })
      .catch(function () { console.log('Vista:\n', text); });
  } else {
    console.log('Vista:\n', text);
  }
};

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

  document.addEventListener('click', (e) => {
    if (!aboutPanel.classList.contains('visible')) return;
    const inside = aboutPanel.contains(e.target) || aboutBtn.contains(e.target);
    if (!inside) aboutPanel.classList.remove('visible');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') aboutPanel.classList.remove('visible');
  });
})();

})();
