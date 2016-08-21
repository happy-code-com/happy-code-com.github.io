
var interval = false;
var popup = false;
var layers_by_color = {};
var layers = {};
var layer_group = new L.featureGroup();
var mymap = false;

var highlightStyle = {
    'color': '#144881',
    'weight': 1
};

var highlightStyle_neutral = {
    'color': '#eae7e7',
    'weight': 1
};

var defaultStyle = {
    "color": "white",
    'opacity': 1,
};

//var iframe_image_size = $("#credit-region-map-iframe", parent.document).css('height');
//$("#credit-region-map-iframe", parent.document).parents('.article__text').css('margin-right', '0px');

function iframe_image_show () {
    var height = $('#region_map_image_chart img').css('height');
    //$("#credit-region-map-iframe", parent.document).css('height', height);
    $('#region_map_dinamic').hide();
    $('#region_map_image_chart').show();
}

function iframe_map_show () {
    //$("#credit-region-map-iframe", parent.document).css('height', iframe_image_size);
    $('#region_map_dinamic').show();
    $('#region_map_image_chart').hide();


    mymap = L.map('region-map', {
        scrollWheelZoom: false,
        continuousWorld: false,
        'maxZoom': 6,
        'minZoom': 2,
        'crs': L.extend({}, L.CRS.EPSG4326, {transformation: new L.Transformation(0.4 / 180, 1, -0.9 / 180, 2)})
    }).setView([56.372454, 104.146302], 3);

    $.ajax({
        url: './first_data.json',
        dataType: 'json',
        async: true,
        data: {},
        success: function( data_content ) {

            var json = data_content.data;
            var legend = data_content.legend;

            for (var i in json) {

                var jj = [{
                    "type": "Feature",
                    "properties": {
                        "name": "",
                        "show_on_map": false
                    },
                    "geometry": json[i]['geo_polygon']
                }];

                var popup_content = make_popup(json[i]);
                var color = json[i]['color'];
                var border_color = 'white'
                if (color == '#eae7e7') {
                    border_color = '#eae7e7';
                }

                var ll = L.geoJson(jj, {
                    'fill': true,
                    'fillColor': color,
                    'fillOpacity':1,
                    "color": border_color,
                    "weight": 1,
                    "opacity": 1,
                    "mydata": json[i],
                    continuousWorld: false,
                    onEachFeature: each_polygons,
                }).bindPopup(popup_content, {
                    'autoPan': true,
                    'closeOnClick': false,
                    'closeButton': false,
                    'className': 'popup-my',
                    'offset': new L.Point(0, -40),
                });

                if (layers_by_color[ json[i]['color_number'] ]) {
                    layers_by_color[ json[i]['color_number'] ][i] = ll;
                } else {
                    layers_by_color[ json[i]['color_number'] ] = [];
                    layers_by_color[ json[i]['color_number'] ][i] = ll;
                }
                layers[i] = ll;
                layer_group.addLayer(ll);
            }

            mymap.addLayer(layer_group);
            //mymap.fitBounds(layer_group.getBounds());

            ffbb = layer_group.getBounds();



            var northEast = L.latLng(parseFloat(ffbb['_northEast'].lat) + 20, parseFloat(ffbb['_northEast'].lng) + 40);
            var southWest = L.latLng(parseFloat(ffbb['_southWest'].lat) - 20, parseFloat(ffbb['_southWest'].lng) - 40);

            //L.marker(northEast).bindPopup('northEast').addTo(mymap);
            //L.marker(southWest).bindPopup('southWest').addTo(mymap);


            mymap.setMaxBounds(L.latLngBounds(northEast, southWest));
            //mymap.options.minZoom = mymap.getZoom();

            var html_legend = '';
            for (var i in legend.plus) {
                html_legend =  '<span class="legend-block" data-color-number="'+legend.plus[i].color_number+'"><span class="legend-block-color" style="background-color: #'+legend.plus[i].color+'"> ' + legend.plus[i].sum + '</span></span>' + html_legend;
            }
            html_legend =  html_legend + '<span class="legend-block" data-color-number="n"><span class="legend-block-color" style="background-color: #eae7e7"> <b>0</b></span></span>';
            for (var i in legend.minus) {
                html_legend = html_legend + '<span class="legend-block" data-color-number="'+legend.minus[i].color_number+'"><span class="legend-block-color" style="background-color: #'+legend.minus[i].color+'"> ' + legend.minus[i].sum + '</span></span>';
            }

            html_legend = html_legend + ' <span>руб.</span>';
            $('#legend-minus').html(html_legend);

            legend_animation_start();

        }
    });

}


