# Pageview Counter

페이지뷰 카운터입니다.

블로그나 각종 페이지에 스니핏을 삽입하세요!

정적 블로그에 기능을 추가하세요 

1. 좋아요
2. 하트
3. 페이지뷰

개발자 우선! Next.js 에서 그냥 쓸 수 있게 만들었습니다.

코드를 수정할 수 없다면! 코드를 삽입하세요

next.js

환경변수를 설정하세요.

```bash
NEXT_PUBLIC_PAGEVIEW_COUNTER_KEY=abcdefghijklmn
```

카운팅되기를 원하는 페이지에 아래와 같이 삽입하세요!

```tsx
import { usePageviewIncrease } from 'pageview-counter';

const Page = () => {
  usePageviewIncrease();

  return (
    <div>
      샘플 페이지입니다.
    </div>
  );
};
```

