import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faAngleLeft,
  faBagShopping, 
  faCircleDollarToSlot, 
  faEllipsis,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"
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


const MainPage = () => {
  const [openSearchHistory, setOpenSearchHistory] = useState(false)
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
          <div className='search__logo' />
          <input className='search__input' placeholder='검색어를 입력하세요.' />
          <button className='search__keyboard'/>
          <button className={`search__history__${openSearchHistory ? 'up' : 'down'}`} onClick={handleSearchHistory}><FontAwesomeIcon icon={faCaretDown} /></button>
          <Link className='search__icon' />
        </div>
      </header>

      {/* 메뉴 부분 */}
      <nav>
        <ul className='nav'>
          {navContents.map((n) =>
            (
              <li className='nav_item' key={n.id}>
                <div className='nav_item__icon'>
                  <NavLink href={n.link} >
                    {MakeComponent(n.icon, { })}
                  </NavLink>
                </div>
                <span className='nav-item__text'><NavLink href={n.link}>{n.name}</NavLink></span>
              </li>
            ))}
          <li>
            <div className='nav_item__icon'>
              <NavLink href='#' >
                <Ellipsis />
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>

      {/* 메인영역 */}
      <main>
        <div className='main_left'>
          <aside className='main_left__main_ad'>
            <img alt='광고' src={image}/>
          </aside>

          {/* 뉴스 */}
          <article className='main_left__news'>
            <div className='main_left__news__nav'>
              <button className={selectedItem.news === '뉴스스탠드' ? 'main_left__news__nav__button__selected': 'main_left__news__nav__button'} onClick={() => handleSelectCardSection('news', '뉴스스탠드')}>
                뉴스스탠드
              </button>
              {article1.map((a) => (
                <button key={a.id} className={selectedItem.news === a.name ? 'main_left__news__nav__button__selected' : 'main_left__news__nav__button'} onClick={() => handleSelectCardSection('news', a.name)}>
                  {a.name}
                </button>
              ))}
            </div>
            <div className='main_left__news__short' >
              {/* 회색 박스 */}
              <span className='main_left__news__short_title'>
                전체언론사
              </span>
              <button className={`main_left__news__short__news_icon_${openSearchHistory ? 'up': 'down'}`} onClick={handleSearchHistory}><FontAwesomeIcon icon={faCaretDown} /></button>
              <span className='main_left__news__short__news_name'>한겨래</span>
              <span className='main_left__news__short__news_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
            </div>
            <div className='main_left__news__images'>
              {news.map((i, index) => (
                <div key={index} className='main_left__news__images_item'>
                  <Link>
                    <img src={i.imgSrc} alt={i.name} />
                  </Link>
                </div>
              ))}
            </div>
            <div className='main_left__news__pagination'>
              <button className='main_left__news__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='title'>언론사</em> 더보기</span>
              <div><em> 1</em><span>/4</span></div>
              <button className='main_left__news__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </article>

          {/* 쇼핑 */}
          <article className='main_left__shopping'>
            <div className='main_left__shopping__nav'>
              {articleShopping.map((a) => (
                <button key={a.id} className={selectedItem.shopping === a.name ? 'main_left__shopping__nav__button__selected' : 'main_left__shopping__nav__button'} onClick={() => handleSelectCardSection('shopping', a.name)}>
                  {a.name}
                </button>
              ))}
            </div>
            <div className='main_left__shopping__short'> 
              <div className='main_left__shopping__short_left'>
                <span className='main_left__shopping__short_left_title' >
                  오늘의 혜택
                </span>
                <span className='main_left__shopping__short_left__brand_name'>브랜드이름</span>
                <span className='main_left__shopping__short_left__brand_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
              </div>
              <div className='main_left__shopping__short_right'>
                <div className='main_left__shopping__short_right__pagination_number'><em> 1</em><span>/4</span></div>
                <button className='main_left__shopping__short_right__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className='main_left__shopping__short_right__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
              </div>
            </div>
            <div className='main_left__shopping__card_images'>
              <div className='main_left__shopping__card_images__left'>
                {shoppingCards.map((p, index)=> (
                  <div key={index} className='main_left__shopping__card_images__left__brand_card'>
                    <div className='main_left__shopping__card_images__left__brand_card__image'>
                      <img src={p.imgSrc} alt='shoppingImage' />
                    </div>
                    <pre className='main_left__shopping__card_images__left__brand_card__sub_title'>
                      {p.subTitle}
                    </pre>
                  </div>
                ))}
              </div>
              <div className='main_left__shopping__card_images__right'>
                <div className='main_left__shopping__card_images__right__brand_names'>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                  <span>쿠팡</span>
                </div>
                <div className='main_left__shopping__card_images__right__links'>
                  <Link>
                    <div className='main_left__shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='main_left__shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='main_left__shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='main_left__shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='main_left__shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='main_left__shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                  <Link>
                    <div className='main_left__shopping__card_images__right__links_icon'><FontAwesomeIcon icon={faBagShopping} /></div>
                    <span className='main_left__shopping__card_images__right__links_label'>쇼핑홈</span>
                  </Link>
                </div>
                <div className='main_left__shopping__card_images__right__ad'>
                  <div className='main_left__shopping__card_images__right__ad__image'>
                    <img alt='광고' src={image} />
                  </div>
                  <span className='main_left__shopping__card_images__right__ad__label'>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </div>
            </div>
            <div className='main_left__shopping__pagination'>
              <button className='main_left__shopping__pagination_button'><FontAwesomeIcon icon={faAngleLeft} /></button>
              <span><em className='title'>쇼핑아이템</em> 더보기</span>
              <div><em> 1</em><span>/4</span></div>
              <button className='main_left__shopping__pagination_button'><FontAwesomeIcon icon={faAngleRight} /></button>
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
                  <p className='main_left__subscribe__card_images__brand_card__sub_title'>
                    {p.subTitle}
                  </p>
                  <div className='main_left__subscribe__card_images__brand_card__brand'>
                    <div className='main_left__subscribe__card_images__brand_card__brand__image'>
                      <img src={p.icon} alt='판매자로고'/>
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
            <a href="https://github.com" ><img src='#' alt='#'/></a>
          </aside>
          <article className='main_right__weather'>
            {/* 날씨 */}
          </article>
          <article className='main_right__stock'>
            {/* 증시 */}
          </article>
          <article className='main_right__widget'>
            {/* 위젯보드 */}
            위젯
          </article>
          <button className='main_right__button'>
            <img src={image} alt='#'/>
            <p>
              <em>Lorem ipsum, dolor sit amet consect</em>
              <br/>
              <span>Lorem ipsum dolor sit amet consec elit.</span>
            </p>
          </button>
        </div>
      </main>

      <footer className='footer inner' >

      </footer>
    </>
  )
}

export default MainPage