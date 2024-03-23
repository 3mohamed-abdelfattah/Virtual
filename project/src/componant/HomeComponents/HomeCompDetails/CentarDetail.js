import React, { Fragment, useEffect, useState } from 'react';
import "../../DoctorsPage/DoctorsDetails/Doctordetail.css";
import Header from '../../AllBars/Header';
import Footer from '../../AllBars/Footer';
import DOCM from "../../Photos/Centarlogo.png";
import Stars from '../../SomeStyles/Stars';

export default function CentarDetails() {
    const id = window.location.pathname.split("/").slice(-1)[0];
    const [doctorData, setDoctorData] = useState({});
    const [loading, setLoading] = useState(true);

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
    marginTop: '7%',
    }

    useEffect(() => {
    setLoading(true); // Start loading

    fetch(`http://localhost:5000/api/radiologycenters/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setDoctorData(data);
        console.log(data);
        })
      .finally(() => setLoading(false)); // End loading
    }, []);

    return (
    <Fragment>
        <Header />
        <div style={body}>
        <h1 className="txtdoc">أفضل الخدمات والمنتجات الصحية</h1>
        <h1 style={{ color: '#ff0505', textAlign: 'center' }}>نتطلع لخدمتك وتلبية احتياجاتك الصحية بأفضل الطرق الممكنة</h1>
        {loading ? (
            <div style={{position:'relative',right:'23%',transform:'scaley(1)'}} className="loaderload">
            <div className="wrapperload">
            <div className="circle" />
            <div className="line-1" />
            <div className="line-2" />
            <div className="line-3" />
            <div className="line-4" />
            </div>
        </div>) : (
            <div className="testimonials" id="testimonials">
            <div className="containerD">
                <div className="boxD">
                    <img src={DOCM} alt='' style={{width:'230px'}}/>
                    <div className="buttonsD1">
                </div>
                <h1 style={{ color: '#1F5357'}}>{doctorData.name}</h1>
                <h3>{doctorData.phoneNumber}</h3>
                <div style={{position:'relative',right:'26%'}}>
                <Stars/>
                </div>
                <p>{doctorData.address}</p>
                </div>
                </div>
                <hr className='hrdoc'/>
                <div className="containerD">
                <div className="opinionsD">
                <div className="opsD">
                <div className="evaluateD">
                <h3>اضف تقييمك الان</h3>
                
                </div>
                <div className="textareaD">
                <h4> شارك تجربتك</h4>
                    <textarea name className="formsD" placeholder="شكرا لمشاركتك" defaultValue={""} />
                    </div> 
                    <div className="userD">
                    <h4>الاسم</h4>
                    <input type="text" className="formsD" required placeholder="الاسم هنا" />
                    </div>
                    <div className="userD">
                    <h4>البريد الالكتروني</h4>
                    <input type="email" className="formsD" required placeholder="بريدك الالكتروني" /> 
                    </div>
                    <div className="btn-groupD">
                    <button type="submit" className="btn submit">ارسال التقييم</button>
                    <button type="reset" className="btn cancel">الغاء</button> 
                    </div>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
        <Footer />
    </Fragment>
    );
}