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
    let SplittedResultTakeaway = space + BtnTakeaway + space
    document.getElementById('ResultShower').value += SplittedResultTakeaway
  }
  const calcAdd = () => {
    let BtnAdd = document.getElementById('buttonAdd').value;
    let SplittedResultAdd = space + BtnAdd + space
    let AddResultGetter = document.getElementById('ResultShower').value += SplittedResultAdd;
    document.getElementById('ResultShower').value = AddResultGetter;
  }
  const calcTimes = () => {
    let BtnTimes = document.getElementById('buttonTimes').value;
    let SplittedResultTimes = space + BtnTimes + space
    let TimesResultGetter = document.getElementById('ResultShower').value += SplittedResultTimes;
    document.getElementById('ResultShower').value = TimesResultGetter;
  }
  const calcDivide = () => {
    let BtnDivide = document.getElementById('buttonDivide').value;
    let SplittedResultDivide = space + BtnDivide + space
    document.getElementById('ResultShower').value += SplittedResultDivide;
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
