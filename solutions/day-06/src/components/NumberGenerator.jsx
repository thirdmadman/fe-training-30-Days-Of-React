import './numberGenerator.css';

export function NumberGenerator({countOfNumbers}) {
  const numbersArray = new Array(countOfNumbers).fill(0).map((el, i) => i);

  const isPrime = (number) => {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  };

  const getNumberColor = (number) => {

    if (isPrime(number)) {
      return "#fa5e55"
    }

    if (number % 2 === 0) {
      return "#2bbf75"
    }

    return "#fbdb47"

  };

  const Number = ({number}) => {
    return <div className='numbers-container__number' style={{ backgroundColor: getNumberColor(number) }}>{number}</div>;
  };

  return (
    <div className='number-generator'>
      <div className='number-generator__title'>Number generator</div>
      <div className='number-generator__numbers-container numbers-container'>
          {numbersArray.map((number) => (
            <Number number={number} key={number} />
          ))}
      </div>
    </div>
  );
}
