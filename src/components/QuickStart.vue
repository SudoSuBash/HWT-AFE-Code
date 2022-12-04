<template>
  <div class="QuickStartNav">
    <div class="QSTNavLeft">
      <div class="QSTElement QSTNavTitle">
        <label><img class="QSTNavStarterIcon" src="/misc/Starter/StartIcon.png" />
        </label>
        <div>
          <span style="color:red;">新</span><span style="color:yellow">手</span><span style="color:green">教</span><span
            style="color:blue">程</span><span style="color:purple">目</span><span style="color:orange">录</span>
        </div>
      </div>
      <div class="QSTElement QSTSelectLists">
        <div class="QSTNavSelectTitle">欢迎来到 HWT!<br>这是新手教程,尽情探索一下吧!</div>
        <ul>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>从</label>
              <label><span style="font-weight: bolder;
                                font-style:oblique;
                                margin:0 5px;
                                color: royalblue;">Start</span></label>
              <label>键开始!</label>
            </div>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                快速入门HWT的配置器!
              </label>
              <span class="QSTSelectSlide">⬇️</span>
            </div>
            <ul class="QSTSelectSecondMenu">
              <li>
                <div class="QSTSelectSecondEleText">
                  <label>GUI界面</label>
                </div>
              </li>
              <li>
                <div class="QSTSelectSecondEleText">
                  <label>功能入口点</label>
                </div>
              </li>
              <li>
                <div class="QSTSelectSecondEleText">
                  <label>应用程序</label>
                </div>
              </li>
            </ul>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                不想配置?点我就行!
              </label>
              <span class="QSTSelectSlide">⬇️</span>
            </div>

            <ul class="QSTSelectSecondMenu">
              <li>
                <div class="QSTSelectSecondEleText">
                  <label>快速配置简介</label>
                </div>
              </li>
              <li>
                <div class="QSTSelectSecondEleText">
                  <label>快速配置用法</label>
                </div>
              </li>
            </ul>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                庞大的资源仓库
              </label>
              <span class="QSTSelectSlide">⬇️</span>
            </div>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                账户使用帮助...
              </label>
              <div class="QSTSelectSlide">⬇️</div>
            </div>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                亿些疑难杂症...
              </label>
              <div class="QSTSelectSlide">⬇️</div>
            </div>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                开发组的博客...
              </label>
            </div>
          </li>
          <li class="QSTSelectElement">
            <div class="QSTSelectElementIntro">
              <label>
                关于HWT及其开发组...
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.QuickStartNav {
  color: white;
  width: 250px;
  height: 100%;
  background-color: rgba(28, 28, 28, 0.789);
}

.QSTNavTitle {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  justify-content: center;
  padding-top: 20px;
}

.QSTNavStarterIcon {
  display: block;
  width: 125px;
  height: 125px;
  margin-left: auto;
  margin-right: auto;
}

.QSTSelectLists {
  overflow-y: auto;
}

.QSTSelectLists {
  display: block;
  width: 100%;
  text-decoration: none;
  list-style: none;

}

.QSTSelectElement {
  color: rgba(218, 218, 218, 0.731);
  display: block;


  transition: all 200ms;
}

.QSTSelectElementIntro {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  transition: all 300ms;
  align-items: center;
}

.QSTSelectElementIntro:hover {
  color: white;
  background-color: rgba(165, 165, 165, 0.433);
}

.QSTSelectSlide {
  margin-left: auto;
  margin-right: 15px;
  margin-bottom: 1px;
  font-size: 12px;
}

.QSTNavSelectTitle {
  -webkit-transform-origin-x: 0;
  transform: scale(0.7);
  margin-left: 15px;
}

.QSTSelectSecondMenu {
  background-color: rgba(78, 78, 78, 0.439);
}

.QSTSelectSecondMenu>li {
  font-size: 12;
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  list-style: none;
  transition: all 200ms;
}

.QSTSelectSecondEleText {
  -webkit-transform-origin-x: 0;
  transform: scale(0.8);
}

.QSTSelectSecondMenu>li:hover {
  background-color: rgba(117, 117, 117, 0.634);
  color: white;
}

.QSTElement>ul {
  overflow-y: auto;
}

.QSTNavLeft {
  overflow-y: auto;
  height: 100%;
}
</style>
