<template>
  <NAQNav />
  <div class="WindowArea">
    <div class="WMLLeftSide">
      <div class="WMLLeftTitle">
        设置
      </div>
      <div class="WMLChooseSearch">
        <input type="search" class="WMLChooseSearchBox" placeholder="搜索设置...">
      </div>
      <div class="WMLChooseBar">
        <div class="WMLSelectable">
          <label class="WMLSelectIconLabel"><img src="/misc/SettingIcon/User.svg" class="WMLSelectIcon"></label>
          <div class="WMLSelectText"><label>用户信息</label></div>
        </div>
        <div class="WMLSelectable">
          <label class="WMLSelectIconLabel"><img src="/misc/SettingIcon/Score.png" class="WMLSelectIcon"></label>
          <div class="WMLSelectText"><label>积分明细</label></div>
        </div>
        <div class="WMLSelectable">
          <label class="WMLSelectIconLabel"><img src="/misc/SettingIcon/Security.png" class="WMLSelectIcon"></label>
          <div class="WMLSelectText"><label>安全管理</label></div>
        </div>
        <hr class="WMLSeparator" />
        <div class="WMLSelectable">
          <label class="WMLSelectIconLabel"><img src="/misc/SettingIcon/Appearance.png" class="WMLSelectIcon"></label>
          <div class="WMLSelectText"><label>外观</label></div>
        </div>
        <div class="WMLSelectable">
          <label class="WMLSelectIconLabel"><img src="/misc/SettingIcon/About.png" class="WMLSelectIcon"></label>
          <div class="WMLSelectText"><label>关于HWT...</label></div>
        </div>
      </div>
    </div>
  </div>
  <div class="full-window" role="about-window">
    <div class="about-window-main">
      <div class="product-showbox">
        <div class="product-showbox-index">
          <img src="/misc/HWTIcon.png" class="product-icon">
          <div class="product-show-text">
            <div class="product-show-text-container">
              <span class="product-show-title">Hackintosh Web ToolBox</span><br>
              <span class="product-show-version pst-small-1-text">版本 Test 1 (235201-Inside Test)</span><br>
              <span class="product-show-copyright pst-small-2-text">DRAGON STUDIO 出版.<span
                  style="color: red;">保留一切权利.</span></span><br>
              <span class="product-show-copyright pst-smallest-text">主题展示版本.仅供内部测试使用.</span><br>
            </div>
          </div>
        </div>
      </div>
      <div class="product-builders product-element">
        <div class="product-builders-title">
          制作人员名单
        </div>
        <div class="product-builders-info-panel">
          <div class="product-single-builder">
            <div class="product-build-image-container product-builder-element">
              <img class="product-build-image" src="/misc/SudosuBash.png">
            </div>

            <div class="product-builder-name product-builder-element">

              Sudo-su-Bash
            </div>
            <div class="product-builder-bilibili product-builder-element">
              <a class="product-builder-job-link-text" href="https://space.bilibili.com/628243105/">
                <i class="bi bi-arrow-down-right-circle"></i>
                去看Ta的B站</a>
            </div>
            <div class="product-builder-job-link">
              <a class="product-builder-job-link-text" href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                查看职位</a>
              <div class="product-builder-job">
                <div class="product-builder-job-title">职位</div>
                <ul class="product-builder-job-container">
                  <li class="product-builder-job-element Red">
                    <div class="product-builder-job-element-text">
                      总设计师
                    </div>
                  </li>
                  <li class="product-builder-job-element Yellow">
                    <div class="product-builder-job-element-text">
                      前端工程师
                    </div>
                  </li>
                  <li class="product-builder-job-element Blue">
                    <div class="product-builder-job-element-text">
                      后端工程师
                    </div>
                  </li>

                  <li class="product-builder-job-element Green">
                    <div class="product-builder-job-element-text">
                      代码审查师
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="product-single-builder">
            <div class="product-build-image-container product-builder-element">
              <img class="product-build-image" src="/misc/DragonStudio.png">
            </div>

            <div class="product-builder-name product-builder-element">

              Dragon Studio
            </div>
            <div class="product-builder-bilibili product-builder-element">
              <a class="product-builder-job-link-text" href="https://space.bilibili.com/628243105/">
                <i class="bi bi-arrow-down-right-circle"></i>
                去看Ta的B站</a>
            </div>
            <div class="product-builder-job-link">
              <a class="product-builder-job-link-text" href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                查看职位</a>
              <div class="product-builder-job">
                <div class="product-builder-job-title">职位</div>
                <ul class="product-builder-job-container">
                  <li class="product-builder-job-element Purple">
                    <div class="product-builder-job-element-text">
                      工作室
                    </div>
                  </li>
                  <li class="product-builder-job-element Pink">
                    <div class="product-builder-job-element-text">
                      图标设计
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="product-single-builder">
            <div class="product-build-image-container product-builder-element">
              <img class="product-build-image" src="/misc/FunctionIcons/CCL.png">
            </div>

            <div class="product-builder-name product-builder-element">

              uihd
            </div>
            <div class="product-builder-bilibili product-builder-element">
              <a class="product-builder-job-link-text" href="https://space.bilibili.com/628243105/">
                <i class="bi bi-arrow-down-right-circle"></i>
                去看Ta的B站</a>
            </div>
            <div class="product-builder-job-link">
              <a class="product-builder-job-link-text" href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                查看职位</a>
              <div class="product-builder-job">
                <div class="product-builder-job-title">职位</div>
                <ul class="product-builder-job-container">
                  <li class="product-builder-job-element Yellow">
                    <div class="product-builder-job-element-text">
                      前端工程师
                    </div>
                  </li>
                  <li class="product-builder-job-element Blue">
                    <div class="product-builder-job-element-text">
                      后端工程师
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="product-versions">
        <div class="product-versions-element browser-info ">
          <ul class="pve-ul">
            <li class="pve-ul-title">
              <img src="/misc/Browsers/Chrome.png" class="pve-browser-icon"><br>
              <span>Chromium</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">浏览器类型</span>
              <span class="pve-ul-kv-right">Chromium</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">版本</span>
              <span class="pve-ul-kv-right">106.0.0.0</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">操作系统</span>
              <span class="pve-ul-kv-right">macOS Catalina 10.15</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">内核版本</span>
              <span class="pve-ul-kv-right">Darwin 19.6.0</span>
            </li>
          </ul>
        </div>
        <div class="product-versions-element product-detail">
          <ul class="pve-ul">
            <li class="pve-ul-title">
              <img src="/misc/HWTIcon.png" class="pve-browser-icon"><br>
              <span>HWT 版本信息</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">HWT版本</span>
              <span class="pve-ul-kv-right">Test 1,仅供主题展示</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">版本号</span>
              <span class="pve-ul-kv-right">Theme Test</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">主题类型</span>
              <span class="pve-ul-kv-right">New Aqua Theme(NAT)</span>
            </li>
            <li class="pve-ul-element">
              <span class="pve-ul-kv-left">主题版本</span>
              <span class="pve-ul-kv-right">T-232501</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-supercow product-element">
        <div class="product-supercow-title">
          <span>本HWT具有</span>
        </div>
        <div class="product-supercow-text">
          <div class="product-supercow-super product-supercow-font">超</div>
          <div class="product-supercow-level product-supercow-font">级</div>
          <div class="product-supercow-cow product-supercow-font">牛</div>
          <div class="product-supercow-power product-supercow-font">力</div>
        </div>
        <div class="product-supercow-thanks">
          <div class="supercow-thanks-title">
            <span>致敬以下产品/物种</span>
          </div>
          <div class="supercow-thanks-area">
            <div class="supercow-thanks-element">
              <img class="ske-img" src="/misc/CowPower/APT.png">
              <div class="ske-name">
                APT
              </div>
              <div class="ske-desc">
                一款在Linux/越狱的iOS上的软件包管理器
              </div>

            </div>
            <div class="supercow-thanks-element">
              <img class="ske-img" src="/misc/CowPower/CowFather.jpg">
              <div class="ske-name">
                牛父
              </div>
              <div class="ske-desc">
                本班大名鼎鼎的教主,传说中的朊病毒就是这位研发的
              </div>
              <div class="ske-bilibili">
                <a class="product-builder-job-link-text" href="https://space.bilibili.com/384050822">
                  <i class="bi bi-arrow-down-right-circle"></i>
                  访问他的小破站
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import NAQNav from '@/components/NAQNav.vue';

