import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faBars, faCommentDots,faBell,
  faAngleRight,
  faAngleLeft,
  faBagShopping, 
  faCircleDollarToSlot, faEnvelopeOpenText, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import image from 'assets/image/이미지.jpg'
const navContents = [
  {
    id: 1,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 2,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 3,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 4,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 5,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 6,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 7,
    link: '#',
    name: '메일',
    icon: faEnvelopeOpenText
  },
  {
    id: 8,
    link: '#',
    name: '',
    icon: faEllipsis
  },
]

const article1 = [
  {id:1, name: '뉴스스탠드'},
  {id:1, name: '뉴스스탠드'},
  {id:1, name: '뉴스스탠드'},
  {id:1, name: '뉴스스탠드'}
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
]

const MainPage = () => {
  return (
    <>
    <header className='inner'>
      <div className='top_icon_wrapper'>
        <button className='top_icon menu'><FontAwesomeIcon icon={faBars} /></button>
        <button className='top_icon pay'><FontAwesomeIcon icon={faCircleDollarToSlot} /></button>
        <button className='top_icon message'><FontAwesomeIcon icon={faCommentDots} /></button>
        <button className='top_icon bell'><FontAwesomeIcon icon={faBell} /></button>
      </div>
      <div>
        <form>
          <input placeholder='검색어를 입력하세요.'/>
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </div>
    </header>
    <nav>
      {navContents.map((n)=>
      (
      <button key={n.id}>
        <a href={n.link}>
          <div>
              <FontAwesomeIcon icon={n.icon} />
            </div>
            <span>{n.name}</span>
        </a>
      </button>
      ))}
    </nav>
    <main className='main inner'>
      <div className='main_right'>
         <aside>
          <img alt='광고' src={image}/>
         </aside>
        <article>
          <div>
            <div>
              {article1.map((a) => (
                <button key={a.id}>
                  <h3>
                    {a.name}
                  </h3>
                </button>
              ))}
            </div>
            <div> 
              {/* 회색 박스 */}
              <span>
                전체언론사
              </span>
              <span>한겨래</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
            </div>
            <div>
              {news.map((i)=> (
                <div key={i.id} >
                  <img src={i.imgSrc} alt={i.name} />
                  <div>
                    <span>구독</span>
                    <span>기사보기</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button><FontAwesomeIcon icon={faAngleRight} /></button>
            <span> <strong>언론사</strong>더보기</span>
            <div><span>1</span><span>/4</span></div>
            <button><FontAwesomeIcon icon={faAngleLeft} /></button>
          </div>
        </article>
        {/* 쇼핑 */}
        <article className='shopping'>
        <div>
            <div>
              {article1.map((a) => (
                <button key={a.id}>
                  <h3>
                    {a.name}
                  </h3>
                </button>
              ))}
            </div>
            <div> 
              {/* 회색 박스 */}
              <span>
                전체언론사
              </span>
              <span>한겨래</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</span>
            </div>
            <div>
              <div>
                <div>
                  <img src={image} alt='shoppingImage'/>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <div>
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
                  <div>
                    <button>
                      <FontAwesomeIcon icon={faBagShopping} />
                      <span>쇼핑홈</span>
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faBagShopping} />
                      <span>쇼핑홈</span>
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faBagShopping} />
                      <span>쇼핑홈</span>
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faBagShopping} />
                      <span>쇼핑홈</span>
                    </button>
                  </div>
                  <div>
                    <img alt='광고' src={image}/>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button><FontAwesomeIcon icon={faAngleRight} /></button>
            <span> <strong>언론사</strong>더보기</span>
            <div><span>1</span><span>/4</span></div>
            <button><FontAwesomeIcon icon={faAngleLeft} /></button>
          </div>
        </article>
      </div>
      <div className='main_left'>
        <article>
          <span>네이버를 더 안전하고 편리하게 이용하세요</span>
          <button><img src='#' alt='#'/></button>
          <div>
            <button>아이디찾기</button>
            <button>비밀번호 찾기</button>
            <button>회원가입</button>
          </div>
        </article>
        <aside>
          <a href="https://github.com" ><img src='#' alt='#'/></a>
        </aside>
        <article>
          {/* 날씨 */}
        </article>
        <article>
          {/* 증시 */}
        </article>
        <article>
          {/* 위젯보드 */}
        </article>
        <button>
          <img src='#' alt='#'/>
          <pre>
            <span><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</strong></span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
          </pre>
        </button>
      </div>
    </main>

    <footer className='fotter inner' >

    </footer>
    </>
  )
}

export default MainPage