import H from '../../../src/assets/img/Home/H.svg'
import FlowerONE from '../../../src/assets/img/Home/FlowerONE.svg'
import FlowerTWO from '../../../src/assets/img/Home/FlowerTWO.svg'
import silhouette from '../../../src/assets/img/Home/silhouette.svg'
import a from '../../../src/assets/img/Home/a.svg'
import l from '../../../src/assets/img/Home/l.svg'
import S from '../../../src/assets/img/Home/S.svg'
import y from '../../../src/assets/img/Home/y.svg'
import M from '../../../src/assets/img/Home/M.svg'
import í from '../../../src/assets/img/Home/í.svg'
import e from '../../../src/assets/img/Home/e.svg'
import r from '../../../src/assets/img/Home/r.svg'

const Header = () => {
    return (
        <section className="header">
            <div className="box">
                <div className="grid-one">
                    <img src={H} alt="H"/>
                    <img src={FlowerONE} alt="FlowerONE" className="flower-one"/>
                    <img src={l} alt="l"/>
                    <img src={a} alt="a"/>
                </div>
                <div className="grid-two">
                    <img src={S} alt="S"/>
                    <img src={silhouette} alt="silhouette" className="logo"/>
                    <img src={y} alt="y" className="y-letter"/>
                    <h1>  </h1>
                    <img src={M} alt="M"/>
                    <img src={a} alt="a"/>
                    <img src={r} alt="r"/>
                    <img src={í} alt="í"/>
                    <img src={a} alt="a"/>
                    <h1>  </h1>
                    <img src={H} alt="H"/>
                    <img src={e} alt="e"/>
                    <img src={r} alt="r"/>
                    <img src={r} alt="r"/>
                    <img src={e} alt="e"/>
                    <img src={r} alt="r"/>
                    <img src={a} alt="a"/>
                    <img src={FlowerTWO} alt="FlowerTWO" className="flower-two"/>
                </div>
                {/* <div className="sub-title">
                    <h2>Desarrolladora Web Full Stack</h2>
                </div> */}
            </div>
        </section>
    )
}

export default Header