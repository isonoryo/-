// 成績判定をするプログラム A
function get_achievement(x,y,z){
  let sum = x + y + z;
  if( sum >= 250 ){
    return "あなたの成績はAです";
  }else if ( sum >= 200) {
    return "あなたの成績はBです";
  }else if ( sum >= 100) {
    return "あなたの成績はCです";
  }else (sum <=100)
    return "あなたの成績はDです";
};

// console.log(get_achievement(80,80,80));

// 合否判定をするプログラム B
 function get_pass_or_failure(x,y,z){
  if(x<60){
    return "不合格";
  }else if (y<60) {
    return "不合格";
  }else if (z<60) {
    return "不合格";
  }else {
    return "合格"};
};

// console.log(get_pass_or_failure(80,80,80))

// AとBを一つにするプログラム
function judgement(x,y,z){
  let achievement = get_achievement(x,y,z);
  let get_pass_or_failure = get_pass_or_failure(x,y,z);
  return `あなたの成績は${achievement}です。${get_pass_or_failure}です！`;
};

console.log(judgement(10,10,10));
