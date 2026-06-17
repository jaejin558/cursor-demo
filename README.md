# cursor-demo

회원 데이터에서 이메일을 추출·검증하는 유틸리티 모듈입니다.

## 설치

```bash
npm install
```

## 사용법

```js
const { getValidEmails } = require('./src/index');

const members = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'invalid' },
];

console.log(getValidEmails(members)); // ['alice@example.com']
```

## 테스트

```bash
npm test
```

## 릴리스 노트

### v1.0.0

회원 데이터에서 유효한 이메일을 추출·검증하는 이메일 유틸리티 모듈을 추가했습니다.

#### ✨ 기능

- **`getValidEmails`** — 회원 객체 배열에서 형식이 올바른 이메일만 필터링해 반환
- **`extractEmails`** — 회원 목록의 `email` 필드를 문자열 배열로 추출
- **`isValidEmail`** — 이메일 형식 검증 (기본 정규식 + RFC 5322/3696 기준 `validator.js`)
- **`normalizeEmail`** — 비교·검증 전 공백 제거 및 소문자 변환
- **`src/validator.js`** — RFC 5322 정규식, 로컬 파트 64자·전체 254자 길이 제한 적용
- **`src/email.test.js`** — `extractEmails`, `isValidEmail`, `getValidEmails` 단위 테스트 추가 (`node:test`)

#### 🧹 기타

- `index.js`에서 `getValidEmails`를 외부에 export
- `package.json` 테스트 스크립트를 `node --test src/email.test.js`로 설정
- `docs/validator.md` — `validator.js` API·검증 규칙·리팩터링 가이드 문서 추가
