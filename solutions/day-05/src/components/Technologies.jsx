import htmlLogo from '../images/html5.png';
import cssLogo from '../images/css3.png';
import jsLogo from '../images/javascript.png';
import reactLogo from '../images/react.png';
import './technologies.css';

export function Technologies() {

  const LogoImage = (props) => {
    const {image, alt} = props.imageData;
    return (<div className='logo-image'>
      <img src={image} alt={alt} />
    </div>);
  };
  
  return (
    <div className='technologies'>
      <p className='technologies-title'>Front end technologies</p>
      <div className='technologies-logo-container'>
        <LogoImage imageData={{image: htmlLogo, alt: 'html'}} />
        <LogoImage imageData={{image: cssLogo, alt: 'cssLogo'}} />
        <LogoImage imageData={{image: jsLogo, alt: 'jsLogo'}} />
        <LogoImage imageData={{image: reactLogo, alt: 'reactLogo'}} />
      </div>
    </div>
  );
}
