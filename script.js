const MOVIES = [
  {
    id: 1,
    title: "اصيب بنزيف ",
    year: 1965,
    genre: "دراما",
    rating: 8.4,
    runtime: 125,
    director: "حسن الامام",
    cast: [" حسين رياض", "محمود المليجي", "زبيدة ثروت", "عبد الحليم حافظ"],
    tagline:
      "حين يصبح الحب أغلى من الحياة نفسها، تتحول التضحية إلى أعظم دليل على الوفاء.",
    synopsis:
      "تدور أحداث الفيلم حول شاب وفتاة يجمعهما حب عميق، لكن القدر يضع علاقتهما أمام اختبار قاسٍ بعد إصابة البطلة بمرض خطير. وبين الأمل واليأس، يحاول كل منهما حماية الآخر وتحمل الألم بصمت، لتتحول قصة الحب إلى رحلة مليئة بالمشاعر والتضحية والوفاء.",
    colors: ["#7A4B2A", "#2E2013"],
    poster: "download (3).jpg",
  },
  {
    id: 2,
    title: "صغيرة على الحب",
    year: 1966,
    genre: "كوميدي",
    rating: 7.6,
    runtime: 120,
    director: " نيازي مصطفي ",
    cast: ["نادية لطفي", "يوسف وهبي", "رشدي أباظة", "سعاد حسني"],
    tagline:
      "بين البراءة والطموح، قد تقود كذبة صغيرة إلى سلسلة من المواقف التي لا تُنسى.",
    synopsis:
      "تدور أحداث الفيلم حول فتاة شابة تحلم بدخول عالم الفن، لكنها تضطر للتظاهر بأنها طفلة حتى تحصل على فرصة للعمل. ومع استمرار الخدعة، تجد نفسها في مواقف كوميدية معقدة، خاصة عندما تقع في الحب، فتتصاعد الأحداث بين المفارقات واللحظات الرومانسية والمواقف الطريفة.",
    colors: ["#1F4E5F", "#0D2530"],
    poster: "صغيرة على الحب - 1966.jpg",
  },
  {
    id: 3,
    title: "صراع في الوادي",
    year: 1954,
    genre: "دراما",
    rating: 8.1,
    runtime: 124,
    director: "يوسف شاهين",
    cast: ["زكي رستم", "فاتن حمامة", "عمر الشريف"],
    tagline:
      "حين يصطدم الحب بالنفوذ والطمع، تبدأ معركة لا ينتصر فيها إلا أصحاب المبادئ.",
    synopsis:
      "تدور أحداث الفيلم في إحدى قرى صعيد مصر، حيث يعود مهندس زراعي شاب بعد انتهاء دراسته ليعمل على تطوير الزراعة ومكافحة الأمراض التي تصيب المحاصيل. وخلال رحلته يقع في حب ابنة أحد كبار ملاك الأراضي، لكن علاقتهما تواجه معارضة شديدة بسبب الصراعات على النفوذ والمصالح، لتتصاعد الأحداث في إطار يجمع بين الرومانسية والدراما.",
    colors: ["#5B1A1A", "#1A0A0A"],
    poster: "صراع في الوادي - The blazing sun (1954).jpg",
  },
  {
    id: 4,
    title: "ايامنا الحلوة",
    year: 1955,
    genre: "رومانسي",
    rating: 7.2,
    runtime: 120,
    director: " حلمي حليم",
    cast: [" زبيده ثروت", " عمر الشريف", " فاتن حمامة ", "عبد الحليم حافظ"],
    tagline:
      "بين أحلام الشباب وألحان الحب، تُولد أجمل الذكريات التي لا يطويها الزمن.",
    synopsis:
      "تدور أحداث الفيلم حول ثلاثة أصدقاء تجمعهم الدراسة والطموح، ويحلم كل منهم بمستقبل أفضل. تتغير حياتهم عندما تدخل فتاة إلى عالمهم، فتتشابك العلاقات الإنسانية والعاطفية بينهم، ويواجه كل منهم تحديات الحب والعمل وتحقيق الأحلام، في إطار يجمع بين الرومانسية والدراما وتزينه الأغاني الشهيرة.",
    colors: ["#6B3E7A", "#26132E"],
    poster: "1955.jpg",
  },
  {
    id: 5,
    title: "في بيتنا رجل",
    year: 1961,
    genre: "دراما",
    rating: 8.4,
    runtime: 150,
    director: "هنري بركات",
    cast: ["عمر الشريف", "زبيدة ثروت", "رشدي أباظة"],
    tagline: "حين يصبح الوطن أغلى من الحياة، تبدأ رحلة التضحية.",
    synopsis:
      "بعد اغتيال أحد رموز الاحتلال، يلجأ شاب ثائر إلى منزل صديقه هاربًا من الشرطة، فتتغير حياة أفراد الأسرة مع تصاعد الخطر. وبين الخوف والواجب، يواجه الجميع اختبارات صعبة تكشف معاني الشجاعة والتضحية من أجل الوطن.",
    colors: ["#8A5A12", "#2B1B05"],
    poster: "1961.jpg",
  },
  {
    id: 6,
    title: "وانتهى الحب",
    year: 1974,
    genre: "رومانسي",
    rating: 7.3,
    runtime: 115,
    director: "محمد سلمان",
    cast: ["فريد الأطرش", "مديحة كامل", "عماد حمدي"],
    tagline: "قد ينتهي الحب، لكن تبقى الذكريات شاهدة على صدقه.",
    synopsis:
      "تدور أحداث الفيلم حول قصة حب تواجه العديد من العقبات والظروف القاسية، حيث يجد الحبيبان نفسيهما أمام قرارات مصيرية تختبر مشاعرهما وإخلاصهما. ومع تصاعد الأحداث، تتداخل التضحيات مع الألم في رحلة إنسانية مؤثرة.",
    colors: ["#B08D2E", "#332A0E"],
    poster: "1974.jpg",
  },
  {
    id: 7,
    title: "صراع في الميناء",
    year: 1956,
    genre: "دراما",
    rating: 7.5,
    runtime: 120,
    director: "يوسف شاهين",
    cast: ["عمر الشريف", "فاتن حمامة", "فريد شوقي"],
    tagline: "في الميناء تتصارع الأحلام والحب والطموح.",
    synopsis:
      "تدور أحداث الفيلم داخل أجواء أحد الموانئ المصرية، حيث تتشابك حياة بحار شاب مع فتاة بسيطة وسط صراعات العمل والنفوذ والمشاعر الإنسانية. ومع تصاعد الأحداث، يجد الجميع أنفسهم أمام اختبارات صعبة بين الحب والطموح والعدالة.",
    colors: ["#3A3A3A", "#111111"],
    poster: "sraa.jpg",
  },
  {
    id: 8,
    title: "سكة العاشقين",
    year: 1978,
    genre: "رومانسي",
    rating: 6.9,
    runtime: 110,
    director: "حسام الدين مصطفى",
    cast: ["محمود ياسين", "نجلاء فتحي", "عماد حمدي"],
    tagline: "على طريق الحب... لكل قلب حكاية.",
    synopsis:
      "تدور أحداث الفيلم حول قصة حب تنشأ وسط ظروف اجتماعية معقدة، حيث يواجه الحبيبان العديد من العقبات التي تهدد مستقبلهما. وبين الأمل واليأس، يسعى كل منهما للحفاظ على مشاعره في مواجهة قسوة الواقع.",
    colors: ["#1B2A4A", "#060A16"],
    poster: "1978.jpg",
  },
  {
    id: 9,
    title: "أذكياء لكن أغبياء",
    year: 1980,
    genre: "كوميدي",
    rating: 6.8,
    runtime: 105,
    director: "نيازي مصطفى",
    cast: ["عادل إمام", "سمير غانم", "يونس شلبي"],
    tagline: "الذكاء وحده لا يكفي عندما تقودك المواقف إلى الفوضى.",
    synopsis:
      "تدور أحداث الفيلم حول مجموعة من الشباب الذين يحاولون تحقيق الثراء السريع من خلال سلسلة من الخطط الذكية، لكن سوء الحظ وسوء التقدير يحولان كل خطوة إلى موقف كوميدي مليء بالمفارقات، لتتوالى الأحداث في إطار خفيف وممتع.",
    colors: ["#9C7A3E", "#2E2410"],
    poster: "1980.jpg",
  },
  {
    id: 10,
    title: "عفوًا أيها القانون",
    year: 1985,
    genre: "دراما",
    rating: 7.1,
    runtime: 110,
    director: "إيناس الدغيدي",
    cast: ["نجلاء فتحي", "فريد شوقي", "محمود عبد العزيز"],
    tagline: "حين يغيب العدل، يصبح البحث عن الحقيقة هو القضية.",
    synopsis:
      "تدور أحداث الفيلم حول امرأة تجد نفسها في مواجهة مع القانون بعد سلسلة من الأحداث التي تقلب حياتها رأسًا على عقب. وبين المحاكم والصراعات الإنسانية، تسعى لإثبات براءتها والدفاع عن حقها في مواجهة الظلم.",
    colors: ["#4A2E4E", "#180E1A"],
    poster: "1985.jpg",
  },
  {
    id: 11,
    title: "العفاريت",
    year: 1990,
    genre: "دراما",
    rating: 7.8,
    runtime: 120,
    director: "حسام الدين مصطفى",
    cast: ["عمرو دياب", "مديحة كامل", "نعيمة الصغير"],
    tagline: "وراء براءة الأطفال... عالم لا يعرف الرحمة.",
    synopsis:
      "تدور أحداث الفيلم حول طفل يتعرض للاختطاف ويجد نفسه داخل عصابة تستغل الأطفال في أعمال غير مشروعة. ومع تصاعد الأحداث، يحاول الهروب وكشف الحقيقة، في إطار درامي يسلط الضوء على معاناة أطفال الشوارع واستغلالهم.",
    colors: ["#7A4B2A", "#2E2013"],
    poster: "1990.jpg",
  },
  {
    id: 12,
    title: "إشاعة حب",
    year: 1960,
    genre: "كوميدي",
    rating: 8.3,
    runtime: 110,
    director: "فطين عبد الوهاب",
    cast: ["عمر الشريف", "سعاد حسني", "يوسف وهبي"],
    tagline: "إشاعة صغيرة قد تقلب الحياة رأسًا على عقب.",
    synopsis:
      "تدور أحداث الفيلم حول شاب خجول يقع في حب ابنة عمه، فيلجأ أفراد الأسرة إلى حيلة طريفة لإثارة غيرتها ودفعها للاهتمام به. لكن الإشاعة التي يختلقونها تكبر أكثر من المتوقع، فتقود الجميع إلى سلسلة من المواقف الكوميدية والمفارقات الممتعة.",
    colors: ["#1F4E5F", "#0D2530"],
    poster: "download (1).jpg",
  },
  {
    id: 13,
    title: "أفواه وأرانب",
    year: 1977,
    genre: "دراما",
    rating: 7.8,
    runtime: 120,
    director: "هنري بركات",
    cast: ["فاتن حمامة", "محمود ياسين", "فريد شوقي"],
    tagline: "الفقر قد يسرق الأحلام، لكنه لا ينتزع الكرامة.",
    synopsis:
      "تدور أحداث الفيلم حول فتاة تعيش وسط أسرة فقيرة تعاني من كثرة الأبناء وضيق المعيشة، فتسعى للبحث عن حياة أفضل بعيدًا عن الظروف القاسية. ومع مرور الوقت، تواجه تحديات تكشف الفارق بين المال والسعادة، في إطار درامي يعالج قضايا الأسرة والمجتمع.",
    colors: ["#5B1A1A", "#1A0A0A"],
    poster: "download (2).jpg",
  },
  {
    id: 14,
    title: "للرجال فقط",
    year: 1964,
    genre: "كوميدي",
    rating: 7.9,
    runtime: 110,
    director: "محمود ذو الفقار",
    cast: ["نادية لطفي", "سعاد حسني", "حسن يوسف"],
    tagline: "حين تتنكر الحقيقة... تبدأ المفارقات.",
    synopsis:
      "تدور أحداث الفيلم حول فتاتين حديثتي التخرج تضطران للتنكر في زي رجلين للحصول على فرصة عمل بأحد مواقع البترول في الصحراء، فتواجهان سلسلة من المواقف الكوميدية والمفارقات الطريفة، بينما تحاولان الحفاظ على سر هويتهما.",
    colors: ["#6B3E7A", "#26132E"],
    poster: "download (4).jpg",
  },
  {
    id: 15,
    title: "العار",
    year: 1982,
    genre: "دراما",
    rating: 8.3,
    runtime: 120,
    director: "علي عبد الخالق",
    cast: ["نور الشريف", "محمود عبد العزيز", "حسين فهمي"],
    tagline: "حين يصبح المال أغلى من المبادئ... يبدأ السقوط.",
    synopsis:
      "تدور أحداث الفيلم حول ثلاثة أشقاء يرثون شركة أدوية عن والدهم، لكنهم يكتشفون أن مصدر ثروة العائلة قائم على تجارة المخدرات. وبين إغراء المال وصراع الضمير، يجد كل منهم نفسه أمام قرار يحدد مصيره ومستقبل أسرته.",
    colors: ["#8A5A12", "#2B1B05"],
    poster: "download (5).jpg",
  },
  {
    id: 16,
    title: "كراكون في الشارع",
    year: 1986,
    genre: "كوميدي",
    rating: 7.6,
    runtime: 120,
    director: "علي عبد الخالق",
    cast: ["عادل إمام", "يسرا", "مصطفى متولي"],
    tagline: "عندما يضيق البيت... يصبح الشارع عنوانًا للحياة.",
    synopsis:
      "تدور أحداث الفيلم حول موظف بسيط يفقد شقته بسبب انهيار العقار، فيبدأ رحلة شاقة للبحث عن مسكن جديد وسط أزمات الإسكان والبيروقراطية. وخلال رحلته، يواجه العديد من المواقف الساخرة التي تكشف مشكلات المجتمع في إطار كوميدي يحمل رسائل إنسانية.",
    colors: ["#B08D2E", "#332A0E"],
    poster: "download (6).jpg",
  },
  {
    id: 17,
    title: "البيه البواب",
    year: 1987,
    genre: "كوميدي",
    rating: 8.1,
    runtime: 115,
    director: "حسن إبراهيم",
    cast: ["أحمد زكي", "صفية العمري", "رغدة"],
    tagline: "المنصب لا يصنع الإنسان... بل أخلاقه.",
    synopsis:
      "تدور أحداث الفيلم حول عبد السميع، البواب البسيط الذي ينتقل للعمل في إحدى العمارات الراقية بالقاهرة، فيواجه عالمًا مليئًا بالتناقضات والفساد. ومن خلال مواقفه اليومية، يكشف الفيلم الفوارق الطبقية والمشكلات الاجتماعية في إطار كوميدي ساخر.",
    colors: ["#3A3A3A", "#111111"],
    poster: "download (7).jpg",
  },
  {
    id: 18,
    title: "إمبراطورية م",
    year: 1972,
    genre: "دراما",
    rating: 7.9,
    runtime: 125,
    director: "حسين كمال",
    cast: ["فاتن حمامة", "أحمد مظهر", "هشام سليم"],
    tagline: "بين مسؤوليات الأم... وحقها في أن تعيش حياتها.",
    synopsis:
      "تدور أحداث الفيلم حول أم أرملة تكرس حياتها لتربية أبنائها، لكنها تجد نفسها أمام فرصة جديدة للحب، فتدخل في صراع بين واجباتها الأسرية ورغبتها في بدء حياة مختلفة. ويقدم الفيلم رؤية إنسانية مؤثرة عن التضحية والأسرة والاختيار.",
    colors: ["#1B2A4A", "#060A16"],
    poster: "download (8).jpg",
  },
  {
    id: 19,
    title: "أميرة حبي أنا",
    year: 1974,
    genre: "رومانسي",
    rating: 7.4,
    runtime: 115,
    director: "حسن الإمام",
    cast: ["سعاد حسني", "حسين فهمي", "عماد حمدي"],
    tagline: "الحب الحقيقي لا يعرف فرقًا بين الطبقات.",
    synopsis:
      "تدور أحداث الفيلم حول فتاة بسيطة تتغير حياتها بعد لقائها بشاب ثري، لتنشأ بينهما قصة حب تواجه العديد من العقبات الاجتماعية وسوء الفهم. وبين المشاعر الصادقة وضغوط الواقع، يخوض الحبيبان رحلة مليئة بالمواقف المؤثرة والرومانسية.",
    colors: ["#9C7A3E", "#2E2410"],
    poster: "download (9).jpg",
  },
  {
    id: 20,
    title: "إسماعيل يس في البوليس",
    year: 1956,
    genre: "كوميدي",
    rating: 7.5,
    runtime: 105,
    director: "فطين عبد الوهاب",
    cast: ["إسماعيل يس", "زهرة العلا", "رياض القصبجي"],
    tagline: "حين يتحول الخوف إلى شجاعة... تبدأ الضحكات.",
    synopsis:
      "تدور أحداث الفيلم حول شاب بسيط يجد نفسه يعمل في سلك الشرطة رغم طبيعته الخجولة، ليواجه سلسلة من المواقف الكوميدية والمطاردات الطريفة أثناء محاولته القبض على أحد المجرمين، فتتوالى المفارقات في إطار مليء بالضحك.",
    colors: ["#4A2E4E", "#180E1A"],
    poster: "download (10).jpg",
  },
  {
    id: 21,
    title: "شارع الحب",
    year: 1958,
    genre: "رومانسي",
    rating: 7.8,
    runtime: 125,
    director: "عز الدين ذو الفقار",
    cast: ["عبد الحليم حافظ", "صباح", "عبد السلام النابلسي"],
    tagline: "حين يجتمع الحب والموسيقى... تولد أجمل الحكايات.",
    synopsis:
      "تدور أحداث الفيلم حول شاب موهوب يعشق الغناء، يسعى لتحقيق حلمه رغم معارضة أسرته والظروف التي تواجهه. وبين النجاح الفني وقصة حب تنمو مع الأيام، يخوض رحلة مليئة بالمواقف الرومانسية والإنسانية والأغاني الخالدة.",
    colors: ["#7A4B2A", "#2E2013"],
    poster: "download (11).jpg",
  },
  {
    id: 22,
    title: "إسكندرية... ليه؟",
    year: 1979,
    genre: "دراما",
    rating: 7.9,
    runtime: 133,
    director: "يوسف شاهين",
    cast: ["محسن محيي الدين", "نجلاء فتحي", "أحمد زكي"],
    tagline: "مدينة تصنع الأحلام... وتختبر أصحابها.",
    synopsis:
      "تدور أحداث الفيلم في مدينة الإسكندرية خلال سنوات الحرب العالمية الثانية، حيث يحلم شاب شغوف بالسينما بالسفر إلى الخارج وتحقيق طموحه الفني. وبين أحداث الحرب وتقلبات الحياة والعلاقات الإنسانية، يرصد الفيلم رحلة البحث عن الهوية وتحقيق الأحلام.",
    colors: ["#1F4E5F", "#0D2530"],
    poster: "download (12).jpg",
  },
  {
    id: 23,
    title: "صراع في النيل",
    year: 1959,
    genre: "دراما",
    rating: 7.2,
    runtime: 115,
    director: "عاطف سالم",
    cast: ["رشدي أباظة", "عمر الشريف", "هند رستم"],
    tagline: "على ضفاف النيل... تتصارع المصالح وتُختبر المبادئ.",
    synopsis:
      "تدور أحداث الفيلم حول مجموعة من الشخصيات تتشابك مصائرها على ضفاف نهر النيل، حيث تتصاعد الخلافات بين الطموح والحب والنفوذ. ومع توالي الأحداث، يجد الجميع أنفسهم أمام اختيارات مصيرية تكشف حقيقة كل منهم في إطار درامي مشوق.",
    colors: ["#5B1A1A", "#1A0A0A"],
    poster: "download (13).jpg",
  },
  {
    id: 24,
    title: "جري الوحوش",
    year: 1987,
    genre: "دراما",
    rating: 8.3,
    runtime: 118,
    director: "علي عبد الخالق",
    cast: ["نور الشريف", "حسين فهمي", "محمود عبد العزيز"],
    tagline: "حين يتحول الطموح إلى هوس... يدفع الجميع الثمن.",
    synopsis:
      "تدور أحداث الفيلم حول رجل أعمال ثري يسعى لاستعادة شبابه من خلال تجربة طبية مثيرة للجدل، فيقنع صديقه وطبيبًا بالمشاركة فيها. ومع تطور الأحداث، تنكشف صراعات الطمع والضمير، ويطرح الفيلم تساؤلات عميقة حول الأخلاق وحدود العلم.",
    colors: ["#6B3E7A", "#26132E"],
    poster: "download (14).jpg",
  },
  {
    id: 25,
    title: "يوم من عمري",
    year: 1961,
    genre: "رومانسي",
    rating: 7.8,
    runtime: 120,
    director: "عاطف سالم",
    cast: ["عبد الحليم حافظ", "زبيدة ثروت", "عبد السلام النابلسي"],
    tagline: "قد يغيّر يوم واحد... حياةً بأكملها.",
    synopsis:
      "تدور أحداث الفيلم حول شاب يُفرج عنه من السجن بعد سنوات قضاها بسبب نضاله الوطني، ليبدأ رحلة جديدة مليئة بالأمل والحب. وبين محاولته استعادة حياته ووقوعه في قصة حب مؤثرة، يواجه تحديات تكشف قيمة الحرية والتضحية.",
    colors: ["#8A5A12", "#2B1B05"],
    poster: "download.jpg",
  },
  {
    id: 26,
    title: "باب الحديد",
    year: 1958,
    genre: "دراما",
    rating: 8.0,
    runtime: 117,
    director: "يوسف شاهين",
    cast: ["فريد شوقي", "هند رستم", "يوسف شاهين"],
    tagline: "في محطة مزدحمة... تتقاطع الأحلام والهواجس والمصائر.",
    synopsis:
      "تدور أحداث الفيلم داخل محطة مصر بالقاهرة، حيث يعيش بائع صحف بسيط حياة مليئة بالعزلة، قبل أن يقع في هوس بإحدى بائعات المشروبات. ومع تصاعد مشاعره المضطربة، تتشابك حياة العاملين في المحطة في دراما نفسية تكشف جوانب معقدة من النفس البشرية.",
    colors: ["#B08D2E", "#332A0E"],
    poster: "Estação Central de Cairo (باب الحديد_ Bab el hadid), 1958_.jpg",
  },
  {
    id: 27,
    title: "أيامنا الحلوة",
    year: 1955,
    genre: "رومانسي",
    rating: 8.0,
    runtime: 120,
    director: "حلمي حليم",
    cast: ["عبد الحليم حافظ", "فاتن حمامة", "عمر الشريف"],
    tagline: "حين تجتمع الأحلام والحب... تُصنع أجمل الذكريات.",
    synopsis:
      "تدور أحداث الفيلم حول ثلاثة أصدقاء تجمعهم الدراسة والطموح، وتتغير حياتهم بعد دخول فتاة إلى عالمهم، فتتشابك العلاقات بينهم في رحلة تمزج بين الحب والصداقة والسعي لتحقيق الأحلام، في إطار رومانسي تزينه الأغاني الخالدة.",
    colors: ["#3A3A3A", "#111111"],
    poster: "FILM AYAMNA EL HELWA.jpg",
  },
  {
    id: 28,
    title: "إسماعيل يس في الأسطول",
    year: 1957,
    genre: "كوميدي",
    rating: 7.6,
    runtime: 110,
    director: "فطين عبد الوهاب",
    cast: ["إسماعيل يس", "هند رستم", "رياض القصبجي"],
    tagline: "حتى في البحرية... الضحك له أوامر خاصة.",
    synopsis:
      "تدور أحداث الفيلم حول شاب بسيط يلتحق بالخدمة في القوات البحرية، ليجد نفسه وسط سلسلة من المواقف الكوميدية والمغامرات الطريفة. وبين التدريبات العسكرية وسوء التفاهم المتكرر، يحاول إثبات نفسه في إطار مليء بالضحك والمفارقات.",
    colors: ["#1B2A4A", "#060A16"],
    poster: "iss.jpg",
  },
  {
    id: 29,
    title: "الكيت كات",
    year: 1991,
    genre: "دراما",
    rating: 8.4,
    runtime: 105,
    director: "داود عبد السيد",
    cast: ["محمود عبد العزيز", "شريف منير", "أمينة رزق"],
    tagline: "قد يفقد الإنسان بصره... لكنه لا يفقد حلمه.",
    synopsis:
      "تدور أحداث الفيلم في حي الكيت كات بالقاهرة، حيث يعيش الشيخ حسني، الرجل الكفيف الذي يواجه الحياة بروح ساخرة وحب كبير للحياة. ومن خلال يومياته وعلاقاته مع أهل الحي، يقدم الفيلم صورة إنسانية مؤثرة عن الأحلام والحرية والبساطة وسط تحديات الواقع.",
    colors: ["#9C7A3E", "#2E2410"],
    poster:
      "Poster for the Egyptian Film El-kit Kat, by an unknown designer, 1991_.jpg",
  },
  {
    id: 30,
    title: "أبي فوق الشجرة",
    year: 1969,
    genre: "رومانسي",
    rating: 6.9,
    runtime: 150,
    director: "حسين كمال",
    cast: ["عبد الحليم حافظ", "نادية لطفي", "ميرفت أمين"],
    tagline: "بين الحب والإغراء... تتغير حياة شاب في لحظة.",
    synopsis:
      "تدور أحداث الفيلم حول شاب جامعي يقع في حب فتاة بسيطة، لكن سفره إلى الإسكندرية يضعه في عالم جديد مليء بالإغراءات، حيث يتعرف على راقصة تغير مجرى حياته. وبين الحب الحقيقي ونزوات الشباب، يواجه رحلة مليئة بالصراعات العاطفية والقرارات المصيرية.",
    colors: ["#4A2E4E", "#180E1A"],
    poster: "ابي فوق الشجرة.jpg",
  },
  {
    id: 31,
    title: "البيضة والحجر",
    year: 1990,
    genre: "دراما",
    rating: 8.5,
    runtime: 115,
    director: "علي عبد الخالق",
    cast: ["أحمد زكي", "معالي زايد", "ممدوح عبد العليم"],
    tagline: "حين يتحول الجهل إلى تجارة... يدفع المجتمع الثمن.",
    synopsis:
      "تدور أحداث الفيلم حول أستاذ فلسفة بسيط يعاني من تجاهل المجتمع، فيستغل أحد الدجالين علمه ليحوله إلى شخصية يدّعي امتلاكها قدرات خارقة. ومع ازدياد شهرته، يجد نفسه ممزقًا بين مبادئه وإغراءات الشهرة والمال، في نقد ساخر لانتشار الخرافة واستغلال البسطاء.",
    colors: ["#7A4B2A", "#2E2013"],
    poster: "أحمد زكي - البيضة والحجر.jpg",
  },
  {
    id: 32,
    title: "اذكريني",
    year: 1978,
    genre: "رومانسي",
    rating: 7.5,
    runtime: 118,
    director: "هنري بركات",
    cast: ["محمود ياسين", "نجلاء فتحي", "يوسف شعبان"],
    tagline: "بعض الذكريات لا تغيب... مهما فرّق الزمن بين القلوب.",
    synopsis:
      "تدور أحداث الفيلم حول قصة حب تواجه اختبارات قاسية بسبب الظروف الاجتماعية وسوء الفهم. وبين الفراق والحنين، يحاول الحبيبان تجاوز العقبات التي تعترض طريقهما، في رحلة رومانسية مليئة بالمشاعر والوفاء والأمل.",
    colors: ["#1F4E5F", "#0D2530"],
    poster: "أذكريني  نجلاء فتحي  محمود ياسين.jpg",
  },
  {
    id: 33,
    title: "الإمبراطور",
    year: 1990,
    genre: "دراما",
    rating: 7.8,
    runtime: 120,
    director: "طارق العريان",
    cast: ["أحمد زكي", "رغدة", "محمود حميدة"],
    tagline: "السلطة والثروة قد تصنعان إمبراطورًا... لكن لكل إمبراطورية نهاية.",
    synopsis:
      "تدور أحداث الفيلم حول شاب فقير تدفعه الظروف إلى عالم تجارة المخدرات، فيصعد بسرعة حتى يصبح من أكبر تجارها. ومع ازدياد نفوذه، يدخل في صراعات دامية مع منافسيه ورجال الشرطة، ليكتشف أن الطريق إلى القمة مليء بالمخاطر وأن السقوط قد يكون أقرب مما يتخيل.",
    colors: ["#5B1A1A", "#1A0A0A"],
    poster: "الامبراطور  احمد ذكي  رغدة.jpg",
  },
  {
    id: 34,
    title: "الهلفوت",
    year: 1985,
    genre: "كوميدي",
    rating: 8.0,
    runtime: 115,
    director: "سمير سيف",
    cast: ["عادل إمام", "إلهام شاهين", "سعيد صالح"],
    tagline: "قد يبدو الضعف هزيمة... لكنه أحيانًا بداية القوة.",
    synopsis:
      "تدور أحداث الفيلم حول عرفه، الرجل البسيط الذي يعمل في أعمال متفرقة ويتعرض للاستغلال والإهانة باستمرار. لكن حياته تنقلب رأسًا على عقب بعد سلسلة من الأحداث التي تمنحه نفوذًا غير متوقع، ليكتشف الجميع أن المظاهر قد تخدع، وأن القوة الحقيقية تكمن في الشخصية لا في المكانة.",
    colors: ["#6B3E7A", "#26132E"],
    poster: "الهلفوت.jpg",
  },
  {
    id: 35,
    title: "زوجة رجل مهم",
    year: 1988,
    genre: "دراما",
    rating: 8.4,
    runtime: 111,
    director: "محمد خان",
    cast: ["أحمد زكي", "ميرفت أمين", "زيزي مصطفى"],
    tagline: "حين يتحول النفوذ إلى سجن... يصبح الهروب حلمًا.",
    synopsis:
      "تدور أحداث الفيلم حول فتاة تتزوج من ضابط شرطة ذي نفوذ، لتكتشف تدريجيًا جانبه المتسلط والمضطرب نفسيًا. ومع تصاعد الأحداث، تتحول حياتها إلى صراع من أجل الحرية والكرامة، في فيلم يناقش السلطة والعلاقات الإنسانية بواقعية مؤثرة.",
    colors: ["#8A5A12", "#2B1B05"],
    poster: "زوجة رجل مهم  احمد ذكي  ميرفت امين.jpg",
  },
  {
    id: 38,
    title: "خلي بالك من عقلك",
    year: 1985,
    genre: "كوميدي",
    rating: 7.7,
    runtime: 110,
    director: "محمد عبد العزيز",
    cast: ["عادل إمام", "شيريهان", "سعيد صالح"],
    tagline: "بين الجنون والعقل... تختبئ الحقيقة.",
    synopsis:
      "تدور أحداث الفيلم حول شاب يدخل مستشفى للأمراض النفسية، فيكتشف عالمًا مليئًا بالمواقف الغريبة والشخصيات المختلفة. وبين المفارقات الكوميدية والرسائل الإنسانية، يكشف الفيلم بأسلوب ساخر العديد من القضايا الاجتماعية والنفسية.",
    colors: ["#B08D2E", "#332A0E"],
    poster: "R.jpg",
  },
];
// base paths for local assets (images are in ../img/, videos in ../video/)
const IMG_BASE = "/img/";
const VIDEO_BASE = "/video/";
function assetPath(filename, base) {
  if (!filename) return "";
  return encodeURI(base + filename);
}
function posterMarkup(m, big) {
  if (m.poster) {
    const src = assetPath(m.poster, IMG_BASE);
    return `<img src="${src}" alt="${m.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`;
  }
  return big ? sceneArt(m) : cardArt(m);
}

