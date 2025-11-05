import React from 'react'

export default function Home() {
  return (
   <>
   <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">
      <div className="card p-4">
        <div className="card-body">
          <h2 className="card-title mb-3 text-center">رجسٹریشن فارم</h2>
          <p className="text-center text-muted">براہ کرم اپنا مکمل ڈیٹا درج کریں</p>

          <form id="regForm" className="needs-validation" novalidate>
            <div className="row g-3">
              {/* <!-- Full Name --> */}
              <div className="col-md-6">
                <label for="fullName" className="form-label required">نام</label>
                <input type="text" className="form-control" id="fullName" placeholder="آپ کا پورا نام" required/>
                <div className="invalid-feedback">براہ کرم نام درج کریں.</div>
              </div>

              {/* <!-- Email --> */}
              <div className="col-md-6">
                <label for="email" className="form-label required">ای میل</label>
                <input type="email" className="form-control" id="email" placeholder="example@mail.com" required/>
                <div className="invalid-feedback">براہ کرم درست ای میل درج کریں.</div>
              </div>

              {/* <!-- Password --> */}
              <div className="col-md-6">
                <label for="password" className="form-label required">پاس ورڈ</label>
                <div className="input-group">
                  <input type="password" className="form-control" id="password" minlength="6" placeholder="کم از کم 6 حروف" required/>
                  <button className="btn btn-outline-secondary" type="button" id="togglePwd"><i className="bi bi-eye"></i></button>
                </div>
                <div className="form-text">کم از کم 6 حروف رکھیے۔</div>
                <div className="invalid-feedback">پاس ورڈ درکار ہے (کم از کم 6 حروف).</div>
              </div>

              {/* <!-- Confirm Password --> */}
              <div className="col-md-6">
                <label for="confirmPassword" className="form-label required">پاس ورڈ کی تصدیق</label>
                <input type="password" className="form-control" id="confirmPassword" minlength="6" placeholder="پاس ورڈ دوبارہ درج کریں" required/>
                <div id="confirmFeedback" className="invalid-feedback">پاس ورڈ مماثل نہیں ہے.</div>
              </div>

              {/* <!-- Phone --> */}
              <div className="col-md-6">
                <label for="phone" className="form-label">فون نمبر</label>
                <input type="tel" className="form-control" id="phone" pattern="^[0-9+\-\s]{7,15}$" placeholder="+92 3xx xxxxxxx"/>
                <div className="form-text">مثال: +92 300 1234567</div>
                <div className="invalid-feedback">درست فون نمبر درج کریں.</div>
              </div>

              {/* <!-- Gender --> */}
              <div className="col-md-6">
                <label className="form-label">جنس</label>
                <select className="form-select" id="gender" aria-label="Gender select">
                  <option value="" selected>منتخب کریں (اختیاری)</option>
                  <option value="male">مرد</option>
                  <option value="female">عورت</option>
                  <option value="other">دیگر</option>
                </select>
              </div>

              {/* <!-- DOB --> */}
              <div className="col-md-6">
                <label for="dob" className="form-label">تاریخ پیدائش</label>
                <input type="date" className="form-control" id="dob" max=""/>
                <div className="invalid-feedback">درست تاریخ درج کریں.</div>
              </div>

              {/* <!-- City --> */}
              <div className="col-md-6">
                <label for="city" className="form-label">شہر</label>
                <input type="text" className="form-control" id="city" placeholder="مثلاً: فیصل آباد"/>
              </div>

              {/* <!-- Address --> */}
              <div className="col-12">
                <label for="address" className="form-label">پتہ</label>
                <textarea className="form-control" id="address" rows="2" placeholder="اپنا مکمل پتہ درج کریں"></textarea>
              </div>

              {/* <!-- Terms --> */}
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="terms" required/>
                  <label className="form-check-label" for="terms">
                    میں شرائط و ضوابط سے متفق ہوں۔
                  </label>
                  <div className="invalid-feedback">آپ کو جاری رکھنے کے لیے شرائط قبول کرنا ضروری ہے.</div>
                </div>
              </div>

              {/* <!-- Buttons --> */}
              <div className="col-12 d-flex justify-content-between align-items-center">
                <small className="text-muted">پہلے سے اکاؤنٹ؟ <a href="#">لاگ ان کریں</a></small>
                <div>
                  <button type="reset" className="btn btn-outline-secondary me-2">ری سیٹ کریں</button>
                  <button type="submit" className="btn btn-primary">رجسٹر کریں</button>
                </div>
              </div>
            </div>
             {/* <!-- row --> */}
          </form>

        </div>
         {/* <!-- card-body --> */}
      </div>
       {/* <!-- card --> */}
    </div>
  </div>
</div>

   </>
  )
}
