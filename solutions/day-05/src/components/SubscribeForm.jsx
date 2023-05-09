import "./subscribeForm.css";

export function SubscribeForm() {
  return (
    <div className='subscribe'>
      <div className='subscribe-form form'>
        <div className='form__text'>
          <h1 className='form__title'>Subscribe</h1>
          <p className='form__description'>Sign up with your email address to receive news and updates.</p>
        </div>
        <div className='form__inputs inputs-group'>
          <div className='inputs-group__inputs'>
            <input type='text' className='inputs-group__input' placeholder='First Name' />
            <input type='text' className='inputs-group__input' placeholder='Last Name' />
            <input type='email' className='inputs-group__input' placeholder='Email' />
          </div>
          <div className='inputs-group__buttons'>
            <button className='inputs-group__button'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
