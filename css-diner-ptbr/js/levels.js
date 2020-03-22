var levels = [
  {
    order: 1,
    doThis : "Selecione os pratos",
    selectorName : "Seletor de tipo ou tag",
    helpTitle : "Selecionando elementos pelo seu tipo",
    syntax : "A",
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
    syntax: "Teste seus conhecimentos!",
    helpTitle: "Você consegue...",
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
    syntax: "A > B&nbsp;",
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
    syntax: "A > B&nbsp;",
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
    syntax: ":first-child",
    
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
    syntax: ":only-child",
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
    syntax: ":only-child",
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
    syntax: ":only-child",
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
    syntax: ".nomeClasse:last-child",
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
    syntax: ":nth-child(Número)",
    help : "Seleciona o elemento filho com a posição <strong>Número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
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
    syntax: "A&nbsp;&nbsp;:nth-child(Número)",
    help : "Seleciona o elemento filho com a posição <strong>Número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
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
    syntax: "A B:nth-child(Número)",
    help : "Seleciona o elemento filho com a posição <strong>Número</strong> (Ex: 1º, 2º, 3º, 12º etc.).",
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
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Selecione a 1ª caixa",
    selector : "caixa:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    boardMarkup: `
    <prato/>
    <caixa/>
    <prato>
      <laranja/>
      <laranja/>
      <laranja/>
    </prato>
    <caixa/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Selecione a first element of a specific type",
    doThis : "Selecione a 1ª caixa",
    selector : "tomate:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <laranja class="pequeno"/>
    <tomate/>
    <tomate class="pequeno"/>
    <tomate/>
    <tomate class="pequeno"/>
    <prato>
      <laranja class="pequeno"/>
      <laranja/>
    </prato>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Selecione todos os pratos ímpares",
    selector: "prato:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
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
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Selecione cada 2ª ocorrência de pratos após o 3º prato",
    selector: "prato:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <prato/>
    <prato>
      <pepino class="pequeno" />
    </prato>
    <prato>
      <tomate class="pequeno" />
    </prato>
    <prato/>
    <prato>
      <tomate />
    </prato>
    <prato/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select elements that are the only ones of their type within of their parent element",
    selector : "tomate:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecione o tomate no prato do meio",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
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
    selectorName: "Last of Type Selector",
    helpTitle: "Selecione a last element of a specific type",
    doThis : "Selecione o último tomate e laranja",
    selector : ".pequeno:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
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
    selectorName: "Empty Selector",
    helpTitle: "Select elements that don't have children",
    doThis : "Selecione as caixas vazias",
    selector : "caixa:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <caixa/>
    <caixa>
      <pepino class="pequeno"/>
    </caixa>
    <prato/>
    <caixa/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Selecione os tomates grandes",
    selector : "tomate:not(.pequeno)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#chique)</strong> selects all elements that do not have <strong>id="chique"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
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
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Selecione os ítens já reservados",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <caixa><tomate class="pequeno"/></caixa>
    <tomate for="Jonas"/>
    <prato for="Alice"><pepino/></prato>
    <caixa for="Clara"><laranja/></caixa>
    <pepino/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Selecione somente os pratos reservados",
    selector : "prato[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <prato for="Sara"><pepino/></prato>
    <prato for="Lucas"><tomate/></prato>
    <prato/>
    <caixa for="Maria"><laranja/></caixa>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Selecione a caixa da Ana",
    selector : "[for=Ana]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <tomate for="Alex" />
    <caixa for="Ronaldo"><tomate /></caixa>
    <caixa for="Ana"><laranja/></caixa>
    <pepino/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Selecione os itens para os nomes que começam com 'Ri'",
    selector : '[for^="Ri"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <prato for="Rita"><pepino/></prato>
    <caixa for="Cláudio"><tomate class="pequeno"/></caixa>
    <caixa for="Ricardo"><laranja/></caixa>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Selecione os itens para os nomes que terminam com 'ane'",
    selector : '[for$="ane"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <tomate class="pequeno"/>
    <caixa for="Cristiane"><pepino/></caixa>
    <tomate for="João"></tomate>
    <prato for="Luciane"><laranja/></prato>
    <pepino class="pequeno"/>
    `
  },
  {
    selectorName: "Seletor de Atributo com 'Coringa'",
    helpTitle: "Seleciona todos os elementos com atributos que contenham caracteres específicos",
    syntax: '[attribute*="value"]',
    doThis : "Selecione os itens para os nomes que contenham 'li'",
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
