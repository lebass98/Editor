import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static params for categories
export function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({ id: (i + 1).toString() }));
}


const mockRelated = [
  {
    id: 2,
    title: "[새로나왔] 1월 2주차 신상 리스트",
    category: "TECH",
    image: "/images/article_modern_gadgets_1771911232807.png",
    excerpt: "두꺼운 티셔츠부터 도깨비 방망이까지",
    date: "2026. 01. 15",
    author: "BlogChannel",
    authorImg: "logo"
  },
  {
    id: 3,
    title: "애플 AI가 구글 제미나이와 손 잡은 이유",
    category: "TECH",
    image: "/images/article_workspace_coffee_1771911209733.png",
    excerpt: "결국 이렇게 될 줄은 알았습니다",
    date: "2026. 01. 14",
    author: "최호섭",
    authorImg: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 4,
    title: "탐난다, CES 2026 신박템 리스트 9",
    category: "TECH",
    image: "/images/hero_lifestyle_tech_magazine_1771911195246.png",
    excerpt: "로봇에서 시작해서 로봇으로 끝났다",
    date: "2026. 01. 09",
    author: "이주형",
    authorImg: "https://i.pravatar.cc/100?img=9"
  },
  {
    id: 5,
    title: "[새로나왔] 1월 1주차 신상 리스트",
    category: "TECH",
    image: "/images/article_minimalist_desk_1771911248411.png",
    excerpt: "새해에도 돌아온 새로나왔",
    date: "2026. 01. 05",
    author: "BlogChannel",
    authorImg: "logo"
  }
];

