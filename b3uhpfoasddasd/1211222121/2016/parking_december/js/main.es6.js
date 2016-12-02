"use strict"

function get_GET () {
    var result = [];
    var search = decodeURIComponent(location.search.substr(1)).split('&');
    for (var i in search) {
        search[i] = search[i].split('=');
        result[ search[i][0] ] = search[i][1];
    }
    return result;
}

var GET = get_GET();
var BG_MAP = 'light';
var BG_MAP_URL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}';
var BG_MAP_COPYRIGHT = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var COLOR = '#18ca95';
var LINE_WEIGHT = 7;

if (GET['bg']) {
    BG_MAP = GET['bg'];
    if (BG_MAP == 'dark') {
        BG_MAP_URL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.{ext}';
        BG_MAP_COPYRIGHT = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
    }
}

if (GET['c']) {
    COLOR = '#' + GET['c'];
}

if (GET['w']) {
    LINE_WEIGHT = GET['w'];
}

// --------


function $(selector) {
    var el = document;
    if(typeof selector == 'string') {
        var ret = el.querySelectorAll(selector);
        if(ret.length > 1)
            return ret;
        else
            return ret[0];
    }
    else {
        return selector;
    }
}

NodeList.prototype.addClass = function(...args) {
    this.forEach(el => el.addClass(...args));
    return this;
};

NodeList.prototype.removeClass = function(...args) {
    this.forEach(el => el.classList.remove(...args));
    return this;
};

NodeList.prototype.toggleClass = function(...args) {
    this.forEach(el => el.toggleClass(...args));
    return this;
};

NodeList.prototype.hasClass = function(className) {
    this.forEach(function(el) {
        if(!el.hasClass(className)) return false;
    });
    return true;
};

NodeList.prototype.css = function(...args) {
    this.forEach(el => el.css(...args));
    return this;
};

Element.prototype.addClass = function(...args) {
    for (let arg of args) this.classList.add(arg);
    return this;
};

Element.prototype.removeClass = function(...args) {
    for (let arg of args) this.classList.remove(arg);
    return this;
};

Element.prototype.toggleClass = function(...args) {
    for (let arg of args) this.classList.toggle(arg);
    return this;
};

Element.prototype.hasClass = function(className) {
    return this.classList.contains(className) ? true : false;
};

Element.prototype.attr = function() {
    if (arguments.length == 1) {
        let temp = arguments[0];
        if (typeof temp === 'object') {
            for (var key in temp) {
                this.setAttribute(key, item[key]);
            }
            return this;
        } else {
            return this.getAttribute(temp);
        }
    } else {
        this.setAttribute(arguments[0], arguments[1]);
        return this;
    }
};

Element.prototype.css = function() {
    if(arguments.length > 1) {
        this.style[arguments[0]] = arguments[1];
        return this;
    } else {
        let args = arguments[0];
        if(typeof args == 'object') {
            for(var key in args) {
                this.style[key] = args[key];
            }
            return this;
        } else {
            return this.style[args];
        }
    }
};

Document.prototype.on = Document.prototype.addEventListener;
Element.prototype.on = Element.prototype.addEventListener;

function makePopupHtml(options, little = false) {
    var html = '';
    var html2 = '';
    for(var key in options) {
        if((key == 'street' && !little) || (key == 'address' && little)) {
            html += '<div class="popup__header">' + options[key] + '</div>';
        }
        else {
            if(key != 'line' && key != 'price_id' && key != 'weight' && key != 'price_first_hour' && key != 'street') {
                html2 += '<div class="popup__item">' + options[key];
                html2 += '<div class="popup__item-name">' + translate[key] + '</div></div>';
            }
        }
    }
    return html+html2;
}

function makeFilterElement(first_time, name, layer) {
    if(layer != undefined)
        var id = layer['_leaflet_id'];
    else
        var id = '';

    if(first_time) {
        allLayers[id] = layer;
    }

    var filter_elem = document.createElement('div');
    filter_elem.addClass('filter__item', 'filter_title__item', 'js-filter-item').attr('data-id', id).css('display', 'block');

    var filter_elem_points = document.createElement('div');
    filter_elem_points.addClass('filter__points');

    var filter_elem_name = document.createElement('span');
    filter_elem_name.addClass('filter__text', 'js-filter-text').innerHTML = name;

    filter_elem_points.appendChild(filter_elem_name);
    filter_elem.appendChild(filter_elem_points);
    $('.js-filter-item-container').appendChild(filter_elem);

    filter_elem.on('click', function(e) {filterClickAction(filter_elem)});
}

