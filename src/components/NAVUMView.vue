<template>
  <ul class="UserSecondMenu">
    <li class="UserSecondElement UserInfoElement">
      <div class="UserLargeImgContainer">
        <img class="UserLargeImg" src="/misc/DragonStudio.png">
      </div>
      <div class="UserName">
        <span>腾龙Dragon工作室</span>
      </div>
    </li>
    <li class="UserSecondElement UserStateElement">
      <div class="UserScore">
        <img class="UserScoreIconShow" src="/misc/UMIcons/ScoreIcon.png">
        <div class="UserScoreCount">100</div>
      </div>
      <div class="UserLevel"></div>
    </li>
    <li class="UserSecondElement UserLevelShowElement">

    </li>
    <li class="UserSecondElement UserElementCanSelectable">
      <img class="UserElementIcon" src="/misc/UMIcons/Info.png">
      <div class="UserElementInst">
        <label>用户信息</label>
      </div>
    </li>
    <li class="UserSecondElement UserElementCanSelectable">
      <img class="UserElementIcon" src="/misc/UMIcons/Score.png">
      <div class="UserElementInst">
        <label>积分管理</label>
      </div>
    </li>
    <li class="UserSecondElement UserElementCanSelectable">
      <img class="UserElementIcon" src="/misc/UMIcons/Ban.png">
      <div class="UserElementInst">
        <label>封禁记录</label>
      </div>
    </li>
    <li class="UserSecondElement UserElementCanSelectable">
      <img class="UserElementIcon" src="/misc/UMIcons/Feedback.png">
      <div class="UserElementInst">
        <label>给予反馈</label>
      </div>
    </li>
    <li class="UserSecondElement UserElementCanSelectable">
      <img class="UserElementIcon" src="/misc/UMIcons/Settings.png">
      <div class="UserElementInst">
        <label>设置</label>
      </div>
    </li>
  </ul>
</template>

<style>
.UserLargeImg {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 3px solid black;
}

.UserLargeImgContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.UserInfoElement {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.UserSecondElement {
  display: flex;
  justify-content: left;
  border-radius: 5px;
  align-items: center;
}

.UserElementCanSelectable {
  transition: all 100ms;
}

.UserElementCanSelectable:hover {
  background-color: darksalmon;
}

.UserElementInst {
  margin-left: 5px;
}

.UserElementIcon {
  width: 15px;
  height: 15px;
  padding-left: 10px;
}

.UserStateElement {
  display: flex;
  justify-content: center;
  align-items: center;
}

.UserScore {
  display: flex;
  align-items: center;
}

.UserScoreIconShow {
  width: 15px;
  height: 15px;
}

.UserScoreCount {
  margin-left: 5px;
  font-weight: bolder;
}

.UserName {
  font-size: 13px;
  font-weight: bold;
}

.UserSecondMenu {
  visibility: hidden;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.65);
  position: absolute;
  width: 200px;
  padding: 5px;
  right: 0;
  border-radius: 5px;
  border: 1px solid black;
  transition: all 100ms;
}

.NavUserInfo:hover>ul {
  visibility: visible;
  opacity: 1;
}
</style>