const MOCK_ARTICLE_DATA: Record<string, any> = {
  '1': {
    category: 'WEDDING',
    title: { line1: '결혼식의 퀄리티를', line2: '높여주는 예쁜 웨딩케이크💙' },
    excerpt: '퍼플위주로 작업한 심플한 2단 웨딩케이크',
    date: '2019. 05. 08',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/duet-mini-cake.jpg',
    body1: '안녕하세요:) 듀엣미니입니다! 가게오픈하느라 신경쓸게 한두가지가 아니어서 너무 정신없다보니 블로그에 약간 소홀했었는데요😭',
    body2: '오픈관련 포스팅에 앞서 지난 주말 주문해주셨던 웨딩케이크 포스팅을 먼저 올립니다😬 #웨딩케이크',
    h2: { line1: '퍼플그린으로 완성된', line2: '심플한 2단 웨딩케이크' },
    h2color: 'text-purple-600',
    body3: '신부님께서 특별히 퍼플그린으로 해달라고 요청하셔서 퍼플위주로 작업한 심플한 2단 웨딩케이크입니다💓 금요일에 꽃집에가서 직접 골라온 싱싱한 꽃들!',
    figureImage: '/images/duet-mini-cake.jpg',
    body4: '열심히 작업중인 저 흐흐... 완성! 넘 이쁘죠? 포장도 까다로운 2단케이크지만 꼼꼼히 포장해서 결혼식장까지 배송 후 세팅까지 완료☺️',
    body5: '결혼식장도 너무 이쁘고❣️ 신랑 신부도 너무 선남선녀였어요😍 결혼 넘넘 축하드리고 주문해주셔서 감사합니다😖',
    body6: "'듀엣미니케이크'는 늘 신선한 재료와 최고급 생화를 사용합니다.",
    body7: "✔️kakao ID. 듀엣미니\n✔️베이킹클래스.원데이클래스 진행중"
  },
  '2': {
    category: 'KIDS',
    title: { line1: '아이들에게 사랑받는', line2: '콩순이케이크👏' },
    excerpt: '두돌을 맞은 꼬마아가씨를 위해 주문해주신 캐릭터케이크',
    date: '2019. 05. 02',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/duet-mini-kongsuni.jpg',
    body1: '안녕하세요! 듀엣미니입니다:) 오늘은 캐릭터케이크를 소개해드려요🤩',
    body2: '요즘 어린이들에게 인기짱인 콩순이! 두돌을 맞은 꼬마아가씨를 위해 주문해주신 캐릭터케이크인데요:) #콩순이케이크 #캐릭터케이크',
    h2: { line1: '핑쿠상자에 포장돼서', line2: '떠나는 케이크🎂' },
    h2color: 'text-pink-500',
    body3: '케이크를 완성하고 핑쿠상자에 포장돼서 떠나는 케이크🎂',
    figureImage: '/images/duet-mini-kongsuni.jpg',
    body4: '후기까지 보내주신 💓',
    body5: '넘 귀여운 애기 ㅎㅎ 엄청 좋아했다고 하니 뿌듯😬 주문해주셔서 감사합니당👏😍',
    body6: "'듀엣미니케이크'는 늘 신선한 재료와 최고급 생화를 사용합니다.",
    body7: "✔️kakao ID. 듀엣미니\n✔️010.8632.0944\n✔️베이킹클래스.원데이클래스 진행중"
  },
  '3': {
    category: 'BIRTHDAY',
    title: { line1: '생화와 과일이 듬뿍', line2: '올라간 하트생일케이크💓' },
    excerpt: '얼그레이 시트에 생화와 달달한 딸기가 안성맞춤인 하트케이크',
    date: '2019. 04. 22',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/duet-mini-heart-cake.jpg',
    body1: '안녕하세요! 듀엣미니입니다:) 오늘은 생일케이크로 주문해주셨던 하트생크림케이크를 포스팅 하려고 해요👏',
    body2: '동료분 4월 15일 생일을 맞이하여 주문해주신 생크림케이크인데요! 시트는 얼그레이, 녹차, 커피, 초코 중에 선택 가능하신데 이 아이는 얼그레이였습니다.',
    h2: { line1: '핑크생화와 달달한 딸기', line2: '안성맞춤인 하트케이크' },
    h2color: 'text-red-500',
    body3: '하트모양 3호 케이크! 여러 분이 드신다고 하셔서 3호로 추천드렸는데요. 핑크생화와 달달한 딸기가 잔뜩 올라간🌹❤️ 생화딸기하트케이크🎂. 문구토퍼와 래터링 요청하셔서 넣어드렸구요!',
    figureImage: '/images/duet-mini-heart-cake.jpg',
    body4: '투명패키지에 핑크리본으로 포장해서 강남 병원까지 배송해드렸습니다👏🤩',
    body5: '주문해주셔서 감사해요 ㅎㅎ💓',
    body6: "'듀엣미니케이크'는 늘 신선한 재료와 최고급 생화를 사용합니다.",
    body7: "✔️kakao ID. 듀엣미니\n✔️010.8632.0944\n✔️베이킹클래스.원데이클래스 진행중"
  },
  '4': {
    category: 'BIRTHDAY',
    title: { line1: '인생은 사십부터♥︎', line2: '생일케이크' },
    excerpt: '불혹을 맞이하신 남편분의 생일을 기념하여 주문해주신 숫자케이크',
    date: '2019. 04. 17',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/duet-mini-40-cake.jpg',
    body1: '안녕하세요! 듀엣미니에요 ㅎㅎ 오늘은 불혹을 맞이하신 남편분의 생일을 기념하여 주문해주신 숫자케이크를 소개해드려요😉',
    body2: '바삭한 버터쿠키에 쫀쫀한 버터크림과 생화, 과일이 잔뜩 올라가는 숫자케이크🎂 싱싱한 분홍장미와 미니장미들🌹',
    h2: { line1: '인생은 사십부터♥︎', line2: '특별한 이벤트 숫자케이크' },
    h2color: 'text-pink-400',
    body3: '불혹을 맞이하신 분께서 슬퍼하시지 않도록 ㅎㅎ 인생은 사십부터♥︎ 레터링 써드렸어요 흐흐',
    figureImage: '/images/duet-mini-40-cake.jpg',
    body4: '특별한 생일, 특별한 이벤트가 되어주는 예쁜 케이크입니다👏',
    body5: '생일축하드려요☺️',
    body6: "'듀엣미니케이크'는 늘 신선한 재료와 최고급 생화를 사용합니다.",
    body7: "✔️kakao ID. 듀엣미니\n✔️010.8632.0944\n✔️베이킹클래스.원데이클래스 진행중"
  },
  '5': {
    category: 'TRAVEL',
    title: { line1: '드디어 먹어본', line2: '제주김만복◡̈' },
    excerpt: '이호테우 해변에서 맛보는 포송포송한 계란 김밥',
    date: '2019. 04. 11',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/duet-mini-jeju.jpg',
    body1: '안녕하세요! 듀엣미니입니다;) 여행후기에 이어 이제 맛집과 펜션 후기가 남았죠?',
    body2: '전 공항에 3시쯤 도착한 후에 김만복 김밥을 포장해서 이호테우 해변을 갔는데요! 저흰 수요일에 일정 시작인데 제일 가까운 제주김만복 본점이 수욜에 휴무여서 동문시장점으로 갔어요:)',
    h2: { line1: '푸른 바다 앞에서 즐기는', line2: '만복이네 김밥과 전복컵밥' },
    h2color: 'text-blue-500',
    body3: '포송포송한 계란이 중간에 껴있는 만복이네 김밥 너무 맛있겠죠? 이런 푸른바다 앞에서 먹는데 맛없을 수가 없죠! 사진빨도 잘받아요 ㅎㅎ',
    figureImage: '/images/duet-mini-jeju.jpg',
    body4: '진짜 존맛탱이었던 제주맛집! 가격이 착하지 않지만, 제주바다앞에서 먹기엔 딱이에요! 제주 가신다면 한번씩 들러보세요:)',
    body5: '만복이네 김밥, 전복컵밥, 직화구이통전복 주먹밥, 오징어무침까지! 오징어무침은 꼭 두 개 사세요ㅠㅠ',
    body6: "그럼이만 뿅💙",
    body7: "#제주맛집 #제주김만복 #김만복김밥 #전복컵밥 #오징어무침 #제주도여행"
  },
  '6': {
    category: 'TRAVEL',
    title: { line1: '드디어 먹어본', line2: '제주김만복◡̈' },
    excerpt: '공항 도착하자마자 달려간 제주 김만복! 이호테우 해변에서 맛보는 포송포송한 계란 김밥.',
    date: '2019. 04. 11',
    author: '듀엣미니',
    authorImg: '/BlogC.svg',
    heroImage: '/images/article_6_jeju.png',
    body1: '안녕하세요! 듀엣미니입니다;) 여행후기에 이어 이제 맛집과 펜션 후기가 남았죠?',
    body2: '공항에 3시쯤 도착해서 김만복 김밥을 포장해 이호테우 해변으로 갔어요! 본점은 휴무라 동문시장점을 이용했답니다. :)',
    h2: { line1: '푸른 바다 앞에서 즐기는', line2: '만복이네 김밥과 전복컵밥' },
    h2color: 'text-blue-400',
    body3: '포송포송한 계란이 들어간 김밥, 정말 비주얼부터 맛까지 최고예요! 바다를 보며 먹으니 더 꿀맛이었답니다. 사진도 정말 잘 나와요 ㅎㅎ',
    figureImage: '/images/article_6_jeju.png',
    body4: '제주도 오면 꼭 들러야 할 맛집 인정! 가격대는 좀 있지만 바다 뷰와 함께라면 아깝지 않아요.',
    body5: '만복이네 김밥(6,500원), 전복컵밥(7,500원), 직화구이통전복 주먹밥(5,500원), 오징어무침(4,500원) 메뉴 구성도 좋구요. 특히 오징어무침은 꼭 추천드려요!',
    body6: "그럼이만 뿅💙",
    body7: "#제주맛집 #제주김만복 #김만복김밥 #전복컵밥 #오징어무침 #제주도여행"
  },
  '16': {
    category: 'TECH',
    title: { line1: 'CES 2026에서 만난', line2: '미래 기술 돋보기' },
    excerpt: '우리의 일상을 바꿀 혁신적인 가젯들',
    date: '2026. 02. 26',
    author: 'BlogChannel',
    authorImg: 'logo',
    heroImage: '/images/hero_lifestyle_tech_magazine_1771911195246.png',
    body1: '올해 CES에서도 정말 눈이 돌아갈 만큼 신기한 제품들이 많이 쏟아져 나왔습니다.',
    body2: '특히 AI와 웨어러블의 결합이 돋보였던 이번 전시회에서 가장 주목받은 5가지 기술을 정리해 드립니다. #CES2026 #미래기술',
    h2: { line1: '기술이 우리 삶에 스며드는', line2: '가장 자연스러운 방식' },
    h2color: 'text-blue-600',
    body3: '단순히 스펙을 자랑하는 단계를 넘어, 이제는 어떻게 사용자의 의도를 먼저 읽고 도움을 줄 것인가에 집중하고 있습니다.',
    figureImage: '/images/article_modern_gadgets_1771911232807.png',
    body4: '로봇 집사부터 투명 디스플레이까지, 상상 속의 미래가 거실 안으로 들어온 느낌입니다.',
    body5: '혁신은 멈추지 않습니다. 내년에는 또 어떤 변화가 찾아올까요?',
    body6: "기술로 읽는 세상, 블로그 채널입니다.",
    body7: "#테크리뷰 #CES #혁신기술 #가젯리스트"
  },
  '17': {
    category: 'STYLE',
    title: { line1: '2026 봄/여름', line2: '트렌드 컬러 가이드' },
    excerpt: '올해의 컬러로 꾸며보는 나만의 공간과 스타일',
    date: '2026. 02. 25',
    author: '이지은',
    authorImg: 'https://i.pravatar.cc/100?img=1',
    heroImage: '/images/hero_lifestyle_tech_magazine_1771911195246.png',
    body1: '기분 좋은 봄바람과 함께 새로운 계절의 컬러들이 찾아왔습니다.',
    body2: '이번 시즌 주목해야 할 메인 컬러는 바로 차분하면서도 생기 있는 팔레트입니다. #트렌드컬러 #SS컬러',
    h2: { line1: '봄의 생기를 담은', line2: '완벽한 스타일링' },
    h2color: 'text-pink-600',
    body3: '단순히 옷을 고르는 것을 넘어, 나를 표현하는 가장 직관적인 수단으로서의 컬러를 제안합니다.',
    figureImage: '/images/hero_lifestyle_tech_magazine_1771911195246.png',
    body4: '일상을 환하게 밝혀줄 나만의 컬러를 찾아보세요.',
    body5: '작은 소품 하나로도 분위기를 완전히 바꿀 수 있습니다.',
    body6: "감각적인 하루를 제안하는 이지은입니다.",
    body7: "#봄스타일링 #컬러가이드 #인테리어팁 #데일리룩"
  },
  '18': {
    category: 'TRAVEL',
    title: { line1: '나만 알고 싶은 도쿄의', line2: '조용한 골목들' },
    excerpt: '번잡함을 벗어나 만나는 도쿄의 진정한 매력',
    date: '2026. 02. 23',
    author: '김민수',
    authorImg: 'https://i.pravatar.cc/100?img=2',
    heroImage: '/images/article_workspace_coffee_1771911209733.png',
    body1: '시부야와 신주쿠만 알고 계셨나요? 도쿄에는 아직도 숨겨진 보물 같은 골목들이 많습니다.',
    body2: '관광객으로 붐비는 곳을 피해 현지인들의 일상을 엿볼 수 있는 곳으로 떠나보세요. #도쿄여행 #숨은명소',
    h2: { line1: '시간이 천천히 흐르는', line2: '골목 안 작은 카페' },
    h2color: 'text-orange-500',
    body3: '우연히 만난 작은 책방과 커피 향 가득한 카페에서 도쿄의 또 다른 얼굴을 발견합니다.',
    figureImage: '/images/article_workspace_coffee_1771911209733.png',
    body4: '지도를 잠시 내려놓고 발길 닿는 대로 걷는 즐거움을 느껴보세요.',
    body5: '그 속에서 당신만의 도쿄 이야기를 만들어보길 바랍니다.',
    body6: "여행의 기억을 기록하는 김민수입니다.",
    body7: "#도쿄산책 #골목여행 #카페투어 #일본여행기"
  },
  '19': {
    category: 'EAT',
    title: { line1: '비건 입문자를 위한', line2: '제철 채소 요리 팁' },
    excerpt: '몸도 마음도 가벼워지는 맛있는 채식 생활',
    date: '2026. 02. 21',
    author: '정다운',
    authorImg: 'https://i.pravatar.cc/100?img=4',
    heroImage: '/images/article_minimalist_desk_1771911248411.png',
    body1: '채식이 어렵다는 편견은 이제 버리세요. 제철 채소만 잘 활용해도 충분히 맛있는 한 끼가 됩니다.',
    body2: '영양 균형은 물론 맛까지 챙길 수 있는 간단한 비건 레시피를 공유합니다. #비건요리 #제철채소',
    h2: { line1: '자연의 맛을 그대로', line2: '건강한 테이블' },
    h2color: 'text-green-600',
    body3: '원재료의 풍미를 살리는 조리법으로 채소 본연의 단맛과 아삭함을 즐겨보세요.',
    figureImage: '/images/article_minimalist_desk_1771911248411.png',
    body4: '매일 한 끼만이라도 나를 위한 건강한 선택을 해보는 건 어떨까요?',
    body5: '몸의 변화를 직접 느껴보세요.',
    body6: "맛있는 일상을 요리하는 정다운입니다.",
    body7: "#비건레시피 #건강식단 #요리팁 #채식주의"
  },
  '20': {
    category: 'LIFE',
    title: { line1: '주말의 생산성을 높이는', line2: '5가지 모닝 루틴' },
    excerpt: '더 나은 월요일을 준비하는 작은 습관의 힘',
    date: '2026. 02. 19',
    author: '최재원',
    authorImg: 'logo',
    heroImage: '/images/article_modern_gadgets_1771911232807.png',
    body1: '꿀 같은 주말, 침대에서만 시간을 보내기엔 너무 아깝지 않나요?',
    body2: '생산적이고 활기찬 주말을 만드는 아주 작은 습관들을 소개합니다. #모닝루틴 #자기계발',
    h2: { line1: '어제보다 더 나은', line2: '오늘을 만드는 습관' },
    h2color: 'text-indigo-600',
    body3: '거창한 목표보다는 내가 지킬 수 있는 작은 정기적인 동작이 마음의 근육을 만듭니다.',
    figureImage: '/images/article_modern_gadgets_1771911232807.png',
    body4: '명상, 독서, 혹은 가벼운 스트레칭까지 나에게 맞는 루틴을 찾아보세요.',
    body5: '습관이 인생을 만듭니다.',
    body6: "성장을 기록하는 최재원입니다.",
    body7: "#습관만들기 #생산성 #주말루틴 #자기관리"
  }
};


