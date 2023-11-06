import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faAngleLeft,
  faBagShopping, 
  faCircleDollarToSlot, 
  faCloud,
  faCloudRain,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import image from 'assets/image/이미지.jpg'
import { ReactComponent as MailIcon } from 'assets/image/envelope-regular.svg'
import { ReactComponent as Ellipsis } from 'assets/image/ellipsis-solid.svg'

const navContents = [
  {
    id: 1,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
  {
    id: 2,
    link: '#',
    name: '카페',
    icon: MailIcon
  },
  {
    id: 3,
    link: '#',
    name: '블로그',
    icon: MailIcon
  },
  {
    id: 4,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
  {
    id: 5,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
  {
    id: 6,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
  {
    id: 7,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
  {
    id: 8,
    link: '#',
    name: '메일',
    icon: MailIcon
  },
]

const articleNews = [
  {id:2, name: '언론사편집'},
  {id:3, name: '엔터'},
  {id:4, name: '스포츠'},
  {id:5, name: '경제'},
]

const articleShopping = [
  { id: 2, name: '쇼핑' },
  { id: 3, name: '맨즈' },
  { id: 4, name: '원쁠딜' },
  { id: 5, name: '쇼핑라이브' },
]

const articleSubscribe = [
  { id: 2, name: '추천·구독' },
  { id: 3, name: '자동차' },
  { id: 4, name: '웹툰' },
  { id: 5, name: '패션뷰티' },
  { id: 6, name: '레시피' },
  { id: 7, name: '리빙' },
  { id: 8, name: '책방' },
  { id: 9, name: '지식+' },
]

const subscribeSubTitle=[
  { name: '전체', backgroundColor: '#ff11ff' }, 
  { name: '인기', backgroundColor: '#11FF22' }, 
  { name: '건강', backgroundColor: '#33ffff' }, 
  { name: '게임', backgroundColor: '#ff11ff' }, 
  { name: '동물', backgroundColor: '#11FF22' }, 
  { name: '여행', backgroundColor: '#33ffff' }, 
  { name: '연애결혼', backgroundColor: '#11FF22' }, 
  { name: '영화', backgroundColor: '#33ffff' }, 
  { name: '육아', backgroundColor: '#11FF22' }, 
]

const news = [
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  {id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  { id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  { id: 'han', name: '한겨래', imgSrc: image, link: '#' },
  { id: 'han', name: '한겨래', imgSrc: image, link: '#' },
]

const shoppingCards = [
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
  { imgSrc: image, link: '#', subTitle: "Lorem ipsum!\nLorem, ipsum dolor.", alt: 'shoppingImage'},
]

const subscribeCards = [
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
  { imgSrc: image, link: '#', icon: image, brand: '오늘의 집', subTitle: 'Lorem ipsum dolor sit amet consectetur adiasdasdfasdfasdffasdfpisicing elitEx sapiente aspernatur porro, ab alias laudantium facilis facere quisquam amet soluta!', alt: 'shoppingImage' },
]

const footerContents = [
  {name: "회사소개", fontWeight: 400},
  {name: "인재채용", fontWeight: 400},
  {name: "제휴제안", fontWeight: 400},
  {name: "이용약관", fontWeight: 400},
  {name: "개인정보처림방침", fontWeight: 800},
  {name: "청소년보호정책", fontWeight: 400},
  {name: "네이버 정책", fontWeight: 400},
  {name: "고객센터", fontWeight: 400},
]

const weatherData = [
  {
    name: '18시',
    deg: 20,
    icon: faCloud
  },
  {
    name: '20',
    deg: 18,
    icon: faCloud
  },
  {
    name: '22',
    deg: 18,
    icon: faCloud
  },
  {
    name: '00',
    deg: 20,
    icon: faCloudRain
  },
  {
    name: '02',
    deg: 20,
    icon: faCloudRain
  },

];

const shoppingBrand = [
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
  {name :'쿠팡'},
]
const MakeComponent = (Component, props) => {
  return <Component {...props} />
}

const MainPage = () => {
  const [openSearchHistory, setOpenSearchHistory] = useState(false)
  const [time, setTime] = useState('')

  
  const [selectedItem, setSelectedItem] = useState({
    news: '뉴스스탠드',
    shopping:'쇼핑',
    subscribe: '추천·구독',
    subscribe_sub_nav:'전체',
  })

  const handleSearchHistory = () => {
    setOpenSearchHistory(!openSearchHistory)
  }

  const handleSelectCardSection = (section, selected) => {
    setSelectedItem({ ...selectedItem, [section]: selected})
  }
  console.log(selectedItem)

  const getCurrentTime= () => {
    const date = new Date()
    const M = String(date.getMonth()).padStart(2, "0")
    const D = String(date.getDate()).padStart(2, "0")
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    return (`${M}.${D}. ${hours}:${minutes}`)
  }

  useEffect(() => {
    const now = getCurrentTime()
    setTime(now)
  },[time])


  return (
    <>
      {/* 해더 */}
      <header className='header'>
        <div className='top'>
          <div>
            <button className='icon top__menu' />
            <Link className='icon top__pay' />
          </div>
          <div>
            <button className='icon top__sns' />
            <button className='icon top__notification' />
          </div>
        </div>
        <div className='search'>
          <Link to='#' className='search__main_logo' />
          <h1>네이버 클론코딩</h1>
          <input placeholder='검색어를 입력하세요.' />
          <button className='search__keyboard' />
          <button className='search__toggle' />
          <Link className='search__search_icon' to="#" />
        </div>
      </header>

      {/* 메뉴 부분 */}
      <nav className='nav'>
        {navContents.map((item) => (
          <Link to={item.link} key={item.id} className='nav__item'>
            {MakeComponent(item.icon)}
            <span>{item.name}</span>
          </Link>
        ))}
        <button>
          <Ellipsis />
          <span>_</span>
        </button>
      </nav>

      {/* 메인영역 */}
      <main className='main'>
        <div className='main--right'>
          <aside className='ad'>
            <img src={image} alt='메인 광고'/>
          </aside>
          <article className='news'>
            {/* 뉴스 */}
            <div className='contents'>
              <div className='contents__nav'>
                <button 
                  className={`contents__nav--mid-dot ${selectedItem.news === '뉴스스탠드' ? 'selected' : ''}` }
                  onClick={() => handleSelectCardSection('news', '뉴스스탠드')}
                >
                  뉴스스탠드
                </button>
                {articleNews.map((na) => (
                  <button 
                    key={na.id} 
                    className={`contents__nav--slash ${selectedItem.news === na.name ? 'selected' : ''}`}
                    onClick={() => handleSelectCardSection('news', na.name)}
                  >
                    {na.name}
                  </button>
                ))}
              </div>
              <div className='news__short'>
                <button>전체언론사 <i className='toggle' /></button>
                <Link className='news__short__title--after'>한겨래</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <div>
                  <Link>뉴스스탠드</Link>
                  <Link>뉴스홈</Link>
                </div>
              </div>
              <div className='news__main' >
                {news.map((i, index) => (
                  <Link key= { index } className = 'news__main__link' >
                    <img src={i.imgSrc} alt={i.name} />
                  </Link>
                ))}
              </div>
            </div>
            <div className='pagination'>
              <button><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='blue'>언론사</em>더보기 </span> <span><em>1</em> / 4</span>
              <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </article>
          <article className='shopping'>
            {/* 쇼핑 */}
            <div className='contents'>
              <div className='contents__nav'>
                {articleShopping.map((na)=>(
                  <button
                    key={na.id}
                    className={`contents__nav--slash ${selectedItem.shopping === na.name ? 'selected' : ''}`}
                    onClick={() => handleSelectCardSection('shopping', na.name)}
                  >
                    {na.name}
                  </button>
                ))}
              </div>
              <div className='shopping__short__wrapper'>
                <div className='shopping__short'>
                  <span><em>오늘의 혜택 · SSG.COM</em> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>   
                <div className='shopping__short__page_button'>
                  <span><em>1</em> / 4</span>
                  <button><FontAwesomeIcon icon={faAngleLeft} /></button>
                  <button><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
              </div>
              <div className='shopping__main' >

              </div>
            </div>
            <div className='pagination'>
              <button><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='violet'>쇼핑아이템</em>더보기 </span> <span><em>1</em> / 4</span>
              <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </article>
          <article className='subscribe'>
            {/* 구독 */}
            <div className='contents'>
              <div className='contents__nav'>
                {articleSubscribe.map((na) => (
                  <button
                    key={na.id}
                    className={`contents__nav--slash ${selectedItem.shopping === na.name ? 'selected' : ''}`}
                    onClick={() => handleSelectCardSection('shopping', na.name)}
                  >
                    {na.name}
                  </button>
                ))}

              </div>
              <div className='subscribe__short'>
                {subscribeSubTitle.map((i, index) => (
                  <button key={index} style={{ backgroundColor: selectedItem.subscribe_sub_nav === i.name ? i.backgroundColor : 'white' }} className={selectedItem.subscribe_sub_nav === i.name ? 'subscribe__short__button--selected' : 'subscribe__short__button'} onClick={() => handleSelectCardSection('subscribe_sub_nav', i.name)}>
                    {i.name}
                  </button>
                ))}
              </div>
              <div className='subscribe__main' >

              </div>
            </div>
            <div className='pagination'>
              <span>펼쳐보기<em className='plus'> + </em> </span>
            </div>
          </article>
        </div>
        <div className='main--left'>
          <article className='login'>
            {/* 로그인 */}
            <span>네이버를 더 안전하고 편리하게 이용하세요.</span>
            <Link><em>NAVER</em>로그인</Link>
            <div>
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
              <span>회원가입</span>
            </div>
          </article>
          <aside className='ad' />
          <article className='weather'>
            {/* 날씨 */}
          </article>
          <article className='stock'>
            {/* 증시 */}
            <div></div>
            <div></div>
          </article>
          <article className='widget'>
            {/* 위젯보드 */}
            <div></div>
          </article>
        </div>
      </main>

      <footer className='footer' >
        <div className='footer-inner ad__wrapper'>
          <Link to="#" className='ad'>
            <div className='ad__image'><img src={image} alt='광고' /></div>
            <div className='ad__description'>
              <span className='ad__description--gray'>케이뱅크</span>
              <span className='ad__description--underline'>네이버 쇼핑 이벤트 </span>
              <pre>
                체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
              </pre>
            </div>
          </Link>
          <Link to="#" className='ad'>
            <div className='ad__image'><img src={image} alt='광고' /></div>
            <div className='ad__description'>
              <span className='ad__description--gray'>케이뱅크</span>
              <span className='ad__description--underline'>네이버 쇼핑 이벤트 </span>
              <pre>
                체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
              </pre>
            </div>
          </Link>
          <Link to="#" className='ad'>
            <div className='ad__image'><img src={image} alt='광고' /></div>
            <div className='ad__description'>
              <span className='ad__description--gray'>케이뱅크</span>
              <span className='ad__description--underline'>네이버 쇼핑 이벤트 </span>
              <pre>
                체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
              </pre>
            </div>
          </Link>
        </div>
        <div className='footer-inner notification'>
          <Link>공지사항</Link>
          <Link>서비스 전체보기 &gt; </Link>
        </div>
        <div className='footer-inner contents'>
          <div><em>Creators</em> <span>크리에이터</span> <span>스몰비즈니스</span></div>
          <div><em>Partners</em> <span>아하랩스</span> <span>sdfsdfsdsdf</span></div>
          <div><em>Developers</em> <span>노영서</span> <span>양다영</span> <span>박상현</span></div>
        </div>
        <div className='footer-inner bottom' >
          {footerContents.map((f, index) => (
            <span key={index} className='bottom--hover' style={{ fontWeight: f.fontWeight }}>
              {f.name}
            </span>
          ))}
        </div>
      </footer>

    </>
  )
}

export default MainPage