/*
$(document).ready(()=>{
    $(".NavSearchIcon").click(()=>{
        document.getElementsByClassName("NavEndSearchBox")[0].focus();
    });
})
*/
</script>

<style>
.about-window-main {
    width: 680px;
    max-height: 630px;
    background-color: wheat;
    border-radius: 10px;
    padding: 10px;
    overflow-y: auto;
}

.about-window-main::-webkit-scrollbar {
    display: none;
}

.product-element {
    margin-top: 4px;
    box-shadow: 0 0 10px grey;
    border-radius: 10px;
    background-color: white;
}

.product-showbox {
    color: white;
    height: auto;
    width: 100%;
    background-color: black;
    box-shadow: 0 0 10px grey;
    padding: 20px 0;
    border-radius: 10px;

}

.product-showbox-index {
    margin-left: 15px;
    width: calc(100% - 30px);
    height: auto;
    display: flex;
    align-items: center;
}

.product-icon {
    width: 130px;
    height: 130px;
}

.product-show-text {

    margin-left: 25px;
    line-height: 22px;
}

.product-show-title {
    font-size: 40px;
}

.pst-small-1-text {
    line-height: 0px;
    font-size: 18px;
}

.pst-small-2-text {
    font-size: 15px;
}
.pst-smallest-text {
    font-size: 12px;
}

