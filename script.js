const questions = [
    {
        question: "汉语句子的语序",
        chinese: "汉语没有严格意义上的形态变化，语序是汉语的主要语法手段。\n汉语的句子由主语、谓语、宾语、定语、状语、补语等六种成分组成。语序一般是主语在前，谓语在后。谓语的主要成分为动词，宾语是动词的连带成分，状语修饰动词或形容词，补语跟在动词或形容词后边，补充说明动词或形容词，定语放在名词性主语和宾语的前边，起修饰作用。",
        pinyin: "Hànyǔ jùzi de yǔxù  \nHànyǔ méiyǒu yángé yìyì shàng de xíngtài biànhuà, yǔxù shì hànyǔ de zhǔyào yǔfǎ shǒuduàn.  \nHànyǔ de jùzi yóu zhǔyǔ, wèiyǔ, bīnyǔ, dìngyǔ, zhuàngyǔ, bǔyǔ děng liù zhǒng chéngfèn zǔchéng.  \nYǔxù yībān shì zhǔyǔ zài qián, wèiyǔ zài hòu. Wèiyǔ de zhǔyào chéngfèn wéi dòngcí, bīnyǔ shì dòngcí de liándài chéngfèn, zhuàngyǔ xiūshì dòngcí huò xíngróngcí, bǔyǔ gēn zài dòngcí huò xíngróngcí hòubiān, bǔchōng shuōmíng dòngcí huò xíngróngcí, dìngyǔ fàng zài míngcíxìng zhǔyǔ hé bīnyǔ de qiánbiān, qǐ xiūshì zuòyòng.",
        russian: "Порядок слов в китайском предложении  \nВ китайском языке нет строгих грамматических изменений формы слов (флективности), поэтому порядок слов — основной способ выражения грамматики.  \nКитайское предложение состоит из шести видов членов: подлежащее, сказуемое, дополнение, определение, обстоятельство и комплемент.  \nОбычный порядок слов: сначала подлежащее, затем сказуемое. Основная часть сказуемого — глагол, дополнение тесно связано с глаголом, обстоятельство уточняет глагол или прилагательное, комплемент следует за глаголом или прилагательным и дополняет их значение, определение стоит перед подлежащим или дополнением и выполняет описательную функцию."
    },
    {
        question: "状语",
        chinese: "动词和形容词前面的修饰成分叫状语。副词、形容词等都可以作状语。",
        pinyin: "Zhuàngyǔ  \nDòngcí hé xíngróngcí qiánmiàn de xiūshì chéngfèn jiào zhuàngyǔ. Fùcí, xíngróngcí děng dōu kěyǐ zuò zhuàngyǔ.",
        russian: "Обстоятельство  \nЧлены, которые стоят перед глаголами и прилагательными и выполняют функцию их уточнения, называются обстоятельствами.  \nНаречия, прилагательные и другие слова могут выступать в роли обстоятельств."
    },
    {
        question: "定语",
        chinese: "名词或名词性词组的修饰语叫定语。定语的作用是修饰和限定。定语在词组中放在名词前边，在句子中要放在句子主语或宾语前边。",
        pinyin: "Dìngyǔ  \nMíngcí huò míngcíxìng cízǔ de xiūshìyǔ jiào dìngyǔ. Dìngyǔ de zuòyòng shì xiūshì hé xiàndìng. Dìngyǔ zài cízǔ zhōng fàng zài míngcí qiánbiān, zài jùzi zhōng yào fàng zài jùzi zhǔyǔ huò bīnyǔ qiánbiān.",
        russian: "Определение  \nСлова или словосочетания, которые уточняют или описывают существительное, называются определением.  \nОпределение служит для описания и ограничения.  \nВ словосочетаниях определение стоит перед существительным, а в предложениях — перед подлежащим или дополнением."
    },
    {
        question: "介词“在”",
        chinese: "介词“在”加上处所词放在谓语动词前面，表示动作行为发生的地点。",
        pinyin: "Jiècí \"zài\"  \nJiècí \"zài\" jiā shàng chùsuǒcí fàng zài wèiyǔ dòngcí qiánmiàn, biǎoshì dòngzuò xíngwéi fāshēng de dìdiǎn.",
        russian: "Предлог \"在\"  \nПредлог \"在\" с существительным, обозначающим место, ставится перед сказуемым глаголом и указывает на место, где происходит действие."
    },
    {
        question: "介词“给”",
        chinese: "介词“给”表示动作行为的对象或受益者。",
        pinyin: "Jiècí \"gěi\"  \nJiècí \"gěi\" biǎoshì dòngzuò xíngwéi de duìxiàng huò shòuyì zhě.",
        russian: "Предлог \"给\"  \nПредлог \"给\" указывает на объект или получателя действия, то есть того, кому направлено действие, или того, кто от него получает пользу."
    },




    {
        question: "副词“也”和“都”",
        chinese: "副词“也”和“都”放在动词或形容词前边，在句中作状语。",
        pinyin: "Fùcí \"yě\" hé \"dōu\"  \nFùcí \"yě\" hé \"dōu\" fàng zài dòngcí huò xíngróngcí qiánbiān, zài jù zhōng zuò zhuàngyǔ.",
        russian: "Наречия \"也\" и \"都\"  \nНаречия \"也\" и \"都\" ставятся перед глаголами или прилагательными и в предложении выполняют функцию обстоятельства."
    },
    {
        question: "疑问代词",
        chinese: "用疑问代词“谁”、“什么”、“哪”、“哪儿（哪里）”、“怎么”、“怎么样”、“几”、“多少”等来询问某一具体事物或数量。\n除了用“陈述句+吗”提问的疑问句外，别的问句句尾不能再加“吗”。",
        pinyin: "Yíwèn dàicí  \nYòng yíwèn dàicí \"shéi\", \"shénme\", \"nǎ\", \"nǎr (nǎlǐ)\", \"zěnme\", \"zěnmeyàng\", \"jǐ\", \"duōshǎo\" děng lái xúnwèn mǒu yī jùtǐ shìwù huò shùliàng.  \nChúle yòng \"chénshù jù + ma\" tíwèn de yíwèn jù wài, bié de wènjù jùwěi bùnéng zài jiā \"ma\".",
        russian: "Вопросительные местоимения  \nВопросительные местоимения — это слова, с помощью которых задают вопросы о конкретных вещах или количестве.  \nПримеры: \"谁\" (кто), \"什么\" (что), \"哪\" (какой/какая/какое), \"哪儿/哪里\" (где), \"怎么\" (как), \"怎么样\" (каков), \"几\" (сколько, для небольших чисел), \"多少\" (сколько, для больших чисел).  \nКроме вопросов, образованных по схеме \"утвердительное предложение + 吗\", в остальных вопросительных предложениях частица \"吗\" в конце не ставится."
    },
    {
        question: "数量词组",
        chinese: "汉语里数量词作名词的定语，表达事物的数量。每种事物都有相应的计量单位（量词）。\n例如：四件毛衣、一本书、十斤苹果；",
        pinyin: "Shùliàng cízǔ  \nHànyǔ lǐ shùliàngcí zuò míngcí de dìngyǔ, biǎodá shìwù de shùliàng. Měi zhǒng shìwù dōu yǒu xiāngyìng de jìliàng dānwèi (liàngcí).  \nLìrú: sì jiàn máoyī, yī běn shū, shí jīn píngguǒ.",
        russian: "Словосочетания с количественными числительными  \nВ китайском языке количественные числительные (число + счётное слово) выполняют роль определения к существительному и выражают количество предметов.  \nКаждый вид предметов сопровождается своим счётным словом.  \nПримеры:  \n- 四件毛衣 — четыре свитера  \n- 一本书 — одна книга  \n- 十斤苹果 — десять цзиней яблок"
    },
    {
        question: "量词“些”、“二”、“两”",
        chinese: "量词“些”表示不定的数量，常用在“一”、“哪”、“这”、“那”等词后边。量词“些”只和数词“一”连用，不能和别的数词结合。\n“二”和“两”都表示“2”但用法不同。",
        pinyin: "Liàngcí \"xiē\", \"èr\", \"liǎng\"  \nLiàngcí \"xiē\" biǎoshì bùdìng de shùliàng, cháng yòng zài \"yī\", \"nǎ\", \"zhè\", \"nà\" děng cí hòubiān. Liàngcí \"xiē\" zhǐ hé shùcí \"yī\" liányòng, bùnéng hé bié de shùcí jiéhé.  \n\"èr\" hé \"liǎng\" dōu biǎoshì \"2\" dàn yòngfǎ bùtóng.",
        russian: "Счётные слова \"些\", \"二\" и \"两\"  \n- \"些\" указывает на неопределённое количество и обычно используется после слов \"一\" (один), \"哪\" (какой), \"这\" (этот), \"那\" (тот).  \n- \"些\" сочетается только с числительным \"一\" и не может использоваться с другими числами.  \n- \"二\" и \"两\" оба означают \"2\", но употребляются в разных ситуациях."
    },
    {
        question: "结构助词“的”",
        chinese: "结构助词“的”要放在定语后边，是定语的形式标志。\n名词或代词作定语，表示限定和修饰所有、所属关系时，要加“的”。\n例如：我的书、我的老师……\n形容词词组（很+形容词）作定语时，定语后要加“的”，例如：\n很好的同学、很好的老师、很旧的词典……\n有时候，定语与中心语之间不用结构助词“的”，例如：\n男同学、中文书……",
        pinyin: "Jiégòu zhùcí \"de\"  \nJiégòu zhùcí \"de\" yào fàng zài dìngyǔ hòubiān, shì dìngyǔ de xíngshì biāozhì.  \nMíngcí huò dàicí zuò dìngyǔ, biǎoshì xiàndìng hé xiūshì suǒyǒu, suǒshǔ guānxì shí, yào jiā \"de\".  \nLìrú: wǒ de shū, wǒ de lǎoshī...  \nXíngróngcí cízǔ (hěn + xíngróngcí) zuò dìngyǔ shí, dìngyǔ hòu yào jiā \"de\", lìrú:  \nhěn hǎo de tóngxué, hěn hǎo de lǎoshī, hěn jiù de cídiǎn...  \nYǒu shíhòu, dìngyǔ yǔ zhōngxīn yǔ zhījiān bùyòng jiégòu zhùcí \"de\", lìrú:  \nnán tóngxué, zhōngwén shū...",
        russian: "Структурная частица \"的\"  \nЧастица \"的\" ставится после определения и является его грамматическим показателем.  \nЕсли существительное или местоимение выполняет роль определения и выражает принадлежность (чей-то/чья-то/чьё-то), нужно добавить \"的\".  \nПримеры:  \n- 我的书 — моя книга  \n- 我的老师 — мой учитель  \nКогда в роли определения выступает словосочетание с прилагательным (очень + прилагательное), также добавляется \"的\":  \n- 很好的同学 — очень хороший одноклассник  \n- 很旧的词典 — очень старый словарь  \nОднако в некоторых случаях частица \"的\" опускается, например:  \n- 男同学 — одноклассник-мальчик  \n- 中文书 — книга по китайскому языку"
    },



    {
        question: "“的”字词组",
        chinese: "“的”字词组是由“的”字附在名词、代词、形容词、动词等实词或词组后边组成的，其作用相当于名词，可以充当名词能充当的句子成分。",
        pinyin: "\"De\" zì cízǔ  \n\"De\" zì cízǔ shì yóu \"de\" zì fù zài míngcí, dàicí, xíngróngcí, dòngcí děng shící huò cízǔ hòubiān zǔchéng de, qí zuòyòng xiāngdāng yú míngcí, kěyǐ chōngdāng míngcí néng chōngdāng de jùzi chéngfèn.",
        russian: "Словосочетания с частицей \"的\"  \nСловосочетания с \"的\" образуются, когда к существительным, местоимениям, прилагательным или глаголам добавляется частица \"的\". Такие сочетания выполняют функцию существительных и могут быть любым членом предложения, как и обычные существительные."
    },
    {
        question: "选择问句：……还是……？",
        chinese: "估计答案有两种以上的可能性对用选择问句提问。",
        pinyin: "Xuǎnzé wènjù: … háishì …?  \nGūjì dá'àn yǒu liǎng zhǒng yǐshàng de kěnéngxìng duìyòng xuǎnzé wènjù tíwèn.",
        russian: "Альтернативные вопросы: …还是…？  \nКогда предполагается два или более варианта ответа, используется вопросительная конструкция \"…还是…？\"."
    },
    {
        question: "主谓谓语句",
        chinese: "主谓词组作谓语，说明或描写主语的句子叫主语谓语句。",
        pinyin: "Zhǔwèi wèiyǔ jù  \nZhǔwèi cízǔ zuò wèiyǔ, shuōmíng huò miáoxiě zhǔyǔ de jùzi jiào zhǔyǔ wèiyǔ jù.",
        russian: "Предложения с именным сказуемым  \nЕсли в роли сказуемого выступает именная группа (подлежащее + именная фраза), такое предложение называется предложением с именным сказуемым.  \nПример:  \n- 他学生 — Он студент."
    },
    {
        question: "动词谓语句",
        chinese: "动词作谓语主要成份的句子叫动词谓语句。",
        pinyin: "Dòngcí wèiyǔ jù  \nDòngcí zuò wèiyǔ zhǔyào chéngfèn de jùzi jiào dòngcí wèiyǔ jù.",
        russian: "Предложения с глагольным сказуемым  \nКогда в роли сказуемого выступает глагол, такое предложение называется предложением с глагольным сказуемым.  \nПример:  \n- 他吃饭 — Он ест."
    },
    {
        question: "形容词谓语句",
        chinese: "形容词作谓语常用来对事物进行描述和评价。\n否定式：“不”+形容词。\n这种句子的主语与谓语之间不加“是”。\n形容词前面一般要带副词，如不带副词句子的意思将不再具有描述功能而带有比较的意味。",
        pinyin: "Xíngróngcí wèiyǔ jù  \nXíngróngcí zuò wèiyǔ cháng yòng lái duì shìwù jìnxíng miáoshù hé píngjià.  \nFǒudìng shì: \"bù\" + xíngróngcí.  \nZhè zhǒng jùzi de zhǔyǔ yǔ wèiyǔ zhījiān bù jiā \"shì\".  \nXíngróngcí qiánmiàn yībān yào dài fùcí, rú bù dài fùcí jùzi de yìsi jiāng bù zài jùyǒu miáoshù gōngnéng ér dài yǒu bǐjiào de yìwèi.",
        russian: "Предложения с прилагательным сказуемым  \nПрилагательные в роли сказуемого используются для описания и оценки предметов.  \nОтрицательная форма: \"不\" + прилагательное.  \nВ таких предложениях между подлежащим и сказуемым не используется \"是\".  \nОбычно перед прилагательным стоит наречие, иначе без наречия смысл становится сравнительным.  \nПримеры:  \n- 他很高 — Он очень высокий.  \n- 他不忙 — Он не занят."
    },


    {
        question: "正反问句",
        chinese: "把谓语主要成分的肯定式与否定式并列起来即构成正反问句。例如：\n你忙不忙？\n他是不是老？\n他是老师不是？",
        pinyin: "Zhèngfǎ wènjù  \nBǎ wèiyǔ zhǔyào chéngfèn de kěndìng shì yǔ fǒudìng shì bìngliè qǐlái jí gòuchéng zhèngfǎ wènjù.  \nLìrú:  \nNǐ máng bù máng?  \nTā shì bù shì lǎo?  \nTā shì lǎoshī bù shì?",
        russian: "Альтернативные вопросы (вопросы с выбором)  \nЕсли положительная и отрицательная формы сказуемого ставятся рядом, получается альтернативный вопрос.  \nПримеры:  \n- 你忙不忙？ — Ты занят или нет?  \n- 他是不是老？ — Он старый или нет?  \n- 他是老师不是？ — Он учитель или нет?"
    },
    {
        question: "怎么问……吗？",
        chinese: "在陈述句句尾加上表示疑问的语气助词“吗”，构成汉语的是非问句。",
        pinyin: "Zěnme wèn … ma?  \nZài chénshù jù jùwěi jiā shàng biǎoshì yíwèn de yǔqì zhùcí \"ma\", gòuchéng hànyǔ de shìfēi wènjù.",
        russian: "Как задать вопрос с \"吗\"?  \nДобавление частицы \"吗\" в конце утвердительного предложения превращает его в общий вопрос.  \nПример:  \n- 你是学生吗？ — Ты студент?"
    },
];

