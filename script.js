// JavaScript

console.log('Hello world!');

const map = L.map('map').setView([33.65664204427942, 130.42933838377155], 14);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico_pink.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([33.65664204427942, 130.42933838377155],{icon: whiteIcon }).addTo(map).bindPopup('私がよく行くところ！<br><img src="images/img01.png" alt="img">').openPopup();

  const circle = L.circle([33.65664204427942, 130.42933838377155], {
    color: 'red', //円の輪郭線の色
    fillColor: '#ffc6ff', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

// 多角形の表示
const polygon = L.polygon([
    [33.663068, 130.448656],
    [33.645492, 130.427713],
    [33.64585, 130.456724]
  ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
  }).addTo(map);