// shared subtle grain, unique filter id per instance
function grainDef(id) {
  return `<filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"/></filter>`;
}

// minimal line-icon per genre, drawn inside a 0..100 box, centered
function genreIcon(genre) {
  const stroke =
    'stroke="rgba(228,200,104,0.85)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  switch (genre) {
    case "دراما":
      return `<path d="M50 30 a9 9 0 1 0 0.01 0" ${stroke}/><path d="M35 78 C35 58 65 58 65 78" ${stroke}/><path d="M18 78 H82" ${stroke}/>`;
    case "رومانسي":
      return `<circle cx="40" cy="42" r="13" ${stroke}/><circle cx="60" cy="42" r="13" ${stroke}/><path d="M15 74 Q50 60 85 74" ${stroke}/>`;
    case "إثارة":
      return `<path d="M55 20 L35 55 L48 55 L42 82 L68 45 L54 45 Z" ${stroke}/>`;
    case "موسيقي":
      return `<circle cx="50" cy="50" r="24" ${stroke}/><circle cx="50" cy="50" r="15" ${stroke}/><circle cx="50" cy="50" r="4" fill="rgba(228,200,104,0.85)"/>`;
    case "أكشن":
      return `<path d="M25 35 L45 35 L30 55 L52 55 L20 90" ${stroke}/><path d="M55 30 L75 30 L60 50 L82 50" ${stroke}/>`;
    case "كوميدي":
      return `<circle cx="50" cy="48" r="26" ${stroke}/><circle cx="41" cy="42" r="2.4" fill="rgba(228,200,104,0.85)"/><circle cx="59" cy="42" r="2.4" fill="rgba(228,200,104,0.85)"/><path d="M36 56 Q50 68 64 56" ${stroke}/>`;
    case "غموض":
      return `<path d="M50 18 L82 82 L18 82 Z" ${stroke}/><path d="M50 18 L50 82 M18 82 L60 50 M82 82 L40 50" stroke="rgba(228,200,104,0.4)" stroke-width="1" fill="none"/><ellipse cx="50" cy="58" rx="12" ry="7" ${stroke}/>`;
    case "مغامرة":
      return `<path d="M15 78 L38 32 L52 58 L64 38 L85 78 Z" ${stroke}/><circle cx="50" cy="20" r="8" ${stroke}/><path d="M50 14 L50 26 M44 20 L56 20" stroke="rgba(228,200,104,0.7)" stroke-width="1"/>`;
    default:
      return `<circle cx="50" cy="50" r="20" ${stroke}/>`;
  }
}