const questionButton = document.getElementById('questionButton');
const questionDisplay = document.getElementById('questionDisplay');
const chineseAnswer = document.getElementById('chineseAnswer');
const pinyinAnswer = document.getElementById('pinyinAnswer');
const russianAnswer = document.getElementById('russianAnswer');
const questionCheckboxes = document.getElementById('questionCheckboxes');

// Создаем чекбоксы для каждого вопроса
questions.forEach((q, index) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true; // По умолчанию все вопросы включены
    checkbox.dataset.index = index; // Сохраняем индекс вопроса
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(q.question));
    questionCheckboxes.appendChild(label);
});

questionButton.addEventListener('click', () => {
    // Получаем индексы включенных вопросов
    const enabledQuestions = Array.from(document.querySelectorAll('#questionCheckboxes input[type="checkbox"]:checked'))
        .map(checkbox => parseInt(checkbox.dataset.index));

    if (enabledQuestions.length === 0) {
        alert("Нет включенных вопросов!");
        return;
    }

    // Выбираем случайный вопрос из включенных
    const randomIndex = enabledQuestions[Math.floor(Math.random() * enabledQuestions.length)];
    const selectedQuestion = questions[randomIndex];

    // Отображаем вопрос
    questionDisplay.textContent = selectedQuestion.question;
    chineseAnswer.textContent = "Нажмите, чтобы увидеть ответ на китайском";
    pinyinAnswer.textContent = "Нажмите, чтобы увидеть ответ на пиньинь";
    russianAnswer.textContent = "Нажмите, чтобы увидеть ответ на русском";

    // Обработчики для отображения ответов
    chineseAnswer.addEventListener('click', () => {
        chineseAnswer.textContent = selectedQuestion.chinese;
    });

    pinyinAnswer.addEventListener('click', () => {
        pinyinAnswer.textContent = selectedQuestion.pinyin;
    });

    russianAnswer.addEventListener('click', () => {
        russianAnswer.textContent = selectedQuestion.russian;
    });
});