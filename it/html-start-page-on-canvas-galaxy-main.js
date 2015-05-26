"use strict";

//-- Глобальные переменные
//--

var APELSERG = {};

APELSERG.MAIN = {};
APELSERG.MODEL = {};
APELSERG.MODEL.DATA = {};
APELSERG.CANVA = {};
APELSERG.CONFIG = {};
APELSERG.CONFIG.SET = {};
APELSERG.CONFIG.PROC = {};

APELSERG.CONFIG.SET.PicSrc = ["galaxy.jpg"]; //-- заставка канвы
APELSERG.CONFIG.SET.PicWidth = 0; //-- ширина заставки (устанавливается при старте)
APELSERG.CONFIG.SET.PicHeight = 0; //-- высота заставки (устанавливается при старте)
APELSERG.CONFIG.SET.PicBorder = 0; //-- ширина рамки

APELSERG.CONFIG.SET.BaseLinkX = 10; //-- базовая координата X строки ссылок
APELSERG.CONFIG.SET.BaseLinkY = 30; //-- базовая координата Y строки ссылок

APELSERG.CONFIG.SET.CntHandle = 3; //-- сколько циклов пропустить при перерисовке канвы (статика, динамика в APELSERG.CONFIG.PROC.CntHandle )
APELSERG.CONFIG.SET.CntSelect = 3; //-- сколько циклов показывать красный цвет (статика, динамика в объекте)
APELSERG.CONFIG.SET.CntDown = 15;

APELSERG.CONFIG.SET.StarsNum = 500; //-- число
APELSERG.CONFIG.SET.StarsSize = 5; //-- максимальный размер
APELSERG.CONFIG.SET.StarsMove = 0; //-- максимальная скорость

APELSERG.CONFIG.SET.ContentMove = 3; //-- скорость движения контента
APELSERG.CONFIG.SET.ContentFontSize = 25; //-- максимальный размер контента

APELSERG.CONFIG.PROC.CanvaID;
APELSERG.CONFIG.PROC.Ctx;
APELSERG.CONFIG.PROC.Img;

APELSERG.CONFIG.PROC.CntHandle = 0;  //-- сколько циклов пропустить при перерисовке канвы (динамика)
APELSERG.CONFIG.PROC.CntDown = APELSERG.CONFIG.SET.CntDown;
APELSERG.CONFIG.PROC.ContentSelector = 0; //-- счётчик выбора контента (должно быть 0)
APELSERG.CONFIG.PROC.TimerID = 0;

APELSERG.CONFIG.PROC.MouseClickX = -999;
APELSERG.CONFIG.PROC.MouseClickY = -999;

APELSERG.CONFIG.PROC.MouseMoveX = -999;
APELSERG.CONFIG.PROC.MouseMoveY = -999;

APELSERG.MODEL.DATA.Stars = [];
APELSERG.MODEL.DATA.Links = [];
APELSERG.MODEL.DATA.Content = [];

