import React, { Fragment } from 'react'
import "./FirsrAid.css"
import Footer from '../AllBars/Footer'
import Header from '../AllBars/Header'
import AID from "../Photos/aid.jpg"



export default function FirstAid() {


    const body ={
            direction: 'rtl',
            margin: 2,
            fontFamily: 'var(--bs-body-font-family)',
            fontSize: 'var(--bs-body-font-size)',
            fontWeight: 'var(--bs-body-font-weight)',
            lineHeight: 'var(--bs-body-line-height)',
            textAlign: 'var(--bs-body-text-align)',
            backgroundColor: 'var(--bs-body-bg)',
            WebkitTextSizeAdjust: '100%',
            WebkitTapHighlightColor: 'transparent',
    }



  return (
    <Fragment>
    <Header/>
    <div style={body}>
    <div className="headN">
      <header><h1>الإسعافات الأوليه</h1></header>
    </div>
    <div className="containerN">
      <h2>1-أهمية الإسعافات الأولية</h2>
      <ul>
        <li><a href="#l"> اهمية الإسعافات الأولية</a></li>
      </ul>
      <h2>2-أساسيات الإسعافات الأولية</h2>
      <ul>
        <li><a href="#m"> أساسيات الإسعافات الأولية</a></li>
      </ul>
      <h2>3-علبة الإسعافات الأولية</h2>
      <ul>
        <li><a href="#o"> علبة الإسعافات الأولية</a></li>
      </ul>
      <h2>4-الحالات التي تستلزم إجراء الإسعافات الأولية</h2>
      <ul>
        <li><a href="#p"> الاختناق</a></li>
        <li><a href="#q">الحروق</a></li>
        <li><a href="#r">الكسور</a></li>
        <li><a href="#s">الغرق</a></li>
        <li><a href="#t">ضربات الشمس</a></li>
        <li><a href="#u"> لدغة العقرب والثعبان</a></li>
        <li><a href="#v">التسمم الغذائي</a></li>
        <li><a href="#w">تمزق الاربطه والتواء الكاحل</a></li>
        <li><a href="#x">بلع اللسان</a></li>
        <li><a href="#y">اصابات الرأس</a></li>
      </ul>
      <img src={AID} alt=''/>
      <hr />
      <div className="contentN">
        <div id="l">
          <h3><b>اهمية الاسعافات الاولية:</b></h3>
          <p>قد تنقذ الإسعافات الأولية حياة شخص ما، فهي تساعد على ما يلي:</p>
          <ul>
            <li>
              <b>تساهم في إنقاذ الأرواح</b>، حيث أن 59% من الوفيات الناتجة عن
              إصابات معينة كان من الممكن منعها لو تم تقديم الإسعافات الأولية في
              الوقت المناسب.
            </li>
            <li>
              <b>تقلل من وقت الاستشفاء</b> والوقت الذي يحتاجه المريض للإقامة في
              المستشفى، وتساعد في الوقاية من الإصابات الدائمة أو المؤقتة.
            </li>
            <li>
              <b>تقلل من زيارات المستشفى غير الضرورية</b>، فليس كل حالة تتطلب
              الرعاية الطبية، وإنما يمكن علاج بعض الحالات في المنزل عند اتباع
              أساليب الإسعافات الأولية الصحيحة والمناسبة للحالة.
            </li>
            <li>
              <b>تمنع تدهور الحالة الصحية</b>، فمعرفة أساسيات الإسعافات الأولية
              يمكن أن تمنع من تفاقم الحالة وتطورها إلى حالة سيئة.
            </li>
            <li><b>تزيد من وعي الفرد</b> وتقلل من خطر الإصابة بالحوادث</li>
          </ul>
        </div>
        <hr />
        <div id="m">
          <h3><b>أساسيات الاسعافات الأولية:</b></h3>
          <p>
            تشتمل أساسيات الإسعافات الأولية على 3 إجراءات يتم إجراؤها في حال
            غياب الشخص عن الوعي، وهي:
          </p>
          <ul>
            <li>
              <b>المجرى التنفسي:</b> يجب التأكد من المجرى التنفسي وعدم انسداده،
              وفي حال انسداد المجرى التنفسي من المهم فتحه بالطريقة الصحيحة.
            </li>
            <li>
              <b>التنفس:</b> في حال وجود اضطرابات في تنفس المريض ومواجهة صعوبة
              في التنفس، يجب إجراء التنفس الاصطناعي، وفي هذا الأثناء يجب استدعاء
              الإسعاف وطلب الرعاية الطبية.
            </li>
            <li>
              <b>الدورة الدموية:</b> يجب التأكد من نبض المريض، وفي حال غياب
              النبض من المهم إجراء الإنعاش القلبي، وغالبًا ما يتم إجراؤه أثناء
              إجراء التنفس الاصطناعي، وذلك من خلال الضغط على الصدر للحفاظ على
              الدورة الدموية في الجسم.
            </li>
          </ul>
          <p>
            بعد التأكد من تنفس المريض بشكل صحيح وسلامة النبض، يجب فحص الشخص
            والبحث عن أي أعراض تدل على إصابة، أو النزيف، أو أعراض الحساسية، أو
            مشاكل أخرى.<br />
            وقبل إجراء أي من الخطوات السابقة، يجب التأكد من نظافة اليدين، وغسلها
            أو استخدام معقم اليدين، لتجنب نقل البكتيريا والعدوى للمريض.
            <br />تجدر الإشارة إلى أهمية تجنب تحريك المريض للحفاظ على سلامته،
            خصوصًا في حال الاشتباه بالإصابة بالكسور.
          </p>
        </div>
        <hr />
        <div id="o">
          <h3><b>علبة الاسعافات الاوليه</b></h3>
          <p>
            لا يمكن للإنسان أن يتنبأ متى قد يحتاج إلى الإسعافات الأولية البسيطة.
            لذلك، من الضروري الاحتفاظ بحقيبة إسعافات أولية مجهزة في المنزل
            والسيارة. تباع حقائب الإسعافات الأولية في الصيدليات، ولكن من الممكن
            تحضير حقيبة خاصة تحتوي على ما يلي:
          </p>
          <ul>
            <li>بلاستر أو ما يسمى أيضًا بلاصق للجروح، بأحجام وأشكال متعددة.</li>
            <li>ضمادات بأحجام مختلفة.</li>
            <li>ضمادات ضاغطة.</li>
            <li>قماش مخصص لامتصاص الرطوبة والسوائل الخارجة من الجسم.</li>
            <li>شريط طبي لاصق.</li>
            <li>لفة من الشاش.</li>
            <li>قفازات لاتكس طبية.</li>
            <li>مناديل معقمة.</li>
            <li>مرهم مضاد للبكتيريا.</li>
            <li>مرهم يحتوي على الهيدروكورتيزون.</li>
            <li>كمادات باردة فورية.</li>
            <li>مسكنات للألم، مثل الباراسيتامول، أو الإيبوبروفين.</li>
            <li>مضادات الهيستامين.</li>
            <li>دواء لعلاج الإسهال الشديد، مثل البيسموث.</li>
            <li>لوشن يحتوي على الكلامين.</li>
            <li>أسبرين جرعة 81 ملغ.</li>
            <li>ملقط.</li>
            <li>ميزان حرارة فموي.</li>
          </ul>
        </div>
        <hr />
        <h3><b>الحالات التى تستلزم اجراء الاسعافات الاولية</b></h3>
        <p>
          تعتمد طريقة إجراء الإسعافات الأولية على الحالة التي يعاني منها المريض.
          ولكن بشكل عام، تشتمل الحالات التي تستلزم إجراء الإسعافات الأولية على
          ما يلي:
        </p>
        <hr />
        <div id="p">
          <h3><b>1-الاختناق</b></h3>
          <p>اعراض الاختناق:</p>
          <ul>
            <li>إمساك الحنجرة باليدين.</li>
            <li>عدم القدرة على الكلام.</li>
            <li>صعوبة التنفس أو التنفس المصحوب بصوت.</li>
            <li>صدور صوت صفير عند محاولة التنفس.</li>
            <li>سعال ضعيف أو قوي.</li>
            <li>فقدان الوعي.</li>
            <li>تحول لون البشرة والشفتين إلى اللون الأزرق.</li>
          </ul>
          <p>
            الاسعافات الاولية للاختناق:<br /><br />الوقوف خلف الشخص المصاب. وضع
            إحدى القدمين أمام الأخرى قليلاً لتحقيق التوازن. لف الذراعين حول خصر
            الشخص المصاب. إمالة الشخص المصاب إلى الأمام قليلاً. عمل قبضة باليد
            الأُخرى ثم وضعها فوق منطقة السرة. مسك القبضة باليد الأُخرى ثم توجيه
            ضغطة بقوة على البطن بسرعة نحو الأعلى. القيام بمعدل 6 إِلى 10 ضغطات
            بطنية حتى يزول الجسم العالق.
          </p>
          <p>
            <b>
              أما في حال كان الشخص المصاب قد فقد وعيه فقم بالإنعاش القلبي الرئوي
              مع الضغطات الصدرية والأنفاس الانقاذية.</b>
          </p>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/AwKMpaYq5kY?si=xqGUmjyrVKosMJHV" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="q">
          <h3><b>2-الحروق</b></h3>
          <p>حروق الدرجة الأولى (الخفيفة):</p>
          <p>افعل (√):</p>
          <ul>
            <li>
              تبريد الحرق للمساعدة في تهدئة الألم وذلك بوضع المنطقة المحترقة تحت
              الماء الجاري من الصنبور والمعتدل البرودة لمدة 10 إلى 15 دقيقة
              لتخفف الألم.
            </li>
            <li>
              إزالة الاكسسوارات (مثل: خواتم أو ساعات أو أحزمة ) إن وجدت أو إزالة
              أحذية أو أي ملابس برفق وبسرعة ، قبل أن تتضخم المنطقة.
            </li>
            <li>
              تغطية منطقة الحرق باستخدام ضمادة رطبة أو قطعة قماش نظيفة باردة،
              لتقليل خطر العدوى.
            </li>
            <li>أخذ مسكن الألم إذا لزم الأمر وذلك لتخفيف الألم.</li>
            <li>
              اطلب المساعدة فورًا إذا كانت الحروق شديدة وتمتد لمساحات واسعة، أو
              إذا لاحظت علامات العدوى مثل زيادة الألم واحمرار وتورم.
            </li>
          </ul>
          <p>لا تفعل (X):</p>
          <ul>
            <li>لا تحاول لمس الفقاعات الناتجة من الحرق.</li>
            <li>
              لا تضع أي مراهم أو استخدام الزبدة أو معجون الأسنان وغيرها من
              العلاجات على الحرق.
            </li>
            <li>لا تستخدم​ الثلج مباشرة على المنطقة المصابة بالحروق.</li>
          </ul>
          <br />
          <p>حروق الدرجة الثانية:</p>
          <p>افعل (√):</p>
          <ul>
            <li>حماية الشخص المصاب من الضرر.</li>
            <li>
              انزع المجوهرات والأحزمة وغيرها، خاصة حول المناطق المحترقة على سبيل
              المثال الرقبة.
            </li>
            <li>أخذ مسكن الألم إذا لزم الأمر وذلك لتخفيف الألم.</li>
            <li>
              تغطية منطقة الحرق باستخدام ضمادة رطبة أو قطعة قماش نظيفة باردة.
            </li>
          </ul>
          <p>لا تفعل (X):</p>
          <ul>
            <li>إزالة الملابس المحترقة العالقة على الجلد.</li>
            <li>تغطية الحرق بضمادة لاصقة.</li>
            <li>
              وضع المناطق المصابة بالحروق الكبيرة داخل الماء البارد لتفادي حدوث
              صدمة للمصاب.
            </li>
            <li>استخدام الثلج مباشرة على المنطقة المصابة بالحروق.</li>
            <li>
              وضع أي مراهم أو استخدام الزبدة أو معجون الأسنان، أو غيرها من
              العلاجات على الحرق.
            </li>
            <li>وضع القطن الرقيق على المنطقة المصابة والذي قد يثير الجلد.</li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/KWP7efbdVbg?si=p8fqcFyHojjELmL_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="r">
          <h3><b>3-الكسور</b></h3>
          <p>
            تحتاج الكسور إلى رعاية طبية فورية، خصوصاً إذا نتجت عنها صدمة أو
            إصابة كبيرة، فاتصل بالطوارئ فوراً، ولكن حتى وصول الرعاية الطبية
            ننصحك بإجراء بعض خطوات الإسعافات الأولية المفيدة.
          </p>
          <br />
          <p>
            لا تقم بتحريك الشخص إلا للضرورة لتجنب حدوث أي إصابة أخرى، وابدأ على
            الفور بالإجراءات التالية أثناء انتظار المساعدة الطبية:
          </p>
          <ul>
            <li>
              قم بإيقاف أي نزيف عن طريق الضغط على الجرح بضمادة معقمة أو بقماش
              نظيف أو بقطعة قماش نظيفة.
            </li>
            <li>
              ثبت المنطقة المصابة، ولا تحاول تقويم العظم أو دفع العظم الذي برز
              إلى مكانه، وإذا كنت مدربًا على كيفية عمل الجبيرة ولم تتوفر
              المساعدة المهنية بسهولة، فقم بوضع الجبيرة المتاحة لتثبيت المنطقة
              أعلى وأسفل موقع الكسر، فقد تعمل الجبيرة على تقليل الألم.
            </li>
            <li>
              ضع كمادات الثلج للحد من التورم وللمساعدة في تخفيف الألم، وتجنب وضع
              الثلج مباشرة على الجلد، وقم بلف الثلج بمنشفة أو قطعة قماش أو بعض
              من المواد الأخرى.
            </li>
            <li>
              عالج الصدمة، إذا شعر المصاب بالإغماء أو ضيق التنفس، أو سرعة
              التنفس، فاجعله يستلقي على الأرض مع وضع رأسه في مستوى منخفض قليلاً
              عن الجذع، وإن أمكن، ارفع ساقيه.
            </li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/l5JyLkoAQZg?si=H6Q2gUGcY-N0H0hP" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="s">
          <h3><b>4-الغرق</b></h3>
          <p>
            بعد طلب النجدة من المتواجدين في المكان والاتصال على خط الطوارئ يجب
            اتباع النقاط الآتية بالترتيب، والتي تعد من أهم الخطوات في الإسعافات
            الأولية للغرق:
          </p>
          <ul>
            <li>
              وضع الغريق على أرض مستوية مستلقيًا على ظهره، ويجب الحذر عند
              التعامل معه فقد يكون فاقدًا وعيه بسبب ارتطام رأسه بشيء.
            </li>
            <li>مناداة الغريق وهز كتفيه للتأكد من استجابته.</li>
            <li>إذا لم يستجب الغريق للنداء فيجب التحقق من تنفسه.</li>
            <li>
              إذا كان الغريق يتنفس: وضعه في وضع الإفاقة وتدفئته بالملابس أو
              البطانية وتغيير ثيابه المبللة وانتظار سيارة الإسعاف.
            </li>
          </ul>
          <p>إذا لم يكن يتنفس:</p>
          <ul>
            <li>
              رفع رأس الغريق عن طريق وضع يد على جبينه ويد أسفل ذقنه ورفعه بحذر،
              وذلك لفتح مجرى التنفس.
            </li>
            <li>
              تحسس مكان الحنجرة (تفاحة آدم) في الرقبة باستخدام إصبعين، وذلك
              للتحقق من وجود النبض.
            </li>
            <li>
              البدء بإجراء التنفس الصناعي بالنفخ في فم المصاب 5 مرات ببطء (لمدة
              ثانية ونصف إلى ثانيتين) مع مراقبة ارتفاع صدره بعد النفخ والانتظار
              حتى يهبط صدره بين النفخات.
            </li>
            <li>القيام بعملية الإنعاش القلبي الرئوي (30 ضغطة).</li>
            <li>
              إعادة التنفس الصناعي بالنفخ مرتين فقط، ثم القيام بالإنعاش القلبي
              الرئوي مرة أخرى وهكذا إلى أن يستيقظ الغريق أو وصول سيارة الإسعاف.
            </li>
            <li>
              إذا استعاد الغريق تنفسه قبل وصول سيارة الإسعاف فيجب تدفئته
              بالملابس أو البطانية وتغيير ثيابه المبللة.
            </li>
            <li>مراقبة الغريق والتحقق من نبضه وتنفسه إلى أن يصل الإسعاف.</li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/yOFuyj4oqfs?si=NYzf2msM60HXfY7c" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="t">
          <h3><b>5-ضربات الشمس</b></h3>
          <p>
            تعتبر ضربة الشمس أكثر خطورة من الإجهاد الحراري؛ حيث يمكن أن تؤدي إلى
            الوفاة، وتحدث عند التعرض لدرجات حرارة مرتفعة؛ فيصبح الجسم ساخنًا
            جدًّا تصل حرارته إلى 40 درجة مئوية وأكثر، ويمكن أن يحدث بعد الإجهاد
            الحراري، ويكون لدى المصاب ارتفاع في درجة حرارة الجسم، ويصبح مضطربًا
            ويفقد الوعي.
          </p>
          <h3>الأعراض:</h3>
          <ul>
            <li>ارتفاع درجة حرارة الجسم إلى 40 درجة مئوية وأعلى.</li>
            <li>حرارة واحمرار ورطوبة في الجلد.</li>
            <li>ضربات نبض قوية وسريعة.</li>
            <li>صداع.</li>
            <li>دوخة وغثيان.</li>
            <li>فقدان الوعي.</li>
            <li>رؤية أو سماع أشياء غير موجودة بالواقع (هلوسة).</li>
          </ul>
          <h3>الإسعافات الأولية:</h3>
          <ul>
            <li>الاتصال فورًا بالإسعاف.</li>
            <li>تحريك المصاب إلى مكان بارد.</li>
            <li>
              المساعدة على خفض درجة حرارة الجسم عن طريق استخدام الكمادات الباردة
              والماء البارد.
            </li>
            <li>تجنُّب إعطاء المصاب أي سوائل للشرب.</li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/H1rr26jm3OY?si=H268YxQIkqujhFTS" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="u">
          <h3><b>6-لدغة العقرب والثعبان</b></h3>
          <ul>
            <li>طلب الإسعاف فورًا.</li>
            <li>تهدئة المصاب؛ فهذا يمكن أن يبطئ انتشار السم في الجسم.</li>
            <li>غسل اللدغة بالماء والصابون على الفور.</li>
            <li>
              الاستلقاء أو الجلوس، مع محاولة وضع الطرف المصاب في وضع مريح.
            </li>
            <li>
              إزالة أي شيء مشدود حول الجزء المصاب من الجسم (مثل: الخواتم أو
              الأساور) لأنها يمكن أن تسبب الضرر في حالة حدوث تورم.
            </li>
            <li>تغطية مكان اللدغة بضمادة نظيفة وجافة.</li>
            <li>عدم ربط أي منطقة قريبة من المنطقة المصابة.</li>
            <li>تجنب جرح المنطقة المصابة أو مص السم.</li>
          </ul>
        </div>
        <hr />
        <div id="v">
          <h3><b>7-التسمم</b></h3>
          <p>
            إن الهدف الأساسي من سرعة إجراء الإسعافات الأولية للمصاب بالتسمم هو
            تخفيف المادة السامة بأقصى سرعة ممكنة وطلب المساعدة الطبية والمحافظة
            على سلامة التنفس والدورة الدموية والوظائف الحيوية الأخرى لدي المصاب.
          </p>
          <p>لكي يتم الإسعاف بصورة سليمة يجب مراعاة الآتي:</p>
          <ul>
            <li>أطلب الإسعاف أو المعونة الطبية ، أو انقـل المصاب.</li>
            <li>
              تأكـد من عـدم وجـود خطر إضافي (عليك أو على المصاب) بسبب قيامك
              بإسعاف المصاب.
            </li>
            <li>
              اذا كان ممكناحـدد نـوع السـم أو الدواء أو الغذاء واحتفـظ بوعـائـه
              وبقاياه أو غلافه.
            </li>
            <li>اذا كانا ممكنا معرفة الجرعة أو المقدار المتعاطى من المادة.</li>
            <li>
              اذا كان ممكناوقت التعاطي (أي كم من الوقت مضى على تناول المادة او
              الطعام).
            </li>
            <li>
              إذا كان فاقداً للوعي: يجب فحص التنفس وتقديم الإنعاش القلبي الرئوي
              إذا لزم الأمر.
            </li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/QdOf0v24iyM?si=iEuUaeTGOqvk9w_3" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="w">
          <h3><b>8-تمزق الاربطه والتواء الكاحل</b></h3>
          <ul>
            <li>
              أرح ساقك يجب عليك التوقف فورًا عن النشاط الذي تسبب في الإصابة
              والجلوس وإراحة الكاحل. اجلس في وضعية تكون فيها ساقك مرفوعة عن
              مستوى الأرض.
            </li>
            <li>
              استخدم الثلج لتقليل التورم برّد الكاحل باستخدام كيس ثلج لتقليل
              الألم والتورم، وذلك عن طريق لف كيس من الثلج (أو أي كيس طعام مجمد)
              بقطعة قماش وضعها على الكاحل. لا تضع الثلج مباشرة على الجلد، لأنه
              سيسبب حروقًا باردة، اترك الثلج في مكانه لمدة 20 دقيقة. إذا كنت
              تعاني من مرض الأوعية الدموية أو السكري أو انخفاض الإحساس، فتحدث مع
              طبيبك قبل وضع الثلج.
            </li>
            <li>
              استخدم مشدّ ضاغط استخدم مشد ضاغط للفه حول الكاحل، فاستخدام المشد
              يساعد كثيراً في الحد من التورم. يمكنك لف المشد من أصابع القدم إلى
              الركبة.
            </li>
            <li>
              ارفع الكاحل ارفع الكاحل عن مستوى الأرض بحيث يكون أعلى من الورك
              لمنع التورم واحرص على حصولك على وضعية مريحة! إذا بدت الإصابة
              خطيرة، اتصل بالنقل الإسعافي واذهب إلى المشفى
            </li>
            <li>
              تحقق من الدورة الدموية تأكد من أن المشد أو الضمادة ليست ضيقة
              للغاية، اضغط على ظفر الإصبع حتى يتحول إلى اللون الأبيض، ثم اتركه.
              يجب أن يعود اللون بسرعة وإذا لم يعد فإن المشد ضيقة جدًا؛ قم
              بإزالته وربطه مرة أخرى وأعد الفحص كل 10 دقائق.
            </li>
            <li>
              أعد وضع الكمادة الباردة على الضمادة كل 2-3 ساعات تأكد من نزع
              الضمادة ليلاً ولا تنام مع وضع كيس ثلج على الجرح.
            </li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/oVVDuA4yLKo?si=xYkna10ydi17dMTC" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="x">
          <h3><b>9- بلع اللسان</b></h3>
          <h3>إسعاف بلع اللسان الناجم عن فقدان الوعي</h3>
          <ul>
            <li>
              اركع خلف رأس المصاب، وقم بتثبيت ودعم رأس المصاب مع محاذاة الرأس،
              والرقبة، والعمود الفقري.
            </li>
            <li>
              ضع يديك على جانبي الوجه مع وضع أطراف أصابعك على زاوية الفك السفلي
            </li>
            <li>
              ارفع الفك برفق لفتح مجرى التنفس واحرص جيدًا على عدم إمالة الرقبة،
              إذ إن حركة الفك تقوم بتحريك اللسان إلى الأمام في الفم مما يفتح
              مجرى التنفس.
            </li>
            <li>
              لا تضع أصابع يديك في فم المصاب محاولًا دفع الفك لفتح مجرى التنفس
            </li>
            <li>اتصل بالطوارئ واطلب المساعدة في أسرع وقت.</li>
          </ul>
          <h3>إسعاف بلع اللسان الناجم عن الصرع</h3>
          <ul>
            <li>
              ساعد الشخص في الحصول على وضعية مناسبة في حال بدأت نوبة الصرع لديه
              أثناء الوقوف.
            </li>
            <li>
              قم بقلب الشخص برفق على جانب واحد لتجنب استنشاق أو إدخال أي أجسام
              غريبة إلى مجرى التنفس.
            </li>
            <li>
              قم بإبعاد أي أشياء يُحتمل أن تشكل خطر على المريض، مثل: الأدوات
              الحادة لمنع حدوث أي إصابات.
            </li>
            <li>
              ضع منشفة أو سُترة مطوية أو شيء مشابه لهما تحت رأس المريض للحفاظ
              على أمانه وثباته.
            </li>
            <li>
              قم بفك ربطة العنق ونزع المجوهرات حول عنق الشخص لأنها قد تُعيق
              التنفس.
            </li>
            <li>
              احسب مُدة النوبة، ففي حال استمرت نوبة الصرع لأكثر من 5 دقائق يجب
              عليك الاتصال بالطوارئ.
            </li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/DBkGtvcZgQE?si=eOWANrXCSraj_r69" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <hr />
        <div id="y">
          <h3><b>10-اصابات الرأس</b></h3>
          <h3>أنواع الإصابات:</h3>
          <ul>
            <li>
              الارتجاج: قد يصاب بفقدان أو تشويش في الرؤية والتوازن لفترة قصيرة.
            </li>
            <li>
              كسر الجمجمة: ظهور جروح في الرأس قد تكون علامة على ضرر أعمق داخل
              الرأس.
            </li>
            <li>كدمة الدماغ: نزيف طفيف في الدماغ وقد يسبب تورم.</li>
          </ul>
          <h3>إجراءات إسعافية:</h3>
          <ul>
            <li>حافظ على هدوء المصاب وطمأنته وساعده على الجلوس.</li>
            <li>
              استعمال كيس مجمد على منطقة الإصابة على سبيل المثال: كيس خضار
              مجمدة.
            </li>
            <li>
              تحقق من مستوى الوعي مثل: استجابة المصاب للصوت وذلك بطرح أسئلة
              بسيطة أو إعطائه​ إرشادات وغيرها.
            </li>
            <li>ملازمة المصاب للتأكد من عدم ظهور علامات مثل النزيف.</li>
            <li>
              عند ظهور أعراض على المصاب مثل التقيؤ أكثر من مرتين، أو النعاس أو
              اضطراب في الكلام والرؤية، فيجب طلب المساعدة من الهلال الأحمر
              فورًا.
            </li>
          </ul>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/jG8_9I4V5IA?si=_tPg8yYlW1zXDpgN" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
    <a href="#" className="topA">↑</a>
  </div>
  <Footer/>
    </Fragment>

  )
}
