// データ
var result = "";
// =で計算したかどうか
var is_calc = false;

// 初期
window.onload = function () {
  result = document.getElementById('result');
};

// Cキー
function c_click(){
  result.value = "0";
  is_calc = false;
}

// 数字キー
function num_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;  

  if(result.value =="0" && val == "0"){
    result.value = "0";
  }else if(result.value =="0" && val == "00"){
    result.value = "0";
  }else if(result.value == "0"){
    result.value = val;
  }else if(result.value == "0" && val == "."){
      result.value = "0.";
  }else if(result.value.indexOf('.')===1 && val == "."){
    result.value = result.value.slice(val);
  }else {result.value += val;}
 
}


// 演算子キー
function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

//ルート
function r_click(){
  result.value=Math.sqrt(result.value);
}

//パーセント
function p_click(){
  result.value=result.value/100;
}


// =キークリック
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

// 入力されている値が演算子かどうか
function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}