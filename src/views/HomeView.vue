<template>
    <NAQNav />
    <NAQWindow class="WindowArea">
        <template #window>
        <div class="WindowHead">
            <div class="WindowHeadMain">
                <div class="WindowIcon">
                    <label><img src="/misc/Starter/StartIcon.png"></label>
                </div>
                <div class="WindowTitle">
                    新手教程
                </div>
            </div>
        </div>

        <div class="Windowbody WQuickStart">
            <QuickStart />
        </div>
        </template>
    </NAQWindow>
</template>

<script setup lang="ts">
import NAQNav from '@/components/NAQNav.vue'
import NAQWindow from '@/components/NAQWindow.vue'
import QuickStart from '@/components/QuickStart.vue'
/*
    $(document).ready(()=>{
        $(".NavSearchIcon").click(()=>{
            
            document.getElementsByClassName("NavEndSearchBox")[0].focus();
        })
    })*/
</script>
