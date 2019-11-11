$(document).ready(function(){
//①HTMLとDOMを読み込んでから、function(関数)の処理を開始する処理。
//②id=btn-evaluationのボタンをクリックすることで開始する処理。
//③各教科の点数が変わった際の処理。
//④national_languageフォームに入力された文字列の取得。
//⑤フォームに入力した文字列(教科の点数)を、数値に変換。
//⑥id=sum_indicateの次にsum(教科の合計点)を出力。
//⑦id=declarationの次に要素を追加して出力。
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

// ここに、上記を参考にして平均点を出力する処理を書き込む
    subject_number = subject_points.length;
    average = sum / subject_number;
    $("#average_indicate").text(average);
    return average;
  };

  function get_achievement(average){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
   if(average >= 80){
     return "A";
   }else if(average >= 60){
     return "B";
   }else if(average >= 40) {
     return "C";
   }else {
    return "D";
  }
};

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
  if(subject_points[0] >= 60 && subject_points[1] >= 60 && subject_points[2] >= 60 && subject_points[3] >= 60 && subject_points[4] >= 60){
    return "合格"
  }else {
    return "不合格"
  }
};

  function judgement(){
    let achievement = get_achievement(average);
    let pass_or_failure = get_pass_or_failure();
    // return `あなたの成績は${achievement}です。${pass_or_failure}です！;`
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    let rank = get_achievement(average);
    $('#evaluation').text(rank);
  });

  $('#btn-judge').click(function() {
    let judge = get_pass_or_failure();
    $('#judge').text(judge);
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