function filterClickAction(self) {
    setTimeout(function () {filter_opener.removeClass('active')}, 10);
    if ($('.filter__item.active') != undefined)
        $('.filter__item.active').removeClass('active');
    $(self).addClass('active');
    $('.filter__point.js-filter-point').innerHTML = $(self).innerHTML;
    geojson.eachLayer(function (layer) {
        geojson.removeLayer(layer);
    });

    var thisActive = -1;
    var thisStreet = 0;
    var tempArr = [];
    if (self.attr('data-id') != '') {
        allLayers[self.attr('data-id')].setStyle({'color': 'transparent'});
        geojson.addLayer(allLayers[self.attr('data-id')]);
        geojson = geojson.addTo(map);

        map.fitBounds(geojson.getBounds());
        zoom = map.getZoom();


        if (!$('.filter__item.active').hasClass('js-filter-clear')) {
            thisActive = $('.filter__item.active').attr('data-id');
            thisStreet = allLayers[thisActive].feature.properties.street.toLowerCase();
        }
    } else {
        thisStreet = self.children[0].children[0].innerHTML.toLowerCase();
    }

    if (zoom <= 13 && self.attr('data-id') != '') {
        if (thisActive > -1) {
            allLayers[thisActive].setStyle({'color': COLOR, weight: LINE_WEIGHT});
            geojson.addLayer(allLayers[thisActive]);
            geojson.addTo(map);
        } else {
            for (var key in allLayers) {
                allLayers[key].setStyle({'color': COLOR, weight: LINE_WEIGHT});
                geojson.addLayer(allLayers[key]);
                geojson.addTo(map);
            }
        }
    } else {
        map.eachLayer(layer => layer instanceof L.Polyline ? map.removeLayer(layer) : '');

        if (thisActive > -1 || thisStreet != 0) {
            tempArr = data_all.filter(a => (a.street.toLowerCase() == thisStreet && a.price_first_hour == chosen_price));
        } else {
            tempArr = data_all.filter(a => (a.price_first_hour == chosen_price));
        }

        allLines = [];
        for (var i = 0, item; item = tempArr[i++];) {
            allLines[allLines.length] = L.polyline(
                item.line,
                {
                    color: prices_per_hour[item.price_first_hour].color || COLOR,
                    address: item.address,
                    price: item.price,
                    weight: LINE_WEIGHT,
                    opacity: 1,
                }
            ).bindPopup(makePopupHtml(item), customOptions);
        }
        groupLayer = L.featureGroup(allLines).addTo(map);
        map.fitBounds(groupLayer.getBounds());
    }
}

var translate = {
    price: 'Стоимость',
    car_capacity: 'Вместимость (кол-во машин)',
    address: 'Точный адрес парковки'
};

var prices = [
    {},
    {
        color: '#2F8C3C',
        shortname: '40 <span class="g-rub">i</span>',
        fullname: '40 руб./час'
    },
    {
        color: '#ed0012',
        shortname: '50 <span class="g-rub">i</span>',
        fullname: '50 руб./час'
    },
    {
        color: '#4b00ed',
        shortname: '50 <span class="g-rub">i</span>',
        fullname: 'Первые 30 минут &mdash; 50 руб. <br>Больше 30 минут с 8.00 до 20.00 &mdash; 150 руб./час  <br> Больше 30 минут с 20.00 до 8.00 &mdash; 80 руб./час'
    },
    {
        color: '#',
        shortname: '60 <span class="g-rub">i</span>',
        fullname: '60 руб./час'
    },
    {
        color: '#0f99b2',
        shortname: '60 <span class="g-rub">i</span>',
        fullname: 'Первый час &mdash; 60 руб./час <br>Больше часа с 8.00 до 20.00 &mdash; 100 руб./час<br>Больше часа с 20.00 до 8.00 &mdash; 60 руб./час '
    },
    {
        color: '#EB2FA6',
        shortname: '80 <span class="g-rub">i</span>',
        fullname: '80 руб./час'
    },
    {
        color: '#ed0012',
        shortname: '100 <span class="g-rub">i</span>',
        fullname: '100 руб./час'
    },
    {
        color: '#ed0012',
        shortname: '200 <span class="g-rub">i</span>',
        fullname: '200 руб./час'
    },
];