// larger, two-layer version for the hero/modal "feature" art
function genreIconBig(genre) {
  const s1 =
    'stroke="rgba(228,200,104,0.9)" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const s2 =
    'stroke="rgba(228,200,104,0.25)" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  switch (genre) {
    case "دراما":
      return `<path d="M50 26 a10 10 0 1 0 0.01 0" ${s1}/><path d="M32 82 C32 56 68 56 68 82" ${s1}/><path d="M10 88 H90" ${s2}/><path d="M10 88 H90" transform="translate(0,4)" ${s2}/>`;
    case "رومانسي":
      return `<circle cx="38" cy="44" r="15" ${s1}/><circle cx="62" cy="44" r="15" ${s1}/><path d="M8 80 Q50 62 92 80" ${s1}/><path d="M8 88 Q50 74 92 88" ${s2}/>`;
    case "إثارة":
      return `<path d="M58 14 L30 58 L46 58 L38 92 L74 46 L56 46 Z" ${s1}/><circle cx="50" cy="52" r="38" ${s2}/>`;
    case "موسيقي":
      return `<circle cx="50" cy="50" r="30" ${s1}/><circle cx="50" cy="50" r="20" ${s2}/><circle cx="50" cy="50" r="10" ${s2}/><circle cx="50" cy="50" r="3.4" fill="rgba(228,200,104,0.9)"/><path d="M50 20 L74 8" ${s1}/>`;
    case "أكشن":
      return `<path d="M20 30 L46 30 L26 58 L54÷ 58 L14 96" ${s1}/><path d="M56 24 L82 24 L62 50 L88 50" ${s2}/>`;
    case "كوميدي":
      return `<circle cx="50" cy="48" r="30" ${s1}/><circle cx="39" cy="40" r="2.8" fill="rgba(228,200,104,0.9)"/><circle cx="61" cy="40" r="2.8" fill="rgba(228,200,104,0.9)"/><path d="M32 56 Q50 72 68 56" ${s1}/><circle cx="50" cy="48" r="38" ${s2}/>`;
    case "غموض":
      return `<path d="M50 12 L88 88 L12 88 Z" ${s1}/><path d="M50 12 L50 88 M12 88 L64 46 M88 88 L36 46" ${s2}/><ellipse cx="50" cy="60" rx="14" ry="8" ${s1}/>`;
    case "مغامرة":
      return `<path d="M8 86 L34 28 L50 58 L64 34 L92 86 Z" ${s1}/><circle cx="50" cy="16" r="9" ${s1}/><path d="M50 9 L50 23 M43 16 L57 16" stroke="rgba(228,200,104,0.75)" stroke-width="1"/><path d="M8 86 H92" ${s2}/>`;
    default:
      return `<circle cx="50" cy="50" r="26" ${s1}/>`;
  }
}

