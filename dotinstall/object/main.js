'use strict';

{
  class Post {
    constructor(text, count) {
      this.text = text;
      this.likeCount = count;
    }

    show(){
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
    like(){
      this.likeCount++;
      this.show();
    }
    // 静的メソッドはthis使えない　インスタンスを作らないから
    static showInfo(){
      console.log('Post class version 1.0');
    }

  }

  class SponsoredPost extends Post{
    constructor(text, count, sponsor){
      super(text, count);
      this.sponsor = sponsor;
    }
    show(){
      super.show();
      console.log(`sponsored by ${this.sponsor}`);
    }
  }
  const posts = [
    new Post('studing javascript', 12),
    new Post('studing php', 99),
    new SponsoredPost('こんにちは', 32, 'スポンサーです'),
  ];
  
  // Post.showInfo();
  posts[2].show();
}