/*var prices_per_hour = {
    40: {
        color: '#2F8C3C',
        name: '40 <span class="g-rub">i</span>',
    },
    50: {
        color: '#4b00ed',
        name: '50 <span class="g-rub">i</span>',
    },
    60: {
        color: '#0f99b2',
        name: '60 <span class="g-rub">i</span>',
    },
    80: {
        color: '#EB2FA6',
        name: '80 <span class="g-rub">i</span>',
    },
    100: {
        color: '#FF8D0D',
        name: '100 <span class="g-rub">i</span>',
    },
    200: {
        color: '#ed0012',
        name: '200 <span class="g-rub">i</span>',
    },
};*/
var prices_per_hour = {
    40: {
        color: COLOR,
        name: '40 <span class="g-rub">i</span>',
    },
    50: {
        color: COLOR,
        name: '50 <span class="g-rub">i</span>',
    },
    60: {
        color: COLOR,
        name: '60 <span class="g-rub">i</span>',
    },
    80: {
        color: COLOR,
        name: '80 <span class="g-rub">i</span>',
    },
    100: {
        color: COLOR,
        name: '100 <span class="g-rub">i</span>',
    },
    200: {
        color: COLOR,
        name: '200 <span class="g-rub">i</span>',
    },
};

var default_price = 200;
var chosen_price = default_price;

var maximum_height = 300;

var zoom = 12;

var geojson;
var data_i = [];
var data = []; // Типа улицы
var data_all = []; // Типа выбранные парковки
var allLayers = [];
var allLines = [];
var allStreets = [];

var dif_streets = [];

var groupLayer;

var customOptions =
{
    maxWidth: 500,
    className : 'map-popup',
    closeButton: true,
    closeOnClick: false
};

var map = L.map('map').setView([55.7482200, 37.6155600], zoom);
map.scrollWheelZoom.disable();

L.tileLayer(BG_MAP_URL, {
    attribution: BG_MAP_COPYRIGHT,
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 17,
    ext: 'png'
}).addTo(map);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'streets.json', true);
xhr.onload = function(e) {
    data = {
        type: 'FeatureCollection',
        features: []
    };

    JSON.parse(xhr.responseText).forEach(item => {
        let geometry = {};
        if(item.geometry != null)
             geometry = item.geometry[0];

        if(item.price_first_hour == chosen_price && geometry != {} && geometry.type != "Point" && !~allStreets.indexOf(item.street)) {
            let temp = {
                type: 'Feature',
                geometry: geometry,
                properties: {
                    street: item.street,
                    price: prices[item.price_id].fullname,
                },
                weight: LINE_WEIGHT,
                opacity: 1
            };
            allStreets.push(item.street);
            data.features.push(temp);
        }
    });

    data.features.sort((a,b) => a.properties.street[0].toLowerCase().charCodeAt() - b.properties.street[0].toLowerCase().charCodeAt());

    geojson = L.geoJSON(
        data,
        {
            style: function(feature) {
                return {
                    color: COLOR,
                    price: feature.properties.price,
                    weight: LINE_WEIGHT,
                    opacity: 1
                }
            },
            onEachFeature: function(feature, layer) {
                if (feature.properties) {
                    layer.bindPopup(makePopupHtml(feature.properties), customOptions);
                }
            }
        }
    ).addTo(map);

    // map.fitBounds(geojson.getBounds());
    zoom = map.getZoom();

    geojson.eachLayer(layer => makeFilterElement(true, layer.feature.properties.street, layer));
};
xhr.onerror = function(e) {
    console.error(xhr.status + ': ' + xhr.statusText);
};
xhr.send(null);


var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'parks.json', true);

