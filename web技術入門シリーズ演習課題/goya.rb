# データを受け取り、返却するCGIプログラムの起動
require 'cgi'
cgi = CGI.new

# データを受け取った後、HTMLの形式でレスポンスを返す
cgi.out("type" => "text/html", "charset" => "UTF-8") {
  # 情報の目印とした"goya"のデータを cgi['goya']と言う記述で取り出し、ローカル変数に代入する
  get = cgi['goya']
  get2 = cgi['goya2']
  # HTMLでレスポンスを返却する
  "<html>
    <body>
      <p>検索結果は以下になります。</p>
      #{get}
      #{get2}

    </body>
  </html>"
}
