### フリマサイト

##### 利用言語

###### PHP(Laravel)
###### JavaScript(React)

##### 使用技術

###### git
###### circleCi
###### phpmyadmin
###### mysql

##### テスト用ログインユーザアカウント

###### ニックネーム aaa
###### パスワード aaa

##### ER図
###### https://dbdiagram.io/d/636b0157c9abfc6111713927

##### アプリ起動(ローカル環境)

###### 1,  git clone https://github.com/IRU212/sns01.git
###### 2,  docker-compose up -d
###### 3,  docker-compose exec app bash
###### 4,  cd laravel-project
###### 5,  mv .env.example .env
###### 6,  .envのDB設定を変更
| .env.example | .env |
| --- | --- |
| DB_CONNECTION=mysql | DB_CONNECTION=mysql |
| DB_HOST=127.0.0.1 | DB_HOST=db |
| DB_PORT=3306 | DB_PORT=3306 |
| DB_DATABASE=laravel | DB_DATABASE=database |
| DB_USERNAME=root | DB_USERNAME=db-user |
| DB_PASSWORD= | DB_PASSWORD=db-pass |
###### 8,  composer install
###### 9,  chmod 777 -R storage/
###### 10, php artisan key:generate
###### 11, php artisan storage:link