// minimal grid-card art: flat gradient field + centered line icon
function cardArt(m) {
  const [c1, c2] = m.colors;
  const gid = `cg${m.id}`;
  const nid = `cn${m.id}`;
  return `<svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      ${grainDef(nid)}
    </defs>
    <rect width="300" height="450" fill="url(#${gid})"/>
    <rect width="300" height="450" filter="url(#${nid})"/>
    <rect width="300" height="450" fill="rgba(0,0,0,0.08)"/>
    <g transform="translate(90,140) scale(1.2)">${genreIcon(m.genre)}</g>
  </svg>`;
}

// hero / modal "feature" art: split-tone ground, framed border,
// spotlight beams, dust and a larger two-layer genre motif —
// deliberately a different visual language from the grid cards
function sceneArt(m) {
  const [c1, c2] = m.colors;
  const w = 460,
    h = 690;
  const gid = `hg${m.id}`;
  const nid = `hn${m.id}`;
  const sid = `hs${m.id}`;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="55%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="#08080a"/>
      </linearGradient>
      <linearGradient id="${sid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(228,200,104,0.16)"/>
        <stop offset="100%" stop-color="rgba(228,200,104,0)"/>
      </linearGradient>
      ${grainDef(nid)}
    </defs>
    <rect width="${w}" height="${h}" fill="url(#${gid})"/>
    <!-- spotlight beams -->
    <polygon points="${w * 0.5},0 ${w * 0.18},${h * 0.62} ${w * 0.36},${h * 0.62}" fill="url(#${sid})"/>
    <polygon points="${w * 0.5},0 ${w * 0.64},${h * 0.62} ${w * 0.82},${h * 0.62}" fill="url(#${sid})"/>
    <!-- horizon -->
    <rect x="0" y="${h * 0.64}" width="${w}" height="1" fill="rgba(228,200,104,0.18)"/>
    <!-- genre motif, large -->
    <g transform="translate(${w * 0.5 - 130},${h * 0.32}) scale(2.6)">${genreIconBig(m.genre)}</g>
    <!-- grain + vignette -->
    <rect width="${w}" height="${h}" filter="url(#${nid})"/>
    <rect width="${w}" height="${h}" fill="rgba(0,0,0,0.08)"/>
    <radialGradient id="${sid}v" cx="50%" cy="38%" r="75%">
      <stop offset="55%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.55)"/>
    </radialGradient>
    <rect width="${w}" height="${h}" fill="url(#${sid}v)"/>
    <!-- ornamental frame -->
    <rect x="14" y="14" width="${w - 28}" height="${h - 28}" fill="none" stroke="rgba(228,200,104,0.55)" stroke-width="1.5"/>
    <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="none" stroke="rgba(228,200,104,0.22)" stroke-width="1"/>
    <path d="M14 34 V14 H34" fill="none" stroke="rgba(228,200,104,0.75)" stroke-width="1.5"/>
    <path d="M${w - 14} 34 V14 H${w - 34}" fill="none" stroke="rgba(228,200,104,0.75)" stroke-width="1.5"/>
    <path d="M14 ${h - 34} V${h - 14} H34" fill="none" stroke="rgba(228,200,104,0.75)" stroke-width="1.5"/>
    <path d="M${w - 14} ${h - 34} V${h - 14} H${w - 34}" fill="none" stroke="rgba(228,200,104,0.75)" stroke-width="1.5"/>
    <!-- marquee ribbon -->
    <rect x="${w / 2 - 78}" y="30" width="156" height="26" fill="rgba(8,8,9,0.55)" stroke="rgba(228,200,104,0.4)" stroke-width="1"/>
    <text x="${w / 2}" y="47" text-anchor="middle" fill="rgba(228,200,104,0.85)" font-family="Cairo, sans-serif" font-size="11" letter-spacing="2" font-weight="700">عرض مميّز</text>
  </svg>`;
}

let activeGenre = "الكل";
let searchTerm = "";
let sortBy = "default";
let showFavoritesOnly = false;
const favorites = new Set();
const HERO_VIDEO_SRC = assetPath(
  "ssstik.io_@swan_classics_1783628323029.mp4",
  VIDEO_BASE,
);

function heartIcon(filled) {
  return `<svg viewBox="0 0 24 24" width="15" height="15" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7.6-4.7-10.1-9.4C0.3 8 1.9 4 6 4c2.1 0 3.6 1.2 6 3.8C14.4 5.2 15.9 4 18 4c4.1 0 5.7 4 4.1 7.6C19.6 16.3 12 21 12 21z"/></svg>`;
}
function speakerIcon(muted) {
  return muted
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M23 9l-6 6M17 9l6 6"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5.5a9 9 0 0 1 0 13"/></svg>`;
}

function eyebrowIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5 L20 5 L20 19 L4 19 Z"/><path d="M8 5 L8 19 M16 5 L16 19" stroke-dasharray="2 2"/></svg>`;
}

