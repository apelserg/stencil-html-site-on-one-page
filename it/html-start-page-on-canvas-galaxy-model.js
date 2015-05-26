"use strict";

//===
// Ссылка
//===
APELSERG.MODEL.Link = function (linkUrl, linkName, linkX, linkY, lengthX, lengthY, linkColor) {
    this.Url = linkUrl;
    this.Name = linkName;
    this.X = linkX;
    this.Y = linkY;
    this.LengthX = lengthX;
    this.LengthY = lengthY;
    this.Color = linkColor;
    this.SelectColor = 'orange';
    this.SelectCnt = 0;
    this.SelectName = false;
    this.ShowBorder = false;
    this.FontHeight = 20;
}

//===
// Массив ссылок
//===
APELSERG.MODEL.MakeLinks = function () {

    var baseX = APELSERG.CONFIG.SET.BaseLinkX;
    var baseY = APELSERG.CONFIG.SET.BaseLinkY + 50;

    var links = [];

    var linksList = [
        { name: "GitHub - Шаблонетка Start page Galaxy", url: "https://github.com/apelserg/stencil-html-start-page-on-canvas-galaxy" },
        { name: "NASA", url: "http://www.nasa.gov/" }
    ];

    for (var n = 0 in linksList) {

        var color = "white";
        var link = new APELSERG.MODEL.Link(linksList[n].url, linksList[n].name, baseX, baseY + 30 * n, linksList[n].name.length * 10 + 30, 30, color);

        links.push(link);
    }
    return links;
}


//===
// Строка контент
//===
APELSERG.MODEL.ContentLine = function (text, textX, textY, textColor) {
    this.Text = text;
    this.X = textX;
    this.Y = textY;
    this.Color = textColor;
    this.FontHeight = 0;
}