xhr2.onload = function(e) {
    JSON.parse(xhr2.responseText).forEach(item => {
        if(item.coordinates.length > 0) {
            let uslovie = true;
            item.coordinates.forEach(item => item==null ? uslovie=false: '');
            if(uslovie)
                data_all.push(
                    {
                        address: item.address,
                        street: item.street,
                        price_first_hour: item.price_first_hour,
                        price_id: item.price_id,
                        price: prices[item.price_id].fullname,
                        car_capacity: item.car_capacity,
                        line: item.coordinates,
                        weight: LINE_WEIGHT
                    }
                );
        }
    });

    for(var key in prices_per_hour) {
        let item = prices_per_hour[key];
        if(key !=0 && item != {} && key != 2 && key != 4 && key != 7) {
            var chooser_elem = document.createElement('a');
            chooser_elem.addClass('choosers__item').attr('href', '#').attr('data-price-id', key);
            chooser_elem.innerHTML = item.name;
            if (key == chosen_price)
                chooser_elem.addClass('choosers__item_active');
            $('.choosers').appendChild(chooser_elem);
            chooser_elem.on('click', function (e) {
                if (!this.hasClass('choosers__item_active')) {
                    filter_opener.removeClass('active');
                    $('.filter__item').removeClass('active').css('display', "block");
                    $('.filter__search__input').value = '';
                    $('.filter__point.js-filter-point').innerHTML = 'Все улицы';
                    $('.js-filter-clear').addClass('active');

                    $('.choosers__item.choosers__item_active').removeClass('choosers__item_active');
                    this.addClass('choosers__item_active');
                    chosen_price = this.attr('data-price-id');

                    map.eachLayer(layer => layer instanceof L.Polyline ? map.removeLayer(layer) : '');
                    geojson.eachLayer(layer => geojson.removeLayer(layer));

                    if (this.attr('data-price-id') != default_price) {
                        dif_streets = [];
                        data_all.forEach(item => item.price_first_hour == chosen_price ? !~dif_streets.indexOf(item.street) ? dif_streets.push(item.street) : '' : '');

                        dif_streets.sort();
                        // Подгружаем улицы из прекрасного далека
                        $('.js-filter-item-container').innerHTML = "";
                        dif_streets.forEach(item => {
                            makeFilterElement(false, item);
                        });

                        allLines = [];
                        data_all.forEach(item => {
                            if (item.price_first_hour == chosen_price)
                                allLines[allLines.length] = L.polyline(
                                    item.line,
                                    {
                                        color: prices_per_hour[item.price_first_hour].color || COLOR,
                                        address: item.address,
                                        price: prices[item.price_id].fullname,
                                        weight: LINE_WEIGHT,
                                        opacity: 1
                                    }
                                ).bindPopup(makePopupHtml(item, true), customOptions);
                        });
                        if (allLines.length > 0) {
                            groupLayer = L.featureGroup(allLines).addTo(map);
                            //map.fitBounds(groupLayer.getBounds());
                            map.setView([55.7482200, 37.6155600], 12);
                        }
                    }
                    else {
                        allLayers.forEach(item => {
                            item.setStyle({'color': COLOR, weight: LINE_WEIGHT});
                            geojson.addLayer(item);
                            geojson.addTo(map);
                        });

                        map.setView([55.7482200, 37.6155600], 12);
                        $('.js-filter-item-container').innerHTML = "";
                        geojson.eachLayer(layer => makeFilterElement(false, layer.feature.properties.street, layer));
                    }
                }
                e.preventDefault()
            })
        }
    }
};
xhr2.onerror = function(e) {
    console.error(xhr2.status + ': ' + xhr2.statusText);
};
xhr2.send(null);

var timeOut;
var search = $('.filter__search__input');
search.on('keyup', function(e) {
    clearTimeout(timeOut);
    timeOut = setTimeout(function() {
        var count = 0;
        $('.filter__item').forEach(item => {
            if(!~item.children[0].children[0].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) && !item.hasClass('js-filter-clear') && !item.hasClass('js-filter-item-empty')) {
                item.css('display','none');
            } else {
                if(!item.hasClass('js-filter-item-empty') && !item.hasClass('js-filter-clear')) {
                    count++;
                    item.css('display','block');
                }
            }
        });
        if(count == 0)
            $('.js-filter-item-empty').css('display', "block");
        else
            $('.js-filter-item-empty').css('display', "none");

        var all_height = $('.js-scrollable-content').clientHeight;
        if(all_height > maximum_height) {
            $('.custom-scroll').css('display', "block");
            $('.custom-scroll__trackbar').css('height', Math.round(maximum_height / all_height * maximum_height)+'px');
        } else {
            $('.custom-scroll').css('display', "none");
        }
    }, 300);
});

var filter_opener = $('.filter');
var filter_clear = $('.js-filter-clear');
filter_opener.on('click', function(e) {
    if(e.target != filter_clear && !filter_clear.contains(e.target)) {
        this.addClass('active');
        var all_height = $('.js-scrollable-content').clientHeight;
        if(all_height > maximum_height) {
            $('.custom-scroll').css('display', "block");
            $('.custom-scroll__trackbar').css('height', Math.round(maximum_height / all_height * maximum_height)+'px');
        } else {
            $('.custom-scroll').css('display', "none");
        }
    }
});

$('.js-scrollable').on('scroll', function (e) {
    if(!tooked) {
        var from_top = this.scrollTop;
        var all_height = $('.js-scrollable-content').clientHeight;
        $('.custom-scroll__trackbar').css('top', Math.round(from_top / all_height * maximum_height) + 'px');
    }
});

var tooked = false;
var downY;
document.on('mousedown', function (e) {
    if((e.target != filter_opener && !filter_opener.contains(e.target))) {
        filter_opener.removeClass('active');
    }
    if (e.which != 1) {
        return;
    }
    if(e.target == $('.custom-scroll__trackbar')) {
        tooked = true;
        downY = e.pageY;
    }
});

