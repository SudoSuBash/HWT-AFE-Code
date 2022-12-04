<template>
  <NAQNav />
  <NAQWindow class="WindowArea">
    <template #window>
      <div class="WMLLeftSide">
        <div class="WMLLeftTitle">
          邮件
        </div>
        <div class="WMLChooseSearch">
          <input type="search" class="WMLChooseSearchBox" placeholder="搜索邮件...">
        </div>
        <div class="WMLChooseBar">
          <div class="WMLSelectable">
            <label class="WMLSelectIconLabel"><img src="/misc/MailIcon/ReadMail.png" class="WMLSelectIcon"></label>
            <div class="WMLSelectText"><label>已读邮件</label></div>
            <div class="WMLSelectCount Green"><label>114</label></div>
          </div>
          <div class="WMLSelectable">
            <label class="WMLSelectIconLabel"><img src="/misc/MailIcon/NoReadMail.png" class="WMLSelectIcon"></label>
            <div class="WMLSelectText"><label>未读邮件</label></div>
            <div class="WMLSelectCount Blue"><label>514</label></div>
          </div>
          <div class="WMLSelectable">
            <label class="WMLSelectIconLabel"><img src="/misc/MailIcon/ImpMail.png" class="WMLSelectIcon"></label>
            <div class="WMLSelectText"><label>重要邮件</label></div>
            <div class="WMLSelectCount Red"><label>1919</label></div>
          </div>
          <div class="WMLSelectable">
            <label class="WMLSelectIconLabel"><img src="/misc/MailIcon/RubbishMail.png" class="WMLSelectIcon"></label>
            <div class="WMLSelectText"><label>垃圾邮件</label></div>
            <div class="WMLSelectCount HMLRubbishCount Glass"><label>810</label></div>
          </div>
        </div>
        <div class="WMLBottomInfo">
          <div class="WMLBottomInfoText"><label>此功能版本:ML-T1(HM22A1)</label></div>
        </div>
      </div>
      <div class="WMMainFrame">
        <div class="WindowHead HMMFOpNav">
          <div class="HMMFOperarte">
            <div class="HMMFOperateBtn"></div>
            <div class="HMMFOperateBtn"></div>
            <div class="HMMFOperateBtn"></div>
          </div>
          <div class="HMMFHeadNav">
            <div class="HMMFMailState">
              <div class="HMMFMailOpenInfo HMMFBorderRect">
                <span>已经打开邮件:Welcome To HWT!</span>
              </div>
              <div class="HMMFMailIsImportant HMMFBorderRect">
                <span>重要邮件!</span>
              </div>
              <div class="WindowHeadMain WhiteBorder HMMFHead">
                <div class="WindowIcon">
                  <label><img src="/misc/Starter/StartIcon.png"></label>
                </div>
                <div class="WindowTitle WhiteText">
                  邮件
                </div>
              </div>
            </div>
            <div class="HMMFMailInfo">
              <div class="HMMFMailInfoContainer">
                <div class="HMMFMailInfoE">
                  <span>抄送</span>
                  <div class="HMMFShowBox">The author of HWT,Sudo-su-Bash</div>
                </div>
                <div class="HMMFMailInfoE">
                  <span>收件人</span>
                  <div class="HMMFShowBox">User114514-1919810</div>
                </div>
                <div class="HMMFMailInfoE">
                  <span>主题</span>
                  <div class="HMMFShowBox">Welcome to HWT!</div>
                </div>
                <div class="HMMFMailInfoE">
                  <span>发送时间</span>
                  <div class="HMMFShowBox">2023-05-23 09:41:25</div>
                </div>
                <div class="HMMFMailInfoE">
                  <span>过期时间</span>
                  <div class="HMMFShowBox">Not Avaliable</div>
                </div>
              </div>
              <div class="HMMFMailInfoState">
                <div class="HMMFMailInfoStateContainer">
                  <span class="HMMFStateText">状态</span>
                  <div class="HMMFMailInfoStateE">
                    <span class="HMMFMailInfoStateIcon HMMFMailYes">Y</span>
                    <span class="HMMFMailInfoStateTxt">读取邮件状态</span>
                  </div>
                  <div class="HMMFMailInfoStateE">
                    <span class="HMMFMailInfoStateIcon HMMFMailNo">N</span>
                    <span class="HMMFMailInfoStateTxt">同意邮件状态</span>
                  </div>
                  <div class="HMMFMailInfoStateE">
                    <span class="HMMFMailInfoStateIcon HMMFMailNA">N/A</span>
                    <span class="HMMFMailInfoStateTxt">奖励领取状态</span>
                  </div>
                  <div class="HMMFMailInfoStateE">
                    <span class="HMMFMailInfoStateIcon HMMFMailNA">N/A</span>
                    <span class="HMMFMailInfoStateTxt">投票已投状态</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="HMMFbody">
          <div class="HMMFBTitle">
            欢迎来到HWT!
          </div>
          <hr>
          <div class="HMMFBSubject">
            <p class="HMMFBContentNoIndent">你好,User114514-1919810:</p>
            <p class="HMMFBContentPara">欢迎来到HWT!这是你在HWT星球的第一天,我特地做了这封邮件以祝贺你来到HWT.</p>
            <p class="HMMFBContentPara">在这儿,你将会获得超!级!牛!力!(致敬apt软件管理包和牛父)</p>
            <p class="HMMFBContentPara">现在,就由你来尽情探索一下吧!</p>
            <p class="HMMFBContentPara">
              首先,来看一下HWT的功能部分.以下内容可能你会感兴趣:
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                1.多种多样的配置器</a>
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                2.从资源仓库里面下载kexts,driver和主题...</a>
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                3.DSDT的线上编译,打补丁和改错...(仅在4级以上可用)</a>
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                4.作者及其工作室的博客</a>
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                5.黑苹果HWT论坛系统</a>
            </p>
            <p class="HMMFBContentFourEM">
              <a href="#">
                <i class="bi bi-arrow-down-right-circle"></i>
                6.快速及方便的配置选项...</a>
            </p>
            <p class="HMMFBContentPara">
              遇到一些新手问题?建议你可以去&nbsp;<a href="#"><i class="bi bi-arrow-down-right-circle"></i>
                阅读新手教程!</a>
            </p>
            <p class="HMMFBContentPara">
              遇到一些Bug?&nbsp;<a href="#"><i class="bi bi-arrow-down-right-circle"></i>
                给HWT予反馈!</a>(注意,为了防止恶意访问,Dragon Studio设定了限定反馈次数,每天每个账户限制反馈<span style="color:red">3</span>次)
            </p>
            <p class="HMMFBContentPara">
              还有,我强烈建议你去
              <a href="#"><i class="bi bi-arrow-down-right-circle"></i>
                绑定邮箱</a>,因为绑定邮箱可以获得丰厚奖励!&nbsp;
              <a href="#"><i class="bi bi-arrow-down-right-circle"></i>
                点击查看详情...</a>
            </p>
            <p class="HMMFBContentPara">
              感谢你对于Sudo-su-Bash的陪伴!你的注册将会给一个到现在为止一直缺被爱和被尊重的人--Sudo-su-Bash,最好的开发动力!
            </p>
            <p class="HMMFBContentPara">
              在这封信的最后,Sudo-su-Bash再次祝你有一个愉快的HWT星球的旅途!旅途愉快!
            </p>
            <p class="HMMFBContentEnd">
              <span>你忠实的</span><br>
              <span>朋友</span><br>
              <span>Sudo-su-Bash</span><br>
              <span>2023-05-23</span>
            </p>
          </div>
        </div>
      </div>
    </template>
  </NAQWindow>