//===
// Контент
//===
APELSERG.MODEL.MakeContent = function () {

    var color = "white";
    var pointX = 0;
    var pointY = APELSERG.CONFIG.PROC.CanvaID.height/2 - 50; //APELSERG.CONFIG.PROC.CanvaID.height;
    var addY = 50;
    var Cnt = 0;
    var contentSelector = Math.round(Math.random() * 100) % 9;

    var content = [];

    switch (contentSelector) {
        case 1:
            content.push(new APELSERG.MODEL.ContentLine("Будь бдителен", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Пока ты разглядываешь всякую белиберду", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Проходит жизнь", pointX, pointY + addY * Cnt++, color));
            break;
        case 2:
            content.push(new APELSERG.MODEL.ContentLine("Пока ты бездарно пялишься в экран монитора", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Прислушайся к себе и почувствуй", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Как стремительно одна за другой", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Распрямляются извилины в твоём мозгу", pointX, pointY + addY * Cnt++, color));
            break;
        case 3:
            content.push(new APELSERG.MODEL.ContentLine("Пока ты бездарно пялился в экран монитора", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Для кого-то наступило", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Будущее", pointX, pointY + addY * Cnt++, color));
            break;
        case 4:
            content.push(new APELSERG.MODEL.ContentLine("Помни", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Твой обратный отсчёт не останавливается", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Никогда", pointX, pointY + addY * Cnt++, color));
            break;
        case 5:
            content.push(new APELSERG.MODEL.ContentLine("Самое дорогое на свете это время", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Самое дорогое на свете это глупость", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Помни", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Пока ты выбираешь что дороже", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Стремительно приумножается одно", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("И безвозвратно теряется другое", pointX, pointY + addY * Cnt++, color));
            break;
        case 6:
            content.push(new APELSERG.MODEL.ContentLine("Останови свой обратный отсчёт", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Займись делом", pointX, pointY + addY * Cnt++, color));
            break;
        case 7:
            content.push(new APELSERG.MODEL.ContentLine("Извилины в мозгу - ограниченный ресурс", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Не дай им распрямляться", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Глазея на всякую галиматью", pointX, pointY + addY * Cnt++, color));
            break;
        case 8:
            content.push(new APELSERG.MODEL.ContentLine("Успей", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Хотя бы что-нибудь", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Пока ещё не закончился", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Твой", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Обратный отсчёт", pointX, pointY + addY * Cnt++, color));
            break;
        case 0:
        default:
            content.push(new APELSERG.MODEL.ContentLine("Слишком долго рассматривая картинки", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Ты теряешь самое доргорое", pointX, pointY + addY * Cnt++, color));
            content.push(new APELSERG.MODEL.ContentLine("Время", pointX, pointY + addY * Cnt++, color));
    }
    return content;
}

//===
// Звёзды
//===
APELSERG.MODEL.Flake = function (flakeX, flakeY, Starsize, flakeColor) {
    this.BaseX = flakeX;    
    this.X = flakeX;
    this.Y = flakeY;
    this.Size = Starsize;
    this.Color = flakeColor;
}

//===
// Массив звёзд
//===
APELSERG.MODEL.MakeStars = function (flakeNum) {

    var Stars = [];
    var color = "white";

    for (var n = 0; n < flakeNum; n++) {

        var x = Math.round(Math.random() * APELSERG.CONFIG.SET.PicWidth);
        var y = Math.round(Math.random() * APELSERG.CONFIG.SET.PicHeight);
        var s = n % APELSERG.CONFIG.SET.StarsSize;

        var flake = new APELSERG.MODEL.Flake(x, y, s, color);

        Stars.push(flake);
    }
    return Stars;
}

//===
// Проверка клика на кнопке
//===
APELSERG.MODEL.CheckClickFrame = function (frame) {

    if ((APELSERG.CONFIG.PROC.MouseClickX > frame.X)
        && (APELSERG.CONFIG.PROC.MouseClickX < frame.X + frame.LengthX)
        && (APELSERG.CONFIG.PROC.MouseClickY > frame.Y)
        && (APELSERG.CONFIG.PROC.MouseClickY < frame.Y + frame.LengthY)){

        return true;
    }
    return false;
}

//===
// Проверка мыши над кнопкой
//===
APELSERG.MODEL.CheckMoveFrame = function (frame) {

    if ((APELSERG.CONFIG.PROC.MouseMoveX > frame.X)
        && (APELSERG.CONFIG.PROC.MouseMoveX < frame.X + frame.LengthX)
        && (APELSERG.CONFIG.PROC.MouseMoveY > frame.Y)
        && (APELSERG.CONFIG.PROC.MouseMoveY < frame.Y + frame.LengthY)) {

        return true;
    }
    return false;
}

//===
// Нажатие кнопок
//===
APELSERG.MODEL.UpdateButtons = function () {

    for (var n = 0 in APELSERG.MODEL.DATA.Links) {

        var link = APELSERG.MODEL.DATA.Links[n];

        link.SelectName = APELSERG.MODEL.CheckMoveFrame(link);
        if (link.SelectCnt > 0) link.SelectCnt--;

//console.log("111");

        if (APELSERG.MODEL.CheckClickFrame(link)) {

//console.log("222");

            link.SelectCnt = APELSERG.CONFIG.SET.CntSelect;

            window.open(link.Url, "_blank");
        }
    }

    APELSERG.CONFIG.PROC.MouseClickX = -999;
    APELSERG.CONFIG.PROC.MouseClickY = -999;

    //APELSERG.CONFIG.PROC.MouseMoveX = -999;
    //APELSERG.CONFIG.PROC.MouseMoveY = -999;

}
//===
// Переместить звёзды
//===
APELSERG.MODEL.UpdateStars = function () {

    for (var n = 0 in APELSERG.MODEL.DATA.Stars) {

        var flake = APELSERG.MODEL.DATA.Stars[n];

        var dir = 1;
        if (Math.round(Math.random() * 100) % 2 == 0) dir = -1;

        flake.Size += dir;
        if (flake.Size > 5) flake.Size = 5;
        if (flake.Size < 1) flake.Size = 1;
    }
}

//===
//  Переместить контент
//===
APELSERG.MODEL.UpdateContent = function () {

    for (var n = 0; APELSERG.MODEL.DATA.Content.length > n; n++) {

        var contentLine = APELSERG.MODEL.DATA.Content[n];

        if (APELSERG.CONFIG.PROC.CntDown < 0) {

            if(contentLine.FontHeight == 50) {
                 APELSERG.CONFIG.PROC.CntDownDir = -1;
            }

            if (contentLine.FontHeight < 50 && APELSERG.CONFIG.PROC.CntDown > -10 ) {
                contentLine.FontHeight++;
            }
            else if (contentLine.FontHeight > 0 && APELSERG.CONFIG.PROC.CntDown < -20) {
                contentLine.FontHeight--;
            }
        }
    }
}
