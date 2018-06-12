# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  2.3.1

# DB設計

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|reference|null: false, foreign_key: true|
|name|string|null: false|

### Association
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false|
|user_name|string|null: false|
|mail|string|null: false|

### Association
- has_many :members
- has_many :messsages
- has_many :groups,through :members

### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|messsege_id|reference|null: false|
|body|text|
|image_url|string|
|group_id|reference|null: false|
|user_id|reference|null: false|

### Association
- belongs_to :user
- belongs_to :group