.product-builders {
    padding: 5px;
    background-color: rgba(255, 255, 255);
}

.product-builders-title {
    border-radius: 5px;

    background-color: rgba(128, 128, 128, 0.495);
    display: flex;
    align-items: center;
    padding: 3px;
    padding-left: 5px;
    font-size: 12px;
    margin-bottom: 5px;
}

.product-builders-info-panel {
    display: flex;
    padding: 5px;
    background-color: rgba(135, 207, 235, 0.495);
    
    border-radius: 5px;
}

.product-single-builder {
    padding: 5px;
    display: flex;
    flex-direction: column;
    line-height: 12px;
    align-items: center;

    margin-right: 5px;
}

.product-build-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.product-builder-element {
    margin-bottom: 3px;
    
}

.product-builder-name {
    font-size: 12px;

}

.product-builder-job-element {
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 5px;
    font-size: 12px;
    height: 9px;
    -webkit-transform-origin-y: 0;
    height: 11px;
    margin-right: 3px;
}

.product-builder-job {
    visibility: hidden;
    padding: 5px;
    position: absolute;
    margin-top: 2px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition:all 100ms;
}

.product-builder-job-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
}
.product-builder-job-link-text {
    font-size: 12px;
    position: relative;
    text-align: center;
    width: 100%;
}

.product-builder-job-link {
    text-align: center;
}

.product-builder-job-element-text {
    scale: 0.9;
}

.product-builder-job-title {
    text-align: left;
    padding: 3px 0;
    font-weight: bolder;
}

.product-builder-job-link:hover > .product-builder-job {
    opacity: 1;
    visibility: visible;
    box-shadow: 0 0 10px grey;
    z-index: 1;
}

.product-versions {
    display: flex;
    margin-top: 6px;
}

.product-versions-element {
    box-shadow: 0 0 10px grey;
    border-radius: 10px;
    width: calc(50% - 14px);
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;


}

.product-versions-element:last-of-type {
    margin-left: auto;
}

.pve-browser-icon {
    width: 50px;
    height: 50px;
}

.pve-ul-title {
    line-height: 14px;
    font-weight: bold;
}

.pve-ul-element {
    display: flex;
    align-items: center;
    font-size: 12px;
}

.pve-ul {
    text-align: center;
    width: 200px;
}

.pve-ul-kv-right {
    margin-left: auto;
}

.product-supercow {
    margin-top: 6px;
    padding: 5px;
    width: calc(100% - 10px);
    text-align: center;
}

.product-supercow-title {

    font-size: 12px;
}

.product-supercow-text {
    display: flex;
    justify-content: center;
}

.product-supercow-super {
    margin-top: 0;
    color: red;
    font-size: 60px;
}
.product-supercow-level {
    color: yellow;
    font-size: 60px;
}
.product-supercow-cow {
    color: blue;
    font-size: 60px;
}
.product-supercow-power {
    color: green;
    font-size: 60px;
}

.product-supercow-line {
    display: flex;
}

.product-supercow-font {
    line-height: 60px;
}

.product-supercow-thanks {
    margin-top: 3px;
    border: 2px solid blue;
    border-radius: 5px;
    background-color: lightblue;
    padding: 2px;
    padding-left: 7px;
}

.supercow-thanks-title {
    color: blue;
    text-align: left;
    font-size: 25px;
    justify-self: left;
}

.supercow-thanks-area {
    display: flex;
    justify-content: center;
}

.supercow-thanks-element {
    margin-left: 5px;
    margin-right: 5px;
    line-height: 15px;
}

.ske-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.ske-name {
    font-weight: bold;
}

.ske-desc {
    text-align: center;
    font-size: 12px;
    width: 100px;
}
</style>