//===
// старт
//===
APELSERG.MAIN.OnLoad = function () {

    //-- канва
    //--
    APELSERG.CONFIG.PROC.CanvaID = document.getElementById('APELSERG_Canvas');
    APELSERG.CONFIG.PROC.Ctx = APELSERG.CONFIG.PROC.CanvaID.getContext('2d');

    var picSelector = Math.round(Math.random() * 100) % APELSERG.CONFIG.SET.PicSrc.length;

    APELSERG.CONFIG.PROC.Img = new Image();
    APELSERG.CONFIG.PROC.Img.src = APELSERG.CONFIG.SET.PicSrc[picSelector];

    APELSERG.CONFIG.PROC.Img.onload = function () {

        APELSERG.CONFIG.SET.PicWidth = APELSERG.CONFIG.PROC.Img.width;
        APELSERG.CONFIG.SET.PicHeight = APELSERG.CONFIG.PROC.Img.height;

        APELSERG.MAIN.CanvasSize();

        APELSERG.MODEL.DATA.Links = APELSERG.MODEL.MakeLinks();
        APELSERG.MODEL.DATA.Content = APELSERG.MODEL.MakeContent();

        APELSERG.MODEL.DATA.Stars = APELSERG.MODEL.MakeStars(APELSERG.CONFIG.SET.StarsNum);

        APELSERG.MAIN.Timer();
        APELSERG.MAIN.Animation(); //-- старт рабочего цикла

        //===
        // Клик мыши
        //===
        APELSERG.CONFIG.PROC.CanvaID.addEventListener('click', function (event) {

            APELSERG.CONFIG.PROC.MouseClickX = event.clientX - APELSERG.CONFIG.PROC.CanvaID.offsetLeft - APELSERG.CONFIG.SET.PicBorder;
            APELSERG.CONFIG.PROC.MouseClickY = event.clientY - APELSERG.CONFIG.PROC.CanvaID.offsetTop - APELSERG.CONFIG.SET.PicBorder;
        });

        //===
        // Движения мыши
        //===
        APELSERG.CONFIG.PROC.CanvaID.addEventListener('mousemove', function (event) {

            APELSERG.CONFIG.PROC.MouseMoveX = event.clientX - APELSERG.CONFIG.PROC.CanvaID.offsetLeft - APELSERG.CONFIG.SET.PicBorder;
            APELSERG.CONFIG.PROC.MouseMoveY = event.clientY - APELSERG.CONFIG.PROC.CanvaID.offsetTop - APELSERG.CONFIG.SET.PicBorder;
        });

    }
}

//===
// Настройка канвы под размер экрана
//===
APELSERG.MAIN.CanvasSize = function () {

    var xX = window.innerWidth - 25;
    var yY = window.innerHeight - 25;

    if (APELSERG.CONFIG.SET.PicWidth < xX && APELSERG.CONFIG.PROC.CanvaID.width != APELSERG.CONFIG.SET.PicWidth) {
        APELSERG.CONFIG.PROC.CanvaID.width = APELSERG.CONFIG.SET.PicWidth;
    }
    else if (APELSERG.CONFIG.SET.PicWidth > xX && APELSERG.CONFIG.PROC.CanvaID.width != xX) {
        APELSERG.CONFIG.PROC.CanvaID.width = xX;
    }

    if (APELSERG.CONFIG.SET.PicHeight < yY && APELSERG.CONFIG.PROC.CanvaID.height != APELSERG.CONFIG.SET.PicHeight) {
        APELSERG.CONFIG.PROC.CanvaID.height = APELSERG.CONFIG.SET.PicHeight;
    }
    else if (APELSERG.CONFIG.SET.PicHeight > yY && APELSERG.CONFIG.PROC.CanvaID.height != yY) {
        APELSERG.CONFIG.PROC.CanvaID.height = yY;
    }
}

//===
// Анимация
//===
APELSERG.MAIN.Animation = function () {

    (APELSERG.CONFIG.PROC.CntHandle > 0) ? (APELSERG.CONFIG.PROC.CntHandle--) : (APELSERG.CONFIG.PROC.CntHandle = APELSERG.CONFIG.SET.CntHandle);

    if (APELSERG.CONFIG.PROC.CntHandle == 0) APELSERG.CANVA.Rewrite();
    if (APELSERG.CONFIG.PROC.CntHandle == 1) APELSERG.MODEL.UpdateStars();
    if (APELSERG.CONFIG.PROC.CntHandle == 1) APELSERG.MODEL.UpdateContent();
    if (APELSERG.CONFIG.PROC.CntHandle == 1) APELSERG.MODEL.UpdateButtons();
    if (APELSERG.CONFIG.PROC.CntHandle == 1) APELSERG.MAIN.CanvasSize();

    //window.setTimeout( function  () {
    //   APELSERG.MAIN.Animation();
    //},1000/30);

    window.requestAnimationFrame(function () {
       APELSERG.MAIN.Animation();
    });
}

//===
// Таймер
//===
APELSERG.MAIN.Timer = function () {
    APELSERG.CONFIG.PROC.TimerID = setInterval(function(){
              if(APELSERG.CONFIG.PROC.CntDown >= -30) {

                     APELSERG.CONFIG.PROC.CntDown--;
              }
              else {
                clearInterval(APELSERG.CONFIG.PROC.TimerID);
              }
          }, 1000);
}