export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = MOCK_ARTICLE_DATA[id] || MOCK_ARTICLE_DATA['1'];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black">
      <Navbar theme="light" />

      {/* 50/50 Split Section */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Left Fixed Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 bg-black overflow-hidden">
          <Image
            src={getImagePath(data.heroImage)}
            alt={data.title.line1}
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* Right Scrollable Content */}
        <div className="w-full lg:w-1/2 bg-[#fcfcfc] text-black relative z-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">

          {/* Header Block (Takes full viewport height to match split view) */}
          <div className="w-full relative flex flex-col justify-center px-8 lg:px-16 xl:px-24 min-h-[50vh] lg:min-h-screen pb-16 pt-32 lg:pt-0">
            <div className="text-sm font-bold tracking-widest text-black mb-6 uppercase">
              {data.category}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.3] tracking-tight text-black mb-8 break-keep">
              <span className="border-b-[5px] border-black pb-1 leading-[1.5]">{data.title.line1}</span><br className="hidden md:block" />
              <span className="border-b-[5px] border-black pb-1 leading-[1.5] mt-4 md:mt-0 inline-block">{data.title.line2}</span>
            </h1>

            <p className="text-[16px] font-bold text-black mb-12 lg:mb-16">
              {data.excerpt}
            </p>

            <div className="text-[13px] font-bold text-black">
              {data.date}
            </div>

            {/* Author Badge Pinned Bottom Right of this header block */}
            <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-black/10 shadow-sm flex items-center justify-center bg-white">
                <Image src={getImagePath(data.authorImg)} alt={data.author} width={32} height={32} className="object-contain" />
              </div>
              <span className="text-[12px] font-bold text-black">{data.author}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="px-8 lg:px-16 xl:px-24 pb-16 text-black text-[15px] leading-[1.6] tracking-tight break-keep">
            <p className="mb-8">
              {data.body1}
            </p>

            <p className="mb-12">
              {data.body2}
            </p>

            <div className="my-16 flex justify-center border-y border-black py-8">
              <h2 className={`text-2xl font-bold text-center ${data.h2color} italic`}>
                {data.h2.line1}<br />
                {data.h2.line2}
              </h2>
            </div>

            <p className="mb-8">
              {data.body3}
            </p>

            <figure className="mb-12 relative w-full bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image src={getImagePath(data.figureImage)} alt={data.title.line1} width={800} height={600} className="w-full h-auto object-contain" />
            </figure>

            <p className="mb-8">
              {data.body4}
            </p>

            <p className="mb-8">
              {data.body5}
            </p>

            <p className="mb-16">
              {data.body6}<br /><br />
              {data.body7.split('\n').map((line: string, i: number) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>

            {/* About Author Section inside the right panel */}
            <div className="mt-20 pt-10 border-t border-zinc-200">
              <div className="text-[13px] font-bold mb-6 uppercase tracking-wider">ABOUT AUTHOR</div>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full border border-zinc-200 shrink-0 flex items-center justify-center overflow-hidden bg-white">
                  <Image src={getImagePath("/BlogC.svg")} alt="듀엣미니" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-[15px] mb-2 text-black">듀엣미니</div>
                  <div className="text-[13px] text-zinc-600 leading-relaxed font-medium break-keep">
                    수제 케이크 전문점. 늘 신선한 재료와 최고급 생화를 사용하여 소중한 날의 퀄리티를 한 층 더 높여드립니다.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Related Articles Section */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-[#fcfcfc]">
        <h2 className="text-xl font-bold mb-10 text-black">관련 기사</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mockRelated.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
              <div className="relative overflow-hidden aspect-[4/5] object-cover bg-zinc-200 w-full mb-4 group-hover:bg-zinc-300 transition-colors">
                <Image
                  src={getImagePath(article.image)}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-widest drop-shadow-md z-10">
                  {article.category}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-3 break-keep tracking-tight text-black">
                  {article.title}
                </h3>
                <p className="text-[13px] font-medium leading-relaxed mb-6 break-keep text-zinc-600">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 relative text-black">
                  <span className="text-[11px] font-medium text-zinc-500">{article.date}</span>
                  <div className="flex flex-col items-center">
                    {article.authorImg === "logo" ? (
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold italic mb-1 shrink-0 text-[7px] border shadow-sm tracking-tighter">
                        BlogChannel
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full overflow-hidden mb-1 shrink-0 border border-black/10 shadow-sm">
                        <Image src={getImagePath(article.authorImg)} alt={article.author} width={32} height={32} className="object-cover" />
                      </div>
                    )}
                    <span className="text-[10px] font-bold text-zinc-700">{article.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
