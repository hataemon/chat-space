# cat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|usersname|string|null: false|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :groups_users
- has_many :comments


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :users


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- has_many :comments
- has_many :groups_users
- has_many  :tags,  through:  :posts_tags

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups_users
- belongs_to :users

