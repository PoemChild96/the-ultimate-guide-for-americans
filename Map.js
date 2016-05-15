// キャンパスの要素を取得する
var canvas = document.getElementById( 'map-canvas' ) ;

// 中心の位置座標を指定する
var latlng = new google.maps.LatLng(47.608801, -122.341807);

// 地図のオプションを設定する
var mapOptions = {
	zoom: 15 ,				// ズーム値
	center: latlng,		// 中心座標 [latlng]
	scaleControl: true,
	
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas , mapOptions ) ;

// マーカーのインスタンスを格納する配列
var markers = [] ;

// 1つ目のマーカーのインスタンスを作成する
// [ new google.maps.Marker() ]の引数にオプションオブジェクトを指定する
markers[0] = new google.maps.Marker( {
	map: map ,
	position: new google.maps.LatLng(47.608801, -122.341807) ,
} ) ;
