function counter(x, y, text) {
    this.x = x; // координата х
    this.y = y; // координата у
    this.text = text;
    this.draw = function(globalAlpha) // метод рисующий круг
    {
        ctx.fillStyle = "#999999";
        ctx.strokeStyle = "#999999";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.font = "normal 12px ALSStory";
        ctx.fillText(this.text, x, y);
    };
}

function counterRight(x, y, text) {
    this.x = x; // координата х
    this.y = y; // координата у
    this.text = text;
    this.draw = function(globalAlpha) // метод рисующий круг
    {
        ctx.fillStyle = "#999999";
        ctx.strokeStyle = "#999999";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.font = "normal 12px ALSStory";
        ctx.fillText(this.text, x, y);
    };
}

function helper(x, y, text) {
    this.x = x;
    this.y = y;
    this.color = "#999999";
    this.text = text;
    this.width = text.length*6 + 20;
    this.height = 20;
    this.rX = this.x - this.width/2;
    this.rY = this.y - this.height/2;
    this.draw = function() {
        var temp = new rect(this.rX, this.rY, this.width, this.height).draw('#FFFFFF');
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "normal 12px ALSStory";
        ctx.fillText(this.text, x, y);
    };
}

function line(startX, startY, endX, endY) {
    this.x1 = startX;
    this.x2 = endX;
    this.y1 = startY;
    this.y2 = endY;
    this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = 1; // толщина линии
        ctx.strokeStyle = "#eeeeee"; // цвет линии
        ctx.stroke();
    };
}

function text(text, x, y, color) {
    ctx.fillStyle = "#00F";
    ctx.strokeStyle = "#F00";

    this.x = x; // координата х
    this.y = y; // координата у
    this.color = color;
    this.text = text;

    this.draw = function(globalAlpha) // метод рисующий круг
    {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.font = "normal 16px ALSStory";
        ctx.fillText(this.text, x, y);
    };
}

function textLeft(text, x, y, color) {
    ctx.fillStyle = "#00F";
    ctx.strokeStyle = "#F00";

    this.x = x; // координата х
    this.y = y; // координата у
    this.color = color;
    this.text = text;

    this.draw = function(globalAlpha) // метод рисующий круг
    {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.font = "normal 16px ALSStory";
        ctx.fillText(this.text, x, y);
    };
}

function circle(x, y, r, party) {
    this.x = x; // координата х
    this.y = y; // координата у
    this.r = r; // радиус
    this.color = color[party];
    this.draw = function(stroke) // метод рисующий круг
    {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 1; // "прозрачность"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        if(stroke != undefined) {
            ctx.strokeStyle = '#000000';
            ctx.stroke();
            ctx.beginPath(this.x, this.y, this.r+1, 0, Math.PI, true);
            ctx.stroke();
        }
        ctx.fill();
    };

    this.reDraw = function() {
        var temp = new rect(this.x - width/2, this.y - width/2, width, width).draw('#FFFFFF');
        this.draw();
    }
}

function rect(x, y, width, height, party) {
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.color = color[party];
    this.draw = function(color, globalAlpha) // функция рисует прямоугольник согласно заданным параметрам
    {

        ctx.globalAlpha = globalAlpha;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}

function wrapText(text, marginLeft, marginTop, maxWidth, lineHeight) {
    this.lineHeight = lineHeight;
    this.maxWidth = maxWidth;
    this.x = marginLeft;
    this.y = marginTop;
    this.draw = function() {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";

        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = ctx.measureText(testLine).width;
            if (testWidth > this.maxWidth) {
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";
                ctx.font = "normal 16px ALSStory";
                ctx.fillStyle = "#000000";
                ctx.strokeStyle = '#000000';
                ctx.fillText(line, this.x, this.y);
                line = words[n] + " ";
                this.y += this.lineHeight;
            }
            else {
                line = testLine;
            }
        }
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.font = "normal 16px ALSStory";
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = '#000000';
        ctx.fillText(line, this.x, this.y);
        ctx.stroke();
    }
}

function formatDate(date) {
    date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if(day < 10) {
        day = '0'+String(day);
    }
    if(month < 10) {
        month = '0'+String(month);
    }
    return day+'.'+month+'.'+year;
}

function getAge(age) {
    if(age % 10 == 1) {
        return age + ' год';
    } else if (age % 10 > 1 && age % 10 < 5) {
        return age + ' года';
    } else {
        return age + ' лет';
    }
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function imgError(image) {
    $(image).hide();
    return true;
}
