<template>
    <nav>
        <div id="SelectNav">
            <ul id="MenuBarF">
                <li class="MenuBarFElement" id="MenuBarFStart">
                    <div class="MenuBarFText">
                        <img class="MenuBarStartIcon" src="/misc/Navs/Start.png">
                        <label>
                            <span class="MenuBarFTextContent">Start</span>
                        </label>
                    </div>
                    <ul class="MenuBarS">
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    关于HWT...
                                </label></div>
                        </li>
                        <hr>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    偏好设置...
                                </label></div>
                        </li>
                        <li class="MenuBarElement Selectable MenuBarHasT3Element">
                            <div class="MenuBarElementText"><label>
                                    应用程序...
                                </label>
                                <span class="MenuBarTSelectSign">></span>
                            </div>
                            <ul class="MenuBarT3P">
                                <li class="MenuBarElement Selectable MenuBarApplications">
                                    <img class="MenuBarApplicationIcon" src="/misc/FunctionIcons/OCC.png">
                                    <label>
                                        <span class="MenuBarApplicationText">Opencore Configurer</span>
                                    </label>
                                </li>
                                <li class="MenuBarElement Selectable MenuBarApplications">
                                    <img class="MenuBarApplicationIcon" src="/misc/FunctionIcons/CCL.png">
                                    <label>
                                        <span class="MenuBarApplicationText">Clover Configurer</span>
                                    </label>
                                </li>
                                <li class="MenuBarElement Selectable MenuBarApplications">
                                    <img class="MenuBarApplicationIcon" src="/misc/FunctionIcons/QKC.png">
                                    <label>
                                        <span class="MenuBarApplicationText">Quickly Config(快速配置)</span>
                                    </label>
                                </li>
                                <hr>
                                <li class="MenuBarElement UnSelectable">
                                    <div class="MenuBarElementText"><label>
                                            某些功能需要一定条件才可以用
                                        </label></div>
                                </li>
                            </ul>
                        </li>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    上报Bug...
                                </label></div>
                        </li>
                        <hr>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    退出HWT...
                                </label></div>
                        </li>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    返回主界面...
                                </label></div>
                        </li>
                    </ul>
                </li>
                <li class="MenuBarFElement MenuBarFTitle">
                    <div class="MenuBarFText">
                        <label>设置</label>
                    </div>
                    <ul class="MenuBarS">
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    登出账户 Sudo-su-Bash...
                                </label></div>
                        </li>
                        <hr>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    账户...
                                </label></div>
                        </li>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    外观...
                                </label></div>
                        </li>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    上报Bug...
                                </label></div>
                        </li>
                        <hr>
                        <li class="MenuBarElement Selectable">
                            <div class="MenuBarElementText"><label>
                                    退回主界面...
                                </label></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="NavEndContainer">
            <ul class="NavEnd">
                <li class="NavEndShow NavUserInfo">
                    <div class="NavEndLiElement NavUserIconContainer">
                        <img class="NavUserIcon" src="/misc/DragonStudio.png">
                    </div>
                </li>
                <li class="NavEndShow">
                    <div class="NavEndLiElement NavEndSearch">
                        <input class="NavEndSearchBox" type="search" placeholder="伪Spotlight..." />
                        <div class="NavSearchIcon">
                            <label>🔍</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="NavEndLiElement PersonShowContainer">
                        <div class="PersonShowPanel">
                            <div class="PersonShow">
                                <div class="NavCircle Green"></div>
                                <span>
                                    在线人数 30
                                </span>
                            </div>
                            <div class="PersonShow">
                                <div class="NavCircle Blue"></div>
                                <span>
                                    总共来访 3.5w
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
nav {
    height: 25px;
    display: flex;
    background-color: rgb(255, 255, 255, 0.4);
    backdrop-filter: blur(70px);
    position: relative;
    z-index: 2;
    min-width: 980px;
}

#SelectNav {
    margin-left: 5px;
    display: flex;
    align-items: center;
}

#WebTitle {
    font-weight: bold;
}

