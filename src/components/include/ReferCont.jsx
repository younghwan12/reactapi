import React from "react";

// const referInfo = [
//   {
//     num: 1,
//     name: "align-color",
//     desc: "align-color는 콘텐츠 아이템의 색상을 설정합니다.",
//     star: "★★★☆☆",
//   },
//   {
//     num: 2,
//     name: "align-content",
//     desc: "align-content는 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.",
//     star: "★★★☆☆",
//   },
//   {
//     num: 3,
//     name: "align-items",
//     desc: "align-items는 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.",
//     star: "★★★☆☆",
//   },
//   {
//     num: 4,
//     name: "align-self",
//     desc: "align-self는 개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다.",
//     star: "★★★★★",
//   },
//   {
//     num: 5,
//     name: "all",
//     desc: "all는 요소의 속성을 초기화 또는 상속을 설정합니다.",
//     star: "★★★★★",
//   },
//   {
//     num: 6,
//     name: "animation",
//     desc: "animation는 애니메이션과 관련된 속성을 일괄적으로 설정합니다.",
//     star: "★★★★★",
//   },
//   {
//     num: 7,
//     name: "animation-delay",
//     desc: "animation-delay는 애니메이션의 지연 시간을 설정합니다.",
//     star: "★★★★☆",
//   },
//   {
//     num: 8,
//     name: "animation-direction",
//     desc: "animation-direction는 애니메이션 움직임 방향을 설정합니다.",
//     star: "★★★☆☆",
//   },
//   {
//     num: 9,
//     name: "animation-duration",
//     desc: "animation-duration는 애니메이션 움직임 시간을 설정합니다.",
//     star: "★★★☆☆",
//   },
//   {
//     num: 10,
//     name: "animation-fill-mode",
//     desc: "animation-fill-mode는 애니메이션이 끝난 후의 상태를 설정합니다.",
//     star: "★★☆☆☆",
//   },
// ];

// const ReferText = ({ id, name, desc, star }) => {
//   return (
//     <li>
//       <a href="/">
//         <span className="num">{id}</span>
//         <span className="name">{name}</span>
//         <span className="desc">{desc}</span>
//         <span className="star">{star}</span>
//       </a>
//     </li>
//   );
// };

const ReferText = ({num, title, desc, star})=> {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
        <a className="link" href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${title}`}><span className="star">보기</span></a>
      </a>
    </li>
  )
}



const ReferCont = ({references}) => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx)=>(
              <ReferText
                key={idx}
                num={refer.num}
                title={refer.title}
                desc={refer.desc}
                star={refer.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