document.on("mousemove", function(e) {
    if (!tooked) return;

    var from_top;
    var scroller_height = parseInt($('.custom-scroll__trackbar').css('height'));

    if(parseInt($('.custom-scroll__trackbar').css('top')) + e.pageY - downY > 0) {
        if(parseInt($('.custom-scroll__trackbar').css('top')) + e.pageY - downY <= maximum_height - scroller_height) {
            from_top = parseInt($('.custom-scroll__trackbar').css('top')) + (e.pageY - downY);
            downY = e.pageY;
        } else {
            from_top = maximum_height - scroller_height;
        }
    } else {
        from_top = 0;
    }
    $('.custom-scroll__trackbar').css('top', from_top+'px');

    var all_height = $('.js-scrollable-content').clientHeight;

    $('.js-scrollable').scrollTop = Math.round((all_height-maximum_height)*(from_top / (maximum_height - scroller_height)));
    e.preventDefault();
});

document.on("mouseup", function(e) {
    tooked = false;
    downY = 0;
});

filter_clear.on('click', function(e) {
    filter_opener.removeClass('active');
    $('.filter__item').removeClass('active').css('display', "block");
    $('.filter__search__input').value = '';
    $('.filter__point.js-filter-point').innerHTML = 'Все улицы';
    this.addClass('active');
    if(chosen_price == default_price) {
        allLayers.forEach(item => {
            item.setStyle({'color': COLOR, weight: LINE_WEIGHT});
            geojson.addLayer(item);
            geojson.addTo(map);
        });
        map.fitBounds(geojson.getBounds());
    } else {
        allLines = [];
        data_all.forEach(item => {
            if(item.price_first_hour == chosen_price)
                allLines[allLines.length] = L.polyline(
                    item.line,
                    {
                        color: prices_per_hour[item.price_first_hour].color || COLOR,
                        address: item.address,
                        price: item.price,
                        weight: LINE_WEIGHT
                    }
                ).bindPopup(makePopupHtml(item, true), customOptions);
        })
        groupLayer = L.featureGroup(allLines).addTo(map);
        map.fitBounds(groupLayer.getBounds());
    }
});

map.on('zoomend', function(e) {
    if(chosen_price == default_price) {
        if (this.getZoom() > 13 && zoom <= 13) {
            geojson.eachLayer(layer => {
                geojson.removeLayer(layer);
            });
            let thisActive = -1;
            let thisStreet = 0;
            var tempArr = [];
            if (!$('.filter__item.active').hasClass('js-filter-clear')) {
                thisActive = $('.filter__item.active').attr('data-id');
                thisStreet = allLayers[thisActive].feature.properties.street.toLowerCase();
            }

            if (thisActive > -1) {
                tempArr = data_all.filter(a => (a.street.toLowerCase() == thisStreet && a.price_first_hour == chosen_price));
            } else {
                tempArr = data_all.filter(a => (a.price_first_hour == chosen_price));
            }

            allLines = [];
            tempArr.forEach(item => {
                allLines[allLines.length] = L.polyline(
                    item.line,
                    {
                        color: prices_per_hour[item.price_first_hour].color || COLOR,
                        address: item.address,
                        price: prices[item.price_id].fullname,
                        weight: LINE_WEIGHT
                    }
                ).addTo(map).bindPopup(makePopupHtml(item, true), customOptions);
            })
        } else if (this.getZoom() < 14 && zoom >= 14) {
            map.eachLayer(layer => layer instanceof L.Polyline && ~allLines.indexOf(layer) ? map.removeLayer(layer): '');
            let thisActive = -1;
            if (!$('.filter__item.active').hasClass('js-filter-clear'))
                thisActive = $('.filter__item.active').attr('data-id');

            if (thisActive > -1) {
                allLayers[thisActive].setStyle({'color': COLOR, weight: LINE_WEIGHT});
                geojson.addLayer(allLayers[thisActive]);
                geojson.addTo(map);
            } else {
                allLayers.forEach(item => {
                    item.setStyle({'color': COLOR, weight: LINE_WEIGHT});
                    geojson.addLayer(item);
                    geojson.addTo(map);
                })
            }
        }
        zoom = this.getZoom();
    }
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        //  js-filter-scroll
        // document.getElementsByClassName('filter__list__inner')[0].style.visibility = 'hidden';
        document.getElementsByClassName('js-filter-select')[0].className = 'filter filter_title js-filter-select';
    }
};