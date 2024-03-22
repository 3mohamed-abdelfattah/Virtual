import React, { useEffect } from 'react'
import { Fragment } from 'react'
import Header from '../AllBars/Header'
import Footer from '../AllBars/Footer'
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton'


export default function Stomkasb() {

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
        window.location= "/login";
    }
}, [])

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
    <div style={body}>
      <div>
        <div className="headZ">
          <header><h1>هل تمثل اعراض المعدة العصبية خطرًا على صحتك؟</h1></header>
        </div>
        <div className="containerZ">
          <div className="homeZ">
            <ul>
              <li>
                <a href="#90">ما هي المعدة العصبية؟</a>
              </li>
              <br />
              <li><a href="#91">ما هي اعراض المعدة العصبية؟</a></li>
              <br />
              <li><a href="#92">متى يجب الذهاب للطبيب؟</a></li>
            </ul>
            {/* اعراض-المعدة-العصبية. */}
          </div>
          <hr />
          <div className="contentZ">
            <p>
              بالرغم من أن وجود المعدة العصبية قد يكون أمرًا شائعًا لدى بعض الأشخاص،
              فهي ليست حالة رسمية أو قابلة للتشخيص، وذلك وفقًا للأطباء، فتعرف معنا
              من خلال المقال التالي على اعراض المعدة العصبية، وهل تمثل خطرًا على
              صحتك أم لا؟
            </p>
            <div id={90}>
              <h3><b>ما هي المعدة العصبية؟</b></h3>
              <p>
                تعد المعدة العصبية أحد الأمثلة على كيفية تأثير عواطف الناس على
                جسدهم، وقد يستخدم الأطباء مصطلح المعدة العصبية للإشارة للأعراض التي
                لا علاقة لها بأي من أمراض الجهاز الهضمي.
              </p>
              <p>
                فقد يكون لوجود المعدة العصبية علاقة بحالتك العاطفية، أو صحتك
                العقلية، أو صحة الجهاز الهضمي أو الأمعاء لديك، أو حتى مزيج من
                الاثنين معًا.
              </p>
            </div>
            <br />
            <hr />
            <div id={91}>
              <h3><b>ما هي اعراض المعدة العصبية؟</b></h3>
              <p>
                يمكن أن تكون اعراض المعدة العصبية انعكاس لأعراض بعض اضطرابات الجهاز
                الهضمي الأخرى، مثل متلازمة القولون العصبي، ومرض كرون، والتهاب
                القولون التقرحي، والتهاب المعدة والأمعاء (وهو عدوى معدية بكتيرية أو
                فيروسية).
              </p>
              <p>وتشمل أعراض المعدة العصبية كل مما يلي:</p>
              <ul>
                <li>تشنجات المعدة.</li>
                <li>تغيرات في الشهية.</li>
                <li>عسر الهضم.</li>
                <li>الغثيان.</li>
                <li>الإسهال أو الإمساك.</li>
                <li>الشعور بعدم الإفراغ بشكل كامل بعد التغوط.</li>
                <li>مخاط على البراز.</li>
                <li>الغازات المفرطة وانتفاخ البطن.</li>
                <li>التجشؤ المفرط.</li>
                <li>الشعور بوجود كتلة في الحلق.</li>
                <li>الحموضة المعوية والارتجاع الحمضي.</li>
                <li>وجع البطن.</li>
                <li>تغيير ملحوظ في عادات وحركة الأمعاء.</li>
                <li>الصداع.</li>
                <li>آلام الظهر.</li>
                <li>آلام العضلات.</li>
                <li>مشاكل في النوم.</li>
                <li>خفقان القلب.</li>
                <li>زيادة الحاجة للتبول.</li>
                <li>الدوخة.</li>
                <li>الشعور بالإعياء.</li>
                <li>زيادة الآلام المصاحبة للدورة الشهرية للنساء.</li>
              </ul>
              <p>
                كما قد يعاني الأطفال في كثير من الأحيان من اعراض المعدة العصبية
                أيضًا، ولكنهم قد يصفون أعراضهم بشكل مختلف عن البالغين، فقد يرفضون
                الذهاب إلى المدرسة أو أحيانًا كثيرة يبلغون عن آلام في المعدة دون
                إظهار أي علامات أخرى للعدوى.
              </p>
              <br />
            </div>
            <hr />
            <div id={92}>
              <h3><b>متى يجب الذهاب للطبيب؟</b></h3>
              <p>
                نادرًا ما تشير اعراض المعدة العصبية إلى حدوث شيء أكثر خطورة، ففي
                الأغلب يمكن أن تكون المعدة العصبية هي الطريقة التي يعمل بها الجهاز
                الهضمي بشكل طبيعي في أوقات التوتر.
              </p>
              <p>
                وبالرغم من ذلك إلا أنه يجب المتابعة مع الطبيب في بعض الحالات؛ وذلك
                بسبب أن بعض الأعراض قد تكون إنعكاس للإصابة باضطرابات هضمية.
              </p>
              <p>وتشمل الأعراض التي تستوجب زيارة الطبيب ما يلي:</p>
              <ul>
                <li>الحمى.</li>
                <li>ألم حاد وشديد في المعدة.</li>
                <li>خسارة الوزن.</li>
                <li>نزيف المعدة.</li>
                <li>نوبات من الإسهال أو الإمساك.</li>
                <li>الجفاف.</li>
              </ul>
              <br />
            </div>
            <hr />
            <br />
          </div>
        </div>
      </div>
  </div>
<ScrollToTopButton/>
<Footer/>
</Fragment>
  )}