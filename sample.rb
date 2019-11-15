# ① player = Player.newの記述の意味
# Playerクラスのインスタンスを作成し、player変数へ代入。
# ② 大文字のPlayerと小文字のplayerの違い
# 大文字はクラス、小文字は変数。
class Player
  def hand
    # コンソールを入力待ち状態にし、プレイヤーがコンソールから打ち込んだ値を出力する処理のメソッドの処理をこの中に作成する
    puts "[0]:グー\n[1]:チョキ\n[2]:パー"
    player_hand = gets.to_i
  end
end

class Enemy
  def hand
    # グー、チョキ、パーの値をランダムに出力するメソッドの処理をこの中に作成する
    enemy_hand = rand(3)
  end
end

class Janken
  def pon(player_hand, enemy_hand)
    # プレイヤーが打ち込んだ値と、Enemyがランダムに出した値でじゃんけんをさせ、その結果をコンソール上に出力するメソッドをこの中に作成する
    # その際、あいこもしくはグー、チョキ、パー以外の値入力時には、もう一度ジャンケンをする
    # 相手がグー、チョキ、パーのうち、何を出したのかも表示させる
    jankens = ["グー","チョキ","パー"]

    puts "あなたが出したのは👉#{jankens[player_hand]},敵が出したのは👉#{jankens[enemy_hand]}" #自分と敵の手を表示
    if (player_hand != 0 && player_hand != 1 && player_hand != 2)
      puts "０〜２を選んでください。"
      janken = Janken.new
      player = Player.new
      enemy = Enemy.new
      janken.pon(player.hand, enemy.hand)

    elsif (player_hand == enemy_hand) #あいこ
      puts "あいこで"
      janken = Janken.new
      player = Player.new
      enemy = Enemy.new
      janken.pon(player.hand, enemy.hand)

    elsif
     (player_hand == 0 && enemy_hand == 1) || (player_hand == 1 && enemy_hand == 2) ||
     (player_hand == 2 && enemy_hand == 0) #勝ち
     puts "YOU　WIN！！"
    else
     puts "YOU LOSE......"
      end
    end
  end


puts "ジャンケンを行います。以下から、出す手を選んでください"

player = Player.new
enemy = Enemy.new
janken = Janken.new

# 下記の記述で、ジャンケンメソッドが起動される
janken.pon(player.hand, enemy.hand)
