import React, { Fragment } from 'react'
import Header from '../AllBars/Header'
import Footer from '../AllBars/Footer'
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton'

export default function AWRChild() {


    const body ={
        direction: 'rtl',
        margin: 2,
        fontSize: 'var(--bs-body-font-size)',
        fontWeight: 'var(--bs-body-font-weight)',
        lineHeight: 'var(--bs-body-line-height)',
        textAlign: 'var(--bs-body-text-align)',
        backgroundColor: 'var(--bs-body-bg)',
        WebkitTextSizeAdjust: '100%',
        WebkitTapHighlightColor: 'transparent',
        marginTop: '5%',
}

  return (
    <Fragment>
    <Header/>
    <div  style={body}>
      <div className="headN">
        <header><h1>صحة الطفل</h1></header>
      </div>
      <div className="containerN">
        <div className="homeN">
          <ul>
            <li><a href="#20">مراحل نمو الطفل.</a></li>
            <br />
            <li><a href="#21">صحةُ الأطفال ونماؤُهم .</a></li>
            <br />
            <li><a href="#22">تغذية الاطفال.</a></li>
            <br />
            <li><a href="#23">الصحة النفسية لدى الأطفال.</a></li>
            <br />
            <li><a href="#24">سلامة الاطفال.</a></li>
            <br />
            <li><a href="#25">صحة أسنان الأطفال.</a></li>
          </ul>
          <img src="img/صحة الطفل.jpeg" alt />
        </div>
        <hr />
        <div className="contentN">
          <div id={20}>
            <h3><b>مراحل نمو الطفل-:</b></h3>
            <p>
              مراحل نمو الطفل (بالانجليزية: Drug Development Stages) هي التغيرات
              البيولوجية والنفسية والعاطفية التي تحدث عند الطفل منذ الولادة وحتى
              نهاية فترة المراهقة، حيث يتقدم الفرد في العمر ويستقل بذاته دون
              الاعتماد على الآخرين، كما ويمتلك اللبنات الأساسية التي تمكنه من
              اتخاذ القرارات الصحيحة التي تتماشى مع محيط بيئته وعادات وتقاليد
              والديه أو المجتمع.
            </p>
            <h3><b>مراحل نمو حديث الولادة (من 0 إلى 4 أسابيع) :</b></h3>
            <p>
              يقوم الطفل حديث الولادة بحركات تلقائية استجابة للمؤثرات الخارجية في
              هذه المرحلة، ويستطيع المولود الجديد رؤية الأشياء القريبة من عينيه
              مثل وجوه والديه، والتعرف على بعض الروائح، وتحريك رأسه من جانب إلى
              آخر، والابتسامة والصراخ للإشارة إلى احتياجاته.
            </p>
            <h3>نصائح وارشادات للتعامل مع مرحلة الطفل حديث الولادة:</h3>
            <p>
              يجب عدم التعامل مع الطفل في هذه المرحلة فقط من خلال احتياجاته مثل
              وقت الرضاعة وتغير الحفاضات؛ بل على الوالدين محاولة استغلال قدرات
              الطفل الفطرية، ومنها:
            </p>
            <ul>
              <li>الرؤية:</li>
              <p>
                حيث يمكن للوالدين مساعدة الطفل على تطوير قدراته البصرية من خلال
                محاولة جذب انتباهه لتحريك عينيه عن طريق تحريك الأشياء من حوله في
                الاتجاهات المختلفة.
              </p>
              <li>السمع:</li>
              <p>
                يستطيع الأطفال الاستماع إلى الأصوات في مراحل مبكرة قبل الولادة،
                لذلك سيكون للحديث معهم أو الغناء بصوت منخفض أثراً على تنمية
                قدراتهم السمعية.
              </p>
              <li>اللمس:</li>
              <p>حيث سيؤدي إلى تطور قدرة الطفل الحسية والعاطفية.</p>
            </ul>
            <h3><b>مراحل نمو الرضيع (من عمر 4 أسابيع إلى السنة) :</b></h3>
            <p>
              في هذه المرحلة، يظهر الرضع قدرات تنموية جديدة. فعلى سبيل المثال:
              الطفل الذي يبلغ من العمر ثلاثة إلى ستة أشهر قادر على التحكم في حركات
              رأسه واللعب بيديه معاً، وقد يكون أيضاً قادراً على الجلوس دون دعم،
              والاستجابة للنداء على اسمه والثرثرة بين ستة وتسعة أشهر من العمر.
            </p>
            <p>
              وبين تسعة واثني عشر شهراً يستطيع الطفل الزحف والوقوف مع الدعم
              والتقاط الأشياء باستخدام إصبع السبابة والإبهام.
            </p>
            <h3><b>مراحل نمو الطفل الصغير (من 1 إلى 3 سنوات) :</b></h3>
            <p>
              الأطفال الصغار هم الذين بين عمر سنة وثلاث سنوات. في هذا العمر، يظهر
              الأطفال سلوكاً روتينياً، مثل روتين وقت النوم، مما يمنحهم الشعور
              بالثقة والراحة.
            </p>
            <p>
              وعلى الرغم من أنّ الأطفال الصغار في هذا العمر بحاجة إلى الدعم
              والمساعدة، ولكن يمكنهم اكتساب المهارات التالية:
            </p>
            <ul>
              <li>المشي بدون مساعدة.</li>
              <li>صعود الدرج.</li>
              <li>القفز من مكان لآخر.</li>
              <li>استخدام قلم تلوين.</li>
              <li>رسم الأشكال الهندسية.</li>
              <li>بناء برج من كتلتين.</li>
              <li>اتباع التوجيهات البسيطة.</li>
              <li>استخدام جمل قصيرة.</li>
            </ul>
            <p>
              في هذه المرحلة وتحديداً في عمر السنتين، سيختبر الطفل حدود قدراته
              الحركية النامية. قد يخفق الطفل في الوصول أو تحقيق أهدافه مما يشعره
              بالإحباط أو الغضب، لذلك يجب على والديه مراقبته مراقبة حثيثة للتدخل
              في الوقت المناسب، بما يساعد الطفل على تجنب السلوكيات السلبية.
            </p>
            <h3><b>مراحل نمو الطفل قبل المدرسة (من 4 إلى 6 سنوات) :</b></h3>
            <p>
              تكون مرحلة ما قبل المدرسة بين سن ثلاث وخمس سنوات، وتتميز هذه المرحلة
              من نمو الطفل بزيادة القدرة على اكتساب المهارات الحركية الدقيقة.
            </p>
            <p>
              يمكن للطفل في مرحلة ما قبل المدرسة إلقاء كرة فوق رأسه، أو القفز، أو
              الوقوف على قدم واحدة لمدة 10 ثوانٍ أو أكثر، أو رسم شخص بملامح،
              والاهتمام باحتياجات المرحاض، وارتداء الملابس بنفسه، ويمكنه أيضاً
              إجراء محادثات طويلة.
            </p>
            <h3>نصائح وارشادات لمرحلة ما قبل المدرسة:</h3>
            <ul>
              <li>
                يجب تعزيز نمو الطفل من خلال تدريب الوالدين، حيث يلعب الآباء دوراً
                كبيراً في حياة الطفل من حيث التنشئة الاجتماعية والتنمية.
              </li>
              <li>
                يمكن أن يؤدي وجود كلا الوالدين مع الطفل إلى زيادة ثبات حياة الطفل،
                وبالتالي تشجيع النمو الصحي.
              </li>
              <li>
                كما أن هناك عامل آخر مؤثر في تطور الطفل هو جودة الرعاية، حيث تقدم
                برامج رعاية الطفل فرصة حاسمة لتعزيز تنمية الطفل.
              </li>
            </ul>
            <h3><b>مراحل نمو الطفل في سن المدرسة (من 6 إلى 11 سنة) </b></h3>
            <p>
              مرحلة سن المدرسة تتراوح ما بين 6 و12 سنة. يتميز الأطفال في هذه
              المرحلة بكونهم أكثر قدرة واستقلالية وتحملاً للمسؤولية.
            </p>
            <p>
              تكون لدى الطفل في مرحلة سن المدرسة مهارات حركية أكبر، ويبدأ في تطوير
              الخصائص الجنسية الثانوية. كما وتصبح العلاقات بين الأقران مهمة هنا
              وعادة ما تكون مع أفراد من نفس الجنس.
            </p>
            <h3>نصائح وارشادات للتعامل مع مرحلة المدرسة:</h3>
            <p>
              لأنّ النمو الأمثل للأطفال أمر حيوي بالنسبة للمجتمع ككل، لذا من المهم
              فهم التنمية الاجتماعية والمعرفية والعاطفية والتعليمية للأطفال. وقد
              أدت زيادة البحوث والاهتمام بهذا المجال إلى نظريات واستراتيجيات
              جديدة، مع إيلاء اهتمام خاص للممارسة التي تعزز التنمية داخل النظام
              المدرسي.
            </p>
            <h3><b>مراحل نمو الطفل في مرحلة المراهقة (من سن 12 إلى 19) :</b></h3>
            <p>
              خلال سنوات المراهقة، تحدث التغيرات الجسدية، والعقلية، والمعرفية،
              والجنسية. عادة تتقدم البنات في النمو ويصبحن ناضجات جسدياً في حين أنّ
              الأولاد ما زالوا في مرحلة النضج. يطور المراهقون هويتهم وآرائهم،
              وتكون لديهم مخاوف حول مظهرهم.
            </p>
            <p>
              قد تحدث اضطرابات الأكل في هذا الوقت، ويطور المراهقون اهتماماً بأفراد
              الجنس الآخر ويقضون وقتاً أطول مع أصدقائهم ويقل الوقت مع والديهم،
              كإشارة على الاستقلالية والاعتماد على النفس.
            </p>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/2O4bcgOgwdk?si=xCfm1JsiCC6edarj" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <br />
          <hr />
          <div id={21}>
            <h3><b>صحةُ الأطفال ونماؤُهم-:</b></h3>
            <h3>
              ما هو الأسلوب المتبع في الرعاية من أجل النماء في التدبير المتكامل
              لصحة الطفل؟
            </h3>
            <p>
              الأسلوب المتبع هو أسلوب الاستنصاح؛ وقد جاء اختبار الأسلوب بعد مراجعة
              لثلاثة أساليب لدعم نماء الطفل
            </p>
            <ul>
              <li>مراقبة ترقي الطفل على معالم النماء.</li>
              <li>التحري عن تأخر النماء.</li>
              <li>استنصاح العائلات حول كيفية دعم نماء أطفالهم.</li>
            </ul>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/gBT2-fJkykI?si=qM7-wPJ5C0-oac0E" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <br />
          </div>
          <hr />
          <div id={22}>
            <h3><b>تغذية الاطفال-:</b></h3>
            <p>
              تعتمد تغذية الأطفال على أفكار التغذية نفسها للبالغين. فكل شخص يحتاج
              إلى المكونات ذاتها مثل الفيتامينات والمعادن والكربوهيدرات
              والبروتينات والدهون. وهي ما يطلق عليه العناصر المغذية. ولكن الأطفال
              يحتاجون إلى كميات مختلفة من عناصر مغذية معينة في مراحلهم العمرية
              المختلفة.
            </p>
            <p>
              يراعي النمط الغذائي الأفضل لنمو الطفل وتطوره عمر الطفل ومستوى نشاطه
              وغير ذلك من الخصائص. تعرَّف على هذه الإرشادات الأساسية لتغذية
              الأطفال بناءً على أحدث إصدارات الإرشادات الغذائية للأمريكيين.
            </p>
            <p>
              تعتبر الأطعمة المليئة بالعناصر المغذية -وتحتوي على كمية قليلة من
              السكر أو الدهون المشبعة أو الملح المُضاف، أو لا تحتوي على أي منها-
              أطعمة غنية بالعناصر المغذية. ويساعد التركيز على الأطعمة الغنية
              بالعناصر المغذية الأطفالَ على الحصول على العناصر المغذية التي
              يحتاجون إليها وفي الوقت ذاته تقليل إجمالي السعرات الحرارية.
            </p>
            <p>ينبغي الحرص على تناول هذه الأطعمة الغنية بالعناصر المغذية مثل:</p>
            <ul>
              <li>
                البروتين. احرص على اختيار المأكولات البحرية واللحوم الخالية من
                الدهون والدجاج والبيض والبقوليات والبازلاء ومنتجات الصويا
                والمكسرات غير المملحة والحبوب.
              </li>
              <li>
                الفاكهة. شجِّع طفلك على تناول مجموعة متنوعة من الفاكهة الطازجة أو
                المعلبة أو المثلجة أو المجففة. ابحث عن الفواكه المعلبة المكتوب
                عليها خفيفة السكر أو معبأة في عصير من نوعها نفسه. ويعني ذلك أن
                كمية السكر المُضافة قليلة. ضع في حسبانك أن ربع كوب من الفاكهة
                المجففة يعادل كوبًا من النوع نفسه من الفاكهة الطازجة.
              </li>
              <li>
                الخضراوات. قدم إلى طفلك أنواعًا مختلفة من الخضراوات الطازجة أو
                المعلبة أو المجمدة أو المجففة. واختر البازلاء أو البقوليات إلى
                جانب الخضراوات الملونة كل أسبوع. وعند انتقاء الخضراوات المعلبة أو
                المجمدة، ابحث عن خيارات منخفضة الصوديوم.
              </li>
              <li>
                الحبوب. اختر الحبوب الكاملة مثل الخبز أو المعكرونة المصنوع من
                القمح الكامل أو دقيق الشوفان أو الفشار أو الكينوا أو الأرز البني
                أو البري.
              </li>
              <li>
                الحليب ومشتقاته. شجِّع طفلك على تناول مشتقات الحليب -مثل الحليب
                واللبن والجبن- منزوعة الدسم أو منخفضة الدسم. وتندرج مشروبات الصويا
                كذلك ضمن مشتقات الحليب.
              </li>
            </ul>
            <h3>استهدف خفض السعرات الحرارية التي يتلقاها طفلك من:</h3>
            <ul>
              <li>
                السكر المُضاف. لا تعتبر السكريات الطبيعية مثل تلك الموجودة في
                الفاكهة والحليب سكريات مُضافة. لكن من أمثلة السكريات المُضافة
                السكر البني ومواد التحلية المستخرجة من الذرة وشراب الذرة وعسل
                النحل. فتحقق من ملصقات القيم الغذائية والمكونات لتتجنب السكر
                المضاف. اختر حبوب الإفطار التي تحتوي على أقل نسبة من السكريات
                المُضافة. وتجنب المشروبات الغازية والمشروبات الأخرى التي تحتوي على
                سكريات مُضافة. وقلل كذلك كميات العصير. أما إذا كان طفلك يفضل تناول
                العصائر، فتأكد من أنه عصير طبيعي بنسبة 100% دون سكريات مُضافة.
              </li>
              <li>
                الدهون المشبعة. توجد الدهون المشبعة بشكل أساسي في الأطعمة حيوانية
                المصدر، مثل اللحوم الحمراء والنقانق والدواجن والزبد ومشتقات الحليب
                الأخرى كاملة الدسم. ومن المصادر الشائعة للدهون المشبعة أيضًا
                البيتزا والشطائر والبرغر والبوريتو. وكذلك تندرج الحلويات مثل الكيك
                والآيس كريم ضمن المصادر الشائعة للدهون المشبعة. ينبغي البحث عند
                الطهي عن طرق للاستغناء عن الدهون المشبعة واستخدام الزيوت النباتية
                وزيوت المكسرات التي تزود الجسم بالأحماض الدهنية الأساسية وفيتامين
                E.
              </li>
              <li>
                الملح. يتناول معظم الأطفال داخل الولايات المتحدة كميات مفرطة من
                الملح ضمن أنظمتهم الغذائية اليومية. يُعرف الملح أيضًا بالصوديوم.
                يمكن أن يوجد الملح في الشطائر، إذ يحتوي الخبز واللحم والتوابل
                وإضافات التزيين والنكهات على الصوديوم. وتحتوي الأطعمة المعالجة مثل
                البيتزا وأطباق المكرونة والحساء غالبًا على كميات كبيرة من الملح.
                شجع أطفالك على تناول وجبات خفيفة من الفواكه والخضراوات بدلاً من
                شرائح البطاطس والكوكيز. تحقق من ملصقات الأغذية وانتقِ المنتجات
                منخفضة الصوديوم.
              </li>
            </ul>
            <p>
              إذا كانت لديك أسئلة بشأن تغذية الأطفال أو مخاوف معينة بشأن النظام
              الغذائي لطفلك، فتحدث مع طبيب طفلك أو اختصاصي نظم غذائية مسجل.
            </p>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/OTs6jt1TbXw?si=93svKczSFm8qgUl-" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <br />
          </div>
          <hr />
          <div id={23}>
            <h3><b>الصحة النفسية لدى الأطفال-:</b></h3>
            <p>
              يكون الاهتمام بالأطفال ونموهم السليم، وصحتهم الجسدية على رأس أولويات
              الوالدين، لكن ذلك لا يكفي إذا كان الهدف هو توفير حياة سعيدة،
              ومستقرة، ومليئة بالنجاح لطفلهم، حيث تعتبر الصحة النفسية الجيدة مفتاح
              النمو الصحي، ولا تقل أهميتها عن الصحة البدنية، فهي الطريقة التي يفكر
              بها الأطفال، وتتحكم في شعورهم تجاه العالم من حولهم، ونظرتهم لأنفسهم،
              ولها دور كبير في كيفية تعامل الأطفال مع ضغوط الحياة وتحدياتها، كما
              أن سلامتها تساعدهم على تطوير مهاراتهم الاجتماعية، والسلوكية التي
              تنعكس في حياتهم حتى بعد سن الطفولة، فلذلك يجب معرفة أهمية الصحة
              النفسية للطفل والتأكد من سلامتها.
            </p>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/EupXgHRmCBk?si=RR4Ubgqtm85cggit" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /><br />
            <h3>ما أهمية الصحة النفسية للطفل؟</h3>
            <p>
              &nbsp;التمتع بالصحة النفسية الجيدة يعتبر من أهم أسباب النمو الصحي
              والإتزان لدى جميع الأطفال، وسلامتهم النفسية هي ما يحتاجونه لبناء
              علاقات جيدة مع الآخرين، ويكون لها الدور الأكبر في قدرتهم على التعامل
              مع التحديات التي تواجههم، وتتبين أهميتها في بعض الجوانب نذكر منها:
            </p>
            <ul>
              <li>تشعرهم بالرضا تجاه أنفسهم، وتزيد من الثقة بالنفس.</li>
              <li>تمكنهم من الاستمتاع بحياتهم، وتقلل من الطاقة السلبية.</li>
              <li>تساعدهم على التعلم، وتنمي حس الإبداع لديهم.</li>
              <li>تقوي روابطهم الأسرية، وتبني علاقاتهم بشكل سليم.</li>
              <li>تحسن طريقة تعاملهم مع المشاعر الحزينة، وتقلل من التوتر.</li>
              <li>تعزز قدرتهم على التعافي من الأوقات الصعبة، واسترجاع ذاتهم.</li>
              <li>
                تزيد من حبهم لتجربة أشياء جديدة، وتزيد من قدرتهم على فهم ما يجري
                حولهم.
              </li>
            </ul>
            <h3>طرق تعزيز الصحة النفسية للطفل:</h3>
            <p>
              نظراً لأهمية الصحة النفسية عند الأطفال، ينصح الوالدين بالقيام ببعض
              الأمور المهمة التي من شأنها تعزيزها، والحفاظ عليها ومن أهمها:
            </p>
            <ul>
              <li>
                إظهار الحب لطفلك، واخباره أنك ستبقى بجانبه دائماً، يمكن أيضاً
                إظهار ذلك من خلال لغة الجسد مثل الابتسام له، أو معانقته.
              </li>
              <li>
                استخدام أساليب إيجابية لتوجيه سلوك طفلك، كالثناء عليه عند التصرف
                بشكل جيد، والتقليل من الانتقادات السلبية
              </li>
              <li>
                تخصيص وقت للتحدث مع طفلك، إذ يوجد فوائد كثيرة للاستماع إلى طفلك
                والحديث معه، فهو يعزز الروابط في ما بينكم ويجعلك أقرب إليه.
              </li>
              <li>
                القيام بالأنشطة الخارجية مع طفلك، فذلك يساعد الطفل على اكتشاف
                الأمور وفهمها بطريقة آمنة.&nbsp;
              </li>
              <li>
                حل المشاكل بطريقة إيجابية، والتعامل مع الخلاف بينك وبين طفلك
                بعقلانية.
              </li>
              <li>
                شجع طفلك على التواصل مع الآخرين، فهذا يمنح طفلك إحساساً بمكانته في
                العالم ويساعده على تعلم كيفية التواصل بشكل أفضل.
              </li>
            </ul>
            <h3>علامات وجود مشاكل نفسية لدى الأطفال:</h3>
            <p>
              تحديد الأمراض النفسية عند الأطفال يعتبر صعباً إلى حد ما، لأن أعراضه
              تتشابه مع سلوكيات تحدث بشكل طبيعي خلال فترة نموهم مثل الخجل، ونوبات
              الغضب، لكنها تصبح علامات لوجود خلل إذا استمرت في الحدوث بشكل متزايد،
              أو عندما تبدأ بالتأثير على حياة الطفل، يتم تشخيص الاضطرابات النفسية
              عند الأطفال بناء على أعراض، وتغيرات في سلوكهم يجب الانتباه لها نذكر
              منها:
            </p>
            <ul>
              <li>تغيرات في التفكير وتشمل:</li>
              <ul>
                <li>
                  لوم أنفسهم على أشياء خارجة عن إرادتهم، ونعت أنفسهم بصفات سيئة.
                </li>
                <li>مواجهة صعوبة في التركيز.</li>
                <li>كثرة الأفكار السلبية.</li>
                <li>التراجع في الأداء المدرسي.</li>
                <li>الشعور باليأس والعجز، أو الوحدة والرفض.</li>
              </ul>
              <li>تغيرات في السلوك وتشمل:</li>
              <ul>
                <li>الرغبة في العزلة، والبقاء وحيداً.</li>
                <li>
                  عدم التحكم بالمشاعر، والبكاء بسهولة ولأسباب لا تستدعي ذلك.
                </li>
                <li>
                  عدم الاهتمام بالرياضة، أو الألعاب التي يستمتع بها الأطفال.
                </li>
                <li>المبالغة في ردود الأفعال، والإصابة بنوبات الغضب المتكررة.</li>
                <li>صعوبة في الانسجام مع الأطفال الاّخرين.</li>
              </ul>
              <h3>تغيرات فيزيائية وتشمل:</h3>
              <ul>
                <li>
                  الشعور بالألم بشكل عام، وألم البطن المتكرر، مع الإحساس بالتعب
                  طوال الوقت.
                </li>
                <li>إضطرابات النوم، أو الإصابة بالأرق.</li>
                <li>
                  الانفعالات الزائدة، أو العادات السلبية مثل قضم الأظافر، أو مص
                  الإبهام.
                </li>
                <li>
                  الإصابة بالصداع النفسي، الذي قد يمنعهم من القيام ببعض الأنشطة
                  اليومية.
                </li>
              </ul>
            </ul>
            <p>
              في حال أنك لاحظت واحداً، أو أكثر من هذه التغييرات لا يعني ذلك أن
              طفلك لديه مشكلة نفسية لذلك يجب المتابعة والتأكد مع طبيب مختص.
            </p>
            <h3>عوامل تؤثر على الصحة النفسية عند الأطفال&nbsp;:</h3>
            <p>
              يعاني طفل من بين كل خمسة أطفال حول العالم من مشاكل نفسية، مما يتطلب
              متابعة أكثر للأطفال للتأكد من سلامتهم، لذلك يجب الاطمئنان بشكل دوري
              عن وضع طفلك في المدرسة، وعن طبيعة علاقته بأصدقائه، ومتابعة تصرفاته
              في المنزل بشكل مستمر، فهناك عدة أسباب لحدوث الاضطرابات النفسية التي
              يمكن أن تصيب الأطفال بما في ذلك:
            </p>
            <ul>
              <li>
                العوامل الوراثية: تنتشر الاضطرابات النفسية في العديد من العائلات،
                فقد تنتقل هذه الاضطرابات من الآباء إلى أطفالهم من خلال الجينات، او
                تزيد من قابليتهم للإصابة بهذا النوع من المشاكل.
              </li>
              <li>
                حدوث خلل في الدماغ: كما هو الحال عند البالغين، فإن العديد من
                الاضطرابات النفسية عند الأطفال ترتبط بحدوث خلل لوظائف في مناطق
                معينة من الدماغ تتحكم في التفكير، والسلوك.
              </li>
              <li>
                &nbsp;إصابات الرأس: أحياناً يمكن أن يؤدي التعرض لضربات شديدة على الرأس
                إلى حدوث تغيرات في الحالة المزاجية والشخصية، التي تنعكس لاحقاً على
                الصحة النفسية.
              </li>
              <li>
                الصدمة النفسية: من الممكن أن تنتج بعض المشاكل النفسية بسبب حدوث
                صدمات نفسية، مثل الإساءة الجسدية، أو الجنسية، أو العاطفية الشديدة،
                أو خسارة أمر مهم في وقت مبكر من العمر، مثل فقدان أحد الوالدين.
              </li>
              <li>
                البيئة المحيطة بالطفل: يمكن أن تؤدي الظروف الصعبة المحيطة بالطفل،
                والأحداث المؤلمة التي يمر بها إلى حدوث اضطرابات نفسية لديه، وخاصة
                اذا كان معرض للإصابة بهذا النوع من الأمراض.
              </li>
            </ul>
            <p>
              يمكن مساعدة الأطفال بطرق عدة لتجاوز المشاكل النفسية، لكن يجب أولاً
              تحديد المشكلة بشكل دقيق، وذلك للتمكن من التعامل مع حالة طفلك بالشكل
              الأمثل، إذا استمرت أحد العلامات، أو التصرفات لفترة طويلة، أو كان
              لديك مخاوف تجاه سلامة الطفل النفسية، فلا تتردد في طلب المساعدة
              الطبية، لأن بعض المشاكل النفسية من الممكن أن تدفع الأطفال إلى إيذاء
              أنفسهم، أو التسبب في إلحاق الضرر بمن حولهم.
            </p>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/h_nz6aQ20U8?si=lC6zYrHP-9qM4x3L" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <br />
          </div>
          <hr />
          <div id={24}>
            <h3><b>​​​​​سلامة الأطفال-:</b></h3>
            <h3>سلامة الطفل في السيارة:</h3>
            <ul>
              <li>أهمية مقعد الطفل في السيارة:</li>
              <p>
                تسبب الحوادث المرورية وفيات الكثير من الأطفال كل عام، فقد ازدادت
                الحوادث منذ عام 2015 وقد يعود ذلك لعدة أسباب (مثل تشتت السائق)،
                حيث يصعب منع حدوثها إذا كان السائق يستخدم الأجهزة الذكية أثناء
                القيادة، حتى وإن كانت قيادة الشخص سليمة فإن ذلك لا يعني أن
                السائقين الآخرين كذلك.
              </p>
              <p>
                إن التزام الطفل بالجلوس في المقاعد الخلفية، واستخدام المقعد المخصص
                له في السيارة والمناسب لعمره وكذلك تركيبه بشكل صحيح يساعد على
                حمايته، ويقلل من احتمالية إصابته، ويمنع حدوث الإصابات الخطيرة عند
                حصول الحوادث المرورية، حيث أن الأطفال هم أول ضحايا هذه الحوادث.
              </p>
              <li>إرشادات عند اختياره:</li>
              <ul>
                <li>
                  لا يوجد ما يسمى "أفضل" أو "أكفأ" مقعد، فجميعها تعتمد على عمر
                  وحجم الطفل، وكذلك التركيب الصحيح والاستخدام بشكل مناسب.
                </li>
                <li>ارتفاع سعر المقعد لا يعني بالضرورة أنه الأفضل.</li>
                <li>
                  ينصح بأن تكون البطانة داعمة للرأس؛ لضمان راحة الطفل خاصة أثناء
                  السفر.
                </li>
                <li>
                  التأكد من قابلية القماش على امتصاص الرطوبة، وإمكانية نزعه
                  وتنظيفه.
                </li>
              </ul>
            </ul>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/ffynFRCKA_4?si=NArLvG54Y7C-mVxw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <br />
            <h3>سلامة الطفل في المنزل:</h3>
            <p>أكثر الحوادث شيوعًا:</p>
            <ul>
              <li>العبث بالمواد الكيميائية (الأدوية والمنظفات وغيرهم).</li>
              <li>المشاكل المتعلقة بالألعاب.</li>
              <li>السقوط.</li>
              <li>الحروق.</li>
            </ul>
            <p>
              و يمكن أن تحدث الإصابات والحوادث المنزلية في أي وقت، فبعض مسبباتها
              واضحة والبعض الآخر قد لا تتم ملاحظته، وهنالك إرشادات للوقاية من
              الحوادث في كل من الأماكن التالية:
            </p>
            <ul>
              <li>المطبخ:</li>
              <ul>
                <li>
                  إبعاد مقابض القدور والمقالي عن طرف الفرن، والحرص على استخدام
                  عيون الأفران الداخلية وليست القريبة من الطرف.
                </li>
                <li>إخراج الأطفال من المطبخ أثناء الطهي.</li>
                <li>
                  إبعاد الأطعمة الساخنة عن الأطفال، وكذلك عدم تركها على طرف سطح
                  الطاولات.
                </li>
                <li>إبعاد الأدوات الحادة عن الأطفال، أو وضعها في خزائن مقفلة.</li>
              </ul>
              <li>غرفة النوم:</li>
              <ul>
                <li>
                  الحرص على سلامة سرير أو مهد الطفل، وأن يكون مزود بحواجز لمنع
                  سقوطه أثناء النوم.
                </li>
                <li>
                  تجنب وضع الدمى القطنية مع الطفل أثناء النوم؛ لتجنب نومه عليها
                  واختناقه بها.
                </li>
              </ul>
              <li>دورات المياه:</li>
              <ul>
                <li>
                  مراقبةالطفل بشكل مستمر عند الاستحمام، حتى عند الرد على الهاتف
                  يجب أخذ الطفل.
                </li>
                <li>
                  التأكد من درجة حرارة الماء قبل استحمام الطفل؛ لتجنب الحروق.
                </li>
                <li>
                  إبعاد الأدوات الكهربائية (مثل: مجفف الشعر) عن الماء، وفصلها عند
                  عدم الاستخدام.
                </li>
                <li>
                  الحرص على إغلاق أبواب جميع دورات المياه وغرف غسيل الملابس.
                </li>
              </ul>
            </ul>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/8N5e_e1IyYo?si=5OqTL6uQSQVHtGHd" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <br />
          </div>
          <hr />
          <div id={25}>
            <h3><b>صحة أسنان الأطفال-:</b></h3>
            <ul>
              <li>تعريف الأسنان اللبنية:</li>
              <p>
                هي أول مجموعة من الأسنان التي تظهر لدى الإنسان، وتستمر لديه حتى
                يحين موعد سقوطها فتستبدل بالأسنان الدائمة.
              </p>
              <li>عددها:</li>
              <p>٢٠ سنًا.</p>
              <li>أهمية الأسنان اللبنية:</li>
              <ul>
                <li>تساعد الطفل على مضغ الطعام.</li>
                <li>التحدث ونطق الحروف بشكل سليم.</li>
                <li>
                  تشغل الأسنان اللبنية مساحة من الفك؛ لتسمح بعد ذلك للأسنان
                  الدائمة بالظهور في أماكنها الصحيحة، فعند فقد الطفل لأحد أسنانه
                  اللبنية قبل موعد سقوطها، فإن ذلك قد يؤثر في شكل وترتيب الأسنان
                  الدائمة.
                </li>
                <li>حسن المظهر وزيادة ثقة الطفل بنفسه عند الابتسام.</li>
              </ul>
              <li>موعد ظهور وسقوط الأسنان اللبنية:</li>
              <p>
                تبدأ الأسنان اللبنية بالظهور بشكل تدريجي ابتداءً من عمر 6-7 أشهر
                بدءًا من القواطع السفلية إلى أن يكتمل بزوغها في عمر السنتين
                والنصف.
              </p>
              <li>ظهور الأسنان اللبنية (التسنين):</li>
              <p>
                هو أول بداية لظهور للأسنان لدى الطفل، وعادة ما تكون فترة مرهقة
                وموترة للطفل ولوالديه، ولذلك فمن المهم معرفة كل ما يتعلق بهذه
                المرحلة وجعلها تجربة أقل ألمًا وإزعاجًا للطفل.
              </p>
              <li>أعراض ظهورها:</li>
              <ul>
                <li>انزعاج الطفل.</li>
                <li>القلق وعدم الارتياح.</li>
                <li>اضطراب في النوم.</li>
                <li>فقدان الشهية.</li>
                <li>سيلان اللعاب بشكل أكثر من المعتاد.</li>
                <li>لرغبة المستمرة في عض ومضغ كل ما تقع عليه يداه.</li>
                <li>انتفاخ واحمرار في اللثة مكان ظهور السن.</li>
              </ul>
              <li>متى تجب رؤية الطبيب؟</li>
              <p>في حال وجود:</p>
              <ul>
                <li>حمى.</li>
                <li>إسهال.</li>
                <li>طفح جلدي.</li>
              </ul>
              <li>المشاكل الشائعة للأسنان اللبنية:</li>
              <ul>
                <li>تسوس الأسنان:</li>
                <p>
                  هو مرض بكتيري ينتج عن تفاعل بعض أنواع البكتيريا مع السكريات
                  الموجودة في الطعام وينتج عنه تكوين أحماض، ومع مرور الوقت تسبب
                  تلك الأحماض تسوسًا للأسنان. ويعد تسوس الأسنان من أكثر مشاكل
                  الأسنان شيوعًا، خصوصًا لدى الأطفال.
                </p>
                <li>تسوس الأسنان بسبب رضاعة حليب الأطفال:</li>
                <p>
                  يعد أحد أنواع تسوس الطفولة المبكرة، وغالبًا ما يبدأ في الأسنان
                  الأمامية العلوية، لكن قد يصيب الأسنان الأخرى.
                </p>
                <li>الأسباب:</li>
                <ul>
                  <li>
                    تعرض الأسنان للمشروبات التي تحتوي على السكر لمدة طويلة، ومن
                    أشهر الأمثلة على ذلك استخدامها كطريقة لتنويم الطفل، أو حتى
                    استخدامها كبديل عن لهاية الطفل (المصاصة) عندما يكون الطفل
                    قلقًا.
                  </li>
                  <li>
                    يمكن للبكتيريا المسببة للتسوس أن تنتقل عن طريق اللعاب، فقد
                    تنتقل من الأم إلى الطفل عندما تتشارك معه الطعام باستخدام نفس
                    الملعقة، أو عندما يستخدم لهاية أو رضاعة طفل آخر.
                  </li>
                  <li>
                    عدم تلقي الطفل لكمية الفلورايد التي يحتاجها لحماية أسنانه من
                    التسوس.
                  </li>
                </ul>
              </ul>
            </ul>
            <h3>الوقاية:</h3>
            <ul>
              <li>
                تنظيف الرضاعة واللهاية فور انتهاء الطفل منها، ورفعها في مكان
                بعيدًا عن متناول يد الأطفال؛ لتفادي استخدامها من قبل شخص آخر.
              </li>
              <li>
                تفادي مشاركة الطفل نفس الملعقة أثناء تناول الطعام، خاصةً عندما
                يكون الشخص مصابًا بتسوس الأسنان.
              </li>
              <li>
                تنظيف لثة الطفل قبل بزوغ الأسنان اللبنية باستخدام قطعة شاش أو قماش
                مبللة، ومسح اللثة بلطف بعد انتهائه من شرب الحليب.
              </li>
              <li>
                البدء بتنظيف أسنان الطفل باستخدام فرشاة أسنان ناعمة أو قطعة شاش
                مبللة بمجرد بزوغها وخصوصًا بعد الرضاعة والوجبات.
              </li>
              <li>
                عندما يكمل الطفل عامه الأول يجب البدء باستخدام كمية صغيرة جدًا من
                معجون الأسنان على الفرشاة (بحجم حبة الأرز)، وتزداد هذه الكمية
                عندما يصل الطفل لعامه الثالث لتكون بحجم حبة البازلاء، مع الحرص على
                عدم ابتلاع الطفل لكمية زائدة من المعجون وذلك بمسح الأسنان بقطعة
                شاش مبللة إذا لم يتمكن الطفل من بصق المعجون.
              </li>
              <li>
                تجنب استخدام زجاجة الرضاعة لأي سائل غير الحليب (كالعصير، أو أي
                مشروب سكري آخر).
              </li>
              <li>
                الحرص على انتهاء الطفل من رضاعة الحليب قبل النوم، لتتمكن الأم من
                تنظيف أسنانه.
              </li>
              <li>تجنب وضع أي مادة على لهاية الطفل (كالعسل وغيره).</li>
              <li>تشجيع الطفل على استخدام الكأس للشرب بمجرد إكماله عمر السنة.</li>
              <li>
                تشجيع الطفل على العادات الغذائية الصحية (تناول الخضار والفواكه،
                تناول الطعام في أوقات منتظمة، الإقلال من السكريات وغيرها).
              </li>
            </ul>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/ATb1U4finQg?si=YXNRGTR3H8QxHO05" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
    <ScrollToTopButton/>
    <Footer/>
    </Fragment>
      )
    }
    