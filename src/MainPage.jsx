import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faAngleLeft,
  faBagShopping, 
  faCircleDollarToSlot, 
  faCloud,
  faCloudRain,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"
import image from 'assets/image/이미지.jpg'
import { ReactComponent as MailIcon } from 'assets/image/envelope-regular.svg'
import { ReactComponent as Ellipsis } from 'assets/image/ellipsis-solid.svg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';

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

const article1 = [
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


const MainPage = () => {
  const [openSearchHistory, setOpenSearchHistory] = useState(false)
  const [time, setTime] = useState('')
  const MakeComponent = (Component, props) => {
    return <Component {...props} />
  }
  
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
      <header>
        <div className='top_wrapper'>
          <button className='top_icon__menu' />
          <Link className='top_icon__pay'><FontAwesomeIcon icon={faCircleDollarToSlot} /></Link>
          <button className='top_icon__message' />
          <button className='top_icon__bell' />
        </div>
        <div className='search'>
          <h1 className='search__h1'>네이버 클론 화이팅!</h1>
          <i className='search__logo' />
          <input className='search__input' placeholder='검색어를 입력하세요.' />
          <button className='search__keyboard' />
          <button className={`search__history__${openSearchHistory ? 'up' : 'down'}`} onClick={handleSearchHistory}><FontAwesomeIcon icon={faCaretDown} /></button>
          <Link className='search__icon' />
        </div>
      </header>

      {/* 메뉴 부분 */}
      <nav>
        <ul className='nav'>
          {navContents.map((n) =>
            (
              // 링크에 바로 icon 넣기 
              <li className='nav_item' key={n.id}> 
                <div className='nav_item__icon'>
                  <Link to={n.link}>
                    {MakeComponent(n.icon, {})}
                  </Link>
                </div>
                <span className='nav-item__text'><Link to={n.link}>{n.name}</Link></span>
              </li>
            ))}
          <li>
            <div className='nav_item__icon'>
              <Link to='#' >
                <Ellipsis />
              </Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* 메인영역 */}
      <main>
        <div className='main_left'>
          <aside className='main_left__main_ad'>
            <img alt='광고' src={image} />
          </aside>

          {/* 뉴스 */}
          <article className='news'>
            <div className='news__nav'>
              <button className={selectedItem.news === '뉴스스탠드' ? 'news__nav__button--selected' : 'news__nav__button'} onClick={() => handleSelectCardSection('news', '뉴스스탠드')}>
                  뉴스스탠드
              </button>
              {article1.map((a) => (
                <button key={a.id} className={selectedItem.news === a.name ? 'news__nav__button__selected' : 'news__nav__button'} onClick={() => handleSelectCardSection('news', a.name)}>
                  {a.name}
                </button>
              ))}
            </div>
            <div className='news__short' >
              {/* 회색 박스 */}
              <span className='news__short_title'>
                  전체언론사
              </span>
              <button className={`news__short__news_icon_${openSearchHistory ? 'up' : 'down'}`} onClick={handleSearchHistory}><FontAwesomeIcon icon={faCaretDown} /></button>
              <span className='news__short__news_name'>한겨래</span>
              <span className='news__short__news_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
            </div>
            <div className='news__images'>
              {news.map((i, index) => (
                <div key={index} className='news__images_item'>
                  <Link>
                    <img src={i.imgSrc} alt={i.name} />
                  </Link>
                </div>
              ))}
            </div>
            <div className='news__pagination'>
              <button className='news__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='title'>언론사</em> 더보기</span>
              <div><em> 1</em><span>/4</span></div>
              <button className='news__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </article>

          {/* 쇼핑 */}
          <article className='shopping'>
            <div className='shopping__nav'>
              {articleShopping.map((a) => (
                <button key={a.id} className={selectedItem.shopping === a.name ? 'shopping__nav__button--selected' : 'shopping__nav__button'} onClick={() => handleSelectCardSection('shopping', a.name)}>
                  {a.name}
                </button>
              ))}
            </div>
            <div className='shopping__short'>
              <div className='shopping__short_left'>
                <span className='shopping__short_left_title' >
                    오늘의 혜택
                </span>
                <span className='shopping__short_left__brand_name'>브랜드이름</span>
                <span className='shopping__short_left__brand_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
              </div>
              <div className='shopping__short_right'>
                <div className='shopping__short_right__pagination_number'><em> 1</em><span>/4</span></div>
                <button className='shopping__short_right__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className='shopping__short_right__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
              </div>
            </div>
            <div className='shopping__card_images'>
              <div className='shopping__card_images__left'>
                {shoppingCards.map((p, index) => (
                  <div key={index} className='shopping__card_images__left__brand_card'>
                    <div className='shopping__card_images__left__brand_card__image'>
                      <img src={p.imgSrc} alt='shoppingImage' />
                    </div>
                    <pre className='shopping__card_images__left__brand_card__sub_title'>
                      {p.subTitle}
                    </pre>
                  </div>
                ))}
              </div>
              <div className='shopping__card_images__right'>
                <div className='shopping__card_images__right__brand_names'>
                  {shoppingBrand.map((b, index)=> <Link key={index}>{b.name} .</Link>)}
                </div>
                <div className='shopping__card_images__right__links'>
                  <Link>
                    <div className='shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                </div>
                <div className='shopping__card_images__right__ad'>
                  <div className='shopping__card_images__right__ad__image'>
                    <img alt='광고' src={image} />
                  </div>
                  <span className='shopping__card_images__right__ad__label'>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </div>
            </div>
            <div className='shopping__pagination'>
              <button className='shopping__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='title'>쇼핑아이템</em> 더보기</span>
              <div><em> 1</em><span>/4</span></div>
              <button className='shopping__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </article>

          {/* subscribe */}
          <article className='main_left__subscribe'>
            <div className='main_left__subscribe__nav'>
              {articleSubscribe.map((a) => (
                <button key={a.id} className={selectedItem.subscribe === a.name ? 'main_left__subscribe__nav__button__selected' : 'main_left__subscribe__nav__button'} onClick={() => handleSelectCardSection('subscribe', a.name)}>
                  {a.name}
                </button>
              ))}
            </div>
            <div className='main_left__subscribe__short'>
              {subscribeSubTitle.map((i, index) => (
                <button key={index} style={{ backgroundColor: selectedItem.subscribe_sub_nav === i.name ? i.backgroundColor : 'white' }} className={selectedItem.subscribe_sub_nav === i.name ? 'main_left__subscribe__short__button__selected' : 'main_left__subscribe__short__button'} onClick={() => handleSelectCardSection('subscribe_sub_nav', i.name)}>
                  {i.name}
                </button>
              ))}
            </div>
            <div className='main_left__subscribe__card_images'>
              {subscribeCards.map((p, index) => (
                <Link key={index} className='main_left__subscribe__card_images__brand_card'>
                  <div className='main_left__subscribe__card_images__brand_card__image'>
                    <img src={p.imgSrc} alt='shoppingImage' />
                  </div>
                  {/* <img src={p.imgSrc} alt='shoppingImage' /> */}
                  <p className='main_left__subscribe__card_images__brand_card__sub_title'>
                    {p.subTitle}
                  </p>
                  <div className='main_left__subscribe__card_images__brand_card__brand'>
                    <div className='main_left__subscribe__card_images__brand_card__brand__image'>
                      <img src={p.icon} alt='판매자로고' />
                    </div>
                    <span className='main_left__subscribe__card_images__brand_card__brand__name'>
                      {p.brand}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <button className='main_left__subscribe__pagination'>
              <span>펼쳐보기</span>
              <em>+</em>
            </button>
          </article>
        </div>
        <div className='main_right'>
          <article className='main_right__login'>
            <span className='main_right__login__title'>네이버를 더 안전하고 편리하게 이용하세요</span>
            <button className='main_right__login__button'>
              <Link>
                <em>NAVER</em> <span>로그인</span>
              </Link>
            </button>
            <div className='main_right__login__link'>
              <Link>아이디찾기</Link>
              <Link>비밀번호 찾기</Link>
              <Link>회원가입</Link>
            </div>
          </article>
          <aside className='main_right__ad'>
            <Link href="https://github.com" ><img src={image} alt='#' /></Link>
          </aside>
          <article className='main_right__weather'>
            {/* 날씨 */}
            <div className='main_right__weather__topWrapper'>
              <span className='main_right__weather__title'>날씨</span>
              <Link className='main_right__weather__title__link'><i className='main_right__weather__title__icon' />예보 비교</Link>
              <span className='main_right__weather__location'>성남시 구미동</span>
            </div>
            <div className='main_right__weather__main'>
              <Link className='weather__now'>
                <div className='weather__now-'>
                  <i className='weather__now-icon' />
                  <div className='weather__now-description'>
                    <span>21.1&deg;</span>
                    <span>흐림</span>
                  </div>
                </div>
                <div className='weather__now__today-summery-deg'>
                  <span>14&deg;</span>/ <span>21&deg;</span>
                </div>
                <div className='weather__now__today-summery-air_quality'>
                  <span>미세<em>보통</em></span>&middot;<span>초미세<em>보통</em></span>
                </div>
              </Link>
              <Link className='weather__graph'>

              </Link>
            </div>
          </article>
          <article className='main_right__stock'>
            <div className='main_right__stock__topWrapper'>
              <span className='main_right__stock__title'>증시</span>
              <button className='main_right__stock__title__link'></button>
              <span className='main_right__stock__location'>{time}</span>
            </div>
          </article>
          <article className='main_right__widget'>
            {/* 위젯보드 */}
              위젯
          </article>
          <button className='main_right__button'>
            <img src={image} alt='#' />
            <p>
              <em>Lorem ipsum, dolor sit amet consect</em>
              <br />
              <span>Lorem ipsum dolor sit amet consec elit.</span>
            </p>
          </button>
        </div>
      </main>

      <footer className='bottom' >
        <div className='inner'>
          <div className='footer-top'>
            <Link to="#" className='ad'>
              <div className='ad__image-wrapper'><img src={image} alt='광고' className='ad__image-image' /></div>
              <button className='ad__image-button'>
                <div className='ad__image-button--gray'>케이뱅크</div>
                <span className='ad__image-button--underline'>네이버 쇼핑 이벤트 </span>
                <pre className='ad__image-button--describe'>
                  체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
                </pre>
              </button>
            </Link>
            <Link to="#" className='ad'>
              <div className='ad__image-wrapper'><img src={image} alt='광고' className='ad__image-image' /></div>
              <button className='ad__image-button'>
                <div className='ad__image-button--gray'>케이뱅크</div>
                <span className='ad__image-button--underline'>네이버 쇼핑 이벤트 </span>
                <pre className='ad__image-button--describe'>
                  체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
                </pre>
              </button>
            </Link>
            <Link to="#" className='ad'>
              <div className='ad__image-wrapper'><img src={image} alt='광고' className='ad__image-image' /></div>
              <button className='ad__image-button'>
                <div className='ad__image-button--gray'>케이뱅크</div>
                <span className='ad__image-button--underline'>네이버 쇼핑 이벤트 </span>
                <pre className='ad__image-button--describe'>
                  체크카드 결제 시 <br />스벅 아메리카노!(1천명 추첨)
                </pre>
              </button>
            </Link>
          </div>
          <div className='notification'>
            <Link className='notification__left'>공지사항</Link>
            <Link className='notification__right'>전체 서비스  &gt; </Link>
          </div>
          <div className='contents'>
            <div className='contents--hover'><em>Creators</em> <span>크리에이터</span> <span>스몰비즈니스</span></div>
            <div className='contents--hover'><em>Partners</em> <span>크리에이터</span> <span>스몰비즈니스</span></div>
            <div className='contents--hover'><em>Developers</em> <span>노영서</span> <span>양다영</span> <span>박상현</span></div>
          </div>
        </div>
        <div className='bottom' >
          {footerContents.map((f, index) => (
            <span key={index} className='bottom--hover' style={{fontWeight: f.fontWeight}}>
              {f.name}
            </span>
          ))}
        </div>
      </footer>
    </>
  )
}

export default MainPage