function renderHero() {
  const m = MOVIES.find((movie) => movie.id === 7) || MOVIES[0];
  const [c1, c2] = m.colors;
  document.getElementById("hero").innerHTML = `
    <div class="hero fade-up" style="animation-delay:0.05s">
      <div class="hero-poster" style="background:linear-gradient(160deg, ${c1}, ${c2})">
        <video
          class="hero-video"
          id="heroVideo"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          aria-label="مقطع دعائي لفيلم ${m.title}"
        >
          <source src="${HERO_VIDEO_SRC}" type="video/mp4" />
        </video>
        <div class="hero-video-overlay"></div>
      </div>
      <div class="hero-info">
        <div class="hero-eyebrow">${eyebrowIcon()}  كان الأعلى تقييمًا في هذا الموسم</div>
        <h1 class="hero-title">${m.title}</h1>
        <div class="hero-meta">
          <span>${m.year}</span><span class="divider">·</span>
          <span>${m.genre}</span><span class="divider">·</span>
          <span>${m.runtime} دقيقة</span><span class="divider">·</span>
          <span style="color:var(--gold-soft); font-weight:700;">★ ${m.rating}</span>
        </div>
        <p class="hero-tagline">${m.tagline}</p>
        <div class="hero-actions">
          <button class="btn" onclick="openModal(${m.id})">عرض التفاصيل</button>
          <button class="fav-btn hero-fav ${favorites.has(m.id) ? "active" : ""}" data-id="${m.id}" onclick="toggleFavorite(${m.id})" aria-label="إضافة للمفضلة">${heartIcon(favorites.has(m.id))}</button>
          <div class="hero-director">إخراج <b>${m.director}</b></div>
        </div>
      </div>
    </div>`;
}

