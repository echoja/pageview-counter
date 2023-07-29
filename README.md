# Pageview Counter

페이지뷰 카운터입니다.

블로그나 각종 페이지에 스니핏을 삽입하세요! 정적 블로그에 기능을 추가하세요

현재 지원: Next.js App Router

코드를 수정할 수 없다면! 코드를 삽입하세요

가장 먼저 환경변수를 설정하세요.

```bash
NEXT_PUBLIC_PAGEVIEW_COUNTER_KEY=abcdefghijklmn
```

카운팅되기를 원하는 페이지에 아래와 같이 삽입하세요! (아무것도 렌더링되지 않습니다.)

```tsx
import { PageviewIncrease } from 'pageview-counter/next-app';

const Page = () => {
  return (
    <div>
      <PageviewIncrease />
      샘플 페이지입니다.
    </div>
  );
};
```

해당 페이지의 카운팅을 보여주고 싶다면 아래와 같이 삽입하세요!

```tsx
import { PageviewCounter } from 'pageview-counter/next-app';

const Page = () => {
  return (
    <div>
      <PageviewCounter />
      샘플 페이지입니다.
    </div>
  );
};
```

완료!