# 참고한 강의 & 자료

- [React 공식 레퍼런스](https://ko.reactjs.org/)
- [React JS로 웹 서비스 만들기](https://www.inflearn.com/course/reactjs-web)

# 완성본

- [영화앱](https://chiitoitsu.github.io/movie_app/)

# 리액트의 특징

- 자바스크립트 기반이기 때문에 다른 기술을 배울 필요가 없다.
- 요소별, 컴포넌트별로 나눠서 작업할 수 있다.
- 단방향 데이터 플로우를 가지고 있다. (데이터를 수정하면 UI가 바뀌지만 UI를 통해 데이터를 수정할 수는 없다.)
- 리액트는 프레임워크가 아니라 UI라이브러리이기 때문에 파이썬, nodejs등과 같이 사용할 수 있다.

# 리액트 프로젝트시 주의점

- 실제 코드를 작성하는 곳은 index.html이 아니다.
- ReactDOM이 index.html에 개발자가 작성한 코드를 붙여넣는 구조
- 이미지 경로가 src 디렉터리가 아닌 이유는 실제 코드가 index.html이 있는 public디렉터리에서 처리되기 때문
- jsx 코드는 **반드시** 닫는태그가 있어야한다. (`<br>`태그도`<br/>`로 작성해야한다. )

# 데이터를 넘길때, 데이터에 접근할때

- props를 사용한다.
- jsx 태그내에 이름={데이터}로 넘긴다.
- this.props.이름으로 접근한다.

# map

- map을 통해 새로운 배열을 만들 수 있다.
- MySQL의 view와 비슷하다 생각하면 될듯.
- [map 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

# key

- 엘리먼트가 많을경우에는 key를 줘야한다.
- 각 key는 고유해야 한다.

# PropType

- 출력하고자 하는 데이터가 다른 형식이 되지않도록 할 수 있다.
- ex) PropType을 문자열로 지정했는데 숫자로 출력할경우 에러가 난다.
- isRequired를 사용하여 필수로 제공되게 할 수 있다.
- MySQL의 notnull이라 생각하면 될 듯 하다.

# 컴포넌트 라이프 사이클

- 렌더 : componentWillMount() → render() → componentDidMount()
- 업데이트 : componentWillReceiveProps() → shouldComponentUpdate() → componentWillUpdate() → render() → componentDidUpdate()

# state

- 리액트 컴포넌트안에 들어있는 오브젝트
- state가 바뀔때마다 컴포넌트를 새롭게 렌더한다.
- state변경시 setState를 사용하여야 한다.
- ...this.state.이름을 사용해서 새롭게 데이터를 추가할 수 있다.

# Smart Component

- state와 prop 모두 있음
- render, 라이프 사이클, return 존재

# Dumb Component (Functional Component)

- state가 없고 prop만 있음
- render, 라이프 사이클이 없고 return만 있음

# Promise

- 비동기 처리에 사용되는 객체
- 여러 작업을 수행할때 다른 작업을 기다리지 않아도 됨
- ex) 2개 이상의 DB를 불러올때 차례대로 불러오는 것이 아니라 동시에 불러옴
- then()과 catch()를 사용해 예외 처리가능

# async, await

- async는 await가 완료되기 전까지 실행되지 않는다.
- 성공적 수행이 아닌 작업이 완료되기 전까지임에 유의