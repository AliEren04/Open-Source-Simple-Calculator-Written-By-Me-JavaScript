 const space = " ";
  const calc1 = () => {
    const Btn = document.getElementById('button1').value;
    document.getElementById('ResultShower').value += Btn;
  }
  const calc2 = () => {
    const Btn2 = document.getElementById('button2').value;
    document.getElementById('ResultShower').value += Btn2;
  }
  const calc3 = () => {
    const Btn3 = document.getElementById('button3').value;
    document.getElementById('ResultShower').value += Btn3;
  }
  const calc4 = () => {
    const Btn4 = document.getElementById('button4').value;
    document.getElementById('ResultShower').value += Btn4;
  }
  const calc5 = () => {
    const Btn5 = document.getElementById('button5').value;
    document.getElementById('ResultShower').value += Btn5;
  }
  const calc6 = () => {
    const Btn6 = document.getElementById('button6').value;
    document.getElementById('ResultShower').value += Btn6;
  }
  const calc7 = () => {
    const Btn7 = document.getElementById('button7').value;
    document.getElementById('ResultShower').value += Btn7;
  }
  const calc8 = () => {
    let Btn8 = document.getElementById('button8').value;
    document.getElementById('ResultShower').value += Btn8;
  }
  const calc9 = () => {
    const Btn9 = document.getElementById('button9').value;
    document.getElementById('ResultShower').value += Btn9;
  }
  const calcTakeaway = () => {
    let = BtnTakeaway = document.getElementById('buttonTakeaway').value;
    let TakeawayResultGetter = document.getElementById('ResultShower').value += BtnTakeaway;
    let SplittedResultTakeaway = TakeawayResultGetteretter.trim().split('').join(' ');
    let SplittedTakeawaywithoutComma = SplittedResultTakeaway.replace(",", " ") + space;
    document.getElementById('ResultShower').value = SplittedTakeawaywithoutComma
  }
  const calcAdd = () => {
    let BtnAdd = document.getElementById('buttonAdd').value;
    let AddResultGetter = document.getElementById('ResultShower').value += BtnAdd;
    let SplittedResultAdd = AddResultGetter.trim().split('').join(' ');
    let SplittedAddWithoutComma = SplittedResultAdd.replace(",", " ") + space;
    document.getElementById('ResultShower').value = SplittedAddWithoutComma;
  }
  const calcTimes = () => {
    let BtnTimes = document.getElementById('buttonTimes').value;
    let TimesResultGetter = document.getElementById('ResultShower').value += BtnTimes;
    let SplittedResultTimes = TimesResultGetter.trim().split('').join(' ');
    let TimesWithoutComma = SplittedResultTimes.replace(",", " ") + space;
    document.getElementById('ResultShower').value = TimesWithoutComma;
  }
  const calcDivide = () => {
    let BtnDivide = document.getElementById('buttonDivide').value;
    let DivideResultGetter = document.getElementById('ResultShower').value += BtnDivide;
    let SplittedResultDivide = DivideResultGetter.trim().split('').join(' ');
    let SplittedDivideWithoutComma = SplittedResultDivide.replace(",", " ") + space;
    document.getElementById('ResultShower').value = SplittedDivideWithoutComma;
  }
  const calcEqual = () => {
    let ResultCalc = document.getElementById('ResultShower')
    let ResultSet = eval(ResultCalc.value);
    const RealResult = document.getElementById('ResultShower').value = ResultSet;
  }
  const calc0 = () => {
    const BtnZero = document.getElementById('button0').value;
    document.getElementById('ResultShower').value += BtnZero
  }
  const calcClear = () => {
    document.getElementById('ResultShower').value = " ";
  }
