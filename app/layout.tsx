export const metadata = {
    // header 가이드라인
    title: '에스씨공영 | 천안골재, 아산골재, 충청골재, 천안모래, 아산모래, 천안아산골재',
    description: '30년 내력의 골재, 모래, 자갈, 혼합 선별생산 납품전문 기업 041)542-8815',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='kr'>
        <head>
            <meta name="google-site-verification" content="LBW5pnmqvikg5Xl2m0_EVeYRqSm735Bfh_VFml3dvYM"/>
            <meta name="naver-site-verification" content="c0ac4241434a4f2e99b81d443d7087600f36e09e"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta property="og:site_name" content="에스씨공영" />
            <meta name="keywords" content="천안 골재, 충남 골재, 충청 골재, 골재, 모래, 쇄석, 혼합, 마사, 건설, 에스씨공영"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