</template>

<script setup lang="ts">
import NAQNav from '@/components/NAQNav.vue'
import NAQWindow from '@/components/NAQWindow.vue'
/*
        $(document).ready(()=>{
            $(".NavSearchIcon").click(()=>{
                document.getElementsByClassName("NavEndSearchBox")[0].focus();
            })
        })*/
</script>

<style>
.HMLRubbishCount {
  color: black;
}

.HMMFOpNav {
  background-color: rgba(0, 0, 0, 0.492);
  height: 150px;
}

.HMMFHeadNav {
  width: 100%;
}

.HMMFOperarte {

  padding-left: 5px;
  padding-right: 5px;
  top: 0;
}

.HMMFOperateBtn {
  width: 25px;
  height: 25px;
  background-color: aliceblue;
  border-radius: 50%;
  margin-top: 3px;
}

.HMMFMailInfo {
  width: calc(100% - 10px);
  padding: 5px;
  padding-top: 2px;
  display: flex;
}

.HMMFMailInfoE {
  margin-bottom: 5px;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
}

.HMMFMailInfoE>span {
  font-size: 13px;
  color: white;
  width: 60px;
}

.HMMFShowBox {
  margin-left: 10px;
  height: 15px;
  border-radius: 3px;
  border: 3px solid rgb(255, 183, 0);
  width: 95%;
  background-color: yellow;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.HMMFMailInfoContainer {
  width: 100%;
  height: calc(100% - 31px);
}

.HMMFMailInfoState {
  padding-left: 5px;
  width: 200px;
}

.HMMFMailInfoStateContainer {
  width: calc(100% - 14px);
  border: 2px solid rgba(0, 0, 255, 0.391);
  background-color: rgba(0, 208, 255, 0.397);
  padding: 5px;
}

.HMMFStateText {
  color: white;
}

.HMMFMailInfoStateE {
  height: 15px;
  display: flex;
  font-size: 12px;

}

.HMMFMailInfoStateIcon {
  width: 25px;
}

.HMMFMailYes {
  color: rgb(20, 255, 20);
}

.HMMFMailNo {
  color: red;
}

.HMMFMailNA {
  color: gold;
}

.HMMFMailInfoStateTxt {
  color: pink;
  font-weight: bold;
}

.HMMFMailState {
  display: flex;
}

.HMMFMailIsImportant {
  background-color: red;
}

.HMMFBorderRect {
  border-radius: 10px;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  height: 15px;
  font-size: 12px;
  margin-right: 5px;
  color: white;
}

.HMMFBorderRect>span {
  scale: 0.9;
}

.HMMFMailOpenInfo {
  background-color: rgba(255, 166, 0, 0.655);
}

.HMMFBody {
  width: calc(100% - 30px);
  height: calc(100% - 180px);
  overflow-y: auto;
  padding: 15px;
}

/*HMMFB系列元素的开始*/
.HMMFBTitle {
  font-size: 30px;
  font-weight: bold;
}

.HMMFBSubject {

  font-size: 14px;
  margin-top: 5px;
  line-height: 20px;
}

.HMMFBContentPara {
  text-indent: 2em;
}

.HMMFBContentFourEM {
  display: flex;
  align-items: center;
  text-indent: 4em;
}

.HMMFBContentIconA {
  height: 15px;
  width: 15px;
}

.HMMFBContentEnd {
  float: right;
  margin-left: auto;
  margin-right: 0;
}

.HMMFBContentEnd>span {
  float: right;
}
</style>
