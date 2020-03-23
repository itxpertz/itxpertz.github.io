var levels = [
  {
    order: 1,
    doThis : "Selecione os pratos",
    selectorName : "Seletor de tipo ou tag",
    helpTitle : "Selecionando elementos pelo seu tipo",
    syntax : "A",
    syntaxMenu : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. <br/><br/>'Tipo' se refere ao tipo de TAG, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são exemplos de tipos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>',
    ],
    selector : "prato",
    boardMarkup: `
    <prato/>
    <prato/>
    `
  },
  {
    order: 2,
    doThis : "Seleciona as caixas",
    selectorName : "Seletor de tipo ou tag",
    helpTitle : "Seleciona os elementos pelo seu tipo",
    syntax : "A",
    syntaxMenu : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. 'Tipo' se refere ao tipo de TAG, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são exemplos de tipos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>',
    ],
    selector : "caixa",
    boardMarkup: `
    <caixa/>
    <prato/>
    <caixa/>
    `
  },
  {
    order: 3,
    doThis : "Selecione o prato chique",
    selectorName: "Seletor de ID",
    helpTitle: "Seleciona elementos pelo seu ID",
    syntax: "#id",
    syntaxMenu: "#id",
    help : 'Seleciona um elemento com um <strong>id</strong> específico. Você também pode combinar o seletor e ID com o seletor de tipo.',
    help : 'Seleciona um elemento com um <strong>id</strong> específico. Você também pode combinar o seletor e ID com o seletor de tipo.',
    examples : [
      '<strong>#legal</strong> seleciona qualquer elemento com <strong>id="legal"</strong>',
      '<strong>ul#longo</strong> seleciona <tag>ul id="longo"</tag>'
    ],
    selector : "#chique",
    boardMarkup : `
    <prato id="chique"/>
    <prato/>
    <caixa/>
    `
  },
  {
    order: 4, 
    doThis : "Selecione o tomate no prato",
    selectorName : "Seletor de filhos (descendentes)",
    helpTitle: "Seleciona um elemento dentro de outro elemento",
    syntax: "A&nbsp;&nbsp;B",
    syntaxMenu: "A&nbsp;&nbsp;B",
    help : "Seleciona todos <strong>B</strong> dentro de <strong>A</strong>. <br/> <strong>B</strong> é chamado de descendente (ou filho) porque está dentro de outro elemento.",
    help : "Seleciona todos <strong>B</strong> dentro de <strong>A</strong>. <br/> <strong>B</strong> é chamado de descendente (ou filho) porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos elementos <tag>strong</tag> que estão dentro de qualquer elemento <tag>p</tag>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que estão dentro do elemento com <strong>id="chique"</strong>',
    ],
    selector : "prato tomate",
    boardMarkup : `
    <caixa/>
    <prato>
      <tomate/>
    </prato>
    <tomate/>
    `
  },
  {
    order: 5,  
    doThis : "Selecione o pepino no prato chique",
    selectorName: "Combinação de seletores (parte 1)",
    helpTitle: "Combinando os seletores de ID e descendente",
    syntax: "#id&nbsp;&nbsp;A",
    syntaxMenu: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendência.',
    examples : [
      '<strong>#legal&nbsp;span</strong> seleciona todos elementos <tag>span</tag> que estão dentro de elemntos com <strong>id="legal"</strong>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que estão dentro do elemento com <strong>id="chique"</strong>',
    ],
    selector : "#chique pepino",
    boardMarkup : `
    <caixa>
    <laranja/>
    </caixa>
    <prato id="chique">
      <pepino/>
    </prato>
    <prato>
      <pepino/>
    </prato>
    `
  },
  {
    order: 6,   
    doThis : "Selecione os pequenos tomates",
    selectorName: "Seletor de Classe",
    helpTitle: "Seleciona elementos pela sua classe",
    syntax: ".nomeDaClasse",
    syntaxMenu: ".nomeDaClasse",
    help : 'O seletor de classe pega todos os elementos que contenham aquela classe. Elementos somente podem ter um ID, mas podem ter muitas classes.',
    examples : [
      '<strong>.grande</strong> seleciona todos os elementos com <strong>class="grande"</strong>'
    ],
    selector : ".pequeno",
    boardMarkup : `
    <tomate/>
    <tomate class="pequeno"/>
    <prato>
      <tomate class="pequeno"/>
    </prato>
    <prato/>
    `
  },
  {
    order: 7,   
    doThis : "Selecione as pequenas laranjas",
    selectorName: "Combinação de seletores (parte 2)",
    helpTitle: "Combinando o seletor de Classe com Seletores de Tipo",
    syntax: "A.className",
    syntaxMenu: "A.className",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo/tag por exemplo.',
    examples : [
      '<strong>ul.importante</strong> seleciona todos elementos <tag>ul</tag>que contenham <strong>class="importante"</strong>',
      '<strong>#topo.grande</strong> seleciona todos os elementos com <strong>id="topo"</strong> que também tem <strong>class="grande"</strong>'
    ],
    selector : "laranja.pequeno",
    boardMarkup :`
    <tomate/>
    <tomate class="pequeno"/>
    <caixa>
      <laranja class="pequeno"/>
    </caixa>
    <prato>
      <laranja/>
    </prato>
    <prato>
      <laranja class="pequeno"/>
    </prato>`
  },
  {
    order: 8,
    doThis : "Selecione as pequenas laranjas dentro das caixas",
    selectorName : "Combinando seletores e classes em níveis",
    helpTitle: "Combinando o seletores de Classe com Seletores de Tipo em camadas",
    syntax: "A B.classe",
    syntaxMenu: "A B.classe",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver esse!',
    selector : "caixa laranja.pequeno",
    boardMarkup : `
    <caixa>
      <laranja/>
    </caixa>
    <laranja class="pequeno"/>
    <caixa>
      <laranja class="pequeno"/>
    </caixa>
    <caixa>
      <tomate class="pequeno"/>
    </caixa>
    <caixa>
      <laranja class="pequeno"/>
    </caixa>
    `
  },
  {
    order: 9,
    doThis : "Selecione todos os pratos e caixas",
    selectorName : "Operador de Combinação (Virgula)",
    helpTitle: "Combine seletores com virgulas!",
    syntax : "A, B",
    syntaxMenu : "A, B",
    help : 'A virgula permite combinar e selecionar ambos elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar qualquer seletor dessa forma e pode especificar mais do que dois inclusive.',
    examples: [
      '<strong>p, .legal</strong> seleciona todos os elementos <tag>p</tag> e também todos elementos com <strong>class="legal"</strong>',
      '<strong>a, p, div</strong> seleciona todos elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
    selector : "prato,caixa",
    boardMarkup : `
    <pepino class="pequeno"/>
    <pepino/>
    <prato>
      <pepino/>
    </prato>
    <caixa>
      <pepino/>
    </caixa>
    <prato>
      <pepino/>
    </prato>
    <pepino/>
    <pepino class="pequeno"/>
    `
  },
  {
    order: 10, 
    doThis : "Selecione tudo!",
    selectorName:  "O seletor universal (*)",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    syntaxMenu : "*",
    help : 'Com <strong>*</strong> você pode selecionar todos os elementos (seletor universal)!',
    examples : [
      '<strong>p *</strong> selecione todos elemntos que estiverem dentro de elementos <tag>p</tag>.',
    ],
    selector : "*",
    boardMarkup : `
    <tomate/>
    <prato>
      <laranja class="pequeno" />
    </prato>
    <caixa/>
    <caixa>
      <laranja/>
    </caixa>
    <prato id="chique"/>
    `
  },
  {
    order: 11,
    doThis : "Selecione tudo dentro de pratos",
    selectorName: "Combinação de seletores (parte 3)",
    syntax : "A&nbsp;&nbsp;*",
    syntaxMenu : "A&nbsp;&nbsp;*",
    helpTitle: "Combinando outro seletor com o seletor universal",
    help : 'Esta regra acima seleciona tudo dentro de um elemento <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona todos elementos dentro de elementos<tag>p</tag>.',
      '<strong>ul.chique *</strong> seleciona todos elemento dentro de elementos com a classe <tag>ul class="chique"</tag>.'
    ],
    selector : "prato *",
    boardMarkup: `
    <prato id="chique">
      <laranja class="pequeno"/>
    </prato>
    <prato>
      <pepino/>
    </prato>
    <tomate class="pequeno"/>
    <prato>
      <tomate/>
    </prato>`
  },
  {
    order: 12,
    doThis : "Selecione todo tomate que estiver ao lado de um prato",
    selectorName: "Seletor de Irmão do Lado (Adjacente)",
    helpTitle: "Seleciona um elemento que está diretamente após um elemento",
    syntax : "A + B",
    syntaxMenu : "A + B",
    help : "Esta regra acima seleciona todos elementos <strong>B</strong>que sucedem elementos <strong>A</strong>. Elementos que sucedem outros são chamados de irmãos (siblings).",
    examples : [
      '<strong>p + .intro</strong> seleciona todos elementos com <strong>class="intro"</strong> que está diretamente após um elemento <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos elementos <tag>a</tag> que estádiretamente após uma <tag>div</tag>'
    ],
    selector : "prato + tomate",
    boardMarkup : `
    <caixa>
      <tomate class="pequeno"/>
    </caixa>
    <prato />
    <tomate class="pequeno"/>
    <prato />
    <tomate/>
    <tomate class="pequeno"/>
    <tomate class="pequeno"/>
    `
  },
  {
    order: 13,
    doThis : "Selecione os pepinos ao lado da caixa",
    selectorName: "Seletor de irmãos seguidores (General Sibling)",
    helpTitle: "Seleciona elementos que de um tipo que aparecem no mesmo nível, porém após um outro elemento",
    syntax: "A ~ B",
    syntaxMenu: "A ~ B",
    help : "Você pode selecionar todos os irmãos que são adjacentes a um elemento. É semelhante ao seletor adjacente <strong>A + B</strong>, exceto que pega TODOS os próximos elementos, não apenas o próximo.",
    examples : [
      '<strong>A ~ B</strong> seleciona todos os elementos <strong>B</strong> que seguem um elemento <strong>A</strong>'
    ],
    selector : "caixa ~ pepino",
    boardMarkup : `
    <pepino/>
    <caixa>
      <laranja class="pequeno"/>
    </caixa>
    <pepino class="pequeno"/>
    <pepino/>
    <prato>
      <pepino/>
    </prato>
    <pepino/>
    <prato>
      <pepino class="pequeno"/>
    </prato>
    `
  },
  {
    order: 14,
    doThis : "Selecione o tomate dentro do prato",
    selectorName: "Seletor de filhos",
    helpTitle: "Seleciona os filhos de um elemento que são de um determinado tipo",
    syntax: "A > B",
    syntaxMenu: "A > B",
    help : "Você pode selecionar elementos que são filhos diretos de outro elemento. Um elemento filho é um elemento que está dentro de outro. <br><br>Elementos que estão em um nivel ainda maior dentro do elemento são c hamados de descendentes.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    selector : "prato > tomate",
    boardMarkup: `
    <prato>
      <caixa>
        <tomate/>
      </caixa>
    </prato>
    <prato>
      <tomate/>
    </prato>
    <prato/>
    <tomate/>
    <tomate class="pequeno"/>
    `
  },
  {
    order: 15,
    doThis : "Repita a atividade anterior e veja que funciona para mais de um filho",
    selectorName: "Seletor de filhos (2)",
    helpTitle: "Seleciona todos os filhos de um elemento que são de um determinado tipo",
    syntax: "A > B",
    syntaxMenu: "A > B",
    help : "Veja que o mesmo seletor atua sobre todos os filhos de um mesmo tipo que estejam dentro de outro elemento.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    selector : "prato > tomate",
    boardMarkup: `
    <prato>
      <caixa>
        <tomate/>
      </caixa>
    </prato>
    <prato>
      <tomate/>
      <laranja/>
      <tomate/>
    </prato>
    <prato/>
    <tomate/>
    <tomate class="pequeno"/>
    `
  },
  {
    order: 16, 
    doThis : "Selecione a laranja no topo",
    selectorName: "Pseudo seletor de primeiro filho",
    helpTitle: "Seleciona a primeira ocorrência (primeiro filho) dentro de outro elemento",
    syntax: ":first-child<br/>A:first-child<br/>A B:first-child",
    syntaxMenu: ":first-child",
    
    help : "É possível selecionar somente o primeiro filho de um elemento usando esse pseudo-seletor. Você pode combinar esse pseudo-seletor com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os primeiros filhos.',
      '<strong>p:first-child</strong> seleciona todos os primeiros filhos que são elementos <tag>p</tag>.',
      '<strong>div p:first-child</strong> seleciona todos os primeiros filhos  <tag>p</tag> que estão dentro de elementos <tag>div</tag>.'
    ],
    selector : "prato :first-child",
    boardMarkup :`
    <caixa/>
    <prato />
    <prato>
      <laranja />
      <laranja />
      <laranja />
    </prato>
    <pepino class="pequeno" />
    `
  },
  {
    order: 17,  
    doThis : "Selecione todos os itens filhos que são únicos (sem irmãos)",
    selectorName: "Pseudo-selector para filhos únicos",
    helpTitle: "Seleciona um elementos que são filhos únicos dentro de um outro elemento, isto é, que não tem irmãos.",
    syntax: ":only-child<br/>A:only-child<br/>A B:only-child",
    syntaxMenu: ":only-child",
    help : "Com ele você pode selecionar qualquer elemento que for o único dentro de outro elemento.",
    examples : [
      '<strong>:only-child</strong> seleciona todos os elementos que são filhos únicos dentro de outros elementos.',
      '<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são únicos dentro de outros elementos.',
      '<strong>ul li:only-child</strong> seleciona somente elementos <tag>li</tag> que são estão sozinhos dentro do elemento<tag>ul</tag>.'
    ],
    selector : ":only-child",
    boardMarkup : `
    <prato>
      <tomate/>
    </prato>
    <prato>
      <pepino />
    </prato>
    <caixa>
      <pepino />
    </caixa>
    <prato>
      <laranja class="pequeno"/>
      <laranja/>
    </prato>
    <pepino class="pequeno"/>
    `
  },
  {
    order: 18,  
    doThis : "Selecione somente os pepinos que estão sozinhos nos pratos",
    selectorName: "Pseudo-selector para filhos únicos (2)",
    helpTitle: "Seleciona um elementos que são filhos únicos dentro de um outro elemento, isto é, que não tem irmãos.",
    syntax: ":only-child<br/>A:only-child<br/>A B:only-child",
    syntaxMenu: ":only-child",
    help : "Com ele você pode selecionar qualquer elemento que for o único dentro de outro elemento.",
    examples : [
      '<strong>:only-child</strong> seleciona todos os elementos que são filhos únicos dentro de outros elementos.',
      '<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são únicos dentro de outros elementos.',
      '<strong>ul li:only-child</strong> seleciona somente elementos <tag>li</tag> que são estão sozinhos dentro do elemento<tag>ul</tag>.'
    ],
    selector : "pepino:only-child",
    boardMarkup : `
    <prato>
      <tomate/>
    </prato>
    <prato>
      <pepino />
    </prato>
    <caixa>
      <pepino />
    </caixa>
    <prato>
      <laranja class="pequeno"/>
      <laranja/>
    </prato>
    <pepino class="pequeno"/>
    `
  },
  {
    order: 19,  
    doThis : "Selecione o tomate e o pepino nos pratos",
    selectorName: "Pseudo-selector para filhos únicos (3)",
    helpTitle: "Seleciona um elementos que são filhos únicos dentro de um outro elemento, isto é, que não tem irmãos.",
    syntax: ":only-child<br/>A:only-child<br/>A B:only-child",
    syntaxMenu: ":only-child",
    help : "Com ele você pode selecionar qualquer elemento que for o único dentro de outro elemento.",
    examples : [
      '<strong>:only-child</strong> seleciona todos os elementos que são filhos únicos dentro de outros elementos.',
      '<strong>span:only-child</strong> seleciona os elementos <tag>span</tag> que são únicos dentro de outros elementos.',
      '<strong>ul li:only-child</strong> seleciona somente elementos <tag>li</tag> que são estão sozinhos dentro do elemento<tag>ul</tag>.'
    ],
    selector : "prato :only-child",
    boardMarkup : `
    <prato>
      <tomate/>
    </prato>
    <prato>
      <pepino />
    </prato>
    <caixa>
      <pepino />
    </caixa>
    <prato>
      <laranja class="pequeno"/>
      <laranja/>
    </prato>
    <pepino class="pequeno"/>
    `
  },
  {
    order: 20,  
    doThis : "Selecione todos os últimos filhos",
    selectorName: "Pseudo-selector de último filho",
    helpTitle: "Seleciona os últimos filhos dentro de qualquer outro elemento",
    syntax: ":last-child",
    syntaxMenu: ":last-child",
    help : "Usamos esse seletor para pegar um elemento que é o último dentrode outro elemento. <br><br><strong>Pro Tip &rarr;</strong> Nos casos onde só existe um único elemento, este será o <strong>:first-child</strong>, <strong>:last-child</strong> e <strong>:only-child</strong> ao mesmo tempo!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    selector : ":last-child",
    boardMarkup : `
    <prato id="chique">
      <tomate class="pequeno"/>
    </prato>
    <prato/>
    <prato>
      <laranja class="pequeno"/>
      <laranja>
    </prato>
    <pepino class="pequeno"/>`
  },
  {
    order: 21,  
    doThis : "Selecione o tomate e o pepino pequenos",
    selectorName: "Pseudo-selector de último filho (2)",
    helpTitle: "Combinando classes com o seletor de último filho",
    syntax: ".classe:last-child",
    syntaxMenu: ".classe:last-child",
    help : "Usamos esse seletor para pegar um elemento que é o último dentrode outro elemento. <br><br><strong>Pro Tip &rarr;</strong> Nos casos onde só existe um único elemento, este será o <strong>:first-child</strong>, <strong>:last-child</strong> e <strong>:only-child</strong> ao mesmo tempo!",
    examples : [
      '<strong>.novo:last-child</strong> seleciona o último filho de todos os itens que tem a classe <strong>novo</strong> aplicada.',

    ],
    selector : ".pequeno:last-child",
    boardMarkup : `
    <prato id="chique">
      <tomate class="pequeno"/>
    </prato>
    <prato/>
    <prato>
      <laranja class="pequeno"/>
      <laranja>
    </prato>
    <pepino class="pequeno"/>`
  },
  {
    order: 22,  
    doThis : "Selecione o 3º prato",
    selectorName: "Pseudo-seletor de N-ésimo Filho",
    helpTitle: "Seleciona um elemento pela sua ordem em outro elemento",
    syntax: ":nth-child(número)",
    syntaxMenu: ":nth-child(número)",
    help : "Seleciona o elemento filho com a posição <strong>número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona todos os elementos que são filhos que estiverem na 8ª posição.',
      '<strong>div :nth-child(3)</strong> seleciona todos os 3ºs filhos de elementos <strong>div</strong>',
      '<strong>p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
      '<strong>div p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
    ],
    selector : ":nth-child(3)",
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    `
  },
  {
    order: 23,  
    doThis : "Selecione o 2º item de cada prato",
    selectorName: "Pseudo-seletor de N-ésimo Filho",
    helpTitle: "Seleciona um elemento pela sua ordem em outro elemento",
    syntax: "A&nbsp;&nbsp;:nth-child(número)<br/>A:nth-child(número)<br/>A B:nth-child(número)",
    syntaxMenu: "A&nbsp;&nbsp;:nth-child(número)",
    help : "Seleciona o elemento filho com a posição <strong>número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona todos os elementos que são filhos que estiverem na 8ª posição.',
      '<strong>div :nth-child(3)</strong> seleciona todos os 3ºs filhos de elementos <strong>div</strong>',
      '<strong>p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
      '<strong>div p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
    ],
    selector : "prato :nth-child(2)",
    boardMarkup : `
    <prato/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <prato/>
    <prato id="chique">
      <tomate/>
      <tomate/>
      <tomate/>
    </prato>
    `
  },
  {
    order: 24,  
    doThis : "Selecione somente o 3º tomate",
    selectorName: "Pseudo-seletor de N-ésimo Filho",
    helpTitle: "Seleciona um elemento pela sua ordem em outro elemento",
    syntax: "A B:nth-child(número)",
    syntaxMenu: "A B:nth-child(número)",
    help : "Seleciona o elemento filho com a posição <strong>número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
    examples : [
      '<strong>:nth-child(8)</strong> seleciona todos os elementos que são filhos que estiverem na 8ª posição.',
      '<strong>div :nth-child(3)</strong> seleciona todos os 3ºs filhos de elementos <strong>div</strong>',
      '<strong>p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
      '<strong>div p:nth-child(2)</strong> seleciona os 2º <strong>p</strong> que são filhos de <strong>div</strong>',
    ],
    selector : "prato tomate:nth-child(3)",
    boardMarkup : `
    <prato>
      <tomate/>
      <tomate/>
    </prato>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <prato/>
    <prato>
      <tomate/>
      <tomate/>
      <tomate/>
    </prato>
    `
  },
  {
    order: 25, 
    doThis : "Selecione o tomate que caiu na mesa",
    selectorName: "N-ésimo inverso pseudo-seletor",
    helpTitle: "Seleciona um elemento por sua ordem inversa dentro de outro elemento. Isto é, inicia de trás pra frente, onde o último é 1, o penúltino é 2 e assim por diante...",
    syntax: ":nth-last-child(número)",
    syntaxMenu: ":nth-last-child(número)",
    help : "Conte de trás para frente os elementos que estão em cima da mesa...",
    examples : [
      '<strong>:nth-last-child(2)</strong> seleciona todos os penúltimos elementos filhos.'
    ],
    selector : ":nth-last-child(3)",
    boardMarkup: `
    <prato/>
    <caixa/>
    <prato/>
    <tomate/>
    <prato/>
    <caixa/>
    `
  },
  {
    order: 26, 
    doThis : "Selecione os úlimos tomates de cada prato",
    selectorName: "Combinando elementos com o pseudo-seletor para n-ésimo inverso",
    helpTitle: "Seleciona um elemento por sua ordem inversa dentro de outro elemento. Isto é, inicia de trás pra frente, onde o último é 1, o penúltino é 2 e assim por diante...",
    syntax: "A:nth-last-child(número)<br/>A B:nth-last-child(número)",
    syntaxMenu: "A:nth-last-child(número)",
    help : "Verifique o elemento que precisa pegar e conte de trás para frente...",
    examples : [
      '<strong>p:nth-last-child(2)</strong> seleciona os penúltimos <tag>p</tag> elementos filhos.'
    ],
    selector : "tomate:nth-last-child(1)",
    boardMarkup: `
    <prato>
      <tomate/>
      <tomate/>
      <tomate/>
    </prato>
    <caixa/>
    <prato>
       <tomate/>
       <tomate/>
       <tomate/>
    </prato>
    <caixa/>
    `
  },
  {
    order: 27, 
    doThis : "Selecione os úlimos tomates de cada prato",
    selectorName: "Combinando elementos com o pseudo-seletor para n-ésimo inverso (2)",
    helpTitle: "Seleciona um elemento por sua ordem inversa dentro de outro elemento. Isto é, inicia de trás pra frente, onde o último é 1, o penúltino é 2 e assim por diante...",
    syntax: "A:nth-last-child(número)<br/>A B:nth-last-child(número)",
    syntaxMenu: "A:nth-last-child(número)",
    help : "Verifique o elemento que precisa pegar e conte de trás para frente...",
    examples : [
      '<strong>p:nth-last-child(2)</strong> seleciona os penúltimos <tag>p</tag> elementos filhos.'
    ],
    selector : "prato tomate:nth-last-child(1)",
    boardMarkup: `
    <caixa>
      <tomate/>
      <tomate/>
      <tomate/>
    </caixa>
    <pepino/>
    <prato>
       <tomate/>
       <tomate/>
       <tomate/>
    </prato>
    <caixa/>
    `
  },
  {
    order: 28, 
    doThis : "Selecione o primeiro item e cada tipo",
    selectorName: "Pseudo-seletor para o primeiro do tipo ",
    helpTitle: "Selecione o primeiro elemento de um tipo específico",
    syntax: ":first-of-type",
    syntaxMenu: ":first-of-type",
    help : "Tente colocar somente o pseudo seletor nem neda mais...",
    examples : [
      '<strong>:first-of-type</strong> pega todas as primeiras ocorrências de todos os elementos.'
    ],
    selector : ":first-of-type",
    boardMarkup: `
    <laranja class="pequeno"/>
    <laranja/>
    <tomate/>
    <laranja class="pequeno"/>
    <pepino/>
    <tomate class="pequeno"/>
        `
  },
  {
    order: 29, 
    doThis : "Selecione apenas o primeiro tomate e nada mais",
    selectorName: "Combinando o seletor de tipo e pseudo-seletor primeiro do tipo",
    helpTitle: "Selecione o primeiro elemento de um tipo e specífico",
    syntax: "A:first-of-type<br/>A B:first-of-type",
    syntaxMenu: "A:first-of-type",
    help : "É semelhate ao nível anterior, mas agora só com tomates...",
    examples : [
      '<strong>p:first-of-type</strong> pega todas as primeiras ocorrências de <tag>p</tag>.'
    ],
    selector : "tomate:first-of-type",
    boardMarkup: `
    <laranja class="pequeno"/>
    <laranja/>
    <tomate/>
    <laranja class="pequeno"/>
    <pepino/>
    <tomate class="pequeno"/>
        `
  },
  {
    order: 30, 
    doThis: "Selecione todos os pratos pares",
    selectorName: "Pseudo-seletor para n-ésimo de um tipo",
    syntax: "A:nth-of-type(número ou odd ou even)",
    syntaxMenu: "A:nth-of-type(número)",
    help: "Seleciona a N-ésima ocorrência de um elemento baseado em seu tipo. Também é possível utilizar a definição de ímpar (odd) ou par (even) como parâmetro.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> seleciona soemnte a segunda ocorrência do elemento <tag>div</tag> da página.',
      '<strong>.examplo:nth-of-type(odd)</strong> seleciona todos os elementos da classe <strong>exemplo</strong> que são ímpares.',
      '<strong>tr:nth-of-type(even)</strong> seleciona as linhas pares de uma tabela.'
    ],
    selector: "prato:nth-of-type(even)",
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
    <prato/>
    `
  },
  {
    order: 31,   
    doThis: "Selecione somente os pepinos pequenos",
    selectorName: "Pseudo-seletor para n-ésimo de um tipo com fórmula",
    syntax: ":nth-of-type(N+n)<br/>A:nth-of-type(N+n)<br/>A B:nth-of-type(N+n)",
    syntaxMenu: ":nth-of-type(N+n)",
    help: "Esse pseudo-seletor pega cada N-ésino elemento, podendo iniciar a partir de uma posição especídfica.",
    examples: [
      '<strong>p:nth-of-type(2n+3)</strong> seleciona, a partir do 3º elemento, de dois em dois <tag>p</tag>.'
    ],
    selector: "*:nth-of-type(3n+2)",
    boardMarkup : `
    <pepino/>
    <pepino class="pequeno"/>
    <pepino/>
    <pepino class="pequeno"/>
    <pepino/>
    <pepino class="pequeno"/>
    <pepino/>
    <pepino class="pequeno"/>
    <pepino/>
    `
  },
  {
    order: 32, 
    doThis : "Selecione os ingredientes que são únicos nos pratos",
    selectorName: "Pseudo-seletor para único de um tipo",
    helpTitle: "Seleciona elementos que são os únicos dentro de um outro elemento",
    syntax: ":only-of-type",
    syntaxMenu: ":only-of-type",
    help : "Seleciona somente um elemento se ele for o único dentro de seu elemento pai. <br/><br/> Veja que se você usar <strong>:only-of-type</strong> todos os elementos ao lado que são únicos dentro dos pratos serão selecionados.  ",
    examples : [
      '<strong>:only-of-type</strong> seleciona todos os elementos únicos dentro de todos os elementos.'
    ],
    selector : ":only-of-type",
    boardMarkup: `
    <prato id="chique">
      <tomate class="pequeno" />
      <laranja />
    </prato>
    <prato>
      <tomate class="pequeno" />
    </prato>
    <prato>
      <tomate class="pequeno" />
      <tomate/>
    </prato>
    <prato>
      <pepino />
    </prato>
    `
  },
  {
    order: 33, 
    doThis : "Selecione o tomate que é único no prato",
    selectorName: "Combinando com o pseudo-seletor único de um tipo",
    helpTitle: "É possivel combinar o seletor especificando exatamente qual é o tipo que se deseja o único",
    syntax: "A:only-of-type<br/>A B:only-of-type",
    syntaxMenu: "A:only-of-type",
    help : "Seleciona somente o elemnto que for do tipo <strong>A</strong> e for único.",
    examples : [
      '<strong>p:only-of-type</strong> seleciona somente o sparágrafos que forem únicos dentro de outros elementos.'
    ],
    selector : "tomate:only-of-type",
    boardMarkup: `
    <prato id="chique">
      <tomate class="pequeno" />
      <tomate />
    </prato>
    <prato>
      <tomate class="pequeno" />
    </prato>
    <prato>
      <pepino />
    </prato>
    `
  },
  {
    order: 34, 
    doThis : "Selecione o último pepino, tomate e laranja",
    selectorName: "Pseudo-seletor para último de um tipo",
    helpTitle: "Seleciona a última ocorrência de qualquer elemento",
    syntax: ":last-of-type<br/>A:last-of-type<br/>A B:last-of-type",
    syntaxMenu: ":last-of-type",
    help : `Seleciona a última ocorrência de um elemento que estiver dentro de outro. 
    <br/><br/><strong>Pro tip:</strong>
    <br/> <strong>1)</strong> Se não for especificado um tipo se aplica a todos.
    <br/> <strong>2)</strong> Se só existir 1 elemnto, ele é o último, primeiro e único.
    `,
    examples : [
      '<strong>:last-of-type</strong> seleciona o último de todos os elementos in every element.',
      '<strong>div p:last-of-type</strong> seleciona o último <tag>p</tag> em cada <tag>div</tag>.',
      '<strong>.exemplo:last-of-type</strong> seleciona o último elemento de cada tipo que contenha a classe <strong>exemplo</strong>.',      
    ],
    selector : ".pequeno:last-of-type",
    boardMarkup : `
    <laranja class="pequeno"/>
    <laranja class="pequeno" />
    <pepino />
    <pepino />
    <tomate class="pequeno" />
    <tomate class="pequeno" />
    `
  },
  {
    order: 35, 
    doThis : "Selecione as caixas vazias",
    selectorName: "Pseudo-seletor de Vazios",
    helpTitle: "Seleciona os elementos que estão vazios, isto é, não tem filhos",
    syntax: ":empty<br/>A:empty<br/>A B:empty",
    syntaxMenu: ":empty",
    help : "Este seletor também pode ser combinado com outros seletores de tipo e classe para filtrar os elementos.",
    examples : [
      '<strong>div:empty</strong> seleciona todas as <tag>div</tag> vazias.'
    ],
    selector : "caixa:empty",
    boardMarkup:`
    <caixa/>
    <caixa>
      <pepino class="pequeno"/>
    </caixa>
    <prato/>
    <caixa/>`
  },
  {
    order: 36,
    doThis : "Selecione os tomates grandes",
    selectorName: "Pseudo-seletor de negação",
    helpTitle: "Seleciona todos os elementos cuja negação do seletor dentro do parênteses se aplica",
    syntax: ":not(seletor)<br/>A:not(seletor)<br/>A B:not(seletor)",
    syntaxMenu: ":not(seletor)",
    help : 'Você pode, por exemplo pegar todos os elemento que não são <tag>p</tag> por exemplo com <strong>:not(p)</strong>.',
    examples : [
      '<strong>:not(#chique)</strong> seleciona todos os pratos que não tem <strong>id="chique"</strong>.',
      '<strong>p:not(:first-child)</strong> seleciona todas as <tag>p</tag> que não são as primeiras filhas.',
      '<strong>:not(.grande, .medio)</strong> seleciona todos elementos que não tem <strong>class="grande"</strong> ou <strong>class="medio"</strong>.'
    ],
    selector : "tomate:not(.pequeno)",
    boardMarkup: `
    <prato id="chique">
      <tomate class="pequeno" />
    </prato>
    <prato>
      <tomate />
    </prato>
    <tomate />
    <prato>
      <laranja class="pequeno" />
    </prato>
    <pepino class="pequeno" />
    `
  },
  {
    order: 37,
    doThis : "Selecione os ítens com reserva!",
    selectorName: "Seletor de Atributo",
    helpTitle: "Seleciona todos elementos que tem um atributo específico",
    selector : "[for]",
    syntax: "[nome_do_atributo]",
    syntaxMenu: "[atributo]",
    help : `Atributo é o parâmetro que aparece dentro de um elemnto HTML, por exemplo: <tag>span atributo="valor"</tag>. 
        <br/><br/> Lembre-se que este seletor, neste formato, basta apenas que exista o atributo, ele não olha para o valor dele.`,
    examples : [
      '<strong>[value]</strong> seleciona todos os elementos que tem o atributo "value" <strong>value="..."</strong> independente do valor.',
      '<strong>[type]</strong> seleciona todos elementos que tem um atributo <strong>type="..."</strong> independente do valor.'
    ],
    boardMarkup:`
    <caixa><tomate class="pequeno"/></caixa>
    <tomate for="Jonas"/>
    <prato for="Alice"><pepino/></prato>
    <caixa for="Clara"><laranja/></caixa>
    <pepino/>`
  },
  {
    order: 38,
    doThis : "Selecione somente as reservas que são pratos",
    selectorName: "Combinação com o seletor de atributo",
    helpTitle: "Seleciona todos os elementos de um tipo que possuem um determinado atributo",
    syntax: "A[atributo]<br/>A B[atributo]",
    syntaxMenu: "A[atributo]",
    help : "Combina o seletor de atributo com o outro seletor (como de tipo ou classe).",
    examples : [
      '<strong>a[href]</strong> seleciona todos os elementos de link <tag>a</tag> que tem o atributo <strong>href</strong> definido.',
      '<strong>.campo[type]</strong> seleciona todos os elementos <strong>class="campo"</strong> e que tem o atributo <strong>type</strong> definido.',
      '<strong>input[disabled]</strong> seleciona todos os elementos <tag>input</tag> com atributo <strong>disabled</strong> definido.'
    ],
    selector : "prato[for]",
    boardMarkup:`
    <prato for="Sara"><pepino/></prato>
    <prato for="Lucas"><tomate/></prato>
    <prato/>
    <caixa for="Maria"><laranja/></caixa>
    `
  },
  {
    order: 39,
    selectorName: "Seletor de valor de atributo e combinação",
    helpTitle: "Seleciona todos os elementos que tem um atributo com um determinado valor",
    doThis : "Selecione a caixa da Ana",
    syntax: '[attribute="value"]<br/>A[attribute="value"]<br/>A B[attribute="value"]',
    syntaxMenu: '[attribute="value"]',
    help : "<strong>Importante:</strong> os seletores de atributo são case sensitive, isto é, diferenciam maiúsculas de minúsculas.",
    examples : [
      '<strong>input[type="checkbox"]</strong> seleciona todos os elementos <tag>input type="checkbox"</tag>'
    ],
    selector : "[for=Ana]",
    boardMarkup:`
    <tomate for="Alex" />
    <caixa for="Ronaldo"><tomate /></caixa>
    <caixa for="Ana"><laranja/></caixa>
    <pepino/>
    `
  },
  {
    order: 40,
    selectorName: "Seletor de valor inicial de atributo (inicia com texto)",
    helpTitle: "Seleciona todos os elementos com valor de atributo que inicia com um determinado texto, podendo ser combinado com outros seletores",
    doThis : "Selecione os itens para os nomes que começam com 'Ri'",
    syntax: '[atributo^="textoInicial"]<br/>A[atributo^="textoInicial"]<br/>A B[atributo^="textoInicial"]',
    syntaxMenu: '[atributo^="textoInicial"]',
    help : 'O valor também é case sensitive e se não tiver espaços, as "aspas" podem ser abstraídas.',
    examples : [
      '<strong>.brinquedo[cor^="ver"]</strong> seleciona elementos com a classe <strong>class="brinquedo"</strong> e que também contenha o atributo <strong>cor="verde"</strong> ou <strong>cor="vermelho"</strong> por exemplo.'
    ],
    selector : '[for^="Ri"]',
    boardMarkup: `
    <prato for="Rita"><pepino/></prato>
    <caixa for="Cláudio"><tomate class="pequeno"/></caixa>
    <caixa for="Ricardo"><laranja/></caixa>
    `
  },
  {
    order: 41,
    doThis : "Selecione as reservas para os nomes que terminam com 'ane'",
    selectorName: "Seletor de valor final de atributo (termina com texto)",
    helpTitle: "Seleciona todos os elementos com valor de atributo que finaliza com um determinado texto, podendo ser combinado com outros seletores",
    syntax: '[attribute$="value"]<br/>A[attribute$="value"]<br/>A B[attribute$="value"]',
    syntaxMenu: '[attribute$="value"]',
    help : 'Muito útil para tags como img, por exemplo, ou outros atributos que seja possível verificar um padrão.',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleciona todos elementos de imagem que apresentam arquivos <strong>.jpg</strong>.',
    ],
    selector : '[for$="ane"]',
    boardMarkup:`
    <tomate class="pequeno"/>
    <caixa for="Cristiane"><pepino/></caixa>
    <tomate for="João"></tomate>
    <prato for="Luciane"><laranja/></prato>
    <pepino class="pequeno"/>
    `
  },
  {
    order: 42,
    doThis : "Selecione as reservas para os nomes que contenham 'li'",
    selectorName: "Seletor de valor de atributo com padrão no meio (que contém um texto)",
    helpTitle: "Seleciona todos os elementos com atributos que contenham caracteres específicos",
    syntax: '[atribute*="valor"]<br/>A[atribute*="valor"]',
    syntaxMenu: '[atribute*="valor"]',
    selector : '[for*="li"]',
    help : 'Este é um seletor útil caso possa identificar um padrão comum em atributos como <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>, por exemplo.',
    examples : [
      '<strong>img[src*="/miniaturas/"]</strong> seleciona todos os elementos <tag>img</tag> que mostram imagens da pasta "miniaturas".',
      '<strong>[class*="destacado"]</strong> seleciona todos os elementos que contenham "destacado" em suas classes, como <strong>class="titulo-destacado"</strong> e <strong>class="menu-destacado"</strong>'
    ],
    boardMarkup:`
    <caixa for="Felipe"><tomate /></caixa>
    <caixa for="Pedro"><pepino /></caixa>
    <caixa for="Alice"><laranja /></caixa>
    `
  }
];
