(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const p=[{id:"tropa",nombre:"Tropa (Servicio Militar)",descripcion:"Personal conscripto que realiza el servicio militar obligatorio o voluntario.",insigniaTipo:"chevron",badgeClass:"badge-tropa"},{id:"sargentos",nombre:"Sargentos",descripcion:"Suboficiales y personal de cuadro técnico egresados de las Escuelas de Sargentos.",insigniaTipo:"stripes-v",badgeClass:"badge-sargentos"},{id:"suboficiales",nombre:"Suboficiales",descripcion:"Personal superior de cuadro con vasta trayectoria técnica, operativa y de régimen interno.",insigniaTipo:"bars-gold",badgeClass:"badge-suboficiales"},{id:"oficiales-subalternos",nombre:"Oficiales Subalternos",descripcion:"Oficiales egresados de los Colegios Militares y Escuela Naval Militar con mando táctico directo.",insigniaTipo:"star-sub",badgeClass:"badge-subalternos"},{id:"oficiales-superiores",nombre:"Oficiales Superiores",descripcion:"Oficiales con responsabilidades de comando táctico y jefaturas de Estado Mayor de unidad.",insigniaTipo:"stars-sup",badgeClass:"badge-superiores"},{id:"oficiales-generales",nombre:"Oficiales Generales y Almirantes",descripcion:"Máximo escalafón de mando estratégico y conducción de las Fuerzas Armadas.",insigniaTipo:"stars-gen",badgeClass:"badge-generales"}],f={ejercito:{nombre:"Ejército de Bolivia",lema:"Patria, Honor y Disciplina",descripcion:"Fuerza terrestre encargada de la defensa de la soberanía e integridad territorial del Estado.",grados:[{nivel:1,grupoId:"tropa",categoria:"Tropa",nombre:"Soldado",explicacion:"Grado inicial de conscripción en el servicio militar obligatorio. Cumple funciones de instrucción básica de combate, disciplina y apoyo a la seguridad territorial."},{nivel:2,grupoId:"tropa",categoria:"Tropa",nombre:"Dragoneante",explicacion:"Soldado distinguido por su conducta, aprovechamiento y virtudes militares durante su servicio. Apoya a los cabos en la instrucción elemental de sus compañeros."},{nivel:3,grupoId:"tropa",categoria:"Tropa",nombre:"Cabo",explicacion:"Máxima jerarquía del contingente de tropa conscripta. Ejerce el mando directo de pequeñas escuadras de fusileros y asiste a los sargentos en el régimen interno."},{nivel:4,grupoId:"sargentos",categoria:"Sargentos",nombre:"Sargento Inicial",explicacion:"Primer grado militar profesional como cuadro efectivo tras egresar de la Escuela Militar de Sargentos del Ejército (EMSE). Ejerce la conducción táctica de una escuadra."},{nivel:5,grupoId:"sargentos",categoria:"Sargentos",nombre:"Sargento Segundo",explicacion:"Cuadro profesional con experiencia de campo intermedia. Lidera escuadras en operaciones tácticas y asume responsabilidades de mantenimiento técnico de armamento y equipo."},{nivel:6,grupoId:"sargentos",categoria:"Sargentos",nombre:"Sargento Primero",explicacion:"Grado superior de los sargentos. Se desempeña habitualmente como reemplazante de pelotón y supervisor directo de la instrucción militar y el bienestar de los soldados."},{nivel:7,grupoId:"suboficiales",categoria:"Suboficiales",nombre:"Suboficial Inicial",explicacion:"Primer grado de la categoría de suboficiales. Cumple labores técnicas especializadas en depósitos, parques de armas y apoyo logístico dentro de las unidades operativas."},{nivel:8,grupoId:"suboficiales",categoria:"Suboficiales",nombre:"Suboficial Segundo",explicacion:"Suboficial con experiencia técnica consolidada. Asiste en la administración de unidades, la fiscalización de abastecimientos y el entrenamiento operativo del personal subalterno."},{nivel:9,grupoId:"suboficiales",categoria:"Suboficiales",nombre:"Suboficial Primero",explicacion:"Nivel avanzado de suboficiales. Ejerce funciones clave en servicios de compañía, supervisión de servicios de guardia y apoyo directo a oficiales de logística y operaciones."},{nivel:10,grupoId:"suboficiales",categoria:"Suboficiales",nombre:"Suboficial Mayor",explicacion:"Penúltimo escalón de suboficiales. Asesora directamente al comando de regimiento o batallón en materia de disciplina, moral y administración del personal de tropa y cuadros."},{nivel:11,grupoId:"suboficiales",categoria:"Suboficiales",nombre:"Suboficial Maestre",explicacion:"Máxima jerarquía alcanzable en la carrera de suboficiales del Ejército. Actúa como asesor superior de Estado Mayor y decano representativo del personal de cuadros."},{nivel:12,grupoId:"oficiales-subalternos",categoria:"Oficiales Subalternos",nombre:"Subteniente",explicacion:'Primer grado de oficial egresado del Colegio Militar del Ejército "Cnl. Gualberto Villarroel". Ejerce el mando táctico de una sección o pelotón de combate.'},{nivel:13,grupoId:"oficiales-subalternos",categoria:"Oficiales Subalternos",nombre:"Teniente",explicacion:"Oficial subalterno con experiencia táctica comprobada. Comanda secciones especializadas o actúa como segundo comandante de una compañía militar."},{nivel:14,grupoId:"oficiales-subalternos",categoria:"Oficiales Subalternos",nombre:"Capitán",explicacion:"Grado superior de los oficiales subalternos. Ejerce habitualmente el comando titular de una compañía o batería y planifica maniobras tácticas a nivel unidad."},{nivel:15,grupoId:"oficiales-superiores",categoria:"Oficiales Superiores",nombre:"Mayor",explicacion:"Primer grado de los oficiales superiores. Forma parte de la plana mayor de un batallón o regimiento como oficial de personal, inteligencia u operaciones."},{nivel:16,grupoId:"oficiales-superiores",categoria:"Oficiales Superiores",nombre:"Teniente Coronel",explicacion:"Oficial superior con alta responsabilidad operativa. Ejerce el comando de un batallón o se desempeña como segundo comandante de un regimiento del Ejército."},{nivel:17,grupoId:"oficiales-superiores",categoria:"Oficiales Superiores",nombre:"Coronel",explicacion:"Máximo grado de la categoría de oficiales superiores. Comanda regimientos, grandes unidades militares o jefaturas departamentales en el Estado Mayor General."},{nivel:18,grupoId:"oficiales-generales",categoria:"Oficiales Generales",nombre:"General de Brigada",explicacion:"Primer escalón del generalato militar. Asume el comando de grandes unidades tácticas como brigadas del Ejército o jefaturas regionales de frontera."},{nivel:19,grupoId:"oficiales-generales",categoria:"Oficiales Generales",nombre:"General de División",explicacion:"Alto jefe militar encargado del mando de Divisiones de Ejército, de la Inspectoría General o de la Jefatura del Estado Mayor General del Ejército."},{nivel:20,grupoId:"oficiales-generales",categoria:"Oficiales Generales",nombre:"General de Ejército",explicacion:"Máxima jerarquía del Ejército en tiempo de paz. Reservado para el Comandante General del Ejército y para el Comandante en Jefe de las Fuerzas Armadas."}]}},g={tipo:"mp4",url:"/1000266455.mp4",titulo:"Video informativo sobre los rangos militares del Ejército de Bolivia"},s={selectedCategory:"todas",searchQuery:"",videoConfig:{...g}},l={star:'<svg class="card-insignia-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',chevron:'<svg class="card-insignia-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>',bars:'<svg class="card-insignia-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="8" x2="19" y2="8"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="16" x2="19" y2="16"/></svg>'};function v(e){const a=p.find(i=>i.id===e);return a?a.badgeClass:"badge-tropa"}function b(e){return e==="tropa"?l.chevron:e==="sargentos"||e==="suboficiales"?l.bars:l.star}function m(e){if(!e)return null;const a=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/,i=e.match(a);return i?i[1]:null}document.addEventListener("DOMContentLoaded",()=>{y(),h(),d(),u()});function y(){const e=document.getElementById("category-filter");e&&e.addEventListener("change",i=>{s.selectedCategory=i.target.value,u()});const a=document.getElementById("search-rank");a&&a.addEventListener("input",i=>{s.searchQuery=i.target.value.trim().toLowerCase(),u()})}function h(){const e=document.getElementById("toggle-video-input-btn"),a=document.getElementById("video-config-panel"),i=document.getElementById("video-url-input"),n=document.getElementById("apply-video-btn"),o=document.getElementById("reset-video-btn");e&&a&&e.addEventListener("click",()=>{a.classList.toggle("hidden"),!a.classList.contains("hidden")&&i&&i.focus()}),n&&i&&n.addEventListener("click",()=>{let r=i.value.trim();if(!r)s.videoConfig={tipo:"ninguno",url:""};else{const t=m(r);if(t)s.videoConfig={tipo:"youtube",url:`https://www.youtube.com/embed/${t}`,titulo:"Video informativo de YouTube"};else{if(r.includes("public\\")||r.includes("public/")){const c=r.split(/public[\\/]/);r="/"+c[c.length-1].replace(/\\/g,"/")}else/^[a-zA-Z]:[\\/]/.test(r)&&(r="/"+r.split(/[\\/]/).pop());s.videoConfig={tipo:"mp4",url:r,titulo:"Video informativo en formato MP4"}}}d()}),o&&o.addEventListener("click",()=>{s.videoConfig={...g},i&&(i.value=""),d()})}function d(){const e=document.getElementById("video-player-container");if(!e)return;const{tipo:a,url:i}=s.videoConfig;if(a==="ninguno"||!i||i.trim()===""){e.innerHTML=`
      <div class="video-placeholder-content">
        <div class="video-placeholder-icon-circle" aria-hidden="true">
          <svg class="video-placeholder-icon-svg" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <p class="video-placeholder-text">
          Aquí se mostrará el video informativo sobre los rangos militares de Bolivia
        </p>
        <p class="video-placeholder-subtext">
          Sección lista para reproducir material audiovisual institucional en formato MP4 o mediante enlace de YouTube.
        </p>
        <div class="video-placeholder-badges-row">
          <span class="video-type-badge">Proporción 16:9</span>
          <span class="video-type-badge">Formato MP4 Directo</span>
          <span class="video-type-badge">Enlace de YouTube</span>
        </div>
      </div>
    `;return}const n=m(i);if(a==="youtube"||n){const o=n||i.split("/").pop();e.innerHTML=`
      <iframe 
        src="https://www.youtube.com/embed/${o}?rel=0&modestbranding=1" 
        title="Video informativo sobre los rangos militares de Bolivia" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;return}if(a==="mp4"||i.toLowerCase().includes(".mp4")){e.innerHTML=`
      <video 
        controls 
        playsinline
        preload="metadata" 
        title="Video informativo sobre los rangos militares de Bolivia">
        <source src="${i}" type="video/mp4">
        Tu navegador no soporta la reproducción de video en formato MP4.
      </video>
    `;return}e.innerHTML=`
    <div class="video-placeholder-content">
      <p class="video-placeholder-text">
        Aquí se mostrará el video informativo sobre los rangos militares de Bolivia
      </p>
    </div>
  `}function u(){const e=document.getElementById("force-banner-container"),a=document.getElementById("ranks-main-container"),i=f.ejercito;i&&(E(e,i),C(a,i))}function E(e,a){e&&(e.innerHTML=`
    <div class="force-banner">
      <div class="force-banner-text">
        <h2>
          <span>${a.nombre}</span>
        </h2>
        <div class="force-motto">"${a.lema}"</div>
        <p>${a.descripcion} Presentado en orden jerárquico ascendente, desde el servicio inicial de conscripción militar hasta el alto mando del generalato.</p>
      </div>
      <div class="force-counter-pill">
        ${a.grados.length} Grados Oficiales
      </div>
    </div>
  `)}function C(e,a){if(!e)return;const i=a.grados.filter(o=>{const r=s.selectedCategory==="todas"||o.grupoId===s.selectedCategory,t=!s.searchQuery||o.nombre.toLowerCase().includes(s.searchQuery)||o.categoria.toLowerCase().includes(s.searchQuery)||o.explicacion.toLowerCase().includes(s.searchQuery);return r&&t});if(i.length===0){e.innerHTML=`
      <div class="no-results-box">
        <h4>No se encontraron grados en el Ejército</h4>
        <p>No hay rangos militares que coincidan con la búsqueda ingresada. Intenta con otro término o selecciona "Todos los Grupos".</p>
      </div>
    `;return}let n="";p.forEach(o=>{const r=i.filter(t=>t.grupoId===o.id);r.length>0&&(n+=`
        <section class="hierarchical-group-section">
          <div class="group-header">
            <div class="group-header-left">
              <div>
                <h3 class="group-title">${o.nombre}</h3>
                <span class="group-desc">${o.descripcion}</span>
              </div>
            </div>
            <span class="group-count">${r.length} ${r.length===1?"grado":"grados"}</span>
          </div>

          <div class="cards-grid">
            ${r.map(t=>I(t,a.nombre)).join("")}
          </div>
        </section>
      `)}),e.innerHTML=n}function I(e,a){const i=v(e.grupoId),n=b(e.grupoId);return`
    <article class="rank-card">
      <div>
        <div class="card-top">
          <span class="card-order-badge" title="Escalafón jerárquico ascendente">Nivel ${e.nivel} de 20</span>
          <span class="card-category-badge ${i}">${e.categoria}</span>
        </div>

        <div class="card-title-row">
          ${n}
          <h4 class="card-rank-name">${e.nombre}</h4>
        </div>

        <p class="card-explanation">${e.explicacion}</p>
      </div>

      <div class="card-footer">
        <span class="card-force-tag">
          ${a}
        </span>
        <span class="card-level-indicator">
          Jerarquía ${e.nivel}
        </span>
      </div>
    </article>
  `}
