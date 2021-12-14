export const facebook = ({
  url,
}) => {
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`

  window.open(facebook,'share-facebook','width=530, height=750');
}
export const twitter = ({
  url,
}) => {
  url = encodeURIComponent(url)
  const twitter = `https://twitter.com/intent/tweet?url=${url}`

  window.open(twitter,'share-twitter','width=500, height=500')
}
export const kakao = ({
  url,
  title,
  img,
  nameKo,
}) => {
  const desc = `${nameKo}를 마셔보세요`

  window.Kakao.Link.sendDefault({ 
    objectType: 'feed', 
    content: { 
      title: title, 
      description: desc, 
      imageUrl: img, //공유할 제목 옆에 사진
      link: { // 이동할 url
        mobileWebUrl: url, 
        webUrl: url,
      }, 
    }, 
    buttons: [ 
      { 
        title: '웹으로 보기', // 버튼 타이틀
        link: { 
          mobileWebUrl: url, 
          webUrl: url, 
        }, 
      }, 
    ], 
  })
  window.Kakao.Link.cleanup()
}
export const naver = ({
  url,
  title
}) => {
  url = encodeURIComponent(url)
  title = encodeURIComponent(title)
  const naver = `https://share.naver.com/web/shareView?url=${url}&title=${title}`

  window.open(naver,'share-naver','width=500, height=500')
}