if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
    iframe_image_show();
} else {
    iframe_map_show();
}


function each_polygons (feature, layer) {
    layer.setStyle(defaultStyle);

    (function(layer, properties) {

        var popup = false;

        layer.on('click', function (e) {
            //console.log('click');
            $('.legend-block').removeClass('active');
            layer_group.setStyle(defaultStyle);
            if (popup) {
                popup.closePopup();
            }

            mymap.closePopup();


            region_switcher_stop();
            layer.setStyle(highlightStyle);
            layer.bringToFront();
            var legend_block = $('.legend-block[data-color-number="'+ e.target.options['mydata'].color_number+'"]');

            $(legend_block).addClass('active');

            var popup_content = make_popup(layer.options['mydata']);

            popup = L.popup({
                //'keepInView': true,
                //'autoPan': true,
                'autoPan': true,
                'closeOnClick': false,
                'closeButton': false,
                'className': 'popup-my',
                'offset': new L.Point(0, -40),
            }).setLatLng(e.latlng).setContent(popup_content).openOn(mymap);

        });

        layer.on('mouseover', function (e) {
            //console.log('mouseover');
            layer_group.setStyle(defaultStyle);
            $('.legend-block').removeClass('active');
            region_switcher_stop();
            if (e.target.options['mydata'].color_number == 'n') {
                layer.setStyle(highlightStyle_neutral);
            } else {
                layer.setStyle(highlightStyle);
            }

            layer.bringToFront();
            var legend_block = $('.legend-block[data-color-number="'+ e.target.options['mydata'].color_number+'"]');

            $(legend_block).addClass('active');

            var popup_content = make_popup(layer.options['mydata']);

            popup = L.popup({
                //'keepInView': true,
                //'autoPan': true,
                'autoPan': true,
                'closeOnClick': false,
                'closeButton': false,
                'className': 'popup-my',
                'offset': new L.Point(0, -40),
            }).setLatLng(e.latlng).setContent(popup_content).openOn(mymap);

        });
        layer.on("mouseout", function (e) {
            //console.log('mouseout');
            //region_switcher_start();
            legend_animation_start();
            layer.setStyle(defaultStyle);
            if (popup) {
                popup.closePopup();
            }
            mymap.closePopup();
            $('.legend-block').removeClass('active');
        });

        layer.on("mousemove", function (e) {
            if (popup) {
                popup.setLatLng(e.latlng);
            }
        });
    })(layer, feature.properties);

}

//region_switcher_start();


$('body').on('mouseover', '.legend-block', function(){
    //console.log('mouseover');
    $('.legend-block').removeClass('active');
    layer_group.setStyle(defaultStyle);
    var color_number = $(this).attr('data-color-number');
    var legend_block = $('.legend-block[data-color-number="'+color_number+'"]');
    $(legend_block).addClass('active');

    for( var i in layers_by_color[ color_number ]) {
        layers_by_color[ color_number ][i].setStyle(highlightStyle);
        layers_by_color[ color_number ][i].bringToFront();
    }
    region_switcher_stop();
});

$('body').on('mouseout', '.legend-block', function(){
    //console.log('mouseout');
    var color_number = $(this).attr('data-color-number');
    var legend_block = $('.legend-block[data-color-number="'+color_number+'"]');
    $(legend_block).removeClass('active');
    for( var i in layers_by_color[ color_number ]) {
        layers_by_color[ color_number ][i].setStyle(defaultStyle);
    }
    //region_switcher_start();
    legend_animation_start();
});

