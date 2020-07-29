// VIDEO : https://youtu.be/62IGKtyD8OY
// COLABEDUC : http://www.colabeduc.org/descricao/show/144
// GITHUB : 

var tela = 1;
var largura = 300; 
var altura = 80;
var xTitulo = 80;
var yTitulo = 40;
var larguraT = 550;
var alturaT = 50;
var xTitulo2 = 83;
var yTitulo2 = 43;
var larguraT2 = 544;
var alturaT2 = 44;
var xTitulo3 = 86;
var yTitulo3 = 46;
var larguraT3 = 537;
var alturaT3 = 37;
var xMenu = 200;
var yMenu1 = 120;
var yMenu2 = 220;
var yMenu3 = 320;
var r = 0;
var g = 0;
var b = 0;
var acertos = 0;

// TELA 1 = MENU
// TELA 2 = OBJETIVO DO JOGO
// TELA 3 = TUTORIAL
// TELA 4 = CRÉDITOS 
// TELA 5 = CRÉDITOS PROGRAMADOR
// TELA 6 = CRÉDITOS DOCENTE
// TELA 7 = ESCOLHA DE TÓPICO
// TELA 8 = EXPLICAÇÃO POTENCIAÇÃO 
// TELA 9 = EXPLICAÇÃO NOTAÇÃO CIENTÍFICA 
// TELA 10 = POTENCIAÇÃO {FASE 1}
// TELA 11 = POTENCIAÇÃO {REVISÃO}
// TELA 12 = NOTAÇÃO CIENTÍFICA {FASE 1}
// TELA 13 = NOTAÇÃO CIENTÍFICA {REVISÃO}
// TELA 14 = POTENCIAÇÃO {FASE 2}
// TELA 15 = NOTAÇÃO CIENTÍFICA {FASE 2}
// TELA 16 = POTENCIAÇÃO {FASE 3}
// TELA 17 = NOTAÇÃO CIENTÍFICA {FASE 3}
// TELA 18 = POTENCIAÇÃO {REVISÃO 2}
// TELA 19 = NOTAÇÃO CIENTÍFICA {REVISÃO}
// TELA 20 = TELA FINAL 

function preload() {
  img = loadImage('Background-4.png');
  up = loadImage('Background-2.png');
  retrato = loadImage('LRM_EXPORT_20200105_010519.jpg');
  retrato2 = loadImage('IMG-20200720-WA0024.jpg');
  potenciacao = loadImage('potenciação 2.jpg');
  potenciacao2 = loadImage('potenciação 1.webp');
  potenciacao3 = loadImage('potenciação 3.png');
  potenciacao4 = loadImage('potenciação4.jpg');
  potenciacao5 = loadImage('potenciação5.JPG');
  notacao1 = loadImage('notacao-cientifica-exercicios.jpg');
  notacaoexp1 = loadImage('notacao2.png');
  notacaoexp2 = loadImage('notacao1.png');
  notacao3 = loadImage('notacao3.png');
  notacao4 = loadImage('notacao4.png');
  notacao5 = loadImage('notacao5.png');
}

function setup() {
  createCanvas(700, 480);
}