function toggleSiteSound() {
  const audio = document.getElementById("siteSound");
  const btn = document.getElementById("soundToggleBtn");
  if (!audio || !btn) return;
  if (audio.paused) {
    audio.play().catch(() => {});
    btn.classList.add("playing");
  } else {
    audio.pause();
    btn.classList.remove("playing");
  }
  const icon = btn.querySelector(".sound-icon");
  if (icon) {
    icon.outerHTML = speakerIcon(audio.paused).replace(
      "<svg ",
      '<svg class="sound-icon" ',
    );
  }
}

function renderStats() {
  const total = MOVIES.length;
  const genresCount = new Set(MOVIES.map((m) => m.genre)).size;
  const directorsCount = new Set(MOVIES.map((m) => m.director)).size;
  const avgRating = (MOVIES.reduce((s, m) => s + m.rating, 0) / total).toFixed(
    1,
  );
  document.getElementById("statsBar").innerHTML = `
    <div class="stat-item"><b>${total}</b><span>فيلم بالأرشيف</span></div>
    <div class="stat-item"><b>${genresCount}</b><span>تصنيف مختلف</span></div>
    <div class="stat-item"><b>${directorsCount}</b><span>مخرج</span></div>
    <div class="stat-item"><b>${avgRating}</b><span>متوسط التقييم</span></div>`;
}

