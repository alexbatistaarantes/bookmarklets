javascript: (function() {
    /*==VARIAVEIS==*/
    
    /* o caractere correspondente ao apertar shift+numero */
    var number_char_map = {
        ')': 0,
        '!': 1,
        '@': 2,
        '#': 3,
        '$': 4,
        '%': 5,
        'Dead': 6,
        '&': 7,
        '*': 8,
        '(': 9
    };

    /*Variaveisdotema*/
    
    var backgroundColor = "black"; /*cor da fonte do texto do painel de controle*/
    var fontColor = "white"; /*cor de fundo das divisórias do painel de controle (ex: GLYPHSETS, SELECTLAYER)*/
    var headerDivisionBgColor = "white"; /*cor da fonte das divisórias*/
    var headerDivisionFontColor = "black"; /*cor da borda do glyph selecionado atualmente (oque aparece no canto esquerdo inferior)*/
    var vectorBorderColor = "red"; /* tamanho da borda (em pixel)*/
    var vectorBorderSize = '1'; /* cor de fundo do menu de seleção de glyphs*/
    var glyphContBgColor = "#6f6f6f"; /* cores de fundo e fonte dos inputs, selects e buttons do painel */
    var fieldsBgColor = "#6f6f6f";
    var fieldsFontColor = "white"; /* cor de fundo e fonte dos spans do painel de controle */
    var spansBgColor = "white";
    var spansFontColor = "black";
    /* == # == */
    
    /* == TEMA == */
    
    /* Números das linhas e colunas (no canvas)  */
    /* Num funciona não sei pq var
    sheet = window.document.styleSheets[0]; sheet.insertRule(".colNum { color: white; } .rowNum { color: white; }", sheet.cssRules.length );
    */
   
    /* Glyph selecionado (no canto esquerdo em baixo) */
    document.getElementsByClassName('vector')[0].style.border = vectorBorderSize + "px solid " + vectorBorderColor;
    document.getElementsByClassName('canvas_container')[0].style.backgroundColor = backgroundColor;
    /* O painel de controle */
    var controlsContainer = document.getElementsByClassName("controls_container")[0];
    controlsContainer.style.backgroundColor = backgroundColor;
    controlsContainer.style.color = fontColor;
    /* Divisórias no painel de controle */
    var headerDivision = controlsContainer.getElementsByTagName("h3");
    for (var i = 0; i < headerDivision.length; i++) {
        headerDivision[i].style.backgroundColor = headerDivisionBgColor;
        headerDivision[i].style.color = headerDivisionFontColor;
    };
    /* Glyphs mostrados no painel de controle (Ex: map keys, glyphs de cada layer da celula selecionada) */
    var vectors = controlsContainer.getElementsByClassName("vector");
    for (var i = 0; i < vectors.length; i++) {
        vectors[i].getElementsByTagName("svg")[0].style.backgroundColor = "white";
        vectors[i].getElementsByTagName("svg")[0].style.border = vectorBorderSize + "px solid " + vectorBorderColor;
    };
    /* Menu de seleção de glyphs */
    document.getElementById("glyphcont").style.backgroundColor = glyphContBgColor; /* Inputs do painel de controle */
    var inputs = controlsContainer.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = fieldsBgColor;
        inputs[i].style.color = fieldsFontColor;
    };
    /* Buttons do painel de controle */
    var buttons = controlsContainer.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = fieldsBgColor;
        buttons[i].style.color = fieldsFontColor;
    };
    /* Selects do painel de controle */
    var selects = controlsContainer.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        selects[i].style.backgroundColor = fieldsBgColor;
        selects[i].style.color = fieldsFontColor;
    };
    /* Spans do painel de controle */
    var spans = controlsContainer.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = spansBgColor;
        spans[i].style.color = spansFontColor;
    };
    /* == # == */
    
    /* == SHORTCUTS == */
    window.glyphSelectNumber = 1;
    document.onkeydown = function(e) {
        /* MUDAR TAMANHO GLYPH */
        if (e.key == 't') {
            /* t */
            document.getElementsByTagName("button")[22].click(); /* diminuir glyph */
        } else if (e.key == 'y') {
            /* y */
            document.getElementsByTagName("button")[23].click(); /* aumentar glyph */ /* MOVIMENTAR A TELA */
        } else if (!e.shiftKey) {
            if (e.key == 'j') {
                /* j */
                document.getElementsByClassName("move_x")[0].getElementsByTagName('button')[0].click(); /* esquerda */
            } else if (e.key == 'k') {
                /* k */
                if (e.altKey) {
                    /* + alt */
                    document.getElementsByClassName("move_y")[0].getElementsByTagName('button')[0].click(); /* cima */
                } else {
                    document.getElementsByClassName("move_y")[1].getElementsByTagName('button')[0].click(); /* baixo */
                };
            } else if (e.key == 'l') {
                /* l */
                document.getElementsByClassName("move_x")[0].getElementsByTagName('button')[2].click(); /* direita */
            };
        /* PASSAR PAGINAS DE GLYPHS */
        /* shift + < */
        } else if (e.shiftKey && e.key == '<') {
            document.getElementsByTagName('button')[16].click(); /* anterior */
        /* shift + > */
        } else if (e.shiftKey && e.key == '>') {
            document.getElementsByTagName('button')[17].click(); /* proximo */ /* SELECIONAR GLYPH */
        /* shift + {numero} */
        } else if (e.shiftKey && e.key in number_char_map){
            glyphSelectNumber = number_char_map[e.key] + (glyphSelectNumber * 10);
            glyphSelectNumber = glyphSelectNumber > 100 ? glyphSelectNumber%100 : glyphSelectNumber;
            if (glyphSelectNumber > 0) {
                document.getElementById('glyphcont').getElementsByTagName('img')[glyphSelectNumber - 1].click();
            };
        };
    };
    /* == # == */
}())
