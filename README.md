# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  2.3.1

# DB設計

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|

### Association
- has_one :group
- belongs_to :user

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false|
|mail|string|null: false|

### Association
- has_many :members
- has_many :messsages
- has_many :groups,through :members

### messageテーブル
|Column|Type|Options|
|------|----|-------|
|messsege_id|integer|null: false|
|body|text|null: false|
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

