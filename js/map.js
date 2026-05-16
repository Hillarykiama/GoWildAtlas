/* ============================================
   GOWILDATLAS — WORLD MAP (D3 + GeoJSON)
   ============================================ */

// Countries with active programmes
const ACTIVE_COUNTRIES = [
  'South Africa',
  'Namibia',
  'Botswana',
  'United Republic of Tanzania',
  'Costa Rica',
  'Ecuador'
];

// Countries coming soon
const COMING_COUNTRIES = [];

function getCountryClass(name) {
  if (ACTIVE_COUNTRIES.includes(name)) return 'country-active';
  if (COMING_COUNTRIES.includes(name)) return 'country-coming';
  return 'country-rest';
}

function showPanel(name) {
  // Hide all
  document.getElementById('panelDefault').style.display = 'none';
  document.getElementById('panelHover').style.display = 'none';
  document.querySelectorAll('.map-panel__detail').forEach(d => d.style.display = 'none');

  // Show matching
  const target = document.getElementById(`panel-${name}`);
  if (target) {
    target.style.display = 'block';
    target.classList.add('panel-animate');
    setTimeout(() => target.classList.remove('panel-animate'), 500);
  }
}

function showHover(name) {
  const isActive = ACTIVE_COUNTRIES.includes(name);
  const isComing = COMING_COUNTRIES.includes(name);

  if (!isActive && !isComing) {
    // Just show name briefly, no panel switch
    document.getElementById('hoverName').textContent = name;
    document.getElementById('hoverStatus').textContent = '';
    document.getElementById('panelHover').style.display = 'block';
    document.getElementById('panelDefault').style.display = 'none';
    return;
  }

  document.getElementById('hoverName').textContent = name;
  document.getElementById('hoverStatus').textContent = isActive ? '✦ Active 2026 — click to explore' : '◎ Opening 2027 — click to join waitlist';
  document.getElementById('panelHover').style.display = 'block';
  document.getElementById('panelDefault').style.display = 'none';
}

function resetPanel() {
  // Only reset to default if no detail panel is open
  const anyOpen = [...document.querySelectorAll('.map-panel__detail')]
    .some(d => d.style.display !== 'none');
  if (!anyOpen) {
    document.getElementById('panelHover').style.display = 'none';
    document.getElementById('panelDefault').style.display = 'flex';
  }
}

async function initWorldMap() {
  const container = document.getElementById('world-map-container');
  const width = container.offsetWidth || 700;
  const height = width * 0.56;

  // Create SVG
  const svg = d3.select('#world-map-container')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .style('width', '100%')
    .style('height', 'auto');

  // Projection — Natural Earth looks great for a world map
  const projection = d3.geoNaturalEarth1()
    .scale(width / 6.5)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  // Load GeoJSON
  const geojson = await d3.json('/assets/world.geojson');

  // Draw countries
  svg.selectAll('path')
    .data(geojson.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('class', d => `world-country ${getCountryClass(d.properties.name)}`)
    .attr('data-name', d => d.properties.name)
    .on('mouseenter', function(event, d) {
      const name = d.properties.name;
      const cls = getCountryClass(name);

      // Highlight on hover
      if (cls === 'country-rest') {
        d3.select(this).classed('country-rest-hover', true);
      }

      showHover(name);
    })
    .on('mouseleave', function(event, d) {
      d3.select(this).classed('country-rest-hover', false);
      resetPanel();
    })
    .on('click', function(event, d) {
      const name = d.properties.name;
      const cls = getCountryClass(name);
      if (cls === 'country-rest') return;

      // Remove selected from all
      svg.selectAll('path').classed('country-selected', false);
      // Add selected to clicked
      d3.select(this).classed('country-selected', true);

      showPanel(name);
    });

  // Zoom + pan
  const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', (event) => {
      svg.selectAll('path').attr('transform', event.transform);
    });

  svg.call(zoom);

  // Double-click to reset zoom
  svg.on('dblclick.zoom', () => {
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  });
}

document.addEventListener('DOMContentLoaded', initWorldMap);
