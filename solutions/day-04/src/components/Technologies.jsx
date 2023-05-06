import htmlLogo from '../images/html5.png';
import cssLogo from '../images/css3.png';
import jsLogo from '../images/javascript.png';
import reactLogo from '../images/react.png';
import './technologies.css';

export function Technologies() {
  const Html = () => (
    <div className='logo-image'>
      <img src={htmlLogo} alt='htmlLogo' />
    </div>
  );

  const Css = () => (
    <div className='logo-image'>
      <img src={cssLogo} alt='cssLogo' />
    </div>
  );

  const Js = () => (
    <div className='logo-image'>
      <img src={jsLogo} alt='jsLogo' />
    </div>
  );

  const React = () => (
    <div className='logo-image'>
      <img src={reactLogo} alt='reactLogo' />
    </div>
  );

  return (
    <div className='technologies'>
      <p className='technologies-title'>Front end technologies</p>
      <div className='technologies-logo-container'><Html />, <Css />, <Js />, <React /></div>
    </div>
  );
}
