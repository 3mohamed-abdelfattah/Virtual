import React, { useEffect } from 'react'
import { Fragment } from 'react'
import Header from '../AllBars/Header'
import Footer from '../AllBars/Footer'
import ScrollToTopButton from '../SomeStyles/ScrollToTopButton'
import Suger from "../Photos/اعراض-السكري-الكاذب.jpg"

export default function Sugerl() {

  useEffect(() => {
    if (!window.localStorage.getItem('email')) {
      window.location = "/login";
    }
  }, [])

  const body = {
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
      <Header />
      <div style={body}>
        <div className="headZ">
          <header><h1>اعراض السكري الكاذب والفرق بينه وبين مرض السكري</h1></header>
        </div>
        <div className="containerZ">
          <div className="homeZ">
            <ul>
              <li><a href="#70">ما هو السكري الكاذب.</a></li>
              <br />
              <li><a href="#71">الفرق بين مرض السكري والسكري الكاذب.</a></li>
              <br />
              <li><a href="#72">اعراض السكري الكاذب.</a></li>
              <br />
              <li><a href="#73">اعراض السكري الكاذب عند الاطفال.</a></li>
              <br />
              <li><a href="#74">مضاعفات السكري الكاذب</a></li>
            </ul>
            {/* اعراض-السكري-الكاذب */}
            <img src={Suger} alt='' />
          </div>
          <hr />
          <div className="contentZ">
            <p>
              مرض السكري من أكثر الأمراض المزمنة انتشاراً، وهي حالة تتطلب معرفة كل
              المعلومات حول المرض للتحكم به وإدارته، لكن ماذا عن السكري الكاذب؟ هذه
              الحالة قد تكون فخاً لكثير من الأشخاص، ولهذا تعرف معنا على اعراض السكري
              الكاذب ومعلومات هامة عن هذه الحالة، من خلال هذا المقال.
            </p>
            <div id={70}>
              <h3><b>ما هو السكري الكاذب؟</b></h3>
              <p>
                مرض السكري الكاذب “Diabetes insipidus” هو واحد من أنواع الاضطرابات
                الهرمونية النادرة، هذا الاضطراب يؤدي للإصابة ببعض الاختلال في الجسم
                خاصة في توازن معدل ونسب السوائل في الجسم، وهذا الاختلال ينتج عنه
                شعور شديد بالعطش، بالإضافة إلى أنه يجعلك تخرج كميات بول كبير من
                الجسم. قد تتشابه هذه الحالة كثيراً مع أعراض داء السكري، لكن الحالتين
                مختلفتين تماماً.
              </p>
            </div>
            <br />
            <hr />
            <div id={71}>
              <h3><b>الفرق بين مرض السكري والسكري الكاذب:</b></h3>
              <p>
                مرض السكري هو مرض يعبر عن مقاومة الأنسولين ونقص في هرمون الأنسولين
                في الجسم، وينتج عن هذا المرض ارتفاع مستوى سكر الدم. أما مرض السكري
                الكاذب، فهو مشكلة تعبر عن عدم توازن سوائل الجسم، وينتج عن هذا المرض
                أعراض غير طبيعية قد تتشابه مع بعض أعراض داء السكري.
              </p>
              <br />
            </div>
            <hr />
            <div id={72}>
              <h3><b>اعراض السكري الكاذب:</b></h3>
              <p>
                على الرغم من الاختلاف بين حالات داء السكري وبين السكري الكاذب، وكذلك
                الاختلاف في الأعراض فيما بينهما، إلا أنه يوجد بعد الأعراض المتشابهة
                والمشتركة بينهما، ومن أشهر اعراض السكري الكاذب ما يلي:
              </p>
              <ul>
                <li>الشعور بالعطش الشديد.</li>
                <li>زيادة معدلات التبول بشكل غير طبيعي.</li>
                <li>
                  انجذاب الشخص المصاب بهذه الحالة لشرب المشروبات الباردة والمثلجة
                  بمعدل أكثر من الطبيعي.
                </li>
                <li>التعرض للجفاف.</li>
                <li>تعرض الشخص لاضطراب في النوم كنتيجة لفرط التبول أثناء الليل.</li>
                <p>
                  كثرة التبول أحد أكثر العلامات شيوعاً وانتشاراً، حيث أن الشخص
                  الطبيعي يكون مقدار التبول لديه خلال اليوم حوالي من 1 لتر لـ 2 لتر.
                  أما الشخص المصاب بحالة السكري الكاذب فيكون مقدار تبوله حوالي 19
                  لتر يومياً، خاصة في حالة شرب كثير من السوائل.
                </p>
              </ul>
              <br />
            </div>
            <hr />
            <div id={73}>
              <h3><b>اعراض السكري الكاذب عند الاطفال:</b></h3>
              <p>
                الأعراض التي تظهر على الطفل المصاب بالسكري الكاذب تختلف من طفل لآخر،
                ومن أكثر الأعراض التي يتعرض لها الأطفال في هذه الحالة:
              </p>
              <ul>
                <li>صعوبات في النوم.</li>
                <li>الإصابة بالحمى.</li>
                <li>بكاء بدون أسباب واضحة.</li>
                <li>التقيؤ.</li>
                <li>فقدان وزن الطفل.</li>
                <li>الإصابة بالإسهال.</li>
                <li>تأخر نمو الطفل.</li>
              </ul>
            </div>
            <hr />
            <div id={74}>
              <h3><b>مضاعفات السكري الكاذب:</b>​​​</h3>
              <p>
                هناك بعض المضاعفات التي قد يتسبب فيها مرض السكري الكاذب، ومن أشهرها:
              </p>
              <ul>
                <li>
                  الجفاف، والذي يحدث بسبب فقد الجسم لكميات كثيرة من الماء والسوائل.
                  وقد يتسبب الجفاف في مضاعفات كثيرة مثل، هبوط الضغط، جفاف الفم،
                  وتغيرات في مرونة الجلد وسرعة دقات القلب.
                </li>
                <li>
                  اضطرابات الكهرل، هذا الاضطراب يتسبب في خلل في معادن أساسية موجودة
                  في الدم مثل البوتاسيوم والصوديوم. وهذا ما يتسبب في خلل السوائل في
                  الجسم، وهذا الاضطراب قد يصاحبه أعراض مثل، الخمول، الغثيان، تشنج في
                  العضلات والارتباك.
                </li>
              </ul>
              <br />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </Fragment>
  )
}