function draw() {
  
  textStyle(NORMAL);
  
  // TELA 1 = MENU DO JOGO
  
  if(tela == 1){
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    imageMode(CENTER);
    image(img, 350, 240, 665, 450);
    
    // MENU INICIAL - 3 OPÇÕES
    // PRIMEIRA OPÇÃO - JOGAR
    // SEGUNDA OPÇÃO - TUTORIAL
    // TERCEIRA OPÇÃO - CRÉDITOS
    
  textAlign(CENTER);
    
    // NOME DO JOGO
    
    stroke(255, 0, 0);
    fill(255, 0, 0);
    rect(xTitulo, yTitulo, larguraT, alturaT);
    
    stroke(255,140,0);
    fill(255,140,0);
    rect(xTitulo2, yTitulo2, larguraT2, alturaT2);
    
    stroke(127,255,212);
    fill(127,255,212);
    rect(xTitulo3, yTitulo3, larguraT3, alturaT3);
    
    textSize(27);
    textFont('Cooper Black');
    
    fill(0);
    stroke(0,255,255);
    text("Potencializador  de  Aprendizagem", 355, 75);
    // PRIMEIRA OPÇÃO - JOGAR
    
    stroke(255);
    fill(54,54,54);
    rect(xMenu, yMenu1, largura, altura, 20);
    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1+altura){
    stroke(255);
    fill(15);
    rect(xMenu, yMenu1, largura, altura, 20);
      if (mouseIsPressed) {
        tela = 2}
    }
      
    textFont('Impact');
    textSize(60);
    
    fill(255);
    stroke(255, 0 ,0);
    text("Jogar", 350, 180);
    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1+altura){
      fill(245, 0, 0)
      stroke(255);
      text("Jogar", 350, 180);
    }
    
    // SEGUNDA OPÇÃO - TUTORIAL
    
    stroke(255);
    fill(54,54,54);
    rect(xMenu, yMenu2, largura, altura, 20);
    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2+altura){
    stroke(255);
    fill(15);
    rect(xMenu, yMenu2, largura, altura, 20);
      if (mouseIsPressed) {
        tela = 3}
    }
      
    fill(255);
    stroke(0,255,255);
    text("Tutorial", 350, 285);
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2+altura){
      fill(0, 255, 0);
      stroke(255);
      text("Tutorial", 350, 285);
    }
    
    // TERCEIRA OPÇÃO - CRÉDITOS
    
    stroke(255);
    fill(54,54,54);
    rect(xMenu, yMenu3, largura, altura, 20);
    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3+altura){
    stroke(255);
    fill(15);
    rect(xMenu, yMenu3, largura, altura, 20);
      
      if (mouseIsPressed) {
        tela = 4}
    }
    fill(255);
    stroke(255,255,0);
    text("Créditos", 350, 385);
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3+altura){
      fill(0, 0, 255);
      stroke(255);
      text("Créditos", 350, 385);
    }
  }
  
  // TELA 2 = JOGO EM SI
  
 if(tela == 2){
   background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
   textFont('Arial');
   
   stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
   
   stroke(0,0,205);
    fill(54,54,54);
   rect(30, 50, 640, 250, 20);
   
   textSize(22);
   
   fill(255);
   stroke(255);
   text("Este jogo possui a finalidade de ensinar os assuntos de poten" + "\n" + "ciação e notação científica, através de um metódo intuitívo e di" + "\n" + "dático. A partir de algumas fases que trarão exemplos e ques" + "\n" + "tões para exemplificação dos assuntos, o aluno poderá desen" + "\n" + "volver e evoluir suas habilidades e conhecimentos a cerca do ", 350, 90);
   text("assuntos citados.", 130, 228);
   
   if(mouseX > 550 && mouseX < (550+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(550, 390, 100, 50, 15);if(mouseIsPressed){
     tela = 7
   }
 }
   
   if(mouseX > 300 && mouseX < (300+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(300, 390, 100, 50, 15);if(mouseIsPressed){
     tela = 3}
 }
   
   if(mouseX > 60 && mouseX < (60+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(50, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 1}
   }
   
   textSize(26);
   
   fill(255);
   noStroke();
   text("Start", 600, 425);
   
   fill(255);
   noStroke();
   text("Tutorial", 350, 425);
   
   fill(255);
   noStroke();
   text("Voltar", 100, 425);
   
 }
  
 
  // TELA 3 = TUTORIAL DO JOGO
  
 if(tela == 3){
   
   textStyle(NORMAL);
  textSize(20);
   
  background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
  
   stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
  
   if(mouseX > 530 && mouseX < (530+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(530, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 1}
   }
   
   textSize(26);
   textFont('Arial');
  
   fill(255);
   noStroke();
   text("Voltar", 580, 425);
   
   fill(255)
   stroke(255, 0, 0);
   text("Descrição:", 80, 50);
   
   textSize(20);
   
   fill(255);
   noStroke();
   text("O jogo será utilizado para atender as necessidades de aprendizado de" + "\n" + "alunos nos assuntos de potenciação e notação científica, importantes" +"\n"+ "na sua formação escolar. Deverá apresentar funcionalidade didática e" + "\n" + "simples, facilitando o processo de interação e adequação ao jogo.", 350,100);
   
   textSize(26);
   textFont('Arial');
   
   fill(255);
   stroke(255, 0, 0);
   text("Habilidade:", 90, 230);
   
   textSize(20);
   
   fill(255);
   noStroke();
   text("(EF08MA01) Efetuar cálculos com potências de expoentes inteiros e" + "\n" + "aplicar esse conhecimento na representação de números em nota" + "\n" + "ção científica", 350, 270);
 }
  
  
  // TELA 4 = CRÉDITOS DO JOGO
  
 if(tela == 4){
   
  textStyle(NORMAL);
  textSize(20);
   
  background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
   stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
   
   imageMode(CENTER);
   image(retrato, 190, 190, 250, 250);
   image(retrato2, 510, 190, 250, 250);

   stroke(255, 215, 0);
   fill(169,169,169);
   rect(60, 325, 260, 40);
   
   stroke(255, 215, 0);
   fill(169,169,169);
   rect(380, 325, 260,40);
   
   if(mouseX > 60 && mouseX < (60+260) && mouseY > 325 && mouseY < (325+40)){
   stroke(255, 215, 0);
   fill(64,224,208);
   rect(60, 325, 260, 40); if(mouseIsPressed)
   {tela = 5
     }
    }
   
   if(mouseX > 380 && mouseX < (380+260) && mouseY > 325 && mouseY < (325+40)){
   stroke(255, 215, 0);
   fill(64,224,208);
   rect(380, 325, 260,40);if(mouseIsPressed){
     tela = 6
   }
   }
   
   fill(0);
   stroke(0);
   text("Programador: Artur Rochel", 190, 350);
   
   fill(0);
   stroke(0);
   text("Docente: João Vittor", 510, 350);
     
   if(mouseX > 530 && mouseX < (530+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(530, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 1}
 }
  
   textSize(26);
   textFont('Arial');
   
   fill(255);
   noStroke();
   text("Voltar", 580, 425);
 }
  
  // TELA 5 = CRÉDITOS PROGRAMADOR
  
if(tela == 5){
  background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
  
  stroke(0);
  fill(0);
  rect(10, 10, 680, 460);
  
  stroke(28,28,28);
  fill(28,28,28);
  rect(15, 15, 670,450);
  
  textSize(17);
  textFont('Arial');
  
  fill(224,255,255);
  stroke(255);
  text("Artur Rochel é aluno do curso de bacharelado em Ciência e Tecnologia, ingre" + "\n" + "ssante do segundo semestre de 2019 e discente da matéria Lógica de Progra" + "\n" + "mação do semestre remoto 2020.5. ",350, 60);
  
  if(mouseX > 50 && mouseX < (50+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(50, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 4}
   }
  
  if(mouseX > 300 && mouseX < (300+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(300, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 1}
   }
  
  if(mouseX > 530 && mouseX < (530+120) && mouseY > 390 & mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(530, 390, 120, 50, 15);if(mouseIsPressed){
     tela = 6
   }
}
  
   textSize(26);
  
   fill(255);
   noStroke();
   text("Docente", 590, 425);
  
   fill(255);
   noStroke();
   text("Menu", 350, 425);
  
   fill(255);
   noStroke();
   text("Voltar", 100, 425);
 }
  
  // TELA 6 = CRÉDITOS DOCENTE
  
  if( tela == 6){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
  stroke(0);
  fill(0);
  rect(10, 10, 680, 460);
   
  stroke(28,28,28);
  fill(28,28,28);
  rect(15, 15, 670,450);
   
  if(mouseX > 500 && mouseX < (500+180) && mouseY > 390 & mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(500, 390, 180, 50, 15);if(mouseIsPressed){
     tela = 5
   }
}
    if(mouseX > 50 && mouseX < (50+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(50, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 4}
   }
    
    if(mouseX > 300 && mouseX < (300+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(300, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 1}
   }
    
    textSize(26);
  
   fill(255);
   noStroke();
   text("Menu", 350, 425);
    
   fill(255);
   noStroke();
   text("Programador", 590, 425);
    
   fill(255);
   noStroke();
   text("Voltar", 100, 425);
    
  textSize(17);
  textFont('Arial');
    
  fill(224,255,255);
  stroke(255);
  text("Discente da UFRN no curso de Bacharel em Tecnologia da Informação, tendo" + "\n" + "iniciado no semestre 2020.1.",350, 60);
    
  }
  
   // TELA 7 = ESCOLHA DE TÓPICO
  
 if(tela == 7){
  background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
   stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
   
   stroke(105,105,105);
   fill(105,105,105);
   rect(80, 70, 540, 80, 15);
   
   stroke(255,165,0);
   fill(255,165,0);
   rect(85, 75, 530, 70, 15);
   
   stroke(255);
   fill(255,0,0);
   rect(100, 300, 210,60, 15);
   
   stroke(255);
   fill(255,0,0);
   rect(400, 300, 210,60, 15);
   
   stroke(0);
   fill(175,238,238);
   rect(105, 305, 200, 50, 15);
   
   stroke(0);
   fill(175,238,238);
   rect(405, 305, 200, 50, 15);
   
   if(mouseX > 100 && mouseX < (100+210) && mouseY > 300 && mouseY < (300+60)){
   stroke(0);
   fill(0,206,209);
   rect(105, 305, 200, 50, 15);
     if(mouseIsPressed){
       tela = 8
     }
   }
   
   if(mouseX > 400 && mouseX < (400+210) && mouseY > 300 && mouseY < (300+60)){
   stroke(0);
   fill(0,206,209);
   rect(405, 305, 200, 50, 15);
     if(mouseIsPressed){
       tela = 9
     }
   }
   
   if(mouseX > 60 && mouseX < (60+100) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(50, 390, 100, 50, 15);
     if(mouseIsPressed){
       tela = 2}
   }
   
   textSize(22);
   textFont('Arial');
   
   fill(0);
   stroke(0);
   text("Pontenciação", 205, 337);
   
   fill(0);
   stroke(0);
   text("Notação Científica", 505, 337);
   
   textSize(24);
   textFont('arial black');
   
   fill(0);
   stroke(0);
   text("Escolha o assunto que deseja estudar", 350, 120);
   
   textSize(26);
   textFont('Arial');
   
   fill(255);
   noStroke();
   text("Voltar", 100, 425);
   
   image(potenciacao3, 205, 230, 120, 100);
   image(notacao1, 500, 230, 120, 100);
}
  
  // TELA 8 = POTENCIAÇÃO {EXPLICAÇÃO}
  
  if(tela == 8){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    image(potenciacao, 210, 230, 350, 250);
    image(potenciacao2,530, 230, 250,250);
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    textFont('Arial black');
    textSize(24);
    
    fill(255);
    stroke(0);
    text('Explicação:', 125, 70);
    
    if(mouseX > 500 && mouseX < (500+110) && mouseY > 410 && mouseY < (410+40)){
       stroke(255,0,0);
       fill(255,165,0);
       rect(525, 405, 120, 50)
      if(mouseIsPressed){
       tela = 10
      }
    }
    
    if(mouseX > 540 && mouseX < (540+110) && mouseY > 35 && mouseY < (35+50)){
      stroke(255);
      fill(255, 0 , 0);
      rect(535, 30, 120, 60);if(mouseIsPressed){
      tela = 7;
      }
    }
  
    stroke(255);
    fill(135,206,235);
    rect(540, 35, 110, 50);
  
    stroke(255);
    fill(255);
    rect(530, 410, 110, 40);
    
    textFont('arial');
    textSize(26);
    
    fill(0);
    stroke(0);
    text('Voltar', 595, 70);
    
    textFont('arial');
    textSize(24);
    
    fill(255, 0 , 0);
    stroke(255, 0, 0);
    text('Avançar', 585, 438);
    
  }
  
  // TELA 9 = NOTAÇÃO CIENTÍFICA {EXPLICAÇÃO}
  
  if(tela == 9){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    image(notacaoexp1, 190, 250, 300, 250);
    image(notacaoexp2, 510, 250, 300, 250);
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    if(mouseX > 525 && mouseX < (525+120) && mouseY > 405 && mouseY < (405+50)){
       stroke(255,0,0);
       fill(255,165,0);
       rect(525, 405, 120, 50)
      if(mouseIsPressed){
       tela = 12
      }
    }
  
    if(mouseX > 540 && mouseX < (540+110) && mouseY > 35 && mouseY < (35+50)){
      stroke(255);
      fill(255, 0 , 0);
      rect(535, 30, 120, 60);if(mouseIsPressed){
      tela = 7;
      }
    }
  
    stroke(255);
    fill(135,206,235);
    rect(540, 35, 110, 50);
  
    stroke(255);
    fill(255);
    rect(530, 410, 110, 40);
    
    textFont('arial');
    textSize(26);
    
    fill(0);
    stroke(0);
    text('Voltar', 595, 70);
    
    stroke(255);
    fill(255);
    rect(530, 410, 110, 40);
    
    textFont('arial');
    textSize(24);
    
    fill(255, 0 , 0);
    stroke(255, 0, 0);
    text('Avançar', 585, 438);
    
    
    textFont('Arial black');
    textSize(24);
    
    fill(255);
    stroke(0);
    text('Explicação:', 125, 70);

   }
  
  // TELA 10 = POTENCIAÇÃO {FASE 1}
  
  if(tela == 10){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
    textFont('arial');
    textSize(24);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Qual a segunda potência do número 4 ?", 285, 90);
    text("Qual o resultado de (9)² ?", 210, 125);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(75, 200, 110, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(80, 205, 100, 50, 20);
    
    if(mouseX > 75 && mouseX < (75+110) && mouseY > 200 && mouseY < (200+60)){
      stroke(255);
    fill(50,205,50);
    rect(80, 205, 100, 50, 20);
      if(mouseIsPressed){
        tela = 11 }
       }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(210, 200, 110, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(215, 205, 100, 50, 20);
    
    if(mouseX > 210 && mouseX < (210+110) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(215, 205, 100, 50, 20);
     if(mouseIsPressed){ tela = 11 }}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(375, 200, 110, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(380, 205, 100, 50, 20);
    
    if(mouseX > 375 && mouseX < (375+110) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(380, 205, 100, 50, 20);
     if(mouseIsPressed){ 
       tela = 14 
       acertos = acertos + 1;}}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(515, 200, 110, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(520, 205, 100, 50, 20);
    
    
    if(mouseX > 515 && mouseX < (515+110) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(520, 205, 100, 50, 20);
     if(mouseIsPressed){ tela = 11 }}
    
    if(mouseX > 50 && mouseX < (50+130) && mouseY > 300 && mouseY < (300+40)){
     stroke(255,0,0);
       fill(255,165,0);
       rect(45, 295, 140, 50); if(mouseIsPressed){
         tela = 8
       }
    }
    
    stroke(255);
    fill(255);
    rect(50, 300, 130, 40);
    
    fill(0);
    stroke(0);
    text("81 | 9", 570, 240);
    
    fill(0);
    stroke(0);
    text("16 | 81", 430, 240);
    
    fill(0);
    stroke(0);
    text("18 | 25", 263, 240);
      
    fill(0);
    stroke(0);
    text("24 | 32", 130, 240);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text('Explicação', 115, 328);
  }
  
  // TELA 11 = POTENCIAÇÃO {REVISÃO}
  
  if(tela == 11){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    textSize(28);
    textFont('Arial black');
    
    fill(255);
    stroke(255);
    text('Revisão:', 120, 70);
    
    image(potenciacao4, 195, 240, 300, 200);
    image(potenciacao5, 505, 240, 300, 200);
    
    if(mouseX > 50 && mouseX < (50+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(50, 390, 150, 50); if(mouseIsPressed){
      tela = 10
      }
    }
    
    if(mouseX > 515 && mouseX < (515+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(510, 390, 150, 50); if(mouseIsPressed){
      tela = 14
      }
    }
    
    stroke(255);
    fill(0,100,0);
    rect(515, 395, 140, 40);
    
    stroke(255);
    fill(0,100,0);
    rect(55, 395, 140, 40);
    
    textSize(20);
    textFont('arial');
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 1', 125, 422);
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 2', 585, 422);
  }
  
  // TELA 12 = NOTAÇÃO CIENTÍFICA {FASE 1}
  
  if(tela == 12){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
     textFont('arial');
    textSize(28);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Qual a notação científica do número 1284 ?", 340, 105);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(55, 200, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(60, 205, 120, 50, 20);
    
    if(mouseX > 55 && mouseX < (55+130) && mouseY > 200 && mouseY < (200+60)){
      stroke(255);
    fill(50,205,50);
    rect(60, 205, 120, 50, 20);
      if(mouseIsPressed){
        tela = 13 }
       }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(210, 200, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(215, 205, 120, 50, 20);
    
    if(mouseX > 210 && mouseX < (210+130) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(215, 205, 120, 50, 20);
     if(mouseIsPressed){ tela = 13 }}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(375, 200, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(380, 205, 120, 50, 20);
    
    if(mouseX > 375 && mouseX < (375+130) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(380, 205, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 13 }}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(525, 200, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(530, 205, 120, 50, 20);
    
    
    if(mouseX > 525 && mouseX < (525+130) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(530, 205, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 15
       acertos = acertos + 1;}}
    
    textSize(24);
    textFont('arial');
    
    fill(0);
    stroke(0);
    text("1,284*10³", 590, 240);
    
    fill(0);
    stroke(0);
    text("128,4*10³", 440, 240);
    
    fill(0);
    stroke(0);
    text("0,1284*10²", 273, 240);
      
    fill(0);
    stroke(0);
    text("1,284*10²", 120, 240);
    
     
    if(mouseX > 50 && mouseX < (50+130) && mouseY > 300 && mouseY < (300+40)){
     stroke(255,0,0);
       fill(255,165,0);
       rect(45, 295, 140, 50); if(mouseIsPressed){
         tela = 9
       }
    }
    
    stroke(255);
    fill(255);
    rect(50, 300, 130, 40);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text('Explicação', 115, 328);
  }
  
  // TELA 13 = NOTAÇÃO CIENTÍFICA {REVISÃO}
  
  if(tela == 13){
    
   background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460); 
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    textSize(28);
    textFont('Arial black');
    
    fill(255);
    stroke(255);
    text('Revisão:', 120, 70);
    
    image(notacao4, 220, 250, 250, 250);
    image(notacao3, 490, 175, 250, 100);
    image(notacao5, 490, 325, 250, 100);
    
    if(mouseX > 50 && mouseX < (50+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(50, 390, 150, 50); if(mouseIsPressed){
      tela = 12
      }
    }
    
    if(mouseX > 515 && mouseX < (515+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(510, 390, 150, 50); if(mouseIsPressed){
      tela = 15
      }
    }
    
    stroke(255);
    fill(0,100,0);
    rect(515, 395, 140, 40);
    
    stroke(255);
    fill(0,100,0);
    rect(55, 395, 140, 40);
    
    textSize(20);
    textFont('arial');
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 1', 125, 422);
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 2', 585, 422);
  }
  
  // TELA 14 = POTENCIAÇÃO {FASE 2}
  
  if(tela == 14){
    
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
    textFont('arial');
    textSize(24);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Qual o resultado de (-5) elevado a 6 ?", 270, 90);
    text("Qual o resultado de (-7)³ ?", 210, 125);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(50, 300, 140, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(55, 305, 130, 50, 20);
    
    if(mouseX > 50 && mouseX < (50+140) && mouseY > 300 && mouseY < (300+60)){
      stroke(255);
    fill(50,205,50);
    rect(55, 305, 130, 50, 20);if(mouseIsPressed){
      tela = 18}
    }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(200, 300, 160, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(205, 305, 150, 50, 20);
    
    if(mouseX > 200 && mouseX < (200+160) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(205, 305, 150, 50, 20);
     if(mouseIsPressed){ 
       tela = 16 
       acertos = acertos + 1;}}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(375, 300, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(380, 305, 120, 50, 20);
    
    if(mouseX > 375 && mouseX < (375+130) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(380, 305, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 18 }}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(515, 300, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(520, 305, 120, 50, 20);
    
    
    if(mouseX > 515 && mouseX < (515+130) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(520, 305, 120, 50, 20);
     if(mouseIsPressed){ tela = 18 }}
    
    
    fill(0);
    stroke(0);
    text("8512 | 27", 580, 340);
    
    fill(0);
    stroke(0);
    text("725 | 120", 440, 340);
    
    fill(0);
    stroke(0);
    text("15.625 | -343", 278, 340);
      
    fill(0);
    stroke(0);
    text("526 | 1024", 120, 340);
    
     stroke(255);
    fill(79,79,79);
    rect(60, 390, 120, 50, 15);
    
    if(mouseX > 60 && mouseX < (60+120) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(60, 390, 120, 50, 15);
     if(mouseIsPressed){
       tela = 10}
   }
    
    textSize(26);
   textFont('Arial');
  
   fill(255);
   noStroke();
   text("Anterior", 120, 425);
    
  }
  
  // TELA 15 = NOTAÇÃO CIENTÍFICA {FASE 2}
  
  if(tela == 15){
      background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
     stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
     textFont('arial');
    textSize(28);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Qual a notação científica do número 13240 ?", 340, 105);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(55, 300, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(60, 305, 120, 50, 20);
    
    if(mouseX > 55 && mouseX < (55+130) && mouseY > 300 && mouseY < (300+60)){
      stroke(255);
    fill(50,205,50);
    rect(60, 305, 120, 50, 20);
      if(mouseIsPressed){
        tela = 19 }
       }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(210, 300, 130, 60, 20);
    
    stroke(255);
    fill(127, 255,212);
    rect(215, 305, 120, 50, 20);
    
    if(mouseX > 210 && mouseX < (210+130) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(215, 305, 120, 50, 20);
     if(mouseIsPressed){ tela = 17
                       acertos = acertos + 1}}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(375, 300, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(380, 305, 120, 50, 20);
    
    if(mouseX > 375 && mouseX < (375+130) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(380, 305, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 19 }}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(525, 300, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(530, 305, 120, 50, 20);
    
    
    if(mouseX > 525 && mouseX < (525+130) && mouseY > 300 && mouseY < (300+60)){
    stroke(255);
    fill(50,205,50);
    rect(530, 305, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 19
       }}
    
    textSize(24);
    textFont('arial');
    
    fill(0);
    stroke(0);
    text("13,240*10³", 590, 340);
    
    fill(0);
    stroke(0);
    text("324,0*10^6", 440, 340);
    
    fill(0);
    stroke(0);
    text("1,324*10^4", 273, 340);
      
    fill(0);
    stroke(0);
    text("132,4*10³", 120, 340);
    
    stroke(255);
    fill(79,79,79);
    rect(60, 190, 120, 50, 15);
    
     if(mouseX > 60 && mouseX < (60+120) && mouseY > 190 && mouseY < (190+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(60, 190, 120, 50, 15);
     if(mouseIsPressed){
       tela = 12}
   }
    
    textSize(26);
   textFont('Arial');
  
   fill(255);
   noStroke();
   text("Anterior", 120, 225);
  }
  
  // TELA 16 = POTENCIAÇÃO {FASE 3}
  
  if(tela == 16){
     
    background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
    textFont('arial');
    textSize(24);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Quanto é (25)² ?", 160, 90);
    text("Qual o resultado de (6)³ ?", 210, 125);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(65, 200, 120, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(70, 205, 110, 50, 20);
    
    if(mouseX > 65 && mouseX < (65+110) && mouseY > 200 && mouseY < (200+60)){
      stroke(255);
    fill(50,205,50);
    rect(70, 205, 110, 50, 20);
      if(mouseIsPressed){
        tela = 20
      acertos = acertos + 1}
       }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(200, 200, 120, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(205, 205, 110, 50, 20);
    
    if(mouseX > 200 && mouseX < (200+120) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(205, 205, 110, 50, 20);
     if(mouseIsPressed){ 
       tela = 18}}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(365, 200, 120, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(370, 205, 110, 50, 20);
    
    if(mouseX > 365 && mouseX < (365+120) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(370, 205, 110, 50, 20);
     if(mouseIsPressed){ 
       tela = 18}}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(505, 200, 120, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(510, 205, 110, 50, 20);
    
    
    if(mouseX > 505 && mouseX < (505+120) && mouseY > 200 && mouseY < (200+60)){
    stroke(255);
    fill(50,205,50);
    rect(510, 205, 110, 50, 20);
     if(mouseIsPressed){ tela = 18 }}
    
    fill(0);
    stroke(0);
    text("189 | 289", 565, 240);
    
    fill(0);
    stroke(0);
    text("245 | 625", 425, 240);
    
    fill(0);
    stroke(0);
    text("525 | 136", 258, 240);
      
    fill(0);
    stroke(0);
    text("625 | 216", 125, 240);
    
    stroke(255);
    fill(79,79,79);
    rect(540, 390, 120, 50, 15);
    
    if(mouseX > 540 && mouseX < (540+120) && mouseY > 390 && mouseY < (390+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(540, 390, 120, 50, 15);
     if(mouseIsPressed){
       tela = 14}
   }
    
    textSize(26);
   textFont('Arial');
  
   fill(255);
   noStroke();
   text("Anterior", 600, 425);
    
  }
  
  // TELA 17 = NOTAÇÃO CIENTÍFICA {FASE 3}
  
  if(tela == 17){
     background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
   
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
     stroke(255);
    fill(79,79,79);
    rect(40, 40, 620, 120);
    
    stroke(255);
    fill(0,100,0);
    rect(50, 50, 600, 100);
    
     textFont('arial');
    textSize(24);
    
    fill(255,250,205);
    stroke(255,250,205);
    text("Qual a notação científica do número 312000000 ?", 340, 105);
    
    // PRIMEIRA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(55, 400, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(60, 405, 120, 50, 20);
    
    if(mouseX > 55 && mouseX < (55+130) && mouseY > 400 && mouseY < (400+60)){
      stroke(255);
    fill(50,205,50);
    rect(60, 405, 120, 50, 20);
      if(mouseIsPressed){
        tela = 19 }
       }
    
    // SEGUNDA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(210, 400, 130, 60, 20);
    
    stroke(255);
    fill(127, 255,212);
    rect(215, 405, 120, 50, 20);
    
    if(mouseX > 210 && mouseX < (210+130) && mouseY > 400 && mouseY < (400+60)){
    stroke(255);
    fill(50,205,50);
    rect(215, 405, 120, 50, 20);
     if(mouseIsPressed){ tela = 19 }}
    
    // TERCEIRA ALTERNATIVA 
    
    stroke(255);
    fill(0,0,205);
    rect(375, 400, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(380, 405, 120, 50, 20);
    
    if(mouseX > 375 && mouseX < (375+130) && mouseY > 400 && mouseY < (400+60)){
    stroke(255);
    fill(50,205,50);
    rect(380, 405, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 19 }}
    
    // QUARTA ALTERNATIVA
    
    stroke(255);
    fill(0,0,205);
    rect(525, 400, 130, 60, 20);
    
    stroke(255);
    fill(127,255,212);
    rect(530, 405, 120, 50, 20);
    
    
    if(mouseX > 525 && mouseX < (525+130) && mouseY > 400 && mouseY < (400+60)){
    stroke(255);
    fill(50,205,50);
    rect(530, 405, 120, 50, 20);
     if(mouseIsPressed){ 
       tela = 20
       acertos = acertos + 1;}}
    
    textSize(24);
    textFont('arial');
    
    fill(0);
    stroke(0);
    text("3,12*10^8", 590, 440);
    
    fill(0);
    stroke(0);
    text("31,2*10²", 440, 440);
    
    fill(0);
    stroke(0);
    text("312*10^6", 273, 440);
      
    fill(0);
    stroke(0);
    text("0,312*10³", 120, 440);
    
    stroke(255);
    fill(79,79,79);
    rect(540, 190, 120, 50, 15);
    
     if(mouseX > 540 && mouseX < (540+120) && mouseY > 190 && mouseY < (190+50)){
   stroke(255, 0, 0);
   fill(0, 70, 240);
   rect(540, 190, 120, 50, 15);
     if(mouseIsPressed){
       tela = 15}
   }
    
    textSize(26);
   textFont('Arial');
  
   fill(255);
   noStroke();
   text("Anterior", 600, 225);
  }
  
  // TELA 18 = POTENCIAÇÃO {REVISÃO 2}
  
  if(tela == 18){
     background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    textSize(28);
    textFont('Arial black');
    
    fill(255);
    stroke(255);
    text('Revisão:', 120, 70);
    
    image(potenciacao4, 195, 240, 300, 200);
    image(potenciacao5, 505, 240, 300, 200);
    
    if(mouseX > 50 && mouseX < (50+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(50, 390, 150, 50); if(mouseIsPressed){
      tela = 14
      }
    }
    
    if(mouseX > 515 && mouseX < (515+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(510, 390, 150, 50); if(mouseIsPressed){
      tela = 16
      }
    }
    
    stroke(255);
    fill(0,100,0);
    rect(515, 395, 140, 40);
    
    stroke(255);
    fill(0,100,0);
    rect(55, 395, 140, 40);
    
    textSize(20);
    textFont('arial');
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 2', 125, 422);
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 3', 585, 422);

  }
  
  // TELA 19 = NOTAÇÃO CIENTÍFICA {REVISÃO 2}
  
  if(tela == 19){
     background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460); 
    
    stroke(0,191,255);
    fill(0,191,255);
    rect(37, 30, 180, 60);
    
    stroke(220,20,60);
    fill(220,20,60);
    rect(42, 35, 170, 50);
    
    textSize(28);
    textFont('Arial black');
    
    fill(255);
    stroke(255);
    text('Revisão:', 120, 70);
    
    image(notacao4, 220, 250, 250, 250);
    image(notacao3, 490, 175, 250, 100);
    image(notacao5, 490, 325, 250, 100);
    
    if(mouseX > 50 && mouseX < (50+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(50, 390, 150, 50); if(mouseIsPressed){
      tela = 15
      }
    }
    
    if(mouseX > 215 && mouseX < (215+150) && mouseY > 390 && mouseY < (390+50)){
    stroke(255);
    fill(79,79,79);
    rect(210, 390, 150, 50); if(mouseIsPressed){
      tela = 17
      }
    }
    
    stroke(255);
    fill(0,100,0);
    rect(215, 395, 140, 40);
    
    stroke(255);
    fill(0,100,0);
    rect(55, 395, 140, 40);
    
    textSize(20);
    textFont('arial');
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 2', 125, 422);
    
    fill(255,250,205);
    stroke(255,250,205);
    text('Questão 3', 285, 422);
  }
  
  // TELA 20 = TELA FINAL
  
  if(tela == 20){
     background(r, g, b);
    r = r + 3;
    g = g + 1;
    b = b + 6;
    if((r || g || b) == 255){
      r = 0
      g = 0
      b = 0
    }
    
    stroke(0);
   fill(0);
   rect(10, 10, 680, 460);
    
    textSize(24);
    textFont('arial');
    
    fill(255);
    stroke(255);
    text("Parabens, você acertou" + " " + acertos + " " + "questões!", 220, 50);
    text("Obrigado por jogar o Pontencializador de Aprendizagem.", 325, 80);
  }
  
}