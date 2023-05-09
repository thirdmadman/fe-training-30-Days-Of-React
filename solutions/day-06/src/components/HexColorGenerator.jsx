import './hexColorGenerator.css';

export function HexColorGenerator({numberOfPlates, isPlates}) {
  const randomIntInRange = (minRange, maxRange) => {
    const min = Math.ceil(minRange);
    const max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min) + 1) + min;
  };

  const generateHexColor = () => {
    const toCssHex = (number) => (number.toString(16).length < 2 ? `0${number.toString(16)}` : number.toString(16));

    const red = toCssHex(randomIntInRange(0, 255));
    const green = toCssHex(randomIntInRange(0, 255));
    const blue = toCssHex(randomIntInRange(0, 255));

    return `#${red}${green}${blue}`;
  };

  const generatePlates = (numberOfPlates) => {
    let colorsArray = Array(numberOfPlates).fill(0);
    colorsArray = colorsArray.map(() => generateHexColor());

    const className = isPlates ? 'generator__plate' : 'generator__line';

    return colorsArray.map((color) => (
      <div className={className} style={{backgroundColor: color}} key={color}>
        {color}
      </div>
    ));
  };

  const className = isPlates ? 'generator__group_plates' : 'generator__group_lines';

  return (
    <div className='generator'>
      <div className='generator__title'>Hex colors generator</div>
      <div className={`generator__group ${className}`}>{generatePlates(numberOfPlates)}</div>
    </div>
  );
}
