DROP TABLE IF EXISTS 'post';
DROP TABLE IF EXISTS 'user';

--- CREATE TABLES ---
CREATE TABLE 'post' (
  'post_id' INTEGER PRIMARY KEY AUTOINCREMENT,
  'title' TEXT NOT NULL,
  'content' TEXT NOT NULL,
  'created_at' DATETIME NOT NULL,
  'updated_at' DATETIME NOT NULL,
  'user_id' INTEGER NOT NULL,
  FOREIGN KEY ('user_id') REFERENCES 'user' ('user_id')
);

CREATE TABLE 'user' (
  'user_id' INTEGER PRIMARY KEY AUTOINCREMENT,
  'name' TEXT NOT NULL
);

-- INSERT DATA --
INSERT INTO 'user' ('name') VALUES ('Billie Joe Armstrong');
INSERT INTO 'user' ('name') VALUES ('Mike Dirnt');
INSERT INTO 'user' ('name') VALUES ('Tre Cool');

INSERT INTO 'post' ('title', 'content', 'created_at', 'updated_at', 'user_id') VALUES ('Welcome to my blog', 'This is my first post', '2016-01-01 00:00:00', '2016-01-01 00:00:00', 1);

UPDATE post SET content = 'This is my first post. I hope you like it.' WHERE post_id = 1;