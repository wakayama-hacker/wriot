/**
 * このテストは `hello.tag` のテストのサンプルです！
 */
describe('hello specs', function() {

  before(function() {
    // `<body />` 内の全ての要素を削除。
    // 毎回削除しないと他のテストで追加した要素が残ることに注意！
    var body = document.body;

    while ( body.firstChild ) {
      body.removeChild( body.firstChild );
    }

    // `<body><not-found></not-found></body>` を作成
    var html = document.createElement('hello');
    body.appendChild(html);
  })

  it('Tests for the `<hello />`', function() {
    // カスタムタグをマウント。第二引数にテスト用のデータを渡すことができる。
    // 例えば、想定される Ajax 経由でのレスポンス等は、この第二引数でダミーを渡すと便利。
    riot.mount( 'hello', {} );

    // 以下はテスト。このシステムでは jquery がロードされているのでそれを使える。
    // テストの記述は https://github.com/Automattic/expect.js を参照。

    // `<h1>Hello World</h1>`であるべき
    expect( $( 'h1' ).text() ).to.be( 'Hello World' );
  })

  it('Tests for the `<hello />` with args', function() {
    // `<hello>` に対してオプションを指定
    riot.mount( 'hello', {title: "Hi"} );

    // 指定したオプションが反映されるかをテスト
    expect( $( 'h1' ).text() ).to.be( 'Hi' );
  })
})
