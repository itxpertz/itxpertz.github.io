var levels = [
  {
    order: 1,
    helpTitle : "Selecionando elementos pelo seu tipo",
    selectorName : "Seletor de tipo ou tag",
    doThis : "Selecione os pratos",
    selector : "prato",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. <br/><br/>'Tipo' se refere ao tipo de TAG, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são exemplos de tipos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>',
    ],
    boardMarkup: `
    <prato/>
    <prato/>
    `
  },
  {
    order: 2,
    doThis : "Seleciona as caixas",
    selector : "caixa",
    syntax : "A",
    helpTitle : "Seleciona os elementos pelo seu tipo",
    selectorName : "Seletor de tipo ou tag",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. 'Tipo' se refere ao tipo de TAG, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são exemplos de tipos diferentes.",
    examples : [
      '<strong>div</strong> seleciona todos os elementos <tag>div</tag>',
      '<strong>p</strong> seleciona todos elementos <tag>p</tag>',
    ],
    boardMarkup: `
    <caixa/>
    <prato/>
    <caixa/>
    `
  },
  {
    order: 3,
    doThis : "Selecione o prato chique",
    selector : "#chique",
    selectorName: "Seletor de ID",
    helpTitle: "Seleciona elementos pelo seu ID",
    syntax: "#id",
    help : 'Seleciona um elemento com um <strong>id</strong> específico. Você também pode combinar o seletor e ID com o seletor de tipo.',
    examples : [
      '<strong>#legal</strong> seleciona qualquer elemento com <strong>id="legal"</strong>',
      '<strong>ul#longo</strong> seleciona <tag>ul id="longo"</tag>'
    ],
    boardMarkup : `
    <prato id="chique"/>
    <prato/>
    <caixa/>
    `
  },
  {
    order: 4, 
    helpTitle: "Seleciona um elemento dentro de outro elemento",
    selectorName : "Seletor de descendência (filho)",
    doThis : "Selecione o tomate no prato",
    selector : "prato tomate",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos <strong>B</strong> dentro de <strong>A</strong>. <br/> <strong>B</strong> é chamado de descendente (ou filho) porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> seleciona todos elementos <tag>strong</tag> que estão dentro de qualquer elemento <tag>p</tag>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que estão dentro do elemento com <strong>id="chique"</strong>',
    ],
    boardMarkup : `
    <caixa/>
    <prato>
      <tomate/>
    </prato>
    <tomate/>
    `
  },
  {
    doThis : "Selecione o pepino no prato chique",
    selector : "#chique pepino",
    helpTitle: "Combinando os seletores de ID e descendente",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendência.',
    examples : [
      '<strong>#legal&nbsp;span</strong> seleciona todos elementos <tag>span</tag> que estão dentro de elemntos com <strong>id="legal"</strong>',
      '<strong>#chique&nbsp;&nbsp;span</strong> seleciona qualquer elemento <tag>span</tag> que estão dentro do elemento com <strong>id="chique"</strong>',
    ],
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
    doThis : "Selecione os pequenos tomates",
    selector : ".pequeno",
    selectorName: "Seletor de Classe",
    helpTitle: "Seleciona elementos pela sua classe",
    syntax: ".nomeDaClasse",
    help : 'O seletor de classe pega todos os elementos que contenham aquela classe. Elementos somente podem ter um ID, mas podem ter muitas classes.',
    examples : [
    '<strong>.grande</strong> seleciona todos os elementos com <strong>class="grande"</strong>'
    ],
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
    doThis : "Selecione as pequenas laranjas",
    selector : "laranja.pequeno",
    helpTitle: "Combinando o seletor de Classe com Seletores de Tipo",
    syntax: "A.className",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo/tag por exemplo.',
    examples : [
      '<strong>ul.importante</strong> seleciona todos elementos <tag>ul</tag>que contenham <strong>class="importante"</strong>',
      '<strong>#topo.grande</strong> seleciona todos os elementos com <strong>id="topo"</strong> que também tem <strong>class="grande"</strong>'
    ],
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
    doThis : "Selecione as pequenas laranjas dentro das caixas",
    selector : "caixa laranja.pequeno",
    syntax: "Teste seus conhecimentos!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver esse!',
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
    doThis : "Selecione todos os pratos e caixas",
    selector : "prato,caixa",
    selectorName : "Operador de Combinação (Virgula)",
    helpTitle: "Combine seletores com virgulas!",
    syntax : "A, B",
    help : 'A virgula permite combinar e selecionar ambos elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar qualquer seletor dessa forma e pode especificar mais do que dois inclusive.',
    examples: [
    '<strong>p, .legal</strong> seleciona todos os elementos <tag>p</tag> e também todos elementos com <strong>class="legal"</strong>',
    '<strong>a, p, div</strong> seleciona todos elementos <tag>a</tag>, <tag>p</tag> e <tag>div</tag>'
    ],
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
    doThis : "Selecione tudo!",
    selector : "*",
    selectorName:  "O seletor universal (*)",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Com <strong>*</strong> você pode selecionar todos os elementos (seletor universal)!',
    examples : [
      '<strong>p *</strong> selecione todos elemntos que estiverem dentro de elementos <tag>p</tag>.',
    ],
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
    doThis : "Selecione tudo dentro de pratos",
    selector : "prato *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine com o seletor universal",
    help : 'Esta regra acima seleciona tudo dentro de um elemento <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona todos elementos dentro de elementos<tag>p</tag>.',
      '<strong>ul.chique *</strong> seleciona todos elemento dentro de elementos com a classe <tag>ul class="chique"</tag>.'
    ],
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
    doThis : "Selecione todo tomate que estiver ao lado de um prato",
    selector : "prato + tomate",
    helpTitle: "Seleciona um elemento que está diretamente após um elemento",
    selectorName: "Seletor de Irmão Adjacente",
    syntax : "A + B",
    help : "Esta regra acima seleciona todos elementos <strong>B</strong>que sucedem elementos <strong>A</strong>. Elementos que sucedem outros são chamados de irmãos (siblings).",
    examples : [
      '<strong>p + .intro</strong> seleciona todos elementos com <strong>class="intro"</strong> que está diretamente após um elemento <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos elementos <tag>a</tag> que estádiretamente após uma <tag>div</tag>'
    ],
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
    selectorName: "General Sibling Selector",
    helpTitle: "Select elements that follows another element",
    syntax: "A ~ B",
    doThis : "Selecione os pepinos ao lado da caixa",
    selector : "caixa ~ pepino",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
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
    <prato>
      <pepino class="pequeno"/>
    </prato>
    `
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Selecione o tomate dentro do prato",
    selector : "prato > tomate",
    helpTitle: "Select direct children of an element",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
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
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Selecione a laranja no topo",
    selector : "prato :first-child",
    syntax: ":first-child",

    help : "You can Selecione a first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
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
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Selecione o tomate e o pepino nos pratos",
    selector : "prato :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
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
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Selecione a last element inside of another element",
    doThis : "Selecione os pequenos tomate e pepino",
    selector : ".pequeno:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
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
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Selecione a 3º prato",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <prato/>
    <prato/>
    <prato/>
    <prato id="chique"/>
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
