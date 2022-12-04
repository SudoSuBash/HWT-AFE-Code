<template>
    <slot name="window"></slot>
</template>

<style>
.WMLLeftSide {
    position: relative;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.25);
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
}

.WMLLeftTitle {
    font-size: 40px;
    padding-top: 60px;
    padding-bottom: 12px;
    color: black;
    font-weight: bold;
}

.WMLChooseBar {
    margin-top: 10px;
}
.WMLSelectable {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0);
    transition: all 300ms;
}

.WMLSelectable:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.WMLSelectIcon {
    width: 20px;
    height: 20px;
    
}

.WMLSelectIconLabel {
    width: 20px;
    height: 20px;
    margin-left: 5px;
}

.WMLSelectText {
     margin-left: 5px;
}

.WMLChooseSearchBox {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    outline: none;
    border: none;
    width: 100%;
    padding: 5px 7px;
    font-size: 15px;
    display: block;
}

.WMLSelectCount {

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 8px;

    font-size: 12px;
    font-weight: bold;

    color: white;

    height: 15px;
}

.WMLBottomInfo {
    
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0%;
    transform: scale(0.7);
    bottom: 2px;
    color: wheat;
    font-size: 12px;
    line-height: 10px;
    transition: all 500ms;
}

.WMLBottomInfo:hover {
    color: black;
}

.WMMainFrame {
    position: absolute;
    width: calc(100% - 280px);
    left: 280px;
    top: 0;
    height: 100%;
    min-width: 700px;
}

.WMLSeparator {
    border: none;
    height: 2px;
    background-color: rgb(0,0,0,0.75);
    border-radius: 50%;
    margin: 5px 0 ;
}

.full-window {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.612);
    z-index: 12;
    overflow-y: auto;
}
</style>