function renderChips() {
  const genres = ["الكل", ...new Set(MOVIES.map((m) => m.genre))];
  const favChip = `<button class="chip fav-chip ${showFavoritesOnly ? "active" : ""}" onclick="toggleFavoritesOnly()">${heartIcon(showFavoritesOnly)} المفضلة${favorites.size ? ` (${favorites.size})` : ""}</button>`;
  const genreChips = genres
    .map(
      (g) =>
        `<button class="chip ${g === activeGenre ? "active" : ""}" onclick="setGenre('${g}')">${g}</button>`,
    )
    .join("");
  document.getElementById("genreChips").innerHTML = favChip + genreChips;
}

function setGenre(g) {
  activeGenre = g;
  renderChips();
  renderGrid();
}

function toggleFavoritesOnly() {
  showFavoritesOnly = !showFavoritesOnly;
  renderChips();
  renderGrid();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  updateFavoriteUI(id);
  // Only rebuild the grid if the "favorites only" filter is on,
  // since the item may need to appear/disappear from the list.
  if (showFavoritesOnly) renderGrid();
}

function updateFavoriteUI(id) {
  const active = favorites.has(id);
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach((btn) => {
    btn.classList.toggle("active", active);
    btn.innerHTML = btn.classList.contains("modal-fav")
      ? `${heartIcon(active)} <span>المفضلة</span>`
      : heartIcon(active);
  });
  const favChip = document.querySelector(".fav-chip");
  if (favChip) {
    favChip.innerHTML = `${heartIcon(showFavoritesOnly)} المفضلة${favorites.size ? ` (${favorites.size})` : ""}`;
  }
}