$('body').on('click', '.legend-block', function(){
    //console.log('click');
    $('.legend-block').removeClass('active');
    layer_group.setStyle(defaultStyle);
    var color_number = $(this).attr('data-color-number');
    var legend_block = $('.legend-block[data-color-number="'+color_number+'"]');
    $(legend_block).addClass('active');
    for( var i in layers_by_color[ color_number ]) {
        layers_by_color[ color_number ][i].setStyle(highlightStyle);
        layers_by_color[ color_number ][i].bringToFront();
    }
    region_switcher_stop();
});



var interval_i = 0;


function region_switcher_start () {
    layer_group.setStyle(defaultStyle);
    interval = setInterval(function(){
        layer_group.setStyle(defaultStyle);
        interval_i++;
        //console.log(layers);



        if (layers[ interval_i ]) {
            layers[ interval_i ].setStyle(highlightStyle);
            layers[ interval_i ].bringToFront();
            layers[ interval_i ].openPopup();
        }
    }, 3000);
}

function region_switcher_stop () {

    if (interval){
        clearInterval(interval);
    }
    //for (var i = 1; i < 99999; i++) window.clearInterval(i);
    mymap.closePopup();
    if (popup) {
        popup.closePopup();
    }
}

function make_popup (data) {
    //
    //var popup_content = '<span style="font-size:14px;"><b>'+data['region_name']+'</b></span> <br><br>' +
    //'<b>Средний доход семьи:</b> '+data['sum_1']+' руб.<br>' +
    //'<b>Цена квадратного метра:</b> '+data['sum_2']+' руб.<br>' +
    //'<b>Площадь квартиры:</b> '+data['sum_3']+' кв.м.<br>' +
    //'<b>Кредит:</b> '+data['sum_4']+' руб.<br>' +
    //'<b>Ежемесячный платеж:</b> '+data['sum_5']+' руб.<br>';
    //


    var popup_content = '<span style="font-size:14px;"><b>'+data['region_name']+'</b></span> <br>' +
        '<table style="font-size: 10px; width: 100%;min-width: 250px;">' +
        '<tr><td style="font-weight: bold;">Средний доход семьи:</td><td>'+data['sum_1']+' руб.</td></tr>' +
        '<tr><td style="font-weight: bold;">Цена квадратного метра:</td><td>'+data['sum_2']+' руб.</td></tr>' +
        '<tr><td style="font-weight: bold;">Площадь квартиры:</td><td>'+data['sum_3']+' кв.м.</td></tr>' +
        '<tr><td style="font-weight: bold;">Кредит:</td><td>'+data['sum_4']+' руб.<br>' +
        '<tr><td style="font-weight: bold;">Ежемесячный платеж:</td><td>'+data['sum_5']+' руб.</td></tr>' +
        '</table>';

    if (data['sum_6'] > 0) {
        popup_content = popup_content + '<span class="green"><b>Дохода хватает с избытком:</b> '+data['sum_6_f']+' руб.</span><br>';
    } else if (data['sum_6'] < 0) {
        popup_content = popup_content + '<span class="red"><b>Не хватает дохода:</b> '+data['sum_6_f']+' руб.</span><br>';
    } else {
        popup_content = '<b style="font-size:14px;">'+data['region_name']+'</b> <br><br>' +
            '<div style="text-align: center">НЕТ ДАННЫХ</div>';
    }

    return popup_content;

}
var legend_animation_pool = [];
var timeout = false;
function legend_animation_start () {
    clearInterval(interval);
    clearTimeout(timeout);

    timeout = setTimeout(function(){
        if (legend_animation_pool.length == 0) {
            for (var i in layers_by_color) {
                for (var z in layers_by_color[i]) {
                    legend_animation_pool.push({
                        'color_number': i,
                        'region_id': z,
                        'target': layers_by_color[i][z],
                    });
                }
            }
        }

        interval = setInterval(function(){
            var layer = legend_animation_pool.shift();
            var legend_block = $('.legend-block[data-color-number="'+layer.color_number+'"]');
            $('.legend-block').removeClass('active');
            $(legend_block).addClass('active');
            layer_group.setStyle(defaultStyle);
            //mymap.fitBounds(layer.target.getBounds());
            layer.target.setStyle(highlightStyle);
            layer.target.bringToFront();
            layer.target.openPopup();
            legend_animation_pool.push(layer);
        }, 3000);
    }, 10000);

}
