import React from 'react';
import './navigation.css';
const Navigation = () => {
    return (
        <div className="bg-dark navbarHeight">
            <h3 className="pl-3 mt-5 badge text-secondary">FEROFEN YÖNETİCİSİ</h3>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a id="btn1" onClick={(e) => { activeClass(e) }} className="nav-link mt-3 hoverNavs active" href="#">
                    <i className="fa fa-home fa-lg mr-1"></i> Ana Sayfa
                </a>
                <a id="btn2" onClick={(e) => { activeClass(e) }} className="nav-link mt-2 hoverNavs" href="#">
                    <i className="fa fa-taxi fa-lg"></i> Taksi Listesi
                </a>
                <a id="btn3" onClick={(e) => { activeClass(e) }} className="nav-link mt-2 hoverNavs" href="#">
                    <i className="fa fa-user fa-lg mr-2"></i> Sürücü Listesi
                </a>
                <a id="btn4" onClick={(e) => { activeClass(e) }} className="nav-link mt-2 hoverNavs" href="#">
                    <i className="fa fa-money fa-lg"></i> Unutulan Eşyalar
                </a>
                <a id="btn5" onClick={(e) => { activeClass(e) }} className="nav-link mt-2 hoverNavs" href="#">
                    <i className="fa fa-suitcase fa-lg"></i> Yolculuklar
                </a>
                <a id="btn6" onClick={(e) => { activeClass(e) }} className="nav-link mt-2 hoverNavs" href="#">
                    <i className="fa fa-exchange fa-lg"></i> Rapor
                </a>
            </div>
            <h3 className="pl-3 mt-3 badge text-secondary">AYARLAR</h3>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a id="btn7" onClick={(e) => { activeClass(e) }} className="nav-link mt-3 hoverNavs" href="#">
                    <i className="fa fa-cogs fa-lg"></i> Kullancı Ayarları
                </a>
            </div>
        </div>
    );
    function activeClass(e) {
        var elementClass = document.getElementsByClassName("active");
        var elementId = elementClass[0].id;
        document.getElementById(elementId).classList.remove("active");
        document.getElementById(e.target.id).classList.add("active");
        console.log(elementClass);
        console.log(elementId);
    }
}
export default Navigation;