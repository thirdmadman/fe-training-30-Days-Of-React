import htmlLogo from '../images/html5.png';
import cssLogo from '../images/css3.png';
import jsLogo from '../images/javascript.png';
import reactLogo from '../images/react.png';
import './technologies.css';

export function Technologies() {
  return (
    <div className='technologies'>
      <p className='technologies-title'>Front end technologies</p>
      <div className='technologies-logo-container'>
        <div className='logo-image'>
          <img src={htmlLogo} alt='htmlLogo' />
        </div>
        <div className='logo-image'>
          <img src={cssLogo} alt='cssLogo' />
        </div>
        <div className='logo-image'>
          <img src={jsLogo} alt='jsLogo' />
        </div>
        <div className='logo-image'>
          <img src={reactLogo} alt='reactLogo' />
        </div>
      </div>
    </div>
  );
}
