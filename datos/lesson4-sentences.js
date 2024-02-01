let listaCompletaDeDatos = [
    { "id": 1, "word": "你在做什么？", "pinyin": "Nǐ zài zuò shénme?", "meaning": "What are you doing?" },
    { "id": 2, "word": "我在学习汉语。", "pinyin": "Wǒ zài xuéxí hànyǔ.", "meaning": "I'm studying chinese." },
    { "id": 3, "word": "我再买东西。", "pinyin": "Wǒ zài mǎi dōngxī.", "meaning": "I'm shopping." },
    { "id": 4, "word": "我喜欢看书。", "pinyin": "Wǒ xǐhuān kànshū.", "meaning": "I like reading books." },
    { "id": 5, "word": "我在喝咖啡。", "pinyin": "Wǒ zài hē kāfēi.", "meaning": "I'm drinking coffee." },
    { "id": 6, "word": "我喜欢喝水。", "pinyin": "Wǒ xǐhuān hē shuǐ.", "meaning": "I like drinking water." },
    { "id": 7, "word": "你喜欢喝水吗？", "pinyin": "Nǐ xǐhuān hē shuǐ ma?", "meaning": "Do you like drinking water?" },
    { "id": 8, "word": "你去做什么？", "pinyin": "Nǐ qù zuò shénme?", "meaning": "What are you going to do?" },
    { "id": 9, "word": "我去上厕所。", "pinyin": "Wǒ qù shàng cèsuǒ.", "meaning": "I'm going to the bathroom." },
    { "id": 10, "word": "我去买咖啡。", "pinyin": "Wǒ qù mǎi kāfēi.", "meaning": "I'm going to buy coffee." },
    { "id": 11, "word": "你做了什么？", "pinyin": "Nǐ zuòle shénme?", "meaning": "What did you do?" },
    { "id": 12, "word": "我买了东西。", "pinyin": "Wǒ mǎile dōngxī.", "meaning": "I bought something." },
    { "id": 13, "word": "我看了书。", "pinyin": "Wǒ kànle shū.", "meaning": "I read a book. (past tense)" },
    { "id": 14, "word": "我吃了饭。", "pinyin": "Wǒ chīle fàn.", "meaning": "I ate food." },
    { "id": 15, "word": "我喝了咖啡。", "pinyin": "Wǒ hēle kāfēi.", "meaning": "I drank coffee." },
    { "id": 16, "word": "我上了厕所。", "pinyin": "Wǒ shàngle cèsuǒ.", "meaning": "I used the toilet." },
    { "id": 17, "word": "我工作了。", "pinyin": "Wǒ gōngzuòle.", "meaning": "I worked." },
    { "id": 18, "word": "我学习了。", "pinyin": "Wǒ xuéxíle.", "meaning": "I studied." },
    { "id": 19, "word": "我学习了中文。", "pinyin": "Wǒ xuéxíle zhōngwén.", "meaning": "I studied chinese." },
    { "id": 20, "word": "我睡了觉。", "pinyin": "Wǒ shuìle jué.", "meaning": "I slept." },
    { "id": 21, "word": "我回家。", "pinyin": "Wǒ huí jiā.", "meaning": "I'm going (back) home." },
    { "id": 22, "word": "我去吃饭。", "pinyin": "Wǒ qù chīfàn.", "meaning": "I'm going to eat." },
    { "id": 23, "word": "我回家吃饭。", "pinyin": "Wǒ huí jiā chīfàn.", "meaning": "I'm going home to eat." },
    { "id": 24, "word": "他来学校。", "pinyin": "Tā lái xuéxiào.", "meaning": "He's comming to school." },
    { "id": 25, "word": "他来做什么？", "pinyin": "Tā lái zuò shénme?", "meaning": "What is he going for?" },
    { "id": 26, "word": "他来学校学习。", "pinyin": "Tā lái xuéxiào xuéxí.", "meaning": "He's going to school to study." },
    { "id": 27, "word": "晚上你在家做什么？", "pinyin": "Wǎnshàng nǐ zàijiā zuò shénme?", "meaning": "What do you do at home on the evenings?" },
    { "id": 28, "word": "现在我在厕所吃饭。", "pinyin": "Xiànzài wǒ zài cèsuǒ chīfàn.", "meaning": "Right now i'm eating at the toilet." },
    { "id": 29, "word": "明天我去公司工作。", "pinyin": "Míngtiān wǒ qù gōngsī gōngzuò.", "meaning": "Tomorrow I'll go to the company to work." },
    { "id": 30, "word": "昨天老师来了学校工作。", "pinyin": "Zuótiān lǎoshī láile xuéxiào gōngzuò.", "meaning": "Yesterday, the teacher came to school to work." },
    { "id": 31, "word": "昨天老师没有来学校工作。", "pinyin": "Zuótiān lǎoshī méiyǒu lái xuéxiào gōngzuò.", "meaning": "Yesterday, the teacher didn't come to school to work." },
    { "id": 32, "word": "明天早上我要去咖啡店喝咖啡。", "pinyin": "Míngtiān zǎoshang wǒ yào qù kāfēi diàn hē kāfēi.", "meaning": "Tomorrow morning I will go drink coffee at the coffee shop." },
    { "id": 33, "word": "明天晚上我不在家学习。", "pinyin": "Míngtiān wǎnshàng wǒ bù zàijiā xuéxí.", "meaning": "Tomorrow night I wont study at home." },
    { "id": 34, "word": "今天你去哪里吃饭了？", "pinyin": "Jīntiān nǐ qù nǎlǐ chīfànle?", "meaning": "Where did you go to eat today?" },
    { "id": 35, "word": "昨天你吃东西了吗？吃了什么？", "pinyin": "Zuótiān nǐ chī dōngxīle ma? Chīle shénme?", "meaning": "Did you eat stuff yesterday? what did you eat?" },
    { "id": 36, "word": "昨天我没有吃东西。", "pinyin": "Zuótiān wǒ méiyǒu chī dōngxī.", "meaning": "I didn't eat anything yesterday." }
];