#MenuBarF {
    display: flex;
    height: 100%;
    align-items: center;
}

.MenuBarFElement {
    font-size: 12px;
    position: relative;
    display: inline-block;
    list-style: none;
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
    border-radius: 5px;
    transition: background-color 200ms;
}

.MenuBarFElement:hover {
    background-color: rgba(214, 214, 214, 0.647);
}

.MenuBarFElement:hover>ul {
    display: block;
}

.MenuBarFTitle {
    font-size: 12px;
    font-weight: bold;
}

.MenuBarFText {
    display: flex;
    align-items: center;
    height: 100%;
}

.MenuBarS {
    border: 1px solid #4c4140;
    font-style: normal;
    display: none;
    border-radius: 5px;
    width: auto;
    min-width: 230px;
    padding: 5px;
    position: absolute;
    background-color: rgba(245, 245, 245, 0.7);
    backdrop-filter: blur(70px);
    left: 0;
    font-weight: normal;
}

.MenuBarElement {
    position: relative;
    font-size: 12px;
    width: auto;
    border-radius: 5px;
    padding-left: 5px;
    display: flex;
    list-style: none;
    transition: background-color 100ms;
}

#MenuBarFStart {
    margin-left: 5px;
    font-weight: bolder;
    font-style: oblique;
    font-size: 15px;
}

.MenuBarStartIcon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.Selectable:hover {
    background-color: palevioletred;
}

.UnSelectable {
    color: gray;
}

.addLine {
    margin-top: 2px;
    margin-bottom: 2px;
    border-radius: 0px;
    border-bottom: 1px solid #c2c0c5;
}

.unclickable {
    font-weight: normal;
    color: rgb(128, 128, 128, 0.7);
}

.Blue {
    background-color: blue;
}

.Green {
    background-color: green;
}

.NavCircle {
    width: 7px;
    height: 7px;
    border-radius: 50%;
}

.PersonShow {
    transform: scale(0.7);
}

.NavEndShow {
    display: inline-block;
    height: 100%;
    margin-left: 4px;
    position: relative;
}

.NavEndShow>span {
    padding-left: 5px;
}

.NavEndSearch {
    display: flex;
}

.NavSearchIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: rgb(90, 214, 236);
    margin-left: 4px;
}

.NavSearchIcon>label {
    transform: scale(0.8);
}

.NavEndSearchBox {
    background-color: rgba(0, 0, 0, 0);
    height: 18px;
    width: 30px;
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 5px;
    font-size: 12px;
    transition: all 300ms;
}

.NavEndSearchBox:focus {
    width: 150px;
}

.PersonShow {
    display: flex;
    align-items: center;
}

.PersonShowContainer {
    line-height: 10px;
    display: flex;
    margin-bottom: auto;
}

.NavUserIcon {
    -webkit-transform-origin-x: 100%;
    -webkit-transform-origin-y: 0%;
    width: 19px;
    height: 19px;
    border: 2px solid black;
    border-radius: 50%;
}

.NavEnd {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    font-size: 10px;
    height: 100%;
}

.NavEndContainer {
    margin-left: auto;
    display: block;
}

.MenuBarFTextContent {
    color: royalblue;
}

.MenuBarTSelectSign {
    margin-left: auto;
    margin-right: 3px;
    color: rgb(164, 164, 164);
}

.MenuBarElementText {
    display: flex;
    width: 100%;
}

.MenuBarT3P {
    display: none;
    padding: 5px;
    width: 230px;
    position: absolute;
    left: 100%;
    background-color: rgba(245, 245, 245, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid #4c4140;
    border-radius: 5px;
}

.MenuBarApplications {
    display: flex;
    align-items: center;
    padding-left: 2px;
}

.MenuBarApplicationIcon {
    height: 15px;
    width: 15px;
    padding-left: 0;
}

.MenuBarApplicationText {
    margin-left: 3px;
}

.MenuBarHasT3Element:hover>ul {
    display: block;
}

.NavUserIconContainer {
    display: flex;
    align-items: center;
    height: 100%;
}

.NavEndLiElement {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>