function setSort(v) {
  sortBy = v;
  renderGrid();
}

function renderGrid() {
  const filtered = MOVIES.filter((m) => {
    const matchGenre = activeGenre === "الكل" || m.genre === activeGenre;
    const q = searchTerm.trim();
    const matchSearch =
      !q ||
      m.title.includes(q) ||
      m.director.includes(q) ||
      m.cast.some((c) => c.includes(q));
    const matchFav = !showFavoritesOnly || favorites.has(m.id);
    return matchGenre && matchSearch && matchFav;
  });

  const sorted = [...filtered];
  switch (sortBy) {
    case "rating-desc":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "year-desc":
      sorted.sort((a, b) => b.year - a.year);
      break;
    case "year-asc":
      sorted.sort((a, b) => a.year - b.year);
      break;
    case "title-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title, "ar"));
      break;
  }

  const label = document.getElementById("gridLabel");
  const baseLabel = showFavoritesOnly
    ? "أفلامي المفضلة"
    : activeGenre === "الكل"
      ? "كل الأفلام"
      : `أفلام ${activeGenre}`;
  label.innerHTML =
    baseLabel + ` <span class="count">(${sorted.length})</span>`;

  const grid = document.getElementById("grid");
  if (sorted.length === 0) {
    grid.innerHTML = `<div class="empty">${showFavoritesOnly ? "لم تُضِف أي فيلم للمفضلة بعد." : "لا توجد أفلام مطابقة لبحثك. جرّب كلمة أخرى."}</div>`;
    return;
  }
  grid.innerHTML = sorted
    .map(
      (m, i) => `
    <div class="card" tabindex="0" role="button" style="animation-delay:${Math.min(i * 45, 360)}ms" onclick="openModal(${m.id})" onkeydown="if(event.key==='Enter')openModal(${m.id})">
      <div class="card-poster">
        ${posterMarkup(m, false)}
        <button class="fav-btn ${favorites.has(m.id) ? "active" : ""}" data-id="${m.id}" onclick="event.stopPropagation(); toggleFavorite(${m.id})" aria-label="إضافة للمفضلة">${heartIcon(favorites.has(m.id))}</button>
        <div class="card-medal"><b>${m.rating}</b><span>10/</span></div>
        <div class="card-scrim">
          <p class="card-title">${m.title}</p>
          <p class="card-year">${m.genre}<span class="dot"></span>${m.year}</p>
        </div>
      </div>
      <div class="card-footer">إخراج <b>${m.director}</b></div>
    </div>
  `,
    )
    .join("");
}

function openModal(id) {
  const m = MOVIES.find((x) => x.id === id);
  document.getElementById("modal").innerHTML = `
    <button class="close-btn" onclick="closeModal()" aria-label="إغلاق">✕</button>
    <div class="modal-top">
      <div class="modal-poster">${posterMarkup(m, true)}</div>
      <div class="modal-info">
        <h2 class="modal-title">${m.title}</h2>
        <div class="modal-meta">
          <span class="badge">${m.year}</span>
          <span class="badge">${m.genre}</span>
          <span class="badge">${m.runtime} دقيقة</span>
          <button class="fav-btn modal-fav ${favorites.has(m.id) ? "active" : ""}" data-id="${m.id}" onclick="toggleFavorite(${m.id})" aria-label="إضافة للمفضلة">${heartIcon(favorites.has(m.id))} <span>المفضلة</span></button>
        </div>
        <div class="rating-line">★ ${m.rating} / 10</div>
        <p class="block-text" style="margin-top:16px;">${m.tagline}</p>
      </div>
    </div>
    <div class="modal-body">
      <div class="block-label">القصة</div>
      <p class="block-text">${m.synopsis}</p>
      <div class="block-label">الإخراج</div>
      <p class="block-text">${m.director}</p>
      <div class="block-label">فريق التمثيل</div>
      <div class="cast-list">${m.cast.map((c) => `<span class="cast-pill">${c}</span>`).join("")}</div>
    </div>
  `;
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("overlay").addEventListener("click", (e) => {
  if (e.target.id === "overlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderGrid();
});
document.getElementById("sortSelect").addEventListener("change", (e) => {
  setSort(e.target.value);
});
window.addEventListener("scroll", () => {
  const btn = document.getElementById("toTop");
  if (!btn) return;
  btn.classList.toggle("visible", window.scrollY > 500);
});

renderHero();
renderStats();
renderChips();
renderGrid();
