'use client';

import { MapContainer, ImageOverlay, useMapEvents, Marker } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function RadarDeCoordenadas() {
  useMapEvents({
    click(e) {
      alert(`Coordenadas: [${e.latlng.lat.toFixed(0)}, ${e.latlng.lng.toFixed(0)}]`);
      console.log(`[Coordenadas]: y=${e.latlng.lat.toFixed(0)}, x=${e.latlng.lng.toFixed(0)}`);
    }
  });
  return null;
}

function MonitorDeZoom({ onZoomChange }: { onZoomChange: (zoom: number) => void }) {
  useMapEvents({ zoomend: (e) => onZoomChange(e.target.getZoom()) });
  return null;
}

export default function MapaInterativo() {
  const [zoomAtual, setZoomAtual] = useState(-1);

  const bounds: L.LatLngBoundsExpression = [[0, 0], [3072, 4096]]; 
  const centro: L.LatLngExpression = [1536, 2500]; 

  // ==========================================
  // PONTOS DOS RIOS (Apenas Textos)
  // ==========================================
  const pontosRioAei: L.LatLngExpression[] = [[2405, 2916], [2366, 2929], [2270, 2953], [2238, 2914], [2124, 2870], [2110, 2753], [2141, 2720], [2206, 2710], [2359, 2909], [2346, 2852], [2288, 2721], [2250, 2704], [2219, 2688], [2172, 2652], [2116, 2666], [2058, 2698], [1998, 2716], [1975, 2646], [1958, 2568], [1875, 2476], [1773, 2547], [1730, 2560], [1607, 2645], [1572, 2544], [1496, 2414], [1544, 2341], [1586, 2264], [1556, 2201]];
  const pontosRioMori: L.LatLngExpression[] = [[802, 2022], [802, 2076], [742, 2070], [674, 2006], [644, 1920], [590, 1948], [560, 1952], [512, 2014]];
  const pontosRioAtlemotlaloua: L.LatLngExpression[] = [[810, 3450], [644, 3600], [566, 3596], [468, 3656], [424, 3716]];
  const pontosRiachoBukon: L.LatLngExpression[] = [[106, 2958], [92, 3040], [43, 3133]];
  const pontosRioLoin: L.LatLngExpression[] = [[1474, 671], [1379, 770], [1230, 887], [1121, 1046], [1261, 1095], [1327, 1289], [1240, 1334], [1110, 1328], [985, 1267], [907, 1268], [806, 1332]];
  const pontosRioTlatitok: L.LatLngExpression[] = [[2852, 1950], [2718, 1898], [2765, 1825], [2546, 1979]];


  // ==========================================
  // BIBLIOTECA DE CARTOGRAFIA (ESTILOS HTML)
  // ==========================================
  const iconReino = (nome: string, rotacao: number = 0) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="font-family: 'Carneniana', serif; color: #fbbf24; font-size: 0.8rem; font-weight: bold; opacity: 0.7; letter-spacing: 0.15em; text-align: center; width: 150px; margin-left: -75px; transform: rotate(${rotacao}deg); pointer-events: none; text-shadow: 2px 2px 4px rgba(0,0,0,1), -1px -1px 0 rgba(0,0,0,0.8);">${nome}</div>`,
  });

  const iconRegiao = (nome: string, rotacao: number = 0) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="font-family: 'Carneniana', serif; color: #f59e0b; font-size: 1.1rem; opacity: 0.8; letter-spacing: 0.1em; text-align: center; width: 240px; margin-left: -120px; transform: rotate(${rotacao}deg); pointer-events: none; text-shadow: 1px 1px 3px rgba(0,0,0,1);">${nome}</div>`,
  });

  const iconMar = (nome: string, rotacao: number = 0) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="font-family: 'Georgia', serif; color: #38bdf8; font-style: italic; font-weight: bold; font-size: 1.3rem; opacity: 0.6; letter-spacing: 0.2em; text-align: center; width: 300px; margin-left: -150px; transform: rotate(${rotacao}deg); pointer-events: none; text-shadow: 1px 1px 4px rgba(0,20,50,1);">${nome}</div>`,
  });

  const iconLago = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #7dd3fc; font-style: italic; font-size: 1.1rem; text-shadow: 1px 1px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">🌊 ${nome}</div>`,
  });

  const iconRioNome = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #93c5fd; font-style: italic; font-weight: 300; font-size: 0.85rem; opacity: 0.75; text-shadow: 1px 1px 2px rgba(0,0,0,1); white-space: nowrap; transform: rotate(-15deg); margin-left: -20px; margin-top: -10px;">≈ ${nome} ≈</div>`,
  });

  const iconCapital = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #fbbf24; font-weight: 900; font-size: 1.3rem; text-shadow: 2px 2px 5px rgba(0,0,0,1); white-space: nowrap; margin-left: -30px;"><span style="font-size: 1.5rem;">👑</span> ${nome}</div>`,
  });

  const iconCidade = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #e5e5e5; font-weight: bold; font-size: 1.1rem; text-shadow: 2px 2px 3px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -20px;">🏰 ${nome}</div>`,
  });

  const iconVila = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #d4d4d8; font-size: 1rem; text-shadow: 1px 1px 3px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -20px;">🛖 ${nome}</div>`,
  });

  const iconPorto = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #67e8f9; font-weight: bold; font-size: 1.1rem; text-shadow: 2px 2px 3px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -20px;">⚓ ${nome}</div>`,
  });

  const iconFloresta = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #6ee7b7; font-weight: bold; font-size: 1.1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">🌲 ${nome}</div>`,
  });

  const iconMontanha = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #cbd5e1; font-weight: bold; font-size: 1.1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">⛰️ ${nome}</div>`,
  });
  
  const iconDeserto = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #fcd34d; font-weight: bold; font-size: 1.1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">🐪 ${nome}</div>`,
  });

  const iconVulcao = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #ef4444; font-weight: 900; font-size: 1.2rem; text-shadow: 0px 0px 8px #dc2626, 2px 2px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">🌋 ${nome}</div>`,
  });

  const iconPontoGeografico = (icone: string, nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #a3a3a3; font-weight: bold; font-size: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -30px;">${icone} ${nome}</div>`,
  });

  const iconRuinas = (nome: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #a8a29e; font-style: italic; font-size: 1rem; text-shadow: 2px 2px 3px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -30px;">🏛️ ${nome}</div>`,
  });

  const iconMistico = (icone: string, nome: string, corHex: string) => L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="color: #f8fafc; font-weight: 900; font-size: 1.2rem; text-shadow: 0px 0px 10px ${corHex}, 2px 2px 5px rgba(0,0,0,0.9); white-space: nowrap; margin-left: -40px;">${icone} ${nome}</div>`,
  });


  return (
    // IMPORTANTE: bg-black garante que as bordas do mapa que sobrarem na tela fiquem escuras
    <div className="h-full w-full relative bg-black">
      <MapContainer 
        crs={L.CRS.Simple} bounds={bounds} center={centro} zoom={-1} 
        maxZoom={3} minZoom={-2} 
        className="h-full w-full outline-none bg-black" // Fundo preto aplicado ao container Leaflet
      >
        <RadarDeCoordenadas />
        <MonitorDeZoom onZoomChange={setZoomAtual} />
        <ImageOverlay url="/meu-mapa.jpg" bounds={bounds} />

        {/* ==========================================
            NÍVEL 1: MACRO GEOGRAFIA (Sempre Visível)
            ========================================== */}
        {zoomAtual <= 1 && (
          <>
            <Marker position={[2203, 2808]} icon={iconReino('CAULES', -5)} />
            <Marker position={[1542, 1930]} icon={iconReino('LEOVALIS', -15)} />
            <Marker position={[1402, 3226]} icon={iconReino('FERUSNOCTIS', 10)} />
            <Marker position={[1252, 3824]} icon={iconReino('HUSÚ', -5)} />
            <Marker position={[804, 1872]} icon={iconReino('ELDERMOR', 5)} />
            <Marker position={[476, 3060]} icon={iconReino('ANTIGA VALANK', -10)} />
            <Marker position={[1367, 1232]} icon={iconReino('NZARA\'KHUR', 0)} />
            <Marker position={[1707, 1150]} icon={iconReino('SILVUSGRIZZLE', -10)} />
            <Marker position={[1115, 540]} icon={iconReino('HRAFNSYN', 15)} />
            <Marker position={[2764, 734]} icon={iconReino('TSUIA', 5)} />
            <Marker position={[2839, 2066]} icon={iconReino('VALANK', -5)} />
            <Marker position={[120, 2420]} icon={iconReino("Tenkö")} />
            <Marker position={[428, 535]} icon={iconReino("Kalas")} />
          </>
        )}

        {/* ==========================================
            NÍVEL 2: ESTADOS, NATUREZA, MARES (Zoom >= 0)
            ========================================== */}
        {zoomAtual >= 0 && (
          <>
            {/* Regiões, Planaltos e Desertos */}
            <Marker position={[1991, 2981]} icon={iconRegiao('MÜSRAT')} />
            <Marker position={[1816, 2498]} icon={iconRegiao('TERRAS BAIXAS DO AEI', 20)} /> 
            <Marker position={[849, 3599]} icon={iconRegiao('PLANALTO SHEIKRAN', -15)} />
            <Marker position={[724, 3138]} icon={iconRegiao('PLANÍCIES FECHADAS', 5)} />
            <Marker position={[1301, 1296]} icon={iconDeserto('Deserto de Al\'Hamra')} />
            <Marker position={[1624, 1280]} icon={iconRegiao('TERRAS DERROCAS', -5)} />
            <Marker position={[1306, 532]} icon={iconRegiao('PLANÍCIES FRÔNDEAS', 10)} />
            <Marker position={[2746, 3826]} icon={iconRegiao('TUNDRA AIKES', 0)} />
            
            {/* Mares, Golfo e Oceanos */}
            <Marker position={[2634, 3315]} icon={iconMar('MAR DO NORTE', 5)} />
            <Marker position={[2016, 1678]} icon={iconMar('MAR DE NUVENS', -10)} />
            <Marker position={[1432, 2062]} icon={iconMar('MAR DE AIS', -10)} />
            <Marker position={[1017, 294]} icon={iconMar('OCEANO YULA', 15)} />
            <Marker position={[2716, 286]} icon={iconMar('OCEANO YULA', -10)} />
            <Marker position={[609, 1273]} icon={iconMar('MAR SCLACIES', -5)} />
            <Marker position={[596, 2884]} icon={iconMar('ENSEADA GUARDAVENTO', 10)} />
            <Marker position={[1030, 741]} icon={iconMar('GOLFO DE CHENES', -5)} />
            
            {/* Lagos */}
            <Marker position={[1067, 3724]} icon={iconLago('Lago Shenshen')} />
            <Marker position={[1216, 722]} icon={iconLago('Lago Phidon')} />

            {/* Ilhas */}
            <Marker position={[944, 2576]} icon={iconPontoGeografico('🏝️', 'Ilhas Soilas')} />
            <Marker position={[538, 2560]} icon={iconPontoGeografico('🏝️', 'Ilha Ikatia')} />
            <Marker position={[302, 1446]} icon={iconPontoGeografico('🏝️', 'Ilha Moki')} />
            <Marker position={[104, 1828]} icon={iconPontoGeografico('🏝️', 'Ilha Senku')} />
            <Marker position={[216, 3898]} icon={iconPontoGeografico('🏝️', 'Ilha Hieyong')} />
            <Marker position={[181, 800]} icon={iconPontoGeografico('🏝️', 'Ilha Gingordis')} />
            <Marker position={[247, 271]} icon={iconPontoGeografico('🏝️', 'Ilha Yuak')} />
            <Marker position={[644, 310]} icon={iconPontoGeografico('🏝️', 'Ilha Yakan')} />
            <Marker position={[362, 748]} icon={iconPontoGeografico('🏝️', 'Ilha Iahio')} />
            <Marker position={[1970, 3782]} icon={iconPontoGeografico('🏝️', 'Ilha Makivea')} />

            {/* Pântanos e Florestas */}
            <Marker position={[1960, 2218]} icon={iconPontoGeografico('🌿', 'Pantanal Central')} />
            <Marker position={[1605, 950]} icon={iconPontoGeografico('🌿', 'Pântano do Olvido')} />
            <Marker position={[2028, 3244]} icon={iconFloresta('Bosque de Argentunoctem')} />
            <Marker position={[1102, 2462]} icon={iconFloresta('Floresta Bluttränen')} />
            <Marker position={[1282, 1728]} icon={iconFloresta('Florestas Herbra')} />
            <Marker position={[1302, 2948]} icon={iconFloresta('Floresta Viridis')} />
            <Marker position={[1662, 3885]} icon={iconPontoGeografico('🪨🌲', 'Floresta de Pedra de Jinshu')} />
            <Marker position={[802, 2240]} icon={iconFloresta('Floresta Knin')} />
            <Marker position={[360, 1930]} icon={iconFloresta('Floresta Sagodhí')} />
            <Marker position={[524, 3416]} icon={iconFloresta('Floresta Tlali')} />
            <Marker position={[498, 884]} icon={iconFloresta('Floresta Kald')} />
            <Marker position={[1321, 918]} icon={iconFloresta('Floresta Umbraflor')} />
            <Marker position={[833, 1031]} icon={iconFloresta('Bosque da Desolação')} />
            <Marker position={[2575, 1832]} icon={iconFloresta('Bosque Yankuik')} />
            <Marker position={[1045, 1306]} icon={iconPontoGeografico('🍃', 'Clareira Orfall')} />

            {/* Montanhas, Vulcões e Relevos Especiais */}
            <Marker position={[2438, 3018]} icon={iconMontanha('Cordilheira Nord Fæl')} />
            <Marker position={[977, 3785]} icon={iconMontanha('Montanha Kraham')} />
            <Marker position={[944, 3132]} icon={iconMontanha('Montanha Maden')} />
            <Marker position={[636, 3278]} icon={iconMontanha('Montanha Valank')} />
            <Marker position={[910, 1794]} icon={iconMontanha('Picos de Ferro')} />
            <Marker position={[1527, 844]} icon={iconMontanha('Cordilheira Shwern')} /> 
            <Marker position={[1521, 646]} icon={iconMistico('🗻✨', 'Montanha Aíphos', '#fef08a')} />
            <Marker position={[2272, 518]} icon={iconMistico('🗻✨', 'Montanha Divina', '#fef08a')} />
            <Marker position={[2474, 570]} icon={iconVulcao('Vulcão Solaverno')} />
            <Marker position={[1328, 3528]} icon={iconPontoGeografico('⛰️', 'Passagem Yuanlu')} />
            <Marker position={[1531, 1295]} icon={iconPontoGeografico('⛰️', 'Passagem Tang-e Kavir')} />
            <Marker position={[512, 3778]} icon={iconPontoGeografico('🧗', 'Penhasco Índigo')} />
            <Marker position={[1317, 1472]} icon={iconPontoGeografico('🏜️', 'Istmo de Mesheagë')} />
            <Marker position={[2956, 1748]} icon={iconPontoGeografico('🧱', 'Muralha Xochitl')} />

            {/* Locais Místicos */}
            <Marker position={[2000, 3388]} icon={iconMistico('🌳✨', 'Árvore Bi-kmūn', '#ec4899')} />
            <Marker position={[1268, 2434]} icon={iconMistico('👁️🔮', 'Mausoléu Lý Sgav', '#8b5cf6')} />
            <Marker position={[1178, 1401]} icon={iconMistico('🗼', 'Torre de Sués', '#3b82f6')} />
            <Marker position={[2011, 838]} icon={iconMistico('🗼', 'Torre do Horizonte Velado', '#64748b')} />
            <Marker position={[1834, 3720]} icon={iconMistico('🗼', 'Torre Solitária', '#94a3b8')} />
          </>
        )}

        {/* ==========================================
            NÍVEL 3: CIDADES, RUÍNAS E RIOS (Zoom >= 1)
            ========================================== */}
        {zoomAtual >= 1 && (
          <>
            {/* Etiquetas dos Rios */}
            {pontosRioAei.map((pos, idx) => <Marker key={`aei-${idx}`} position={pos} icon={iconRioNome('Rio Aei')} />)}
            {pontosRioMori.map((pos, idx) => <Marker key={`mori-${idx}`} position={pos} icon={iconRioNome('Rio Morí')} />)}
            {pontosRioAtlemotlaloua.map((pos, idx) => <Marker key={`atle-${idx}`} position={pos} icon={iconRioNome('Rio Atlemotlaloua')} />)}
            {pontosRiachoBukon.map((pos, idx) => <Marker key={`bukon-${idx}`} position={pos} icon={iconRioNome('Riacho Bukon')} />)}
            {pontosRioLoin.map((pos, idx) => <Marker key={`loin-${idx}`} position={pos} icon={iconRioNome('Rio Lo ïn')} />)}
            {pontosRioTlatitok.map((pos, idx) => <Marker key={`tlatitok-${idx}`} position={pos} icon={iconRioNome('Rio Tlatitok')} />)}

            {/* Capitais e Grandes Cidades */}
            <Marker position={[2203, 2808]} icon={iconCapital('Caules')} />
            <Marker position={[1174, 3865]} icon={iconCapital("Kiei'o")} />
            <Marker position={[120, 2420]} icon={iconCapital("Tenkö")} />
            <Marker position={[428, 535]} icon={iconCapital("Kalas")} />

            {/* Cidades e Vilas */}
            <Marker position={[2149, 2150]} icon={iconCidade('Distrito de Bern')} />
            <Marker position={[1756, 2832]} icon={iconCidade('Heinlez')} />
            <Marker position={[1060, 2010]} icon={iconCidade('Irken')} />
            <Marker position={[2248, 3244]} icon={iconCidade('Lingüaf')} />
            <Marker position={[2739, 2858]} icon={iconCidade('Hostër')} />
            <Marker position={[2325, 2557]} icon={iconCidade('Waser')} />
            <Marker position={[1322, 2668]} icon={iconCidade('Elt Bosc')} />
            <Marker position={[733, 3768]} icon={iconCidade('Osk')} />
            <Marker position={[874, 2986]} icon={iconCidade('Mintaz')} />
            <Marker position={[102, 3530]} icon={iconCidade('Ziuâ')} />
            <Marker position={[182, 3048]} icon={iconCidade('Iekó')} />
            <Marker position={[1346, 677]} icon={iconCidade('Mauvidía')} />
            <Marker position={[1692, 2526]} icon={iconVila('Vila Sother')} />

            {/* Portos */}
            <Marker position={[1662, 3412]} icon={iconPorto('Porto Nuis')} />
            <Marker position={[1006, 568]} icon={iconPorto('Porto de Chenes')} />

            {/* Ruínas da Antiguidade */}
            <Marker position={[2079, 2444]} icon={iconRuinas('Ruínas de Hering')} />
            <Marker position={[1454, 1690]} icon={iconRuinas('Ruínas de Aika')} />
            <Marker position={[1444, 2930]} icon={iconRuinas('Ruínas da Antiga Ferusnoctis')} />
            <Marker position={[855, 3919]} icon={iconRuinas('Ruínas de Weio')} />
            <Marker position={[971, 1036]} icon={iconRuinas('Ruínas de Daria')} />
          </>
        )}

      </MapContainer>
    </div>
  );
}